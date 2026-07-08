import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bloom',
  description: 'Bloom — kreatywne narzędzie AI od Infinity Tech.',
  alternates: { canonical: '/bloom' },
  openGraph: {
    title: 'Bloom | Infinity Tech',
    description: 'Bloom — kreatywne narzędzie AI od Infinity Tech.',
    type: 'website',
  },
};

export default function BloomLayout({ children }: { children: React.ReactNode }) {
  return children;
}
