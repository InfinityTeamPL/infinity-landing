import type { Metadata } from 'next';
import SeoLanding, { SeoLandingContent } from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'AI w rekrutacji — selekcja CV i voicebot rekrutacyjny',
  description:
    'AI w rekrutacji: automatyczna selekcja CV, wstępny screening głosowy i umawianie rozmów. Decyzje zawsze podejmuje człowiek. Umów bezpłatną konsultację.',
  alternates: { canonical: '/branze/ai-w-rekrutacji' },
  openGraph: {
    title: 'AI w rekrutacji — selekcja CV i voicebot rekrutacyjny',
    description:
      'Automatyzacja rekrutacji: selekcja CV według Twoich kryteriów, wstępne rozmowy głosowe i komunikacja z kandydatami. AI wspiera, człowiek decyduje.',
    type: 'website',
  },
};

const content: SeoLandingContent = {
  path: '/branze/ai-w-rekrutacji',
  breadcrumbLabel: 'AI w rekrutacji',
  h1: 'AI w rekrutacji — selekcja CV i wstępne rozmowy bez kolejek',
  lead: 'AI w rekrutacji to zestaw agentów, które przejmują powtarzalną część procesu: selekcję CV według ustalonych kryteriów, wstępny screening telefoniczny, umawianie rozmów i bieżącą komunikację z kandydatami. Rekruter dostaje uporządkowaną krótką listę zamiast stosu zgłoszeń — a każdą decyzję o kandydacie podejmuje człowiek, nie algorytm.',
  serviceName: 'AI w rekrutacji — automatyzacja selekcji CV i screeningu',
  serviceDescription:
    'Wdrożenie AI do rekrutacji: automatyczna selekcja CV według kryteriów klienta, voicebot rekrutacyjny do wstępnych rozmów, umawianie spotkań i komunikacja z kandydatami. Dane kandydatów na serwerach w Polsce, zgodnie z RODO. Decyzje podejmuje człowiek.',
  sections: [
    {
      heading: 'Co automatyzujemy w procesie rekrutacji',
      paragraphs: [
        'Największy koszt rekrutacji nie siedzi w rozmowach finałowych, tylko we wszystkim, co dzieje się wcześniej: przeglądaniu setek CV, wykonywaniu dziesiątek podobnych telefonów, żonglowaniu kalendarzami i odpisywaniu kandydatom na te same pytania. To praca powtarzalna, oparta na jasnych regułach — czyli dokładnie taka, którą warto oddać agentom AI.',
        'Automatyzacja rekrutacji w naszym wydaniu obejmuje cztery obszary, które można wdrożyć razem albo osobno:',
      ],
      bullets: [
        'Selekcja CV według kryteriów — agent czyta każde zgłoszenie i ocenia je względem wymagań ustalonych z Tobą: doświadczenie, uprawnienia, lokalizacja, dyspozycyjność, znajomość języków. Wynik to posortowana lista z uzasadnieniem przy każdym kandydacie.',
        'Wstępny screening głosowy — voicebot rekrutacyjny dzwoni do kandydatów lub odbiera ich telefony, zadaje ustalone pytania (dostępność, oczekiwania finansowe, uprawnienia) i spisuje odpowiedzi w ustrukturyzowanej formie.',
        'Umawianie rozmów — agent proponuje kandydatom terminy zgodne z kalendarzem rekrutera, potwierdza spotkania i wysyła przypomnienia, ograniczając liczbę nieodbytych rozmów.',
        'Komunikacja z kandydatami — statusy rekrutacji, odpowiedzi na częste pytania i informacja zwrotna po zakończeniu procesu, także poza godzinami pracy zespołu HR.',
      ],
    },
    {
      heading: 'Voicebot rekrutacyjny — wstępne rozmowy bez czekania w kolejce',
      paragraphs: [
        'W rekrutacjach wysokowolumenowych najtrudniejszy jest pierwszy kontakt: kandydaci aplikują wieczorami i w weekendy, a rekruter oddzwania w godzinach pracy — często wtedy, gdy kandydat sam jest w pracy i nie może rozmawiać. Efekt to dni opóźnienia, a w tym czasie najlepsi kandydaci przyjmują oferty gdzie indziej.',
        'Voicebot rekrutacyjny skraca ten etap do minut. Dzwoni lub odbiera telefon od razu po wpłynięciu aplikacji, prowadzi krótką rozmowę naturalnym polskim głosem (technologia ElevenLabs) i zbiera odpowiedzi na pytania kwalifikacyjne. Kandydat może rozmawiać o 21:00 albo w niedzielę — wtedy, kiedy jemu pasuje. Rekruter rano zastaje komplet uporządkowanych notatek zamiast listy numerów do obdzwonienia.',
        'Screening prowadzimy też kanałami tekstowymi — czat na stronie, WhatsApp, Telegram i inne komunikatory — jeśli taka forma lepiej pasuje do profilu kandydatów. Agenci tekstowi działają w ponad 20 kanałach, więc dopasowujemy kanał do ludzi, a nie odwrotnie.',
      ],
    },
    {
      heading: 'Człowiek podejmuje decyzje — AI tylko wspiera',
      paragraphs: [
        'To fundament etyczny i prawny każdego naszego wdrożenia w HR. Agent AI nie odrzuca kandydatów i nie decyduje, kto dostanie pracę — porządkuje zgłoszenia, streszcza rozmowy i rekomenduje, kogo warto zaprosić dalej, zawsze z uzasadnieniem, które rekruter może zweryfikować i podważyć. Ostateczna ocena każdego kandydata należy do człowieka.',
        'Takie ustawienie procesu to nie tylko kwestia kultury — RODO ogranicza podejmowanie wobec ludzi decyzji opartych wyłącznie na zautomatyzowanym przetwarzaniu danych, a zatrudnienie jest podręcznikowym przykładem sytuacji, w której nadzór człowieka musi być realny. Dlatego projektujemy przepływ tak, by rekomendacje agenta były przejrzyste: widać, jakie kryteria spełnia kandydat, a jakich nie, i na jakiej podstawie powstała rekomendacja.',
        'Kryteria selekcji ustalamy wspólnie i spisujemy wprost — agent ocenia kompetencje i wymagania stanowiska, a nie cechy, które mogłyby prowadzić do dyskryminacji. Ty wiesz dokładnie, według czego sortowane są zgłoszenia, i możesz te reguły w każdej chwili zmienić.',
      ],
    },
    {
      heading: 'Dane kandydatów i RODO',
      paragraphs: [
        'CV i nagrania rozmów rekrutacyjnych to dane osobowe, często wrażliwe. Wszystkie dane kandydatów przetwarzane przez naszych agentów przechowujemy na serwerach zlokalizowanych w Polsce, w pełnej zgodności z RODO i według standardów zgodnych z ISO 27001. Z pracodawcą lub agencją podpisujemy umowę powierzenia przetwarzania danych.',
        'Retencję ustawiamy zgodnie z polityką klienta: dane kandydatów z zakończonych rekrutacji są usuwane po zdefiniowanym okresie, a zgody na przyszłe procesy obsługujemy oddzielnie. Kandydat na początku rozmowy z voicebotem dowiaduje się, że rozmawia z asystentem automatycznym i w jakim celu zbierane są odpowiedzi.',
        'W automatyzacji HR mamy praktyczne doświadczenie: zbudowaliśmy m.in. agentkę AI dla obszaru kadr i płac, która korzysta z bazy aktualnego polskiego prawa pracy, pilnuje terminów ZUS i PIT oraz wypełnia dokumenty kadrowe. Ta sama dyscyplina — praca na źródłach, kontrola człowieka nad wynikiem — obowiązuje w naszych wdrożeniach rekrutacyjnych.',
      ],
    },
  ],
  howTo: {
    title: 'Jak wdrażamy AI do rekrutacji',
    steps: [
      {
        name: 'Bezpłatna konsultacja i mapa procesu',
        text: 'Przechodzimy przez Twój obecny proces rekrutacji: skąd płyną aplikacje, ile ich jest, gdzie powstają zatory i które etapy zabierają zespołowi najwięcej czasu. Wybieramy obszary o największym zwrocie z automatyzacji.',
      },
      {
        name: 'Kryteria selekcji i scenariusze rozmów',
        text: 'Wspólnie spisujemy kryteria oceny CV oraz pytania screeningowe dla voicebota. Ustalamy zasady rekomendacji i format, w jakim rekruterzy mają otrzymywać wyniki.',
      },
      {
        name: 'Integracja z ATS i kalendarzami',
        text: 'Podłączamy agentów do Twojego systemu ATS, skrzynki rekrutacyjnej i kalendarzy zespołu. Podpisujemy umowę powierzenia przetwarzania danych i konfigurujemy okresy retencji zgodnie z Twoją polityką.',
      },
      {
        name: 'Pilotaż na jednej rekrutacji',
        text: 'Uruchamiamy automatyzację na wybranym procesie i porównujemy wyniki z pracą ręczną: jakość selekcji, czas odpowiedzi kandydatom, liczba umówionych rozmów. Korygujemy kryteria i scenariusze na podstawie rzeczywistych zgłoszeń.',
      },
      {
        name: 'Uruchomienie produkcyjne i optymalizacja',
        text: 'Rozszerzamy automatyzację na kolejne rekrutacje. W ramach pakietu utrzymania monitorujemy jakość rekomendacji, aktualizujemy scenariusze przy nowych stanowiskach i rozwijamy proces wraz z Twoim zespołem.',
      },
    ],
  },
  useCases: {
    title: 'Gdzie automatyzacja rekrutacji daje najwięcej',
    items: [
      {
        title: 'Rekrutacja masowa',
        description:
          'Produkcja, logistyka, handel: setki podobnych aplikacji na te same stanowiska. Agent selekcjonuje CV według twardych kryteriów, a voicebot weryfikuje dyspozycyjność i uprawnienia w ciągu godzin, nie tygodni.',
      },
      {
        title: 'Agencje pracy',
        description:
          'Wiele równoległych projektów dla różnych klientów. Automatyzacja porządkuje napływ kandydatów per projekt, prowadzi screening według kryteriów każdego klienta i utrzymuje kontakt z bazą kandydatów.',
      },
      {
        title: 'Rekrutacja sezonowa',
        description:
          'Spiętrzenie zgłoszeń w krótkim oknie czasowym — bez powiększania zespołu HR. Agenci obsługują szczyt aplikacji, umawiają rozmowy falami i informują kandydatów o statusie na bieżąco.',
      },
      {
        title: 'Rekrutacja IT',
        description:
          'Mniejszy wolumen, wyższe wymagania. Agent wstępnie mapuje stack technologiczny i doświadczenie z CV na wymagania roli, dzięki czemu techniczni rekruterzy rozmawiają tylko z dopasowanymi kandydatami.',
      },
    ],
  },
  pricing: {
    title: 'Ile kosztuje AI w rekrutacji',
    note: 'Ceny netto. Zakres wdrożenia ustalamy po bezpłatnej konsultacji — od selekcji CV po pełny proces ze screeningiem głosowym.',
    rows: [
      {
        name: 'Wdrożenie',
        price: 'od 5 000 zł',
        description:
          'Mały zakres: selekcja CV z jednym źródłem aplikacji lub voicebot screeningowy dla jednego typu stanowisk. Pełne procesy i integracje z ATS wyceniamy indywidualnie.',
      },
      {
        name: 'Utrzymanie Starter',
        price: '249 zł/mies.',
        description: 'Monitoring działania agentów, drobne korekty kryteriów, wsparcie mailowe.',
      },
      {
        name: 'Utrzymanie Standard',
        price: '499 zł/mies.',
        description: 'Zmiany scenariuszy przy nowych stanowiskach, rozwój kryteriów, priorytetowe wsparcie.',
      },
      {
        name: 'Utrzymanie Premium',
        price: '799 zł/mies.',
        description: 'Pełna opieka: rozbudowa procesu, raporty z rekrutacji, najszybszy czas reakcji.',
      },
    ],
  },
  faq: [
    {
      question: 'Ile kosztuje wdrożenie AI do rekrutacji?',
      answer:
        'Wdrożenie zaczyna się od 5 000 zł netto przy małym zakresie — np. automatyczna selekcja CV z jednego źródła aplikacji albo voicebot screeningowy dla jednego typu stanowisk. Pełny proces z integracją ATS, screeningiem głosowym i komunikacją z kandydatami wyceniamy indywidualnie. Utrzymanie to 249–799 zł netto miesięcznie, zależnie od pakietu. Pierwsza konsultacja jest bezpłatna.',
    },
    {
      question: 'Czy dane kandydatów są przetwarzane zgodnie z RODO?',
      answer:
        'Tak. CV, nagrania rozmów i notatki ze screeningu przechowujemy na serwerach w Polsce, w pełnej zgodności z RODO i według standardów zgodnych z ISO 27001. Podpisujemy umowę powierzenia przetwarzania danych, a okresy przechowywania konfigurujemy według Twojej polityki — dane z zakończonych rekrutacji są usuwane po zdefiniowanym czasie. Kandydaci są informowani, że rozmawiają z asystentem automatycznym.',
    },
    {
      question: 'Czy AI odrzuca kandydatów?',
      answer:
        'Nie — i to celowa decyzja projektowa, nie ograniczenie techniczne. Agent porządkuje zgłoszenia, ocenia dopasowanie do spisanych kryteriów i rekomenduje kolejność, zawsze z uzasadnieniem możliwym do zweryfikowania. Decyzję o każdym kandydacie podejmuje rekruter. RODO ogranicza w pełni zautomatyzowane decyzje wobec ludzi, dlatego nadzór człowieka jest wpisany w architekturę procesu, a nie dodany na końcu.',
    },
    {
      question: 'Jak kandydaci reagują na voicebota rekrutacyjnego?',
      answer:
        'Bot na początku rozmowy przedstawia się jako asystent automatyczny, więc kandydat wie, z kim rozmawia. W praktyce największą różnicę robi czas: kontakt następuje w minutach od aplikacji, a rozmowa może odbyć się wieczorem lub w weekend, gdy kandydatowi wygodnie. Naturalny polski głos (technologia ElevenLabs) sprawia, że rozmowa przebiega płynnie, a kto woli, może odpowiedzieć na te same pytania na czacie.',
    },
    {
      question: 'Czy zintegrujecie agentów z naszym ATS?',
      answer:
        'Jeśli Twój system ATS udostępnia API, agent pracuje bezpośrednio na nim: pobiera aplikacje, zapisuje wyniki selekcji i notatki ze screeningu przy kandydacie, aktualizuje statusy. Gdy integracja bezpośrednia nie jest możliwa, budujemy przepływ przez skrzynkę rekrutacyjną lub eksporty. Konkretny wariant ustalamy podczas bezpłatnej konsultacji, po sprawdzeniu możliwości Twojego systemu.',
    },
    {
      question: 'Ile trwa wdrożenie automatyzacji rekrutacji?',
      answer:
        'Mały zakres — selekcja CV lub voicebot screeningowy dla jednego typu stanowisk — uruchamiamy w 2–4 tygodnie, łącznie z pilotażem na rzeczywistej rekrutacji. Pełny proces z integracją ATS, wieloma stanowiskami i komunikacją wielokanałową to zwykle 1–3 miesiące. Zawsze zaczynamy od pilotażu, żeby zweryfikować jakość na Waszych realnych zgłoszeniach przed startem produkcyjnym.',
    },
  ],
  cta: {
    heading: 'Policz, ile godzin zjada Wam selekcja CV',
    sub: 'Umów bezpłatną konsultację — przejdziemy przez Twój proces rekrutacji i pokażemy, które etapy można zautomatyzować bez utraty kontroli nad decyzjami.',
  },
  related: [
    { label: 'Automatyzacja HR i kadr', href: '/uslugi/automatyzacja-hr' },
    { label: 'Agent głosowy AI', href: '/uslugi/agent-glosowy-ai' },
    { label: 'Cennik wdrożeń AI', href: '/cennik' },
  ],
};

export default function Page() {
  return <SeoLanding content={content} />;
}
