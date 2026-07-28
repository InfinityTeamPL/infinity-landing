import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import Footer from '@/components/Footer';

/* =========================================================
   BlogArticle — szablon artykułu na /blog/*. Server component,
   spójny wizualnie z SeoLanding. JSON-LD: Article + Breadcrumb
   (+ FAQPage / HowTo, jeśli artykuł je ma).
   ========================================================= */

export interface ArticleSection {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogArticleContent {
  path: string;             // np. '/blog/agent-ai-a-chatbot'
  title: string;            // H1
  description: string;      // zajawka pod H1 (i do JSON-LD)
  datePublished: string;    // 'YYYY-MM-DD'
  sections: ArticleSection[];
  howTo?: { title: string; steps: { name: string; text: string }[] };
  faq?: { question: string; answer: string }[];
  related?: { label: string; href: string }[];
  ctaHeading: string;
  ctaSub: string;
}

const BASE = 'https://www.infinityteam.io';

function buildJsonLd(c: BlogArticleContent) {
  const graph: object[] = [
    {
      '@type': 'Article',
      headline: c.title,
      description: c.description,
      datePublished: c.datePublished,
      dateModified: c.datePublished,
      inLanguage: 'pl-PL',
      author: { '@type': 'Organization', name: 'Infinity Tech', url: BASE },
      publisher: { '@type': 'Organization', name: 'Infinity Tech', url: BASE },
      mainEntityOfPage: `${BASE}${c.path}`,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` },
        { '@type': 'ListItem', position: 3, name: c.title, item: `${BASE}${c.path}` },
      ],
    },
  ];
  if (c.faq) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: c.faq.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    });
  }
  if (c.howTo) {
    graph.push({
      '@type': 'HowTo',
      name: c.howTo.title,
      step: c.howTo.steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

export default function BlogArticle({ content }: { content: BlogArticleContent }) {
  const c = content;
  const dateLabel = new Date(c.datePublished + 'T00:00:00').toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="min-h-screen relative" style={{ background: 'var(--bg-page)', color: 'var(--fg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(c)) }} />

      <header className="max-w-3xl mx-auto px-6 pt-8 pb-2 flex items-center justify-between">
        <Link href="/blog" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
          <ArrowRight className="w-4 h-4 rotate-180" />
          Blog
        </Link>
        <nav aria-label="breadcrumb" className="text-xs text-white/60">
          <Link href="/" className="hover:text-white/70">Infinity Tech</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-white/70">Blog</Link>
        </nav>
      </header>

      <main id="tresc" tabIndex={-1} className="max-w-3xl mx-auto px-6 pb-20">
        <article>
          <p className="text-xs uppercase tracking-widest mt-10 mb-4" style={{ color: 'var(--accent-text)' }}>
            {dateLabel}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5" style={{ letterSpacing: '-0.022em' }}>
            {c.title}
          </h1>
          <p className="text-lg text-white/70 leading-relaxed mb-10">{c.description}</p>

          {c.sections.map((s, i) => (
            <section key={i} className="mb-10">
              {s.heading && (
                <h2 className="text-2xl font-bold mb-4" style={{ letterSpacing: '-0.012em' }}>
                  {s.heading}
                </h2>
              )}
              {s.paragraphs.map((p, j) => (
                <p key={j} className="text-white/70 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className="space-y-2.5 mt-4">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-text)' }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {c.howTo && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6" style={{ letterSpacing: '-0.012em' }}>
                {c.howTo.title}
              </h2>
              <ol className="space-y-5">
                {c.howTo.steps.map((s, i) => (
                  <li key={i} className="flex gap-4">
                    <span
                      className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm"
                      style={{ background: '#2E4AAD', color: '#fff' }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold mb-1">{s.name}</h3>
                      <p className="text-white/60 leading-relaxed">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {c.faq && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ letterSpacing: '-0.012em' }}>
                Częste pytania
              </h2>
              <div className="space-y-3">
                {c.faq.map((f, i) => (
                  <details
                    key={i}
                    className="group rounded-2xl overflow-hidden"
                    style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)' }}
                  >
                    <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-medium list-none [&::-webkit-details-marker]:hidden">
                      {f.question}
                      <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: 'var(--accent-text)' }} />
                    </summary>
                    <p className="px-5 pb-5 text-white/70 leading-relaxed">{f.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {c.related && c.related.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-bold mb-4">Zobacz także</h2>
              <div className="flex flex-wrap gap-3">
                {c.related.map((r, i) => (
                  <Link
                    key={i}
                    href={r.href}
                    className="px-4 py-2 rounded-full text-sm transition-colors hover:text-white"
                    style={{ color: 'var(--accent-text)', border: '1px solid var(--border-soft)' }}
                  >
                    {r.label}
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section
            className="rounded-3xl p-8 text-center"
            style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)', boxShadow: 'var(--shadow-card, none)' }}
          >
            <h2 className="text-2xl font-bold mb-3" style={{ letterSpacing: '-0.012em' }}>
              {c.ctaHeading}
            </h2>
            <p className="text-white/60 mb-6 max-w-lg mx-auto">{c.ctaSub}</p>
            <Link
              href="/#kontakt"
              className="px-7 py-3.5 rounded-full font-semibold bg-[#2E4AAD] hover:bg-[#1A2461] transition-colors inline-flex items-center gap-2"
              style={{ color: '#fff' }}
            >
              Umów bezpłatną konsultację
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
