import type { Metadata } from 'next';
import SeoLanding, { SeoLandingContent } from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'Automatyzacja HR z AI — kadry, dokumenty, rekrutacja',
  description:
    'Automatyzacja HR i kadr z AI: selekcja CV, dokumenty, terminy ZUS i PIT. Dane na serwerach w Polsce, zgodność z RODO. Umów bezpłatną konsultację.',
  alternates: { canonical: '/uslugi/automatyzacja-hr' },
  openGraph: {
    title: 'Automatyzacja HR z AI — kadry, dokumenty, rekrutacja',
    description:
      'Agenci AI dla działu HR: selekcja CV, onboarding, dokumenty kadrowe i pilnowanie terminów ZUS/PIT. Dane w Polsce, zgodność z RODO.',
    type: 'website',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

const content: SeoLandingContent = {
  path: '/uslugi/automatyzacja-hr',
  breadcrumbLabel: 'Automatyzacja HR',
  h1: 'Automatyzacja HR i kadr z AI — dokumenty, terminy, rekrutacja',
  lead: 'Automatyzacja HR to przekazanie agentom AI powtarzalnych zadań kadrowych: selekcji CV, przygotowania dokumentów, odpowiedzi na pytania pracowników i pilnowania terminów ZUS czy PIT. Dział HR zachowuje kontrolę i decyzje, a odzyskany czas przeznacza na rekrutację i rozwój zespołu zamiast na papierologię.',
  serviceName: 'Automatyzacja HR i kadr z AI',
  serviceDescription:
    'Agenci AI dla działów HR i kadr: selekcja CV, onboarding, FAQ pracowników, dokumenty kadrowe i pilnowanie terminów ZUS/PIT. Dane na serwerach w Polsce, pełna zgodność z RODO.',
  sections: [
    {
      heading: 'Realizacja: agentka AI kadrowo-płacowa',
      paragraphs: [
        'Automatyzację kadr AI najlepiej pokazać na przykładzie. Dla jednego z klientów (realizacje opisujemy anonimowo) zbudowaliśmy agentkę AI kadrowo-płacową z bazą aktualnego polskiego prawa pracy. Agentka pilnuje terminów ZUS i PIT, wypełnia dokumenty kadrowe i odpowiada na pytania zespołu, a specjalistka kadrowa zatwierdza jej pracę, zamiast wykonywać ją ręcznie od zera.',
        'Wszystko stoi na bazie wiedzy. Agentka korzysta z aktualizowanej bazy przepisów prawa pracy, więc jej odpowiedzi odwołują się do obowiązującego stanu prawnego, a nie do wiedzy modelu zamrożonej w momencie treningu. Gdy przepisy się zmieniają, aktualizujemy bazę w ramach utrzymania.',
      ],
    },
    {
      heading: 'Co automatyzujemy w HR i kadrach',
      paragraphs: [
        'Dział HR to jedno z najlepszych miejsc na start automatyzacji: dużo powtarzalnych zadań, jasne reguły i terminy, których nie wolno przegapić. Najczęściej automatyzujemy:',
      ],
      bullets: [
        'Selekcję CV. Agent porównuje zgłoszenia z wymaganiami stanowiska i układa krótką listę kandydatów z uzasadnieniem. Decyzję podejmuje rekruter.',
        'Przy onboardingu nowy pracownik dostaje dokumenty, dostępy i plan pierwszych dni według ustalonej ścieżki, a agent pilnuje, czy każdy krok się wydarzył.',
        'Odpowiedzi na pytania pracowników o urlopy, zaświadczenia czy benefity. Obsługuje je agent dostępny na czacie 24/7, w kanałach, z których zespół już korzysta.',
        'Umowy i aneksy przygotowane na podstawie danych z systemu. Kadry sprawdzają i podpisują, zamiast wypełniać od zera.',
        'Pilnowanie terminów: ZUS, PIT, badania okresowe, kończące się umowy. Agent trzyma kalendarz i przypomina z wyprzedzeniem.',
      ],
    },
    {
      heading: 'AI w HR a dane pracowników: RODO i bezpieczeństwo',
      paragraphs: [
        'Dane kadrowe to jedne z najwrażliwszych informacji w firmie, dlatego bezpieczeństwo traktujemy jako warunek wstępny, a nie dodatek. Dane naszych klientów przetwarzamy na serwerach w Polsce, w pełnej zgodności z RODO, a nasze standardy bezpieczeństwa są zgodne z ISO 27001.',
        'Przed wdrożeniem ustalamy, do jakich danych agent ma dostęp i w jakim celu, ograniczamy zakres do minimum niezbędnego dla procesu i podpisujemy umowę powierzenia przetwarzania danych. Dział HR widzi, co agent robi z danymi. Każda operacja zostawia ślad, który można sprawdzić.',
      ],
    },
    {
      heading: 'Od czego zacząć automatyzację kadr',
      paragraphs: [
        'Nie trzeba automatyzować wszystkiego naraz. Zwykle zaczynamy od jednego procesu, który dziś boli najbardziej. Najczęściej to FAQ pracowników albo pilnowanie terminów, bo dają szybki, widoczny efekt przy niskim ryzyku. Dopiero potem dokładamy kolejne obszary: dokumenty, selekcję CV, onboarding.',
        'Takie podejście ma dwie zalety: dział kadr uczy się pracy z agentem na bezpiecznym zakresie, a firma widzi zwrot z inwestycji, zanim zdecyduje o rozszerzeniu. Małe wdrożenie zamykamy w 2–4 tygodnie, rozbudowa na kolejne procesy to zwykle 1–3 miesiące. Ile dokładnie czasu odzyska dział kadr, trudno przewidzieć z góry. Za dużo zależy od tego, jak dziś wygląda obieg dokumentów i w ilu miejscach te same dane są przepisywane ręcznie.',
      ],
    },
  ],
  howTo: {
    title: 'Jak wdrażamy automatyzację HR',
    steps: [
      {
        name: 'Audyt procesów kadrowych',
        text: 'Na bezpłatnej konsultacji przechodzimy przez procesy HR: od rekrutacji po listy płac. Sprawdzamy, ile czasu pochłaniają i gdzie zdarzają się błędy.',
      },
      {
        name: 'Wybór pierwszego procesu',
        text: 'Wskazujemy quick-win: proces o niskim ryzyku i szybkim zwrocie. Dostajesz konkretną wycenę i harmonogram wdrożenia.',
      },
      {
        name: 'Pilot z człowiekiem w pętli',
        text: 'Wdrażamy agenta na ograniczonym zakresie. Każdy dokument i każdą odpowiedź zatwierdza pracownik kadr, dopóki wspólnie nie potwierdzimy jakości.',
      },
      {
        name: 'Integracja z systemami',
        text: 'Łączymy agenta z systemem kadrowo-płacowym, kalendarzem i kanałami komunikacji, z których korzysta zespół, przez API albo pracę na eksportach danych.',
      },
      {
        name: 'Skalowanie i utrzymanie',
        text: 'Rozszerzamy automatyzację na kolejne procesy HR i utrzymujemy ją w abonamencie, razem z aktualizacją bazy prawa pracy.',
      },
    ],
  },
  useCases: {
    title: 'Zastosowania AI w HR',
    items: [
      {
        title: 'Selekcja CV',
        description:
          'Wstępna ocena zgłoszeń względem wymagań stanowiska i krótka lista dla rekrutera, zawsze z uzasadnieniem, nie z czarną skrzynką.',
      },
      {
        title: 'Onboarding pracownika',
        description:
          'Dokumenty, dostępy, szkolenia wstępne i plan pierwszych tygodni według ścieżki, której krok po kroku pilnuje agent.',
      },
      {
        title: 'FAQ kadrowe',
        description:
          'Odpowiedzi na pytania o urlopy, zwolnienia, zaświadczenia i benefity. Na czacie, 24/7, bez odrywania kadr od pracy.',
      },
      {
        title: 'Dokumenty kadrowe',
        description:
          'Umowy, aneksy, świadectwa pracy i zaświadczenia przygotowywane automatycznie na podstawie danych z systemu.',
      },
      {
        title: 'Pilnowanie terminów',
        description:
          'ZUS, PIT, badania okresowe, kończące się umowy: przypomnienia z wyprzedzeniem, zanim termin stanie się problemem.',
      },
      {
        title: 'Raporty HR',
        description:
          'Cykliczne zestawienia zatrudnienia, urlopów i wakatów przygotowywane automatycznie dla zarządu i menedżerów.',
      },
    ],
  },
  pricing: {
    title: 'Ile kosztuje automatyzacja HR',
    note: 'Wdrożenie wyceniamy po audycie procesów kadrowych: od 5 000 zł netto za mały zakres po wyceny indywidualne. Utrzymanie rozliczamy w abonamencie.',
    rows: [
      {
        name: 'Wdrożenie',
        price: 'od 5 000 zł netto',
        description: 'Mały zakres, np. jeden proces kadrowy z integracjami. Większe projekty wyceniamy indywidualnie.',
      },
      {
        name: 'Starter',
        price: '249 zł/mies.',
        description: 'Podstawowe utrzymanie i monitoring wdrożonej automatyzacji.',
      },
      {
        name: 'Standard',
        price: '499 zł/mies.',
        description: 'Utrzymanie plus bieżący rozwój automatyzacji i szybsze wsparcie.',
      },
      {
        name: 'Premium',
        price: '799 zł/mies.',
        description: 'Najszerszy zakres opieki i rozwoju, szczegóły dopasowujemy do skali wdrożenia.',
      },
    ],
  },
  faq: [
    {
      question: 'Ile kosztuje automatyzacja HR i kadr?',
      answer:
        'Wdrożenie zaczyna się od 5 000 zł netto przy małym zakresie, np. automatyzacji FAQ pracowników albo pilnowania terminów. Większe projekty wyceniamy indywidualnie po audycie procesów kadrowych. Utrzymanie rozliczamy w abonamencie: Starter 249 zł, Standard 499 zł lub Premium 799 zł miesięcznie. Pierwsza konsultacja jest bezpłatna.',
    },
    {
      question: 'Czy powierzenie danych pracowników AI jest zgodne z RODO?',
      answer:
        'Tak, pod warunkiem właściwej konfiguracji, a to bierzemy na siebie. Dane przetwarzamy na serwerach w Polsce, w pełnej zgodności z RODO, a nasze standardy bezpieczeństwa są zgodne z ISO 27001. Ograniczamy dostęp agenta do minimum niezbędnego dla procesu i podpisujemy umowę powierzenia przetwarzania danych.',
    },
    {
      question: 'Skąd agent AI zna aktualne polskie prawo pracy?',
      answer:
        'Agent nie opiera się na wiedzy modelu z momentu treningu, tylko na dołączonej bazie przepisów prawa pracy, którą aktualizujemy w ramach utrzymania. Dzięki temu odpowiedzi odwołują się do obowiązującego stanu prawnego. W sprawach spornych lub nietypowych agent nie decyduje sam, tylko przekazuje temat specjaliście kadrowemu.',
    },
    {
      question: 'Czy zintegrujecie AI z naszym systemem kadrowo-płacowym?',
      answer:
        'Tak, każde wdrożenie szyjemy na miarę, więc integracja z Twoim systemem kadrowo-płacowym jest częścią projektu. Łączymy się przez API, a gdy system go nie udostępnia, pracujemy na eksportach i imporcie danych. Zakres integracji, także z kalendarzem i komunikatorami zespołu, ustalamy na audycie.',
    },
    {
      question: 'Czy AI zastąpi nasz dział kadr?',
      answer:
        'Nie. Agent przejmuje powtarzalną część pracy: przepisywanie danych, przygotowywanie dokumentów, odpowiadanie na te same pytania i pilnowanie terminów. Decyzje o zatrudnieniu, rozmowy z pracownikami i sprawy nietypowe zostają po stronie ludzi. Dział kadr zyskuje czas na zadania, które faktycznie wymagają człowieka.',
    },
    {
      question: 'Jak szybko zobaczymy efekty automatyzacji HR?',
      answer:
        'Pierwszy proces, czyli pilot z człowiekiem w pętli, wdrażamy w 2–4 tygodnie, więc efekty widać już w pierwszym miesiącu. Rozszerzenie automatyzacji na kolejne obszary kadr trwa zwykle 1–3 miesiące, zależnie od liczby procesów i systemów do zintegrowania.',
    },
  ],
  cta: {
    heading: 'Odzyskaj czas działu HR',
    sub: 'Na bezpłatnej konsultacji sprawdzimy, które zadania kadrowe w Twojej firmie może przejąć agent AI. Bez zobowiązań.',
  },
  related: [
    { label: 'Automatyzacja procesów AI', href: '/uslugi/automatyzacja-procesow-ai' },
    { label: 'AI w rekrutacji', href: '/branze/ai-w-rekrutacji' },
    { label: 'Cennik wdrożeń AI', href: '/cennik' },
  ],
};

export default function Page() {
  return <SeoLanding content={content} />;
}
