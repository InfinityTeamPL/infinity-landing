import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, PhoneCall, MessagesSquare, Workflow, Wrench } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Usługi AI dla firm — agenci, chatboty, automatyzacja',
  description:
    'Cztery obszary, w których pracujemy: agenci głosowi, chatboty wielokanałowe, automatyzacja procesów i wdrożenia na miarę. Zobacz zakres i orientacyjne koszty.',
  alternates: { canonical: '/uslugi' },
  openGraph: {
    title: 'Usługi AI dla firm — Infinity Tech',
    description: 'Agenci głosowi, chatboty, automatyzacja procesów i wdrożenia szyte na miarę.',
    type: 'website',
  },
};

const SERVICES = [
  {
    icon: PhoneCall,
    href: '/uslugi/agent-glosowy-ai',
    title: 'Agent głosowy AI',
    lead: 'Odbiera telefony przez całą dobę, rozmawia naturalną polszczyzną i realnie załatwia sprawy — podaje informacje, umawia terminy, przyjmuje zgłoszenia.',
    bullets: ['Infolinia bez kolejek', 'Rejestracja i rezerwacje', 'Naturalny głos (ElevenLabs)'],
  },
  {
    icon: MessagesSquare,
    href: '/uslugi/chatbot-ai',
    title: 'Chatbot AI dla firm',
    lead: 'Jeden agent wpięty w kanały, których już używacie — WhatsApp, Slack, Teams, Telegram i ponad 20 innych. Zna Waszą wiedzę firmową, a trudniejsze sprawy przekazuje człowiekowi.',
    bullets: ['23+ kanałów komunikacji', 'Wiedza z Waszych dokumentów', 'Obsługa klienta 24/7'],
  },
  {
    icon: Workflow,
    href: '/uslugi/automatyzacja-procesow-ai',
    title: 'Automatyzacja procesów AI',
    lead: 'Agenci, którzy wykonują pracę, a nie tylko odpowiadają: przetwarzają dokumenty, uzupełniają systemy, przygotowują raporty i pilnują terminów.',
    bullets: ['Dokumenty i raporty', 'Integracje z CRM/ERP', 'Człowiek w pętli decyzji'],
  },
  {
    icon: Wrench,
    href: '/uslugi/automatyzacja-hr',
    title: 'Automatyzacja HR i kadr',
    lead: 'Selekcja CV, onboarding, dokumenty kadrowe i pilnowanie terminów ZUS/PIT. Ten wertykał znamy najlepiej — zbudowaliśmy w nim własny produkt.',
    bullets: ['Dokumenty kadrowe', 'Terminy ZUS i PIT', 'Wsparcie rekrutacji'],
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://infinityteam.io' },
        { '@type': 'ListItem', position: 2, name: 'Usługi', item: 'https://infinityteam.io/uslugi' },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Usługi AI dla firm',
      itemListElement: SERVICES.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: s.title,
        url: `https://infinityteam.io${s.href}`,
      })),
    },
  ],
};

export default function UslugiHub() {
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
          <span className="text-white/70">Usługi</span>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-20">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-10 mb-5" style={{ letterSpacing: '-0.022em' }}>
          Usługi AI dla firm
        </h1>
        <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-12 max-w-3xl">
          Pracujemy w czterech obszarach. Zwykle zaczyna się od jednego procesu, który zżera najwięcej czasu — a nie od
          wdrażania wszystkiego naraz. Poniżej zakres każdej usługi; pierwsza rozmowa jest bezpłatna.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group rounded-2xl p-7 transition-transform hover:-translate-y-1"
              style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)', boxShadow: 'var(--shadow-card, none)' }}
            >
              <s.icon className="w-7 h-7 mb-4" style={{ color: 'var(--accent-text)' }} />
              <h2 className="text-xl font-bold mb-2" style={{ letterSpacing: '-0.012em' }}>{s.title}</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--fg-70)' }}>{s.lead}</p>
              <ul className="space-y-1.5 mb-5">
                {s.bullets.map((b) => (
                  <li key={b} className="text-sm flex items-center gap-2" style={{ color: 'var(--fg-60)' }}>
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--accent-text)' }} />
                    {b}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--accent-text)' }}>
                Zobacz szczegóły
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>

        <section className="mt-12 rounded-2xl p-7" style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)' }}>
          <h2 className="text-xl font-bold mb-3">Nie wiesz, od czego zacząć?</h2>
          <p className="leading-relaxed mb-5" style={{ color: 'var(--fg-70)' }}>
            Najczęściej tak właśnie wygląda pierwsza rozmowa. Przechodzimy przez Wasze procesy, wskazujemy te, które
            najszybciej się zwrócą, i mówimy wprost, jeśli automatyzacja nie ma tu sensu.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/#kontakt"
              className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 bg-[#2E4AAD] hover:bg-[#1A2461] transition-colors"
              style={{ color: '#fff' }}
            >
              Umów bezpłatną konsultację
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cennik"
              className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2"
              style={{ color: 'var(--accent-text)', border: '1px solid var(--border-soft)' }}
            >
              Zobacz orientacyjne koszty
            </Link>
            <Link
              href="/kalkulator"
              className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2"
              style={{ color: 'var(--accent-text)', border: '1px solid var(--border-soft)' }}
            >
              Policz ROI
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
