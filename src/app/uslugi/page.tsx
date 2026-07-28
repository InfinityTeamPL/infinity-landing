import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, PhoneCall, MessagesSquare, Workflow, Wrench, ChevronDown, Check, Minus } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Usługi AI dla firm — agenci, chatboty, automatyzacja',
  description:
    'Agenci głosowi, chatboty, automatyzacja procesów i kadr. Sprawdź, która usługa pasuje do Twojej firmy, ile kosztuje wdrożenie i od czego zacząć.',
  alternates: { canonical: '/uslugi' },
  openGraph: {
    title: 'Usługi AI dla firm — Infinity Tech',
    description: 'Agenci głosowi, chatboty, automatyzacja procesów i wdrożenia szyte na miarę.',
    type: 'website',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

const SERVICES = [
  {
    icon: PhoneCall,
    href: '/uslugi/agent-glosowy-ai',
    title: 'Agent głosowy AI',
    lead: 'Odbiera telefony przez całą dobę, rozmawia naturalną polszczyzną i realnie załatwia sprawy. Podaje informacje, umawia terminy, przyjmuje zgłoszenia.',
    bullets: ['Infolinia bez kolejek', 'Rejestracja i rezerwacje', 'Naturalny głos (ElevenLabs)'],
  },
  {
    icon: MessagesSquare,
    href: '/uslugi/chatbot-ai',
    title: 'Chatbot AI dla firm',
    lead: 'Jeden agent wpięty w kanały, których już używacie: WhatsApp, Slack, Teams, Telegram i ponad 20 innych. Zna Waszą wiedzę firmową, a trudniejsze sprawy przekazuje człowiekowi.',
    bullets: ['23+ kanałów komunikacji', 'Wiedza z Waszych dokumentów', 'Obsługa klienta 24/7'],
  },
  {
    icon: Workflow,
    href: '/uslugi/automatyzacja-procesow-ai',
    title: 'Automatyzacja procesów AI',
    lead: 'Agenci, którzy wykonują pracę, a nie tylko odpowiadają: przetwarzają dokumenty, uzupełniają systemy, przygotowują raporty i pilnują terminów.',
    bullets: ['Dokumenty i raporty', 'Integracje z CRM/ERP', 'Człowiek w pętli decyzji'],
  },
  {
    icon: Wrench,
    href: '/uslugi/automatyzacja-hr',
    title: 'Automatyzacja HR i kadr',
    lead: 'Selekcja CV, onboarding, dokumenty kadrowe i pilnowanie terminów ZUS/PIT. Ten wertykał znamy najlepiej, bo zbudowaliśmy w nim własny produkt.',
    bullets: ['Dokumenty kadrowe', 'Terminy ZUS i PIT', 'Wsparcie rekrutacji'],
  },
];

const CHOICE = [
  {
    title: 'Agent głosowy AI',
    href: '/uslugi/agent-glosowy-ai',
    yes: 'Telefon dzwoni cały dzień i w kółko o to samo: godziny otwarcia, wolne terminy, status sprawy. Klienci nie mogą się dodzwonić po 16:00 albo czekają w kolejce w poniedziałkowy poranek.',
    no: 'Odbieracie pięć telefonów dziennie i każdy dotyczy czegoś innego. Przy takim wolumenie wdrożenie się nie zwróci. Powiemy to wprost na pierwszej rozmowie.',
  },
  {
    title: 'Chatbot AI dla firm',
    href: '/uslugi/chatbot-ai',
    yes: 'Klienci piszą kilkoma kanałami naraz (czat na stronie, WhatsApp, Messenger, mail), a odpowiedzi na większość pytań już gdzieś macie spisane. Działa też do środka: pytania pracowników na Slacku czy w Teams.',
    no: 'Wiedza siedzi w głowach ludzi, a rozmowy to głównie negocjacje. Najpierw warto spisać procedury, dopiero potem podpinać agenta.',
  },
  {
    title: 'Automatyzacja procesów AI',
    href: '/uslugi/automatyzacja-procesow-ai',
    yes: 'Ktoś w firmie przepisuje dane z maila do systemu, składa co tydzień ten sam raport albo ręcznie pilnuje terminów. Proces da się opisać krok po kroku i ma jasne reguły.',
    no: 'Proces zmienia się co miesiąc, dwie osoby robią go inaczej albo wraca raz na kwartał. Automatyzacja utrwali wtedy bałagan zamiast go usunąć.',
  },
  {
    title: 'Automatyzacja HR i kadr',
    href: '/uslugi/automatyzacja-hr',
    yes: 'Na rekrutację spływa kilkadziesiąt CV, onboarding wygląda za każdym razem tak samo, a kadry pilnują dokumentów i terminów ZUS/PIT. To obszar, w którym siedzimy najgłębiej: zbudowaliśmy w nim Superkadrową, kadrową AI cytującą Kodeks pracy.',
    no: 'Zespół liczy kilka osób, rekrutacja zdarza się raz w roku, a papiery prowadzi zewnętrzne biuro rachunkowe. Arkusz i kalendarz nadal wystarczą.',
  },
];

const START_CRITERIA = [
  {
    label: 'Powtarzalny',
    text: 'Ktoś robi to samo co tydzień według tego samego schematu. Jednorazowe zadania zostawiamy ludziom.',
  },
  {
    label: 'Wysokowolumenowy',
    text: 'Dzieje się często. Sto telefonów tygodniowo daje efekt widoczny w pierwszym miesiącu. Dziesięć już nie.',
  },
  {
    label: 'Regułowy',
    text: 'Da się opisać, kiedy odpowiedź brzmi tak, a kiedy nie. Tam, gdzie potrzebna jest decyzja, zostawiamy człowieka w pętli.',
  },
  {
    label: 'Mierzalny',
    text: 'Wiadomo, co sprawdzamy po wdrożeniu: liczbę nieodebranych połączeń, czas odpowiedzi, liczbę zgłoszeń załatwionych bez pracownika.',
  },
];

const FAQ = [
  {
    question: 'Czy trzeba mieć własny dział IT?',
    answer:
      'Nie. Konfigurację, integracje i utrzymanie bierzemy na siebie. Po Waszej stronie potrzebna jest jedna osoba, która zna proces i odpowie na pytania merytoryczne: zwykle kierownik rejestracji, szef biura obsługi albo kadrowa. Jeśli dział IT jest, ustalamy z nim dostępy i zasady bezpieczeństwa, ale nie musi nic programować.',
  },
  {
    question: 'Czy można zacząć od jednego procesu?',
    answer:
      'Tak i właśnie to zalecamy. Jeden proces wdraża się szybciej, taniej i widać po nim efekt, zanim podejmiecie decyzję o kolejnych. Dopiero gdy pierwszy agent działa i wiadomo, ile realnie oszczędza, ma sens dokładanie kolejnych kanałów i zadań. Start od wszystkiego naraz zwykle kończy się przeciąganiem projektu.',
  },
  {
    question: 'Co z RODO i naszymi danymi?',
    answer:
      'Dane trzymamy na serwerach w Polsce i Unii Europejskiej, a wdrożenia projektujemy zgodnie z RODO, według standardów zgodnych z ISO 27001. Przed startem ustalamy, jakie dane agent w ogóle widzi, jak długo są przechowywane i kto ma do nich dostęp. Zakres ograniczamy do tego, co jest potrzebne do obsłużenia sprawy.',
  },
  {
    question: 'Jak długo trwa wdrożenie?',
    answer:
      'Mniejsze wdrożenia zajmują 2–4 tygodnie od pierwszej rozmowy do startu produkcyjnego. Większe projekty, z integracjami do systemów wewnętrznych i wieloma kanałami, to 1–3 miesiące. Najwięcej czasu pochłania zwykle nie technologia, tylko zebranie i uporządkowanie wiedzy, na której agent ma pracować.',
  },
  {
    question: 'Co jeśli agent sobie nie poradzi?',
    answer:
      'Agent ma wyznaczone granice. Kiedy pytanie wychodzi poza jego wiedzę albo rozmowa robi się trudna, mówi o tym wprost i przekazuje sprawę człowiekowi razem z podsumowaniem tego, co już ustalił. Klient nie zaczyna od zera. Takie sytuacje przeglądamy w ramach utrzymania i uzupełniamy bazę wiedzy tam, gdzie widać luki.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://www.infinityteam.io' },
        { '@type': 'ListItem', position: 2, name: 'Usługi', item: 'https://www.infinityteam.io/uslugi' },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Usługi AI dla firm',
      itemListElement: SERVICES.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: s.title,
        url: `https://www.infinityteam.io${s.href}`,
      })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

export default function UslugiHub() {
  return (
    <div className="min-h-screen relative" style={{ background: 'var(--bg-page)', color: 'var(--fg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="max-w-5xl mx-auto px-6 pt-8 pb-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 py-1.5 text-sm text-white/60 hover:text-white transition-colors">
          <ArrowRight className="w-4 h-4 rotate-180" />
          Strona główna
        </Link>
        <nav aria-label="breadcrumb" className="text-xs text-white/40">
          <Link href="/" className="hover:text-white/70">Infinity Tech</Link>
          <span className="mx-2">/</span>
          <span className="text-white/70">Usługi</span>
        </nav>
      </header>

      <main id="tresc" tabIndex={-1} className="max-w-5xl mx-auto px-6 pb-20">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-10 mb-5" style={{ letterSpacing: '-0.022em' }}>
          Usługi AI dla firm
        </h1>
        <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-12 max-w-3xl">
          Pracujemy w czterech obszarach. Zwykle zaczyna się od jednego procesu, który zżera najwięcej czasu, a nie od
          wdrażania wszystkiego naraz. Poniżej zakres każdej usługi; pierwsza rozmowa jest bezpłatna.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group rounded-2xl p-7 transition-transform hover:-translate-y-1"
              style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)', boxShadow: 'var(--shadow-card, none)' }}
            >
              <s.icon className="w-7 h-7 mb-4" style={{ color: 'var(--accent-text)' }} />
              <h2 className="text-xl font-bold mb-2" style={{ letterSpacing: '-0.012em' }}>{s.title}</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--fg-70)' }}>{s.lead}</p>
              <ul className="space-y-1.5 mb-5">
                {s.bullets.map((b) => (
                  <li key={b} className="text-sm flex items-center gap-2" style={{ color: 'var(--fg-60)' }}>
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--accent-text)' }} />
                    {b}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--accent-text)' }}>
                Zobacz szczegóły
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>

        {/* Którą usługę wybrać: lista porównawcza */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ letterSpacing: '-0.012em' }}>
            Którą usługę wybrać?
          </h2>
          <p className="leading-relaxed mb-7 max-w-3xl" style={{ color: 'var(--fg-70)' }}>
            Najczęściej decyduje skala. Ten sam agent, który w jednym miejscu zwraca się w trzy miesiące,
            w innym jest wydatkiem bez pokrycia. Poniżej krótko: kiedy która usługa się sprawdza, a kiedy lepiej
            odpuścić. Pełne porównanie kosztów, czasu wdrożenia i typów spraw między telefonem a czatem znajdziecie
            w artykule{' '}
            <Link href="/blog/voicebot-czy-chatbot" className="font-semibold hover:underline" style={{ color: 'var(--accent-text)' }}>
              Voicebot czy chatbot
            </Link>
            .
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {CHOICE.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl p-6"
                style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)', boxShadow: 'var(--shadow-card, none)' }}
              >
                <h3 className="text-lg font-bold mb-4">
                  <Link href={c.href} className="hover:underline" style={{ color: 'var(--accent-text)' }}>
                    {c.title}
                  </Link>
                </h3>
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--accent-text)' }} />
                    Dobry wybór, gdy
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-70)' }}>{c.yes}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                    <Minus className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--fg-60)' }} />
                    Raczej nie, gdy
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-60)' }}>{c.no}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="leading-relaxed mt-8 max-w-3xl" style={{ color: 'var(--fg-70)' }}>
            Część z Was nie wybiera jednej usługi, tylko łączy telefon i czat w jedną obsługę klienta z jedną bazą
            wiedzy. Taki układ opisaliśmy osobno na stronie o{' '}
            <Link
              href="/uslugi/automatyzacja-obslugi-klienta"
              className="font-semibold hover:underline"
              style={{ color: 'var(--accent-text)' }}
            >
              automatyzacji obsługi klienta
            </Link>
            .
          </p>
        </section>

        {/* Od czego zaczynamy */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ letterSpacing: '-0.012em' }}>
            Od czego zwykle zaczynamy
          </h2>
          <p className="leading-relaxed mb-4 max-w-3xl" style={{ color: 'var(--fg-70)' }}>
            Od jednego procesu. Nie od strategii AI dla całej firmy i nie od pięciu agentów naraz. Wybieramy razem
            miejsce, w którym najwięcej czasu idzie na powtarzalną robotę, uruchamiamy tam agenta i po kilku tygodniach
            sprawdzamy liczby. Jeśli działa, rozszerzamy zakres. Jeśli nie, ryzykowaliście jeden proces, a nie budżet
            na rok. I rzadko wygrywa ten proces, który wszyscy typują na pierwszym spotkaniu.
          </p>
          <p className="leading-relaxed mb-7 max-w-3xl" style={{ color: 'var(--fg-70)' }}>
            Pierwszy proces wybieramy według czterech kryteriów:
          </p>
          <ul className="space-y-3">
            {START_CRITERIA.map((c) => (
              <li
                key={c.label}
                className="rounded-2xl px-5 py-4"
                style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)' }}
              >
                <span className="font-semibold">{c.label}.</span>{' '}
                <span style={{ color: 'var(--fg-70)' }}>{c.text}</span>
              </li>
            ))}
          </ul>
          <p className="leading-relaxed mt-6 max-w-3xl" style={{ color: 'var(--fg-70)' }}>
            Jeśli proces nie spełnia trzech z czterech, szukamy lepszego kandydata. Czasem po takiej rozmowie wychodzi,
            że automatyzacja nie jest teraz potrzebna. Mówimy to od razu.
          </p>
        </section>

        {/* Koszty */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ letterSpacing: '-0.012em' }}>
            Ile to kosztuje
          </h2>
          <p className="leading-relaxed mb-4 max-w-3xl" style={{ color: 'var(--fg-70)' }}>
            Wdrożenie zaczyna się od 5 000 zł netto. Tyle kosztuje mały, dobrze zamknięty zakres, na przykład agent
            na stronie z bazą wiedzy o ofercie. Większe projekty z integracjami do systemów wewnętrznych wyceniamy
            indywidualnie, po rozpoznaniu zakresu. Do tego dochodzi utrzymanie: Starter 249 zł, Standard 499 zł albo
            Premium 799 zł miesięcznie, zależnie od skali i tego, ile rozwoju agent potrzebuje po starcie.
          </p>
          <p className="leading-relaxed max-w-3xl" style={{ color: 'var(--fg-70)' }}>
            Czas realizacji to 2–4 tygodnie przy mniejszych wdrożeniach i 1–3 miesiące przy większych. Pierwsza
            konsultacja jest bezpłatna i kończy się konkretną wyceną, nie prezentacją. Rozbicie na pakiety znajdziesz
            w{' '}
            <Link href="/cennik" className="font-semibold hover:underline" style={{ color: 'var(--accent-text)' }}>
              cenniku wdrożeń AI
            </Link>
            .
          </p>
        </section>

        {/* FAQ w <details>: pełna treść w HTML, zero JS */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ letterSpacing: '-0.012em' }}>
            Częste pytania o nasze usługi
          </h2>
          <div className="space-y-3">
            {FAQ.map((f) => (
              <details
                key={f.question}
                className="group rounded-2xl overflow-hidden"
                style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)' }}
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-medium list-none [&::-webkit-details-marker]:hidden">
                  {f.question}
                  <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: 'var(--accent-text)' }} />
                </summary>
                <p className="px-5 pb-5 leading-relaxed" style={{ color: 'var(--fg-70)' }}>{f.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl p-7" style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)' }}>
          <h2 className="text-xl font-bold mb-3">Nie wiesz, od czego zacząć?</h2>
          <p className="leading-relaxed mb-5" style={{ color: 'var(--fg-70)' }}>
            Najczęściej tak właśnie wygląda pierwsza rozmowa. Przechodzimy przez Wasze procesy, wskazujemy te, które
            najszybciej się zwrócą, i mówimy wprost, jeśli automatyzacja nie ma tu sensu.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/#kontakt"
              className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 bg-[#2E4AAD] hover:bg-[#1A2461] transition-colors"
              style={{ color: '#fff' }}
            >
              Umów bezpłatną konsultację
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cennik"
              className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2"
              style={{ color: 'var(--accent-text)', border: '1px solid var(--border-soft)' }}
            >
              Zobacz orientacyjne koszty
            </Link>
            <Link
              href="/kalkulator"
              className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2"
              style={{ color: 'var(--accent-text)', border: '1px solid var(--border-soft)' }}
            >
              Policz ROI
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
