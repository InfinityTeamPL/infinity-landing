import type { Metadata } from 'next';
import BlogArticle, { BlogArticleContent } from '@/components/BlogArticle';

export const metadata: Metadata = {
  title: 'Voicebot a IVR — czym się różnią i co daje zmiana?',
  description:
    'Klasyczne „wciśnij jeden" kontra agent, który rozumie swobodną mowę. Różnice w obsłudze, kosztach i tym, co realnie zmienia się dla dzwoniącego.',
  alternates: { canonical: '/blog/voicebot-a-ivr' },
  openGraph: {
    title: 'Voicebot a IVR — czym się różnią i co daje zmiana?',
    description:
      'Klasyczne „wciśnij jeden" kontra agent, który rozumie swobodną mowę. Różnice w obsłudze, kosztach i tym, co realnie zmienia się dla dzwoniącego.',
    type: 'article',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

const content: BlogArticleContent = {
  path: '/blog/voicebot-a-ivr',
  title: 'Voicebot a IVR — czym się różnią i co daje zmiana?',
  description:
    'Klasyczne „wciśnij jeden" kontra agent, który rozumie swobodną mowę. Różnice w obsłudze, kosztach i tym, co realnie zmienia się dla dzwoniącego.',
  datePublished: '2026-07-26',
  sections: [
    {
      paragraphs: [
        'Każdy to zna. Dzwonisz do firmy w jednej konkretnej sprawie, a w słuchawce odzywa się lektor: aby uzyskać informacje o zamówieniu, wciśnij jeden; aby połączyć się z serwisem, wciśnij dwa; aby wysłuchać menu ponownie, wciśnij gwiazdkę. Wciskasz dwa, wchodzisz w kolejne menu, w którym znowu nie ma Twojej sprawy. Wracasz na początek, wybierasz zero i lądujesz w kolejce, gdzie miła pani informuje, że jesteś siódmy.',
        'To jest IVR, czyli interaktywne menu głosowe. Technologia z lat osiemdziesiątych, która wciąż stoi na pierwszej linii w tysiącach polskich firm. Nie dlatego, że jest dobra dla dzwoniącego. Dlatego, że jest wygodna dla firmy: raz nagrany komunikat, sztywne drzewko, przewidywalne przekierowania. Dzwoniący ma się dopasować do struktury działów, zamiast po prostu powiedzieć, o co mu chodzi.',
        'W tym tekście rozkładamy temat „voicebot a IVR" na części: jak działa jedno i drugie, gdzie klasyczne menu się łamie, co realnie zmienia się dla osoby po drugiej stronie i czy trzeba wyrzucać to, co już macie. Piszemy też uczciwie, kiedy taka zmiana nie ma sensu. Bo nie każda infolinia potrzebuje agenta rozumiejącego mowę.',
      ],
    },
    {
      heading: 'Jak działa klasyczne IVR i gdzie się łamie',
      paragraphs: [
        'Klasyczne IVR to nagrania lektora plus drzewko decyzyjne. System odtwarza listę opcji, dzwoniący wybiera cyfrę na klawiaturze telefonu, a centrala przekierowuje połączenie do odpowiedniej kolejki albo odtwarza kolejny poziom menu. Bardziej rozbudowane wdrożenia potrafią jeszcze przyjąć numer sprawy albo PESEL wystukany tonowo i odczytać status z systemu. I na tym w zasadzie kończą się ich możliwości.',
        'Trzeba oddać IVR sprawiedliwość: w kilku sytuacjach zdaje egzamin. Gdy firma ma trzy wyraźnie oddzielone działy i ogromny ruch, rozdzielenie połączeń jedną cyfrą jest szybkie i tanie. Gdy jedyne, czego dzwoniący potrzebuje, to godziny otwarcia albo adres, komunikat powitalny załatwia sprawę bez angażowania nikogo. Problem w tym, że tak wygląda mniejszość połączeń.',
        'Reszta rozbija się o cztery rzeczy. Po pierwsze, pojemność menu: człowiek zapamiętuje z listy trzy, może cztery opcje, więc dłuższe drzewko zmusza do słuchania wszystkiego od nowa. Po drugie, sprawy nietypowe, które nie pasują do żadnej gałęzi, a to zwykle właśnie te, które wymagają uwagi. Po trzecie, brak kontekstu: po przekierowaniu dzwoniący opowiada wszystko od początku, bo IVR nie przekazuje dalej niczego poza numerem kolejki. Po czwarte, godziny pracy. O dwudziestej drugiej menu wciąż mówi, tylko za nim nie ma już nikogo.',
        'Efekt uboczny jest taki, że część ludzi nauczyła się omijać IVR odruchowo. Wciskają zero, mówią „konsultant", rozłączają się i piszą maila albo dzwonią do konkurencji. Menu miało odciążyć obsługę, a w praktyce przesuwa ruch do innego kanału i wydłuża drogę do odpowiedzi.',
      ],
    },
    {
      heading: 'Jak działa voicebot, czyli swobodna mowa zamiast wybierania tonowego',
      paragraphs: [
        'Voicebot, czyli agent głosowy AI, odwraca układ. Zamiast listy opcji dzwoniący słyszy pytanie „w czym mogę pomóc" i odpowiada normalnym zdaniem. Pod spodem działają trzy elementy: rozpoznawanie mowy zamienia wypowiedź na tekst, model językowy rozumie intencję i decyduje, co zrobić, a synteza mowy odpowiada głosem. My korzystamy z ElevenLabs, więc głos brzmi jak naturalna polszczyzna, z odmianą przez przypadki i akcentem zdaniowym, a nie jak czytnik z automatu.',
        'Najważniejsza różnica jest jednak głębiej. Agent nie kończy na rozumieniu. Ma dostęp do danych i może w trakcie rozmowy coś zrobić: sprawdzić rozkład, kalendarz, status zamówienia, wolne terminy. Dopytać o brakującą informację, jeśli dzwoniący podał za mało. Zapisać wizytę, wysłać SMS z potwierdzeniem, zanotować zgłoszenie. Rozmowa i akcja dzieją się w tym samym czasie, więc nie kończy się zdaniem „proszę zadzwonić w godzinach pracy biura".',
        'Nie znaczy to, że zawsze wychodzi za pierwszym razem. Rozpoznawanie mowy potrafi się wyłożyć na hałasie w tle, na bardzo szybkim mówieniu i na nazwiskach, które każdy wymawia inaczej. Dlatego pierwsze tygodnie po starcie to głównie słuchanie nagrań i poprawianie tego, co się posypało.',
        'Nietypowe sprawy nie kończą się komunikatem o błędzie, tylko przekazaniem do człowieka, razem z podsumowaniem tego, co dzwoniący już powiedział. Pracownik odbiera rozmowę z kontekstem, a nie z pustą kartką. A ponieważ agent nie ma zmiany ani przerwy, odbiera tak samo o siódmej rano, jak w sobotę wieczorem. Dane przetwarzamy na serwerach w Polsce i UE, zgodnie z RODO i w oparciu o standardy zgodne z ISO 27001. Dla infolinii, przez którą przechodzą dane klientów, to nie jest szczegół.',
      ],
    },
    {
      heading: 'Voicebot a IVR punkt po punkcie',
      paragraphs: [
        'Zestawmy jedno i drugie w kategoriach, które faktycznie decydują o wyborze. Nie w tabelce z gwiazdkami. Chodzi o to, co dzwoniący odczuwa w pierwszych trzydziestu sekundach.',
      ],
      bullets: [
        'Sposób obsługi. IVR: wybór cyfry z listy, jedna gałąź na raz. Voicebot: dzwoniący mówi własnymi słowami, agent sam ustala, o co chodzi, i dopytuje o brakujące szczegóły.',
        'Sprawy nietypowe. IVR: brak opcji na liście, powrót do menu głównego albo kolejka. Voicebot: obsługuje pytania zadane po ludzku, a gdy sprawa go przerasta, przekazuje ją człowiekowi z podsumowaniem rozmowy.',
        'Dostęp do danych. IVR: w najlepszym razie odczyt statusu po wystukanym numerze. Voicebot: sprawdza rozkład, kalendarz, bazę wiedzy czy system rezerwacji i odpowiada konkretem, a nie ogólnikiem.',
        'Akcja w trakcie rozmowy. IVR: przekierowuje i na tym kończy rolę. Voicebot: rezerwuje termin, zmienia rezerwację, wysyła potwierdzenie i rejestruje zgłoszenie, jeszcze zanim rozmowa się skończy.',
        'Dostępność. IVR: po godzinach odtwarza komunikat, że biuro jest zamknięte. Voicebot: odbiera całą dobę i wtedy, gdy wszystkie linie są zajęte, więc nieodebrane połączenie przestaje być stratą.',
        'Zmiany i utrzymanie. IVR: każda korekta oznacza nowe nagranie lektora i przebudowę drzewka w centrali. Voicebot: aktualizujesz wiedzę i zasady, a nie strukturę menu.',
        'Koszt wdrożenia. IVR bywa tańszy na starcie, bo to kilka nagrań i konfiguracja centrali. Wdrożenie agenta głosowego zaczyna się u nas od 5 000 zł netto, większe projekty wyceniamy indywidualnie, a utrzymanie to 249, 499 albo 799 zł netto miesięcznie zależnie od pakietu.',
      ],
    },
    {
      heading: 'Czy trzeba wyrzucać IVR, żeby postawić voicebota',
      paragraphs: [
        'Nie. To najczęstsze nieporozumienie w rozmowach o zmianie infolinii: firma zakłada, że trzeba zdemontować całą centralę i zbudować wszystko od zera. Nie trzeba, a często wręcz nie warto, bo istniejące przekierowania i kolejki działają i ktoś je przez lata dopieszczał.',
        'Wariant pierwszy: agent staje przed IVR. Odbiera połączenie, pyta o sprawę, rozumie odpowiedź i albo załatwia ją sam, albo przekierowuje dokładnie tam, gdzie trzeba, omijając trzy poziomy menu. Dzwoniący w ogóle nie słyszy drzewka. Firma zachowuje dotychczasową strukturę działów pod spodem.',
        'Wariant drugi: agent obsługuje część ruchu. Na przykład tylko połączenia po godzinach, tylko nadmiar, gdy wszystkie linie są zajęte, albo tylko jeden typ spraw, powtarzalny i dobrze opisany. To najbezpieczniejszy sposób na start, bo w razie czego wracacie do stanu wyjściowego jednym przełączeniem.',
        'Wariant trzeci: pilot na wydzielonym numerze. Agent dostaje własną linię, kierujecie na nią ruch z jednej kampanii albo jednego oddziału i przez kilka tygodni patrzycie na nagrania i transkrypcje. Dopiero potem decydujecie, czy przesuwać główny numer. Numer da się zresztą zachować w każdym z tych wariantów. Przekierowanie ustawia się po stronie operatora albo centrali, a klienci nie zauważają zmiany w wizytówkach i na ulotkach.',
      ],
    },
    {
      heading: 'Nowoczesna infolinia w praktyce, czyli nasze demo transportowe',
      paragraphs: [
        'Zbudowaliśmy publiczne demo agenta głosowego dla transportu, dostępne pod adresem pks-gryfice-demo.vercel.app. Chcemy to powiedzieć wprost, bo w branży nagminnie robi się z takich rzeczy referencje: to jest nasze demo zbudowane na publicznie dostępnych danych rozkładowych, a nie wdrożenie u klienta. PKS Gryfice nie jest naszym klientem i nie zlecał nam tej pracy.',
        'Demo pokrywa 6 przystanków i 276 odjazdów. Można zadzwonić i zapytać zwyczajnie, o której jest najbliższy autobus w konkretną stronę, a agent odpowie godziną i poda źródło, z którego wziął dane. To ostatnie jest w tym wszystkim najważniejsze: agent nie zgaduje i nie improwizuje rozkładu, tylko cytuje to, co ma w danych. W klasycznym IVR taka rozmowa jest technicznie niewykonalna. Nie da się wystukać cyfrą pytania „o której mam autobus z centrum do szpitala w sobotę rano".',
        'Ograniczenia demo też są jawne. Sześć przystanków to wycinek sieci, dane są statyczne i nie uwzględniają opóźnień ani objazdów, a agent obsługuje jeden typ sprawy. Prawdziwe wdrożenie wymagałoby podłączenia do systemu przewoźnika i ustalenia, co robić z sytuacjami wyjątkowymi. Demo pokazuje mechanizm i jakość rozmowy, a nie gotowy produkt. I tak prosimy je traktować.',
      ],
    },
    {
      heading: 'Kiedy zmiana IVR na voicebota się nie opłaca',
      paragraphs: [
        'Są firmy, którym odradzamy to wdrożenie, i wolimy powiedzieć to na pierwszej rozmowie niż po podpisaniu umowy. Jeśli telefon dzwoni kilka razy dziennie i odbiera go jedna osoba, która i tak nie ma kolejki, agent głosowy niczego nie naprawi. Koszt utrzymania będzie wtedy większy niż problem, który miał rozwiązać.',
        'Druga sytuacja: brak danych, na których agent miałby pracować. Jeśli terminy są w zeszycie, ceny w głowie właściciela, a status zlecenia zna tylko brygadzista, agent nie ma skąd wziąć odpowiedzi. Pierwszym krokiem nie jest wtedy AI, tylko uporządkowanie informacji. Mówimy to firmom regularnie, nawet gdy oznacza to przesunięcie projektu o kilka miesięcy.',
        'Trzecia: rozmowy, w których stawką jest decyzja, negocjacja albo emocje. Reklamacja z awanturą, sprzedaż, która wymaga wyczucia. Albo sprawa po prostu wrażliwa. Tu agent może najwyżej odebrać, zebrać podstawowe informacje i szybko przełączyć do człowieka. Jeśli takie rozmowy stanowią większość Waszego ruchu, sensowniejszą inwestycją jest szkolenie zespołu, a nie automatyzacja pierwszej linii.',
        'I sytuacja czwarta, najprostsza: Wasze IVR ma dwie opcje, wszyscy trafiają dokąd trzeba, a nikt się nie skarży. Wtedy nie ma czego naprawiać. Zmiana ma sens tam, gdzie menu urosło, kolejka się wydłużyła, a po godzinach po prostu nikt nie odbiera.',
      ],
    },
  ],
  faq: [
    {
      question: 'Czy voicebot zastąpi całe IVR?',
      answer:
        'Nie musi i najczęściej nie powinien. W większości wdrożeń agent staje przed istniejącym menu: odbiera, ustala sprawę i albo załatwia ją sam, albo kieruje połączenie od razu we właściwe miejsce. Struktura działów i kolejki zostają nietknięte. Całkowite wyłączenie IVR ma sens dopiero wtedy, gdy agent obsługuje samodzielnie zdecydowaną większość typów spraw.',
    },
    {
      question: 'Co się dzieje, gdy voicebot nie zrozumie dzwoniącego?',
      answer:
        'Najpierw dopytuje, tak jak zrobiłby człowiek, i prosi o powtórzenie albo doprecyzowanie. Jeśli po drugiej próbie dalej nie ma pewności, przekazuje rozmowę do pracownika razem z podsumowaniem tego, co już padło. Nie zgaduje. Ustalamy też twarde reguły: przy określonych słowach albo typach spraw agent przełącza od razu, bez prób samodzielnego załatwienia.',
    },
    {
      question: 'Czy da się zachować obecny numer telefonu?',
      answer:
        'Tak, i to standardowy scenariusz. Numer zostaje ten sam, a przekierowanie na agenta ustawia się po stronie operatora albo centrali. Nie trzeba zmieniać wizytówek, ulotek ani wpisów w wyszukiwarce. Można też skierować na agenta tylko część ruchu, na przykład połączenia po godzinach lub te, które trafiają na zajęte linie.',
    },
    {
      question: 'Ile trwa zmiana z IVR na voicebota?',
      answer:
        'Przy mniejszym wdrożeniu zwykle 2–4 tygodnie, przy większym 1–3 miesiące. Czas zależy głównie od tego, do ilu systemów agent musi mieć dostęp i jak uporządkowana jest wiedza, na której ma pracować. Sam głos i rozumienie mowy to najszybsza część. Najwięcej zajmuje ustalenie scenariuszy brzegowych i testy na prawdziwych nagraniach.',
    },
    {
      question: 'Ile kosztuje voicebot na infolinię?',
      answer:
        'Wdrożenie zaczyna się od 5 000 zł netto, a większe projekty wyceniamy indywidualnie po rozpoznaniu zakresu. Do tego dochodzi utrzymanie: 249, 499 albo 799 zł netto miesięcznie w zależności od pakietu. Pierwsza konsultacja jest bezpłatna. Kończy się zresztą często wnioskiem, że wystarczy uruchomić agenta na jednym fragmencie ruchu.',
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
    'Opowiedz nam, jak dziś wygląda pierwsza minuta połączenia w Twojej firmie i ile telefonów zostaje bez odpowiedzi. Podpowiemy, czy warto ruszać IVR, czy wystarczy postawić agenta na części ruchu. Konsultacja jest bezpłatna.',
};

export default function Page() {
  return <BlogArticle content={content} />;
}
