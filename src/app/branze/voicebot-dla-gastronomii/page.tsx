import type { Metadata } from 'next';
import SeoLanding, { SeoLandingContent } from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'Voicebot dla restauracji — odbiera telefon w szczycie',
  description:
    'Voicebot dla restauracji odbiera telefon w szczycie: rezerwacja stolika, zamówienia na wynos, pytania o menu. Wdrożenie od 5 000 zł netto, dane w Polsce.',
  alternates: { canonical: '/branze/voicebot-dla-gastronomii' },
  openGraph: {
    title: 'Voicebot dla restauracji — odbiera telefon w szczycie',
    description:
      'Agent głosowy dla gastronomii: rezerwacja stolika przez telefon, automatyczne przyjmowanie zamówień telefonicznych, potwierdzanie rezerwacji. Dane na serwerach w Polsce, zgodnie z RODO.',
    type: 'website',
  },
};

const content: SeoLandingContent = {
  path: '/branze/voicebot-dla-gastronomii',
  breadcrumbLabel: 'Voicebot dla gastronomii',
  h1: 'Voicebot dla restauracji — odbiera telefon, gdy w kuchni jest największy ruch',
  lead: 'Voicebot dla restauracji to agent głosowy AI, który odbiera telefon w godzinach największego ruchu: przyjmuje rezerwację stolika, spisuje zamówienie na wynos, odpowiada na pytania o godziny otwarcia, parking czy menu bezglutenowe. Mówi naturalną polszczyzną (technologia ElevenLabs), obsługuje kilka połączeń naraz, a dane trzyma na serwerach w Polsce zgodnie z RODO.',
  serviceName: 'Voicebot dla restauracji: rezerwacja stolika i zamówienia przez telefon',
  serviceDescription:
    'Wdrożenie agenta głosowego AI dla restauracji, pizzerii i lokali gastronomicznych: odbiór telefonu w godzinach szczytu, rezerwacja stolika przez telefon, automatyczne przyjmowanie zamówień telefonicznych, potwierdzanie rezerwacji, odpowiedzi na pytania o menu i alergeny. Dane na serwerach w Polsce, zgodnie z RODO.',
  sections: [
    {
      heading: 'Telefon dzwoni dokładnie wtedy, kiedy nie ma go kto odebrać',
      paragraphs: [
        'Piątek, dziewiętnasta. Sala pełna, kelnerzy krążą między stolikami, w kuchni leci kilkanaście zamówień naraz. I wtedy dzwoni telefon. Ktoś chce zarezerwować stolik na sobotę, ktoś inny zamówić pizzę na wynos, trzeci pyta o parking, czwarty o to, czy można wejść z psem.',
        'Organizacja pracy ma z tym mniej wspólnego, niż się wydaje. Ruch telefoniczny w gastronomii pokrywa się co do minuty z ruchem na sali. Im lepiej idzie wieczór, tym mniejsza szansa, że ktoś podniesie słuchawkę. A jeśli aparat stoi przy barze, odbierze go barman, między nalewaniem a wydawaniem, więc rozmowa potrwa dwa razy dłużej i jeszcze drink będzie czekał.',
        'Nieodebrany telefon ma tu konkretną cenę. Albo przepada rezerwacja, albo zamówienie na wynos, które za moment pójdzie do lokalu obok. Człowiek głodny o dziewiętnastej nie dzwoni trzy razy. Wybiera następny numer z listy w mapach. Tych pieniędzy nie widać w żadnym raporcie sprzedaży, bo one nigdy do niego nie trafiły.',
        'Voicebot odbiera od pierwszego sygnału i rozmawia z kilkoma osobami jednocześnie. Kelner zostaje na sali.',
        'Zanim pójdziemy dalej, jedna rzecz na czysto. Nie mamy jeszcze publicznego wdrożenia w gastronomii i nie będziemy udawać, że mamy. To, co możemy pokazać, to nasze własne dema. Pod adresem asystenci-glosowi.vercel.app działa pięciu asystentów branżowych, których da się posłuchać bez umawiania rozmowy. Dema, nie referencje klientów.',
      ],
    },
    {
      heading: 'Co agent głosowy dla gastronomii załatwia sam',
      paragraphs: [
        'Zakres ustalamy przed startem, bo różnice między lokalami są większe, niż wygląda to z zewnątrz. Inaczej dzwoni telefon w pizzerii z dowozem, inaczej w restauracji, która przyjmuje wyłącznie rezerwacje, a jeszcze inaczej w miejscu żyjącym z lunchu w tygodniu. Poniżej to, co w praktyce da się oddać botowi.',
        'Osobno traktujemy alergeny, bo tutaj pomyłka nie kończy się na zniechęconym gościu. Bot podaje wyłącznie to, co restauracja sama wpisała do karty składników. Przy pytaniu wykraczającym poza tę listę mówi, że nie wie, i przełącza rozmowę do kuchni albo managera. Model, który zgaduje przy orzechach, jest gorszy od nieodebranego telefonu i tak to ustawiamy od pierwszego dnia.',
      ],
      bullets: [
        'Rezerwacja stolika przez telefon: data, godzina, liczba osób, imię, numer kontaktowy. Bot sprawdza dostępność w grafiku sali i zapisuje rezerwację.',
        'Zamówienia na wynos i z dowozem. Agent przechodzi przez menu, dopytuje o warianty i dodatki, przyjmuje adres i podaje przewidywany czas.',
        'Pytania powtarzalne, których w ciągu dnia jest najwięcej: godziny otwarcia, parking, wejście z psem, krzesełko dla dziecka, płatność kartą, dostępność tarasu.',
        'Informacja o alergenach i wariantach dań czytana z zatwierdzonej przez Was karty składników, bez improwizacji.',
        'Zmiana i odwołanie rezerwacji, także po zamknięciu lokalu. Zwolniony stolik wraca do puli, kiedy jest jeszcze komu go zaproponować.',
        'Przekazanie rozmowy do managera przy imprezach zamkniętych, dużych grupach i ustalaniu menu na wydarzenie.',
      ],
    },
    {
      heading: 'Automatyczne przyjmowanie zamówień telefonicznych',
      paragraphs: [
        'Zamówienie na wynos dyktowane przez telefon to najbardziej żmudna rozmowa w całej gastronomii. Gość wylicza pozycje, w połowie zmienia zdanie, pyta o rozmiar, dopisuje sos, na koniec dorzuca coś dla dziecka. Kelner zapisuje to na kartce, potem przepisuje do systemu i liczy, że nie pomylił numeru mieszkania.',
        'Agent prowadzi tę rozmowę spokojnie, bo nie ma nikogo za plecami i nie widzi kolejki przy barze. Na koniec powtarza całe zamówienie, pozycja po pozycji, razem z kwotą i adresem. Zapis trafia dalej w formie, którą kuchnia widzi od razu, bez etapu przepisywania z kartki.',
        'Jak głęboko da się wejść w system sprzedaży, sprawdzamy przed wyceną. Jeśli Wasz POS ma otwarte API, wpinamy się bezpośrednio i zamówienie ląduje na bonowniku. Jeśli API nie ma, zamówienie idzie mailem albo do prostego panelu na tablecie. Gorsze, mniej eleganckie, ale nadal działa i widzieliśmy, że ludzie z tego korzystają.',
        'Jedno zastrzeżenie powtarzamy na każdej konsultacji. Bot jest tak dobry, jak Wasze menu w formie cyfrowej. Jeżeli karta istnieje wyłącznie jako grafika wrzucana na Facebooka, najpierw ktoś musi ją spisać razem z wariantami, dodatkami i cenami. To robota na kilka dni i nikt jej nie lubi, my też nie. Bez niej automatyczne przyjmowanie zamówień telefonicznych po prostu nie ruszy.',
        'Płatności zostawiamy poza rozmową. Agent przyjmuje zamówienie i podaje kwotę, a gość płaci przy odbiorze albo linkiem z SMS-a. Dyktowania numeru karty botowi nie polecamy nikomu.',
      ],
    },
    {
      heading: 'Rezerwacje stolika i goście, którzy nie przychodzą',
      paragraphs: [
        'No-show boli w restauracji inaczej niż w gabinecie czy salonie. Pusty czteroosobowy stolik w sobotę o dwudziestej zabiera obrót z najlepszej godziny całego tygodnia. A dwie godziny wcześniej odprawiliście parę z wejścia, mówiąc, że komplet.',
        'Telefon potwierdzający dzień wcześniej albo kilka godzin przed terminem robi tę robotę, której w lokalu nikt nie chce robić ręcznie. Bot dzwoni, pyta, czy rezerwacja aktualna, i przyjmuje odwołanie bez robienia z tego sprawy. Część gości korzysta z okazji i odwołuje. To dobra wiadomość. Stolik wraca do puli wtedy, kiedy jest jeszcze komu go dać.',
        'Procentów spadku no-show nie podajemy i nie zamierzamy. Nie mamy własnych danych z gastronomii, a przepisywanie cudzych badań do oferty uważamy za nieuczciwe. Policzyć da się to u siebie: notujcie niewykorzystane rezerwacje przez miesiąc przed uruchomieniem bota i przez miesiąc po. Jeśli różnica nie pokrywa abonamentu, ten argument odpada i wdrożenie trzeba uzasadnić czymś innym.',
        'Duże grupy zostawiamy ludziom. Rezerwacja na dwadzieścia osób z ustalonym menu, komunia, osiemnastka, firmowa wigilia, poprawiny: w takich rozmowach trzeba dogadać ustawienie stołów, salę i możliwości kuchni na dany termin. Bot zbiera podstawowe informacje, sprawdza wstępnie dostępność i przekazuje sprawę managerowi razem z notatką. Gość nie opowiada wszystkiego drugi raz od początku.',
        'Przy rezerwacji i dowozie padają dane osobowe: imię, numer telefonu, czasem adres, godzina odbioru. Nagrania rozmów, transkrypcje, numery kontaktowe i adresy trzymamy na serwerach w Polsce i Unii Europejskiej, zgodnie z RODO, według standardów bezpieczeństwa zgodnych z normą ISO 27001. Z lokalem podpisujemy umowę powierzenia przetwarzania danych i ustalamy w niej, jak długo żyją nagrania oraz kto ma do nich dostęp.',
        'Samych agentów budujemy na OpenClaw, otwartym projekcie z ponad 380 tysiącami gwiazdek na GitHubie. Nie jesteśmy jego oficjalnym partnerem, po prostu na nim pracujemy. Dla lokalu ma to jeden praktyczny skutek. Warstwa agentowa nie jest zamkniętym pudełkiem jednego dostawcy, więc wdrożenia da się w razie czego przenieść.',
      ],
    },
    {
      heading: 'Kiedy voicebot w restauracji się nie opłaca',
      paragraphs: [
        'Mała kawiarnia albo bistro, do którego dzwonią trzy osoby dziennie, nie ma po co wydawać 5 000 zł netto na wdrożenie i płacić abonamentu. Przy takim ruchu telefon odbierze barista między jednym a drugim flat white i przez najbliższe pięć lat wyjdzie taniej. Mówimy to na konsultacji, zanim ktokolwiek cokolwiek podpisze.',
        'Drugi przypadek to lokal z menu zmienianym codziennie, którego nigdzie nie ma na piśmie. Szef kuchni układa kartę rano, według tego, co przyszło z targu, a kelnerzy uczą się jej na odprawie przed serwisem. Bot nie ma czego czytać. Da się to poukładać, tylko wtedy kupujecie sobie codzienny obowiązek aktualizacji danych i pytanie brzmi, czy komuś będzie się chciało w trzecim tygodniu. Zwykle nie.',
        'Trzeci przypadek jest najmniej techniczny i najczęściej przesądza sprawę. Są lokale, które żyją z tego, że gość dzwoni i słyszy znajomy głos. Pani z sali wie, że pan Marek siada zawsze przy oknie i nie je pietruszki, i pyta o jego córkę. Voicebot to zabiera, a żadna funkcja tego nie nadrobi. Jeśli Wasza przewaga siedzi właśnie w tej rozmowie, zostawcie telefon człowiekowi. Ewentualnie dołóżcie bota na noc i na te godziny, w których i tak nikt nie odbiera.',
        'Sensowny kandydat wygląda inaczej. Kilkadziesiąt połączeń dziennie, wyraźny szczyt między osiemnastą a dwudziestą pierwszą, powtarzalna karta i realna liczba telefonów, które przepadają. Wtedy warto usiąść do liczb i policzyć to na spokojnie.',
      ],
    },
  ],
  howTo: {
    title: 'Jak wdrażamy voicebota w restauracji',
    steps: [
      {
        name: 'Bezpłatna konsultacja i przegląd ruchu telefonicznego',
        text: 'Sprawdzamy, ile połączeń przychodzi dziennie, w jakich godzinach i ile z nich nikt nie odbiera. Pytamy, o co dzwonią najczęściej. Jeśli z tych liczb wychodzi, że wdrożenie się nie zwróci, mówimy to od razu.',
      },
      {
        name: 'Spisanie menu i zasad lokalu',
        text: 'Przechodzimy przez kartę: pozycje, warianty, dodatki, ceny, składniki i alergeny. Do tego zasady sali, czyli ile trwa rezerwacja, do której godziny przyjmujecie zamówienia na wynos i jaki jest minimalny koszyk przy dowozie. To zwykle najdłuższa część projektu.',
      },
      {
        name: 'Weryfikacja systemu rezerwacji i POS',
        text: 'Patrzymy, z czego korzystacie i co ten program faktycznie udostępnia. Dobieramy wariant: bezpośrednie API, praca na kalendarzu albo osobny panel dla obsługi. Wtedy też podpisujemy umowę powierzenia przetwarzania danych.',
      },
      {
        name: 'Scenariusze rozmów i testy na części ruchu',
        text: 'Piszemy przebieg typowej rozmowy o rezerwację i o zamówienie, ustalamy granice, których bot nie przekracza, i moment przełączenia do człowieka. Startujemy zwykle poza godzinami otwarcia, słuchamy nagrań i poprawiamy scenariusze.',
      },
      {
        name: 'Start i miesięczna opieka',
        text: 'Po przełączeniu reszty ruchu aktualizujemy kartę przy zmianach menu i cen, monitorujemy jakość rozmów i rozwijamy scenariusze w ramach wybranego pakietu utrzymania.',
      },
    ],
  },
  useCases: {
    title: 'Do czego restauracje używają agenta głosowego',
    items: [
      {
        title: 'Piątkowy i sobotni szczyt',
        description:
          'Między osiemnastą a dwudziestą pierwszą dzwoni kilka osób naraz, a obsługa jest na sali. Agent rozmawia ze wszystkimi jednocześnie, więc nikt nie słyszy sygnału zajętości.',
      },
      {
        title: 'Rezerwacja stolika przez telefon',
        description:
          'Bot pyta o termin, godzinę i liczbę osób, sprawdza grafik sali i zapisuje rezerwację. Gość dostaje potwierdzenie, a kelner nie odchodzi od stolika w połowie zamówienia.',
      },
      {
        title: 'Zamówienia na wynos',
        description:
          'Agent przechodzi przez menu, dopytuje o warianty i dodatki, przyjmuje adres i powtarza całość razem z kwotą. Zamówienie idzie do kuchni bez przepisywania z kartki.',
      },
      {
        title: 'Potwierdzanie rezerwacji',
        description:
          'Telefon dzień wcześniej albo kilka godzin przed terminem. Gość potwierdza albo odwołuje od razu w rozmowie, więc stolik wraca do puli, póki da się go jeszcze sprzedać.',
      },
      {
        title: 'Pytania o menu i alergeny',
        description:
          'Czy jest wersja bezglutenowa, co jest w sosie, czy danie da się zrobić bez laktozy. Bot czyta z Waszej karty składników, a przy niepewności przekazuje pytanie do kuchni.',
      },
      {
        title: 'Telefony po zamknięciu',
        description:
          'Ktoś dzwoni o północy, żeby zarezerwować stolik na weekend albo odwołać jutrzejszą rezerwację. Rano zamiast listy nieodebranych połączeń macie gotowe wpisy w grafiku.',
      },
    ],
  },
  pricing: {
    title: 'Ile kosztuje voicebot dla restauracji',
    note: 'Ceny netto. Ostateczna wycena zależy od wielkości karty, zakresu integracji z systemem rezerwacji i sprzedaży oraz liczby lokali. Pierwsza konsultacja jest bezpłatna.',
    rows: [
      {
        name: 'Wdrożenie',
        price: 'od 5 000 zł',
        description:
          'Mniejszy zakres: scenariusze rozmów, spisanie karty, podłączenie grafiku sali, konfiguracja telefonii i testy. Sieci lokali wyceniamy indywidualnie.',
      },
      {
        name: 'Utrzymanie Starter',
        price: '249 zł/mies.',
        description: 'Monitoring rozmów i drobne poprawki scenariuszy. Wsparcie mailowe.',
      },
      {
        name: 'Utrzymanie Standard i Premium',
        price: '499 albo 799 zł/mies.',
        description:
          'Rozwój scenariuszy, aktualizacje karty i cen, priorytetowe wsparcie. W Premium dochodzą raporty z rozmów, rozbudowa funkcji i najszybszy czas reakcji.',
      },
    ],
  },
  faq: [
    {
      question: 'Ile kosztuje voicebot dla restauracji?',
      answer:
        'Wdrożenie startuje od 5 000 zł netto przy mniejszym zakresie: jeden numer, jedna lokalizacja, podstawowe scenariusze rezerwacji i zamówień. Sieć lokali albo głębsza integracja z systemem sprzedaży to wycena indywidualna. Do tego dochodzi miesięczne utrzymanie: 249, 499 albo 799 zł netto, zależnie od pakietu. Konsultacja i wycena są bezpłatne, więc liczby zobaczycie przed jakąkolwiek decyzją.',
    },
    {
      question: 'Czy bot przyjmie zamówienie na wynos i wpisze je do naszego systemu?',
      answer:
        'Rozmowę poprowadzi na pewno: przejdzie przez menu, dopyta o warianty i dodatki, przyjmie adres i powtórzy całość z kwotą. To, gdzie zamówienie wyląduje, zależy od Waszego oprogramowania. Przy POS z otwartym API wpinamy się bezpośrednio. Przy systemie zamkniętym zamówienie idzie mailem albo do prostego panelu, który obsługa ma na tablecie. Sprawdzamy to przed wyceną, żeby nie obiecywać integracji, której nikt jeszcze nie widział na oczy.',
    },
    {
      question: 'Czy voicebot poradzi sobie z pytaniami o alergeny?',
      answer:
        'Odpowiada wyłącznie na podstawie karty składników, którą sami zatwierdzacie, i nie wychodzi poza nią ani o krok. Jeśli gość pyta o coś, czego w karcie nie ma, bot mówi wprost, że nie wie, i przełącza rozmowę do kuchni albo managera. Świadomie ustawiamy go tak, żeby wolał się przyznać do niewiedzy niż odpowiedzieć uprzejmie i nieprawdziwie. Przy alergiach pokarmowych to jedyne sensowne ustawienie.',
    },
    {
      question: 'Czy bot ograniczy liczbę niewykorzystanych rezerwacji?',
      answer:
        'Automatyczne potwierdzenie daje gościowi wygodny moment na odwołanie, więc zamiast pustego stolika o dwudziestej dostajecie wolny termin z kilkugodzinnym wyprzedzeniem. Procentów nie podajemy, bo nie mamy własnych danych z gastronomii i nie będziemy powtarzać cudzych. Efekt da się zmierzyć u siebie: porównajcie liczbę niewykorzystanych rezerwacji miesiąc przed startem i miesiąc po.',
    },
    {
      question: 'Co z rezerwacjami dużych grup i imprezami zamkniętymi?',
      answer:
        'Trafiają do człowieka i tak to projektujemy od początku. Przy dwudziestu osobach, ustalonym menu i wynajmie sali rozmowa dotyczy szczegółów, których nie da się rozstrzygnąć ze skryptu. Bot zbiera podstawy, czyli termin, przybliżoną liczbę osób i kontakt, sprawdza wstępną dostępność i przekazuje sprawę managerowi razem z notatką z rozmowy. Gość nie opowiada wszystkiego drugi raz.',
    },
    {
      question: 'Ile trwa wdrożenie i czy da się posłuchać, jak to brzmi?',
      answer:
        'Pojedynczy lokal to zwykle od 2 do 4 tygodni: przegląd telefonów, spisanie karty, scenariusze, testy i start. Przy sieci albo szerszej integracji realny horyzont to od 1 do 3 miesięcy. Posłuchać można od ręki, bez umawiania się: pod asystenci-glosowi.vercel.app udostępniamy pięciu asystentów branżowych. Osobno mamy demo agenta odpowiadającego na pytania o rozkłady jazdy, zbudowane przez nas na publicznych danych PKS Gryfice (6 przystanków, 276 odjazdów). Przewoźnik nie jest naszym klientem, to nasza własna prezentacja techniczna.',
    },
    {
      question: 'Co dzieje się z danymi gości i nagraniami rozmów?',
      answer:
        'Nagrania, transkrypcje, numery telefonów i adresy dostawy przechowujemy na serwerach w Polsce i Unii Europejskiej, zgodnie z RODO, według standardów bezpieczeństwa zgodnych z normą ISO 27001. Z restauracją podpisujemy umowę powierzenia przetwarzania danych i ustalamy w niej okres przechowywania nagrań oraz dostęp do nich. Zbieramy minimum potrzebne do obsługi sprawy: przy pytaniu o godziny otwarcia bot nie potrzebuje żadnych danych osobowych i żadnych nie zapisuje.',
    },
  ],
  cta: {
    heading: 'Policzmy, ile telefonów przepada u Was w piątkowy wieczór',
    sub: 'Umów bezpłatną konsultację. Przejdziemy przez ruch telefoniczny, kartę dań i Wasz system rezerwacji. Jeśli wyjdzie, że wdrożenie się nie spina, powiemy to wprost.',
  },
  related: [
    { label: 'Agent głosowy AI', href: '/uslugi/agent-glosowy-ai' },
    { label: 'Branże', href: '/branze' },
    { label: 'Voicebot dla salonu', href: '/branze/voicebot-dla-salonow' },
    { label: 'Cennik wdrożeń AI', href: '/cennik' },
    { label: 'Ile kosztuje voicebot', href: '/blog/ile-kosztuje-voicebot' },
    { label: 'Voicebot a IVR', href: '/blog/voicebot-a-ivr' },
  ],
};

export default function Page() {
  return <SeoLanding content={content} />;
}
