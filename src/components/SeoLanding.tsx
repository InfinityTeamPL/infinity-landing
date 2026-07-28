import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import Footer from '@/components/Footer';

/* =========================================================
   SeoLanding — wspólny szablon landingów SEO (/uslugi/*, /cennik,
   /openclaw, /branze/*). Server component: metadane i treść w HTML
   od pierwszego bajtu, FAQ na <details> (indeksowalne bez JS),
   JSON-LD (Service + FAQPage + BreadcrumbList) generowany z treści.
   Style w 100% na tokenach motywu — działa w light i dark.
   ========================================================= */

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HowToStep {
  name: string;
  text: string;
}

export interface ContentSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface UseCase {
  title: string;
  description: string;
}

export interface PriceRow {
  name: string;
  price: string;
  description: string;
}

export interface SeoLandingContent {
  /** Ścieżka strony, np. '/uslugi/agent-glosowy-ai' — do breadcrumb i JSON-LD */
  path: string;
  breadcrumbLabel: string;
  h1: string;
  /** Akapit-definicja 40–55 słów — karmi featured snippet, zaraz pod H1 */
  lead: string;
  sections: ContentSection[];
  /** Kroki "jak to działa / jak wdrażamy" — renderowane jako <ol>, JSON-LD HowTo */
  howTo?: { title: string; steps: HowToStep[] };
  useCases?: { title: string; items: UseCase[] };
  pricing?: { title: string; note?: string; rows: PriceRow[] };
  faq: FaqItem[];
  cta: { heading: string; sub: string };
  /** Nazwa usługi do JSON-LD Service (pomiń dla stron nie-usługowych) */
  serviceName?: string;
  serviceDescription?: string;
  /** Linki do powiązanych podstron — linkowanie wewnętrzne */
  related?: { label: string; href: string }[];
}

const BASE = 'https://www.infinityteam.io';

function buildJsonLd(c: SeoLandingContent) {
  const graph: object[] = [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: BASE },
        { '@type': 'ListItem', position: 2, name: c.breadcrumbLabel, item: `${BASE}${c.path}` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: c.faq.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ];

  if (c.serviceName) {
    graph.push({
      '@type': 'Service',
      name: c.serviceName,
      description: c.serviceDescription ?? c.lead,
      provider: { '@type': 'Organization', name: 'Infinity Tech', url: BASE },
      areaServed: 'PL',
      url: `${BASE}${c.path}`,
    });
  }

  if (c.howTo) {
    graph.push({
      '@type': 'HowTo',
      name: c.howTo.title,
      step: c.howTo.steps.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: s.name,
        text: s.text,
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

export default function SeoLanding({ content }: { content: SeoLandingContent }) {
  const c = content;
  return (
    <div className="min-h-screen relative" style={{ background: 'var(--bg-page)', color: 'var(--fg)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(c)) }}
      />

      {/* Top bar */}
      <header className="max-w-4xl mx-auto px-6 pt-8 pb-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
          <ArrowRight className="w-4 h-4 rotate-180" />
          Strona główna
        </Link>
        <nav aria-label="breadcrumb" className="text-xs text-white/40">
          <Link href="/" className="hover:text-white/70">Infinity Tech</Link>
          <span className="mx-2">/</span>
          <span className="text-white/70">{c.breadcrumbLabel}</span>
        </nav>
      </header>

      <main id="tresc" className="max-w-4xl mx-auto px-6 pb-20">
        {/* H1 + lead (definicja pod snippet) */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-10 mb-6" style={{ letterSpacing: '-0.022em' }}>
          {c.h1}
        </h1>
        <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-3xl">{c.lead}</p>

        <div className="flex flex-wrap gap-4 mb-14">
          <Link
            href="/#kontakt"
            className="px-7 py-3.5 rounded-full font-semibold text-white bg-[#2E4AAD] hover:bg-[#1A2461] transition-colors inline-flex items-center gap-2"
            style={{ color: '#fff' }}
          >
            Umów bezpłatną konsultację
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/kalkulator"
            className="px-7 py-3.5 rounded-full font-semibold inline-flex items-center gap-2 transition-colors"
            style={{ color: 'var(--accent-text)', border: '1px solid var(--border-soft)' }}
          >
            Oblicz ROI automatyzacji
          </Link>
        </div>

        {/* Sekcje treści */}
        {c.sections.map((s, i) => (
          <section key={i} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ letterSpacing: '-0.012em' }}>
              {s.heading}
            </h2>
            {s.paragraphs.map((p, j) => (
              <p key={j} className="text-white/70 leading-relaxed mb-4">
                {p}
              </p>
            ))}
            {s.bullets && (
              <ul className="space-y-2.5 mt-5">
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

        {/* HowTo */}
        {c.howTo && (
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ letterSpacing: '-0.012em' }}>
              {c.howTo.title}
            </h2>
            <ol className="space-y-5">
              {c.howTo.steps.map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm"
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

        {/* Zastosowania */}
        {c.useCases && (
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ letterSpacing: '-0.012em' }}>
              {c.useCases.title}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {c.useCases.items.map((u, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5"
                  style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)', boxShadow: 'var(--shadow-card, none)' }}
                >
                  <h3 className="font-semibold mb-1.5">{u.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{u.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Cennik */}
        {c.pricing && (
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ letterSpacing: '-0.012em' }}>
              {c.pricing.title}
            </h2>
            {c.pricing.note && <p className="text-white/60 mb-6">{c.pricing.note}</p>}
            <div className="overflow-x-auto">
              <table className="w-full text-left rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border-soft)' }}>
                <thead>
                  <tr style={{ background: 'var(--surface-1)' }}>
                    <th className="px-5 py-3.5 font-semibold">Zakres</th>
                    <th className="px-5 py-3.5 font-semibold whitespace-nowrap">Cena</th>
                    <th className="px-5 py-3.5 font-semibold">Co obejmuje</th>
                  </tr>
                </thead>
                <tbody>
                  {c.pricing.rows.map((r, i) => (
                    <tr key={i} style={{ borderTop: '1px solid var(--border-soft)' }}>
                      <td className="px-5 py-3.5 font-medium whitespace-nowrap">{r.name}</td>
                      <td className="px-5 py-3.5 whitespace-nowrap" style={{ color: 'var(--accent-text)' }}>{r.price}</td>
                      <td className="px-5 py-3.5 text-white/60 text-sm">{r.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* FAQ — <details>: pełna treść w HTML, zero JS */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ letterSpacing: '-0.012em' }}>
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

        {/* Powiązane strony — linkowanie wewnętrzne */}
        {c.related && c.related.length > 0 && (
          <section className="mb-14">
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

        {/* CTA */}
        <section
          className="rounded-3xl p-8 md:p-12 text-center"
          style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)', boxShadow: 'var(--shadow-card, none)' }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ letterSpacing: '-0.012em' }}>
            {c.cta.heading}
          </h2>
          <p className="text-white/60 mb-7 max-w-xl mx-auto">{c.cta.sub}</p>
          <Link
            href="/#kontakt"
            className="px-8 py-4 rounded-full font-semibold text-white bg-[#2E4AAD] hover:bg-[#1A2461] transition-colors inline-flex items-center gap-2"
            style={{ color: '#fff' }}
          >
            Porozmawiajmy o Twojej firmie
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
