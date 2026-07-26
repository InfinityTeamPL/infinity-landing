import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Słownik AI — pojęcia wyjaśnione po ludzku',
  description:
    'Agent AI, voicebot, chatbot, RAG, halucynacja, LLM, token, AI Act. Trzydzieści pojęć bez żargonu, dla osób wdrażających AI w firmie, a nie piszących kod.',
  alternates: { canonical: '/slownik' },
  openGraph: {
    title: 'Słownik AI — pojęcia wyjaśnione po ludzku | Infinity Tech',
    description: 'Agent AI, voicebot, RAG, LLM i reszta żargonu — wytłumaczone zrozumiale.',
    type: 'website',
  },
};

// Grupy porządkują listę i dają frazowe H2. Kolejność tu = kolejność na stronie.
const GROUPS = [
  'Podstawy',
  'Rozmowa i głos',
  'Wiedza i jakość odpowiedzi',
  'Wdrożenie i integracje',
  'Koszty',
  'Prawo i bezpieczeństwo',
] as const;

type Group = (typeof GROUPS)[number];

interface Term {
  term: string;
  definition: string;
  group: Group;
  more?: string;
  href?: string;
  hrefLabel?: string;
}

const TERMS: Term[] = [
  {
    group: 'Podstawy',
    term: 'Sztuczna inteligencja (AI)',
    definition:
      'Zbiorcza nazwa na programy radzące sobie z zadaniami, które wcześniej wymagały człowieka: rozumieniem tekstu, mowy albo obrazu. W rozmowach biznesowych kryje się dziś pod tym hasłem najczęściej model językowy i to, co da się wokół niego zbudować. Sama nazwa niewiele mówi o tym, co narzędzie faktycznie potrafi.',
  },
  {
    group: 'Podstawy',
    term: 'Agent AI',
    definition:
      'Program oparty na modelu językowym, który poza odpowiadaniem na pytania wykonuje też zadania: wyszukuje dane, wypełnia formularze, umawia terminy, wysyła wiadomości. Od zwykłego chatbota różni go dostęp do narzędzi i to, że potrafi działać w Waszych systemach.',
    href: '/blog/agent-ai-a-chatbot',
    hrefLabel: 'Agent AI a chatbot: czym się różnią',
  },
  {
    group: 'Rozmowa i głos',
    term: 'Agent głosowy (voicebot)',
    definition:
      'Agent AI, który rozmawia głosem przez telefon lub przeglądarkę. Rozumie swobodną mowę, więc nie trzeba wciskać klawiszy jak na starej automatycznej infolinii. W trakcie rozmowy potrafi też sprawdzić dane i wykonać akcję, na przykład zarezerwować termin.',
    href: '/uslugi/agent-glosowy-ai',
    hrefLabel: 'Jak wdrażamy agenta głosowego AI',
  },
  {
    group: 'Podstawy',
    term: 'LLM (duży model językowy)',
    definition:
      'Silnik, który stoi za rozumieniem i generowaniem tekstu, na przykład GPT, Claude czy Gemini. Sam w sobie nie zna Waszej firmy: wiedzę o niej trzeba mu dostarczyć osobno.',
  },
  {
    group: 'Wiedza i jakość odpowiedzi',
    term: 'RAG (odpytywanie własnej bazy wiedzy)',
    definition:
      'Metoda, w której agent najpierw szuka w Waszych dokumentach, a odpowiada dopiero na podstawie tego, co znalazł. Dzięki temu opiera się na faktach z firmy, a nie na ogólnej wiedzy modelu, i może wskazać źródło.',
  },
  {
    group: 'Wiedza i jakość odpowiedzi',
    term: 'Halucynacja',
    definition:
      'Sytuacja, w której model podaje nieprawdziwą informację brzmiącą wiarygodnie. Do zera tego nie da się sprowadzić, ale da się mocno ograniczyć: każąc agentowi opierać odpowiedzi na konkretnych dokumentach, cytować źródło i mówić „nie wiem”, gdy danych brakuje.',
  },
  {
    group: 'Wiedza i jakość odpowiedzi',
    term: 'Człowiek w pętli',
    definition:
      'Decyzje o istotnych skutkach zatwierdza człowiek, a agent je tylko przygotowuje. Przykładowo AI rekomenduje kandydatów do rozmowy, ale nikogo samodzielnie nie odrzuca.',
  },
  {
    group: 'Prawo i bezpieczeństwo',
    term: 'BYOK (własne klucze API)',
    definition:
      'Korzystacie z własnego konta u dostawcy modelu, a firma wdrożeniowa pobiera opłatę tylko za hosting i utrzymanie. Za zużycie modelu płacicie bezpośrednio, bez marży pośrednika.',
  },
  {
    group: 'Prawo i bezpieczeństwo',
    term: 'Self-hosting (wdrożenie on-premise)',
    definition:
      'Uruchomienie agenta na Waszej infrastrukturze albo na serwerze przypisanym tylko do Was, zamiast we współdzielonej chmurze dostawcy. Częsty wymóg tam, gdzie przetwarza się dane wrażliwe: w medycynie, kadrach czy finansach.',
  },
  {
    group: 'Wdrożenie i integracje',
    term: 'Omnichannel (wielokanałowość)',
    definition:
      'Jeden agent obsługujący wiele kanałów naraz (WhatsApp, Slack, Teams, czat na stronie), z tą samą wiedzą i historią rozmowy, zamiast osobnego bota w każdym miejscu.',
    href: '/uslugi/chatbot-ai',
    hrefLabel: 'Chatbot AI dla firm',
  },
  {
    group: 'Wdrożenie i integracje',
    term: 'OpenClaw',
    definition:
      'Otwarty framework do budowy agentów AI, jeden z najszybciej rosnących projektów open source. Ponieważ jest otwarty, kod i konfigurację można hostować samodzielnie. Nie ma uzależnienia od jednego dostawcy.',
    href: '/openclaw',
    hrefLabel: 'OpenClaw Polska i nasze wdrożenia',
  },
  {
    group: 'Wdrożenie i integracje',
    term: 'Integracja',
    definition:
      'Połączenie agenta z systemem, którego już używacie: CRM, ERP, kalendarzem, systemem kadrowym czy telefonią. To zwykle ta część wdrożenia, która najbardziej wpływa na koszt i czas. I ta, którą najtrudniej wycenić przed rozmową z Waszym działem IT.',
  },
  {
    group: 'Wiedza i jakość odpowiedzi',
    term: 'Fine-tuning a prompt',
    definition:
      'Dwa sposoby dostosowania modelu. Prompt to instrukcja opisująca zadanie i sposób odpowiadania, tania i szybka do zmiany. Fine-tuning to douczanie modelu na własnych danych; kosztowniejsze i rzadko potrzebne, gdy wystarczy dobra baza wiedzy.',
  },
  {
    group: 'Podstawy',
    term: 'Uczenie maszynowe',
    definition:
      'Sposób tworzenia programów, w którym zamiast pisać reguły ręcznie, pokazuje się systemowi przykłady, a on sam wyłapuje z nich wzorce. Model językowy powstał dokładnie tak, tylko na ogromnej ilości tekstu.',
  },
  {
    group: 'Podstawy',
    term: 'AI generatywna',
    definition:
      'Modele, które tworzą nową treść: tekst, obraz, głos albo kod. To odróżnia je od starszych zastosowań AI, gdzie chodziło głównie o klasyfikowanie i przewidywanie. Agent w firmie zwykle korzysta z obu rzeczy naraz.',
  },
  {
    group: 'Podstawy',
    term: 'Chatbot',
    definition:
      'Program prowadzący rozmowę tekstową. Starsze chatboty chodzą po sztywnym drzewku pytań i odpowiedzi, więc gubią się, gdy ktoś sformułuje pytanie inaczej, niż przewidział autor scenariusza. Nowsze opierają się na modelu językowym i rozumieją swobodne zdania.',
    href: '/uslugi/chatbot-ai',
    hrefLabel: 'Chatbot AI dla firm',
  },
  {
    group: 'Podstawy',
    term: 'Asystent AI a agent AI',
    definition:
      'Asystent podpowiada i czeka na decyzję człowieka. Agent dostaje cel i sam wykonuje kroki, żeby go osiągnąć: sprawdza dane, wypełnia formularz, wysyła wiadomość. Granica bywa płynna, a sporo narzędzi reklamuje się jako agent, choć w praktyce zatrzymuje się na podpowiedzi.',
  },
  {
    group: 'Rozmowa i głos',
    term: 'IVR (tonowe menu telefoniczne)',
    definition:
      'Klasyczna automatyczna infolinia z komendą „wciśnij 1". Dzwoniący porusza się po sztywnym drzewku, a sprawy spoza menu i tak lądują u konsultanta. Voicebot różni się tym, że rozumie zdanie powiedziane własnymi słowami.',
    href: '/blog/voicebot-a-ivr',
    hrefLabel: 'Voicebot a IVR: co daje zmiana',
  },
  {
    group: 'Rozmowa i głos',
    term: 'Text-to-speech i speech-to-text',
    definition:
      'Dwa kroki każdej rozmowy głosowej. Speech-to-text zamienia mowę dzwoniącego na tekst, a text-to-speech czyta odpowiedź na głos. Jakość tego drugiego decyduje o tym, czy rozmowa brzmi naturalnie, czy jak lektor z automatu.',
  },
  {
    group: 'Rozmowa i głos',
    term: 'Latencja',
    definition:
      'Opóźnienie między końcem pytania a początkiem odpowiedzi. Przy czacie nikt go nie zauważa. Przy telefonie owszem: powyżej mniej więcej sekundy rozmowa zaczyna się rwać i słychać, że po drugiej stronie jest maszyna. To jeden z twardszych warunków przy voicebotach.',
  },
  {
    group: 'Rozmowa i głos',
    term: 'Intencja (intent)',
    definition:
      'To, o co dzwoniącemu naprawdę chodzi, niezależnie od użytych słów. „Kiedy jedzie autobus do Kołobrzegu" i „o której mam odjazd na Kołobrzeg" to jedna intencja. Od trafności jej rozpoznania zależy, ile rozmów agent zamknie samodzielnie.',
  },
  {
    group: 'Rozmowa i głos',
    term: 'Eskalacja do człowieka',
    definition:
      'Moment, w którym agent oddaje rozmowę pracownikowi. Ustala się go świadomie, na etapie projektu: sprawy sporne, reklamacje, wszystko, gdzie pomyłka drogo kosztuje. Agent bez zaprojektowanej eskalacji prędzej czy później zamknie klienta w pętli.',
  },
  {
    group: 'Wiedza i jakość odpowiedzi',
    term: 'Okno kontekstowe',
    definition:
      'Ile tekstu model bierze pod uwagę naraz: instrukcja, historia rozmowy i dołączone dokumenty razem. Po przekroczeniu limitu najstarsze fragmenty wypadają, więc agent potrafi zapomnieć, co ustaliliście na początku rozmowy.',
  },
  {
    group: 'Wiedza i jakość odpowiedzi',
    term: 'Baza wektorowa (embeddingi)',
    definition:
      'Sposób przechowywania dokumentów, w którym wyszukiwanie idzie po znaczeniu, a nie po dokładnym słowie. Dzięki temu pytanie o „urlop na żądanie" trafi we właściwy przepis, nawet jeśli w dokumencie użyto innego sformułowania. To część składowa RAG.',
  },
  {
    group: 'Wiedza i jakość odpowiedzi',
    term: 'NLP (przetwarzanie języka naturalnego)',
    definition:
      'Dziedzina zajmująca się tym, żeby program radził sobie z ludzkim językiem. Starsze systemy NLP trzeba było uczyć osobno pod każdy przypadek użycia. Modele językowe sporo z tego przejęły, choć polszczyzna bywa dla nich trudniejsza niż angielski.',
  },
  {
    group: 'Wdrożenie i integracje',
    term: 'API',
    definition:
      'Ustalony sposób, w jaki dwa programy wymieniają się danymi. Jeśli Wasz CRM albo system kadrowy ma API, agent może z niego czytać i do niego zapisywać. Jeśli nie ma, integracja robi się droższa i czasem trzeba iść naokoło.',
  },
  {
    group: 'Wdrożenie i integracje',
    term: 'RPA a agent AI',
    definition:
      'RPA to starsze podejście: robot klika w interfejsie tak jak człowiek, krok po kroku według scenariusza. Sprawdza się przy powtarzalnych zadaniach bez wyjątków, ale psuje się, gdy zmieni się układ ekranu. Agent AI radzi sobie z wyjątkami, za to trudniej z góry przewidzieć jego zachowanie co do kroku.',
    href: '/uslugi/automatyzacja-procesow-ai',
    hrefLabel: 'Automatyzacja procesów AI',
  },
  {
    group: 'Koszty',
    term: 'Token (jednostka rozliczeniowa)',
    definition:
      'Kawałek tekstu, na jaki model dzieli zdanie, z grubsza sylaba albo krótkie słowo. Dostawcy modeli rozliczają się właśnie za tokeny, w obie strony: za pytanie i za odpowiedź. Polski tekst zużywa ich więcej niż angielski o tej samej treści, co warto uwzględnić w budżecie.',
    href: '/cennik',
    hrefLabel: 'Ile kosztuje wdrożenie AI',
  },
  {
    group: 'Prawo i bezpieczeństwo',
    term: 'AI Act',
    definition:
      'Unijne rozporządzenie porządkujące stosowanie AI, wchodzące etapami. Dzieli zastosowania według ryzyka: część jest zakazana, część uznana za wysokiego ryzyka i obwarowana wymogami, reszta podlega głównie obowiązkowi poinformowania rozmówcy, że ma do czynienia z automatem. Ten ostatni wymóg obowiązuje od 2 sierpnia 2026 i dotyczy chatbotów oraz voicebotów. Rekrutacja to osobny przypadek, bo zatrudnienie zaliczono do wysokiego ryzyka, z terminem przesuniętym na grudzień 2027.',
    href: '/blog/ai-act-chatboty-obowiazki',
    hrefLabel: 'Co obowiązuje od 2 sierpnia 2026',
  },
  {
    group: 'Prawo i bezpieczeństwo',
    term: 'RODO a agenci AI',
    definition:
      'Agent przetwarzający dane osobowe podlega tym samym zasadom, co każdy inny system: podstawa prawna, minimalizacja danych, umowa powierzenia z dostawcą, informacja dla osoby, której dane dotyczą. W praktyce najczęściej rozstrzyga to, gdzie fizycznie stoi serwer i czy treść rozmów nie zasila uczenia cudzych modeli.',
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

        {GROUPS.map((group) => {
          const inGroup = TERMS.filter((t) => t.group === group);
          if (inGroup.length === 0) return null;
          return (
            <section key={group} className="mb-10">
              <h2 className="text-2xl font-bold mb-1 mt-10" style={{ letterSpacing: '-0.012em' }}>
                {group}
              </h2>
              <dl className="space-y-0">
                {inGroup.map((t) => (
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
            </section>
          );
        })}

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
