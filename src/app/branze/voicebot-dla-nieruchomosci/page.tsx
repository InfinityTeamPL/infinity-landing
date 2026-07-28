import type { Metadata } from 'next';
import SeoLanding, { SeoLandingContent } from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'Voicebot dla nieruchomości — telefon odebrany z oględzin',
  description:
    'Agent głosowy AI odbiera pytania o oferty, gdy agent jest na prezentacji. Kwalifikuje zainteresowanych, umawia oglądanie i przekazuje gotową notatkę.',
  alternates: { canonical: '/branze/voicebot-dla-nieruchomosci' },
  openGraph: {
    title: 'Voicebot dla biura nieruchomości — telefon odebrany z oględzin',
    description:
      'Pytania o metraż, piętro i cenę powtarzają się przy każdej ofercie. Agent głosowy odbiera je całą dobę i umawia oglądania.',
    type: 'website',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

const content: SeoLandingContent = {
  path: '/branze/voicebot-dla-nieruchomosci',
  breadcrumbLabel: 'Voicebot dla nieruchomości',
  h1: 'Voicebot dla biura nieruchomości: telefon odebrany prosto z prezentacji',
  lead: 'Voicebot dla biura nieruchomości to agent głosowy AI, który odbiera telefony o ofertach, gdy agent prowadzi oględziny albo jedzie między spotkaniami. Odpowiada na pytania o metraż, piętro, cenę i dostępność, wstępnie kwalifikuje zainteresowanego i umawia oglądanie. Mówi naturalną polszczyzną (technologia ElevenLabs), pracuje całą dobę, a dane przetwarza na serwerach w Polsce zgodnie z RODO.',
  serviceName: 'Voicebot dla biura nieruchomości: odbieranie zapytań o oferty i umawianie oględzin',
  serviceDescription:
    'Wdrożenie agenta głosowego AI dla biur i agentów nieruchomości: całodobowy odbiór zapytań o oferty, odpowiedzi na pytania o parametry lokalu, wstępna kwalifikacja zainteresowanego, umawianie prezentacji i notatka z rozmowy dla agenta. Dane na serwerach w Polsce, zgodnie z RODO.',
  sections: [
    {
      heading: 'Telefon dzwoni zawsze w środku prezentacji',
      paragraphs: [
        'Agent nieruchomości spędza dzień w miejscach, w których nie wypada odebrać telefonu. Stoi z klientem w kuchni oglądanego mieszkania, tłumaczy układ pomieszczeń, prowadzi rozmowę o cenie. W tym samym czasie ktoś inny dzwoni z pytaniem o ofertę zobaczoną kwadrans temu w portalu.',
        'Ten drugi telefon jest wart dokładnie tyle samo, co rozmowa trwająca w kuchni. Różnica polega na tym, że pierwszy klient stoi obok, a drugi po dwóch sygnałach wraca do portalu i klika w kolejne ogłoszenie. Ogłoszeń jest tam kilkadziesiąt, wszystkie wyglądają podobnie, a numer, który odbiera, wygrywa.',
        'Wieczór to osobna historia. Ludzie przeglądają oferty po pracy, między dwudziestą a dwudziestą drugą, i wtedy właśnie mają pytania. Rano połowa z nich już o tym nie pamięta albo umówiła się gdzie indziej.',
        'Agent głosowy odbiera od pierwszego sygnału, także wtedy, gdy dzwoni pięć osób naraz po nowym ogłoszeniu. Nikt nie słyszy sygnału zajętości, a Wy nie przerywacie prezentacji.',
      ],
    },
    {
      heading: 'Pytania o ofertę powtarzają się bardziej, niż się wydaje',
      paragraphs: [
        'Zapytania o nieruchomość mają zaskakująco stały zestaw. Zanim padnie cokolwiek nietypowego, dzwoniący chce potwierdzić kilka rzeczy z ogłoszenia, bo zdjęcia i opisy bywają mylące. To jest dokładnie ta część rozmowy, którą agent głosowy prowadzi sam, z danymi pobranymi z Waszej bazy ofert.',
      ],
      bullets: [
        'Czy oferta jest jeszcze aktualna. Najczęstsze pierwsze pytanie i jednocześnie to, na które najłatwiej odpowiedzieć z systemu.',
        'Parametry lokalu: metraż, liczba pokoi, piętro, winda, rok budowy, stan wykończenia, miejsce postojowe.',
        'Koszty poza ceną: czynsz administracyjny, media, forma własności, ewentualna prowizja biura.',
        'Otoczenie: szkoła w pobliżu, komunikacja, parking, czy budynek dopuszcza zwierzęta.',
        'Umówienie prezentacji: kiedy można obejrzeć, ile trwa oglądanie, kto będzie obecny.',
      ],
    },
    {
      heading: 'Wstępna kwalifikacja, czyli po co Wam ta rozmowa',
      paragraphs: [
        'Sama informacja, że ktoś dzwonił, jest mało warta. Wartość ma wiedza, czy ten ktoś rzeczywiście może kupić to mieszkanie. Agent głosowy zadaje kilka pytań, które i tak zadalibyście na początku rozmowy, i zapisuje odpowiedzi jako notatkę.',
        'Zakres kwalifikacji ustalamy z Wami przed wdrożeniem, bo w tej branży granica między rozeznaniem a przesłuchaniem jest cienka. Zwykle wystarczą trzy albo cztery pytania: czy zakup będzie gotówkowy czy na kredyt, na jakim etapie jest finansowanie, w jakim terminie klient chce się przeprowadzić oraz czy ma do sprzedania własną nieruchomość.',
        'Odpowiedzi trafiają do Was razem z nagraniem i streszczeniem, zanim oddzwonicie. Rozmowa zaczyna się wtedy od miejsca, w którym normalnie kończyłby się wstęp. Przy okazji od razu widać, które zapytania warto oddzwonić dziś, a które mogą poczekać do jutra.',
      ],
    },
    {
      heading: 'Skąd voicebot bierze dane o ofertach',
      paragraphs: [
        'To jest miejsce, w którym wdrożenia w tej branży najczęściej się potykają. Agent nie zna Waszych ofert, dopóki nie damy mu do nich dostępu, a oferty zmieniają się codziennie: coś zostaje sprzedane, gdzieś spada cena, gdzieś zmienia się dostępny termin oglądania.',
        'Podłączamy agenta do systemu, w którym prowadzicie oferty, żeby czytał aktualny stan przy każdej rozmowie. Jeśli korzystacie z popularnego CRM dla nieruchomości albo z arkusza, zwykle da się to zrobić przez API lub eksport odświeżany kilka razy dziennie. Bez tego kroku agent będzie potwierdzał dostępność mieszkań sprzedanych tydzień temu, a to gorsze niż nieodebrany telefon.',
        'Drugi wymóg jest redakcyjny, nie techniczny. Opisy ofert muszą zawierać dane, o które ludzie pytają. Jeśli w systemie nie ma informacji o czynszu ani o windzie, agent nie wymyśli jej sobie. Powie, że sprawdzi i przekaże pytanie, co jest zachowaniem poprawnym, ale przy trzecim takim pytaniu w jednej rozmowie klient traci cierpliwość.',
      ],
    },
    {
      heading: 'Czego w nieruchomościach nie automatyzujemy',
      paragraphs: [
        'Powiemy to wprost, bo w tej branży pokusa jest duża, a konsekwencje błędu liczy się w setkach tysięcy złotych. Agent głosowy odbiera pierwszy kontakt i porządkuje rutynę. Nie prowadzi transakcji.',
      ],
      bullets: [
        'Negocjacje ceny. To rozmowa, w której liczy się wyczucie i znajomość motywacji obu stron, a agent nie ma dostępu do żadnej z tych rzeczy.',
        'Doradztwo prawne i podatkowe przy transakcji: stan prawny księgi wieczystej, kwestie spadkowe, podatek od czynności cywilnoprawnych.',
        'Doradztwo kredytowe. Agent może zapytać o etap finansowania, ale nie ocenia zdolności ani nie sugeruje oferty banku.',
        'Rozmowy ze sprzedającym o obniżeniu ceny albo o przedłużeniu umowy z biurem. Tam relacja jest całą treścią rozmowy.',
      ],
    },
    {
      heading: 'Kiedy voicebot w biurze nieruchomości się nie opłaca',
      paragraphs: [
        'Przy kilku telefonach dziennie koszt wdrożenia i utrzymania nie zwróci się w rozsądnym czasie. Jednoosobowe biuro prowadzące pięć ofert obsłuży ten ruch samo, a agent głosowy będzie kolejnym systemem do pilnowania.',
        'Druga sytuacja dotyczy segmentu premium. Jeśli sprzedajecie nieruchomości, przy których klient oczekuje, że od pierwszego sygnału rozmawia z konkretną osobą, automat odbiera Wam dokładnie tę przewagę, za którą płaci. Tu nawet dobrze zaprojektowany agent zaszkodzi.',
        'Trzecia: oferty prowadzone wyłącznie w głowie i w notatniku, bez systemu, z którego dałoby się je odczytać. Wtedy najpierw trzeba uporządkować bazę, a decyzję o agencie odłożyć. Zresztą samo uporządkowanie zwykle daje więcej niż automatyzacja nałożona na bałagan.',
      ],
    },
  ],
  howTo: {
    title: 'Jak wygląda wdrożenie w biurze nieruchomości',
    steps: [
      {
        name: 'Przegląd ruchu telefonicznego i bazy ofert',
        text: 'Sprawdzamy, ile połączeń przychodzi, w jakich godzinach i ile z nich zostaje bez odpowiedzi. Równolegle patrzymy, w jakim systemie prowadzicie oferty i czy da się z niego czytać aktualne dane.',
      },
      {
        name: 'Scenariusz rozmowy i zakres kwalifikacji',
        text: 'Ustalamy, na jakie pytania agent odpowiada sam, o co dopytuje zainteresowanego i w którym momencie przekazuje sprawę Wam. Tu zapada też decyzja, jak daleko idzie kwalifikacja.',
      },
      {
        name: 'Podłączenie bazy ofert',
        text: 'Łączymy agenta z Waszym CRM albo arkuszem, żeby czytał aktualny stan przy każdej rozmowie. Ustawiamy, co ma powiedzieć, gdy danych brakuje: sprawdzi i przekaże pytanie, zamiast zgadywać.',
      },
      {
        name: 'Start poza godzinami pracy',
        text: 'Przez pierwsze dwa tygodnie agent odbiera wieczorami i w weekendy, czyli wtedy, gdy alternatywą jest cisza. Słuchamy nagrań i poprawiamy scenariusz na prawdziwych rozmowach.',
      },
      {
        name: 'Rozszerzenie na godziny pracy',
        text: 'Gdy rozmowy wyglądają dobrze, agent zaczyna odbierać też w ciągu dnia, na przykład gdy nikt nie podniesie słuchawki po czterech sygnałach. Zakres rośnie stopniowo.',
      },
    ],
  },
  useCases: {
    title: 'Typowe sytuacje w biurze nieruchomości',
    items: [
      {
        title: 'Nowa oferta i lawina telefonów',
        description: 'Po publikacji atrakcyjnego ogłoszenia dzwoni kilkanaście osób w ciągu godziny. Agent odbiera wszystkie równolegle i zbiera zapytania, zamiast pozwolić im trafić do konkurencji.',
      },
      {
        title: 'Pytanie o aktualność po sprzedaży',
        description: 'Mieszkanie zostało sprzedane, ale ogłoszenie krąży dalej. Agent czyta status z bazy, mówi wprost, że oferta jest już nieaktualna, i pyta, czy zaproponować podobne.',
      },
      {
        title: 'Wieczorne zapytanie z portalu',
        description: 'Ktoś przegląda oferty o dwudziestej pierwszej i dzwoni od razu. Agent odpowiada na pytania i umawia oglądanie na sobotę, zanim ten ktoś zdąży napisać do trzech innych biur.',
      },
      {
        title: 'Przypomnienie o umówionej prezentacji',
        description: 'Dzień przed oglądaniem agent dzwoni z potwierdzeniem. Jeśli klient rezygnuje, dowiadujecie się o tym wieczorem, a nie stojąc pod budynkiem.',
      },
    ],
  },
  pricing: {
    title: 'Ile kosztuje voicebot dla biura nieruchomości',
    note: 'Widełki orientacyjne. Konkretna wycena zależy od liczby ofert, systemu, z którym łączymy agenta, i zakresu kwalifikacji. Pierwsza rozmowa jest bezpłatna i kończy się konkretną liczbą, także wtedy, gdy wychodzi, że wdrożenie się nie opłaca.',
    rows: [
      { name: 'Wdrożenie', price: 'od 5 000 zł netto', description: 'scenariusz, konfiguracja głosu, podłączenie bazy ofert, testy na prawdziwych rozmowach' },
      { name: 'Utrzymanie', price: '249 / 499 / 799 zł netto miesięcznie', description: 'zależnie od liczby rozmów i zakresu opieki' },
      { name: 'Czas realizacji', price: '2 do 4 tygodni', description: 'przy prostszym zakresie i uporządkowanej bazie ofert' },
    ],
  },
  faq: [
    {
      question: 'Czy klient pozna, że rozmawia z automatem?',
      answer:
        'Przy krótkim pytaniu o metraż czy piętro często nie. Przy dłuższej rozmowie zwykle tak. Niezależnie od tego agent mówi na wstępie, że jest asystentem AI, bo od 2 sierpnia 2026 wymagają tego unijne przepisy. Z naszych obserwacji ukrywanie tego i tak wychodzi po dwóch pytaniach, tylko wtedy klient czuje się oszukany zamiast poinformowany.',
    },
    {
      question: 'Czy agent może pokazać mieszkanie zamiast mnie?',
      answer:
        'Nie i nie do tego służy. Prezentacja jest momentem, w którym sprzedaje się nieruchomość, i to jest praca człowieka. Agent zdejmuje z Was rutynę wokół niej: odbieranie powtarzalnych pytań, umawianie terminów i przypominanie o nich.',
    },
    {
      question: 'Co się dzieje, gdy agent nie zna odpowiedzi?',
      answer:
        'Mówi, że sprawdzi, i przekazuje pytanie do Was razem z numerem dzwoniącego. Ustawiamy to wprost w scenariuszu, bo alternatywa jest gorsza: model bez takiej reguły wymyśla odpowiedź pewnym tonem, a przy metrażu albo czynszu to prosta droga do pretensji.',
    },
    {
      question: 'Czy nagrania rozmów z klientami są zgodne z RODO?',
      answer:
        'Agent informuje o nagrywaniu na początku rozmowy, a dane trafiają na serwery w Polsce lub w chmurze UE. Stosujemy standardy bezpieczeństwa zgodne z normą ISO 27001, samego certyfikatu ISO nie posiadamy. Przy danych osobowych potrzebna jest umowa powierzenia i to omawiamy przed wdrożeniem, a nie po.',
    },
    {
      question: 'Mamy CRM dla nieruchomości. Da się go podłączyć?',
      answer:
        'Zwykle tak, jeśli system udostępnia API albo pozwala na regularny eksport. Sprawdzamy to na pierwszym spotkaniu, bo od tego zależy, czy agent będzie mówił o aktualnym stanie ofert. Gdy API nie ma, zostaje odświeżany eksport, co przy ofertach zmieniających się kilka razy dziennie bywa wystarczające.',
    },
  ],
  cta: {
    heading: 'Sprawdźmy, ile telefonów tracicie w tygodniu',
    sub: 'Pierwsza rozmowa jest bezpłatna. Przejdziemy przez Wasz ruch i bazę ofert, a jeśli wyjdzie, że voicebot się u Was nie opłaca, powiemy to wprost.',
  },
  related: [
    { label: 'Agent głosowy AI: jak wdrażamy', href: '/uslugi/agent-glosowy-ai' },
    { label: 'Voicebot dla salonów i warsztatów', href: '/branze/voicebot-dla-salonow' },
    { label: 'Wszystkie branże', href: '/branze' },
    { label: 'Bezpłatny kurs o voicebotach', href: '/akademia' },
    { label: 'Scenariusz rozmowy w biurze nieruchomości', href: '/akademia/scenariusz-nieruchomosci' },
    { label: 'Ile kosztuje voicebot', href: '/blog/ile-kosztuje-voicebot' },
  ],
};

export default function VoicebotDlaNieruchomosciPage() {
  return <SeoLanding content={content} />;
}
