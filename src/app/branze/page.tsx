import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Stethoscope, Users, Bus, Building2, Scale, Store, ChevronDown, ExternalLink } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AI dla branż — gdzie agenci sprawdzają się najlepiej',
  description:
    'Przychodnie, rekrutacja, transport, usługi, administracja. Gdzie agenci AI naprawdę pomagają, czego nie zrobią i jak zacząć od pilotażu.',
  alternates: { canonical: '/branze' },
  openGraph: {
    title: 'AI dla branż — Infinity Tech',
    description: 'Agenci głosowi i automatyzacja w przychodniach, rekrutacji, transporcie i usługach.',
    type: 'website',
  },
};

// Branże z dedykowaną stroną
const WITH_PAGE = [
  {
    icon: Stethoscope,
    href: '/branze/voicebot-dla-przychodni',
    title: 'Przychodnie i gabinety',
    lead: 'Rejestracja, która odbiera każde połączenie — także po godzinach. Agent umawia, przekłada i odwołuje wizyty, przypomina o terminach i odpowiada na pytania o przygotowanie do badań.',
  },
  {
    icon: Users,
    href: '/branze/ai-w-rekrutacji',
    title: 'Rekrutacja i agencje pracy',
    lead: 'Selekcja CV według Waszych kryteriów, wstępny screening i umawianie rozmów. Decyzje zostają po stronie rekrutera — AI zdejmuje z niego przeklikiwanie i telefony.',
  },
];

// Branże, w których pracujemy — bez dedykowanej strony (jeszcze)
const OTHER = [
  {
    icon: Bus,
    title: 'Transport i przewozy',
    lead: 'Infolinia z rozkładami jazdy, statusami kursów i reklamacjami. Publiczne demo na danych PKS Gryfice pokazuje, jak to brzmi w praktyce.',
  },
  {
    icon: Store,
    title: 'Salony, warsztaty i usługi',
    lead: 'Recepcja, która rezerwuje terminy do kalendarza i wysyła przypomnienia, żeby ograniczyć nieodwołane wizyty.',
  },
  {
    icon: Building2,
    title: 'Administracja i urzędy',
    lead: 'Infolinia bez kolejki: statusy spraw, wymagane dokumenty, kierowanie do właściwego wydziału.',
  },
  {
    icon: Scale,
    title: 'Kadry, płace i biura rachunkowe',
    lead: 'Agent, który zna Kodeks pracy, cytuje przepisy, generuje dokumenty i pilnuje terminów ZUS i PIT.',
  },
];

// Wzorce, które powtarzają się niezależnie od branży
const PATTERNS = [
  {
    title: 'Powtarzalne pytania',
    text: 'Jeśli ktoś codziennie tłumaczy to samo — godziny otwarcia, status zamówienia, jakie dokumenty przynieść — wystarczy spisać te odpowiedzi raz.',
  },
  {
    title: 'Telefon jako wąskie gardło',
    text: 'Dwie osoby przy słuchawkach nie obsłużą trzeciego dzwoniącego. Agent prowadzi kilka rozmów naraz, więc nikt nie słyszy sygnału zajętości.',
  },
  {
    title: 'Dane rozproszone po systemach',
    text: 'Gdy pracownik musi zajrzeć do kalendarza, arkusza i skrzynki, żeby odpowiedzieć na jedno pytanie, to zadanie dla automatyzacji.',
  },
  {
    title: 'Praca poza godzinami',
    text: 'Agent odbiera telefon o 22:00, kiedy rejestracja już nie pracuje, i zapisuje sprawę tak, żeby rano ktoś ją tylko dokończył.',
  },
  {
    title: 'Sezonowe piki',
    text: 'Wrzesień w przychodni, styczeń w biurze rachunkowym. Agent nie potrzebuje szkolenia przed szczytem i nie kosztuje więcej przy pięciokrotnym ruchu.',
  },
];

// Uczciwe granice — czego agent nie zrobi
const LIMITS = [
  {
    title: 'Nie zastąpi eksperta w nietypowej sprawie',
    text: 'Agent jest dobry w tym, co się powtarza. Kiedy pacjent opisuje objawy spoza wszystkich scenariuszy albo klient dzwoni z nietypową reklamacją, rozmowa idzie do człowieka. Prośba o pracownika musi działać zawsze — to warunek każdego naszego wdrożenia.',
  },
  {
    title: 'Nie podejmuje decyzji ze skutkiem prawnym ani finansowym',
    text: 'Agent przygotuje dokument, wskaże przepis i policzy termin, ale podpis i decyzja kadrowa zostają po stronie człowieka. Dlatego Superkadrowa cytuje konkretny artykuł Kodeksu pracy i pokazuje źródło — żeby dało się to sprawdzić w minutę.',
  },
  {
    title: 'Potrzebuje uporządkowanych danych',
    text: 'Jeśli cennik krąży po firmie w trzech wersjach, a grafik istnieje głównie w głowie kierownika, agent nie ma z czego korzystać. Bywa, że pierwszy etap wdrożenia to zwykłe poukładanie informacji.',
  },
];

const FAQ = [
  {
    question: 'Czy AI zadziała w mojej niszy?',
    answer:
      'Nie znamy każdej branży, ale znamy procesy — a te powtarzają się niezależnie od tego, czy sprzedajecie części do maszyn rolniczych, czy prowadzicie gabinet. Jeśli ktoś u Was odbiera te same telefony albo przepisuje dane między systemami, jest o czym rozmawiać. Na bezpłatnej konsultacji przechodzimy przez jeden proces i mówimy, czy to się spina.',
  },
  {
    question: 'Ile trzeba danych na start?',
    answer:
      'Mniej, niż się wydaje. Do pierwszej wersji zwykle wystarcza to, co i tak macie: cennik, godziny pracy, listę usług i najczęstsze pytania klientów. Superkadrowa korzysta z ponad 40 aktów prawnych i 900 dokumentów, ale to efekt miesięcy pracy, nie warunek startu. Zaczynamy wąsko i dokładamy wiedzę tam, gdzie widać, o co ludzie naprawdę pytają.',
  },
  {
    question: 'Czy pacjenci i klienci akceptują rozmowę z AI?',
    answer:
      'Akceptują, jeśli sprawa zostaje załatwiona i jeśli od razu wiedzą, z kim rozmawiają. Nasi agenci przedstawiają się na starcie jako asystent automatyczny — to uczciwe wobec dzwoniącego i bezpieczniejsze prawnie. Prośba o człowieka zawsze działa. Dziesięć minut w kolejce na infolinii irytuje bardziej niż bot, który odbiera po drugim sygnale.',
  },
  {
    question: 'Co z językiem polskim, gwarą i skrótami branżowymi?',
    answer:
      'Polszczyzna jest u nas domyślna, nie dodatkiem — głosy budujemy na ElevenLabs, z odmianą i normalną intonacją. Ze skrótami bywa różnie: L4, PIT-11 czy nazwy przystanków agent rozpozna, jeśli dostanie ich listę, dlatego w testach zbieramy słownictwo Waszych klientów, łącznie z wersjami potocznymi. Silny akcent albo głośnik w aucie potrafią sprawić kłopot — wtedy agent dopyta zamiast zgadywać.',
  },
  {
    question: 'Czy da się zacząć od pilotażu?',
    answer:
      'Tak i zwykle tak właśnie robimy. Najczęstszy wariant to agent na części ruchu: po godzinach pracy biura albo na jednym numerze i jednym typie sprawy. Po kilku tygodniach w nagraniach widać, co działa, a co trzeba przepisać. Małe wdrożenie zamyka się w 2–4 tygodniach, większe w 1–3 miesiącach; ceny startują od 5 000 zł netto plus utrzymanie od 249 zł miesięcznie.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://infinityteam.io' },
        { '@type': 'ListItem', position: 2, name: 'Branże', item: 'https://infinityteam.io/branze' },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Branże, w których wdrażamy agentów AI',
      itemListElement: WITH_PAGE.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: s.title,
        url: `https://infinityteam.io${s.href}`,
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

export default function BranzeHub() {
  return (
    <div className="min-h-screen relative" style={{ background: 'var(--bg-page)', color: 'var(--fg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="max-w-5xl mx-auto px-6 pt-8 pb-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
          <ArrowRight className="w-4 h-4 rotate-180" />
          Strona główna
        </Link>
        <nav aria-label="breadcrumb" className="text-xs text-white/40">
          <Link href="/" className="hover:text-white/70">Infinity Tech</Link>
          <span className="mx-2">/</span>
          <span className="text-white/70">Branże</span>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-20">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-10 mb-5" style={{ letterSpacing: '-0.022em' }}>
          AI dla branż
        </h1>
        <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-12 max-w-3xl">
          Technologia jest ta sama, ale sensowne zastosowanie wygląda inaczej w przychodni, a inaczej w firmie
          transportowej. Poniżej branże, w których pracujemy najczęściej — wraz z tym, co agent faktycznie w nich robi.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {WITH_PAGE.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group rounded-2xl p-7 transition-transform hover:-translate-y-1"
              style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)', boxShadow: 'var(--shadow-card, none)' }}
            >
              <s.icon className="w-7 h-7 mb-4" style={{ color: 'var(--accent-text)' }} />
              <h2 className="text-xl font-bold mb-2" style={{ letterSpacing: '-0.012em' }}>{s.title}</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--fg-70)' }}>{s.lead}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--accent-text)' }}>
                Zobacz szczegóły
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-5" style={{ letterSpacing: '-0.012em' }}>
          Pozostałe branże, w których wdrażamy
        </h2>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-7 mb-12">
          {OTHER.map((s) => (
            <div key={s.title} style={{ borderTop: '1px solid var(--border-soft)' }} className="pt-5">
              <div className="flex items-start gap-3">
                <s.icon className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: 'var(--accent-text)' }} />
                <div>
                  <h3 className="font-semibold mb-1.5">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-70)' }}>{s.lead}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4" style={{ letterSpacing: '-0.012em' }}>
            Co łączy branże, w których AI faktycznie pomaga
          </h2>
          <p className="leading-relaxed mb-6 max-w-3xl" style={{ color: 'var(--fg-70)' }}>
            Wdrożenie w przychodni wygląda inaczej niż w firmie transportowej, ale problem pod spodem bywa ten sam.
            Sprawdzamy zwykle pięć rzeczy. Jeśli widać przynajmniej dwie z nich, jest o czym rozmawiać.
          </p>
          <div className="space-y-5">
            {PATTERNS.map((p) => (
              <div key={p.title} className="pl-4" style={{ borderLeft: '2px solid var(--border-soft)' }}>
                <h3 className="font-semibold mb-1.5">{p.title}</h3>
                <p className="text-sm leading-relaxed max-w-3xl" style={{ color: 'var(--fg-70)' }}>{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4" style={{ letterSpacing: '-0.012em' }}>
            Czego agent nie zrobi
          </h2>
          <p className="leading-relaxed mb-6 max-w-3xl" style={{ color: 'var(--fg-70)' }}>
            Najgorsze wdrożenia to te, w których ktoś na starcie obiecał za dużo. Dlatego granice pokazujemy od razu.
          </p>
          <div className="space-y-5">
            {LIMITS.map((l) => (
              <div key={l.title} className="pl-4" style={{ borderLeft: '2px solid var(--border-soft)' }}>
                <h3 className="font-semibold mb-1.5">{l.title}</h3>
                <p className="text-sm leading-relaxed max-w-3xl" style={{ color: 'var(--fg-70)' }}>{l.text}</p>
              </div>
            ))}
          </div>
          <p className="leading-relaxed mt-6 max-w-3xl" style={{ color: 'var(--fg-70)' }}>
            Zdarza się, że po konsultacji odradzamy wdrożenie. Przy 20 telefonach w tygodniu sam koszt utrzymania
            zwracałby się latami.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4" style={{ letterSpacing: '-0.012em' }}>
            Przykłady z naszych dem
          </h2>
          <p className="leading-relaxed mb-4 max-w-3xl" style={{ color: 'var(--fg-70)' }}>
            Zamiast opisywać, jak to brzmi, wolimy pokazać. Demo głosowe zbudowaliśmy na publicznych danych
            rozkładowych PKS Gryfice — to nasza prezentacja, a nie wdrożenie u przewoźnika. Agent zna 6 przystanków i
            276 odjazdów, a przy każdej odpowiedzi podaje źródło, z którego wziął godzinę. To ważniejsze, niż się
            wydaje: agenta, który pokazuje dane, można sprawdzić. Adres: pks-gryfice-demo.vercel.app.
          </p>
          <p className="leading-relaxed mb-5 max-w-3xl" style={{ color: 'var(--fg-70)' }}>
            Drugie demo to pięcioro asystentów z różnych branż: Tomek obsługuje transport, Ewa medycynę, Zofia
            nieruchomości, Ola usługi, a Kuba administrację. Każde ma inny scenariusz rozmowy i inny zakres wiedzy.
            Dobrze słychać, jak ten sam silnik zmienia charakter w zależności od tego, czym się go nakarmi. Adres:
            asystenci-glosowi.vercel.app.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://pks-gryfice-demo.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors"
              style={{ color: 'var(--accent-text)', border: '1px solid var(--border-soft)' }}
            >
              Demo głosowe na danych PKS Gryfice
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://asystenci-glosowi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors"
              style={{ color: 'var(--accent-text)', border: '1px solid var(--border-soft)' }}
            >
              Pięcioro asystentów branżowych
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-5" style={{ letterSpacing: '-0.012em' }}>
            Częste pytania
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
                  <ChevronDown
                    className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180"
                    style={{ color: 'var(--accent-text)' }}
                  />
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: 'var(--fg-70)' }}>{f.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-2xl p-7" style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)' }}>
          <h2 className="text-xl font-bold mb-3">Nie ma tu Twojej branży?</h2>
          <p className="leading-relaxed mb-5" style={{ color: 'var(--fg-70)' }}>
            To nie problem — wzorce się powtarzają. Jeśli w firmie ktoś odbiera te same telefony albo przepisuje dane
            między systemami, jest co automatyzować. Opowiedz nam o swoim procesie, a powiemy, czy to ma sens.
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
