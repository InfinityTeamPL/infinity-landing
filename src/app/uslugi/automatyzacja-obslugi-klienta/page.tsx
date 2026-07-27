import type { Metadata } from 'next';
import SeoLanding, { SeoLandingContent } from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'Automatyzacja obsługi klienta — telefon, czat, poczta',
  description:
    'Automatyzacja obsługi klienta z AI: telefon, czat, poczta i komunikatory w jednym układzie. Wdrożenie od 5 000 zł netto, pierwsza konsultacja bezpłatna.',
  alternates: { canonical: '/uslugi/automatyzacja-obslugi-klienta' },
  openGraph: {
    title: 'Automatyzacja obsługi klienta — jak ją poukładać z AI',
    description:
      'Które sprawy w obsłudze klienta przejmuje agent AI, czego lepiej nie automatyzować i jak przekazywać rozmowy ludziom. Wdrożenia od 5 000 zł netto.',
    type: 'website',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

const content: SeoLandingContent = {
  path: '/uslugi/automatyzacja-obslugi-klienta',
  breadcrumbLabel: 'Automatyzacja obsługi klienta',
  h1: 'Automatyzacja obsługi klienta z AI',
  lead:
    'Automatyzacja obsługi klienta polega na tym, że część spraw trafiających dziś do zespołu przejmują agenci AI: odbierają telefon, odpisują na czacie i w poczcie, sprawdzają dane w systemach firmy. Reszta idzie do ludzi, ale z gotowym kontekstem. W Infinity Tech układamy to od 5 000 zł netto, pierwsza konsultacja jest bezpłatna.',
  serviceName: 'Automatyzacja obsługi klienta',
  serviceDescription:
    'Automatyzacja obsługi klienta z użyciem agentów AI: telefon, czat na stronie, komunikatory i poczta w jednym układzie, z jedną bazą wiedzy, zasadami przekazywania spraw do ludzi i integracjami z systemami firmy.',
  sections: [
    {
      heading: 'Zacznij od podziału spraw, nie od wyboru narzędzia',
      paragraphs: [
        'Zanim ktokolwiek zacznie rozmawiać o technologii, warto spisać, z czym klienci naprawdę się odzywają. W firmach, które oglądaliśmy od środka, obraz wychodzi zwykle podobny. Kilkanaście typów spraw wraca w kółko i zjada większość czasu zespołu, a cała reszta to przypadki jednostkowe, każdy trochę inny. Automatyzacja obsługi klienta ma sens dokładnie na tej pierwszej grupie.',
        'Druga grupa jest trudniejsza i o niej najczęściej zapomina się przy planowaniu. Sprawa, w której trzeba coś ocenić, ustąpić klientowi albo wyjść poza standardową procedurę, nie nadaje się do oddania maszynie. Nie dlatego, że model nie zrozumie języka. Zrozumie. Chodzi o to, kto bierze odpowiedzialność za skutki takiej decyzji, i tu odpowiedź jest tylko jedna.',
        'Praktyczny podział zajmuje jedno spotkanie i kartkę papieru. Robimy go na bezpłatnej konsultacji, zanim padnie jakakolwiek liczba w wycenie. Bez tego łatwo kupić system obsługi klienta AI, który obsłuży dwa procent zgłoszeń i będzie irytował przy pozostałych dziewięćdziesięciu ośmiu.',
      ],
      bullets: [
        'Pytania o ofertę, ceny, dostępność i godziny pracy, czyli to, co i tak jest już spisane w firmowych dokumentach',
        'Sprawy statusowe, w rodzaju „gdzie jest moja paczka” albo „na kiedy mam umówioną wizytę”',
        'Zgłoszenia, które trzeba przyjąć, opisać i skierować do właściwej osoby, żeby nie zginęły w skrzynce',
        'Zmiany terminu lub rezerwacji, kiedy zasady są jasno spisane i nie wymagają niczyjej zgody',
      ],
    },
    {
      heading: 'Kanały: telefon, czat, komunikatory i poczta',
      paragraphs: [
        'Klient nie zastanawia się, który kanał jest dla firmy wygodniejszy. Dzwoni, bo akurat prowadzi samochód. Pisze na WhatsAppie, bo stoi w kolejce. Jeśli w każdym kanale odpowiada ktoś inny i według innych zasad, klient wyczuje to w pierwszej minucie, a zespół dowie się o tym z reklamacji. Dlatego całą obsługę budujemy wokół jednej bazy wiedzy i jednego zestawu reguł, a kanały tylko do niej podpinamy. Tekstowych obsługujemy ponad 23, od czatu na stronie po Slacka i Teams.',
        'Telefon rządzi się osobnymi prawami, bo tam nikt nie poczeka trzydziestu sekund na odpowiedź. Agent telefoniczny musi rozumieć mowę potoczną, odmieniać polskie nazwy i daty oraz brzmieć tak, żeby rozmówca nie odłożył słuchawki po dwóch zdaniach. Głos budujemy na technologii ElevenLabs. Część telefoniczną opisaliśmy osobno, na stronie o agencie głosowym AI, a link znajdziesz na dole w sekcji „Zobacz także”. Tam też podpięliśmy publiczne dema, w tym asystenta rozkładów jazdy zbudowanego na otwartych danych PKS Gryfice: zna 6 przystanków i 276 odjazdów. To nasze demo na publicznych danych, przewoźnik nie jest naszym klientem.',
        'O poczcie mówi się przy automatyzacji najmniej, a to zwykle w niej zalegają najstarsze sprawy. Agent czyta wiadomość, rozpoznaje, o co chodzi, przygotowuje odpowiedź albo zakłada zgłoszenie w systemie i przypina do niego historię kontaktu. Przy części tematów odpowiedź wychodzi od razu, przy części czeka na akceptację człowieka. To ustawienie zmienia się w czasie, bo zaufanie do agenta buduje się na konkretnych rozmowach, nie na deklaracjach.',
      ],
    },
    {
      heading: 'Co się dzieje ze zgłoszeniem, kiedy już wpadnie',
      paragraphs: [
        'Odpowiedź na pytanie to dopiero połowa roboty. Druga połowa dzieje się w systemach: ktoś musi sprawdzić status w magazynie, zapisać termin w kalendarzu, założyć zgłoszenie w helpdesku, dopisać notatkę do karty klienta w CRM. Jeśli agent tego nie robi, obsługa wygląda ładnie na czacie, a zespół i tak przepisuje wszystko ręcznie. Dlatego integracje ustalamy razem z zakresem rozmów, nigdy po fakcie.',
        'Agenty budujemy na OpenClaw, otwartym frameworku, który zebrał ponad 380 tysięcy gwiazdek na GitHubie. Nie jesteśmy jego oficjalnym partnerem, po prostu na nim pracujemy, bo daje kontrolę nad tym, co agent może zrobić w firmowych systemach, i nie zamyka nas w jednym dostawcy. Procesy działające w tle, poza samą rozmową, opisaliśmy szerzej na stronie o automatyzacji procesów AI.',
        'Przekazanie sprawy do człowieka też jest procesem, nie awarią. Pracownik dostaje podsumowanie rozmowy, dane klienta i to, co agent już ustalił. Klient nie opowiada wszystkiego drugi raz. Brzmi banalnie, a w praktyce właśnie na tym najczęściej wykłada się automatyzacja biura obsługi klienta: bot oddaje rozmowę i znika, a człowiek zaczyna od pustego ekranu.',
      ],
    },
    {
      heading: 'Czego w obsłudze klienta nie automatyzujemy',
      paragraphs: [
        'Ta lista jest krótka i pilnujemy jej dość twardo, także wtedy, gdy klient prosi o więcej. Są rozmowy, w których obecność człowieka sama w sobie jest częścią odpowiedzi. Maszyna może w nich technicznie poprowadzić dialog i nawet zabrzmi rozsądnie, tylko efekt bywa odwrotny od zamierzonego. Klient czuje, że firma odsunęła go od siebie w momencie, w którym najbardziej potrzebował kogoś po drugiej stronie.',
        'Reklamacje z emocjami zostawiamy ludziom. Podobnie sprawy sporne, gdzie racja nie jest oczywista i ktoś musi ją rozstrzygnąć. Klient, który już jest zdenerwowany, powinien trafić do pracownika najkrótszą możliwą drogą, bez przechodzenia przez agenta i bez dopytywania o numer zamówienia. Wszystko, co dotyczy pieniędzy w konkretnym przypadku, czyli zwrot poza regulaminem, rabat, odstępstwo od warunków umowy, jest decyzją człowieka i tak zostaje.',
        'Agent umie jednak rozpoznać, że rozmowa właśnie skręciła w tę stronę. Wyłapuje ton wypowiedzi, słowa wprost sygnalizujące irytację i prośbę o kontakt z człowiekiem. Wtedy nie próbuje ratować sytuacji własnymi siłami, tylko przekazuje sprawę dalej razem z zapisem tego, co się wydarzyło. Na starcie rozmowy mówi też wprost, że jest systemem AI.',
      ],
      bullets: [
        'Reklamacja, w której słychać emocje, nawet jeśli formalnie jest prosta',
        'Sprawa sporna, gdzie trzeba rozstrzygnąć, po czyjej stronie leży racja',
        'Klient, który zaczyna rozmowę już zdenerwowany albo pisze po raz kolejny w tej samej sprawie',
        'Każda decyzja finansowa poza standardem: zwrot, rabat, odstępstwo od umowy',
      ],
    },
    {
      heading: 'Jak sprawdzić, czy to w ogóle działa',
      paragraphs: [
        'Efektu automatyzacji nie da się uczciwie ocenić, jeśli nikt nie zmierzył stanu sprzed wdrożenia. Dlatego przed startem prosimy o kilka prostych liczb z ostatnich miesięcy. Ile połączeń przepadło nieodebranych, po jakim czasie klient dostawał pierwszą odpowiedź na czacie i w poczcie, ile spraw wracało drugi raz, bo pierwsza odpowiedź niczego nie załatwiła. To zwykle moment, w którym w firmie robi się cicho, bo nikt tego wcześniej nie liczył.',
        'Po uruchomieniu patrzymy na te same liczby, plus na to, jaki odsetek rozmów agent kończy sam, a ile przekazuje ludziom. Uczciwie: pierwszy miesiąc zwykle wygląda gorzej, niż się klientowi wydawało. Wychodzą luki w bazie wiedzy, pytania, których nikt nie przewidział, i procedury, które istnieją tylko w głowie jednej osoby z zespołu. To nie jest powód do paniki, to jest właśnie materiał do poprawek. Raporty z rozmów są przy okazji najlepszą listą rzeczy do naprawienia w samej ofercie.',
      ],
    },
  ],
  howTo: {
    title: 'Jak układamy automatyzację obsługi klienta',
    steps: [
      {
        name: 'Bezpłatna konsultacja i mapa spraw',
        text: 'Rozmawiamy o tym, z czym odzywają się klienci, w jakich kanałach i jak często. Dzielimy sprawy na te powtarzalne i te wymagające człowieka. Ustalamy, od czego zacząć, żeby efekt było widać najszybciej.',
      },
      {
        name: 'Baza wiedzy i zasady rozmowy',
        text: 'Zbieramy cenniki, regulaminy, procedury i odpowiedzi na pytania, które padają w kółko. Ustalamy ton wypowiedzi, granice kompetencji agenta i twarde reguły przekazywania spraw do zespołu.',
      },
      {
        name: 'Kanały i integracje',
        text: 'Podpinamy wybrane kanały: telefon, czat na stronie, komunikatory, pocztę. Łączymy agenta z CRM, helpdeskiem, kalendarzem albo sklepem, żeby pracował na danych, z których firma korzysta na co dzień.',
      },
      {
        name: 'Testy na prawdziwych sprawach',
        text: 'Puszczamy przez agenta realne pytania z ostatnich miesięcy, także te zadane niewyraźnie i nietypowo. Poprawiamy braki w wiedzy i sprawdzamy, czy przekazania do ludzi działają w każdym kanale.',
      },
      {
        name: 'Start i utrzymanie',
        text: 'Agent zaczyna obsługiwać prawdziwe zgłoszenia. W ramach utrzymania czytamy rozmowy, uzupełniamy bazę wiedzy, rozszerzamy zakres spraw i dokładamy kolejne kanały, gdy pierwszy etap się sprawdzi.',
      },
    ],
  },
  useCases: {
    title: 'Automatyzacja obsługi klienta w praktyce',
    items: [
      {
        title: 'Sklep internetowy',
        description:
          'Pytania o status paczki, dostępność rozmiaru i warunki zwrotu agent obsługuje sam po podpięciu do sklepu. Reklamacje jakościowe idą do zespołu razem z numerem zamówienia i historią rozmowy.',
      },
      {
        title: 'Przychodnia i gabinet',
        description:
          'Rejestracja telefoniczna działa też wieczorem i w weekend: agent umawia, przekłada i odwołuje wizyty w kalendarzu. Pytania o wyniki i przebieg leczenia przekazuje personelowi, bez własnych interpretacji.',
      },
      {
        title: 'Firma usługowa z serwisem',
        description:
          'Agent przyjmuje zgłoszenie awarii, dopytuje o szczegóły potrzebne technikowi i zakłada zadanie w systemie. Klient dostaje potwierdzenie od razu, a nie po powrocie biura z przerwy.',
      },
      {
        title: 'Transport i przewozy',
        description:
          'Infolinia odpowiada na pytania o godziny odjazdów i dni kursowania przez całą dobę, zawsze na podstawie aktualnego rozkładu. Nasze demo dla Gryfic zna 6 przystanków i 276 odjazdów.',
      },
      {
        title: 'Obsługa klienta w B2B',
        description:
          'Stali klienci pytają o statusy zamówień, faktury i terminy dostaw. Agent odpowiada z systemów firmy, a opiekun handlowy dostaje powiadomienie tylko wtedy, gdy sprawa wymaga jego decyzji.',
      },
      {
        title: 'Kadry i sprawy pracownicze',
        description:
          'Ten sam mechanizm działa do wewnątrz. Nasza Superkadrowa (superkadrowa.vercel.app) odpowiada zespołowi na pytania o urlopy i procedury, żeby kadry nie tłumaczyły tego samego po raz setny.',
      },
    ],
  },
  pricing: {
    title: 'Ile kosztuje automatyzacja obsługi klienta?',
    note: 'Ceny netto. Dokładną wycenę przygotowujemy po bezpłatnej konsultacji, bo zależy od liczby kanałów, integracji i skali zgłoszeń.',
    rows: [
      {
        name: 'Wdrożenie',
        price: 'od 5 000 zł',
        description:
          'Wąski zakres na start: jeden kanał, baza wiedzy, zasady przekazywania spraw do zespołu, testy i uruchomienie. Szersze projekty wyceniamy indywidualnie.',
      },
      {
        name: 'Utrzymanie Starter',
        price: '249 zł/mies.',
        description: 'Monitoring rozmów i drobne poprawki w bazie wiedzy przy niewielkiej liczbie zgłoszeń.',
      },
      {
        name: 'Utrzymanie Standard lub Premium',
        price: '499 albo 799 zł/mies.',
        description:
          'Rozwój bazy wiedzy, raporty z rozmów i zmiany w integracjach. Wariant Premium przy większej skali i szybszym czasie reakcji.',
      },
    ],
  },
  faq: [
    {
      question: 'Ile kosztuje automatyzacja obsługi klienta?',
      answer:
        'Wdrożenie zaczyna się od 5 000 zł netto przy wąskim zakresie, na przykład jeden kanał z bazą wiedzy o ofercie i zasadami przekazywania spraw do zespołu. Szersze projekty, z kilkoma kanałami i integracjami, wyceniamy indywidualnie po analizie potrzeb. Do tego dochodzi utrzymanie: 249, 499 albo 799 zł netto miesięcznie, zależnie od skali. Pierwsza konsultacja jest bezpłatna i kończy się konkretną wyceną.',
    },
    {
      question: 'Jak długo trwa wdrożenie?',
      answer:
        'Mniejsze wdrożenia zajmują od dwóch do czterech tygodni, licząc od pierwszej rozmowy do momentu, w którym agent obsługuje prawdziwe zgłoszenia. Większe projekty, z kilkoma kanałami i integracjami z systemami wewnętrznymi, to od jednego do trzech miesięcy. Najwięcej czasu zajmuje uporządkowanie wiedzy i dostępy do systemów. Warto zebrać cenniki, regulaminy i procedury zawczasu, bo to zwykle wąskie gardło.',
    },
    {
      question: 'Czy AI w obsłudze klienta zastąpi nasz zespół?',
      answer:
        'Nie i nie taki jest cel. Agent przejmuje sprawy powtarzalne, które zjadają większość czasu, a ludzie dostają te trudniejsze, w których naprawdę są potrzebni. W praktyce liczba zgłoszeń trafiających do zespołu spada, za to ich średnia trudność rośnie. Zdarza się, że firma po wdrożeniu przesuwa część osób z odpisywania na te same pytania do pracy przy sprzedaży albo utrzymaniu klienta.',
    },
    {
      question: 'Czy trzeba informować klienta, że rozmawia z systemem AI?',
      answer:
        'Tak. Od 2 sierpnia 2026 obowiązuje artykuł 50 unijnego AI Act, który nakazuje poinformować rozmówcę, że ma do czynienia z systemem sztucznej inteligencji. W naszych wdrożeniach agent mówi to na starcie rozmowy, niezależnie od kanału, i traktujemy to jako standard, a nie dodatek. Szczegóły przepisu i to, co dokładnie trzeba zrobić, opisaliśmy w osobnym artykule na blogu. Link znajdziesz w sekcji „Zobacz także”.',
    },
    {
      question: 'Czego nie warto automatyzować w obsłudze klienta?',
      answer:
        'Reklamacji, w których słychać emocje, spraw spornych oraz rozmów z klientem, który zaczyna już zdenerwowany. Do tego wszystkiego, co dotyczy pieniędzy w konkretnym przypadku: zwrotów poza regulaminem, rabatów, odstępstw od umowy. Agent te sytuacje rozpoznaje i przekazuje dalej razem z zapisem rozmowy. Naszym zdaniem próba automatyzowania takich spraw kosztuje firmę więcej, niż oszczędza.',
    },
    {
      question: 'Czy to zadziała przy naszym CRM i helpdesku?',
      answer:
        'Zwykle tak. Agenta łączymy z systemami, z których firma już korzysta: CRM, helpdeskiem, kalendarzem, sklepem internetowym czy systemem magazynowym. Jeśli system ma API, integracja jest kwestią konfiguracji. Przy starszych albo bardzo niszowych narzędziach sprawdzamy możliwości na konsultacji i mówimy wprost, gdy czegoś nie da się podpiąć sensownie. Lepiej to wiedzieć przed wyceną niż w trakcie projektu.',
    },
    {
      question: 'Co z danymi klientów i RODO?',
      answer:
        'Dane przetwarzamy na serwerach w Polsce i Unii Europejskiej, a całość projektujemy zgodnie z RODO. Podpisujemy umowę powierzenia przetwarzania danych i pracujemy według standardów bezpieczeństwa zgodnych z normą ISO 27001. Wspólnie ustalamy, jakie dane agent w ogóle zbiera, jak długo są przechowywane i kto ma do nich dostęp. Zakres ograniczamy do tego, co jest potrzebne do załatwienia sprawy.',
    },
    {
      question: 'Mamy mały zespół, czy to ma dla nas sens?',
      answer:
        'Często ma większy niż w dużej firmie, bo w małym zespole każda godzina spędzona na odpisywaniu na te same pytania jest wyraźnie odczuwalna. Zaczynamy wtedy od jednego kanału i kilku typów spraw, zamiast od razu przebudowywać całą obsługę. Jeśli po pierwszych tygodniach widać efekt, dokładamy kolejne kanały. Jeśli nie widać, wiadomo to szybko i tanio.',
    },
  ],
  cta: {
    heading: 'Zobaczmy, co da się zautomatyzować u Ciebie',
    sub: 'Na bezpłatnej konsultacji dzielimy Twoje zgłoszenia na te dla agenta i te dla zespołu. Dostajesz mapę spraw i konkretną wycenę, bez zobowiązań.',
  },
  related: [
    { label: 'Wszystkie usługi AI', href: '/uslugi' },
    { label: 'Agent głosowy AI (telefon)', href: '/uslugi/agent-glosowy-ai' },
    { label: 'Chatbot AI (czat i komunikatory)', href: '/uslugi/chatbot-ai' },
    { label: 'Automatyzacja procesów AI', href: '/uslugi/automatyzacja-procesow-ai' },
    { label: 'AI Act a chatboty: obowiązki od sierpnia 2026', href: '/blog/ai-act-chatboty-obowiazki' },
    { label: 'Cennik wdrożeń AI', href: '/cennik' },
    { label: 'AI dla branż', href: '/branze' },
  ],
};

export default function Page() {
  return <SeoLanding content={content} />;
}
