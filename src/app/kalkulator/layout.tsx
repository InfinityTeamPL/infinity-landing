import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kalkulator ROI automatyzacji AI dla firm',
  description: 'Policz, ile kosztuje Was powtarzalna praca i ile z tego odzyska automatyzacja AI. Szacunek na danych GUS i ZUS, bez zapisu i bez e-maila.',
  alternates: { canonical: '/kalkulator' },
  openGraph: {
    title: 'Kalkulator ROI | Infinity Tech',
    description: 'Oblicz zwrot z inwestycji w automatyzację AI.',
    type: 'website',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

export default function KalkulatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
