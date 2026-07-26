import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nie znaleziono strony',
  robots: { index: false, follow: true },
};

// Ścieżki ratunkowe — 404 ma odzyskiwać ruch, a nie kończyć wizytę
const RESCUE = [
  { href: '/uslugi', label: 'Usługi AI', desc: 'Agenci głosowi, chatboty, automatyzacja procesów' },
  { href: '/branze', label: 'Branże', desc: 'Przychodnie, rekrutacja, transport, administracja' },
  { href: '/cennik', label: 'Cennik', desc: 'Ile kosztuje wdrożenie i utrzymanie agenta' },
  { href: '/case-studies', label: 'Realizacje', desc: 'Co zbudowaliśmy i czego możesz dotknąć' },
  { href: '/blog', label: 'Blog', desc: 'Koszty, porównania i przewodniki krok po kroku' },
  { href: '/slownik', label: 'Słownik AI', desc: 'Pojęcia wyjaśnione bez żargonu' },
];

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg-page)', color: 'var(--fg)' }}>
      <main className="flex-1 max-w-3xl mx-auto px-6 py-20 md:py-28 w-full">
        <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--accent-text)' }}>
          Błąd 404
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4" style={{ letterSpacing: '-0.022em' }}>
          Tej strony tu nie ma
        </h1>
        <p className="text-lg leading-relaxed mb-12" style={{ color: 'var(--fg-70)' }}>
          Adres mógł się zmienić albo w linku wkradła się literówka. Poniżej miejsca, do których najczęściej
          prowadzą nasze strony, coś z tego pewnie jest tym, czego szukasz.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {RESCUE.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="group rounded-2xl p-5 transition-transform hover:-translate-y-0.5"
              style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)', boxShadow: 'var(--shadow-card, none)' }}
            >
              <span className="flex items-center gap-1.5 font-semibold mb-1">
                {r.label}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" style={{ color: 'var(--accent-text)' }} />
              </span>
              <span className="text-sm leading-relaxed block" style={{ color: 'var(--fg-60)' }}>
                {r.desc}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 bg-[#2E4AAD] hover:bg-[#1A2461] transition-colors"
            style={{ color: '#fff' }}
          >
            Wróć na stronę główną
          </Link>
          <span style={{ color: 'var(--fg-55)' }}>
            albo{' '}
            <Link href="/#kontakt" className="underline underline-offset-4" style={{ color: 'var(--accent-text)' }}>
              napisz do nas
            </Link>
            , jeśli trafiłeś tu z naszego linku. Poprawimy go.
          </span>
        </div>
      </main>
    </div>
  );
}
