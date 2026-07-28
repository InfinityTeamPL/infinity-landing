import type { Metadata } from 'next';
import SeoLanding, { SeoLandingContent } from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'Ile kosztuje wdrożenie AI w firmie? Cennik 2026',
  description:
    'Ile kosztuje wdrożenie AI? Od 5 000 zł netto za mały zakres, utrzymanie od 249 zł/mies. Sprawdź cennik AI dla firm i umów bezpłatną konsultację.',
  alternates: { canonical: '/cennik' },
  openGraph: {
    title: 'Ile kosztuje wdrożenie AI w firmie? Cennik 2026',
    description:
      'Wdrożenie agenta AI od 5 000 zł netto, utrzymanie od 249 zł/mies. Zobacz pełny cennik AI dla firm: chatboty, voiceboty, automatyzacja procesów.',
    type: 'website',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

const content: SeoLandingContent = {
  path: '/cennik',
  breadcrumbLabel: 'Cennik',
  h1: 'Ile kosztuje wdrożenie AI w firmie? Cennik 2026',
  lead: 'Wdrożenie AI w firmie kosztuje od 5 000 zł netto za mały zakres, na przykład za chatbota na stronę albo prostego agenta głosowego. Przy rozbudowanych integracjach schodzi to na wycenę indywidualną. Do tego dochodzi utrzymanie: od 249 do 799 zł netto miesięcznie. Pierwsza konsultacja i audyt procesów są bezpłatne, a małe wdrożenie trwa od dwóch do czterech tygodni.',
  sections: [
    {
      heading: 'Co wpływa na cenę wdrożenia AI',
      paragraphs: [
        'Nie ma jednej ceny wdrożenia AI, bo nie ma dwóch identycznych firm. Widełki są szerokie: od 5 000 zł netto do wyceny indywidualnej. Wpływają na to cztery rzeczy i wszystkie sprawdzamy podczas bezpłatnego audytu procesów, zanim padnie jakakolwiek kwota. Wolimy tak. Cena rzucona z sufitu i tak wraca po miesiącu jako aneks, a wtedy rozmowa jest już nieprzyjemna.',
      ],
      bullets: [
        'Najwięcej waży zakres. Jeden dobrze zdefiniowany proces, na przykład odpowiadanie na powtarzalne pytania klientów, to mały zakres. Kilka procesów naraz albo agent podejmujący decyzje w wielu krokach to już zupełnie inna wycena.',
        'Agent, który tylko rozmawia, jest tańszy od takiego, który sprawdza status zamówienia w Waszym systemie, zakłada zgłoszenie w CRM albo wypełnia dokumenty kadrowe. Każda integracja to osobna robota.',
        'Chatbot na stronie WWW to jedno. Ten sam agent dostępny w WhatsAppie, na Teams, Slacku i Telegramie (obsługujemy ponad 23 kanały) wymaga osobnej konfiguracji i osobnych testów w każdym z nich.',
        'Zostaje jeszcze Wasza baza wiedzy. Uporządkowane FAQ i spisane procedury skracają wdrożenie. Gorzej, gdy wiedza siedzi w mailach i w głowach pracowników. Najpierw trzeba ją stamtąd wyciągnąć, a to zwykle trwa dłużej, niż wszystkim się na starcie wydaje. To zresztą najczęstszy powód, dla którego termin się przesuwa, i prawie nigdy nie leży po stronie technologii.',
      ],
    },
    {
      heading: 'Ile kosztuje chatbot AI?',
      paragraphs: [
        'Chatbot AI dla firm w małym zakresie kosztuje od 5 000 zł netto. W tej cenie mieści się agent tekstowy na jednym kanale (np. strona WWW lub WhatsApp), zbudowany na Waszej bazie wiedzy: ofercie, cenniku, procedurach, najczęstszych pytaniach klientów. Agent odpowiada całą dobę. Rozmowy, w których potrzebny jest człowiek, przekazuje do zespołu.',
        'Wersję rozszerzoną wyceniamy indywidualnie, bo koszt zależy wprost od liczby integracji i kanałów. Mówimy tu o agencie działającym na kilku kanałach naraz (WhatsApp, Slack, Teams, Telegram, Discord i inne), podpiętym pod systemy firmowe, obsługującym procesy sprzedażowe czy rekrutacyjne.',
        'Za 5 000 zł netto nie dostaniecie agenta, który sam zmieni rezerwację, wystawi fakturę albo zaksięguje zwrot. To już integracja i osobna wycena. W małym zakresie agent czyta, odpowiada, zbiera dane od klienta i przekazuje sprawę dalej. W praktyce to i tak zdejmuje z zespołu największą część powtarzalnych wiadomości.',
        'Do kosztu wdrożenia trzeba doliczyć utrzymanie: od 249 zł netto miesięcznie w planie Starter. Dzięki temu chatbot nie starzeje się razem z ofertą. Aktualizujemy bazę wiedzy i pilnujemy jakości odpowiedzi, bo bez tego po kilku miesiącach agent zaczyna mijać się z prawdą, a klient dowiaduje się o promocji, która skończyła się w marcu.',
      ],
    },
    {
      heading: 'Ile kosztuje agent głosowy (voicebot)?',
      paragraphs: [
        'Agent głosowy AI w podstawowym zakresie również zaczyna się od 5 000 zł netto. Budujemy go na technologii ElevenLabs, więc mówi naturalną polszczyzną, bez syntetycznego „robotycznego" brzmienia. Telefon odbiera 24 godziny na dobę, 7 dni w tygodniu.',
        'Żeby było na czym pokazać, jak to brzmi, zbudowaliśmy własne demo na publicznych rozkładach PKS Gryfice: 6 przystanków, 276 odjazdów, agent podaje godziny i dni kursowania. To nasza prezentacja techniczna, nie wdrożenie dla klienta, i przewoźnik nie jest z nami w żaden sposób związany. Wdzięczny przypadek, bo jeden temat i jedno źródło danych.',
        'Voicebot zwykle wymaga podpięcia pod firmową telefonię, a często też pod kalendarz, system rezerwacji albo CRM. Dlatego wdrożenia głosowe częściej niż tekstowe kończą się wyceną indywidualną. Przy pracy całodobowej rekomendujemy plan utrzymania Standard lub Premium, żeby agent miał stałą opiekę techniczną.',
        'Głos ma swoje granice i lepiej wiedzieć o nich przed podpisaniem umowy. Przy słabym połączeniu, hałasie w tle albo gdy dzwoniący mówi jednocześnie z agentem, rozpoznanie mowy się myli i agent prosi o powtórzenie. Nazwiska i adresy potrafią wrócić przekręcone, więc przy nich zawsze wpinamy potwierdzenie. W każdym scenariuszu zostawiamy też wyjście do człowieka, bo część osób po prostu nie chce rozmawiać z automatem i to jest w porządku.',
      ],
    },
    {
      heading: 'Dlaczego liczymy ROI przed wdrożeniem',
      paragraphs: [
        'Nie sprzedajemy technologii dla samej technologii. Przed przygotowaniem wyceny liczymy z Wami rachunek: ile godzin miesięcznie zespół spędza na powtarzalnych zadaniach, ile kosztuje ta praca i jaką jej część przejmie agent. Jeśli rachunek się nie spina, mówimy to wprost. Taniej usłyszeć „to się nie opłaci" na bezpłatnej konsultacji niż po wdrożeniu.',
        'Wstępny szacunek możesz zrobić samodzielnie w naszym kalkulatorze ROI pod adresem infinityteam.io/kalkulator. Podajesz liczbę godzin i stawki, a kalkulator pokazuje, kiedy wdrożenie się zwróci. To tylko szacunek i bywa z nim różnie, bo część oszczędności widać dopiero po pierwszym miesiącu pracy agenta, a część nigdy nie zamienia się w pieniądze, tylko w spokój na infolinii. Na konsultacji przechodzimy przez ten sam rachunek na Waszych realnych danych.',
      ],
    },
    {
      heading: 'Kiedy odradzamy wdrożenie',
      paragraphs: [
        'Czasem rachunek się nie spina i mówimy to na konsultacji, a nie po fakturze. Cztery sytuacje, w których zwykle odradzamy start:',
      ],
      bullets: [
        'Mało powtarzalnych rozmów. Jeśli w miesiącu wpada kilkanaście zapytań i każde jest inne, agent nie ma czego przejąć. Taniej wyjdzie porządne FAQ na stronie i jeden szablon odpowiedzi.',
        'Proces, który zmienia się co tydzień. Agent działa na Waszej bazie wiedzy. Kiedy baza jest ruchomym celem, samo jej utrzymanie zje więcej niż oszczędność.',
        'Sprawy, w których pomyłka kosztuje naprawdę dużo: decyzja kredytowa, diagnoza, opinia prawna. Agent zbierze dane i przygotuje sprawę, ale ostatniego słowa mu nie oddajemy i nie polecamy tego nikomu.',
        'Akcja na dwa tygodnie, na przykład obsługa jednej promocji. Wdrożenie zajmie tyle samo co zwykle, a zwrot nie zdąży się pojawić.',
      ],
    },
    {
      heading: 'Co przygotować przed wyceną',
      paragraphs: [
        'Wycena jest tym dokładniejsza, im więcej materiału zobaczymy na starcie. Nie trzeba niczego pisać od zera. Wystarczy pokazać, co już macie.',
      ],
      bullets: [
        'Listę pytań, które klienci zadają najczęściej. Zwykle wystarczy przejrzeć skrzynkę z ostatniego miesiąca i wypisać powtarzające się tematy.',
        'Aktualną ofertę i cennik w jednym pliku. Jeśli po firmie krążą trzy wersje, najpierw ustalcie między sobą, która obowiązuje. Bez tego agent będzie powielał ten sam bałagan, tylko szybciej.',
        'Informację, do jakich systemów agent ma sięgać, i osobę po Waszej stronie, która wie, jak te systemy działają od środka.',
        'Decyzję, w którym momencie rozmowa ma trafić do człowieka i do kogo konkretnie. To pytanie potrafi zająć więcej czasu niż cała reszta.',
      ],
    },
    {
      heading: 'Kiedy wystarczy ClawLabs za 399 zł',
      paragraphs: [
        'Nie każdy musi płacić 5 000 zł. Prowadzimy też ClawLabs, własną platformę do hostingu agentów AI w modelu self-serve. Konto zakładacie sami, agent startuje w około minutę, a plany zaczynają się od 399 zł miesięcznie. Konfiguracja też jest po Waszej stronie, bez naszego udziału.',
        'Różnica jest prosta. W ClawLabs płacicie za infrastrukturę i narzędzie, a całą robotę robicie sami. Wdrożenie agencyjne od 5 000 zł to nasza praca: audyt, ułożenie scenariuszy rozmów, integracje z Waszymi systemami, testy na realnym ruchu i szkolenie zespołu. Jeśli macie prosty przypadek i kogoś, kto lubi grzebać w konfiguracji, zacznijcie od ClawLabs. Jeśli nie ma kto tego pilnować, wdrożenie wyjdzie taniej niż trzy miesiące prób i tak zwanego uczenia się narzędzia.',
      ],
    },
  ],
  howTo: {
    title: 'Jak powstaje wycena i wdrożenie',
    steps: [
      {
        name: 'Bezpłatna konsultacja',
        text: 'Rozmawiamy o Waszych procesach i wskazujemy miejsca, gdzie agent AI faktycznie oszczędzi czas lub pieniądze. Bez zobowiązań i bez prezentacji sprzedażowej.',
      },
      {
        name: 'Audyt procesów i wycena',
        text: 'Sprawdzamy zakres, potrzebne integracje, kanały i stan Waszej bazy wiedzy. Dostajecie konkretną cenę, harmonogram i szacunek zwrotu z inwestycji, wszystko przed podpisaniem czegokolwiek.',
      },
      {
        name: 'Wdrożenie pilotażowe',
        text: 'Startujemy od jednego procesu. Mały zakres zajmuje od dwóch do czterech tygodni, większy projekt od miesiąca do trzech. Testujemy na realnych rozmowach, zanim agent przejmie ruch.',
      },
      {
        name: 'Rozbudowa i utrzymanie',
        text: 'Po pilocie decydujecie o rozszerzeniu zakresu. Agent działa pod stałą opieką w abonamencie od 249 do 799 zł netto miesięcznie. Monitorujemy jakość i aktualizujemy bazę wiedzy.',
      },
    ],
  },
  pricing: {
    title: 'Cennik wdrożeń i utrzymania AI',
    note: 'Wszystkie ceny są cenami netto. Ostateczna wycena wdrożenia zależy od zakresu ustalonego podczas bezpłatnego audytu.',
    rows: [
      {
        name: 'Konsultacja i audyt procesów',
        price: 'Bezpłatnie',
        description: 'Analiza procesów, wskazanie miejsc do automatyzacji, szacunek ROI i konkretna wycena.',
      },
      {
        name: 'Wdrożenie agenta AI: mały zakres',
        price: 'od 5 000 zł',
        description: 'Chatbot lub voicebot dla jednego procesu, jeden kanał, baza wiedzy, testy i szkolenie zespołu. Realizacja od dwóch do czterech tygodni.',
      },
      {
        name: 'Wdrożenie rozszerzone / integracje',
        price: 'wycena indywidualna',
        description: 'Wiele kanałów, integracje z CRM, telefonią i systemami firmowymi, automatyzacja wieloetapowych procesów. Realizacja od jednego do trzech miesięcy.',
      },
      {
        name: 'Utrzymanie Starter',
        price: '249 zł/mies.',
        description: 'Monitoring działania agenta, drobne poprawki i aktualizacje bazy wiedzy w podstawowym zakresie. Wystarcza przy jednym kanale i stabilnej ofercie.',
      },
      {
        name: 'Utrzymanie Standard',
        price: '499 zł/mies.',
        description: 'Szybszy czas reakcji, regularne zmiany w scenariuszach rozmów i rozwój bazy wiedzy. Dla firm, u których oferta rusza się co miesiąc.',
      },
      {
        name: 'Utrzymanie Premium',
        price: '799 zł/mies.',
        description: 'Wsparcie non-stop, priorytetowa obsługa zgłoszeń i bieżący rozwój agenta. Rekomendowane przy pracy 24/7 i przy agentach odbierających telefon.',
      },
      {
        name: 'ClawLabs (bez naszej pracy)',
        price: 'od 399 zł/mies.',
        description: 'Nasza platforma self-serve do hostingu agentów AI. Zakładasz konto i konfigurujesz agenta sam, my nic nie robimy poza utrzymaniem infrastruktury.',
      },
    ],
  },
  faq: [
    {
      question: 'Czy w cenniku są jakieś ukryte koszty?',
      answer:
        'Nie. Wycena przed startem obejmuje cały zakres wdrożenia: konfigurację agenta, uzgodnione integracje, testy i szkolenie zespołu. Stały koszt po wdrożeniu to abonament utrzymaniowy, od 249 do 799 zł netto miesięcznie, znany Wam z góry. Osobna sprawa to płatne usługi zewnętrzne, których agent może potrzebować: numer telefoniczny, bramka SMS, licencja systemu, do którego się podłącza. Pokazujemy je w wycenie razem z informacją, po czyjej stronie leży ten koszt. Nikt nie powinien dowiadywać się o tym po wdrożeniu. Jeśli w trakcie prac pojawi się potrzeba rozszerzenia zakresu, najpierw dostajecie wycenę i to Wy decydujecie.',
    },
    {
      question: 'Dlaczego 5 000 zł, skoro w sieci są chatboty w abonamencie?',
      answer:
        'Bo to dwie różne rzeczy. W abonamencie kupujecie narzędzie i pustą konfigurację, którą ktoś u Was musi wypełnić: spisać scenariusze, wgrać wiedzę, przetestować odpowiedzi, poprawiać je co tydzień. Robota jest ta sama, tylko przechodzi na Wasz zespół. W kwocie od 5 000 zł netto płacicie właśnie za tę robotę, nie za licencję. Jeśli macie kogoś, kto chce i umie to poprowadzić, mówimy uczciwie: weźcie nasz ClawLabs za 399 zł miesięcznie i zróbcie to sami. Nie każdemu potrzebna jest agencja.',
    },
    {
      question: 'Co, jeśli agent odpowie klientowi źle?',
      answer:
        'Zdarza się i nie będziemy udawać, że jest inaczej. Dlatego agent pracuje na Waszej bazie wiedzy, a nie na ogólnej wiedzy modelu, i w sprawach spoza bazy ma powiedzieć, że nie wie, zamiast zgadywać. Wpinamy też twarde granice: kwestie cenowe, reklamacyjne i prawne przekazujemy człowiekowi. Rozmowy przeglądamy w ramach utrzymania i błędne odpowiedzi poprawiamy u źródła, czyli w bazie wiedzy. Pierwszy miesiąc po starcie zawsze wymaga najwięcej poprawek, potem to się uspokaja.',
    },
    {
      question: 'Co dokładnie obejmuje miesięczne utrzymanie?',
      answer:
        'Utrzymanie to stała opieka nad agentem: monitoring jakości odpowiedzi, poprawki, aktualizacje bazy wiedzy i wsparcie techniczne. Plan Starter (249 zł/mies.) obejmuje podstawowy zakres, Standard (499 zł/mies.) dodaje szybszy czas reakcji i regularny rozwój scenariuszy, a Premium (799 zł/mies.) zapewnia wsparcie non-stop. To ostatnie ma znaczenie zwłaszcza wtedy, gdy agent odbiera telefony całą dobę.',
    },
    {
      question: 'Jak długo trwa wdrożenie AI w firmie?',
      answer:
        'Małe wdrożenie, czyli jeden proces na jednym kanale, trwa od dwóch do czterech tygodni od akceptacji wyceny. Większe projekty, z wieloma kanałami i integracjami z systemami firmowymi, zajmują od jednego do trzech miesięcy. Dokładny harmonogram dostajecie razem z wyceną po audycie procesów. Terminy przesuwają się najczęściej wtedy, gdy czekamy na materiały albo na dostępy po Waszej stronie, więc warto wyznaczyć jedną osobę, która to ogarnia.',
    },
    {
      question: 'Czy można zacząć od małego pilota?',
      answer:
        'Tak. Właśnie tak najczęściej zaczynamy. Wybieramy jeden proces, w którym efekt będzie najłatwiej zmierzyć, i wdrażamy go w małym zakresie od 5 000 zł netto. Po dwóch do czterech tygodni macie działającego agenta i realne dane: ile rozmów obsłużył, ile przekazał dalej i ile czasu zespołu to uwolniło. Dopiero na tej podstawie decydujecie o rozbudowie. Bywa i tak, że pilot pokazuje, że dalej nie warto. To też jest dobry wynik, bo kosztował tyle co pilot, a nie tyle co pełne wdrożenie.',
    },
    {
      question: 'Czy można płacić etapami?',
      answer:
        'Tak. Przy większych wdrożeniach dzielimy płatność na etapy powiązane z odbiorem konkretnych części projektu: zaliczka na start, kolejne transze po zaakceptowaniu uzgodnionych etapów prac. Harmonogram płatności ustalamy w umowie przed rozpoczęciem wdrożenia, więc nie ma tu niespodzianek. Utrzymanie rozliczamy w prostym miesięcznym abonamencie.',
    },
    {
      question: 'Czy wdrożenie AI jest zgodne z RODO?',
      answer:
        'Tak. Dane klientów przetwarzamy na serwerach w Polsce, w zgodzie z RODO i według standardów bezpieczeństwa zgodnych z normą ISO 27001. Samego certyfikatu ISO 27001 nie posiadamy i nie udajemy, że jest inaczej. Podczas audytu ustalamy, jakie dane agent faktycznie musi widzieć, i ścinamy ten zakres do minimum. Powierzenie przetwarzania danych regulujemy w umowie wdrożeniowej.',
    },
  ],
  cta: {
    heading: 'Poznaj cenę dla swojej firmy',
    sub: 'Pierwsza konsultacja jest bezpłatna. Opowiedz nam o swoich procesach, a przygotujemy konkretną wycenę z szacunkiem zwrotu z inwestycji.',
  },
  related: [
    { label: 'Agent głosowy AI', href: '/uslugi/agent-glosowy-ai' },
    { label: 'Chatbot AI dla firm', href: '/uslugi/chatbot-ai' },
    { label: 'Automatyzacja procesów AI', href: '/uslugi/automatyzacja-procesow-ai' },
    { label: 'Automatyzacja HR i kadr', href: '/uslugi/automatyzacja-hr' },
    { label: 'Automatyzacja obsługi klienta', href: '/uslugi/automatyzacja-obslugi-klienta' },
    { label: 'Kalkulator ROI', href: '/kalkulator' },
  ],
};

export default function Page() {
  return <SeoLanding content={content} />;
}
