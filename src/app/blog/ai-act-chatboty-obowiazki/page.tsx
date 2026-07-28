import type { Metadata } from 'next';
import BlogArticle, { BlogArticleContent } from '@/components/BlogArticle';

export const metadata: Metadata = {
  title: 'AI Act a chatboty: co obowiązuje od 2 sierpnia 2026',
  description:
    'Od 2 sierpnia 2026 chatbot i voicebot muszą informować, że rozmówca ma do czynienia z maszyną. Co trzeba zrobić i czego przesunięcie terminów nie objęło.',
  alternates: { canonical: '/blog/ai-act-chatboty-obowiazki' },
  openGraph: {
    title: 'AI Act a chatboty: co obowiązuje od 2 sierpnia 2026',
    description:
      'Obowiązek przejrzystości z artykułu 50 AI Act wchodzi 2 sierpnia 2026 i nie został przesunięty. Co to znaczy dla firmy, która ma chatbota albo voicebota.',
    type: 'article',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

const content: BlogArticleContent = {
  path: '/blog/ai-act-chatboty-obowiazki',
  title: 'AI Act a chatboty: co obowiązuje od 2 sierpnia 2026',
  description:
    'Od 2 sierpnia 2026 chatbot i voicebot muszą informować, że rozmówca ma do czynienia z maszyną. Co trzeba zrobić i czego przesunięcie terminów nie objęło.',
  datePublished: '2026-07-26',
  sections: [
    {
      paragraphs: [
        'Drugiego sierpnia 2026 zaczyna obowiązywać artykuł 50 unijnego rozporządzenia o sztucznej inteligencji, czyli AI Act. Dla firm, które mają na stronie chatbota albo odbierają telefony voicebotem, to najbardziej namacalny przepis z całego rozporządzenia. Mówi w skrócie tyle: człowiek po drugiej stronie ma wiedzieć, że rozmawia z maszyną.',
        'Piszemy o tym, bo w ostatnich miesiącach sporo terminów z AI Act zostało przesuniętych i łatwo o wrażenie, że przesunęło się wszystko. Nie przesunęło. Obowiązki przejrzystości z artykułu 50 wchodzą zgodnie z pierwotnym harmonogramem, mimo pakietu zmian uzgodnionego w Unii w maju 2026. Przesunięcia dotyczą systemów wysokiego ryzyka, a to zupełnie inna kategoria.',
        'Od razu zastrzeżenie, żeby nie było nieporozumień. Jesteśmy firmą technologiczną, nie kancelarią. Ten tekst opisuje, jak rozumiemy przepis od strony wdrożeniowej, i tak też konfigurujemy agentów u klientów. Ocenę prawną swojej konkretnej sytuacji zamówcie u prawnika, bo szczegóły potrafią zależeć od tego, co dokładnie robi Wasz system.',
      ],
    },
    {
      heading: 'Co dokładnie nakazuje artykuł 50',
      paragraphs: [
        'Przepis dotyczy systemów AI przeznaczonych do bezpośredniej interakcji z człowiekiem. Chatbot na stronie sklepu, agent głosowy odbierający infolinię, asystent w komunikatorze. Wszystkie mieszczą się w tej definicji.',
        'Obowiązek sprowadza się do poinformowania osoby, że wchodzi w interakcję z systemem sztucznej inteligencji. Informacja ma trafić do niej najpóźniej przy pierwszym kontakcie i ma być zrozumiała. Nie chodzi więc o linijkę w regulaminie, do którego nikt nie zagląda, tylko o komunikat w miejscu, w którym rozmowa się zaczyna.',
        'Rozporządzenie przewiduje wyjątek dla sytuacji, w których jest to oczywiste dla rozsądnie zorientowanej osoby. W praktyce nie polecamy opierania się na tym wyjątku przy obsłudze klienta. Ocena, co jest oczywiste, należy do organu, a nie do Was, a koszt dopisania jednego zdania powitalnego jest zerowy.',
        'Ten sam artykuł obejmuje też inne rzeczy: oznaczanie treści generowanych przez AI, deepfake i systemy rozpoznawania emocji. Dla typowej firmy usługowej najistotniejszy jest jednak wątek chatbotowy, bo dotyczy narzędzia, które być może już macie uruchomione.',
      ],
    },
    {
      heading: 'Co to znaczy przy wdrożeniu, punkt po punkcie',
      paragraphs: [
        'Sprowadza się to do kilku konkretnych decyzji konfiguracyjnych. Żadna z nich nie jest trudna technicznie. Trudność polega na tym, żeby o nich pamiętać we wszystkich kanałach, a łatwo poprawić sam czat na stronie i uznać temat za zamknięty.',
      ],
      bullets: [
        'Powitanie agenta zawiera informację, że jest automatem. W rozmowie głosowej to pierwsze zdanie, zanim padnie pytanie o sprawę. Na czacie widoczny komunikat startowy, nie tekst ukryty pod ikoną.',
        'Informacja pojawia się w każdym kanale osobno. Agent wpięty w czat na stronie, Messengera i WhatsAppa musi przedstawiać się w każdym z nich, bo za każdym razem jest to pierwszy kontakt.',
        'Prośba o człowieka działa zawsze i agent o tej możliwości mówi. To akurat nie wynika wprost z artykułu 50, ale jest tanim sposobem, żeby rozmowa nie kończyła się poczuciem zamknięcia w pętli.',
        'Nazwa agenta nie sugeruje, że to pracownik. Imię jest w porządku, o ile obok pada informacja o automacie. Podpisywanie się stanowiskiem w rodzaju „konsultant" bez takiego zastrzeżenia jest proszeniem się o kłopot.',
        'Zmiana obejmuje też agentów już działających. Przepis nie dotyczy wyłącznie nowych wdrożeń, więc jeśli chatbot stoi u Was od dwóch lat, powitanie trzeba sprawdzić tak samo.',
      ],
    },
    {
      heading: 'Co już obowiązuje, a co przesunięto',
      paragraphs: [
        'Harmonogram AI Act jest rozłożony na lata i to główne źródło zamieszania. Poniżej stan na koniec lipca 2026, uporządkowany od tego, co już działa, po to, co dopiero przed nami.',
      ],
      bullets: [
        'Od 2 lutego 2025 obowiązuje zakaz wybranych zastosowań AI oraz obowiązek zapewnienia kompetencji w zakresie AI osobom, które takich systemów używają w firmie.',
        'Od 2 sierpnia 2025 obowiązują przepisy dotyczące modeli ogólnego przeznaczenia, czyli tej warstwy, którą dostarczają dostawcy modeli językowych.',
        'Od 2 sierpnia 2026 wchodzą obowiązki przejrzystości z artykułu 50. To ten termin, o którym jest ten tekst.',
        'Do 2 grudnia 2027 przesunięto szczegółowe wymagania dla systemów wysokiego ryzyka z załącznika III, gdzie mieści się między innymi rekrutacja i edukacja.',
        'Do 2 sierpnia 2028 przesunięto wymagania dla AI wbudowanej w produkty objęte odrębnymi regulacjami.',
      ],
    },
    {
      heading: 'Rekrutacja to osobna historia',
      paragraphs: [
        'Warto to rozdzielić, bo bywa mylone. Chatbot obsługujący klientów podlega obowiązkowi informacyjnemu i tyle. System, który uczestniczy w selekcji kandydatów do pracy, trafia do zupełnie innej kategorii: załącznik III klasyfikuje zatrudnienie jako obszar wysokiego ryzyka.',
        'Dla systemów wysokiego ryzyka rozporządzenie przewiduje znacznie więcej niż zdanie w powitaniu: dokumentację, zarządzanie ryzykiem, nadzór człowieka, rejestrowanie zdarzeń. Te wymagania zostały przesunięte na grudzień 2027, więc jest czas na przygotowanie. Nie znaczy to jednak, że temat można odłożyć i zapomnieć.',
        'Dlatego przy wdrożeniach rekrutacyjnych trzymamy się jednej zasady od początku, niezależnie od dat w rozporządzeniu. Agent porządkuje zgłoszenia i przygotowuje rekomendacje, natomiast nikogo nie odrzuca samodzielnie. Decyzja o kandydacie zostaje po stronie rekrutera i ma być możliwa do prześledzenia. Tak jest uczciwiej wobec kandydatów i wygodniej, gdy trzeba będzie pokazać, jak system działa.',
      ],
    },
    {
      heading: 'Jak to wygląda u nas',
      paragraphs: [
        'Nasi agenci przedstawiają się jako asystent automatyczny od początku, jeszcze zanim przepis zaczął obowiązywać. Nie z przezorności regulacyjnej. Z prostszego powodu: rozmowa idzie lepiej, kiedy dzwoniący wie, z czym ma do czynienia, i nie traci czasu na sprawdzanie, czy po drugiej stronie jest człowiek.',
        'Można to usłyszeć bez umawiania się z nami. Pod adresem asystenci-glosowi.vercel.app udostępniamy demo pięciu asystentów branżowych, a pod pks-gryfice-demo.vercel.app agenta odpowiadającego na pytania o rozkłady jazdy. To drugie zbudowaliśmy na publicznie dostępnych danych rozkładowych PKS Gryfice; przewoźnik nie jest naszym klientem, to nasza własna prezentacja techniczna.',
        'Jeżeli macie już uruchomionego agenta, niekoniecznie od nas, i chcecie sprawdzić samo powitanie pod kątem sierpniowego terminu, odezwijcie się. Przesłuchanie kilku nagrań i przejrzenie konfiguracji kanałów zajmuje krótko i nie robimy z tego osobnej usługi.',
      ],
    },
    {
      heading: 'Czego ten tekst nie załatwia',
      paragraphs: [
        'Nie zastępuje opinii prawnej i nie jest listą kontrolną zgodności. AI Act ma kilkaset stron, a to, które przepisy dotyczą akurat Waszego systemu, zależy od jego roli i od tego, czy występujecie jako dostawca, czy jako podmiot stosujący. Ta różnica bywa istotna, a rozstrzyga ją prawnik, nie firma wdrożeniowa.',
        'Nie podajemy tu też konkretnych kwot kar. Rozporządzenie ustala je jako procent światowego obrotu z górnymi widełkami zależnymi od rodzaju naruszenia, a przekładanie tego na złotówki dla konkretnej firmy jest robotą dla kancelarii. Wolimy tego nie zgadywać.',
        'Jedno da się powiedzieć bez zastrzeżeń. Dopisanie zdania o tym, że rozmówca rozmawia z automatem, jest najtańszą rzeczą w całym tym rozporządzeniu. Jeśli macie chatbota albo voicebota, zacznijcie od tego, zanim zaczniecie czytać resztę.',
      ],
    },
  ],
  howTo: {
    title: 'Jak sprawdzić własnego agenta przed 2 sierpnia',
    steps: [
      {
        name: 'Wypisz wszystkie kanały, w których agent odpowiada',
        text: 'Czat na stronie, Messenger, WhatsApp, infolinia, formularz z automatyczną odpowiedzią. Każdy z nich to osobne pierwsze zetknięcie z systemem, więc każdy trzeba sprawdzić oddzielnie.',
      },
      {
        name: 'Przeczytaj i przesłuchaj powitanie w każdym z nich',
        text: 'Sprawdź, czy informacja o tym, że to system automatyczny, pada od razu i czy jest widoczna bez klikania. Ukrycie jej w regulaminie albo pod ikoną informacji nie spełnia sensu przepisu.',
      },
      {
        name: 'Sprawdź, czy nazwa agenta nikogo nie wprowadza w błąd',
        text: 'Imię jest w porządku. Podpis sugerujący, że to pracownik działu obsługi, bez zaznaczenia, że rozmowa jest automatyczna, już nie.',
      },
      {
        name: 'Upewnij się, że prośba o człowieka działa',
        text: 'Zadzwoń albo napisz i poproś o połączenie z pracownikiem. Sprawdź, czy agent to rozpoznaje i czy przekazuje sprawę razem z tym, co już ustalił.',
      },
      {
        name: 'Skonsultuj wątpliwe przypadki z prawnikiem',
        text: 'Jeśli agent bierze udział w rekrutacji, ocenie zdolności kredytowej albo w innym obszarze z załącznika III, obowiązki są znacznie szersze niż samo powitanie. To moment na rozmowę z kancelarią.',
      },
    ],
  },
  faq: [
    {
      question: 'Czy obowiązek informowania o chatbocie został przesunięty?',
      answer:
        'Nie. Obowiązki przejrzystości z artykułu 50 zaczynają obowiązywać 2 sierpnia 2026 zgodnie z pierwotnym harmonogramem. Pakiet zmian uzgodniony w Unii w maju 2026 przesunął wymagania dla systemów wysokiego ryzyka, natomiast artykułu 50 nie ruszył.',
    },
    {
      question: 'Wystarczy zapis w regulaminie serwisu?',
      answer:
        'Sens przepisu jest inny. Informacja ma dotrzeć do osoby najpóźniej przy pierwszym kontakcie i ma być zrozumiała, a regulaminu nikt nie czyta przed napisaniem pierwszej wiadomości na czacie. Bezpieczniej umieścić ją w powitaniu agenta, w każdym kanale osobno.',
    },
    {
      question: 'Czy agent może mieć imię?',
      answer:
        'Może. Nasza Janina ze Superkadrowej ma imię i nikomu to nie przeszkadza, bo obok pada informacja, że to asystent automatyczny. Problem zaczyna się wtedy, gdy imię i sposób pisania mają sprawiać wrażenie, że po drugiej stronie siedzi pracownik.',
    },
    {
      question: 'Czy to dotyczy chatbota, który działa u nas od dawna?',
      answer:
        'Tak. Przepis odnosi się do systemów w użyciu, nie wyłącznie do nowych wdrożeń. Jeśli agent stoi u Was od kilku lat i nikt nie zaglądał do jego powitania, to dobry moment, żeby to zrobić.',
    },
    {
      question: 'Czy voicebot musi to mówić przy każdej rozmowie?',
      answer:
        'Każde połączenie jest osobnym kontaktem, więc tak, informacja powinna paść na początku rozmowy. Nie musi to być formuła prawnicza. Wystarczy zdanie w rodzaju „dzień dobry, tu automatyczny asystent", powiedziane naturalnie.',
    },
    {
      question: 'Co z agentem, który obsługuje rekrutację?',
      answer:
        'To osobna kategoria. Zatrudnienie jest w załączniku III wśród zastosowań wysokiego ryzyka, a wymagania dla nich sięgają dużo dalej niż powitanie: dokumentacja, nadzór człowieka, rejestrowanie zdarzeń. Te obowiązki przesunięto na 2 grudnia 2027, ale zasadę nadzoru człowieka warto wdrożyć od razu.',
    },
    {
      question: 'Czy pomagacie doprowadzić agenta do zgodności?',
      answer:
        'Konfigurację agenta ustawiamy tak, żeby przedstawiał się od pierwszego zdania, i robimy to standardowo, także w istniejących wdrożeniach. Nie wydajemy natomiast opinii prawnych ani zaświadczeń o zgodności z AI Act, bo to nie jest rola firmy technologicznej.',
    },
  ],
  related: [
    { label: 'RODO a chatbot i voicebot: gdzie trafiają dane z rozmów', href: '/blog/rodo-a-chatbot-i-voicebot' },
    { label: 'Słownik AI: AI Act, RODO, halucynacja i reszta pojęć', href: '/slownik' },
    { label: 'Chatbot AI dla firm', href: '/uslugi/chatbot-ai' },
    { label: 'Agent głosowy AI', href: '/uslugi/agent-glosowy-ai' },
    { label: 'AI w rekrutacji', href: '/branze/ai-w-rekrutacji' },
    { label: 'AI dla kancelarii prawnej', href: '/branze/ai-dla-kancelarii' },
    { label: 'Ile kosztuje wdrożenie AI', href: '/cennik' },
  ],
  ctaHeading: 'Sprawdzimy powitanie Waszego agenta',
  ctaSub:
    'Jeśli macie już chatbota albo voicebota i chcecie przejrzeć konfigurację przed sierpniowym terminem, odezwijcie się. Pierwsza rozmowa jest bezpłatna, a przy okazji powiemy, co jeszcze da się poprawić w samych rozmowach.',
};

export default function Page() {
  return <BlogArticle content={content} />;
}
