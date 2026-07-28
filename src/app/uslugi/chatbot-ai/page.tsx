import type { Metadata } from 'next';
import SeoLanding, { SeoLandingContent } from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'Chatbot AI dla firm — wdrożenie, 23+ kanałów komunikacji',
  description:
    'Chatbot AI dla firm: jeden agent na stronie www i w 23+ kanałach — WhatsApp, Teams, Slack. Wdrożenie od 5 000 zł netto. Umów bezpłatną konsultację.',
  alternates: { canonical: '/uslugi/chatbot-ai' },
  openGraph: {
    title: 'Chatbot AI dla firm — jeden agent, 23+ kanałów komunikacji',
    description:
      'Wielokanałowy chatbot AI z wiedzą firmową: strona www, WhatsApp, Slack, Teams, Telegram, Discord. Wdrożenie od 5 000 zł netto, pierwsza konsultacja bezpłatna.',
    type: 'website',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

const content: SeoLandingContent = {
  path: '/uslugi/chatbot-ai',
  breadcrumbLabel: 'Chatbot AI dla firm',
  h1: 'Chatbot AI dla firm — jeden agent, 23+ kanałów komunikacji',
  lead:
    'Chatbot AI dla firm to agent tekstowy oparty na dużych modelach językowych, który rozumie pytania klientów, odpowiada na podstawie wiedzy firmowej i działa jednocześnie na stronie www oraz w ponad 23 kanałach, od WhatsAppa po Teams. W Infinity Tech wdrażamy takie agenty od 5 000 zł netto, z bezpłatną pierwszą konsultacją.',
  sections: [
    {
      heading: 'Agent AI a chatbot regułowy: na czym polega różnica',
      paragraphs: [
        'Klasyczny chatbot regułowy działa jak drzewko decyzyjne: rozpoznaje słowa kluczowe i odpowiada z góry zapisanym skryptem. Wystarczy, że klient sformułuje pytanie inaczej, niż przewidział autor scenariusza, i rozmowa kończy się komunikatem „nie rozumiem”. Dla firmy oznacza to zirytowanych klientów i zgłoszenia, które i tak wracają do ludzi.',
        'Agent AI do obsługi klienta działa inaczej. Opiera się na dużym modelu językowym, więc rozumie sens wypowiedzi, a nie tylko słowa kluczowe. Poradzi sobie z literówkami, potocznym językiem i pytaniami wielowątkowymi. Zamiast sztywnego skryptu dostaje wiedzę firmową i jasno wyznaczone granice, w których ma się poruszać. Efekt: naturalna rozmowa, ale pod kontrolą.',
      ],
      bullets: [
        'Chatbot regułowy odpowiada tylko na pytania przewidziane w scenariuszu',
        'Agent AI rozumie kontekst i intencję, także pytania zadane „po ludzku”',
        'Pamięta przebieg rozmowy, więc nie każe klientowi powtarzać danych',
        'Wykonuje działania: sprawdzi status zamówienia, umówi termin, założy zgłoszenie',
      ],
    },
    {
      heading: 'Chatbot wielokanałowy, czyli jedna wiedza we wszystkich kanałach',
      paragraphs: [
        'Klienci piszą tam, gdzie im wygodnie: jedni na czacie na stronie, inni na WhatsAppie, a zespół wewnętrzny siedzi na Slacku albo w Teams. Utrzymywanie osobnego bota w każdym kanale to podwójna praca i niespójne odpowiedzi. Dlatego budujemy jednego agenta i podpinamy go do ponad 23 kanałów komunikacji (m.in. WhatsApp, Slack, Microsoft Teams, Telegram, Discord) oraz na stronę www jako klasyczny chatbot.',
        'Agenta budujemy na OpenClaw, otwartym frameworku agentów AI, który zdobył ponad 380 tysięcy gwiazdek na GitHubie i w 60 dni od premiery stał się najpopularniejszym projektem serwisu. Dla Ciebie oznacza to jedną bazę wiedzy i jeden zestaw reguł dla wszystkich kanałów: klient dostaje tę samą odpowiedź niezależnie od tego, gdzie napisze. Nowy kanał dodajesz bez budowania bota od zera.',
      ],
    },
    {
      heading: 'Wiedza firmowa zamiast ogólników',
      paragraphs: [
        'Chatbot AI jest tak dobry, jak wiedza, na której pracuje. Dlatego przed startem zasilamy agenta Twoimi materiałami: cennikami, regulaminami, opisami produktów i usług, procedurami reklamacji, odpowiedziami na najczęstsze pytania. Agent odpowiada na podstawie tych źródeł, a nie ogólnej wiedzy modelu. Mówi więc o Twojej ofercie, Twoich terminach i Twoich zasadach. Bywa zresztą, że najdłużej trwa nie budowa agenta, tylko dotarcie do aktualnej wersji cennika.',
        'Gdy oferta się zmienia, aktualizujesz dokument w bazie wiedzy i agent od razu odpowiada po nowemu, bez przeklikiwania scenariuszy. A gdy pytanie wykracza poza przekazane źródła, agent mówi o tym wprost i kieruje rozmowę do pracownika, zamiast improwizować. To najprostszy sposób ograniczania halucynacji. Do zera ich nie sprowadza, ale sensownie przygotowana baza wiedzy robi tu największą różnicę.',
      ],
    },
    {
      heading: 'Agent AI do obsługi klienta, z człowiekiem w tle',
      paragraphs: [
        'Dobre wdrożenie chatbota AI nie polega na tym, żeby maszyna obsłużyła wszystko. Chodzi o to, żeby przejęła rozmowy powtarzalne, a trudne oddała ludziom w odpowiednim momencie. Nasz agent rozpoznaje sytuacje wymagające eskalacji: skomplikowaną reklamację, zdenerwowanego klienta albo wprost wyrażoną prośbę o kontakt z człowiekiem.',
        'Przekazanie nie oznacza startu od zera. Pracownik dostaje podsumowanie dotychczasowej rozmowy i zebrane dane, więc klient nie musi drugi raz opisywać sprawy. Z kolei statystyki rozmów pokazują, o co klienci pytają najczęściej i gdzie w bazie wiedzy są luki. To gotowa lista poprawek dla obsługi i marketingu.',
      ],
    },
  ],
  howTo: {
    title: 'Wdrożenie chatbota AI krok po kroku',
    steps: [
      {
        name: 'Bezpłatna konsultacja',
        text: 'Omawiamy Twoje procesy, kanały komunikacji i cele. Wskazujemy, które rozmowy agent przejmie najszybciej i jak zmierzysz efekt wdrożenia.',
      },
      {
        name: 'Baza wiedzy i reguły',
        text: 'Zbieramy dokumenty: cenniki, regulaminy, procedury, FAQ. Ustalamy ton wypowiedzi agenta, zakres jego kompetencji i zasady przekazywania rozmów do ludzi.',
      },
      {
        name: 'Budowa i integracje',
        text: 'Konfigurujemy agenta na frameworku OpenClaw, podpinamy wybrane kanały (strona www, WhatsApp, Slack, Teams i inne) oraz systemy firmowe: CRM, helpdesk, sklep.',
      },
      {
        name: 'Testy na realnych pytaniach',
        text: 'Sprawdzamy odpowiedzi na prawdziwych pytaniach klientów, poprawiamy braki w bazie wiedzy i dopracowujemy scenariusze eskalacji, zanim agent trafi do klientów.',
      },
      {
        name: 'Start i utrzymanie',
        text: 'Uruchamiamy agenta produkcyjnie. W ramach abonamentu monitorujemy rozmowy, uzupełniamy wiedzę i rozwijamy integracje wraz ze wzrostem potrzeb.',
      },
    ],
  },
  useCases: {
    title: 'Zastosowania chatbota AI w firmie',
    items: [
      {
        title: 'Obsługa klienta 24/7',
        description:
          'Agent odpowiada na pytania o ofertę, dostępność i procedury także w nocy i w weekendy, więc klient nie czeka do poniedziałku na prostą informację.',
      },
      {
        title: 'Kwalifikacja leadów',
        description:
          'Chatbot dopytuje o potrzeby, skalę i termin, zbiera dane kontaktowe i przekazuje handlowcom gotowe podsumowanie zamiast surowego formularza.',
      },
      {
        title: 'FAQ pracownicze',
        description:
          'Agent w Slacku lub Teams odpowiada zespołowi na pytania o urlopy, benefity i procedury wewnętrzne. HR nie odpisuje po raz setny na to samo.',
      },
      {
        title: 'Wsparcie sprzedaży',
        description:
          'Chatbot podpowiada produkty, tłumaczy różnice między wariantami i rozwiewa wątpliwości w momencie, w którym klient podejmuje decyzję o zakupie.',
      },
      {
        title: 'Statusy zamówień',
        description:
          'Po integracji ze sklepem lub systemem logistycznym agent sam podaje status zamówienia i przesyłki, bez angażowania biura obsługi.',
      },
    ],
  },
  pricing: {
    title: 'Ile kosztuje chatbot AI dla firm?',
    note: 'Dokładną wycenę przygotowujemy po bezpłatnej konsultacji, bo zależy od liczby kanałów, integracji i skali rozmów.',
    rows: [
      {
        name: 'Wdrożenie',
        price: 'od 5 000 zł netto',
        description:
          'Mały zakres: agent na stronie www lub w jednym kanale, baza wiedzy, testy i uruchomienie. Większe projekty wyceniamy indywidualnie.',
      },
      {
        name: 'Utrzymanie Starter',
        price: '249 zł/mies.',
        description: 'Podstawowe utrzymanie jednego agenta przy niewielkiej skali rozmów.',
      },
      {
        name: 'Utrzymanie Standard',
        price: '499 zł/mies.',
        description: 'Utrzymanie i rozwój bazy wiedzy przy rosnącej liczbie rozmów i kanałów.',
      },
      {
        name: 'Utrzymanie Premium',
        price: '799 zł/mies.',
        description: 'Pełna opieka nad agentem przy dużej skali: priorytetowe wsparcie i rozwój integracji.',
      },
    ],
  },
  faq: [
    {
      question: 'Ile kosztuje wdrożenie chatbota AI dla firmy?',
      answer:
        'Wdrożenie zaczyna się od 5 000 zł netto przy małym zakresie, np. chatbot na stronę www z bazą wiedzy o ofercie. Projekty z wieloma kanałami i integracjami wyceniamy indywidualnie. Do tego dochodzi utrzymanie: 249, 499 lub 799 zł miesięcznie, zależnie od skali. Pierwsza konsultacja jest bezpłatna. Po niej dostajesz konkretną wycenę.',
    },
    {
      question: 'Jak długo trwa wdrożenie chatbota AI?',
      answer:
        'W małych firmach zwykle 2–4 tygodnie od konsultacji do startu produkcyjnego. Przy większych organizacjach, wielu kanałach i integracjach z systemami wewnętrznymi trzeba liczyć od 1 do 3 miesięcy. Najwięcej czasu zajmuje uporządkowanie bazy wiedzy i testy odpowiedzi, dlatego warto wcześnie zebrać dokumenty, cenniki i procedury, z których agent ma korzystać.',
    },
    {
      question: 'Czy chatbot AI jest zgodny z RODO?',
      answer:
        'Tak. Dane klientów przetwarzamy na serwerach zlokalizowanych w Polsce, a wdrożenia projektujemy w pełnej zgodności z RODO, według standardów zgodnych z ISO 27001. Wspólnie ustalamy, jakie dane agent może zbierać, jak długo są przechowywane i kto ma do nich dostęp. Zakres zbieranych danych ograniczamy przy tym do minimum potrzebnego w rozmowie.',
    },
    {
      question: 'Czy chatbot AI zastąpi nasze biuro obsługi klienta?',
      answer:
        'Nie, i nie taki jest cel. Agent przejmuje pytania powtarzalne: o ofertę, statusy, procedury, które zajmują większość czasu zespołu. Sprawy złożone, reklamacje i rozmowy wymagające decyzji trafiają do ludzi razem z podsumowaniem dotychczasowej rozmowy. W praktyce BOK obsługuje mniej zgłoszeń, za to trudniejszych, i ma na nie więcej czasu.',
    },
    {
      question: 'Skąd pewność, że chatbot nie będzie zmyślał odpowiedzi?',
      answer:
        'Agent odpowiada wyłącznie na podstawie przekazanej wiedzy firmowej, nie ogólnej wiedzy modelu. Gdy nie znajdzie odpowiedzi w źródłach, mówi o tym wprost i proponuje kontakt z pracownikiem, zamiast improwizować. Przed startem testujemy go na realnych pytaniach klientów, a po wdrożeniu monitorujemy rozmowy i uzupełniamy bazę wiedzy tam, gdzie pojawiają się luki.',
    },
    {
      question: 'Z jakimi systemami można zintegrować chatbota AI?',
      answer:
        'Standardowo podpinamy kanały komunikacji: stronę www, WhatsApp, Slack, Teams, Telegram czy Discord, łącznie ponad 23 kanały. Po stronie systemów firmowych integrujemy agenta m.in. z CRM, helpdeskiem, sklepem internetowym czy kalendarzem, dzięki czemu sprawdza statusy zamówień, zakłada zgłoszenia i umawia terminy. Zakres integracji ustalamy podczas bezpłatnej konsultacji.',
    },
  ],
  cta: {
    heading: 'Sprawdź, co chatbot AI zrobi dla Twojej firmy',
    sub: 'Bezpłatna konsultacja: na Twoich procesach pokażemy, które rozmowy agent przejmie od pierwszego dnia. Bez zobowiązań.',
  },
  serviceName: 'Chatbot AI dla firm',
  serviceDescription:
    'Wdrożenia wielokanałowych chatbotów AI dla firm: agent tekstowy na stronie www i w ponad 23 kanałach komunikacji, z wiedzą firmową i przekazywaniem rozmów do człowieka.',
  related: [
    { label: 'Agent głosowy AI', href: '/uslugi/agent-glosowy-ai' },
    { label: 'Voicebot czy chatbot: co wybrać', href: '/blog/voicebot-czy-chatbot' },
    { label: 'Automatyzacja procesów AI', href: '/uslugi/automatyzacja-procesow-ai' },
    { label: 'Automatyzacja obsługi klienta', href: '/uslugi/automatyzacja-obslugi-klienta' },
    { label: 'AI dla kancelarii prawnej', href: '/branze/ai-dla-kancelarii' },
    { label: 'Chatbot dla sklepu internetowego', href: '/branze/chatbot-dla-sklepu-internetowego' },
    { label: 'Cennik wdrożeń AI', href: '/cennik' },
  ],
};

export default function Page() {
  return <SeoLanding content={content} />;
}
