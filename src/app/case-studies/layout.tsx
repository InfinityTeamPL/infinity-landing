import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Realizacje — wdrożenia agentów AI',
  description:
    'Cztery realne wdrożenia agentów AI: voicebot dla przewoźnika autobusowego, automatyzacja kadr i płac, aplikacja dla rolnictwa, platforma dla inwestorów.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title: 'Realizacje — wdrożenia agentów AI | Infinity Tech',
    description:
      'Prawdziwe, anonimowe wdrożenia agentów AI w polskich firmach — bez zmyślonych metryk. Voice AI, automatyzacja HR, aplikacje na miarę.',
    type: 'website',
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
