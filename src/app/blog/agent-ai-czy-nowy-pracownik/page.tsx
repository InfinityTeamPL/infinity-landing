import type { Metadata } from 'next';
import BlogArticle, { BlogArticleContent } from '@/components/BlogArticle';

export const metadata: Metadata = {
  title: 'Agent AI czy nowy pracownik. Jak policzyć, co się opłaca',
  description:
    'Uczciwe porównanie kosztów: co realnie kosztuje etat, co agent AI, czego AI nie zrobi i kiedy zatrudnienie człowieka jest po prostu lepsze.',
  alternates: { canonical: '/blog/agent-ai-czy-nowy-pracownik' },
  openGraph: {
    title: 'Agent AI czy nowy pracownik. Jak policzyć, co się opłaca',
    description:
      'Uczciwe porównanie kosztów: co realnie kosztuje etat, co agent AI, czego AI nie zrobi i kiedy zatrudnienie człowieka jest po prostu lepsze.',
    type: 'article',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

const content: BlogArticleContent = {
  path: '/blog/agent-ai-czy-nowy-pracownik',
  title: 'Agent AI czy nowy pracownik. Jak policzyć, co się opłaca',
  description:
    'Uczciwe porównanie kosztów: co realnie kosztuje etat, co agent AI, czego AI nie zrobi i kiedy zatrudnienie człowieka jest po prostu lepsze.',
  datePublished: '2026-07-26',
  sections: [
    {
      paragraphs: [
        'Pytanie „agent AI czy pracownik" pada na co drugim spotkaniu i prawie zawsze jest źle postawione. Brzmi jak wybór między dwoma zamiennikami, jakby chodziło o to, czy kupić samochód spalinowy, czy elektryczny. A to nie są zamienniki. Agent AI nie jest tańszą wersją człowieka. To inne narzędzie: robi dobrze jedną wąską rzecz i nie robi wcale całej reszty.',
        'Dobrze postawione pytanie brzmi inaczej. Która część pracy, którą chcecie komuś zlecić, jest powtarzalna i opisywalna regułami, a która wymaga człowieka. Bo etat, o którym myślicie, prawie nigdy nie jest jednorodny. To zwykle miks: odbieranie telefonów, przepisywanie danych, umawianie terminów, ale też rozmowy z trudnym klientem, decyzje wyjątkowe i sto drobiazgów, których nikt nigdy nie spisał.',
        'Rozkładamy więc jedno i drugie na czynniki: co naprawdę składa się na koszt etatu, ile kosztuje agent, czego agent nie zrobi i kiedy zatrudnienie człowieka jest po prostu lepszą decyzją. Nie znajdziecie tu tabelki z przykładowymi wynagrodzeniami ani obietnicy zwrotu w trzy miesiące. Własne liczby policzycie w naszym kalkulatorze ROI.',
      ],
    },
    {
      heading: 'Co naprawdę składa się na koszt etatu',
      paragraphs: [
        'Pierwszy błąd w takich kalkulacjach to porównywanie miesięcznego abonamentu za oprogramowanie z wynagrodzeniem netto pracownika. To dwie różne wielkości. Realny koszt zatrudnienia ma co najmniej sześć składników i tylko jeden z nich widać na pasku wypłaty.',
        'Do wynagrodzenia brutto dochodzą składki po stronie pracodawcy. Dochodzi urlop i zwolnienia lekarskie, czyli miesiące, za które płacicie, a praca się nie dzieje albo przechodzi na kogoś innego. Dochodzi rekrutacja: ogłoszenia, czas osoby, która prowadzi rozmowy, czasem prowizja agencji. Dochodzi wdrożenie, czyli kilka pierwszych tygodni, w których nowa osoba pracuje wolniej, a ktoś doświadczony traci swój czas na tłumaczenie. Dochodzi stanowisko pracy: sprzęt, licencje, telefon, biurko. I dochodzi rotacja, najbardziej podstępna pozycja. Jeśli ktoś odchodzi po roku, cały koszt rekrutacji i wdrożenia ponosicie od nowa.',
        'Nie podamy tu przykładowych kwot, bo byłyby zmyślone. Różnice między stanowiskami, miastami i branżami są zbyt duże, żeby jedna liczba miała sens. Zamiast tego policzcie swoje. Do tego zrobiliśmy kalkulator ROI: wpisujecie liczbę godzin poświęcanych dziś na powtarzalne czynności i swoje realne stawki, a on pokazuje, o jakiej skali mówimy. Zajmuje to kilka minut i jest znacznie uczciwsze niż jakikolwiek benchmark z internetu.',
        'Policzcie też drugą stronę bilansu, czyli koszt tego, czego nie robicie. Nieodebrany telefon o osiemnastej nie kosztuje zera złotych. To zapytanie, które poszło do konkurencji. Ta pozycja rzadko trafia do zestawień, bo nie ma jej w żadnym systemie księgowym, a często bywa największa.',
        'I jeszcze jedna rzecz, o której się zapomina. Etat skaluje się słabo w obie strony. W miesiącu z podwójnym ruchem jedna osoba nie odbierze dwa razy więcej telefonów, a w martwym sezonie płacicie jej tyle samo. Firmy z wyraźną sezonowością, czyli budowlanka, turystyka czy serwisy klimatyzacji, powinny liczyć to osobno dla szczytu i osobno dla dołka. U nich cała kalkulacja wygląda inaczej niż u kogoś z równym ruchem przez cały rok.',
      ],
    },
    {
      heading: 'Co składa się na koszt agenta AI',
      paragraphs: [
        'Po stronie agenta struktura kosztów jest prostsza, ale też ma więcej niż jedną pozycję. Pierwsza to wdrożenie: analiza procesu, połączenie z Waszymi systemami, zbudowanie bazy wiedzy, testy i poprawki po pierwszych prawdziwych rozmowach. U nas zaczyna się od 5 000 zł netto przy mniejszych projektach. Większe wyceniamy indywidualnie, bo różnica między agentem odbierającym telefon a agentem wpiętym w trzy systemy firmy jest ogromna.',
        'Druga pozycja to utrzymanie: 249, 499 albo 799 zł netto miesięcznie w zależności od pakietu. Obejmuje hosting, monitoring, aktualizacje i poprawki. Agent nie jest rzeczą, którą się raz ustawia i zapomina. Wiedza w firmie się zmienia, klienci zaczynają pytać o nowe rzeczy, pojawiają się scenariusze, których nikt nie przewidział. Ktoś musi je wyłapywać z transkrypcji i dopisywać.',
        'Trzecia pozycja jest nieoczywista, a lepiej powiedzieć o niej wcześniej niż później. To Wasz czas na starcie. Ktoś w firmie musi odpowiedzieć na pytania o proces, przejrzeć pierwsze rozmowy i powiedzieć, co agent odpowiedział źle. Zwykle kilka godzin rozłożonych na parę tygodni. Bez tego wdrożenie kończy się agentem, który brzmi dobrze i nie zna Waszej firmy.',
        'Przy agencie telefonicznym dochodzi do tego telefonia, czyli numer u operatora i minuty połączeń. Ta pozycja jest poza naszym cennikiem i rośnie razem z ruchem, więc przy dużej liczbie rozmów potrafi być zauważalna. Pytajcie o nią każdego dostawcę, bo bywa schowana pod ceną wdrożenia i wychodzi dopiero na pierwszej fakturze.',
        'Czas realizacji to od dwóch do czterech tygodni przy mniejszych wdrożeniach i od miesiąca do trzech przy większych. To istotna różnica wobec rekrutacji, która zwykle trwa dłużej, a jej efekt bywa mniej pewny. Odwrotna strona tej monety jest jednak równie twarda. Agent działa dokładnie w zakresie, który mu zbudowaliście, i ani centymetra dalej.',
      ],
    },
    {
      heading: 'Czego agent AI nie zrobi',
      paragraphs: [
        'To jest część, którą większość ofert pomija, a która decyduje o tym, czy wdrożenie się uda. Agent AI ma twarde granice. Lepiej je znać przed podpisaniem umowy niż po.',
        'Najprościej pokazać to na telefonach. Pytania w rodzaju „do której jesteście otwarci w sobotę", „ile kosztuje przegląd", „czy moje zlecenie jest już gotowe" albo „chcę przełożyć wizytę z wtorku na czwartek" agent zamyka sam, o drugiej w nocy też. Ale telefon typu „zamówienie miało być na piątek, jest środa, mam wesele w sobotę i chcę wiedzieć, co teraz robicie" to nie jego liga. Zbierze fakty, streści je i przełączy.',
        'Nie poradzi sobie ze sprawą nietypową, której nikt nie przewidział. Może ją najwyżej rozpoznać jako nietypową i przekazać człowiekowi z podsumowaniem. Nie podejmie decyzji, za którą ktoś ponosi odpowiedzialność: nie udzieli rabatu poza ustalonymi widełkami, nie uzna reklamacji spornej, nie oceni, czy warto zrobić wyjątek dla klienta, który współpracuje z Wami od dziesięciu lat. Możecie mu takie uprawnienia formalnie nadać, ale to zwykle zły pomysł.',
        'Nie zbuduje relacji. Klient, który dzwoni, bo lubi rozmawiać z panią Anią z biura, dzwoni po coś, czego agent nie da. W części branż to jest cała przewaga firmy i automatyzowanie tego byłoby strzałem w kolano. Nie wymyśli też niczego nowego. Działa w ramach tego, co wie, i nie zaproponuje procesu, którego nikt wcześniej nie opisał.',
        'I rzecz najbardziej praktyczna: nie zauważy, że coś jest nie tak. Człowiek na recepcji wyłapie, że od tygodnia dzwoni podejrzanie dużo osób z tym samym problemem, i pójdzie z tym do szefa. Agent obsłuży wszystkie te rozmowy poprawnie i nikomu nic nie powie, jeśli nikt nie zajrzy w statystyki. Dlatego przy każdym wdrożeniu ustalamy, kto i jak często przegląda transkrypcje.',
        'Jest jeszcze warstwa czysto techniczna, którą w ofertach widać rzadko. Agent nie choruje, ale ma awarie, bo wisi na dostawcy modelu i na telefonii, a te miewają przerwy. Dlatego ustalamy z góry, co się dzieje, gdy agent nie odpowiada: przekierowanie na numer stacjonarny, komunikat z prośbą o maila, cokolwiek. Firma bez planu B po pierwszej dłuższej przerwie traci zaufanie do całego pomysłu.',
        'Do tego agent głosowy gorzej radzi sobie w hałasie, przy słabym zasięgu i z rozmówcą, który mówi bardzo cicho albo bardzo szybko. Jeśli Wasi klienci dzwonią głównie z placu budowy albo zza kierownicy, załóżcie z góry, że część rozmów trzeba będzie przełączyć z powodu samego dźwięku, a nie treści.',
      ],
    },
    {
      heading: 'Cztery obiekcje, które słyszymy najczęściej',
      paragraphs: [
        '„Klienci nie znoszą robotów na infolinii". Częściowo to prawda i nie da się tego zagadać. Część dzwoniących rozłączy się w chwili, gdy usłyszy, że rozmawia z maszyną, a od 2 sierpnia 2026 agent musi to powiedzieć, bo wymaga tego artykuł 50 AI Act. Pomaga krótkie przedstawienie się, możliwość powiedzenia „proszę o człowieka" w dowolnym momencie i to, żeby agent faktycznie zamknął sprawę w pół minuty, zamiast prowadzić rozmówcę przez menu.',
        '„Wolę człowieka, bo etat jest elastyczny". To akurat prawda i nie będziemy udawać inaczej. Pracownika poprosicie w środę o coś, o czym w poniedziałek nikt nie myślał. Agenta trzeba przebudować i poczekać. Tyle że to działa w obie strony: etatu nie wyłączycie na miesiąc, a przekierowania do agenta owszem.',
        '„Nasza branża jest za trudna dla AI". Zwykle nie branża jest problemem, tylko to, czy wiedza w firmie jest spisana. Agent uczy się z dokumentów, nie z domysłów. Jeśli cennik siedzi w głowie właściciela, zasady rabatów zna jedna osoba, a najświeższy opis usług to plik z 2023 roku, to nie jest kwestia branży, tylko materiału. Ta sama firma po dwóch tygodniach porządków bywa gotowa.',
        '„Poczekamy, aż to dojrzeje". Uczciwie: przy prostej obsłudze telefonu odłożenie tematu o pół roku niewiele Was kosztuje poza telefonami, których nikt nie odebrał. Technologia będzie w tym czasie pewnie lepsza i tańsza. Gorzej, jeśli czekanie oznacza, że przez ten czas nikt nie spisuje wiedzy, bo to jest ta część projektu, która zajmuje najwięcej i której żaden dostawca nie odrobi za Was.',
      ],
    },
    {
      heading: 'Agent bierze powtarzalne, człowiek trudne',
      paragraphs: [
        'Najczęściej sprawdza się układ, w którym nie wybieracie między agentem a człowiekiem, tylko dzielicie pracę. Wygląda to zwykle tak. Agent odbiera wszystkie połączenia jako pierwszy. Sprawy powtarzalne (godziny, ceny z cennika, status zlecenia, umówienie albo przełożenie terminu) załatwia w całości, o każdej porze. Wszystko inne przekazuje do człowieka razem z tym, co już ustalił, więc klient nie tłumaczy sprawy dwa razy.',
        'Zmienia się wtedy nie liczba etatów, tylko ich zawartość. Osoba, która wcześniej przez pół dnia odbierała te same pytania, dostaje czas na sprawy, które faktycznie wymagają uwagi: trudne rozmowy i klientów, którzy są blisko rezygnacji. Dostaje też nową rolę, czyli nadzór nad agentem. Ktoś musi przejrzeć rozmowy z tygodnia, wyłapać złe odpowiedzi i zgłosić poprawkę. To zajmuje ułamek czasu, który agent zwolnił.',
        'Ile dokładnie czasu, trudno przewidzieć z góry. Bywa różnie. U jednych agent zamyka co drugą rozmowę bez człowieka, u innych co piątą, a prawda wychodzi dopiero po miesiącu prawdziwego ruchu. Dlatego pierwszy miesiąc traktujemy jako pomiar, a nie jako wynik.',
        'Ten układ ma jeszcze jedną zaletę, rzadko wymienianą: jest odwracalny. Jeśli po miesiącu okaże się, że agent radzi sobie gorzej, niż zakładaliście, wyłączacie przekierowanie i wracacie do punktu wyjścia. Z rekrutacją tak się nie da. Dlatego przy niepewnych przypadkach doradzamy zacząć od jednego procesu, a nie od przebudowy całej obsługi.',
      ],
    },
    {
      heading: 'Co przygotować przed startem',
      paragraphs: [
        'Jeśli skłaniacie się ku agentowi, poniżej jest lista rzeczy, które i tak od Was zbierzemy. Im więcej z nich macie przed pierwszym spotkaniem, tym krótsza i tańsza wychodzi analiza.',
        'Najdłużej schodzi zwykle na dwóch pozycjach z tej listy: na spisaniu pytań i na ustaleniu, czego agentowi nie wolno. Lista pytań wygląda na pół godziny roboty, a potrafi zająć tydzień, bo przy siódmej pozycji okazuje się, że dwie osoby z zespołu odpowiadają na nią inaczej. To nie jest zmarnowany czas. Ta robota zostaje w firmie nawet wtedy, gdy z agenta ostatecznie zrezygnujecie.',
      ],
      bullets: [
        'Aktualny cennik i zasady rabatów w jednym pliku, a nie w trzech wersjach u trzech osób.',
        'Lista trzydziestu najczęstszych pytań klientów, spisana przez kogoś, kto naprawdę odbiera telefony.',
        'Decyzja, czego agent nie może potwierdzać samodzielnie: wiążące terminy, wyceny, rabaty, reklamacje.',
        'Dostęp do kalendarza albo systemu, w którym agent ma umawiać wizyty i sprawdzać status zlecenia.',
        'Osoba, która przez pierwszy miesiąc przegląda transkrypcje i zgłasza poprawki, wskazana z imienia.',
        'Ustalone, co dzieje się ze sprawą przekazaną człowiekowi po godzinach: oddzwaniamy rano, mail, SMS.',
      ],
    },
    {
      heading: 'Kiedy lepiej zatrudnić człowieka',
      paragraphs: [
        'Są sytuacje, w których uczciwa odpowiedź brzmi: zatrudnijcie kogoś, a o AI porozmawiajmy za rok. Pierwsza to mała skala. Jeśli powtarzalnych spraw jest kilka dziennie, agent nie odzyska kosztu wdrożenia w rozsądnym czasie, a pierwsza pomocna osoba w małym zespole odciąża od razu i na wielu frontach.',
        'Druga sytuacja to praca, której nikt nie potrafi opisać. Jeśli na pytanie „jak wygląda ten proces" pada odpowiedź „to zależy, Kasia wie", agent nie ma z czego się uczyć. Automatyzacja wymaga, żeby ktoś najpierw ubrał wiedzę w słowa i zasady. Czasem to jest właśnie najbardziej wartościowa część projektu, ale trzeba na nią zarezerwować czas i uczciwie powiedzieć, że to nie jest praca za darmo.',
        'Trzecia to procesy oparte na zaufaniu i obecności. Sprzedaż wymagająca wyczucia, opieka nad ważnym klientem, sprawy wrażliwe, negocjacje. Tu automatyzacja pierwszej linii może wręcz zaszkodzić, bo klient odbierze ją jako sygnał, że przestał być ważny.',
        'Czwarta jest najbardziej prozaiczna i najczęściej przesądza: brak kogoś, kto weźmie projekt na siebie. Wdrożenie agenta wymaga po Waszej stronie jednej osoby, która odpowie na pytania i przejrzy pierwsze rozmowy. Jeśli wszyscy są zajęci ponad miarę i nikt tego nie ogarnie, projekt się rozjedzie niezależnie od budżetu. Wtedy naprawdę lepiej najpierw zatrudnić człowieka, a automatyzację odłożyć do momentu, gdy będzie kto ją poprowadzić.',
      ],
    },
  ],
  faq: [
    {
      question: 'Czy po wdrożeniu agenta AI będę musiał zwolnić pracowników?',
      answer:
        'W praktyce nie tędy to zwykle idzie. Agent przejmuje powtarzalne rozmowy i przepisywanie danych, a ludzie dostają sprawy wymagające decyzji oraz nową rolę: nadzór nad agentem i przeglądanie transkrypcji. Częstszy scenariusz to rezygnacja z kolejnej rekrutacji, a nie zwolnienia. Jeśli planujecie redukcję etatów, powiedzcie o tym wprost na starcie, bo to zmienia zakres wdrożenia.',
    },
    {
      question: 'Po jakim czasie wdrożenie agenta się zwraca?',
      answer:
        'Nie podamy jednej liczby, bo byłaby zmyślona. Zwrot zależy od tego, ile godzin miesięcznie pochłaniają dziś powtarzalne czynności, jakie są Wasze realne stawki i ile zapytań przepada po godzinach. Te dane macie u siebie. Wpiszcie je w nasz kalkulator ROI, a zobaczycie skalę na własnych liczbach zamiast na cudzych benchmarkach.',
    },
    {
      question: 'Ile pracy po naszej stronie wymaga wdrożenie?',
      answer:
        'Potrzebna jest jedna osoba, która przez pierwsze tygodnie odpowie na pytania o proces i przejrzy pierwsze rozmowy. W praktyce to kilka godzin rozłożonych na parę tygodni, a potem krótszy przegląd transkrypcji co tydzień. Jeśli nikt takiej roli nie weźmie, lepiej odłożyć projekt, bo bez tego agent nauczy się wyłącznie tego, co da się wyczytać z Waszej strony internetowej.',
    },
    {
      question: 'Czy agent AI się myli?',
      answer:
        'Tak, modele językowe potrafią odpowiedzieć błędnie lub zmyślić, dlatego agenta projektuje się defensywnie. Ograniczamy jego wiedzę do zweryfikowanej bazy firmy, ustalamy zamkniętą listę czynności, które wolno mu wykonać, a sprawy nietypowe i ryzykowne przekazuje człowiekowi. Do tego dochodzi przegląd transkrypcji, dzięki któremu błędne odpowiedzi wyłapuje się i poprawia.',
    },
    {
      question: 'Kto odpowiada, jeśli agent poda klientowi błędną informację?',
      answer:
        'Odpowiedzialność wobec klienta zostaje po stronie firmy, tak samo jak przy błędzie pracownika. Dlatego zakres uprawnień agenta ustala się na piśmie: co może potwierdzić samodzielnie, a co wymaga człowieka. Zobowiązania takie jak wiążąca wycena, rabat poza widełkami czy uznanie reklamacji zostawiamy ludziom. Rozmowy są nagrywane i transkrybowane, więc każdy przypadek da się odtworzyć.',
    },
    {
      question: 'Co, jeśli po trzech miesiącach uznamy, że to nie działa?',
      answer:
        'Wyłączenie przekierowania to kwestia jednego telefonu do nas i wracacie do obsługi, którą mieliście wcześniej. Koszt wdrożenia jest jednak kosztem poniesionym i nie wraca, dlatego przy niepewnych przypadkach doradzamy zacząć od jednego procesu, a nie od przebudowy całej obsługi. Warunki wypowiedzenia utrzymania zapisujemy w umowie, więc o nie warto zapytać przed podpisaniem, a nie po.',
    },
    {
      question: 'Od czego zacząć, jeśli waham się między etatem a automatyzacją?',
      answer:
        'Od spisania, na co idzie czas w tym miejscu, które chcecie odciążyć, z podziałem na czynności powtarzalne i wymagające decyzji. Ten podział zwykle sam odpowiada na pytanie. Potem policzcie skalę w kalkulatorze ROI i umówcie bezpłatną konsultację. Jeśli uznamy, że automatyzacja się nie opłaca, powiemy to wprost.',
    },
  ],
  related: [
    { label: 'Kalkulator ROI', href: '/kalkulator' },
    { label: 'Automatyzacja procesów AI', href: '/uslugi/automatyzacja-procesow-ai' },
    { label: 'Cennik wdrożeń AI', href: '/cennik' },
    { label: 'Jak wdrożyć AI w firmie', href: '/blog/jak-wdrozyc-ai-w-firmie' },
    { label: 'AI Act a chatboty', href: '/blog/ai-act-chatboty-obowiazki' },
  ],
  ctaHeading: 'Policzmy to na Waszych liczbach, nie na cudzych',
  ctaSub:
    'Powiedzcie nam, jakie zadania miałby przejąć nowy etat, a wspólnie rozdzielimy je na te, które agent zrobi, i te, które zostaną przy człowieku. Jeśli wyjdzie, że lepiej zatrudnić, usłyszycie to od nas. Konsultacja jest bezpłatna.',
};

export default function Page() {
  return <BlogArticle content={content} />;
}
