/* /akademia/[slug] — pojedyncza lekcja Akademii Głosowej.
   Statycznie prerenderowana z każdego wpisu w LESSONS.
   Style na tokenach motywu, więc strona działa w trybie jasnym i ciemnym. */

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Check, Clock } from 'lucide-react';
import Footer from '@/components/Footer';
import { LESSONS, getLesson, getNeighbours, readingMinutes } from '@/lib/akademia';

const BASE = 'https://www.infinityteam.io';

export function generateStaticParams() {
  return LESSONS.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const lesson = getLesson(params.slug);
  if (!lesson) return {};
  return {
    title: lesson.metaTitle,
    description: lesson.metaDescription,
    alternates: { canonical: `/akademia/${lesson.slug}` },
    openGraph: {
      title: lesson.metaTitle,
      description: lesson.metaDescription,
      url: `${BASE}/akademia/${lesson.slug}`,
      type: 'article',
      images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
    },
  };
}

function buildJsonLd(slug: string) {
  const lesson = getLesson(slug)!;
  const url = `${BASE}/akademia/${lesson.slug}`;
  const graph: object[] = [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Akademia Głosowa', item: `${BASE}/akademia` },
        { '@type': 'ListItem', position: 3, name: lesson.title, item: url },
      ],
    },
    {
      '@type': 'LearningResource',
      name: lesson.title,
      description: lesson.metaDescription,
      url,
      inLanguage: 'pl-PL',
      learningResourceType: 'Lekcja',
      educationalLevel: 'Poziom podstawowy',
      timeRequired: `PT${readingMinutes(lesson)}M`,
      isAccessibleForFree: true,
      teaches: lesson.takeaways,
      isPartOf: {
        '@type': 'Course',
        name: 'Akademia Głosowa: agenci telefoniczni od zera',
        url: `${BASE}/akademia`,
        provider: { '@type': 'Organization', name: 'Infinity Tech', url: BASE },
      },
    },
  ];
  if (lesson.faq?.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: lesson.faq.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

export default function LessonPage({ params }: { params: { slug: string } }) {
  const lesson = getLesson(params.slug);
  if (!lesson) notFound();
  const { prev, next } = getNeighbours(lesson.slug);

  return (
    <div className="min-h-screen relative" style={{ background: 'var(--bg-page)', color: 'var(--fg)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(lesson.slug)) }}
      />

      <header className="max-w-3xl mx-auto px-6 pt-8 pb-2">
        {/* py-1.5 nie jest kosmetyką: bez niego link ma 20 px wysokości,
            czyli poniżej progu 24 px z WCAG 2.5.8 dla celów dotykowych. */}
        <Link
          href="/akademia"
          className="flex items-center gap-2 py-1.5 text-sm text-white/60 hover:text-white transition-colors w-fit"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Akademia Głosowa
        </Link>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-20">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-10 mb-4">
          <span
            className="text-xs uppercase tracking-widest font-medium"
            style={{ color: 'var(--accent-text)' }}
          >
            Lekcja {lesson.number} z {LESSONS.length}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-white/50">
            <Clock className="w-3.5 h-3.5" />
            {readingMinutes(lesson)} min czytania
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5" style={{ letterSpacing: '-0.022em' }}>
          {lesson.title}
        </h1>
        <p className="text-lg text-white/70 leading-relaxed mb-12">{lesson.lead}</p>

        {lesson.sections.map((s) => (
          <section key={s.h2} className="mb-11">
            <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ letterSpacing: '-0.012em' }}>
              {s.h2}
            </h2>
            {s.paragraphs.map((p, i) => (
              <p key={i} className="text-[16.5px] text-white/70 leading-[1.75] mb-4">
                {p}
              </p>
            ))}
            {s.list && (
              <ul className="mt-5 space-y-2.5">
                {s.list.map((item) => (
                  <li key={item} className="flex gap-3 text-[15.5px] text-white/70 leading-relaxed">
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: 'var(--accent-text)' }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <div
          className="rounded-2xl p-7 mb-11"
          style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)' }}
        >
          <h2 className="text-lg font-bold mb-4">Co warto zapamiętać</h2>
          <ul className="space-y-3">
            {lesson.takeaways.map((t) => (
              <li key={t} className="flex gap-3 text-[15px] text-white/70 leading-relaxed">
                <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'var(--accent-text)' }} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {lesson.faq && lesson.faq.length > 0 && (
          <section className="mb-11">
            <h2 className="text-xl md:text-2xl font-bold mb-5" style={{ letterSpacing: '-0.012em' }}>
              Częste pytania
            </h2>
            <div className="space-y-3">
              {lesson.faq.map(({ q, a }) => (
                <details
                  key={q}
                  className="group rounded-xl px-5 py-4"
                  style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)' }}
                >
                  <summary className="cursor-pointer font-semibold text-[15.5px] list-none flex justify-between gap-4 min-h-[24px] items-center">
                    {q}
                    <span className="text-white/40 group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                  </summary>
                  <p className="mt-3 text-[15px] text-white/65 leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {lesson.related && lesson.related.length > 0 && (
          <section className="mb-11">
            <h2 className="text-lg font-bold mb-3">Powiązane strony</h2>
            <ul className="space-y-2">
              {lesson.related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="inline-block py-1 text-[15px] hover:underline"
                    style={{ color: 'var(--accent-text)' }}
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <nav
          className="flex flex-col sm:flex-row gap-3 pt-8"
          style={{ borderTop: '1px solid var(--border-soft)' }}
        >
          {prev ? (
            <Link
              href={`/akademia/${prev.slug}`}
              className="flex-1 rounded-xl px-5 py-4 transition-transform hover:-translate-y-0.5"
              style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)' }}
            >
              <span className="block text-xs uppercase tracking-widest mb-1.5 text-white/40">Poprzednia</span>
              <span className="block text-[15px] font-semibold leading-snug">{prev.title}</span>
            </Link>
          ) : (
            <span className="flex-1" />
          )}
          {next && (
            <Link
              href={`/akademia/${next.slug}`}
              className="flex-1 rounded-xl px-5 py-4 transition-transform hover:-translate-y-0.5 sm:text-right"
              style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)' }}
            >
              <span className="block text-xs uppercase tracking-widest mb-1.5 text-white/40">Następna</span>
              <span className="block text-[15px] font-semibold leading-snug">{next.title}</span>
            </Link>
          )}
        </nav>

        <div
          className="mt-10 rounded-2xl p-7 text-center"
          style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)' }}
        >
          <h2 className="text-xl font-bold mb-2">Chcesz to przeliczyć na swoich danych?</h2>
          <p className="text-[15px] text-white/65 leading-relaxed mb-5 max-w-lg mx-auto">
            Pierwsza rozmowa jest bezpłatna. Przejdziemy przez Wasz ruch telefoniczny i powiemy wprost,
            jeśli voicebot się u Was nie opłaca.
          </p>
          <Link
            href="/#kontakt"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold bg-[#2E4AAD] hover:bg-[#1A2461] transition-colors"
            style={{ color: '#fff' }}
          >
            Umów bezpłatną konsultację
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}
