import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Realizacje — wdrożenia agentów AI',
  description:
    'Realne wdrożenia agentów AI z publicznymi demami: głosowy asystent rozkładów PKS Gryfice, wirtualna kadrowa Superkadrowa (Janina), platforma ClawLabs — plus aplikacje na miarę pod NDA.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title: 'Realizacje — wdrożenia agentów AI | Infinity Tech',
    description:
      'Wdrożenia agentów AI, które możesz przetestować samodzielnie: demo PKS Gryfice, Superkadrowa (Janina), platforma ClawLabs. Bez zmyślonych metryk.',
    type: 'website',
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
