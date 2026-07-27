import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Realizacje — wdrożenia agentów AI',
  description:
    'Wdrożenia agentów AI z publicznymi demami: asystent rozkładów PKS Gryfice, kadrowa AI Janina, platforma ClawLabs. Plus aplikacje pod NDA.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title: 'Realizacje — wdrożenia agentów AI | Infinity Tech',
    description:
      'Wdrożenia agentów AI, które możesz przetestować samodzielnie: demo PKS Gryfice, Superkadrowa (Janina), platforma ClawLabs. Bez zmyślonych metryk.',
    type: 'website',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
