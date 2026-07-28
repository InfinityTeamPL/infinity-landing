import type { Metadata } from 'next';
import SeoLanding, { SeoLandingContent } from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'Voicebot dla hotelu — recepcja czynna całą dobę',
  description:
    'Voicebot dla hotelu i pensjonatu odbiera telefon o każdej porze: sprawdza dostępność pokoi, podaje cenę, zapisuje rezerwację. Wdrożenie od 5 000 zł netto.',
  alternates: { canonical: '/branze/voicebot-dla-hotelu' },
  openGraph: {
    title: 'Voicebot dla hotelu — recepcja czynna całą dobę',
    description:
      'Agent głosowy dla hoteli, pensjonatów i agroturystyki: rezerwacja pokoju przez telefon, informacje o dostępności i cenie, obsługa pytań gości. Dane na serwerach w Polsce, zgodnie z RODO.',
    type: 'website',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

const content: SeoLandingContent = {
  path: '/branze/voicebot-dla-hotelu',
  breadcrumbLabel: 'Voicebot dla hotelu',
  h1: 'Voicebot dla hotelu — recepcja, która odbiera telefon o każdej porze',
  lead: 'Voicebot dla hotelu to agent głosowy AI, który odbiera telefon w recepcji o każdej porze dnia i nocy: sprawdza dostępność pokoju w wybranym terminie, podaje cenę, zapisuje rezerwację, odpowiada na pytania o parking, śniadanie czy zwierzęta. Mówi naturalną polszczyzną (ElevenLabs), a dane gości trzyma na serwerach w Polsce, zgodnie z RODO.',
  serviceName: 'Voicebot dla hotelu: rezerwacja pokoju i informacje dla gości przez telefon',
  serviceDescription:
    'Wdrożenie agenta głosowego AI dla hoteli, pensjonatów i obiektów agroturystycznych: odbiór telefonu poza godzinami pracy recepcji, sprawdzanie dostępności pokoi, podawanie cen i pakietów, zapisywanie rezerwacji, odpowiedzi na pytania gości o udogodnienia i zasady pobytu. Dane na serwerach w Polsce, zgodnie z RODO.',
  sections: [
    {
      heading: 'Telefon dzwoni, gdy na recepcji jest jedna osoba i trzech gości przy ladzie',
      paragraphs: [
        'Piętnasta, szczyt zameldowań. Przy ladzie stoi rodzina z walizkami, para czeka na klucz, a telefon dzwoni trzeci raz w ciągu dziesięciu minut. Ktoś pyta o wolny pokój na weekend, a ktoś inny dzwoni tylko po to, żeby potwierdzić już opłaconą rezerwację.',
        'W małym obiekcie recepcja to zwykle jedna osoba na zmianę. W nocy, po jedenastej, bywa, że nie ma nikogo poza gospodarzem, który śpi piętro wyżej. Telefon w takich godzinach albo dzwoni bez odbioru, albo budzi kogoś, kto rano ma znowu stanąć za ladą.',
        'Nieodebrane połączenie w hotelarstwie kosztuje więcej, niż się wydaje. Gość szukający noclegu na już rzadko oddzwania pod ten sam numer. Sprawdza kolejny obiekt w wyszukiwarce i tam dostaje odpowiedź od razu.',
        'Voicebot odbiera od pierwszego sygnału, o każdej porze, i prowadzi kilka rozmów naraz. Recepcja zostaje przy ladzie.',
        'Jedna rzecz od razu na czysto. Nie mamy jeszcze publicznego wdrożenia w hotelarstwie i nie będziemy tego udawać. To, co można u nas posłuchać bez umawiania rozmowy, to własne dema pod adresem asystenci-glosowi.vercel.app. Pięcioro asystentów z różnych branż, żaden jeszcze z recepcji hotelowej. Dema, nie referencje klientów.',
      ],
    },
    {
      heading: 'Co agent głosowy dla hotelu załatwia sam',
      paragraphs: [
        'Zakres ustalamy przed startem, bo dwudziestopokojowy hotel z restauracją działa inaczej niż pięciopokojowa agroturystyka prowadzona przez jedną rodzinę. Poniżej to, co w praktyce da się przekazać botowi bez udziału człowieka.',
      ],
      bullets: [
        'Sprawdzenie dostępności pokoju w wybranym terminie i podanie ceny, razem z informacją o śniadaniu i regulaminie anulowania.',
        'Przyjęcie rezerwacji telefonicznej: termin, liczba osób, rodzaj pokoju, dane kontaktowe. Bot potwierdza wszystko na koniec rozmowy.',
        'Odpowiedzi na pytania powtarzalne: godziny śniadania, dostępność parkingu, zgoda na zwierzęta, klimatyzacja, odległość od centrum czy plaży.',
        'Zmiana terminu i anulowanie rezerwacji, także po godzinach pracy recepcji, zgodnie z zasadami ustalonymi przez obiekt.',
      ],
    },
    {
      heading: 'Rezerwacja pokoju i pytania przed przyjazdem',
      paragraphs: [
        'Rozmowa o rezerwacji wygląda podobnie za każdym razem: termin, liczba osób, czy z dzieckiem, czy z psem, czy potrzebne dodatkowe łóżko. Agent przechodzi przez te pytania po kolei i na koniec czyta całość na głos, żeby gość mógł poprawić datę, zanim się rozłączy.',
        'Tu decyduje jedno pytanie, zadawane przed wyceną. Skąd bot ma wiedzieć, które pokoje są wolne. Jeśli macie system rezerwacji z otwartym API (channel manager, PMS), wpinamy się bezpośrednio i bot widzi tę samą dostępność co recepcja. Jeśli grafik żyje w arkuszu albo w zeszycie, zamówienie trafia do prostego panelu, a ktoś na recepcji potwierdza je ręcznie tego samego dnia.',
        'Ten drugi wariant działa, ale ma jeden warunek. Jeśli dostępność pokoi żyje naraz w Booking i w osobnym arkuszu, bot prędzej czy później poda termin, którego już nie ma. Zanim wdrożymy voicebota, sprawdzamy, gdzie u Was jest ten jeden, aktualny grafik. Czasem to sam w sobie jest oddzielny etap pracy, przed jakimkolwiek botem.',
        'Płatność zostawiamy poza rozmową telefoniczną. Agent podaje kwotę zadatku i zasady, a gość płaci linkiem z SMS-a albo przelewem według instrukcji, które sam ustalacie. Dyktowania numeru karty botowi nie proponujemy nikomu.',
      ],
    },
    {
      heading: 'Check-in po godzinach i sprawy gości w trakcie pobytu',
      paragraphs: [
        'Gość przyjeżdża później niż planował, utknął w korku albo samolot wylądował z opóźnieniem. Dzwoni z pytaniem, czy ktoś na niego poczeka, i czy da się dostać do pokoju bez recepcji. Bot odpowiada zgodnie z Waszą procedurą self check-in: kod do skrzynki na klucze, numer domofonu, instrukcja dojazdu po zmroku, kontakt awaryjny na wypadek problemu z zamkiem.',
        'W trakcie pobytu telefony bywają drobne, ale pilne z perspektywy gościa. Brak ręczników w pokoju, słabe wifi, pytanie o godzinę wymeldowania, prośba o polecenie restauracji w okolicy. Bot odpowiada od razu tam, gdzie zna odpowiedź, a resztę przekazuje na miejsce, do osoby na dyżurze.',
        'Jedna granica jest tu twarda i nie podlega negocjacji. Przy pożarze albo nagłym problemie zdrowotnym gościa bot natychmiast przekazuje rozmowę do człowieka albo podaje numer alarmowy. Nie próbuje diagnozować sytuacji ani uspokajać dzwoniącego własnymi słowami. To ustawienie wchodzi do każdego wdrożenia w obiekcie noclegowym, bez wyjątków i bez negocjacji ceny.',
        'Dane gości (imię, numer telefonu, termin pobytu, czasem numer dokumentu przy rezerwacji grupowej) trzymamy na serwerach w Polsce i Unii Europejskiej, zgodnie z RODO, według standardów bezpieczeństwa zgodnych z normą ISO 27001. Z obiektem podpisujemy umowę powierzenia przetwarzania danych, w której ustalamy okres przechowywania nagrań i dostęp do nich.',
        'Warstwę agentową budujemy na OpenClaw, otwartym projekcie z ponad 380 tysiącami gwiazdek na GitHubie. Nie jesteśmy jego oficjalnym partnerem, po prostu na nim pracujemy. Dla obiektu ma to jedną praktyczną konsekwencję: wdrożenie nie jest zamkniętym pudełkiem jednego dostawcy.',
      ],
    },
    {
      heading: 'Kiedy voicebot w hotelu się nie opłaca',
      paragraphs: [
        'Pięciopokojowa agroturystyka z kilkoma telefonami tygodniowo nie ma po co wydawać 5 000 zł netto na wdrożenie i płacić co miesiąc za utrzymanie. Przy takim ruchu gospodarz odbierze telefon sam, między jednym a drugim obowiązkiem, i przez najbliższe lata wyjdzie taniej. Mówimy to na konsultacji, zanim ktokolwiek podpisze umowę.',
        'Drugi przypadek to obiekt bez jednego, aktualnego źródła prawdy o dostępności pokoi. Jeśli grafik trzeba dzwonić i sprawdzać u trzech osób naraz, bot nie ma z czego korzystać. Da się to poukładać, tylko wtedy pierwszym krokiem jest porządek w kalendarzu, nie voicebot.',
        'Trzeci przypadek jest najmniej techniczny. Część pensjonatów i gospodarstw agroturystycznych żyje z tego, że gość dzwoni i od razu słyszy gospodarza, który pamięta go z zeszłego roku i pyta o dzieci. To jest część doświadczenia, za które gość płaci, i żadna funkcja jej nie odda. Jeśli tak wygląda Wasza przewaga, zostawcie telefon w rękach człowieka. Ewentualnie dołóżcie bota tylko na noc, kiedy i tak nikt nie odbiera.',
        'Sensowny kandydat wygląda inaczej: kilkanaście do kilkudziesięciu połączeń dziennie, wyraźne godziny, w których telefon dzwoni bez odbioru, jeden aktualny grafik dostępności, i realna liczba rezerwacji, które przez to przepadają. Wtedy warto usiąść i policzyć to na spokojnie.',
      ],
    },
  ],
  howTo: {
    title: 'Jak wdrażamy voicebota w hotelu',
    steps: [
      {
        name: 'Bezpłatna konsultacja i przegląd ruchu telefonicznego',
        text: 'Sprawdzamy, ile połączeń przychodzi dziennie i w jakich godzinach telefon dzwoni bez odbioru. Jeśli z tych liczb wychodzi, że wdrożenie się nie zwróci, mówimy to od razu.',
      },
      {
        name: 'Weryfikacja grafiku dostępności pokoi',
        text: 'Ustalamy, gdzie u Was jest jedno, aktualne źródło prawdy o wolnych pokojach: system rezerwacji z API, arkusz czy kalendarz. Bez tego bot nie ruszy.',
      },
      {
        name: 'Spisanie cennika i zasad obiektu',
        text: 'Przechodzimy przez ceny, pakiety, godziny śniadania, zasady dotyczące zwierząt, dzieci i anulowania rezerwacji. To zwykle najdłuższa część projektu.',
      },
      {
        name: 'Scenariusze rozmów i granice przekazania do człowieka',
        text: 'Piszemy przebieg rozmowy o rezerwację i o sprawy gości w trakcie pobytu, ustalamy sytuacje, w których bot natychmiast przełącza na człowieka, i testujemy na części ruchu.',
      },
      {
        name: 'Start i miesięczna opieka',
        text: 'Po przełączeniu reszty ruchu aktualizujemy cennik przy zmianach sezonowych, monitorujemy jakość rozmów i rozwijamy scenariusze w ramach wybranego pakietu utrzymania.',
      },
    ],
  },
  useCases: {
    title: 'Do czego obiekty noclegowe używają agenta głosowego',
    items: [
      {
        title: 'Telefon w nocy i poza sezonem pracy recepcji',
        description:
          'Gość szuka noclegu na już albo dzwoni o dwudziestej trzeciej z pytaniem o jutrzejszy przyjazd. Agent odpowiada od razu, bez budzenia nikogo na piętrze.',
      },
      {
        title: 'Rezerwacja pokoju przez telefon',
        description:
          'Bot pyta o termin, liczbę osób i preferencje, sprawdza dostępność i zapisuje rezerwację. Na koniec czyta całość na głos, żeby dało się jeszcze coś poprawić.',
      },
      {
        title: 'Pytania o udogodnienia',
        description:
          'Parking, śniadanie, zwierzęta, klimatyzacja, odległość od atrakcji. Powtarzalne pytania, które w sezonie potrafią zająć recepcji pół dnia.',
      },
      {
        title: 'Check-in po godzinach',
        description:
          'Gość przyjeżdża później niż planował. Bot podaje procedurę self check-in: kod do skrzynki, instrukcję dojazdu, numer kontaktowy na wypadek problemu.',
      },
    ],
  },
  pricing: {
    title: 'Ile kosztuje voicebot dla hotelu',
    note: 'Ceny netto. Ostateczna wycena zależy od liczby pokoi, integracji z systemem rezerwacji i liczby obiektów w sieci. Pierwsza konsultacja jest bezpłatna.',
    rows: [
      {
        name: 'Wdrożenie',
        price: 'od 5 000 zł',
        description:
          'Mniejszy zakres: scenariusze rozmów, spisanie cennika i zasad, podłączenie grafiku dostępności, konfiguracja telefonii i testy. Sieci obiektów wyceniamy indywidualnie.',
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
          'Rozwój scenariuszy, aktualizacje cennika sezonowego, priorytetowe wsparcie. W Premium dochodzą raporty z rozmów i najszybszy czas reakcji.',
      },
    ],
  },
  faq: [
    {
      question: 'Ile kosztuje voicebot dla hotelu?',
      answer:
        'Wdrożenie startuje od 5 000 zł netto przy mniejszym zakresie: jeden obiekt, podstawowe scenariusze rezerwacji i pytań gości. Sieć obiektów albo integracja z systemem PMS to wycena indywidualna. Do tego dochodzi miesięczne utrzymanie: 249, 499 albo 799 zł netto, zależnie od pakietu. Konsultacja i wycena są bezpłatne.',
    },
    {
      question: 'Skąd bot wie, które pokoje są wolne?',
      answer:
        'Zależy od tego, z czego korzystacie. Przy systemie rezerwacji z otwartym API wpinamy się bezpośrednio i bot widzi tę samą dostępność co recepcja. Przy grafiku w arkuszu rezerwacja trafia do prostego panelu, a ktoś na miejscu potwierdza ją ręcznie tego samego dnia. Zanim wycenimy projekt, sprawdzamy, gdzie u Was jest jedno aktualne źródło prawdy o wolnych pokojach.',
    },
    {
      question: 'Co, jeśli gość zadzwoni w sprawie awarii albo zagrożenia w nocy?',
      answer:
        'To jedyna sytuacja, w której bot nie próbuje niczego rozwiązać sam. Przy pożarze, wypadku albo nagłym problemie zdrowotnym natychmiast przekazuje rozmowę do osoby na dyżurze albo podaje numer alarmowy. Ustawiamy tak każde wdrożenie w obiekcie noclegowym, bez wyjątków.',
    },
    {
      question: 'Czy bot obsłuży self check-in po godzinach pracy recepcji?',
      answer:
        'Tak, jeśli macie ustaloną procedurę: kod do skrzynki na klucze, domofon, instrukcję dojazdu. Bot przekazuje ją gościowi, który dzwoni z pytaniem o późny przyjazd. Bez takiej procedury po Waszej stronie nie ma czego przekazywać, więc ten etap ustalamy razem przed startem.',
    },
    {
      question: 'Czy warto wdrożyć voicebota w małym pensjonacie albo agroturystyce?',
      answer:
        'Czasem tak, czasem nie, i mówimy to wprost już na konsultacji. Przy kilku telefonach tygodniowo koszt wdrożenia i utrzymania zwraca się latami, więc lepiej zostawić telefon gospodarzowi. Sensowny kandydat to obiekt z wyraźnym ruchem telefonicznym i godzinami, w których nikt nie odbiera, na przykład w nocy albo w sezonie.',
    },
    {
      question: 'Ile trwa wdrożenie i czy da się posłuchać, jak to brzmi?',
      answer:
        'Pojedynczy obiekt to zwykle od 2 do 4 tygodni: przegląd telefonów, spisanie cennika, scenariusze, testy i start. Przy sieci albo szerszej integracji realny horyzont to od 1 do 3 miesięcy. Posłuchać da się od ręki, bez umawiania się: pod asystenci-glosowi.vercel.app działa pięcioro asystentów z różnych branż. Osobno mamy demo agenta odpowiadającego na pytania o rozkłady jazdy, zbudowane przez nas na publicznych danych PKS Gryfice (6 przystanków, 276 odjazdów). Przewoźnik nie jest naszym klientem, to nasza własna prezentacja techniczna.',
    },
  ],
  cta: {
    heading: 'Policzmy, ile rezerwacji przepada u Was po godzinach pracy recepcji',
    sub: 'Umów bezpłatną konsultację. Przejdziemy przez ruch telefoniczny, cennik i Wasz system rezerwacji. Jeśli wyjdzie, że wdrożenie się nie spina, powiemy to wprost.',
  },
  related: [
    { label: 'Agent głosowy AI', href: '/uslugi/agent-glosowy-ai' },
    { label: 'Branże', href: '/branze' },
    { label: 'Voicebot dla restauracji', href: '/branze/voicebot-dla-gastronomii' },
    { label: 'Voicebot dla biur nieruchomości', href: '/branze/voicebot-dla-nieruchomosci' },
    { label: 'Cennik wdrożeń AI', href: '/cennik' },
    { label: 'Bezpłatny kurs o voicebotach', href: '/akademia' },
    { label: 'Ile kosztuje voicebot', href: '/blog/ile-kosztuje-voicebot' },
    { label: 'Voicebot a IVR', href: '/blog/voicebot-a-ivr' },
  ],
};

export default function Page() {
  return <SeoLanding content={content} />;
}
