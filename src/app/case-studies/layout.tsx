import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Realizacje — wdrożenia agentów AI',
  // PKS Gryfice to NASZE demo na publicznych danych, nie wdrożenie u klienta.
  // Opis nie może stawiać go w jednym szeregu z realizacjami, bo to trafia do
  // wyników wyszukiwania i czyta się jak lista klientów.
  description:
    'Realizacje i własne dema agentów AI: kadrowa Janina, platforma ClawLabs, demo asystenta rozkładów na publicznych danych. Plus aplikacje pod NDA.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title: 'Realizacje — wdrożenia agentów AI | Infinity Tech',
    description:
      'Rzeczy, które możesz przetestować samodzielnie: Superkadrowa (Janina), platforma ClawLabs oraz nasze demo asystenta rozkładów. Bez zmyślonych metryk.',
    type: 'website',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
