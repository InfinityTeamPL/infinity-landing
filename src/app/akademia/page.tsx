/* /akademia — hub bezpłatnego kursu o agentach głosowych. */

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import Footer from '@/components/Footer';
import { LESSONS, TRACKS, TOTAL_MINUTES, readingMinutes, getTrackLessons } from '@/lib/akademia';

const BASE = 'https://www.infinityteam.io';

export const metadata: Metadata = {
  title: 'Akademia Głosowa — bezpłatny kurs o voicebotach',
  description:
    'Kurs po polsku o agentach telefonicznych: jak działa voicebot, kiedy się opłaca, jak zaprojektować rozmowę i co mówi prawo. Bez zapisu.',
  alternates: { canonical: '/akademia' },
  openGraph: {
    title: 'Akademia Głosowa Infinity Tech — bezpłatny kurs o voicebotach',
    description:
      'Kurs dla firm, które rozważają voicebota. Konkretnie, z sekcjami o tym, kiedy się nie opłaca.',
    url: `${BASE}/akademia`,
    type: 'website',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Akademia Głosowa', item: `${BASE}/akademia` },
      ],
    },
    {
      '@type': 'Course',
      name: 'Akademia Głosowa: agenci telefoniczni od zera',
      description:
        'Bezpłatny kurs po polsku o wdrażaniu agentów głosowych w firmie: jak działa rozmowa z AI, kiedy automatyzacja telefonu ma sens, projektowanie scenariusza, obowiązki prawne, pomiar efektu i typowe błędy wdrożeń.',
      url: `${BASE}/akademia`,
      inLanguage: 'pl-PL',
      isAccessibleForFree: true,
      provider: { '@type': 'Organization', name: 'Infinity Tech', url: BASE },
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'online',
        courseWorkload: `PT${TOTAL_MINUTES()}M`,
      },
      syllabusSections: LESSONS.map((l) => ({
        '@type': 'Syllabus',
        name: l.title,
        description: l.metaDescription,
        url: `${BASE}/akademia/${l.slug}`,
        position: l.number,
      })),
    },
  ],
};

export default function AkademiaIndex() {
  return (
    <div className="min-h-screen relative" style={{ background: 'var(--bg-page)', color: 'var(--fg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="max-w-3xl mx-auto px-6 pt-8 pb-2">
        <Link
          href="/"
          className="flex items-center gap-2 py-1.5 text-sm text-white/60 hover:text-white transition-colors w-fit"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Strona główna
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-20">
        <span
          className="inline-block text-xs uppercase tracking-widest font-medium mt-10 mb-4"
          style={{ color: 'var(--accent-text)' }}
        >
          Kurs bezpłatny, bez zapisu
        </span>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4" style={{ letterSpacing: '-0.022em' }}>
          Akademia Głosowa
        </h1>
        <p className="text-lg text-white/70 leading-relaxed mb-6 max-w-2xl">
          Kurs dla firm, w których dzwoni telefon i ktoś musi go odbierać. Tłumaczymy, jak działa agent
          głosowy, kiedy jego wdrożenie ma sens, a kiedy szkoda pieniędzy. Piszemy z wdrożeń, nie z broszur.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/50 mb-12">
          <span>
            <strong className="text-white/80">{LESSONS.length} lekcji</strong> w kursie
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            około {TOTAL_MINUTES()} minut czytania
          </span>
          <span>Nie trzeba zostawiać adresu</span>
        </div>

        {TRACKS.map((track) => {
          const lekcje = getTrackLessons(track.id);
          if (lekcje.length === 0) return null;
          return (
            <section key={track.id} className="mb-14">
              <h2 className="text-2xl font-bold mb-2" style={{ letterSpacing: '-0.015em' }}>
                Ścieżka: {track.name}
              </h2>
              <p className="text-[15.5px] text-white/60 leading-relaxed mb-6 max-w-2xl">
                {track.lead}
              </p>

              <ol className="space-y-5">
                {lekcje.map((l) => (
                  <li key={l.slug}>
                    <Link
                      href={`/akademia/${l.slug}`}
                      className="flex gap-5 rounded-2xl p-6 transition-transform hover:-translate-y-0.5"
                      style={{
                        background: 'var(--surface-1)',
                        border: '1px solid var(--border-soft)',
                        boxShadow: 'var(--shadow-card, none)',
                      }}
                    >
                      <span
                        className="text-sm font-mono pt-0.5 flex-shrink-0"
                        style={{ color: 'var(--accent-text)' }}
                      >
                        {String(l.number).padStart(2, '0')}
                      </span>
                      <span className="min-w-0">
                        <span
                          className="block text-lg font-bold mb-2"
                          style={{ letterSpacing: '-0.012em' }}
                        >
                          {l.title}
                        </span>
                        <span className="block text-sm text-white/60 leading-relaxed mb-3">
                          {l.lead}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-white/40">
                          <Clock className="w-3.5 h-3.5" />
                          {readingMinutes(l)} min
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </section>
          );
        })}

        <section
          className="mt-14 rounded-2xl p-7"
          style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)' }}
        >
          <h2 className="text-xl font-bold mb-3">Dla kogo jest ten kurs</h2>
          <p className="text-[16px] text-white/70 leading-[1.75] mb-4">
            Dla właścicieli firm i osób odpowiedzialnych za obsługę klienta, do których dzwonią ludzie
            i którym telefon zaczyna zjadać dzień. Nie zakładamy wiedzy technicznej. Zakładamy, że wiecie,
            z czym dzwonią Wasi klienci.
          </p>
          <p className="text-[16px] text-white/70 leading-[1.75]">
            Czego tu nie ma: obietnic o kilkusetprocentowym zwrocie. W kilku lekcjach piszemy wprost, kiedy
            voicebota lepiej odpuścić, bo z naszych rozmów handlowych taki wniosek wychodzi częściej,
            niż mogłoby się wydawać.
          </p>
        </section>

        <section
          className="mt-4 rounded-2xl p-7"
          style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)' }}
        >
          <h2 className="text-xl font-bold mb-3">Jak to wygląda w Twojej branży</h2>
          <p className="text-[16px] text-white/70 leading-[1.75] mb-5">
            Kurs jest ogólny, bo zasady są wspólne. Konkretne scenariusze, typowe pytania klientów
            i rachunek opłacalności rozpisaliśmy osobno dla każdej branży.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[15px]">
            {[
              { label: 'Przychodnie i gabinety', href: '/branze/voicebot-dla-przychodni' },
              { label: 'Transport i przewoźnicy', href: '/branze/voicebot-dla-transportu' },
              { label: 'Salony i warsztaty', href: '/branze/voicebot-dla-salonow' },
              { label: 'Restauracje', href: '/branze/voicebot-dla-gastronomii' },
              { label: 'Administracja publiczna', href: '/branze/ai-dla-administracji' },
              { label: 'Wszystkie branże', href: '/branze' },
            ].map((b) => (
              <Link
                key={b.href}
                href={b.href}
                className="inline-block py-1 hover:underline"
                style={{ color: 'var(--accent-text)' }}
              >
                {b.label}
              </Link>
            ))}
          </div>
        </section>

        <section
          className="mt-4 rounded-2xl p-7"
          style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)' }}
        >
          <h2 className="text-xl font-bold mb-3">Szukasz kursu o agentach tekstowych?</h2>
          <p className="text-[16px] text-white/70 leading-[1.75]">
            Ten kurs dotyczy telefonu. Jeśli interesuje Cię budowanie agentów tekstowych na własną rękę,
            prowadzimy osobny, również bezpłatny kurs na{' '}
            <a
              href="https://clawlabs.pro/akademia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: 'var(--accent-text)' }}
            >
              platformie ClawLabs
            </a>
            .
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
