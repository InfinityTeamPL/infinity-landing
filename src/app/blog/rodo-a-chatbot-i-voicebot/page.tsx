import type { Metadata } from 'next';
import BlogArticle, { BlogArticleContent } from '@/components/BlogArticle';

export const metadata: Metadata = {
  title: 'RODO a chatbot i voicebot: gdzie trafiają dane z rozmów',
  description:
    'Kto odpowiada za dane z rozmowy z agentem AI, gdzie fizycznie leżą nagrania, co musi znaleźć się w umowie powierzenia i kiedy potrzebna jest ocena skutków.',
  alternates: { canonical: '/blog/rodo-a-chatbot-i-voicebot' },
  openGraph: {
    title: 'RODO a chatbot i voicebot: gdzie trafiają dane z rozmów',
    description:
      'Podstawa prawna, umowa powierzenia, miejsce serwera i transfer poza Europę. Praktyczna lista pytań, które warto zadać dostawcy agenta AI przed podpisaniem umowy.',
    type: 'article',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

const content: BlogArticleContent = {
  path: '/blog/rodo-a-chatbot-i-voicebot',
  title: 'RODO a chatbot i voicebot: gdzie trafiają dane z rozmów',
  description:
    'Kto odpowiada za dane z rozmowy z agentem AI, gdzie fizycznie leżą nagrania, co musi znaleźć się w umowie powierzenia i kiedy potrzebna jest ocena skutków.',
  datePublished: '2026-07-26',
  sections: [
    {
      paragraphs: [
        'To jest pytanie, które pada na prawie każdej pierwszej rozmowie o wdrożeniu. Zwykle brzmi krótko: gdzie trafiają te nagrania. Czasem pada w wersji ostrzejszej, po historiach o firmach, które wkleiły dane klientów do publicznego czatu i dowiedziały się później, że posłużyły one do uczenia modelu.',
        'Obawa jest zasadna, a odpowiedź prostsza, niż się wydaje. Agent AI przetwarzający dane osobowe podlega tym samym zasadom, co każdy inny system w firmie. Nie ma tu osobnego reżimu prawnego dla sztucznej inteligencji, przynajmniej na gruncie RODO. Nowe obowiązki dokłada dopiero AI Act, ale to inna warstwa i piszemy o niej osobno.',
        'Jak zwykle zastrzeżenie: jesteśmy firmą technologiczną, nie kancelarią. Poniżej opisujemy, jak to wygląda od strony wdrożeniowej i o co warto zapytać dostawcę. Ocena zgodności Waszego konkretnego procesu należy do prawnika albo do inspektora ochrony danych.',
      ],
    },
    {
      heading: 'Kto jest kim, czyli administrator i podmiot przetwarzający',
      paragraphs: [
        'Od tego trzeba zacząć, bo cała reszta z tego wynika. Administratorem danych jesteście Wy, czyli firma, która obsługuje swoich klientów. To Wy decydujecie, po co i w jaki sposób te dane są przetwarzane.',
        'Firma wdrożeniowa, która utrzymuje agenta, jest podmiotem przetwarzającym. Działa na Wasze polecenie i w granicach, które jej wyznaczycie. Dostawca modelu językowego znajduje się jeszcze dalej w łańcuchu, jako dalszy podmiot przetwarzający.',
        'Ta konstrukcja ma praktyczną konsekwencję, o której łatwo zapomnieć przy podpisywaniu umowy. Odpowiedzialność wobec Waszego klienta zostaje po Waszej stronie. Jeśli agent zapisze nagranie tam, gdzie nie powinien, tłumaczenie się przed osobą, której dane dotyczą, i przed organem należy do administratora. Dlatego warto sprawdzić łańcuch podwykonawców, zanim cokolwiek ruszy, a nie po incydencie.',
      ],
    },
    {
      heading: 'Umowa powierzenia i co w niej sprawdzić',
      paragraphs: [
        'Umowa powierzenia przetwarzania danych jest wymagana zawsze, gdy zewnętrzna firma przetwarza dane w Waszym imieniu. Przy agencie AI dotyczy to nagrań rozmów, transkrypcji, danych kontaktowych i wszystkiego, co dzwoniący poda w rozmowie.',
        'Sama umowa to formalność, którą każdy dostawca ma gotową. Ciekawsze jest to, co w niej faktycznie stoi. Poniżej rzeczy, na które patrzymy sami, kiedy jesteśmy po drugiej stronie takiej rozmowy.',
      ],
      bullets: [
        'Lista dalszych podmiotów przetwarzających. Kto jeszcze dotyka tych danych: dostawca modelu, dostawca syntezy mowy, operator telefonii, dostawca serwerowni. Ta lista powinna być jawna, a nie odsyłać do bliżej nieokreślonych partnerów.',
        'Miejsce przetwarzania, podane konkretnie. Nie „chmura", tylko kraj i dostawca infrastruktury. To pytanie, na które da się odpowiedzieć jednym zdaniem, a wymijająca odpowiedź sama w sobie jest odpowiedzią.',
        'Okres przechowywania nagrań i transkrypcji oraz sposób ich usuwania. Domyślne ustawienia dostawców bywają hojne w jedną stronę, więc to warto ustalić samodzielnie zamiast przyjmować to, co przyszło w standardzie.',
        'Zapis o tym, że treść rozmów nie służy do uczenia modeli. Poważni dostawcy modeli oferują tryb, w którym dane z zapytań nie zasilają treningu, ale trzeba to włączyć i mieć na piśmie.',
        'Procedura na wypadek naruszenia. Kto kogo zawiadamia i w jakim czasie, żeby administrator zdążył ze zgłoszeniem do organu.',
      ],
    },
    {
      heading: 'Podstawa prawna i informowanie dzwoniącego',
      paragraphs: [
        'Przetwarzanie potrzebuje podstawy prawnej. Przy obsłudze klienta najczęściej jest nią wykonanie umowy albo prawnie uzasadniony interes administratora, rzadziej zgoda. Dobór podstawy to rozmowa z prawnikiem, natomiast wniosek wdrożeniowy jest jeden: podstawa musi być ustalona przed startem, a nie dopisana później do dokumentacji.',
        'Osobno trzeba potraktować nagrywanie rozmów. Samo nagranie jest przetwarzaniem danych i wymaga poinformowania rozmówcy, zanim zacznie mówić. To ten komunikat, który wszyscy znamy z infolinii i który brzmi drętwo, ale jest potrzebny.',
        'Od 2 sierpnia 2026 dochodzi do tego druga informacja, tym razem z AI Act: rozmówca ma wiedzieć, że rozmawia z systemem AI. To dwa różne obowiązki z dwóch różnych aktów prawnych, choć w praktyce mieszczą się w jednym zdaniu powitania. Rozpisaliśmy ten wątek w osobnym tekście.',
        'Warto też przemyśleć, ile danych agent w ogóle zbiera. Zasada minimalizacji działa tu bardzo praktycznie: przy pytaniu o godziny otwarcia albo o rozkład jazdy agent nie potrzebuje żadnych danych osobowych i nie ma powodu, żeby cokolwiek zapisywał. Nasze wdrożenia domyślnie zbierają tylko to, co jest niezbędne do załatwienia konkretnej sprawy.',
      ],
    },
    {
      heading: 'Gdzie fizycznie leżą dane i co z transferem poza Europę',
      paragraphs: [
        'To pytanie sprowadza się do dwóch osobnych rzeczy, które bywają mylone. Pierwsza to miejsce, gdzie stoi serwer z aplikacją, nagraniami i bazą wiedzy. Tu odpowiedź jest w pełni pod kontrolą i u nas brzmi: Polska albo Unia Europejska, w izolowanej instancji przypisanej do jednego klienta.',
        'Druga to miejsce, gdzie działa model językowy, do którego agent wysyła zapytania. Jeśli korzystacie z modelu amerykańskiego dostawcy, dane opuszczają Europejski Obszar Gospodarczy i potrzebna jest podstawa takiego transferu. Nie jest to sytuacja niemożliwa do ułożenia, bo mechanizmy prawne istnieją i korzystają z nich tysiące firm, ale trzeba to świadomie zaadresować, a nie przemilczeć.',
        'Są dwa sposoby, żeby ten problem po prostu zniknął. Pierwszy to model uruchomiony lokalnie, na infrastrukturze w Europie; jakość modeli otwartych bywa wystarczająca do wielu zadań obsługowych, choć nie do wszystkich i nie w każdej dziedzinie. Drugi to wybór dostawcy z przetwarzaniem w Unii. Który wariant ma sens, zależy od tego, jak wrażliwe dane padają w rozmowach.',
        'Osobno warto sprawdzić samą syntezę i rozpoznawanie mowy, bo to bywa pomijane. Głos też jest danymi, a ścieżka nagrania nie musi pokrywać się ze ścieżką tekstu.',
      ],
    },
    {
      heading: 'BYOK, czyli własne klucze i mniej pośredników',
      paragraphs: [
        'Jest w tym wszystkim rozwiązanie, które upraszcza sporo tematów naraz. BYOK oznacza, że korzystacie z własnego konta u dostawcy modelu, a firma wdrożeniowa dostaje jedynie klucz dostępowy i pobiera opłatę za utrzymanie agenta.',
        'Z punktu widzenia ochrony danych zmienia to układ relacji. Umowę z dostawcą modelu macie własną, warunki przetwarzania negocjujecie bezpośrednio, a łańcuch podwykonawców jest o jedno ogniwo krótszy. Przy okazji za zużycie modelu płacicie po cenniku dostawcy, bez marży pośrednika.',
        'Nie jest to rozwiązanie dla każdego, bo ktoś po Waszej stronie musi zarządzać kontem i pilnować limitów. Przy danych wrażliwych zwykle jednak warto. U nas klucze API są szyfrowane, a przy wymaganiach idących dalej możliwa jest instalacja na Waszej własnej infrastrukturze.',
      ],
    },
    {
      heading: 'Kiedy potrzebna jest ocena skutków',
      paragraphs: [
        'RODO wymaga oceny skutków dla ochrony danych, gdy przetwarzanie może powodować wysokie ryzyko dla praw osób. W praktyce chatbot odpowiadający na pytania o status zamówienia rzadko wchodzi w ten obszar. Agent działający na danych o zdrowiu, w rekrutacji albo przy ocenie zdolności finansowej to zupełnie inna rozmowa.',
        'Nie rozstrzygniemy za Was, czy ocena jest potrzebna, bo to zależy od skali, rodzaju danych i kontekstu. Powiemy natomiast wprost, kiedy naszym zdaniem temat trzeba przegadać z inspektorem ochrony danych zamiast iść dalej. Wolimy stracić tydzień na starcie niż tłumaczyć się razem z klientem po fakcie.',
        'Przy okazji: rekrutacja jest obszarem, w którym RODO i AI Act nakładają się na siebie. RODO każe zadbać o podstawę i informowanie kandydatów, a AI Act zalicza zatrudnienie do zastosowań wysokiego ryzyka. Niezależnie od terminów w rozporządzeniu trzymamy tam jedną zasadę: agent porządkuje i rekomenduje, a decyzję o człowieku podejmuje człowiek.',
      ],
    },
    {
      heading: 'Lista pytań do dostawcy',
      paragraphs: [
        'Jeśli z całego tekstu mielibyście zapamiętać jedną rzecz, to tę listę. Są to pytania, na które dostawca agenta AI powinien odpowiedzieć konkretnie i od ręki. Odpowiedź wymijająca przy którymkolwiek z nich mówi więcej niż cała prezentacja.',
      ],
      bullets: [
        'W którym kraju stoi serwer z aplikacją i nagraniami, i czyja to infrastruktura?',
        'Czy instancja jest wydzielona dla nas, czy współdzielona z innymi klientami?',
        'Którego dostawcy modelu używacie i czy dane z zapytań mogą trafić do uczenia?',
        'Czy dane opuszczają Europejski Obszar Gospodarczy, a jeśli tak, na jakiej podstawie?',
        'Jak długo przechowywane są nagrania i transkrypcje, i kto może je odsłuchać?',
        'Czy możemy korzystać z własnych kluczy API, a docelowo z instalacji na własnym serwerze?',
        'Co się dzieje z danymi po zakończeniu współpracy i w jakim terminie są usuwane?',
      ],
    },
  ],
  faq: [
    {
      question: 'Czy dane z rozmów z chatbotem służą do uczenia modeli AI?',
      answer:
        'Zależy od dostawcy i od ustawień, dlatego trzeba to sprawdzić, a nie zakładać. Poważni dostawcy modeli udostępniają tryb, w którym treść zapytań nie zasila treningu, ale bywa on opcjonalny. My ustawiamy go domyślnie i zapisujemy w umowie powierzenia. W wariancie z własnymi kluczami API sprawdzacie to bezpośrednio na swoim koncie.',
    },
    {
      question: 'Czy trzeba pytać dzwoniącego o zgodę na rozmowę z botem?',
      answer:
        'Zgoda i informacja to dwie różne rzeczy. Zgoda jest jedną z możliwych podstaw przetwarzania i przy obsłudze klienta zwykle nie ona wchodzi w grę. Informacja jest natomiast wymagana: o nagrywaniu na gruncie RODO, a od 2 sierpnia 2026 dodatkowo o tym, że rozmówca ma do czynienia z systemem AI, na gruncie AI Act.',
    },
    {
      question: 'Gdzie leżą dane przy Waszych wdrożeniach?',
      answer:
        'Aplikacja, nagrania, transkrypcje i baza wiedzy stoją na serwerach w Polsce lub w Unii Europejskiej, w instancji wydzielonej dla jednego klienta. Stosujemy standardy bezpieczeństwa zgodne z normą ISO 27001; nie posiadamy certyfikatu tej normy i nie twierdzimy inaczej. Kwestię modelu językowego ustalamy osobno, bo tu wybór należy do klienta.',
    },
    {
      question: 'Czy agent AI może przetwarzać dane o zdrowiu?',
      answer:
        'Może, ale to dane szczególnej kategorii i wymagania są wtedy ostrzejsze: węższe podstawy przetwarzania, częściej potrzebna ocena skutków, zwykle też instalacja na infrastrukturze klienta. Przy wdrożeniach w przychodniach projektujemy zakres tak, żeby agent obsługiwał rejestrację i organizację wizyt bez wchodzenia w treść dokumentacji medycznej.',
    },
    {
      question: 'Co się dzieje z danymi, gdy zakończymy współpracę?',
      answer:
        'Powinno to być zapisane w umowie powierzenia razem z terminem. U nas dane są usuwane albo zwracane, zależnie od ustaleń, a instancja jest wygaszana. Warto to sprawdzić u każdego dostawcy przed podpisaniem, bo po zakończeniu współpracy rozmowa robi się trudniejsza.',
    },
    {
      question: 'Czy self-hosting rozwiązuje wszystkie kwestie RODO?',
      answer:
        'Rozwiązuje pytanie o miejsce przechowywania i o dostęp osób trzecich do infrastruktury, więc sporo upraszcza. Nie zwalnia natomiast z podstawy prawnej, obowiązku informacyjnego, minimalizacji danych ani z oceny skutków tam, gdzie jest wymagana. Zdejmuje jeden problem z listy, a nie całą listę.',
    },
  ],
  related: [
    { label: 'AI Act a chatboty: co obowiązuje od 2 sierpnia 2026', href: '/blog/ai-act-chatboty-obowiazki' },
    { label: 'Słownik AI: RODO, BYOK, self-hosting i reszta pojęć', href: '/slownik' },
    { label: 'Chatbot AI dla firm', href: '/uslugi/chatbot-ai' },
    { label: 'Voicebot dla przychodni', href: '/branze/voicebot-dla-przychodni' },
    { label: 'AI dla kancelarii prawnej', href: '/branze/ai-dla-kancelarii' },
    { label: 'Ile kosztuje wdrożenie AI', href: '/cennik' },
  ],
  ctaHeading: 'Przejdziemy przez te pytania na Waszym przypadku',
  ctaSub:
    'Na bezpłatnej rozmowie mówimy wprost, gdzie w Waszym procesie padają dane osobowe, co da się zrobić bez nich i kiedy naszym zdaniem trzeba usiąść z inspektorem ochrony danych, zanim cokolwiek uruchomimy.',
};

export default function Page() {
  return <BlogArticle content={content} />;
}
