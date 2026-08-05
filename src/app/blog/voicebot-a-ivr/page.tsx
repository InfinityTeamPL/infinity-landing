import type { Metadata } from 'next';
import BlogArticle, { BlogArticleContent } from '@/components/BlogArticle';

export const metadata: Metadata = {
  title: 'Voicebot a IVR: czym się różnią i co daje zmiana?',
  description:
    'Klasyczne „wciśnij jeden” kontra agent, który rozumie swobodną mowę. Różnice w obsłudze, koszty, ograniczenia i to, kiedy stare menu w zupełności wystarczy.',
  alternates: { canonical: '/blog/voicebot-a-ivr' },
  openGraph: {
    title: 'Voicebot a IVR: czym się różnią i co daje zmiana?',
    description:
      'Klasyczne „wciśnij jeden” kontra agent, który rozumie swobodną mowę. Różnice w obsłudze, koszty, ograniczenia i to, kiedy stare menu w zupełności wystarczy.',
    type: 'article',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

const content: BlogArticleContent = {
  path: '/blog/voicebot-a-ivr',
  title: 'Voicebot a IVR: czym się różnią i co daje zmiana?',
  description:
    'Klasyczne „wciśnij jeden” kontra agent, który rozumie swobodną mowę. Różnice w obsłudze, koszty, ograniczenia i to, kiedy stare menu w zupełności wystarczy.',
  datePublished: '2026-07-26',
  sections: [
    {
      paragraphs: [
        'Każdy to zna. Dzwonisz w jednej konkretnej sprawie, a w słuchawce odzywa się lektor: aby uzyskać informacje o zamówieniu, wciśnij jeden; aby połączyć się z serwisem, wciśnij dwa; aby wysłuchać menu ponownie, wciśnij gwiazdkę. Wciskasz dwa. Wchodzisz w kolejne menu, w którym Twojej sprawy dalej nie ma. Wracasz na początek, wybierasz zero i lądujesz w kolejce, gdzie miły głos informuje, że jesteś siódmy.',
        'To jest IVR, czyli interaktywne menu głosowe. Technologia z lat osiemdziesiątych, która wciąż stoi na pierwszej linii w tysiącach polskich firm. Nie dlatego, że jest dobra dla dzwoniącego. Dlatego, że jest wygodna dla firmy: raz nagrany komunikat, sztywne drzewko, przewidywalne przekierowania. Dzwoniący ma się dopasować do struktury działów, zamiast po prostu powiedzieć, o co mu chodzi.',
        'Poniżej rozkładamy to na części. Jak działa jedno i drugie, gdzie menu się łamie, co realnie zmienia się dla osoby po drugiej stronie i czy trzeba wyrzucać centralę, którą już macie. Jest też osobny kawałek o tym, kiedy stare IVR wystarczy i lepiej go nie ruszać. Bo nie każda infolinia potrzebuje agenta rozumiejącego mowę, a my wolimy to powiedzieć na pierwszej rozmowie niż na fakturze.',
      ],
    },
    {
      heading: 'Jak działa klasyczne IVR i gdzie się łamie',
      paragraphs: [
        'Klasyczne IVR to nagrania lektora plus drzewko decyzyjne. System odtwarza listę opcji, dzwoniący wybiera cyfrę na klawiaturze telefonu, a centrala przekierowuje połączenie do odpowiedniej kolejki albo odtwarza kolejny poziom menu. Bardziej rozbudowane wdrożenia potrafią jeszcze przyjąć numer sprawy wystukany tonowo i odczytać status z systemu. I na tym w zasadzie kończą się ich możliwości.',
        'Łamie się to na czterech rzeczach. Pojemność menu jest pierwsza: z listy czytanej głosem człowiek zapamiętuje trzy opcje, może cztery, więc dłuższe drzewko zmusza do słuchania wszystkiego od nowa. Druga to sprawy nietypowe, które nie pasują do żadnej gałęzi, a to zwykle właśnie one wymagają uwagi. Trzecia to brak kontekstu. Po przekierowaniu dzwoniący opowiada wszystko od początku, bo IVR nie przekazuje dalej niczego poza numerem kolejki. Czwarta to godziny pracy: o dwudziestej drugiej menu wciąż mówi, tylko za nim nie ma już nikogo.',
        'Efekt uboczny jest taki, że część ludzi nauczyła się omijać menu odruchowo. Wciskają zero, mówią „konsultant”, rozłączają się i piszą maila albo dzwonią do konkurencji. Menu miało odciążyć obsługę, a w praktyce przesuwa ruch do innego kanału i wydłuża drogę do odpowiedzi.',
        'Jest jeszcze jedna rzecz, o której przy IVR mało kto myśli. Po roku takiej infolinii nadal nie wiadomo, po co ludzie dzwonili. Statystyka z centrali pokaże, ilu wybrało jedynkę, a ilu dwójkę, i tyle. Nie powie, ilu dzwoniących miało sprawę, której w menu w ogóle nie ma. W rozmowie prowadzonej głosem wychodzi to samo z siebie, bo zostaje transkrypcja i widać, o co pytają naprawdę.',
      ],
    },
    {
      heading: 'Kiedy stare IVR w zupełności wystarczy',
      paragraphs: [
        'Zacznijmy od strony, o której agencje AI zwykle milczą. IVR nie jest złą technologią, tylko wąską. Tam, gdzie ruch pasuje do jego kształtu, robi swoje szybciej i taniej niż cokolwiek innego, bo nie ma czego rozumieć. Dzwoniący i tak wie, dokąd chce trafić.',
      ],
      bullets: [
        'Menu ma dwie albo trzy opcje i wszyscy trafiają za pierwszym razem. Rozdzielenie ruchu na sprzedaż i serwis jedną cyfrą trwa sekundę, nikomu nic nie trzeba tłumaczyć i nie ma tu miejsca na poprawę.',
        'Cała treść połączenia to jedna informacja: godziny otwarcia, adres, numer konta, komunikat o awarii. Nagranie powitalne załatwia sprawę, zanim ktokolwiek podniesie słuchawkę.',
        'Dzwoniący ma podać dane, których nie chce wypowiadać na głos. Numer klienta, PIN, czterocyfrowy kod. Wystukanie tonowe jest tu bezpieczniejsze od dyktowania i taki kawałek IVR zostawiamy nawet w naszych wdrożeniach.',
        'Ruch jest ogromny, a sprawy identyczne. Przy infolinii, przez którą idzie fala jednakowych połączeń, każde dodatkowe pół sekundy na rozpoznanie mowy to koszt bez zysku.',
        'Telefon dzwoni kilka razy dziennie i zawsze odbiera go ta sama osoba. Nie ma kolejki, więc nie ma czego skracać.',
      ],
    },
    {
      paragraphs: [
        'Jest też przypadek, w którym menu zostaje z powodów formalnych. Nagrana informacja o nagrywaniu rozmowy, komunikat o przetwarzaniu danych, wybór języka. To da się powiedzieć głosem agenta, ale nagranie bywa wygodniejsze, bo brzmi identycznie za każdym razem i łatwiej pokazać, co dokładnie usłyszał klient.',
        'Test, czy jesteście po tej czy po tamtej stronie, można zrobić bez nas. Weźcie sto ostatnich połączeń i policzcie, ile z nich obsłużyłaby jedna cyfra z obecnego menu. Jeśli wychodzi zdecydowana większość, zostawcie IVR w spokoju. Naprawdę. Jeśli połowa kończy się w kolejce do „pozostałych spraw” albo po godzinach na poczcie głosowej, wtedy jest o czym rozmawiać.',
      ],
    },
    {
      heading: 'Jak działa voicebot, czyli swobodna mowa zamiast wybierania tonowego',
      paragraphs: [
        'Voicebot, czyli agent głosowy AI, odwraca układ. Zamiast listy opcji dzwoniący słyszy pytanie „w czym mogę pomóc” i odpowiada normalnym zdaniem. Pod spodem działają trzy elementy: rozpoznawanie mowy zamienia wypowiedź na tekst, model językowy rozumie intencję i decyduje, co zrobić, a synteza mowy odpowiada głosem. My korzystamy z ElevenLabs, więc głos brzmi jak naturalna polszczyzna, z odmianą przez przypadki i akcentem zdaniowym, a nie jak czytnik z automatu.',
        'Najważniejsza różnica jest jednak głębiej. Agent nie kończy na rozumieniu. Ma dostęp do danych i może w trakcie rozmowy coś zrobić: sprawdzić rozkład, kalendarz, status zamówienia, wolne terminy. Dopytać o brakującą informację, jeśli dzwoniący podał za mało. Zapisać wizytę, wysłać SMS z potwierdzeniem, zanotować zgłoszenie, przesunąć termin na inny dzień. Rozmowa i akcja dzieją się w tym samym czasie, więc całość nie kończy się zdaniem „proszę zadzwonić w godzinach pracy biura”.',
        'Nie znaczy to, że zawsze wychodzi za pierwszym razem. Rozpoznawanie mowy potrafi się wyłożyć na hałasie w tle, na bardzo szybkim mówieniu i na nazwiskach, które każdy wymawia inaczej. Adres mailowy dyktowany przez telefon to osobna udręka, więc zwykle wysyłamy SMS z linkiem, zamiast kazać go literować. Jest też opóźnienie: między końcem Twojego zdania a początkiem odpowiedzi mija ułamek sekundy i słychać, że to nie człowiek. Da się je skrócić, do zera nie. Ile dokładnie wynosi w polskich sieciach komórkowych, tego akurat porządnie nie mierzyliśmy, więc nie będziemy podawać liczby.',
        'Dlatego pierwsze tygodnie po starcie to głównie słuchanie nagrań i poprawianie tego, co się posypało. Kto tego nie robi, ten ma agenta brzmiącego świetnie na demo i słabo w piątek po południu.',
        'Sprawy nietypowe nie kończą się komunikatem o błędzie, tylko przekazaniem do człowieka razem z podsumowaniem tego, co dzwoniący już powiedział. Pracownik odbiera rozmowę z kontekstem, a nie z pustą kartką. A ponieważ agent nie ma zmiany ani przerwy, odbiera tak samo o siódmej rano, jak w sobotę wieczorem. Dane przetwarzamy na serwerach w Polsce i UE, zgodnie z RODO i w oparciu o standardy zgodne z normą ISO 27001. Certyfikatu ISO nie posiadamy i nie udajemy, że jest inaczej. Dla infolinii, przez którą przechodzą dane klientów, to nie jest szczegół.',
      ],
    },
    {
      heading: 'Voicebot a IVR punkt po punkcie',
      paragraphs: [
        'Zestawmy jedno i drugie w kategoriach, które faktycznie decydują o wyborze. Nie w tabelce z gwiazdkami, tylko w tym, co dzwoniący odczuwa przez pierwsze trzydzieści sekund.',
      ],
      bullets: [
        'W IVR dzwoniący wybiera cyfrę z listy i idzie jedną gałęzią naraz. Agentowi mówi własnymi słowami, a ten sam ustala, o co chodzi, i dopytuje o brakujące szczegóły.',
        'Sprawa nietypowa w menu kończy się powrotem do początku albo kolejką do „pozostałych spraw”. Agent obsłuży pytanie zadane po ludzku, a gdy go przerośnie, przełączy do pracownika razem z podsumowaniem rozmowy.',
        'IVR w najlepszym razie odczyta status po numerze wystukanym tonowo. Agent sięga do rozkładu, kalendarza, bazy wiedzy czy systemu rezerwacji i odpowiada konkretem zamiast ogólnikiem.',
        'Menu przekierowuje i na tym kończy swoją rolę. Agent rezerwuje termin, przesuwa wizytę, wysyła potwierdzenie i zapisuje zgłoszenie, jeszcze zanim rozmowa się skończy.',
        'Po godzinach IVR odtwarza komunikat, że biuro jest zamknięte. Agent odbiera także wtedy i wtedy, gdy wszystkie linie są zajęte, więc nieodebrane połączenie przestaje być stratą.',
        'Zmiana w IVR to nowe nagranie lektora i przebudowa drzewka w centrali. U agenta poprawiasz wiedzę i zasady, a nie strukturę menu, i widać to w następnej rozmowie.',
        'IVR nigdy nie powie nic, czego nie nagrał lektor, i to jego prawdziwa przewaga. Agent układa zdania sam, więc trzeba mu wyznaczyć granice: czego nie wolno obiecywać, przy czym ma milczeć, kiedy przełączyć dalej.',
        'IVR bywa tańszy na starcie, bo to kilka nagrań i konfiguracja centrali. Wdrożenie agenta głosowego zaczyna się u nas od 5 000 zł netto, większe projekty wyceniamy indywidualnie, a utrzymanie to 249, 499 albo 799 zł netto miesięcznie zależnie od pakietu.',
      ],
    },
    {
      heading: 'Czy trzeba wyrzucać IVR, żeby postawić voicebota',
      paragraphs: [
        'Nie. To najczęstsze nieporozumienie w rozmowach o zmianie infolinii: firma zakłada, że trzeba zdemontować całą centralę i zbudować wszystko od zera. Nie trzeba, a często wręcz nie warto, bo istniejące przekierowania i kolejki działają, ktoś je przez lata dopieszczał i zwykle nikt nie pamięta już wszystkich ustawień.',
        'Najczęściej agent staje po prostu przed IVR. Odbiera połączenie, pyta o sprawę, rozumie odpowiedź i albo załatwia ją sam, albo kieruje dokładnie tam, gdzie trzeba, omijając trzy poziomy menu. Dzwoniący w ogóle nie słyszy drzewka, a firma zachowuje pod spodem dotychczasową strukturę działów.',
        'Druga droga to oddanie agentowi tylko części ruchu. Połączeń po godzinach. Nadmiaru, gdy wszystkie linie są zajęte. Albo jednego typu spraw, powtarzalnego i dobrze opisanego. To najbezpieczniejszy start, bo powrót do stanu wyjściowego jest jednym przełączeniem, a nie projektem.',
        'Można też zacząć od pilotażu na wydzielonym numerze. Agent dostaje własną linię, kierujecie na nią ruch z jednej kampanii albo jednego oddziału i przez kilka tygodni czytacie transkrypcje. Dopiero potem decydujecie, czy ruszać główny numer. Sam numer zresztą zostaje w każdym z tych wariantów, bo przekierowanie ustawia się po stronie operatora albo centrali. Wizytówki i ulotki zostają bez zmian.',
      ],
    },
    {
      heading: 'Co warto mieć przygotowane przed startem',
      paragraphs: [
        'Wdrożenia, które idą gładko, mają wspólną cechę: firma przychodzi z materiałem, a nie z samym pomysłem. Nie chodzi o dokumentację na trzydzieści stron, tylko o kilka rzeczy, które i tak gdzieś u Was są.',
      ],
      bullets: [
        'Nagrania albo chociaż notatki z kilkudziesięciu ostatnich połączeń. Nie po to, żeby je odtwarzać agentowi, tylko żeby zobaczyć, o co ludzie pytają naprawdę.',
        'Listę pytań, które wracają najczęściej, z odpowiedziami w takiej formie, w jakiej wolno je podać klientowi.',
        'Informację, gdzie leżą dane: kalendarz, system rezerwacji, arkusz, CRM. I czy da się do nich dostać przez API, czy ktoś przepisuje ręcznie.',
        'Granice. Czego agent nie może obiecać, jakich spraw w ogóle nie tyka i przy jakich słowach przełącza do człowieka bez dyskusji.',
        'Jedną osobę u Was, która może zdecydować. Wdrożenia stoją zwykle nie na technologii, tylko na tym, że przez dwa tygodnie nikt nie odpowiedział, co robić z przypadkiem X.',
      ],
    },
    {
      paragraphs: [
        'Brak któregoś z tych punktów nie jest powodem do wstydu, tylko pierwszym etapem pracy. Czasem kończy się tak, że firma przez miesiąc porządkuje wiedzę, a projekt czeka. I dobrze, bo agent karmiony bałaganem odpowiada bałaganem, tylko szybciej i przez telefon.',
      ],
    },
    {
      heading: 'Nowoczesna infolinia w praktyce, czyli nasze demo transportowe',
      paragraphs: [
        'Zbudowaliśmy publiczne demo agenta głosowego dla transportu, dostępne pod adresem pks-gryfice-demo.vercel.app. Mówimy to wprost, bo w branży nagminnie robi się z takich rzeczy referencje: to jest nasza prezentacja techniczna zbudowana na publicznie dostępnych danych rozkładowych, a nie wdrożenie u klienta. PKS Gryfice nie jest naszym klientem i nie zlecał nam tej pracy.',
        'Demo pokrywa 6 przystanków i 276 odjazdów. Można zadzwonić i zapytać zwyczajnie, o której jest najbliższy autobus w konkretną stronę, a agent odpowie godziną i poda źródło, z którego wziął dane. To ostatnie jest tu najważniejsze: agent nie zgaduje i nie improwizuje rozkładu, tylko cytuje to, co ma w danych. W klasycznym IVR taka rozmowa jest technicznie niewykonalna. Nie da się wystukać cyfrą pytania „o której mam autobus z centrum do szpitala w sobotę rano”.',
        'Ograniczenia demo też są jawne. Sześć przystanków to wycinek sieci, dane są statyczne i nie uwzględniają opóźnień ani objazdów, a agent obsługuje jeden typ sprawy. Prawdziwe wdrożenie wymagałoby podłączenia do systemu przewoźnika i ustalenia, co robić z sytuacjami wyjątkowymi: zjazd do zajezdni, kurs odwołany, zmiana trasy z dnia na dzień. Demo pokazuje mechanizm i jakość rozmowy, a nie gotowy produkt. I tak prosimy je traktować.',
      ],
    },
    {
      heading: 'Kiedy zmiana IVR na voicebota się nie opłaca',
      paragraphs: [
        'Poza sytuacjami, w których menu po prostu działa, są jeszcze firmy, którym odradzamy to wdrożenie z zupełnie innych powodów. Wolimy powiedzieć to na pierwszej rozmowie niż po podpisaniu umowy.',
        'Najczęstszy powód to brak danych, na których agent miałby pracować. Jeśli terminy są w zeszycie, ceny w głowie właściciela, a status zlecenia zna tylko brygadzista, agent nie ma skąd wziąć odpowiedzi. Pierwszym krokiem nie jest wtedy AI, tylko uporządkowanie informacji. Mówimy to regularnie, nawet gdy oznacza to przesunięcie projektu o kilka miesięcy.',
        'Druga sprawa to rozmowy, w których stawką jest decyzja, negocjacja albo emocje. Reklamacja z awanturą. Sprzedaż wymagająca wyczucia. Albo temat po prostu wrażliwy, jak zdrowie czy pieniądze klienta. Tu agent może najwyżej odebrać, zebrać podstawowe informacje i szybko przełączyć do człowieka. Jeśli takie rozmowy stanowią większość Waszego ruchu, sensowniejszą inwestycją jest szkolenie zespołu niż automatyzacja pierwszej linii.',
        'Trzecia to oczekiwania. Jeśli ktoś przychodzi z założeniem, że agent zdejmie z firmy całą obsługę telefonu i nikt już nie będzie odbierał, lepiej rozejść się na tym etapie. Agent przejmuje powtarzalne, a resztę podaje dalej i ktoś tę resztę musi odebrać. Widzieliśmy pomysły na wdrożenie, w których po drugiej stronie przekazania nie było nikogo. To jest gorsze niż samo IVR, bo dzwoniący ma wtedy poczucie, że został oszukany dwa razy.',
      ],
    },
  ],
  faq: [
    {
      question: 'Czy voicebot zastąpi całe IVR?',
      answer:
        'Nie musi i najczęściej nie powinien. W większości wdrożeń agent staje przed istniejącym menu: odbiera, ustala sprawę i albo załatwia ją sam, albo kieruje połączenie od razu we właściwe miejsce. Struktura działów i kolejki zostają nietknięte. Całkowite wyłączenie IVR ma sens dopiero wtedy, gdy agent samodzielnie obsługuje zdecydowaną większość typów spraw. Fragmenty z wystukiwaniem numeru klienta czy PIN-u zostawiamy zwykle na stałe.',
    },
    {
      question: 'Co się dzieje, gdy voicebot nie zrozumie dzwoniącego?',
      answer:
        'Najpierw dopytuje, tak jak zrobiłby człowiek, i prosi o powtórzenie albo doprecyzowanie. Jeśli po drugiej próbie dalej nie ma pewności, przekazuje rozmowę do pracownika razem z podsumowaniem tego, co już padło. Nie zgaduje. Ustalamy też twarde reguły: przy określonych słowach albo typach spraw agent przełącza od razu, bez prób samodzielnego załatwienia.',
    },
    {
      question: 'Co jeśli agent powie klientowi nieprawdę?',
      answer:
        'To realne ryzyko i nie da się go zbić do zera. Ograniczamy je w kilku miejscach. Agent odpowiada z podanej wiedzy, a nie z pamięci modelu. Przy pytaniach o cenę, termin albo zobowiązanie ma zakaz improwizacji i przekazuje rozmowę dalej. Każda rozmowa zostaje w transkrypcji, więc błąd da się znaleźć i poprawić tego samego dnia. W IVR takiego ryzyka nie ma w ogóle, bo lektor mówi wyłącznie to, co nagrał. To uczciwa przewaga starego menu i tak ją traktujemy.',
    },
    {
      question: 'Czy starsi klienci poradzą sobie z voicebotem?',
      answer:
        'Twardych danych z polskich infolinii na ten temat nie mamy, więc mówimy tylko to, co słychać w nagraniach. Problemem rzadko jest wiek, a częściej to, czy agenta da się przerwać i jak szybko oddaje rozmowę człowiekowi. Osoba, która nie chce mówić do maszyny, powie to w pierwszym zdaniu i nie ma sensu jej przekonywać, więc ustawiamy natychmiastowe przełączenie na prośbę o konsultanta. Bywa zresztą odwrotnie, niż wszyscy zakładają: powiedzieć własnymi słowami, o co chodzi, jest łatwiej niż zapamiętać sześć opcji z menu.',
    },
    {
      question: 'Czy agent może przyjąć PESEL albo numer karty?',
      answer:
        'Numeru karty nie przyjmujemy w rozmowie z agentem w ogóle i odradzamy takie pomysły. Przy danych w rodzaju numeru klienta czy PESEL-u zostawiamy wystukiwanie tonowe, czyli dokładnie ten fragment IVR, który działa dobrze: cyfry idą prosto do systemu, nie przechodzą przez transkrypcję i nie zostają w nagraniu jako wypowiedziane słowa. Resztę rozmowy prowadzi agent.',
    },
    {
      question: 'Czy da się zachować obecny numer telefonu?',
      answer:
        'Tak, i to standardowy scenariusz. Numer zostaje ten sam, a przekierowanie na agenta ustawia się po stronie operatora albo centrali. Nie trzeba zmieniać wizytówek, ulotek ani wpisów w wyszukiwarce. Można też skierować na agenta tylko część ruchu, na przykład połączenia po godzinach lub te, które trafiają na zajęte linie.',
    },
    {
      question: 'Ile trwa zmiana z IVR na voicebota?',
      answer:
        'Przy mniejszym wdrożeniu zwykle od dwóch do czterech tygodni, przy większym od miesiąca do trzech. Czas zależy głównie od tego, do ilu systemów agent musi mieć dostęp i jak uporządkowana jest wiedza, na której ma pracować. Sam głos i rozumienie mowy to najszybsza część. Najwięcej zajmuje ustalenie scenariuszy brzegowych i testy na prawdziwych nagraniach.',
    },
    {
      question: 'Ile kosztuje voicebot na infolinię?',
      answer:
        'Wdrożenie zaczyna się od 5 000 zł netto, a większe projekty wyceniamy indywidualnie po rozpoznaniu zakresu. Do tego dochodzi utrzymanie: 249, 499 albo 799 zł netto miesięcznie w zależności od pakietu. Pierwsza konsultacja jest bezpłatna. Kończy się zresztą często wnioskiem, że wystarczy uruchomić agenta na jednym fragmencie ruchu, albo że na razie nie ma po co.',
    },
  ],
  related: [
    { label: 'Agent głosowy AI', href: '/uslugi/agent-glosowy-ai' },
    { label: 'Voicebot dla firm transportowych', href: '/branze/voicebot-dla-transportu' },
    { label: 'Cennik wdrożeń AI', href: '/cennik' },
    { label: 'Voicebot czy chatbot', href: '/blog/voicebot-czy-chatbot' },
  ],
  ctaHeading: 'Posłuchajmy razem, jak brzmi Wasza infolinia',
  ctaSub:
    'Opowiedz nam, jak dziś wygląda pierwsza minuta połączenia w Twojej firmie i ile telefonów zostaje bez odpowiedzi. Powiemy, czy warto ruszać IVR, czy wystarczy postawić agenta na części ruchu. Czasem wychodzi, że nie warto w ogóle, i to też usłyszysz. Konsultacja jest bezpłatna.',
};

export default function Page() {
  return <BlogArticle content={content} />;
}
