import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bloom',
  description: 'Bloom — kreatywne narzędzie AI od Infinity Tech.',
  alternates: { canonical: '/bloom' },
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
