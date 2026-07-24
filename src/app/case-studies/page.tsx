import Link from 'next/link';
import { ArrowRight, Building2, CheckCircle2, PhoneCall, Sprout, Handshake } from 'lucide-react';
import Footer from '@/components/Footer';

/* =========================================================
   /case-studies — „Realizacje": prawdziwe, anonimowe wdrożenia.
   Server component, zero zdjęć stockowych, zero zmyślonych metryk.
   Style w 100% na tokenach motywu (light + dark).
   ========================================================= */

const BASE = 'https://infinityteam.io';

const REALIZACJE = [
  {
    id: 'przewoznik-autobusowy',
    icon: PhoneCall,
    sector: 'Transport autobusowy',
    client: 'Regionalny przewoźnik autobusowy',
    title: 'Agent głosowy z rozkładami jazdy — telefon odbierany 24/7',
    problem:
      'Pytania o rozkłady jazdy trafiały do biura przewoźnika, które pracuje w standardowych godzinach. Po ich zakończeniu pasażerowie zostawali bez informacji, a w godzinach szczytu linia bywała zajęta.',
    solution:
      'Agent głosowy AI z naturalną polską mową (technologia ElevenLabs), podłączony do telefonii przewoźnika. Pasażer mówi własnymi słowami, skąd i dokąd chce jechać, a agent podaje najbliższe odjazdy i odpowiada na pytania o trasę — bez drzewka „wciśnij 1".',
    result:
      'Infolinia odbiera każde połączenie — także po godzinach, w weekendy i wtedy, gdy dzwoni kilka osób naraz. Pracownicy biura zajmują się sprawami, które faktycznie wymagają człowieka.',
    related: { label: 'Zobacz usługę: Agent głosowy AI', href: '/uslugi/agent-glosowy-ai' },
  },
  {
    id: 'kadry-place',
    icon: Building2,
    sector: 'Kadry i płace',
    client: 'Dział HR / obsługa kadrowo-płacowa',
    title: 'Agentka AI do kadr i płac z bazą polskiego prawa pracy',
    problem:
      'Kadry i płace to ciągłe pilnowanie terminów ZUS i PIT, zmieniające się przepisy i powtarzalne dokumenty. Sprawdzanie każdej zmiany w prawie zajmuje czas, a pomyłka w terminie kosztuje.',
    solution:
      'Agentka AI z bazą aktualnego polskiego prawa pracy, aktualizowaną przy zmianach przepisów. Pilnuje terminów ZUS i PIT, pomaga wypełniać dokumenty kadrowe i odpowiada na pytania z zakresu prawa pracy — a specjalista kadrowy zatwierdza efekty jej pracy.',
    result:
      'Terminy i dokumenty przestały zależeć od pamięci jednej osoby. Zespół korzysta z agentki jak z dodatkowej specjalistki — dostępnej od ręki, także przy nietypowych pytaniach.',
    related: { label: 'Zobacz usługę: Automatyzacja HR', href: '/uslugi/automatyzacja-hr' },
  },
  {
    id: 'gospodarstwo-rolne',
    icon: Sprout,
    sector: 'Rolnictwo',
    client: 'Gospodarstwo rolne',
    title: 'Aplikacja AI do zarządzania gospodarstwem rolnym',
    problem:
      'Zarządzanie gospodarstwem to wiele decyzji naraz, a gotowe narzędzia rzadko przystają do realiów konkretnego gospodarstwa — dane są rozproszone, a część rzeczy trzyma się w zeszycie i w głowie.',
    solution:
      'Dedykowana aplikacja AI zbudowana na miarę, która wspiera codzienne decyzje i zarządzanie gospodarstwem — od zebranych w jednym miejscu danych po podpowiedzi w bieżącej pracy.',
    result:
      'Aplikacja działa produkcyjnie i jest rozwijana wspólnie z klientem — zakres rośnie w miarę tego, jak sprawdza się w codziennej pracy gospodarstwa.',
    related: { label: 'Zobacz usługę: Automatyzacja procesów AI', href: '/uslugi/automatyzacja-procesow-ai' },
  },
  {
    id: 'platforma-inwestorska',
    icon: Handshake,
    sector: 'Startupy i inwestycje',
    client: 'Platforma cyfrowa',
    title: 'Platforma kojarząca startupy z inwestorami',
    problem:
      'Założyciele szukają kapitału, inwestorzy szukają projektów — a jedni i drudzy tracą czas na ręczne przeszukiwanie list i dopasowywanie na wyczucie.',
    solution:
      'Platforma internetowa, w której AI kojarzy startupy z inwestorami na podstawie profili i realnego dopasowania. Projekt poprowadziliśmy od pomysłu do działającego produktu — typowe wdrożenie na miarę.',
    result:
      'Obie strony spotykają się w jednym miejscu, a propozycje dopasowań podsuwa system — zamiast godzin ręcznego przeglądania profili.',
    related: { label: 'Zobacz: Cennik wdrożeń AI', href: '/cennik' },
  },
];

const RELATED_LINKS = [
  { label: 'Agent głosowy AI', href: '/uslugi/agent-glosowy-ai' },
  { label: 'Chatbot AI dla firm', href: '/uslugi/chatbot-ai' },
  { label: 'Automatyzacja procesów AI', href: '/uslugi/automatyzacja-procesow-ai' },
  { label: 'Automatyzacja HR', href: '/uslugi/automatyzacja-hr' },
  { label: 'Cennik wdrożeń AI', href: '/cennik' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Realizacje', item: `${BASE}/case-studies` },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Realizacje — wdrożenia agentów AI',
      itemListElement: REALIZACJE.map((r, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'CreativeWork',
          name: r.title,
          description: r.solution,
          url: `${BASE}/case-studies#${r.id}`,
        },
      })),
    },
  ],
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen relative" style={{ background: 'var(--bg-page)', color: 'var(--fg)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top bar */}
      <header className="max-w-4xl mx-auto px-6 pt-8 pb-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
          <ArrowRight className="w-4 h-4 rotate-180" />
          Strona główna
        </Link>
        <nav aria-label="breadcrumb" className="text-xs text-white/40">
          <Link href="/" className="hover:text-white/70">Infinity Tech</Link>
          <span className="mx-2">/</span>
          <span className="text-white/70">Realizacje</span>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-20">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-10 mb-6" style={{ letterSpacing: '-0.022em' }}>
          Realizacje — wdrożenia agentów AI, które działają na produkcji
        </h1>
        <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-3xl">
          Cztery prawdziwe wdrożenia u naszych klientów — opisane anonimowo, bez nazw firm i bez
          wymyślonych procentów. Zamiast tego konkret: jaki był problem, co dokładnie zbudowaliśmy
          i co się zmieniło w codziennej pracy.
        </p>

        <div className="flex flex-wrap gap-4 mb-14">
          <Link
            href="/#kontakt"
            className="px-7 py-3.5 rounded-full font-semibold text-white bg-[#2E4AAD] hover:bg-[#1A2461] transition-colors inline-flex items-center gap-2"
            style={{ color: '#fff' }}
          >
            Umów bezpłatną konsultację
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/cennik"
            className="px-7 py-3.5 rounded-full font-semibold inline-flex items-center gap-2 transition-colors"
            style={{ color: 'var(--accent-text)', border: '1px solid var(--border-soft)' }}
          >
            Sprawdź cennik wdrożeń
          </Link>
        </div>

        {/* Realizacje */}
        <div className="space-y-8 mb-14">
          {REALIZACJE.map((r) => {
            const Icon = r.icon;
            return (
              <article
                key={r.id}
                id={r.id}
                className="rounded-3xl p-6 md:p-8 scroll-mt-8"
                style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)', boxShadow: 'var(--shadow-card, none)' }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(46, 74, 173, 0.12)', color: 'var(--accent-text)' }}
                  >
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-sm font-medium" style={{ color: 'var(--accent-text)' }}>
                    {r.sector}
                  </span>
                  <span
                    className="ml-auto inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full"
                    style={{ color: 'var(--accent-text)', border: '1px solid var(--border-soft)' }}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Na produkcji
                  </span>
                </div>

                <h2 className="text-xl md:text-2xl font-bold mb-1.5" style={{ letterSpacing: '-0.012em' }}>
                  {r.title}
                </h2>
                <p className="text-sm text-white/50 mb-6">Klient: {r.client}</p>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-1.5">Problem</h3>
                    <p className="text-white/70 leading-relaxed">{r.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-1.5">Co zbudowaliśmy</h3>
                    <p className="text-white/70 leading-relaxed">{r.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-1.5">Efekt</h3>
                    <p className="text-white/70 leading-relaxed">{r.result}</p>
                  </div>
                </div>

                <Link
                  href={r.related.href}
                  className="inline-flex items-center gap-2 mt-6 text-sm font-medium transition-colors hover:text-white"
                  style={{ color: 'var(--accent-text)' }}
                >
                  {r.related.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Dlaczego anonimowo? */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ letterSpacing: '-0.012em' }}>
            Dlaczego anonimowo?
          </h2>
          <p className="text-white/70 leading-relaxed mb-4">
            Część naszych klientów nie zgadza się na publikację nazwy firmy — i to szanujemy. Zamiast
            wymyślać loga i cytaty, opisujemy to, co możemy pokazać uczciwie: branżę, zakres prac
            i użyte technologie.
          </p>
          <p className="text-white/70 leading-relaxed">
            Nie publikujemy też zmyślonych statystyk. Jeśli nie możemy czegoś rzetelnie policzyć,
            opisujemy efekt słowami — tak, jak wygląda w praktyce. Szczegóły konkretnych wdrożeń
            omawiamy na bezpłatnej rozmowie.
          </p>
        </section>

        {/* Powiązane strony */}
        <section className="mb-14">
          <h2 className="text-xl font-bold mb-4">Zobacz także</h2>
          <div className="flex flex-wrap gap-3">
            {RELATED_LINKS.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="px-4 py-2 rounded-full text-sm transition-colors hover:text-white"
                style={{ color: 'var(--accent-text)', border: '1px solid var(--border-soft)' }}
              >
                {r.label}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          className="rounded-3xl p-8 md:p-12 text-center"
          style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)', boxShadow: 'var(--shadow-card, none)' }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ letterSpacing: '-0.012em' }}>
            Masz podobny problem w swojej firmie?
          </h2>
          <p className="text-white/60 mb-7 max-w-xl mx-auto">
            Opowiedz nam, co zabiera Twojemu zespołowi najwięcej czasu. Pierwsza konsultacja jest
            bezpłatna — po niej dostaniesz konkretną wycenę, wdrożenia zaczynają się od 5 000 zł netto.
          </p>
          <Link
            href="/#kontakt"
            className="px-8 py-4 rounded-full font-semibold text-white bg-[#2E4AAD] hover:bg-[#1A2461] transition-colors inline-flex items-center gap-2"
            style={{ color: '#fff' }}
          >
            Porozmawiajmy o Twojej firmie
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
