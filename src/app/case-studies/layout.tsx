import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Sprawdź, jak nasze rozwiązania AI pomagają firmom automatyzować procesy i zwiększać efektywność.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title: 'Case Studies | Infinity Tech',
    description: 'Sprawdź, jak nasze rozwiązania AI pomagają firmom.',
    type: 'website',
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
