import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';
import AiNewsPage from '@/components/AiNewsPage';
import { getNewsWithCache } from '@/lib/newsCache';

// Tło: siatka CSS jak w reszcie serwisu (zamiast shadera WebGL — patrz /regulamin)
const Background3D = dynamic(() => import('@/components/Background3D'), { ssr: false });

export const revalidate = 7200; // ISR: rebuild every 2h in background

export const metadata: Metadata = {
  title: 'Świat AI: wiadomości o sztucznej inteligencji po polsku',
  description: 'Najnowsze wiadomości ze świata sztucznej inteligencji, tłumaczone na polski. Codziennie odświeżany feed z HackerNews, Dev.to, The Guardian i Arxiv.',
  alternates: { canonical: '/swiat-ai' },
  openGraph: {
    title: 'Świat AI | Infinity Tech',
    description: 'Najnowsze wiadomości ze świata AI — automatycznie, po polsku.',
    type: 'website',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

export default async function SwiatAiPage() {
  const news = await getNewsWithCache();

  return (
    <div className="min-h-screen relative" style={{ background: 'var(--bg-page)', color: 'var(--fg)' }}>
      <Background3D />

      {/* Navigation */}
      <nav className="relative z-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 md:gap-3">
            <Image src="/logo.png" alt="Infinity Tech" width={32} height={32} className="object-contain site-logo md:w-[42px] md:h-[42px]" />
            <span className="text-lg md:text-2xl font-bold text-white">INFINITY TECH</span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-[#7B9BDB] hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Powrót</span>
          </Link>
        </div>
      </nav>

      {/* AI News Content — pre-rendered with data */}
      <main id="tresc" tabIndex={-1} className="relative z-10">
        <AiNewsPage initialNews={news} />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
