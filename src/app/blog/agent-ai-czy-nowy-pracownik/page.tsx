import type { Metadata } from 'next';
import BlogArticle, { BlogArticleContent } from '@/components/BlogArticle';

export const metadata: Metadata = {
  title: 'Agent AI czy nowy pracownik — jak policzyć, co się opłaca',
  description:
    'Uczciwe porównanie kosztów: co realnie kosztuje etat, co agent AI, czego AI nie zrobi i kiedy zatrudnienie człowieka jest po prostu lepsze.',
  alternates: { canonical: '/blog/agent-ai-czy-nowy-pracownik' },
  openGraph: {
    title: 'Agent AI czy nowy pracownik — jak policzyć, co się opłaca',
    description:
      'Uczciwe porównanie kosztów: co realnie kosztuje etat, co agent AI, czego AI nie zrobi i kiedy zatrudnienie człowieka jest po prostu lepsze.',
    type: 'article',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

const content: BlogArticleContent = {
  path: '/blog/agent-ai-czy-nowy-pracownik',
  title: 'Agent AI czy nowy pracownik — jak policzyć, co się opłaca',
  description:
    'Uczciwe porównanie kosztów: co realnie kosztuje etat, co agent AI, czego AI nie zrobi i kiedy zatrudnienie człowieka jest po prostu lepsze.',
  datePublished: '2026-07-26',
  sections: [
    {
      paragraphs: [
        'Pytanie „agent AI czy pracownik" pada na co drugim spotkaniu i prawie zawsze jest źle postawione. Brzmi jak wybór między dwoma zamiennikami, jakby chodziło o to, czy kupić samochód spalinowy, czy elektryczny. A to nie są zamienniki. Agent AI nie jest tańszą wersją człowieka. To inne narzędzie, które robi dobrze jedną wąską rzecz i nie robi wcale całej reszty.',
        'Dobrze postawione pytanie brzmi inaczej: która część pracy, którą chcecie komuś zlecić, jest powtarzalna i opisywalna regułami, a która wymaga człowieka. Bo etat, o którym myślicie, prawie nigdy nie jest jednorodny. To zwykle miks: odbieranie telefonów, przepisywanie danych, umawianie terminów, ale też rozmowy z trudnym klientem, decyzje wyjątkowe i sto drobiazgów, których nikt nigdy nie spisał.',
        'W tym tekście rozkładamy „koszt zatrudnienia a automatyzacja" na czynniki: co naprawdę składa się na koszt etatu, ile kosztuje agent, czego agent nie zrobi i kiedy zatrudnienie człowieka jest po prostu lepszą decyzją. Nie podajemy zmyślonych kwot wynagrodzeń ani obietnic zwrotu w trzy miesiące. Do policzenia własnych liczb służy nasz kalkulator ROI.',
      ],
    },
    {
      heading: 'Co naprawdę składa się na koszt etatu',
      paragraphs: [
        'Pierwszy błąd w takich kalkulacjach to porównywanie miesięcznego abonamentu za oprogramowanie z wynagrodzeniem netto pracownika. To dwie różne wielkości. Realny koszt zatrudnienia ma co najmniej sześć składników i tylko jeden z nich widać na pasku wypłaty.',
        'Do wynagrodzenia brutto dochodzą składki po stronie pracodawcy. Dochodzi urlop i zwolnienia lekarskie, czyli miesiące, za które płacicie, a praca się nie dzieje albo przechodzi na kogoś innego. Dochodzi rekrutacja: ogłoszenia, czas osoby, która prowadzi rozmowy, czasem prowizja agencji. Dochodzi wdrożenie, czyli kilka pierwszych tygodni, w których nowa osoba pracuje wolniej, a ktoś doświadczony traci swój czas na tłumaczenie. Dochodzi stanowisko pracy: sprzęt, licencje, telefon, biurko. I dochodzi rotacja, najbardziej podstępna pozycja. Jeśli ktoś odchodzi po roku, cały koszt rekrutacji i wdrożenia ponosicie od nowa.',
        'Nie podamy tu przykładowych kwot, bo byłyby zmyślone. Różnice między stanowiskami, miastami i branżami są zbyt duże, żeby jedna liczba miała sens. Zamiast tego policzcie swoje. Do tego zrobiliśmy kalkulator ROI: wpisujecie liczbę godzin poświęcanych dziś na powtarzalne czynności i swoje realne stawki, a on pokazuje, o jakiej skali mówimy. Zajmuje to kilka minut i jest znacznie uczciwsze niż jakikolwiek benchmark z internetu.',
        'Policzcie też drugą stronę bilansu, czyli koszt tego, czego nie robicie. Nieodebrany telefon o osiemnastej nie kosztuje zera złotych. To zapytanie, które poszło do konkurencji. Ta pozycja rzadko trafia do zestawień, bo nie ma jej w żadnym systemie księgowym, a często bywa największa.',
      ],
    },
    {
      heading: 'Co składa się na koszt agenta AI',
      paragraphs: [
        'Po stronie agenta struktura kosztów jest prostsza, ale też ma więcej niż jedną pozycję. Pierwsza to wdrożenie: analiza procesu, połączenie z Waszymi systemami, zbudowanie bazy wiedzy, testy i poprawki po pierwszych prawdziwych rozmowach. U nas zaczyna się od 5 000 zł netto przy mniejszych projektach. Większe wyceniamy indywidualnie, bo różnica między agentem odbierającym telefon a agentem wpiętym w trzy systemy firmy jest ogromna.',
        'Druga pozycja to utrzymanie: 249, 499 albo 799 zł netto miesięcznie w zależności od pakietu. Obejmuje hosting, monitoring, aktualizacje i poprawki. Agent nie jest rzeczą, którą się raz ustawia i zapomina. Wiedza w firmie się zmienia, klienci zaczynają pytać o nowe rzeczy, pojawiają się scenariusze, których nikt nie przewidział. Ktoś musi je wyłapywać z transkrypcji i dopisywać.',
        'Trzecia pozycja, o której lepiej powiedzieć wcześniej niż później: Wasz czas na starcie. Ktoś w firmie musi odpowiedzieć na pytania o proces, przejrzeć pierwsze rozmowy i powiedzieć, co agent odpowiedział źle. Zwykle to kilka godzin rozłożonych na parę tygodni. Bez tego wdrożenie kończy się agentem, który brzmi dobrze i nie zna Waszej firmy.',
        'Czas realizacji to 2–4 tygodnie przy mniejszych wdrożeniach i 1–3 miesiące przy większych. To istotna różnica wobec rekrutacji, która zwykle trwa dłużej, a jej efekt bywa mniej pewny. Ale uwaga na odwrotną stronę tej monety. Agent działa dokładnie w zakresie, który mu zbudowaliście, i ani centymetra dalej.',
      ],
    },
    {
      heading: 'Czego agent AI nie zrobi',
      paragraphs: [
        'To jest część, którą większość ofert pomija, a która decyduje o tym, czy wdrożenie się uda. Agent AI ma twarde granice. Lepiej je znać przed podpisaniem umowy niż po.',
        'Nie poradzi sobie ze sprawą nietypową, której nikt nie przewidział. Może ją najwyżej rozpoznać jako nietypową i przekazać człowiekowi z podsumowaniem. Nie podejmie decyzji, za którą ktoś ponosi odpowiedzialność: nie udzieli rabatu poza ustalonymi widełkami, nie uzna reklamacji spornej, nie oceni, czy warto zrobić wyjątek dla klienta, który współpracuje z Wami od dziesięciu lat. Możecie mu takie uprawnienia formalnie nadać, ale to zwykle zły pomysł.',
        'Nie zbuduje relacji. Klient, który dzwoni, bo lubi rozmawiać z panią Anią z biura, dzwoni po coś, czego agent nie da. W części branż to jest cała przewaga firmy i automatyzowanie tego byłoby strzałem w kolano. Nie wymyśli też niczego nowego. Działa w ramach tego, co wie, i nie zaproponuje procesu, którego nikt wcześniej nie opisał.',
        'I rzecz najbardziej praktyczna: nie zauważy, że coś jest nie tak. Człowiek na recepcji wyłapie, że od tygodnia dzwoni podejrzanie dużo osób z tym samym problemem, i pójdzie z tym do szefa. Agent obsłuży wszystkie te rozmowy poprawnie i nikomu nic nie powie, jeśli nikt nie zajrzy w statystyki. Dlatego przy każdym wdrożeniu ustalamy, kto i jak często przegląda transkrypcje.',
      ],
    },
    {
      heading: 'Agent bierze powtarzalne, człowiek trudne',
      paragraphs: [
        'Najczęściej sprawdza się układ, w którym nie wybieracie między agentem a człowiekiem, tylko dzielicie pracę. Wygląda to zwykle tak. Agent odbiera wszystkie połączenia jako pierwszy. Sprawy powtarzalne (godziny, ceny z cennika, status zlecenia, umówienie albo przełożenie terminu) załatwia w całości, o każdej porze. Wszystko inne przekazuje do człowieka razem z tym, co już ustalił, więc klient nie tłumaczy sprawy dwa razy.',
        'Zmienia się wtedy nie liczba etatów, tylko ich zawartość. Osoba, która wcześniej przez pół dnia odbierała te same pytania, dostaje czas na sprawy, które faktycznie wymagają uwagi: trudne rozmowy, oferty, kontakt z klientem, który jest blisko rezygnacji. Dostaje też nową rolę, czyli nadzór nad agentem. Ktoś musi przejrzeć rozmowy z tygodnia, wyłapać złe odpowiedzi i zgłosić poprawkę. To zajmuje ułamek czasu, który agent zwolnił.',
        'Ile dokładnie czasu, trudno przewidzieć z góry. Bywa różnie. U jednych agent zamyka co drugą rozmowę bez człowieka, u innych co piątą, a prawda wychodzi dopiero po miesiącu prawdziwego ruchu. Dlatego pierwszy miesiąc traktujemy jako pomiar, a nie jako wynik.',
        'Ten układ ma jeszcze jedną zaletę, rzadko wymienianą: jest odwracalny. Jeśli po miesiącu okaże się, że agent radzi sobie gorzej, niż zakładaliście, wyłączacie przekierowanie i wracacie do punktu wyjścia. Z rekrutacją tak się nie da. Dlatego przy niepewnych przypadkach doradzamy zacząć od jednego procesu, a nie od przebudowy całej obsługi.',
      ],
    },
    {
      heading: 'Kiedy lepiej zatrudnić człowieka',
      paragraphs: [
        'Są sytuacje, w których uczciwa odpowiedź brzmi: zatrudnijcie kogoś, a o AI porozmawiajmy za rok. Pierwsza to mała skala. Jeśli powtarzalnych spraw jest kilka dziennie, agent nie odzyska kosztu wdrożenia w rozsądnym czasie, a pierwsza pomocna osoba w małym zespole odciąża od razu i na wielu frontach.',
        'Druga: praca, której nikt nie potrafi opisać. Jeśli na pytanie „jak wygląda ten proces" pada odpowiedź „to zależy, Kasia wie", agent nie ma z czego się uczyć. Automatyzacja wymaga, żeby ktoś najpierw ubrał wiedzę w słowa i zasady. Czasem to jest właśnie najbardziej wartościowa część projektu, ale trzeba na nią zarezerwować czas i uczciwie powiedzieć, że to nie jest praca za darmo.',
        'Trzecia: procesy oparte na zaufaniu i obecności. Sprzedaż wymagająca wyczucia, opieka nad ważnym klientem, sprawy wrażliwe, negocjacje. Tu automatyzacja pierwszej linii może wręcz zaszkodzić, bo klient odbierze ją jako sygnał, że przestał być ważny.',
        'Czwarta: brak kogoś, kto weźmie projekt na siebie. Wdrożenie agenta wymaga po Waszej stronie jednej osoby, która odpowie na pytania i przejrzy pierwsze rozmowy. Jeśli wszyscy są zajęci ponad miarę i nikt tego nie ogarnie, projekt się rozjedzie niezależnie od budżetu. Wtedy naprawdę lepiej najpierw zatrudnić człowieka, a automatyzację odłożyć do momentu, gdy będzie kto ją poprowadzić.',
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
  ],
  ctaHeading: 'Policzmy to na Waszych liczbach, nie na cudzych',
  ctaSub:
    'Powiedz nam, jakie zadania miałby przejąć nowy etat, a wspólnie rozdzielimy je na te, które agent zrobi, i te, które zostaną przy człowieku. Jeśli wyjdzie, że lepiej zatrudnić, usłyszysz to od nas. Konsultacja jest bezpłatna.',
};

export default function Page() {
  return <BlogArticle content={content} />;
}
