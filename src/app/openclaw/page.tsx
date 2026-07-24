import type { Metadata } from 'next';
import SeoLanding, { SeoLandingContent } from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'OpenClaw Polska — wdrożenia frameworka agentów AI',
  description:
    'OpenClaw to open-source\'owy framework agentów AI (380k+ gwiazdek GitHub). Wdrażamy go w polskich firmach: serwery w Polsce, RODO. Bezpłatna konsultacja.',
  alternates: { canonical: '/openclaw' },
  openGraph: {
    title: 'OpenClaw Polska — wdrożenia frameworka agentów AI',
    description:
      'Wdrażamy OpenClaw — najszybciej rosnący framework agentów AI — w polskich firmach. Serwery w Polsce, zgodność z RODO, agent po polsku.',
    type: 'website',
  },
};

const content: SeoLandingContent = {
  path: '/openclaw',
  breadcrumbLabel: 'OpenClaw Polska',
  h1: 'OpenClaw Polska — wdrażamy najszybciej rosnący framework agentów AI',
  lead: 'OpenClaw to open-source\'owy framework autonomicznych agentów AI stworzony przez Petera Steinbergera. Projekt zdobył ponad 380 tysięcy gwiazdek na GitHubie i w 60 dni przeszedł od zera do pozycji numer 1 w całym serwisie. W Infinity Tech wdrażamy OpenClaw w polskich firmach — na serwerach w Polsce, w zgodzie z RODO i po polsku.',
  serviceName: 'Wdrożenia OpenClaw',
  serviceDescription:
    'Wdrożenia frameworka agentów AI OpenClaw w polskich firmach: analiza procesów, konfiguracja, integracje, hosting na serwerach w Polsce i utrzymanie w abonamencie.',
  sections: [
    {
      heading: 'OpenClaw — co to jest?',
      paragraphs: [
        'OpenClaw to framework do budowy autonomicznych agentów AI — programów, które nie tylko odpowiadają na wiadomości, ale samodzielnie wykonują zadania: sprawdzają kalendarz, przygotowują dokumenty, obsługują klientów na czacie i przez telefon, pilnują terminów. Twórcą projektu jest Peter Steinberger, a kod jest w pełni otwarty — każdy może go przejrzeć, uruchomić na własnym serwerze i dostosować do swoich potrzeb.',
        'O skali zjawiska najlepiej mówią liczby: ponad 380 tysięcy gwiazdek na GitHubie i droga od zera do pozycji numer 1 w serwisie w zaledwie 60 dni. Tak szybkiego wzrostu nie zbudowała kampania marketingowa, tylko tysiące programistów, którzy uruchomili OpenClaw u siebie i zostali przy nim.',
        'Od klasycznego chatbota OpenClaw różni się tym, że agent ma pamięć, dostęp do narzędzi i może działać z własnej inicjatywy — na przykład przypomnieć o zbliżającym się terminie albo przygotować raport przed porannym spotkaniem. Do tego komunikuje się przez ponad 23 kanały: WhatsApp, Slack, Teams, Telegram, Discord, e-mail i inne — jeden agent, spójna wiedza, wszystkie kanały naraz.',
      ],
    },
    {
      heading: 'Dlaczego firmy wybierają framework agentów AI typu open source',
      paragraphs: [
        'Największy argument to brak vendor lock-in. Przy zamkniętym SaaS-ie cała automatyzacja firmy zależy od jednego dostawcy: jego cennika, jego decyzji produktowych, jego dostępności. Gdy dostawca podnosi ceny albo wygasza produkt, firma zaczyna od zera. OpenClaw jest oprogramowaniem otwartym — konfiguracja, dane i integracje należą do Ciebie i działają niezależnie od losów jakiejkolwiek firmy trzeciej.',
        'Drugi argument to self-hosting. OpenClaw działa na serwerze, który kontrolujesz — rozmowy z klientami, dokumenty kadrowe czy dane sprzedażowe nie płyną do chmury zewnętrznego dostawcy. Dla firm przetwarzających dane osobowe to często warunek konieczny, nie miły dodatek.',
      ],
      bullets: [
        'Brak opłat licencyjnych za samo oprogramowanie — płacisz za wdrożenie i utrzymanie, nie za każdą wiadomość czy użytkownika',
        'Pełna kontrola nad danymi — agent działa na Twoim serwerze, nie w cudzej chmurze',
        'Ponad 23 kanały komunikacji w jednym frameworku: WhatsApp, Slack, Teams, Telegram, Discord i kolejne',
        'Otwarty kod — sposób działania agenta można zweryfikować, nic nie jest czarną skrzynką',
        'Dynamiczny rozwój — poprawki i nowe funkcje pojawiają się w tempie, na jakie zamknięte produkty rzadko mogą sobie pozwolić',
      ],
    },
    {
      heading: 'OpenClaw wdrożenie w polskiej firmie — na czym polega nasza praca',
      paragraphs: [
        'Sam framework to dopiero początek. Wartość powstaje wtedy, gdy agent zostaje skonfigurowany pod konkretne procesy: wie, jak firma obsługuje klientów, do jakich systemów ma dostęp, czego mu nie wolno i kiedy ma przekazać sprawę człowiekowi. Dokładnie tym zajmuje się Infinity Tech — bierzemy na siebie całość: analizę procesów, konfigurację, integracje, hosting i opiekę po starcie.',
        'Wdrażamy OpenClaw z myślą o polskich realiach. Agent mówi i pisze naturalną polszczyzną — w kanałach głosowych korzystamy z technologii ElevenLabs, dzięki której rozmowa przez telefon brzmi naturalnie. Dane klientów trzymamy na serwerach w Polsce, a każde wdrożenie projektujemy w pełnej zgodności z RODO, według standardów zgodnych z ISO 27001. Przykład z naszej praktyki: agentka kadrowa z bazą aktualnego polskiego prawa pracy, która pilnuje terminów ZUS i PIT oraz wypełnia dokumenty kadrowe.',
        'Czas wdrożenia zależy od zakresu: w małych firmach agent startuje zwykle w 2–4 tygodnie, w większych organizacjach z rozbudowanymi integracjami — w 1–3 miesiące.',
      ],
    },
    {
      heading: 'OpenClaw a gotowe SaaS-y — uczciwe porównanie',
      paragraphs: [
        'Nie będziemy udawać, że open source zawsze wygrywa. Gotowy SaaS ma realne zalety: uruchamiasz go w kilka godzin, nie potrzebujesz serwera ani wdrożenia, a abonament jest przewidywalny. Jeśli potrzebujesz prostego widżetu FAQ na stronie i nic więcej, SaaS może być rozsądnym wyborem.',
        'Rachunek zmienia się, gdy automatyzacja ma robić więcej niż odpowiadać na powtarzalne pytania. SaaS-y zwykle rozliczają się od liczby wiadomości, rozmów albo użytkowników — koszty rosną razem ze skalą i nigdy się nie kończą. Możliwości integracji ograniczają się do tego, co przewidział dostawca, a dane trafiają na jego serwery, często poza Polską. OpenClaw wymaga większej pracy na starcie, ale potem: wdrożenie płacisz raz, utrzymanie ma stałą, przewidywalną cenę, a agenta można zintegrować z dowolnym systemem, którego firma faktycznie używa.',
        'Nasza rekomendacja jest prosta: jeżeli agent ma wykonywać procesy — obsługiwać telefon, pilnować terminów, pracować na dokumentach, łączyć się z wewnętrznymi systemami — OpenClaw daje więcej możliwości przy niższym koszcie w dłuższym horyzoncie. Na bezpłatnej konsultacji mówimy wprost, czy w Twoim przypadku to się opłaca.',
      ],
    },
  ],
  howTo: {
    title: 'Jak wygląda wdrożenie OpenClaw krok po kroku',
    steps: [
      {
        name: 'Bezpłatna konsultacja i analiza procesów',
        text: 'Rozmawiamy o tym, co w firmie zabiera najwięcej czasu i gdzie agent AI da realny efekt. Wskazujemy procesy, od których warto zacząć, i szacujemy koszty — bez zobowiązań.',
      },
      {
        name: 'Projekt agenta i wybór kanałów',
        text: 'Ustalamy, co agent ma robić, na jakich kanałach działać (telefon, WhatsApp, Slack, Teams i inne), do jakich danych mieć dostęp i kiedy przekazywać sprawę człowiekowi.',
      },
      {
        name: 'Instalacja i konfiguracja na serwerach w Polsce',
        text: 'Uruchamiamy OpenClaw na serwerze zlokalizowanym w Polsce, konfigurujemy integracje z systemami firmy i zabezpieczamy całość według standardów zgodnych z ISO 27001.',
      },
      {
        name: 'Testy i szkolenie zespołu',
        text: 'Testujemy agenta na realnych scenariuszach z Twojej firmy, poprawiamy odpowiedzi i zachowania, a zespół uczymy pracy z agentem — to zwykle godzina, nie tygodnie kursów.',
      },
      {
        name: 'Start i utrzymanie w abonamencie',
        text: 'Po uruchomieniu monitorujemy działanie agenta, wgrywamy aktualizacje frameworka i rozwijamy jego możliwości w ramach abonamentu utrzymaniowego od 249 zł miesięcznie.',
      },
    ],
  },
  useCases: {
    title: 'Co polskie firmy automatyzują na OpenClaw',
    items: [
      {
        title: 'Infolinia głosowa 24/7',
        description:
          'Agent głosowy odbiera telefony o każdej porze — tak jak u regionalnego przewoźnika autobusowego, gdzie podaje rozkłady jazdy przez całą dobę, bez kolejki i bez czekania.',
      },
      {
        title: 'Kadry i płace',
        description:
          'Agentka AI z bazą aktualnego polskiego prawa pracy pilnuje terminów ZUS i PIT, wypełnia dokumenty kadrowe i odpowiada pracownikom na pytania o urlopy czy umowy.',
      },
      {
        title: 'Obsługa klienta na wielu kanałach',
        description:
          'Jeden agent odpowiada spójnie na WhatsAppie, Telegramie i czacie na stronie — z pełną historią rozmowy, niezależnie od tego, którym kanałem klient napisał.',
      },
      {
        title: 'Wewnętrzny asystent zespołu',
        description:
          'Agent w Slacku lub Teams odpowiada na pytania o procedury, przygotowuje podsumowania i raporty, odciążając zespół z powtarzalnych zadań biurowych.',
      },
      {
        title: 'Kwalifikacja leadów sprzedażowych',
        description:
          'Agent prowadzi pierwszą rozmowę z potencjalnym klientem, zbiera informacje o potrzebach i budżecie, a umówione spotkanie trafia prosto do kalendarza handlowca.',
      },
      {
        title: 'Aplikacje szyte na miarę',
        description:
          'Na bazie agentów budujemy też całe aplikacje — jak nasza aplikacja AI dla rolnictwa czy platforma kojarząca startupy z inwestorami.',
      },
    ],
  },
  pricing: {
    title: 'Ile kosztuje wdrożenie OpenClaw',
    note: 'Pierwsza konsultacja jest bezpłatna. Wszystkie ceny netto.',
    rows: [
      {
        name: 'Wdrożenie — mały zakres',
        price: 'od 5 000 zł',
        description: 'Pojedynczy agent, 1–2 kanały, podstawowe integracje. Czas realizacji: 2–4 tygodnie.',
      },
      {
        name: 'Wdrożenie — większy zakres',
        price: 'wycena indywidualna',
        description: 'Kilka agentów, integracje z systemami firmy, procesy wielodziałowe. Czas realizacji: 1–3 miesiące.',
      },
      {
        name: 'Utrzymanie Starter',
        price: '249 zł/mies.',
        description: 'Monitoring działania agenta, aktualizacje frameworka, podstawowe wsparcie.',
      },
      {
        name: 'Utrzymanie Standard',
        price: '499 zł/mies.',
        description: 'Wszystko ze Startera plus szybszy czas reakcji i bieżące poprawki konfiguracji agenta.',
      },
      {
        name: 'Utrzymanie Premium',
        price: '799 zł/mies.',
        description: 'Pełna opieka: priorytetowe wsparcie, rozwój agenta i nowe integracje w ramach abonamentu.',
      },
    ],
  },
  faq: [
    {
      question: 'Co to jest OpenClaw?',
      answer:
        'OpenClaw to open-source\'owy framework do budowy autonomicznych agentów AI, stworzony przez Petera Steinbergera. Agent zbudowany na OpenClaw nie tylko odpowiada na pytania — wykonuje zadania: obsługuje wiadomości na ponad 23 kanałach, korzysta z narzędzi i integruje się z systemami firmy. Projekt zdobył ponad 380 tysięcy gwiazdek na GitHubie i w 60 dni stał się najpopularniejszym repozytorium w serwisie.',
    },
    {
      question: 'Czy oprogramowanie open source jest bezpieczne dla firmy?',
      answer:
        'Tak — pod warunkiem poprawnej konfiguracji. Kod OpenClaw jest publiczny, więc weryfikują go tysiące programistów, a błędy wychodzą na jaw szybciej niż w zamkniętych produktach. Przy wdrożeniu ograniczamy uprawnienia agenta, izolujemy go od systemów, do których nie powinien mieć dostępu, i pracujemy według standardów zgodnych z ISO 27001. Instalacja na własnym serwerze oznacza, że dane nie wychodzą poza kontrolowaną infrastrukturę.',
    },
    {
      question: 'Ile kosztuje wdrożenie OpenClaw?',
      answer:
        'Wdrożenie zaczyna się od 5 000 zł netto przy małym zakresie — na przykład pojedynczy agent działający na jednym lub dwóch kanałach. Większe projekty z integracjami wyceniamy indywidualnie po bezpłatnej konsultacji. Utrzymanie rozliczamy w abonamencie: Starter 249 zł, Standard 499 zł lub Premium 799 zł miesięcznie, zależnie od zakresu opieki i tempa rozwoju agenta.',
    },
    {
      question: 'Gdzie działa wdrożony agent i co z RODO?',
      answer:
        'Instalujemy OpenClaw na serwerach zlokalizowanych w Polsce, więc dane klientów nie opuszczają kraju. Każde wdrożenie projektujemy w pełnej zgodności z RODO: minimalizujemy zakres przetwarzanych danych, ustalamy okresy ich przechowywania i podpisujemy umowę powierzenia przetwarzania. Całość prowadzimy według standardów zgodnych z ISO 27001, a architekturę bezpieczeństwa opisujemy w dokumentacji wdrożenia.',
    },
    {
      question: 'Czy musimy mieć własny dział IT?',
      answer:
        'Nie. Instalację, konfigurację, monitoring i aktualizacje bierzemy na siebie w ramach abonamentu utrzymaniowego. Po stronie firmy potrzebujemy osoby, która zna procesy — na przykład kierownika biura albo szefa sprzedaży — bo to ona powie nam, co agent ma robić. Obsługa gotowego agenta nie wymaga wiedzy technicznej: zespół po prostu pisze do niego lub dzwoni jak do współpracownika.',
    },
    {
      question: 'OpenClaw szybko się zmienia — co z aktualizacjami frameworka?',
      answer:
        'OpenClaw rozwija się bardzo dynamicznie i nowe wersje pojawiają się regularnie. W ramach utrzymania każdą aktualizację najpierw sprawdzamy w środowisku testowym, a dopiero potem wgrywamy na produkcję — Twój agent zyskuje nowe możliwości bez ryzyka przestoju. Jeśli zmiana we frameworku wymaga dostosowania konfiguracji, robimy to w ramach abonamentu, bez dodatkowych kosztów.',
    },
    {
      question: 'Jak długo trwa wdrożenie OpenClaw?',
      answer:
        'W małych firmach agent startuje zwykle w 2–4 tygodnie od pierwszej rozmowy — tyle zajmuje analiza procesów, konfiguracja i testy. W większych organizacjach, gdzie dochodzą integracje z kilkoma systemami i procesy obejmujące wiele działów, realny horyzont to 1–3 miesiące. Dokładny harmonogram ustalamy na bezpłatnej konsultacji, zanim podejmiesz jakiekolwiek zobowiązanie.',
    },
  ],
  cta: {
    heading: 'Porozmawiajmy o wdrożeniu OpenClaw w Twojej firmie',
    sub: 'Pierwsza konsultacja jest bezpłatna. Sprawdzimy, które procesy w Twojej firmie agent AI zautomatyzuje najszybciej — i powiemy wprost, czy OpenClaw to dobry wybór w Twoim przypadku.',
  },
  related: [
    { label: 'Automatyzacja procesów AI', href: '/uslugi/automatyzacja-procesow-ai' },
    { label: 'Agent głosowy AI', href: '/uslugi/agent-glosowy-ai' },
    { label: 'Cennik wdrożeń AI', href: '/cennik' },
  ],
};

export default function Page() {
  return <SeoLanding content={content} />;
}
