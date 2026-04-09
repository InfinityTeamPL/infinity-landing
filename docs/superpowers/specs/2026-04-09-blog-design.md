# Blog Design Spec — Infinity Tech

**Data:** 2026-04-09  
**Status:** Zatwierdzony  
**Stack:** Next.js 14 (App Router), Notion API, HackerNews API, Dev.to API, Guardian API, Arxiv API, OpenAI API (gpt-4o-mini)

---

## Cel

Uruchomienie bloga firmowego Infinity Tech z dwoma warstwami treści:
1. **Własne artykuły** zarządzane przez Notion (bez kodowania przy publikacji)
2. **Automatyczny feed newsów AI** ze świata, pobierany z 4 darmowych API, streszczany po polsku przez OpenAI

Blog ma budować autorytet marki OpenCLAW i Infinity Tech, wspierać SEO, oraz dostarczać czytelnikom świeżą wartość bez potrzeby codziennego pisania.

---

## Architektura: Hybrid ISR + API cache

### Warstwa 1 — Artykuły własne (Notion → ISR)

- **CMS:** Notion Database (darmowy plan)
- **Integracja:** `@notionhq/client` SDK
- **Renderowanie:** Next.js ISR z `revalidate: 3600` (odświeżanie co 60 min)
- **SEO:** Strony pre-renderowane server-side — pełne meta tagi, OG tags

**Notion Database — schemat kolumn:**

| Kolumna | Typ | Opis |
|---|---|---|
| Title | title | Tytuł artykułu |
| Excerpt | rich_text | Krótki opis (150 znaków) |
| Category | select | OpenCLAW / AI / AI Agents / Technologie / Bezpieczeństwo |
| Date | date | Data publikacji |
| Author | rich_text | Imię i nazwisko autora |
| CoverImage | url | URL zdjęcia okładkowego |
| ReadTime | rich_text | np. "7 min" |
| Featured | checkbox | Czy artykuł jest wyróżniony (hero) |
| Published | checkbox | Flaga publikacji — odznaczone = szkic |
| Slug | rich_text | URL-friendly identyfikator (np. "openclaw-ai-agents-2025") |

**Flow:**
1. Autor pisze artykuł w Notion (edytor jak Word)
2. Zaznacza "Published"
3. Po max 60 minutach artykuł pojawia się na stronie automatycznie
4. Zero deployowania, zero kodowania

### Warstwa 2 — Newsy AI ze świata (API → cache → OpenAI)

**Endpoint:** `GET /api/news/feed` (Next.js API route)

**Źródła:**

| Źródło | API | Filtr | Limit |
|---|---|---|---|
| HackerNews | `hacker-news.firebaseio.com/v0` | topstories + filtr "AI" w tytule | 10 |
| Dev.to | `dev.to/api/articles` | tag: `ai` | 8 |
| The Guardian | `content.guardianapis.com/search` | q: "artificial intelligence" | 8 |
| Arxiv | `export.arxiv.org/api/query` | cat: `cs.AI` | 5 |

**Pipeline:**
1. Fetch z 4 źródeł równolegle (`Promise.all`)
2. Deduplikacja po tytule
3. Batch do GPT-4o-mini: generuje polskie streszczenie (2-3 zdania) dla każdego newsa
4. Wynik zapisywany do in-memory cache (`Map`) z TTL 2h
5. Kolejne requesty w oknie 2h serwowane z cache (zero kosztów OpenAI)

**Koszt OpenAI:** ~$0.001 per batch × 12 odświeżeń/dzień ≈ $0.36/mies.

---

## Struktura strony /blog

```
/blog
├── Nawigacja (dodać link "Blog" do głównego menu strony głównej)
├── SEKCJA A — Własne artykuły (z Notion, ISR)
│   ├── Featured post hero (wyróżniony artykuł)
│   ├── Filtrowanie po kategoriach + wyszukiwarka
│   └── Grid kart artykułów
├── SEKCJA B — "Aktualności AI ze świata" (nowa)
│   ├── Nagłówek sekcji z oznaczeniem "live"
│   └── Grid kart newsów (z PL streszczeniem, linkiem do oryginału)
└── Sidebar
    ├── Popularne artykuły
    ├── Newsletter
    └── Social follow
```

---

## Strona pojedynczego artykułu /blog/[slug]

- Fetch z Notion po `slug` polu
- Renderowanie bogatej treści Notion (nagłówki, listy, kod, obrazy)
- Użycie biblioteki `notion-to-md` lub własny renderer bloków
- ISR `revalidate: 3600`
- Full SEO: title, description, OG image z CoverImage

---

## Nowe pliki

| Plik | Akcja | Opis |
|---|---|---|
| `src/lib/notion.ts` | CREATE | Klient Notion, typy TypeScript, funkcje fetch |
| `src/lib/newsCache.ts` | CREATE | In-memory cache + fetch z 4 API + OpenAI summarization |
| `src/app/api/news/route.ts` | CREATE | GET endpoint zwracający newsy z cache |
| `src/app/blog/page.tsx` | EDIT | Podmiana hardcoded danych → fetch z Notion + NewsSection |
| `src/app/blog/[slug]/page.tsx` | CREATE | Strona pojedynczego artykułu |
| `src/components/NewsSection.tsx` | CREATE | Sekcja "Aktualności AI ze świata" |

---

## Zmienne środowiskowe (do .env.local)

```
NOTION_API_KEY=secret_...
NOTION_BLOG_DATABASE_ID=...
GUARDIAN_API_KEY=...          # darmowy klucz z open-platform.theguardian.com
# OPENAI_API_KEY już istnieje
# HackerNews i Dev.to nie wymagają klucza
```

---

## Nawigacja

Dodać link "Blog" do głównej nawigacji na stronie głównej (`src/app/page.tsx`) — aktualnie blog jest widoczny tylko w footerze.

---

## Co NIE jest w scope tej specyfikacji

- System komentarzy
- Paginacja (na start wystarczy grid)
- Panel admina (Notion to jest ten panel)
- Wielojęzyczność
- RSS feed strony

---

## Kryteria sukcesu

- [ ] Artykuł napisany w Notion pojawia się na stronie bez deployowania
- [ ] Sekcja newsów pokazuje aktualne treści z co najmniej 2 źródeł
- [ ] Polskie streszczenie widoczne dla każdego newsa
- [ ] Strona /blog/[slug] działa dla artykułów z Notion
- [ ] Link "Blog" widoczny w głównej nawigacji
