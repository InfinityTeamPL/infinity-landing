import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bloom',
  description: 'Bloom — kreatywne narzędzie AI od Infinity Tech.',
  alternates: { canonical: '/bloom' },
  /*
    Poza indeksem, a nie usunięta. Strona jest po angielsku na polskiej
    domenie, nie ma jej w mapie serwisu i nikt do niej nie linkuje — a mimo
    to dziedziczyła z layoutu głównego jawne "index, follow". Osierocona
    podstrona w obcym języku rozmywa sygnały językowe i tematyczne całej
    domeny, nic w zamian nie wnosząc.

    Pod bezpośrednim linkiem działa dalej, więc nadal nadaje się na pokaz.
    Gdyby Bloom miał kiedyś wejść do oferty, wystarczy usunąć to pole
    i dopisać stronę do sitemap.ts — najlepiej razem z polską wersją treści.
  */
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Bloom | Infinity Tech',
    description: 'Bloom — kreatywne narzędzie AI od Infinity Tech.',
    type: 'website',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

export default function BloomLayout({ children }: { children: React.ReactNode }) {
  return children;
}
