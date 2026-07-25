import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Stethoscope, Users, Bus, Building2, Scale, Store } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AI dla branż — gdzie agenci sprawdzają się najlepiej',
  description:
    'Przychodnie, rekrutacja, transport, usługi, administracja. Zobacz, jak agenci AI odbierają telefony i przejmują papierologię w konkretnych branżach.',
  alternates: { canonical: '/branze' },
  openGraph: {
    title: 'AI dla branż — Infinity Tech',
    description: 'Agenci głosowi i automatyzacja w przychodniach, rekrutacji, transporcie i usługach.',
    type: 'website',
  },
};

// Branże z dedykowaną stroną
const WITH_PAGE = [
  {
    icon: Stethoscope,
    href: '/branze/voicebot-dla-przychodni',
    title: 'Przychodnie i gabinety',
    lead: 'Rejestracja, która odbiera każde połączenie — także po godzinach. Agent umawia, przekłada i odwołuje wizyty, przypomina o terminach i odpowiada na pytania o przygotowanie do badań.',
  },
  {
    icon: Users,
    href: '/branze/ai-w-rekrutacji',
    title: 'Rekrutacja i agencje pracy',
    lead: 'Selekcja CV według Waszych kryteriów, wstępny screening i umawianie rozmów. Decyzje zostają po stronie rekrutera — AI zdejmuje z niego przeklikiwanie i telefony.',
  },
];

// Branże, w których pracujemy — bez dedykowanej strony (jeszcze)
const OTHER = [
  {
    icon: Bus,
    title: 'Transport i przewozy',
    lead: 'Infolinia z rozkładami jazdy, statusami kursów i reklamacjami. Publiczne demo na danych PKS Gryfice pokazuje, jak to brzmi w praktyce.',
  },
  {
    icon: Store,
    title: 'Salony, warsztaty i usługi',
    lead: 'Recepcja, która rezerwuje terminy do kalendarza i wysyła przypomnienia, żeby ograniczyć nieodwołane wizyty.',
  },
  {
    icon: Building2,
    title: 'Administracja i urzędy',
    lead: 'Infolinia bez kolejki: statusy spraw, wymagane dokumenty, kierowanie do właściwego wydziału.',
  },
  {
    icon: Scale,
    title: 'Kadry, płace i biura rachunkowe',
    lead: 'Agent, który zna Kodeks pracy, cytuje przepisy, generuje dokumenty i pilnuje terminów ZUS i PIT.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://infinityteam.io' },
        { '@type': 'ListItem', position: 2, name: 'Branże', item: 'https://infinityteam.io/branze' },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Branże, w których wdrażamy agentów AI',
      itemListElement: WITH_PAGE.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: s.title,
        url: `https://infinityteam.io${s.href}`,
      })),
    },
  ],
};

export default function BranzeHub() {
  return (
    <div className="min-h-screen relative" style={{ background: 'var(--bg-page)', color: 'var(--fg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="max-w-5xl mx-auto px-6 pt-8 pb-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
          <ArrowRight className="w-4 h-4 rotate-180" />
          Strona główna
        </Link>
        <nav aria-label="breadcrumb" className="text-xs text-white/40">
          <Link href="/" className="hover:text-white/70">Infinity Tech</Link>
          <span className="mx-2">/</span>
          <span className="text-white/70">Branże</span>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-20">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-10 mb-5" style={{ letterSpacing: '-0.022em' }}>
          AI dla branż
        </h1>
        <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-12 max-w-3xl">
          Technologia jest ta sama, ale sensowne zastosowanie wygląda inaczej w przychodni, a inaczej w firmie
          transportowej. Poniżej branże, w których pracujemy najczęściej — wraz z tym, co agent faktycznie w nich robi.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {WITH_PAGE.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group rounded-2xl p-7 transition-transform hover:-translate-y-1"
              style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)', boxShadow: 'var(--shadow-card, none)' }}
            >
              <s.icon className="w-7 h-7 mb-4" style={{ color: 'var(--accent-text)' }} />
              <h2 className="text-xl font-bold mb-2" style={{ letterSpacing: '-0.012em' }}>{s.title}</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--fg-70)' }}>{s.lead}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--accent-text)' }}>
                Zobacz szczegóły
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-5" style={{ letterSpacing: '-0.012em' }}>
          Pozostałe branże, w których wdrażamy
        </h2>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-7 mb-12">
          {OTHER.map((s) => (
            <div key={s.title} style={{ borderTop: '1px solid var(--border-soft)' }} className="pt-5">
              <div className="flex items-start gap-3">
                <s.icon className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: 'var(--accent-text)' }} />
                <div>
                  <h3 className="font-semibold mb-1.5">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-70)' }}>{s.lead}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="rounded-2xl p-7" style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)' }}>
          <h2 className="text-xl font-bold mb-3">Nie ma tu Twojej branży?</h2>
          <p className="leading-relaxed mb-5" style={{ color: 'var(--fg-70)' }}>
            To nie problem — wzorce się powtarzają. Jeśli w firmie ktoś odbiera te same telefony albo przepisuje dane
            między systemami, jest co automatyzować. Opowiedz nam o swoim procesie, a powiemy, czy to ma sens.
          </p>
          <Link
            href="/#kontakt"
            className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 bg-[#2E4AAD] hover:bg-[#1A2461] transition-colors"
            style={{ color: '#fff' }}
          >
            Umów bezpłatną konsultację
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
