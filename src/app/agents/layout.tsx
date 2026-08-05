import { Metadata } from 'next';
import Okruszki from '@/components/Okruszki';

export const metadata: Metadata = {
  title: 'Agent AI w HR, marketingu i sprzedaży: co realnie zrobi',
  description:
    'Agent AI w trzech działach: kadry, marketing, sprzedaż. Co naprawdę przejmie, czego nie zrobi i kiedy nie warto go stawiać. Bez liczb, których nie zmierzyliśmy.',
  alternates: { canonical: '/agents' },
  openGraph: {
    title: 'Agent AI w HR, marketingu i sprzedaży: co realnie zrobi',
    description:
      'Trzy działy i w każdym to samo pytanie: co agent przejmie, czego nie zrobi i kiedy odpuścić.',
    type: 'website',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

export default function AgentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Okruszki nazwa="Agent AI w HR, marketingu i sprzedaży" sciezka="/agents" />
      {children}
    </>
  );
}
