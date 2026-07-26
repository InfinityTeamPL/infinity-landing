import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Słownik AI — pojęcia wyjaśnione po ludzku',
  description:
    'Agent AI, voicebot, RAG, halucynacja, LLM, BYOK. Krótkie definicje bez żargonu, dla osób, które wdrażają AI w firmie, a nie piszą kodu.',
  alternates: { canonical: '/slownik' },
  openGraph: {
    title: 'Słownik AI — pojęcia wyjaśnione po ludzku | Infinity Tech',
    description: 'Agent AI, voicebot, RAG, LLM i reszta żargonu — wytłumaczone zrozumiale.',
    type: 'website',
  },
};

interface Term {
  term: string;
  definition: string;
  more?: string;
  href?: string;
  hrefLabel?: string;
}

const TERMS: Term[] = [
  {
    term: 'Agent AI',
    definition:
      'Program oparty na modelu językowym, który poza odpowiadaniem na pytania wykonuje też zadania: wyszukuje dane, wypełnia formularze, umawia terminy, wysyła wiadomości. Od zwykłego chatbota różni go dostęp do narzędzi i to, że potrafi działać w Waszych systemach.',
    href: '/blog/agent-ai-a-chatbot',
    hrefLabel: 'Agent AI a chatbot: czym się różnią',
  },
  {
    term: 'Agent głosowy (voicebot)',
    definition:
      'Agent AI, który rozmawia głosem przez telefon lub przeglądarkę. Rozumie swobodną mowę, więc nie trzeba wciskać klawiszy jak na starej automatycznej infolinii. W trakcie rozmowy potrafi też sprawdzić dane i wykonać akcję, na przykład zarezerwować termin.',
    href: '/uslugi/agent-glosowy-ai',
    hrefLabel: 'Jak wdrażamy agenta głosowego AI',
  },
  {
    term: 'LLM (duży model językowy)',
    definition:
      'Silnik, który stoi za rozumieniem i generowaniem tekstu, na przykład GPT, Claude czy Gemini. Sam w sobie nie zna Waszej firmy: wiedzę o niej trzeba mu dostarczyć osobno.',
  },
  {
    term: 'RAG (odpytywanie własnej bazy wiedzy)',
    definition:
      'Metoda, w której agent najpierw szuka w Waszych dokumentach, a odpowiada dopiero na podstawie tego, co znalazł. Dzięki temu opiera się na faktach z firmy, a nie na ogólnej wiedzy modelu, i może wskazać źródło.',
  },
  {
    term: 'Halucynacja',
    definition:
      'Sytuacja, w której model podaje nieprawdziwą informację brzmiącą wiarygodnie. Do zera tego nie da się sprowadzić, ale da się mocno ograniczyć: każąc agentowi opierać odpowiedzi na konkretnych dokumentach, cytować źródło i mówić „nie wiem”, gdy danych brakuje.',
  },
  {
    term: 'Człowiek w pętli',
    definition:
      'Decyzje o istotnych skutkach zatwierdza człowiek, a agent je tylko przygotowuje. Przykładowo AI rekomenduje kandydatów do rozmowy, ale nikogo samodzielnie nie odrzuca.',
  },
  {
    term: 'BYOK (własne klucze API)',
    definition:
      'Korzystacie z własnego konta u dostawcy modelu, a firma wdrożeniowa pobiera opłatę tylko za hosting i utrzymanie. Za zużycie modelu płacicie bezpośrednio, bez marży pośrednika.',
  },
  {
    term: 'Self-hosting (wdrożenie on-premise)',
    definition:
      'Uruchomienie agenta na Waszej infrastrukturze albo na serwerze przypisanym tylko do Was, zamiast we współdzielonej chmurze dostawcy. Częsty wymóg tam, gdzie przetwarza się dane wrażliwe: w medycynie, kadrach czy finansach.',
  },
  {
    term: 'Omnichannel (wielokanałowość)',
    definition:
      'Jeden agent obsługujący wiele kanałów naraz (WhatsApp, Slack, Teams, czat na stronie), z tą samą wiedzą i historią rozmowy, zamiast osobnego bota w każdym miejscu.',
    href: '/uslugi/chatbot-ai',
    hrefLabel: 'Chatbot AI dla firm',
  },
  {
    term: 'OpenClaw',
    definition:
      'Otwarty framework do budowy agentów AI, jeden z najszybciej rosnących projektów open source. Ponieważ jest otwarty, kod i konfigurację można hostować samodzielnie. Nie ma uzależnienia od jednego dostawcy.',
    href: '/openclaw',
    hrefLabel: 'OpenClaw Polska i nasze wdrożenia',
  },
  {
    term: 'Integracja',
    definition:
      'Połączenie agenta z systemem, którego już używacie: CRM, ERP, kalendarzem, systemem kadrowym czy telefonią. To zwykle ta część wdrożenia, która najbardziej wpływa na koszt i czas. I ta, którą najtrudniej wycenić przed rozmową z Waszym działem IT.',
  },
  {
    term: 'Fine-tuning a prompt',
    definition:
      'Dwa sposoby dostosowania modelu. Prompt to instrukcja opisująca zadanie i sposób odpowiadania, tania i szybka do zmiany. Fine-tuning to douczanie modelu na własnych danych; kosztowniejsze i rzadko potrzebne, gdy wystarczy dobra baza wiedzy.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://www.infinityteam.io' },
        { '@type': 'ListItem', position: 2, name: 'Słownik AI', item: 'https://www.infinityteam.io/slownik' },
      ],
    },
    {
      '@type': 'DefinedTermSet',
      name: 'Słownik pojęć AI',
      url: 'https://www.infinityteam.io/slownik',
      inLanguage: 'pl-PL',
      hasDefinedTerm: TERMS.map((t) => ({
        '@type': 'DefinedTerm',
        name: t.term,
        description: t.definition,
        inDefinedTermSet: 'https://www.infinityteam.io/slownik',
      })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: TERMS.map((t) => ({
        '@type': 'Question',
        name: `Co to jest ${t.term.toLowerCase()}?`,
        acceptedAnswer: { '@type': 'Answer', text: t.definition },
      })),
    },
  ],
};

export default function SlownikPage() {
  return (
    <div className="min-h-screen relative" style={{ background: 'var(--bg-page)', color: 'var(--fg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="max-w-3xl mx-auto px-6 pt-8 pb-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
          <ArrowRight className="w-4 h-4 rotate-180" />
          Strona główna
        </Link>
        <nav aria-label="breadcrumb" className="text-xs text-white/40">
          <Link href="/" className="hover:text-white/70">Infinity Tech</Link>
          <span className="mx-2">/</span>
          <span className="text-white/70">Słownik</span>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-20">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-10 mb-5" style={{ letterSpacing: '-0.022em' }}>
          Słownik AI
        </h1>
        <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-12">
          Żargon wokół AI potrafi utrudnić rozmowę o rzeczach prostych. Zebraliśmy pojęcia, które najczęściej padają na
          spotkaniach z klientami, i wyjaśniliśmy je tak, jak tłumaczymy je na co dzień.
        </p>

        <dl className="space-y-0">
          {TERMS.map((t) => (
            <div key={t.term} className="py-6" style={{ borderTop: '1px solid var(--border-soft)' }}>
              <dt className="text-xl font-semibold mb-2.5" style={{ letterSpacing: '-0.012em' }}>
                {t.term}
              </dt>
              <dd className="leading-relaxed" style={{ color: 'var(--fg-70)' }}>
                {t.definition}
                {t.href && (
                  <Link
                    href={t.href}
                    className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold transition-opacity hover:opacity-70"
                    style={{ color: 'var(--accent-text)' }}
                  >
                    {t.hrefLabel}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </dd>
            </div>
          ))}
        </dl>

        <section
          className="mt-12 rounded-2xl p-7"
          style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)' }}
        >
          <h2 className="text-xl font-bold mb-3">Brakuje jakiegoś pojęcia?</h2>
          <p className="leading-relaxed mb-5" style={{ color: 'var(--fg-70)' }}>
            Napisz, to je dopiszemy. A jeśli wolisz przejść od słów do konkretu, umów bezpłatną rozmowę i zapytaj
            wprost o swój przypadek.
          </p>
          <Link
            href="/#kontakt"
            className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 bg-[#2E4AAD] hover:bg-[#1A2461] transition-colors"
            style={{ color: '#fff' }}
          >
            Umów bezpłatną konsultację
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
