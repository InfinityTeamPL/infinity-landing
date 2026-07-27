import type { Metadata } from 'next';
import SeoLanding, { SeoLandingContent } from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'Chatbot dla sklepu internetowego — obsługa klienta AI',
  description:
    'Chatbot dla sklepu internetowego: status paczki, zwroty w 14 dni, dostępność wariantów. Czat na stronie, Messenger, WhatsApp. Wdrożenie od 5 000 zł netto.',
  alternates: { canonical: '/branze/chatbot-dla-sklepu-internetowego' },
  openGraph: {
    title: 'Chatbot dla sklepu internetowego — obsługa klienta AI w e-commerce',
    description:
      'Agent AI dla e-commerce: status zamówienia i przesyłki, zwroty, pytania przedzakupowe, szczyty sprzedażowe. Ponad 23 kanały, dane na serwerach w Polsce.',
    type: 'website',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

const content: SeoLandingContent = {
  path: '/branze/chatbot-dla-sklepu-internetowego',
  breadcrumbLabel: 'Chatbot dla sklepu internetowego',
  h1: 'Chatbot dla sklepu internetowego — obsługa klienta, która nie kończy się o siedemnastej',
  lead: 'Chatbot dla sklepu internetowego to agent AI, który odpowiada klientom na czacie na stronie, w Messengerze, na WhatsAppie i w mailu. Sprawdza status paczki, tłumaczy zasady zwrotu, mówi czy dany rozmiar jest na stanie, a trudniejsze sprawy przekazuje obsłudze razem z całą historią rozmowy. Działa też w nocy i w Black Friday.',
  serviceName: 'Chatbot AI dla sklepu internetowego',
  serviceDescription:
    'Wdrożenie chatbota AI w sklepie internetowym: obsługa pytań o status zamówienia i przesyłki, zwroty i reklamacje, dostępność wariantów oraz pytania przedzakupowe. Czat na stronie i ponad 23 kanały komunikacji, dane na serwerach w Polsce, zgodnie z RODO.',
  sections: [
    {
      heading: 'Gdzie jest moja paczka, czyli największy wolumen w każdym sklepie',
      paragraphs: [
        'Wyciągnij z helpdesku zgłoszenia z ostatniego miesiąca i posortuj je po treści. Na górze prawie zawsze będzie to samo pytanie. Gdzie jest moja paczka. Klient dostał numer listu przewozowego mailem, ale go nie szuka, tylko pisze na czacie, bo tak jest szybciej. Obsługa kopiuje numer, wkleja do śledzenia kuriera i odpisuje to samo zdanie po raz czterdziesty tego dnia.',
        'Agent AI przejmuje dokładnie ten ruch, pod warunkiem że ma skąd wziąć dane. Podpinamy go do systemu zamówień i do API przewoźnika, więc po podaniu numeru zamówienia albo adresu e-mail sam sprawdza etap realizacji i mówi o nim normalnym zdaniem, zamiast wklejać surowy status z integracji. Kiedy przesyłka stoi w sortowni trzeci dzień, agent to widzi i od razu proponuje zgłoszenie do kuriera.',
        'Bez tej integracji zostaje wersja słabsza, choć nadal użyteczna: bot tłumaczy, gdzie znaleźć numer listu, ile trwa dostawa do paczkomatu i co zrobić przy nieudanym doręczeniu. Wolimy jednak, żeby sprawdzał naprawdę. Odpowiedź w stylu „proszę zajrzeć do maila" nikogo nie zadowala i tak czy inaczej wraca do Was drugą wiadomością.',
      ],
      bullets: [
        'Status zamówienia i przesyłki po numerze zamówienia albo adresie e-mail podanym przy zakupie.',
        'Zmiana adresu dostawy lub punktu odbioru, jeśli paczka nie opuściła jeszcze magazynu.',
        'Informacja o opóźnieniu z konkretną datą zamiast ogólnego „wkrótce wyśle się".',
        'Zgłoszenie zaginionej przesyłki do przewoźnika, z danymi pobranymi prosto z zamówienia.',
        'Faktura do zamówienia, poprawka danych na fakturze, wysyłka duplikatu na wskazany adres.',
      ],
    },
    {
      heading: 'Zwroty, reklamacje i te 14 dni',
      paragraphs: [
        'Drugi duży blok zgłoszeń to zwroty. Klient pyta, czy jeszcze zdąży, kto płaci za odesłanie, czy można oddać rzecz przymierzoną i co z zestawem, z którego oddaje jedną sztukę. Ustawowe 14 dni na odstąpienie od umowy kojarzy mniej więcej co druga osoba. Resztę trzeba przeprowadzić za rękę, a regulaminy sklepów często dają więcej niż wymaga ustawa, więc odpowiedź „ma pan 14 dni" bywa po prostu nieprawdziwa.',
        'Agent odpowiada na podstawie Waszego regulaminu, nie z ogólnej wiedzy modelu. Dajecie 30 dni, powie 30. Przy zwrocie prowadzi klienta przez formularz, zbiera numer zamówienia, powód, numer konta do przelewu, a komplet przekazuje do systemu obsługi w formacie, w jakim pracuje zespół. Nikt nie przepisuje ręcznie danych z okna czatu do arkusza.',
        'Reklamacja jakościowa to inna historia. Tam ktoś musi obejrzeć zdjęcia i podjąć decyzję, więc bot zbiera materiał i przekazuje sprawę dalej. Akurat to działa lepiej, niż się na początku spodziewaliśmy, bo w reklamacjach najwięcej czasu zjada nie decyzja, tylko wydzieranie od klienta brakujących informacji przez cztery wiadomości.',
      ],
    },
    {
      heading: 'Pytania przed zakupem, czyli rozmowa przy otwartym koszyku',
      paragraphs: [
        'Osobna kategoria to pytania zadawane przed zakupem, kiedy klient ma produkt na ekranie i jedną wątpliwość. Czy ta koszula mierzy w rozmiarach europejskich. Czy dojdzie przed świętami. Czy rozmiar M wróci na stan. Odpowiedź następnego dnia rano jest nic niewarta, bo do tego czasu klient kupił u kogoś innego albo mu przeszło.',
        'Agent podpięty do stanów magazynowych mówi konkretnie: nie ma, zostały dwie sztuki, dostawa planowana na przyszły tydzień. Do tego tabele rozmiarów, skład materiału, zasady prania, kompatybilność części zamiennych. Te informacje zwykle już są na stronie, tylko o trzy kliknięcia dalej, niż komukolwiek chce się szukać.',
        'Czy to podnosi konwersję. Zdrowy rozsądek mówi, że tak, bo odpowiedź po kilkunastu sekundach działa na korzyść sklepu bardziej niż cisza do rana. Żadnego procentu tu jednak nie podamy, bo nie mamy własnych danych z e-commerce, a przepisywanie cudzych raportów uważamy za ściemę. To się mierzy u siebie. Udział rozmów z czatu zakończonych zamówieniem da się podpiąć pod analitykę jeszcze przed startem i wtedy po kwartale wiadomo, ile to naprawdę było warte.',
      ],
    },
    {
      heading: 'Jeden agent, wiele kanałów i tydzień Black Friday',
      paragraphs: [
        'Klienci piszą tam, gdzie im wygodnie. Jedni na czacie na stronie, inni w Messengerze pod postem, część na WhatsAppie, reszta mailem, który ląduje w skrzynce sklep@. Utrzymywanie osobnego bota w każdym miejscu to podwójna robota i cztery różne odpowiedzi na to samo pytanie. Budujemy więc jednego agenta z jedną bazą wiedzy i podpinamy go do wybranych kanałów, a obsługujemy ich ponad 23. Może działać w jednym albo w kilku naraz.',
        'Szczyty to drugi powód, dla którego sklepy w ogóle o tym myślą. W tygodniu Black Friday i w grudniu ruch na czacie potrafi się zwielokrotnić z dnia na dzień, a zespół obsługi zostaje ten sam, bo nikt nie zatrudni czterech osób na dziesięć dni. Agent obsługuje wiele rozmów jednocześnie, więc kolejka nie rośnie razem z ruchem. Warto to uruchomić z zapasem, najlepiej miesiąc przed sezonem, żeby zdążyć poprawić odpowiedzi na spokojnie.',
        'Dane klientów, transkrypcje rozmów i numery zamówień trzymamy na serwerach w Polsce, zgodnie z RODO i według standardów bezpieczeństwa zgodnych z normą ISO 27001. Ze sklepem podpisujemy umowę powierzenia przetwarzania danych, w której ustalamy okres przechowywania rozmów i dostęp do nich. Samego agenta budujemy na OpenClaw, otwartym frameworku z ponad 380 tysiącami gwiazdek na GitHubie. Oficjalnym partnerem projektu nie jesteśmy, po prostu na nim pracujemy, a dla sklepu ważne jest to, że warstwa agentowa nie jest zamkniętym pudełkiem jednego dostawcy.',
        'Publicznego wdrożenia w e-commerce, którym moglibyśmy się tu pochwalić, nie mamy i nie zamierzamy takiego wymyślać. Kliknąć da się nasze dema głosowe: pod asystenci-glosowi.vercel.app stoi pięciu asystentów branżowych, a pod pks-gryfice-demo.vercel.app agent odpowiadający na pytania o rozkłady jazdy na publicznych danych przewoźnika, który naszym klientem nie jest. Oba zbudowaliśmy sami, do pokazywania. Poza tym prowadzimy własne produkty, platformę ClawLabs i Superkadrową, więc układ „agent, baza wiedzy, integracje" znamy również od strony kogoś, komu ten system musi działać każdego dnia.',
      ],
    },
    {
      heading: 'Kiedy chatbot dla sklepu się nie opłaca',
      paragraphs: [
        'Przy małym ruchu to się po prostu nie spina. Jeśli schodzi Wam trzydzieści zamówień miesięcznie, a na czacie pojawia się kilka pytań tygodniowo, wdrożenie od 5 000 zł netto plus abonament nie zwróci się przez lata. Właściciel odpisze na te pytania z telefonu, między jednym a drugim pakowaniem. Mówimy to na konsultacji, zanim ktokolwiek podpisze umowę, bo wolimy stracić projekt niż mieć klienta, który po pół roku liczy i widzi, że przepłacił.',
        'Drugi przypadek: brak API po stronie systemu zamówień albo przewoźnika. Sklep na starym, mocno przerobionym silniku, gdzie statusy realizacji siedzą w bazie, do której nikt nie chce dać dostępu, albo integracja kurierska istnieje wyłącznie w panelu do klikania. Wtedy odpada największa część wartości, czyli pytanie o paczkę, a zostaje bot od regulaminu. Czasem to i tak wystarcza. Częściej lepiej najpierw dogadać się z firmą utrzymującą sklep, a rozmowę o agencie odłożyć o kwartał.',
        'Trzeci przypadek jest mniej oczywisty i wychodzi zwykle dopiero na etapie danych. Asortyment, który zmienia się codziennie i nie ma ustrukturyzowanego opisu. Second hand, vintage, sprzedaż pojedynczych sztuk, gdzie każdy produkt to zdjęcie i dwa zdania wpisane ręcznie, za każdym razem inaczej. Bot nie zrobi porządku w źródle, tylko powieli bałagan, za to szybciej i przy każdym kliencie. Najpierw dane, potem agent. Odwrotna kolejność kończy się pretensjami i mamy to przerobione.',
      ],
    },
  ],
  howTo: {
    title: 'Jak wygląda wdrożenie chatbota w sklepie internetowym',
    steps: [
      {
        name: 'Bezpłatna konsultacja i przegląd zgłoszeń',
        text: 'Patrzymy na zgłoszenia z ostatniego miesiąca i dzielimy je na kategorie: paczki, zwroty, dostępność, pytania przedzakupowe. Z tego wychodzi, ile ruchu agent realnie przejmie. Jeśli wyjdzie mało, powiemy o tym od razu.',
      },
      {
        name: 'Integracje i baza wiedzy',
        text: 'Sprawdzamy, do czego da się podpiąć agenta: system zamówień, stany magazynowe, API przewoźnika, panel obsługi. Równolegle zbieramy regulamin zwrotów, tabele rozmiarów, zasady dostawy i najczęstsze odpowiedzi zespołu.',
      },
      {
        name: 'Budowa agenta i podpięcie kanałów',
        text: 'Konfigurujemy agenta i podpinamy go do wybranych kanałów: czat na stronie, Messenger, WhatsApp, skrzynka mailowa. Ustalamy ton wypowiedzi oraz granice, czyli o czym bot nie rozmawia i kiedy natychmiast oddaje sprawę człowiekowi.',
      },
      {
        name: 'Testy na prawdziwych pytaniach klientów',
        text: 'Bierzemy realne rozmowy z ostatnich tygodni i sprawdzamy, co agent odpowie. Poprawiamy luki w bazie wiedzy i scenariusze przekazania do obsługi. Ten etap zwykle trwa dłużej, niż zakłada pierwszy harmonogram.',
      },
      {
        name: 'Start i utrzymanie przez sezon',
        text: 'Uruchamiamy agenta produkcyjnie, najlepiej poza szczytem sprzedażowym. Potem monitorujemy rozmowy, dopisujemy odpowiedzi na nowe pytania i przygotowujemy bota na grudzień w ramach miesięcznego pakietu utrzymania.',
      },
    ],
  },
  useCases: {
    title: 'Do czego sklepy używają chatbota AI',
    items: [
      {
        title: 'Status zamówienia i przesyłki',
        description:
          'Klient podaje numer zamówienia albo maila, agent sprawdza etap realizacji w sklepie i u przewoźnika, po czym mówi to jednym zdaniem. Bez odsyłania do skrzynki pocztowej.',
      },
      {
        title: 'Zwroty i odstąpienie od umowy',
        description:
          'Bot tłumaczy zasady zapisane w Waszym regulaminie, prowadzi przez formularz zwrotu i zbiera po drodze numer konta oraz powód. Komplet trafia do obsługi gotowy do rozpatrzenia.',
      },
      {
        title: 'Dostępność rozmiarów i wariantów',
        description:
          'Po podpięciu stanów magazynowych agent mówi wprost, czy rozmiar jest na stanie, ile sztuk zostało i kiedy planowana jest dostawa. Zamiast obiecywać sprawdzenie i milknąć.',
      },
      {
        title: 'Pytania przed zakupem',
        description:
          'Tabela rozmiarów, skład materiału, czas dostawy przed świętami, różnica między dwoma wariantami produktu. Odpowiedź przychodzi wtedy, gdy klient ma jeszcze otwarty koszyk.',
      },
      {
        title: 'Tydzień Black Friday i grudzień',
        description:
          'W szczycie ruch na czacie rośnie z dnia na dzień, a zespół obsługi zostaje ten sam. Agent prowadzi wiele rozmów jednocześnie, więc czas oczekiwania nie rośnie razem ze sprzedażą.',
      },
      {
        title: 'Wieczory, weekendy i święta',
        description:
          'Sporo zamówień powstaje po dwudziestej, kiedy biuro obsługi już nie pracuje. Proste sprawy agent zamyka sam, resztę spisuje i zostawia zespołowi na rano razem z historią rozmowy.',
      },
    ],
  },
  pricing: {
    title: 'Ile kosztuje chatbot dla sklepu internetowego',
    note: 'Ceny netto. Wycena zależy od liczby kanałów i od tego, do ilu systemów podpinamy agenta. Pierwsza konsultacja jest bezpłatna.',
    rows: [
      {
        name: 'Wdrożenie',
        price: 'od 5 000 zł',
        description:
          'Mniejszy zakres: agent na czacie na stronie, baza wiedzy o zwrotach i dostawie, jedna integracja, testy i start. Większe projekty wyceniamy indywidualnie.',
      },
      {
        name: 'Utrzymanie Starter',
        price: '249 zł/mies.',
        description: 'Monitoring rozmów i drobne poprawki bazy wiedzy przy niewielkim ruchu na czacie.',
      },
      {
        name: 'Utrzymanie Standard i Premium',
        price: '499 lub 799 zł/mies.',
        description:
          'Standard za 499 zł to rozwój bazy wiedzy i scenariuszy przy rosnącej liczbie rozmów. Premium za 799 zł obejmuje pełną opiekę, rozbudowę integracji i najszybszy czas reakcji w sezonie.',
      },
    ],
  },
  faq: [
    {
      question: 'Ile kosztuje chatbot dla sklepu internetowego?',
      answer:
        'Wdrożenie zaczyna się od 5 000 zł netto przy mniejszym zakresie: agent na czacie na stronie, baza wiedzy o dostawie i zwrotach oraz jedna integracja. Projekty z wieloma kanałami i podpięciem do systemu zamówień, magazynu i przewoźnika wyceniamy indywidualnie. Do tego dochodzi utrzymanie: 249, 499 albo 799 zł netto miesięcznie, zależnie od pakietu. Pierwsza konsultacja i wycena są bezpłatne.',
    },
    {
      question: 'Ile trwa wdrożenie chatbota w sklepie?',
      answer:
        'Mniejsze wdrożenie zamyka się zwykle w dwóch do czterech tygodni: przegląd zgłoszeń, zebranie bazy wiedzy, budowa agenta, testy i start. Przy większym zakresie, z integracją systemu zamówień, stanów magazynowych i kilku kanałów, realny horyzont to od miesiąca do trzech. Najdłużej trwa zwykle nie sama budowa, tylko dostęp do danych po stronie sklepu i uporządkowanie tego, co bot ma mówić o zwrotach.',
    },
    {
      question: 'Czy chatbot sam sprawdzi, gdzie jest paczka klienta?',
      answer:
        'Tak, jeśli damy mu dostęp do danych. Potrzebne są dwie rzeczy: możliwość odczytania zamówienia w Waszym systemie oraz integracja ze śledzeniem przewoźnika. Wtedy klient podaje numer zamówienia albo adres e-mail, a agent odpowiada konkretnym etapem realizacji. Bez tych integracji bot wyjaśni procedurę i czas dostawy, ale nie sprawdzi pojedynczej przesyłki. Co da się podpiąć, ustalamy na konsultacji, przed wyceną.',
    },
    {
      question: 'Skąd pewność, że bot nie zmyśli zasad zwrotu albo terminu dostawy?',
      answer:
        'Agent odpowiada na podstawie źródeł, które mu przekazujecie: regulaminu, zasad wysyłki, tabel rozmiarów, opisów produktów. Gdy pytanie wykracza poza te materiały, mówi o tym wprost i przekazuje rozmowę do obsługi, zamiast improwizować. Do zera ryzyka to nie sprowadza, ale dobrze przygotowana baza wiedzy i wyraźne granice tematów robią tu największą różnicę. Przed startem testujemy odpowiedzi na prawdziwych pytaniach z Waszego czatu.',
    },
    {
      question: 'Co z RODO i danymi klientów sklepu?',
      answer:
        'Transkrypcje rozmów, adresy e-mail i numery zamówień przechowujemy na serwerach w Polsce, zgodnie z RODO i według standardów bezpieczeństwa zgodnych z normą ISO 27001. Ze sklepem podpisujemy umowę powierzenia przetwarzania danych, w której ustalamy okres retencji, dostęp do rozmów i zasady usuwania. Agent zbiera przy tym minimum potrzebne do załatwienia sprawy, a przy pytaniu o czas dostawy nie potrzebuje żadnych danych osobowych.',
    },
    {
      question: 'Czy chatbot wytrzyma Black Friday?',
      answer:
        'Agent prowadzi wiele rozmów jednocześnie, więc sam wzrost liczby pytań nie jest problemem. Problemem bywają za to Wasze systemy, do których jest podpięty, dlatego limity zapytań do API sklepu i przewoźnika sprawdzamy przed sezonem. Radzimy uruchamiać agenta z zapasem, mniej więcej miesiąc przed szczytem, żeby zdążyć poprawić odpowiedzi na spokojnym ruchu. Start w środę przed Black Friday to zły pomysł.',
    },
    {
      question: 'W jakich kanałach może działać agent?',
      answer:
        'Obsługujemy ponad 23 kanały komunikacji. W e-commerce najczęściej używane to czat na stronie sklepu, Messenger, WhatsApp i skrzynka mailowa obsługi. Agent może pracować w jednym kanale albo w kilku naraz, korzystając z tej samej bazy wiedzy, więc odpowiedź na to samo pytanie nie różni się w zależności od miejsca. Jeśli sklep odbiera też telefony, ten sam agent może dostać głos oparty na ElevenLabs, ale to już osobny temat i osobna wycena.',
    },
    {
      question: 'Czy chatbot zastąpi nasze biuro obsługi klienta?',
      answer:
        'Nie i nie o to chodzi. Agent zdejmuje z zespołu powtarzalne pytania o paczki, terminy i zasady zwrotu, które zajmują większość dnia i nikogo nie rozwijają. Reklamacje, sprawy sporne i rozmowy z rozdrażnionym klientem trafiają do ludzi, razem z podsumowaniem tego, co zostało już ustalone na czacie. W praktyce obsługa dostaje mniej zgłoszeń, za to trudniejszych, i ma na nie więcej czasu.',
    },
  ],
  cta: {
    heading: 'Policzmy, czy chatbot ma sens w Waszym sklepie',
    sub: 'Pierwsza konsultacja jest bezpłatna. Przejrzymy zgłoszenia z ostatniego miesiąca i powiemy wprost, ile z nich agent przejmie, a co i tak zostanie przy zespole.',
  },
  related: [
    { label: 'Chatbot AI dla firm', href: '/uslugi/chatbot-ai' },
    { label: 'Branże', href: '/branze' },
    { label: 'Cennik wdrożeń AI', href: '/cennik' },
    { label: 'Agent AI a chatbot', href: '/blog/agent-ai-a-chatbot' },
    { label: 'Ile kosztuje chatbot AI', href: '/blog/ile-kosztuje-chatbot-ai' },
  ],
};

export default function Page() {
  return <SeoLanding content={content} />;
}
