import type { Metadata } from 'next';
import SeoLanding, { SeoLandingContent } from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'Voicebot dla salonu — recepcjonistka AI przy telefonie',
  description:
    'Voicebot dla salonu odbiera telefon, gdy masz ręce zajęte klientem. Recepcjonistka AI umawia wizyty, przekłada terminy i przypomina o wizycie.',
  alternates: { canonical: '/branze/voicebot-dla-salonow' },
  openGraph: {
    title: 'Voicebot dla salonu — recepcjonistka AI przy telefonie',
    description:
      'AI do umawiania wizyt odbiera każde połączenie, także po godzinach. Rezerwacja terminów przez telefon, przypomnienia i odwołania bez odrywania się od klienta.',
    type: 'website',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

const content: SeoLandingContent = {
  path: '/branze/voicebot-dla-salonow',
  breadcrumbLabel: 'Voicebot dla salonu',
  h1: 'Voicebot dla salonu — telefon odebrany, gdy masz ręce zajęte klientem',
  lead: 'Voicebot dla salonu to agent głosowy AI, który odbiera telefon, gdy pracownik ma ręce zajęte klientem. Umawia wizyty, przekłada i odwołuje terminy, przypomina o wizycie i odpowiada na pytania o cennik. Mówi naturalną polszczyzną (technologia ElevenLabs), pracuje całą dobę, a dane przetwarza na serwerach w Polsce zgodnie z RODO.',
  serviceName: 'Voicebot dla salonu: recepcjonistka AI i rezerwacja terminów przez telefon',
  serviceDescription:
    'Wdrożenie agenta głosowego AI dla salonów fryzjerskich i kosmetycznych, warsztatów samochodowych i gabinetów usługowych: całodobowy odbiór telefonu, umawianie i odwoływanie wizyt, przypomnienia o terminach, integracja z kalendarzem. Dane na serwerach w Polsce, zgodnie z RODO.',
  sections: [
    {
      heading: 'Dlaczego telefon w salonie to problem, którego nie da się rozwiązać etatem',
      paragraphs: [
        'Fryzjerka trzyma nożyczki nad głową klientki. Mechanik ma ręce pod maską. Kosmetyczka jest w środku zabiegu, którego nie przerwie się w połowie. Telefon dzwoni w każdej z tych sytuacji, a odpowiedź jest zawsze ta sama: nikt nie odbierze. Dzwoniący nie wie, że akurat trwa strzyżenie. Wie tylko, że nikt nie podnosi słuchawki.',
        'Osoba, która chce się umówić i nie może się dodzwonić, rzadko dzwoni trzeci raz. Otwiera mapę, znajduje kolejny salon i umawia się tam. To strata, której nie widać ani w kasie, ani w kalendarzu. Ten termin po prostu nigdy się nie pojawił. Nie da się policzyć wizyt, które nie doszły do skutku, bo aparat zadzwonił w złym momencie.',
        'Do tego dochodzą dwie inne pory. Wieczór i weekend, gdy salon jest zamknięty, a ktoś właśnie sobie przypomniał, że chce umówić wizytę albo odwołać jutrzejszą. I sobotni szczyt, kiedy wszyscy pracownicy są zajęci, a telefon dzwoni co kilka minut. Zatrudnienie osoby wyłącznie do telefonu rzadko się spina. W małym salonie to koszt kilku tysięcy złotych miesięcznie za pracę, której realnie jest na dwie godziny dziennie.',
        'Voicebot dla salonu odbiera od pierwszego sygnału, o każdej porze i niezależnie od tego, ile osób dzwoni jednocześnie. Nikt nie słyszy sygnału zajętości, a pracownik nie odrywa rąk od klienta.',
      ],
    },
    {
      heading: 'Co robi recepcjonistka AI przy telefonie salonu',
      paragraphs: [
        'Recepcjonistka AI prowadzi zwykłą rozmowę: dzwoniący mówi, czego potrzebuje, a agent dopytuje o szczegóły i domyka sprawę. Głos oparty na technologii ElevenLabs brzmi naturalnie po polsku, bez wybierania cyfr na klawiaturze i bez sztywnych komunikatów znanych ze starych automatów IVR. Zakres spraw, które bot załatwia samodzielnie, ustalamy przed wdrożeniem. Wszystko poza nim trafia do człowieka.',
      ],
      bullets: [
        'Umawianie wizyt. Bot pyta o usługę, preferowany termin i pracownika, proponuje wolne okienka i zapisuje rezerwację.',
        'Przekładanie terminów: dzwoniący podaje datę swojej wizyty, agent znajduje rezerwację i przenosi ją na nowy termin.',
        'Odwoływanie wizyt, także w nocy i w niedzielę. Zwolnione okienko wraca wtedy do puli, zamiast zostać puste.',
        'Przypomnienia przed wizytą, telefonicznie lub SMS-em, z możliwością potwierdzenia albo odwołania w tej samej rozmowie.',
        'Odpowiedzi na pytania o ofertę: ceny usług, czas trwania zabiegu, godziny otwarcia, dojazd i parking, przygotowanie przed wizytą.',
        'Przekazanie rozmowy do pracownika, gdy sprawa jest nietypowa albo dzwoniący po prostu chce rozmawiać z człowiekiem.',
      ],
    },
    {
      heading: 'Przypomnienia o wizycie i sprawa nieodwołanych terminów',
      paragraphs: [
        'Nieodwołana wizyta kosztuje podwójnie. Pracownik stoi bezczynnie przez godzinę, a ktoś, kto chciał tego terminu, usłyszał wcześniej, że jest zajęty. W salonach fryzjerskich i kosmetycznych to zwykle najbardziej dokuczliwa strata dnia, bo dotyczy najdroższych, najdłuższych zabiegów.',
        'Automatyczne przypomnienie dzień wcześniej działa na dwa sposoby. Po pierwsze, część osób faktycznie zapomina o wizycie i samo przypomnienie wystarczy. Po drugie, i to jest ważniejsze: ktoś, kto i tak nie zamierzał przyjść, dostaje wygodny moment, żeby to powiedzieć. Odwołanie na dobę przed terminem to zupełnie inna sytuacja niż puste krzesło o 14:00. Zostaje czas, żeby zaproponować termin komuś z listy rezerwowej.',
        'Nie obiecujemy konkretnego spadku liczby nieobecności i nie podajemy procentów, bo uczciwie ich nie znamy. Wynik zależy od branży, rodzaju klienteli, ceny usługi i tego, jak wcześnie wychodzi przypomnienie. To da się natomiast zmierzyć u siebie: policzcie nieodwołane wizyty przez miesiąc przed uruchomieniem bota i przez miesiąc po. Jeśli różnica nie pokrywa abonamentu, sam mechanizm przypomnień nie jest w Waszym przypadku argumentem i trzeba liczyć wdrożenie z innej strony.',
      ],
    },
    {
      heading: 'Rezerwacja terminów przez telefon a Wasz kalendarz',
      paragraphs: [
        'Rezerwacja terminów przez telefon ma sens tylko wtedy, gdy bot widzi aktualny grafik. Inaczej zbiera zgłoszenia, które i tak ktoś musi ręcznie przepisać, a to przenosi pracę, zamiast jej ubywać. Dlatego integracja z kalendarzem to pierwsza rzecz, którą sprawdzamy, i traktujemy ją jako wymóg do ustalenia, a nie gotową funkcję z pudełka.',
        'Rynek systemów rezerwacyjnych dla salonów jest rozdrobniony i każdy działa inaczej. Część ma otwarte API i integracja jest prosta. Część udostępnia tylko eksport albo synchronizację z kalendarzem Google. Wtedy bot pracuje na kalendarzu, a nie bezpośrednio w systemie. Zdarzają się też programy zamknięte, bez żadnego interfejsu. W takim wypadku mówimy o tym wprost na konsultacji i szukamy obejścia albo odradzamy wdrożenie w tym zakresie. Nie deklarujemy z góry, że zintegrujemy się z czymkolwiek, dopóki nie zobaczymy, z czym mamy do czynienia.',
        'Poza samym połączeniem technicznym trzeba spisać reguły salonu: ile trwa która usługa, którzy pracownicy ją wykonują, jakie przerwy muszą zostać między zabiegami, czy koloryzacja wymaga wcześniejszego testu, do kiedy można odwołać bez konsekwencji. Bot jest tak dobry, jak te ustalenia, dlatego robimy je z osobą, która na co dzień układa grafik, a nie na podstawie ogólnego szablonu. To zwykle najdłuższa część projektu. Nie dlatego, że jest trudna technicznie, tylko dlatego, że na pytanie „ile trwa u Was koloryzacja" najczęściej słyszymy „no, różnie".',
        'Imię, numer telefonu, historię wizyt i nagrania rozmów trzymamy na serwerach w Polsce, zgodnie z RODO, według standardów zgodnych z ISO 27001. Z salonem podpisujemy umowę powierzenia przetwarzania danych i ustalamy, jak długo przechowujemy nagrania.',
      ],
    },
    {
      heading: 'Kiedy voicebot dla salonu się nie opłaca',
      paragraphs: [
        'Jednoosobowy salon z kilkoma telefonami dziennie to zły kandydat. Przy pięciu połączeniach na dzień da się je oddzwonić między klientami, a wdrożenie od 5 000 zł netto plus abonament nigdy się nie zwróci na tej skali. Prościej ustawić komunikat powitalny z prośbą o SMS albo link do rezerwacji online i odpisywać w przerwie.',
        'Nie ma też sensu, gdy większość klientów już rezerwuje przez internet i telefon jest kanałem marginalnym. Wtedy problemem nie jest odbieranie połączeń, tylko coś zupełnie innego. Lepiej to najpierw nazwać, zanim dołożycie kolejne narzędzie.',
        'Trzeci przypadek: usługi, w których rozmowa przed wizytą jest częścią sprzedaży. Jeśli przy telefonie doradzacie zabieg, oceniacie stan włosów albo negocjujecie zakres naprawy, bot najwyżej umówi konsultację. Może zdjąć z Was proste rezerwacje i przypomnienia, ale nie zastąpi tej rozmowy i nie będziemy udawać, że zastąpi.',
        'Voicebot zaczyna się liczyć tam, gdzie połączeń jest kilkanaście lub kilkadziesiąt dziennie, część z nich przepada bezpowrotnie, a nieodwołane wizyty zostawiają w grafiku realne dziury. Na bezpłatnej konsultacji przechodzimy przez te liczby razem i jeśli wyjdzie, że wdrożenie się nie spina, mówimy to od razu.',
      ],
    },
  ],
  howTo: {
    title: 'Jak wdrażamy voicebota w salonie',
    steps: [
      {
        name: 'Bezpłatna konsultacja i rachunek na liczbach',
        text: 'Sprawdzamy, ile połączeń przychodzi dziennie, ile z nich przepada, kiedy są szczyty i ile wizyt miesięcznie nie zostaje odwołanych. Na tej podstawie mówimy, czy wdrożenie ma sens, i przedstawiamy wycenę.',
      },
      {
        name: 'Spisanie reguł grafiku i scenariuszy rozmów',
        text: 'Z osobą prowadzącą kalendarz ustalamy czasy trwania usług, przypisania do pracowników, zasady odwołań i cennik, który bot może podawać. Projektujemy przebieg rozmowy i moment przekazania połączenia do człowieka.',
      },
      {
        name: 'Weryfikacja systemu rezerwacyjnego',
        text: 'Sprawdzamy, z jakiego kalendarza korzysta salon i co realnie udostępnia. Dobieramy wariant integracji: bezpośrednie API, synchronizacja kalendarza albo praca na osobnym terminarzu. Podpisujemy umowę powierzenia przetwarzania danych.',
      },
      {
        name: 'Podłączenie numeru i testy na części ruchu',
        text: 'Uruchamiamy bota na istniejącym numerze, zwykle najpierw poza godzinami otwarcia. Słuchamy prawdziwych rozmów, poprawiamy scenariusze i dopiero wtedy przełączamy resztę ruchu.',
      },
      {
        name: 'Start i miesięczna opieka',
        text: 'Po uruchomieniu aktualizujemy cennik i godziny, dopisujemy nowe usługi, monitorujemy jakość rozmów i rozwijamy scenariusze w ramach wybranego pakietu utrzymania.',
      },
    ],
  },
  useCases: {
    title: 'Do czego salony używają agenta głosowego',
    items: [
      {
        title: 'Rezerwacja po godzinach',
        description:
          'Telefon o 21:00 albo w niedzielę nie ginie. Bot proponuje wolne terminy z grafiku i zapisuje wizytę, więc rano nie ma listy nieodebranych połączeń do oddzwonienia.',
      },
      {
        title: 'Przypomnienia o wizycie',
        description:
          'Dzień wcześniej bot dzwoni lub wysyła SMS z terminem i usługą. Klient potwierdza albo odwołuje w tej samej rozmowie, a zwolniony termin od razu wraca do puli.',
      },
      {
        title: 'Odwołania i przekładanie',
        description:
          'Najczęstszy powód telefonu w salonie. Bot znajduje rezerwację po numerze telefonu, przenosi ją na nowy termin albo kasuje, bez odrywania pracownika od klienta.',
      },
      {
        title: 'Pytania o cennik i usługi',
        description:
          'Ile kosztuje koloryzacja, jak długo trwa zabieg, czy robicie wymianę rozrządu w tym modelu. Bot podaje odpowiedzi z zatwierdzonej przez Was listy i nie improwizuje przy cenach.',
      },
      {
        title: 'Obsługa w szczycie',
        description:
          'W sobotni poranek dzwoni kilka osób naraz. Agent rozmawia ze wszystkimi jednocześnie, więc nikt nie trafia na sygnał zajętości ani na muzykę na czekanie.',
      },
      {
        title: 'Lista rezerwowa',
        description:
          'Gdy ktoś odwoła wizytę, bot obdzwania osoby, które prosiły o wcześniejszy termin, i proponuje zwolnione okienko. Puste miejsce w grafiku ma szansę się zapełnić tego samego dnia.',
      },
    ],
  },
  pricing: {
    title: 'Ile kosztuje voicebot dla salonu',
    note: 'Ceny netto. Ostateczna wycena zależy od zakresu integracji z kalendarzem i liczby scenariuszy. Pierwsza konsultacja jest bezpłatna.',
    rows: [
      {
        name: 'Wdrożenie',
        price: 'od 5 000 zł',
        description:
          'Mały zakres: scenariusze rozmów, integracja z kalendarzem, konfiguracja telefonii i testy. Większe wdrożenia wyceniamy indywidualnie.',
      },
      {
        name: 'Utrzymanie Starter',
        price: '249 zł/mies.',
        description: 'Monitoring działania, drobne poprawki scenariuszy, wsparcie mailowe.',
      },
      {
        name: 'Utrzymanie Standard',
        price: '499 zł/mies.',
        description: 'Rozwój scenariuszy, aktualizacje cennika i usług, priorytetowe wsparcie.',
      },
      {
        name: 'Utrzymanie Premium',
        price: '799 zł/mies.',
        description: 'Pełna opieka: rozbudowa funkcji, raporty z rozmów, najszybszy czas reakcji.',
      },
    ],
  },
  faq: [
    {
      question: 'Ile kosztuje voicebot dla salonu?',
      answer:
        'Wdrożenie zaczyna się od 5 000 zł netto przy małym zakresie: jeden numer, podstawowe scenariusze i integracja z kalendarzem. Sieci salonów i bardziej złożone integracje wyceniamy indywidualnie. Do tego dochodzi miesięczne utrzymanie: 249, 499 albo 799 zł netto, zależnie od pakietu. Pierwsza konsultacja i wycena są bezpłatne.',
    },
    {
      question: 'Co z danymi klientów i RODO?',
      answer:
        'Numery telefonów, imiona, historia wizyt i nagrania rozmów trafiają na serwery zlokalizowane w Polsce. Przetwarzanie jest zgodne z RODO, a wdrożenie prowadzimy według standardów zgodnych z ISO 27001. Z salonem podpisujemy umowę powierzenia przetwarzania danych, zbieramy tylko to, co potrzebne do rezerwacji, i wspólnie ustalamy okres przechowywania nagrań.',
    },
    {
      question: 'Czy bot podłączy się do naszego systemu rezerwacji?',
      answer:
        'To zależy od systemu i sprawdzamy to przed wyceną. Jeśli program ma API, bot pracuje bezpośrednio na jego grafiku. Jeśli udostępnia tylko synchronizację z kalendarzem Google, działamy przez kalendarz. Przy systemach całkowicie zamkniętych mówimy o tym wprost i proponujemy alternatywę albo odradzamy ten zakres wdrożenia.',
    },
    {
      question: 'Czy voicebot zmniejszy liczbę nieodwołanych wizyt?',
      answer:
        'Przypomnienie dzień wcześniej daje klientowi wygodny moment na odwołanie, więc zamiast pustego krzesła dostajecie wolny termin do zagospodarowania. Nie podajemy jednak procentów redukcji, bo efekt zależy od branży, ceny usługi i rodzaju klienteli. Da się go zmierzyć: porównajcie liczbę nieobecności miesiąc przed startem i miesiąc po.',
    },
    {
      question: 'Co jeśli klient chce rozmawiać z człowiekiem?',
      answer:
        'Zostaje przełączony. To zasada każdego naszego wdrożenia. Bot rozpoznaje prośbę o rozmowę z obsługą i w godzinach pracy przekazuje połączenie, a poza nimi przyjmuje zgłoszenie i zapisuje prośbę o oddzwonienie. Sprawy proste i powtarzalne załatwia sam, dzięki czemu pracownicy zajmują się tymi trudniejszymi.',
    },
    {
      question: 'Jak długo trwa wdrożenie i czy da się posłuchać, jak to brzmi?',
      answer:
        'Pojedynczy salon to zwykle 2–4 tygodnie: ustalenia, scenariusze, integracja, testy i start. Przy sieci lokalizacji realny horyzont to 1–3 miesiące. Nasze publiczne dema można sprawdzić bez umawiania się: asystenci-glosowi.vercel.app to pięciu asystentów branżowych, a pks-gryfice-demo.vercel.app to agent odpowiadający na pytania o rozkłady jazdy.',
    },
  ],
  cta: {
    heading: 'Policzmy, ile telefonów przepada w Waszym salonie',
    sub: 'Umów bezpłatną konsultację. Przejdziemy przez liczbę połączeń, nieodwołane wizyty i Wasz system rezerwacji. A jeśli wyjdzie, że wdrożenie się nie spina, powiemy to wprost.',
  },
  related: [
    { label: 'Agent głosowy AI', href: '/uslugi/agent-glosowy-ai' },
    { label: 'Cennik wdrożeń AI', href: '/cennik' },
    { label: 'Bezpłatny kurs o voicebotach', href: '/akademia' },
    { label: 'Branże', href: '/branze' },
    { label: 'Voicebot dla przychodni', href: '/branze/voicebot-dla-przychodni' },
  ],
};

export default function Page() {
  return <SeoLanding content={content} />;
}
