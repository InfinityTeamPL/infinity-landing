import type { Metadata } from 'next';
import SeoLanding, { SeoLandingContent } from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'OpenClaw Polska, wdrożenia frameworka agentów AI',
  description:
    'OpenClaw to open-source\'owy framework agentów AI (380k+ gwiazdek GitHub). Wdrażamy go w polskich firmach: serwery w Polsce, RODO. Bezpłatna konsultacja.',
  alternates: { canonical: '/openclaw' },
  openGraph: {
    title: 'OpenClaw Polska, wdrożenia frameworka agentów AI',
    description:
      'Wdrażamy OpenClaw, najszybciej rosnący framework agentów AI, w polskich firmach. Serwery w Polsce, zgodność z RODO, agent po polsku.',
    type: 'website',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

const content: SeoLandingContent = {
  path: '/openclaw',
  breadcrumbLabel: 'OpenClaw Polska',
  h1: 'OpenClaw Polska, wdrażamy najszybciej rosnący framework agentów AI',
  lead: 'OpenClaw to open-source\'owy framework autonomicznych agentów AI, stworzony przez Petera Steinbergera. Ponad 380 tysięcy gwiazdek na GitHubie, z zera na pozycję numer 1 w całym serwisie w 60 dni. Wdrażamy go w polskich firmach: serwer w Polsce, RODO, agent po polsku. Budujemy na OpenClaw, ale nie jesteśmy jego oficjalnym partnerem.',
  serviceName: 'Wdrożenia OpenClaw',
  serviceDescription:
    'Wdrożenia frameworka agentów AI OpenClaw w polskich firmach: analiza procesów, konfiguracja, integracje, hosting na serwerach w Polsce i utrzymanie w abonamencie.',
  sections: [
    {
      heading: 'Co to jest OpenClaw?',
      paragraphs: [
        'OpenClaw to framework do budowy autonomicznych agentów AI. Agent sam wykonuje zadania: sprawdza kalendarz, przygotowuje dokumenty, obsługuje klientów na czacie i przez telefon, pilnuje terminów. Odpisywanie na wiadomości to u niego margines. Twórcą projektu jest Peter Steinberger. Kod jest otwarty, więc każdy może go przejrzeć, uruchomić na własnym serwerze i przerobić pod siebie.',
        'Liczby robią wrażenie. Ponad 380 tysięcy gwiazdek na GitHubie i droga od zera do pozycji numer 1 w całym serwisie w 60 dni. Nie zbudowała tego żadna kampania, tylko tysiące programistów, którzy odpalili OpenClaw u siebie i zostali przy nim.',
        'Od klasycznego chatbota różni się tym, że agent ma pamięć, dostęp do narzędzi i może zacząć z własnej inicjatywy. Przypomni o zbliżającym się terminie. Przygotuje raport przed porannym spotkaniem. Komunikuje się przez ponad 23 kanały: WhatsApp, Slack, Teams, Telegram, Discord, e-mail i kolejne. Wszędzie ten sam agent i ta sama wiedza.',
        'Od razu o tym, czego taki agent nie zrobi. Nie podejmie decyzji, której nikt wcześniej nie zapisał w procedurze. Nie wynegocjuje umowy i nie zatwierdzi przelewu. Odręczne pismo na zdjęciu zrobionym pod światło odczyta kiepsko albo wcale. I nie naprawi procesu, który jest zepsuty: jeśli w firmie nikt nie wie, kto zatwierdza fakturę, agent też się tego nie dowie.',
      ],
    },
    {
      heading: 'Dlaczego firmy wybierają framework agentów AI typu open source',
      paragraphs: [
        'Największy argument to brak vendor lock-in. Przy zamkniętym SaaS-ie cała automatyzacja firmy wisi na jednym dostawcy: na jego cenniku i na jego decyzjach produktowych. Podnosi ceny albo wygasza produkt i zaczynasz od nowa. OpenClaw jest otwarty, więc konfiguracja, dane i integracje należą do Ciebie. Działają niezależnie od losów jakiejkolwiek firmy trzeciej, naszej też.',
        'Drugi argument to self-hosting. Agent działa na serwerze, który kontrolujesz, więc rozmowy z klientami, dokumenty kadrowe czy dane sprzedażowe nie płyną do cudzej chmury. W firmach przetwarzających dane osobowe to bywa warunek wstępny całej rozmowy, jeszcze zanim ktokolwiek zapyta o cenę.',
        'Minus też jest i lepiej o nim wiedzieć od razu. Open source nie ma infolinii. Jeśli agent przestanie działać o dwudziestej drugiej, ktoś musi to podnieść, a społeczność na GitHubie nie ma wobec Ciebie żadnego zobowiązania. Dlatego wdrożenie bez opieki serwisowej ma sens tylko wtedy, gdy masz własnego administratora. Poza tym przypadkiem abonament utrzymaniowy nie jest dodatkiem do faktury, tylko warunkiem, żeby agent w ogóle był policzalny.',
      ],
      bullets: [
        'Za samo oprogramowanie nie płacisz licencji. Rozliczasz wdrożenie i utrzymanie, bez opłat od każdej wiadomości czy użytkownika',
        'Dane zostają u Ciebie, bo agent działa na Twoim serwerze, a nie w cudzej chmurze',
        'Ponad 23 kanały komunikacji w jednym frameworku: WhatsApp, Slack, Teams, Telegram, Discord i kolejne',
        'Kod jest otwarty, więc sposób działania agenta da się zweryfikować i nic nie jest czarną skrzynką',
        'Poprawki i nowe funkcje pojawiają się w tempie, na jakie zamknięte produkty rzadko mogą sobie pozwolić',
      ],
    },
    {
      heading: 'Na czym polega nasza praca przy wdrożeniu OpenClaw',
      paragraphs: [
        'Sam framework to dopiero początek. Wartość powstaje wtedy, gdy agent zostaje skonfigurowany pod konkretne procesy: wie, jak firma obsługuje klientów, do jakich systemów ma dostęp, czego mu nie wolno i kiedy ma przekazać sprawę człowiekowi. Tym zajmuje się Infinity Tech. Bierzemy na siebie całość: analizę procesów, konfigurację, integracje, hosting i opiekę po starcie. Budujemy na OpenClaw, ale nie jesteśmy jego oficjalnym partnerem i nie sprzedajemy żadnej licencji na ten framework, bo taka nie istnieje.',
        'Wdrażamy z myślą o polskich realiach. Agent mówi i pisze poprawną polszczyzną, a w kanałach głosowych korzystamy z technologii ElevenLabs, dzięki której rozmowa przez telefon brzmi naturalnie. Dane klientów trzymamy na serwerach w Polsce, a każde wdrożenie projektujemy w zgodzie z RODO, według standardów zgodnych z normą ISO 27001. Certyfikatu ISO nie posiadamy i nie udajemy, że jest inaczej. Przykład z naszej praktyki: agentka kadrowa z bazą aktualnego polskiego prawa pracy, która pilnuje terminów ZUS i PIT oraz wypełnia dokumenty kadrowe.',
        'Czas wdrożenia zależy od zakresu. W małych firmach agent startuje zwykle w 2 do 4 tygodni, w większych organizacjach z rozbudowanymi integracjami trzeba liczyć od 1 do 3 miesięcy. Z naszego doświadczenia najwięcej czasu zjada zbieranie od działów wiedzy o tym, co agent ma właściwie robić. Konfiguracja to zwykle najmniejszy problem.',
        'Co przygotować, zanim zaczniemy. Im więcej z tej listy macie gotowe, tym krótsze wdrożenie i tym mniej pytań z naszej strony w trakcie.',
      ],
      bullets: [
        'Osobę po Waszej stronie, która zna proces i może decydować. Bez niej wdrożenie stoi w miejscu',
        'Odpowiedzi na kilkanaście najczęstszych pytań klientów, choćby w jednym pliku tekstowym',
        'Dostępy do systemów, z którymi agent ma się łączyć: CRM, kalendarz, poczta, magazyn',
        'Decyzję, czego agentowi nie wolno: jakich obietnic nie składa, jakich danych nie podaje, w którym momencie przełącza rozmowę na człowieka',
        'Numer telefonu albo konto WhatsApp Business, jeśli agent ma odbierać połączenia i wiadomości',
        'Osobę, która ze strony firmy podpisze umowę powierzenia przetwarzania danych',
      ],
    },
    {
      heading: 'OpenClaw a gotowe SaaS-y. Uczciwe porównanie',
      paragraphs: [
        'Nie będziemy udawać, że open source zawsze wygrywa. Gotowy SaaS ma realne zalety: uruchamiasz go w kilka godzin, nie potrzebujesz serwera ani wdrożenia, a abonament jest przewidywalny. Chcesz prostego widżetu FAQ na stronie i nic więcej? SaaS będzie rozsądniejszy.',
        'Rachunek zmienia się, gdy automatyzacja ma robić więcej niż odpowiadać na powtarzalne pytania. SaaS-y zwykle rozliczają się od liczby wiadomości, rozmów albo użytkowników, więc koszty rosną razem ze skalą i nigdy się nie kończą. Możliwości integracji ograniczają się do tego, co przewidział dostawca, a dane trafiają na jego serwery, często poza Polską. OpenClaw wymaga większej pracy na starcie. Za to wdrożenie płacisz raz, utrzymanie ma stałą cenę, a agenta zintegrujesz z dowolnym systemem, którego firma faktycznie używa.',
        'Bywa, że odradzamy. Gdy miesięcznie wpada pięćdziesiąt zapytań i wszystkie są takie same, widżet FAQ zrobi robotę, a wdrożenie od 5 000 zł będzie się zwracać latami. Odradzamy też firmom, w których nikt nie ma czasu opisać procesu. Agent nie zgadnie, jak pracujecie, a wdrożenie zamieni się w miesiąc wyciągania odpowiedzi mailem.',
        'Nasza rekomendacja jest prosta. Jeżeli agent ma wykonywać procesy, czyli obsługiwać telefon, pilnować terminów, pracować na dokumentach i łączyć się z wewnętrznymi systemami, OpenClaw daje więcej możliwości przy niższym koszcie w dłuższym horyzoncie. Gdzie dokładnie leży granica opłacalności, trudno przewidzieć z góry, bo zależy od skali ruchu. Tego akurat nie policzymy zza biurka. Dlatego na bezpłatnej konsultacji liczymy to na Twoich liczbach i mówimy wprost.',
      ],
    },
    {
      heading: 'ClawLabs, nasza platforma managed OpenClaw',
      paragraphs: [
        'Nie każda firma potrzebuje wdrożenia szytego na miarę. Dla tych, którzy chcą mieć własnego agenta OpenClaw od razu, zbudowaliśmy ClawLabs (clawlabs.pro), platformę managed hostingu agentów AI i produkt Infinity Tech Group sp. z o.o. Zakładasz konto, a agent startuje w około 60 sekund. Bez konfigurowania serwera i bez wiedzy DevOps.',
        'Każdy agent działa na osobnym VPS-ie, w izolowanym kontenerze, więc Twoja instancja nie dzieli środowiska z innymi klientami. Infrastruktura stoi w chmurze EU (Hetzner, standardy ISO 27001/SOC 2). Dla firm z ostrzejszymi wymaganiami zostaje instalacja on-premise, na Twoich serwerach.',
        'ClawLabs nie zawsze wystarczy. Przestaje, gdy agent ma sięgać do systemów, które siedzą w Waszej sieci wewnętrznej, albo gdy proces jest na tyle nietypowy, że trzeba go opisać krok po kroku razem z ludźmi, którzy go dziś wykonują. Do tego potrzebne jest wdrożenie agencyjne, a ClawLabs zostaje wtedy najwyżej środowiskiem do testów.',
      ],
      bullets: [
        'Start agenta w około 60 sekund od założenia konta',
        'Osobny VPS i izolowany kontener dla każdego agenta',
        '13 kanałów komunikacji i ponad 35 modeli AI: Claude, GPT, Gemini, modele lokalne',
        'Własne klucze API w modelu BYOK, przechowywane w postaci zaszyfrowanej (AES-256-GCM)',
        'Chmura EU (Hetzner, ISO 27001/SOC 2) albo on-premise',
        'Cloud od 399 zł/mies. (Premium; Pro 799 zł, Ultra Pro 1999 zł), 5 dni triala, płatności Stripe i polska faktura VAT',
      ],
    },
    {
      heading: 'Co słyszymy najczęściej, zanim ktoś się zdecyduje',
      paragraphs: [
        '„Agent powie klientowi coś głupiego”. Może się zdarzyć. Dlatego agent dostaje spisany zakres: czego nie obiecuje, jakich cen nie podaje, kiedy kończy rozmowę i oddaje ją człowiekowi. Przez pierwsze tygodnie po starcie czytamy transkrypcje i poprawiamy zachowania. Do zera tego ryzyka nie zejdziemy, tak samo jak przy nowym pracowniku w pierwszym miesiącu.',
        '„Klienci nie chcą rozmawiać z botem”. Część rzeczywiście nie chce i każdy powinien móc w dowolnym momencie poprosić o człowieka. Agent to uszanuje, o ile mu to skonfigurujemy, więc pilnujemy tego w każdym wdrożeniu. Nasze zdanie jest takie, że gorsze od bota bywa dwadzieścia minut na linii i mail bez odpowiedzi do następnego dnia.',
        '„A jak wyciekną dane?”. Instalacja stoi na Waszym serwerze, agent widzi wyłącznie te systemy, do których sam mu dacie dostęp, a klucze API trzymamy zaszyfrowane. Zakres uprawnień opisujemy w dokumentacji wdrożenia, żeby dało się to potem sprawdzić bez pytania nas o zdanie.',
        '„Sami postawimy to z GitHuba”. Jasne, kod jest publiczny i naprawdę da się. Postawienie instancji to popołudnie pracy. Reszta, czyli integracje, uprawnienia, testy, kopie zapasowe, aktualizacje i pilnowanie, żeby agent nie wymyślał, zajmuje całe wdrożenie. Jeśli macie administratora, który to pociągnie, nie potrzebujecie nas do samej instalacji i powiemy Wam to wprost na konsultacji.',
      ],
    },
  ],
  howTo: {
    title: 'Jak wygląda wdrożenie OpenClaw krok po kroku',
    steps: [
      {
        name: 'Bezpłatna konsultacja i analiza procesów',
        text: 'Rozmawiamy o tym, co w firmie zabiera najwięcej czasu i gdzie agent AI da realny efekt. Wskazujemy procesy, od których warto zacząć, i szacujemy koszty. Jeśli uznamy, że automatyzacja Wam się nie opłaci, mówimy to na tej rozmowie. Bez zobowiązań.',
      },
      {
        name: 'Projekt agenta i wybór kanałów',
        text: 'Ustalamy, co agent ma robić, na jakich kanałach działać (telefon, WhatsApp, Slack, Teams i inne), do jakich danych mieć dostęp i kiedy przekazywać sprawę człowiekowi. Spisujemy też listę spraw, których nie tyka.',
      },
      {
        name: 'Instalacja i konfiguracja na serwerach w Polsce',
        text: 'Uruchamiamy OpenClaw na serwerze zlokalizowanym w Polsce, konfigurujemy integracje z systemami firmy i zabezpieczamy całość według standardów zgodnych z normą ISO 27001.',
      },
      {
        name: 'Testy i szkolenie zespołu',
        text: 'Testujemy agenta na realnych scenariuszach z Twojej firmy, poprawiamy odpowiedzi i zachowania, a zespół uczymy pracy z agentem. Zwykle wystarcza na to godzina, a nie tygodnie kursów.',
      },
      {
        name: 'Start i utrzymanie w abonamencie',
        text: 'Po uruchomieniu monitorujemy działanie agenta, wgrywamy aktualizacje frameworka i rozwijamy jego możliwości w ramach abonamentu utrzymaniowego od 249 zł miesięcznie. Pierwsze dwa tygodnie po starcie to zwykle najwięcej poprawek, bo dopiero wtedy widać, o co realnie pytają klienci.',
      },
    ],
  },
  useCases: {
    title: 'Co polskie firmy automatyzują na OpenClaw',
    items: [
      {
        title: 'Infolinia głosowa 24/7',
        description:
          'Agent głosowy odbiera telefony o każdej porze. Zbudowaliśmy taką prezentację techniczną dla PKS Gryfice: nasze własne demo na publicznych danych rozkładowych, 6 przystanków i 276 odjazdów. To nie jest wdrożenie u klienta, tylko pokaz naszej pracy.',
      },
      {
        title: 'Kadry i płace',
        description:
          'Agentka AI z bazą aktualnego polskiego prawa pracy pilnuje terminów ZUS i PIT, wypełnia dokumenty kadrowe i odpowiada pracownikom na pytania o urlopy czy umowy. Decyzji kadrowych nie podejmuje, przygotowuje materiał dla osoby, która je podpisuje.',
      },
      {
        title: 'Obsługa klienta na wielu kanałach',
        description:
          'Jeden agent odpowiada spójnie na WhatsAppie, Telegramie i czacie na stronie, z pełną historią rozmowy, niezależnie od tego, którym kanałem klient napisał.',
      },
      {
        title: 'Wewnętrzny asystent zespołu',
        description:
          'Agent w Slacku lub Teams odpowiada na pytania o procedury, przygotowuje podsumowania i raporty, odciążając zespół z powtarzalnych zadań biurowych. Działa tylko na dokumentach, które sami mu udostępnicie.',
      },
      {
        title: 'Kwalifikacja leadów sprzedażowych',
        description:
          'Agent prowadzi pierwszą rozmowę z osobą, która pyta o ofertę, zbiera informacje o potrzebach i budżecie, a umówione spotkanie trafia prosto do kalendarza handlowca.',
      },
      {
        title: 'Aplikacje szyte na miarę',
        description:
          'Na bazie agentów budujemy też całe aplikacje, jak nasza aplikacja AI dla rolnictwa czy platforma kojarząca startupy z inwestorami.',
      },
    ],
  },
  pricing: {
    title: 'Ile kosztuje wdrożenie OpenClaw',
    note: 'Pierwsza konsultacja jest bezpłatna. Wszystkie ceny netto. Osobno dochodzi koszt zużycia modeli AI, zależny od ruchu. Szacujemy go dopiero na konsultacji, na Waszych liczbach, bo z góry byłaby to zgadywanka.',
    rows: [
      {
        name: 'Wdrożenie, mały zakres',
        price: 'od 5 000 zł',
        description: 'Pojedynczy agent, jeden lub dwa kanały, podstawowe integracje. Czas realizacji od 2 do 4 tygodni.',
      },
      {
        name: 'Wdrożenie, większy zakres',
        price: 'wycena indywidualna',
        description: 'Kilka agentów, integracje z systemami firmy, procesy wielodziałowe. Czas realizacji od 1 do 3 miesięcy.',
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
        'OpenClaw to open-source\'owy framework do budowy autonomicznych agentów AI, stworzony przez Petera Steinbergera. Agent zbudowany na OpenClaw nie kończy na odpowiadaniu na pytania, tylko wykonuje zadania: obsługuje wiadomości na ponad 23 kanałach, korzysta z narzędzi i integruje się z systemami firmy. Projekt zdobył ponad 380 tysięcy gwiazdek na GitHubie i w 60 dni stał się najpopularniejszym repozytorium w serwisie.',
    },
    {
      question: 'Czy jesteście oficjalnym partnerem OpenClaw?',
      answer:
        'Nie. Budujemy na OpenClaw, bo kod jest otwarty i każdy może go użyć, ale nie łączy nas z projektem ani z jego twórcą żadna umowa partnerska. Nie sprzedajemy też licencji na framework, bo takiej licencji po prostu nie ma. Piszemy o tym wprost, bo w tej branży łatwo pomylić „używamy” z „jesteśmy przez kogoś autoryzowani”.',
    },
    {
      question: 'Czym różni się OpenClaw od ClawLabs?',
      answer:
        'OpenClaw to open-source\'owy framework agentów AI, czyli kod, który każdy może pobrać i uruchomić samodzielnie. ClawLabs to nasza platforma (produkt Infinity Tech Group sp. z o.o.), która hostuje OpenClaw za Ciebie: agent startuje w około 60 sekund na osobnym VPS-ie, w izolowanym kontenerze, bez konfigurowania serwera. Dostajesz 13 kanałów komunikacji, ponad 35 modeli AI i możliwość podłączenia własnych kluczy API (BYOK), w chmurze EU albo on-premise. Plany Cloud zaczynają się od 399 zł miesięcznie, a każdy można sprawdzić w ramach 5 dni triala.',
    },
    {
      question: 'Czego agent na OpenClaw nie zrobi?',
      answer:
        'Nie podejmie decyzji, której nikt wcześniej nie zapisał w procedurze. Nie wynegocjuje warunków umowy i nie zatwierdzi płatności, bo takie rzeczy zostawiamy człowiekowi z uprawnieniami. Kiepsko radzi sobie z odręcznym pismem i skanami złej jakości. Nie zastąpi księgowej ani prawnika: może przygotować dokument, ale odpowiada za niego osoba, która go podpisuje. Nie poukłada też procesu, którego w firmie nikt nie potrafi opisać.',
    },
    {
      question: 'Czy oprogramowanie open source jest bezpieczne dla firmy?',
      answer:
        'Tak, pod warunkiem poprawnej konfiguracji. Kod OpenClaw jest publiczny, więc weryfikują go tysiące programistów, a błędy wychodzą na jaw szybciej niż w zamkniętych produktach. Przy wdrożeniu ograniczamy uprawnienia agenta, izolujemy go od systemów, do których nie powinien mieć dostępu, i pracujemy według standardów zgodnych z normą ISO 27001. Certyfikatu ISO nie posiadamy. Instalacja na własnym serwerze oznacza, że dane nie wychodzą poza kontrolowaną infrastrukturę.',
    },
    {
      question: 'Ile kosztuje wdrożenie OpenClaw?',
      answer:
        'Wdrożenie zaczyna się od 5 000 zł netto przy małym zakresie, czyli na przykład przy pojedynczym agencie działającym na jednym lub dwóch kanałach. Większe projekty z integracjami wyceniamy indywidualnie po bezpłatnej konsultacji. Utrzymanie rozliczamy w abonamencie: Starter 249 zł, Standard 499 zł lub Premium 799 zł miesięcznie, zależnie od zakresu opieki i tempa rozwoju agenta. Do tego dochodzi koszt serwera i zużycia modeli AI, płacony bezpośrednio dostawcom.',
    },
    {
      question: 'Gdzie działa wdrożony agent i co z RODO?',
      answer:
        'Instalujemy OpenClaw na serwerach zlokalizowanych w Polsce, więc dane klientów nie opuszczają kraju. Każde wdrożenie projektujemy w zgodzie z RODO: minimalizujemy zakres przetwarzanych danych, ustalamy okresy ich przechowywania, podpisujemy umowę powierzenia przetwarzania i opisujemy, kto ma do czego dostęp. Całość prowadzimy według standardów zgodnych z normą ISO 27001, a architekturę bezpieczeństwa zostawiamy Wam w dokumentacji wdrożenia.',
    },
    {
      question: 'Czy musimy mieć własny dział IT?',
      answer:
        'Nie. Instalację, konfigurację, monitoring i aktualizacje bierzemy na siebie w ramach abonamentu utrzymaniowego. Po stronie firmy potrzebujemy osoby, która zna procesy, na przykład kierownika biura albo szefa sprzedaży, bo to ona powie nam, co agent ma robić. Obsługa gotowego agenta nie wymaga wiedzy technicznej: zespół po prostu pisze do niego albo dzwoni jak do współpracownika.',
    },
    {
      question: 'OpenClaw szybko się zmienia. Co z aktualizacjami frameworka?',
      answer:
        'Nowe wersje OpenClaw pojawiają się często, czasem kilka razy w miesiącu. W ramach utrzymania każdą aktualizację najpierw sprawdzamy w środowisku testowym, a dopiero potem wgrywamy na produkcję. Dzięki temu agent zyskuje nowe możliwości bez ryzyka przestoju. Jeśli zmiana we frameworku wymaga dostosowania konfiguracji, robimy to w ramach abonamentu, bez dodatkowych kosztów.',
    },
    {
      question: 'Co się stanie, jeśli zrezygnujemy z Waszej opieki?',
      answer:
        'Zostajecie z działającym agentem. Kod jest otwarty, instancja stoi na Waszym serwerze, konfiguracja i dane są Wasze, a dostępy przekazujemy w całości. Bez abonamentu nie robimy monitoringu ani aktualizacji, więc po kilku miesiącach agent zacznie odstawać od nowych wersji frameworka. Niczego nie blokujemy i nie ma tu żadnego wyłącznika po naszej stronie.',
    },
    {
      question: 'Jak długo trwa wdrożenie OpenClaw?',
      answer:
        'W małych firmach agent startuje zwykle w 2 do 4 tygodni od pierwszej rozmowy. Tyle zajmuje analiza procesów, konfiguracja i testy. W większych organizacjach, gdzie dochodzą integracje z kilkoma systemami i procesy obejmujące wiele działów, realny horyzont to od 1 do 3 miesięcy. Najczęściej termin przesuwa się nie przez technologię, tylko przez czekanie na dostępy i na odpowiedzi z działów. Dokładny harmonogram ustalamy na bezpłatnej konsultacji.',
    },
  ],
  cta: {
    heading: 'Porozmawiajmy o wdrożeniu OpenClaw w Twojej firmie',
    sub: 'Pierwsza konsultacja jest bezpłatna. Sprawdzimy, które procesy w Twojej firmie agent AI zautomatyzuje najszybciej, i powiemy wprost, czy OpenClaw to dobry wybór w Twoim przypadku. Czasem nie jest.',
  },
  related: [
    { label: 'Automatyzacja procesów AI', href: '/uslugi/automatyzacja-procesow-ai' },
    { label: 'Agent głosowy AI', href: '/uslugi/agent-glosowy-ai' },
    { label: 'Cennik wdrożeń AI', href: '/cennik' },
    { label: 'ClawLabs, hosting agentów OpenClaw', href: 'https://clawlabs.pro' },
    { label: 'Janina, kadrowa AI na OpenClaw', href: 'https://superkadrowa.vercel.app' },
  ],
};

export default function Page() {
  return <SeoLanding content={content} />;
}
