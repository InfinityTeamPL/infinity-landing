import Link from 'next/link';
import { ArrowRight, Building2, CheckCircle2, ExternalLink, Mic, Server, Sprout } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Footer from '@/components/Footer';

/* =========================================================
   /case-studies — „Realizacje": prawdziwe wdrożenia i produkty.
   Trzy z publicznymi demami (PKS Gryfice, Superkadrowa, ClawLabs),
   jedno wdrożenie pod NDA. Server component, zero zdjęć stockowych,
   zero zmyślonych metryk. Style w 100% na tokenach motywu (light + dark).
   ========================================================= */

const BASE = 'https://www.infinityteam.io';

type Realizacja = {
  id: string;
  icon: LucideIcon;
  sector: string;
  client: string;
  badge: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  demo: { label: string; href: string } | null;
  related: { label: string; href: string };
};

const REALIZACJE: Realizacja[] = [
  {
    id: 'pks-gryfice',
    icon: Mic,
    sector: 'Transport autobusowy',
    client: 'Demo publiczne: asystent na rozkładach PKS Gryfice',
    badge: 'Demo publiczne',
    title: 'Głosowy asystent AI z rozkładami jazdy PKS Gryfice',
    problem:
      'Pytania o rozkłady jazdy trafiają do biura przewoźnika, które pracuje w standardowych godzinach. Po ich zakończeniu pasażerowie zostają bez informacji, a w godzinach szczytu linia bywa zajęta.',
    solution:
      'Głosowy asystent AI działający w przeglądarce w trybie push-to-talk (stack: ElevenLabs Conversational AI). Zna rozkłady z 6 przystanków w Gryficach, łącznie 276 odjazdów. Podaje godziny i dni kursowania, a przy każdej odpowiedzi cytuje źródło rozkładu i nie zmyśla, gdy czegoś nie wie.',
    result:
      'Demo jest publiczne. Wystarczy wejść na stronę, przytrzymać przycisk i zapytać o kurs własnymi słowami. Odpowiedź głosem przychodzi w kilka sekund, bez czekania na połączenie z biurem i bez drzewka „wciśnij 1".',
    demo: { label: 'Zobacz demo', href: 'https://pks-gryfice-demo.vercel.app/' },
    related: { label: 'Zobacz usługę: Agent głosowy AI', href: '/uslugi/agent-glosowy-ai' },
  },
  {
    id: 'superkadrowa-janina',
    icon: Building2,
    sector: 'Kadry i płace',
    client: 'Superkadrowa: produkt własny na naszej platformie ClawLabs',
    badge: 'Na produkcji',
    title: 'Superkadrowa (Janina): wirtualna kadrowa AI z polskim prawem pracy',
    problem:
      'Kadry i płace to ciągłe pilnowanie terminów ZUS i PIT, zmieniające się przepisy i powtarzalne dokumenty. Sprawdzanie każdej zmiany w prawie zajmuje czas, a pomyłka w terminie kosztuje.',
    solution:
      'Janina to wirtualna kadrowa AI, która rozmawia głosem lub na czacie po polsku, cytuje konkretne artykuły Kodeksu pracy i weryfikuje, czy przepis jest aktualny. Jej baza to 40+ aktów prawnych, 900+ dokumentów, 13 opracowań orzecznictwa Sądu Najwyższego, 17 wzorów dokumentów i 100+ zestawów danych GUS. Generuje dokumenty do druku (świadectwa, wypowiedzenia, wnioski) i pilnuje kalendarza terminów ZUS, PIT i PFRON.',
    result:
      'Każda firma dostaje dedykowaną instancję na serwerze w UE. Demo głosowe działa bez logowania. Z Janiną można porozmawiać od razu po wejściu na stronę.',
    demo: { label: 'Zobacz demo', href: 'https://superkadrowa.vercel.app' },
    related: { label: 'Zobacz usługę: Automatyzacja HR', href: '/uslugi/automatyzacja-hr' },
  },
  {
    id: 'gospodarstwo-rolne',
    icon: Sprout,
    sector: 'Rolnictwo',
    client: 'Klient: Gospodarstwo rolne (wdrożenie pod NDA)',
    badge: 'Na produkcji',
    title: 'Aplikacja AI do zarządzania gospodarstwem rolnym',
    problem:
      'Zarządzanie gospodarstwem to wiele decyzji naraz, a gotowe narzędzia rzadko przystają do realiów konkretnego gospodarstwa. Dane są rozproszone, a część rzeczy trzyma się w zeszycie i w głowie.',
    solution:
      'Dedykowana aplikacja AI zbudowana na miarę, która wspiera codzienne decyzje i zarządzanie gospodarstwem: od zebranych w jednym miejscu danych po podpowiedzi w bieżącej pracy.',
    result:
      'Aplikacja działa produkcyjnie i jest rozwijana wspólnie z klientem, a zakres rośnie w miarę tego, jak sprawdza się w codziennej pracy gospodarstwa.',
    demo: null,
    related: { label: 'Zobacz usługę: Automatyzacja procesów AI', href: '/uslugi/automatyzacja-procesow-ai' },
  },
  {
    id: 'clawlabs',
    icon: Server,
    sector: 'SaaS, hosting agentów AI',
    client: 'ClawLabs: produkt własny Infinity Tech Group sp. z o.o.',
    badge: 'Na produkcji',
    title: 'ClawLabs, platforma managed hostingu agentów AI',
    problem:
      'Firmy chcą korzystać z agentów AI zbudowanych na open-source OpenClaw, ale samodzielne utrzymanie to serwery, aktualizacje, bezpieczeństwo kluczy API i integracje z kanałami komunikacji. Praca na cały zespół.',
    solution:
      'ClawLabs to managed hosting agentów AI: agent startuje w ok. 60 sekund, każdy na dedykowanym VPS-ie w izolowanym kontenerze. Do dyspozycji 13 kanałów komunikacji, 35+ modeli AI (Claude, GPT, Gemini, modele lokalne) i BYOK, czyli własne klucze API szyfrowane AES-256-GCM. Do wyboru chmura w UE (Hetzner, ISO 27001/SOC 2) albo instalacja on-premise.',
    result:
      'Platforma działa komercyjnie: plany Cloud od 399 zł/mies. (Premium), Pro za 799 zł i Ultra Pro za 1999 zł, z 5-dniowym okresem próbnym, płatnościami Stripe i polską fakturą VAT. Na ClawLabs działa m.in. Superkadrowa.',
    demo: { label: 'Zobacz stronę', href: 'https://clawlabs.pro' },
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
      name: 'Realizacje: wdrożenia agentów AI',
      itemListElement: REALIZACJE.map((r, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'CreativeWork',
          name: r.title,
          description: r.solution,
          url: `${BASE}/case-studies#${r.id}`,
          ...(r.demo ? { sameAs: r.demo.href } : {}),
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
        <Link href="/" className="flex items-center gap-2 py-1.5 text-sm text-white/60 hover:text-white transition-colors">
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
          Realizacje: wdrożenia agentów AI, które działają na produkcji
        </h1>
        <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-3xl">
          Cztery prawdziwe realizacje. Trzy z nich możesz kliknąć i przetestować samodzielnie:
          głosowego asystenta z rozkładami PKS Gryfice, wirtualną kadrową Superkadrową (Janinę)
          i naszą platformę ClawLabs. Zero wymyślonych procentów. Piszemy, jaki był problem,
          co dokładnie zbudowaliśmy i co się zmieniło w codziennej pracy.
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
                    {r.badge}
                  </span>
                </div>

                <h2 className="text-xl md:text-2xl font-bold mb-1.5" style={{ letterSpacing: '-0.012em' }}>
                  {r.title}
                </h2>
                <p className="text-sm text-white/50 mb-6">{r.client}</p>

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

                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6">
                  {r.demo && (
                    <a
                      href={r.demo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#2E4AAD] hover:bg-[#1A2461] transition-colors"
                      style={{ color: '#fff' }}
                    >
                      {r.demo.label}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <Link
                    href={r.related.href}
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
                    style={{ color: 'var(--accent-text)' }}
                  >
                    {r.related.label}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Dema publiczne i NDA */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ letterSpacing: '-0.012em' }}>
            Dema publiczne i NDA
          </h2>
          <p className="text-white/70 leading-relaxed mb-4">
            Część naszych projektów ma publiczne dema, więc nie musisz wierzyć nam na słowo:
            linkujemy wprost i możesz przetestować je samodzielnie, jak asystenta PKS Gryfice,
            Superkadrową czy platformę ClawLabs. Udostępniamy też demo pięciu branżowych
            asystentów głosowych (transport, medycyna, nieruchomości, usługi i rezerwacje,
            administracja):{' '}
            <a
              href="https://asystenci-glosowi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 transition-colors hover:text-white"
              style={{ color: 'var(--accent-text)' }}
            >
              porozmawiaj z nimi na żywo
            </a>
            .
          </p>
          <p className="text-white/70 leading-relaxed">
            Pozostałe wdrożenia realizujemy pod NDA. Wtedy opisujemy uczciwie branżę, zakres prac
            i użyte technologie, bez nazwy firmy. Nie publikujemy zmyślonych statystyk: jeśli nie
            możemy czegoś rzetelnie policzyć, opisujemy efekt słowami, tak jak wygląda w praktyce.
            Szczegóły konkretnych wdrożeń omawiamy na bezpłatnej rozmowie.
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
            bezpłatna. Po niej dostaniesz konkretną wycenę, a wdrożenia zaczynają się od 5 000 zł netto.
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
