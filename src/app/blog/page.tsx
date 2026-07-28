import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog — agenci AI i automatyzacja w praktyce',
  description:
    'Praktyczna wiedza o agentach AI dla firm: koszty wdrożeń, porównania technologii, przewodniki krok po kroku. Bez marketingowej waty.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog Infinity Tech — agenci AI i automatyzacja w praktyce',
    description: 'Koszty wdrożeń AI, porównania, przewodniki krok po kroku.',
    type: 'website',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

// Rejestr artykułów — przy dodawaniu wpisu dopisz go tu i w sitemap.ts
const POSTS = [
  {
    slug: 'ai-act-chatboty-obowiazki',
    title: 'AI Act a chatboty: co obowiązuje od 2 sierpnia 2026',
    description:
      'Od 2 sierpnia chatbot i voicebot muszą informować, że rozmówca ma do czynienia z maszyną. Co trzeba zrobić i czego przesunięcie terminów nie objęło.',
    date: '2026-07-26',
  },
  {
    slug: 'rodo-a-chatbot-i-voicebot',
    title: 'RODO a chatbot i voicebot: gdzie trafiają dane z rozmów',
    description:
      'Kto odpowiada za dane z rozmowy z agentem AI, gdzie leżą nagrania i co sprawdzić w umowie powierzenia. Z listą pytań do dostawcy.',
    date: '2026-07-26',
  },
  {
    slug: 'ile-kosztuje-voicebot',
    title: 'Ile kosztuje voicebot? Cennik agenta głosowego 2026',
    description:
      'Z czego składa się cena voicebota, ile kosztuje wdrożenie i utrzymanie w Polsce oraz kiedy telefonia i minuty rozmów podbijają rachunek.',
    date: '2026-07-26',
  },
  {
    slug: 'voicebot-czy-chatbot',
    title: 'Voicebot czy chatbot — co wybrać dla swojej firmy?',
    description:
      'Telefon czy czat? Porównujemy koszty, czas wdrożenia i typ spraw, w których każde z rozwiązań sprawdza się lepiej. Z przykładami z branż.',
    date: '2026-07-26',
  },
  {
    slug: 'voicebot-a-ivr',
    title: 'Voicebot a IVR — czym się różnią i co daje zmiana?',
    description:
      'Klasyczne „wciśnij jeden" kontra agent, który rozumie swobodną mowę. Różnice w obsłudze, kosztach i tym, co realnie zmienia się dla dzwoniącego.',
    date: '2026-07-26',
  },
  {
    slug: 'agent-ai-czy-nowy-pracownik',
    title: 'Agent AI czy nowy pracownik — jak policzyć, co się opłaca',
    description:
      'Uczciwe porównanie kosztów: co realnie kosztuje etat, co agent AI, czego AI nie zrobi i kiedy zatrudnienie człowieka jest po prostu lepsze.',
    date: '2026-07-26',
  },
  {
    slug: 'agent-ai-a-chatbot',
    title: 'Agent AI a chatbot — czym się różnią i co wybrać dla firmy?',
    description:
      'Chatbot odpowiada, agent AI działa. Wyjaśniamy różnicę bez żargonu: kiedy wystarczy prosty bot, a kiedy potrzebujesz agenta, który sam wykonuje zadania.',
    date: '2026-07-25',
  },
  {
    slug: 'ile-kosztuje-chatbot-ai',
    title: 'Ile kosztuje chatbot AI dla firmy? Realne widełki cen 2026',
    description:
      'Od czego zależy cena chatbota AI, jakie są realne widełki na polskim rynku i za co faktycznie płacisz. Konkretne kwoty, bez „to zależy".',
    date: '2026-07-25',
  },
  {
    slug: 'jak-wdrozyc-ai-w-firmie',
    title: 'Jak wdrożyć AI w firmie — przewodnik krok po kroku',
    description:
      'Od audytu procesów po działającego agenta: sprawdzona kolejność wdrożenia AI w małej i średniej firmie. Z czego zrezygnować na start i jak nie przepalić budżetu.',
    date: '2026-07-25',
  },
] as const;

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog Infinity Tech',
  url: 'https://www.infinityteam.io/blog',
  inLanguage: 'pl-PL',
  publisher: { '@type': 'Organization', name: 'Infinity Tech', url: 'https://www.infinityteam.io' },
  blogPost: POSTS.map((p) => ({
    '@type': 'BlogPosting',
    headline: p.title,
    url: `https://www.infinityteam.io/blog/${p.slug}`,
    datePublished: p.date,
  })),
};

export default function BlogIndex() {
  return (
    <div className="min-h-screen relative" style={{ background: 'var(--bg-page)', color: 'var(--fg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />

      <header className="max-w-3xl mx-auto px-6 pt-8 pb-2">
        <Link href="/" className="flex items-center gap-2 py-1.5 text-sm text-white/60 hover:text-white transition-colors w-fit">
          <ArrowRight className="w-4 h-4 rotate-180" />
          Strona główna
        </Link>
      </header>

      <main id="tresc" tabIndex={-1} className="max-w-3xl mx-auto px-6 pb-20">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-10 mb-4" style={{ letterSpacing: '-0.022em' }}>
          Blog — agenci AI i automatyzacja w praktyce
        </h1>
        <p className="text-lg text-white/70 leading-relaxed mb-12 max-w-2xl">
          Konkretna wiedza z wdrożeń: ile co kosztuje, co działa, czego unikać. Piszemy tak, jak rozmawiamy z klientami,
          bez marketingowej waty.
        </p>

        <div className="space-y-5">
          {POSTS.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="block rounded-2xl p-6 transition-transform hover:-translate-y-0.5"
              style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)', boxShadow: 'var(--shadow-card, none)' }}
            >
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--accent-text)' }}>
                {new Date(p.date + 'T00:00:00').toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
              <h2 className="text-xl font-bold mb-2" style={{ letterSpacing: '-0.012em' }}>
                {p.title}
              </h2>
              <p className="text-sm text-white/60 leading-relaxed mb-3">{p.description}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: 'var(--accent-text)' }}>
                Czytaj artykuł
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
