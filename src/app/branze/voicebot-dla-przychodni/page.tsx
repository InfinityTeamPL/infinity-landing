import type { Metadata } from 'next';
import SeoLanding, { SeoLandingContent } from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'Voicebot dla przychodni — rejestracja telefoniczna AI',
  description:
    'Voicebot dla przychodni: AI do umawiania wizyt odbiera każdy telefon 24/7. Dane pacjentów na serwerach w Polsce, zgodnie z RODO. Bezpłatna konsultacja.',
  alternates: { canonical: '/branze/voicebot-dla-przychodni' },
  openGraph: {
    title: 'Voicebot dla przychodni — rejestracja telefoniczna AI',
    description:
      'AI do umawiania wizyt odbiera każdy telefon 24/7: umawia, odwołuje i przypomina o wizytach. Dane pacjentów na serwerach w Polsce, zgodnie z RODO.',
    type: 'website',
  },
};

const content: SeoLandingContent = {
  path: '/branze/voicebot-dla-przychodni',
  breadcrumbLabel: 'Voicebot dla przychodni',
  h1: 'Voicebot dla przychodni — rejestracja telefoniczna, która zawsze odbiera',
  lead: 'Voicebot dla przychodni to agent głosowy AI, który odbiera telefon rejestracji przez całą dobę: umawia, przekłada i odwołuje wizyty, przypomina o terminach i odpowiada na pytania o godziny przyjęć. Mówi naturalną polszczyzną (technologia ElevenLabs), obsługuje wielu dzwoniących jednocześnie, a dane pacjentów przetwarza na serwerach w Polsce, zgodnie z RODO.',
  serviceName: 'Voicebot dla przychodni: rejestracja telefoniczna AI',
  serviceDescription:
    'Wdrożenie agenta głosowego AI dla placówek medycznych: całodobowa rejestracja telefoniczna, umawianie i odwoływanie wizyt, przypomnienia, integracja z terminarzem. Dane pacjentów na serwerach w Polsce, zgodnie z RODO.',
  sections: [
    {
      heading: 'Dlaczego rejestracja telefoniczna to wąskie gardło przychodni',
      paragraphs: [
        'W większości placówek telefon dzwoni najmocniej między 8:00 a 10:00, dokładnie wtedy, gdy rejestratorki obsługują kolejkę przy okienku. Pacjent słyszy sygnał zajętości albo czeka na linii i w końcu się rozłącza. Część z tych osób zadzwoni do innej przychodni, część odłoży wizytę. A grafik lekarza zostaje z wolnymi okienkami, których nikt nie zdążył zapełnić. Nieodebranych połączeń zwykle nikt nie liczy, więc ta strata jest po prostu niewidoczna.',
        'Drugi problem to godziny. Pacjenci przypominają sobie o wizycie wieczorem, w weekend albo w święta, czyli wtedy, gdy rejestracja nie pracuje. Chcą też odwoływać wizyty po godzinach, a skoro nie mogą, po prostu nie przychodzą. Nieodwołana wizyta to strata podwójna: lekarz czeka, a inny pacjent nie dostał tego terminu.',
        'Rejestracja telefoniczna AI zdejmuje oba problemy naraz. Odbiera każde połączenie od razu, niezależnie od pory i od tego, ilu pacjentów dzwoni w tej samej minucie, a personel rejestracji może zająć się ludźmi, którzy stoją przed okienkiem.',
      ],
    },
    {
      heading: 'Co potrafi voicebot dla przychodni',
      paragraphs: [
        'Voicebot prowadzi normalną rozmowę telefoniczną. Pacjent mówi, czego potrzebuje, a agent głosowy AI dopytuje o szczegóły i załatwia sprawę. Głos oparty na technologii ElevenLabs brzmi naturalnie po polsku, bez „robotycznego" tonu znanego ze starych automatów IVR i tonowego wybierania cyfr.',
      ],
      bullets: [
        'Sprawdza wolne terminy w terminarzu, proponuje pacjentowi najbliższe i zapisuje go do wybranego lekarza lub poradni.',
        'Przekłada i odwołuje wizyty także w nocy i w weekendy, dzięki czemu zwolnione terminy wracają do puli.',
        'Przypomina o wizytach telefonicznie albo SMS-em. To akurat widać najszybciej z całej listy, bo część pacjentów po prostu zapomina, a przypomniana wizyta zostaje odwołana zamiast przepaść.',
        'Odpowiada na częste pytania: godziny przyjęć, adres i dojazd, przygotowanie do badań, zasady wystawiania recept i skierowań.',
        'Obsługuje wiele połączeń naraz, więc nikt nie słyszy sygnału zajętości ani muzyki na czekanie.',
        'Przekazuje rozmowę do rejestracji, gdy sprawa wykracza poza jego kompetencje albo pacjent poprosi o człowieka.',
      ],
    },
    {
      heading: 'AI do umawiania wizyt a system gabinetowy',
      paragraphs: [
        'AI do umawiania wizyt jest tyle warte, ile jego dostęp do aktualnego grafiku. Bez tego reszta nie ma sensu. Dlatego voicebota integrujemy z terminarzem placówki: systemem gabinetowym, z którego korzysta rejestracja, albo kalendarzem online. Bot widzi wolne terminy w czasie rzeczywistym, a każda umówiona, przełożona lub odwołana wizyta od razu pojawia się w systemie, który zna personel.',
        'Zakres integracji ustalamy na etapie analizy: sprawdzamy, jaki system działa w placówce, jakie udostępnia interfejsy i jakie reguły zapisów obowiązują (np. które wizyty wymagają skierowania, ile trwa wizyta danego typu, którzy lekarze przyjmują nowych pacjentów). Scenariusze rozmów budujemy pod konkretną placówkę, a nie z jednego uniwersalnego szablonu. Inne pytania padają w POZ, a zupełnie inne w klinice stomatologicznej.',
      ],
    },
    {
      heading: 'Dane medyczne i RODO: gdzie trafiają dane pacjentów',
      paragraphs: [
        'W placówce medycznej to pytanie musi paść przed każdym innym. Dane pacjentów przetwarzane przez voicebota (nagrania rozmów, imiona i nazwiska, numery telefonów, informacje o wizytach) przechowujemy na serwerach zlokalizowanych w Polsce. Przetwarzanie jest w pełni zgodne z RODO, a wdrożenie prowadzimy według standardów zgodnych z ISO 27001.',
        'Z placówką podpisujemy umowę powierzenia przetwarzania danych, która precyzuje zakres, cel i czas przetwarzania. Stosujemy zasadę minimalizacji: bot zbiera tylko te dane, które są niezbędne do umówienia wizyty, a okres przechowywania nagrań ustalamy wspólnie z administratorem danych. Na życzenie konfigurujemy automatyczne usuwanie nagrań po zdefiniowanym czasie.',
        'Mamy doświadczenie w agentach głosowych na publicznej infolinii: zbudowaliśmy m.in. agenta dla regionalnego przewoźnika autobusowego, który przez telefon całodobowo podaje rozkłady jazdy. Ta sama architektura, czyli telefonia, rozpoznawanie mowy i naturalny polski głos, pracuje w voicebocie dla przychodni.',
      ],
    },
  ],
  howTo: {
    title: 'Jak wdrażamy voicebota w przychodni',
    steps: [
      {
        name: 'Bezpłatna konsultacja i analiza ruchu telefonicznego',
        text: 'Rozmawiamy o tym, ile połączeń przychodzi, kiedy są szczyty, jakie sprawy pacjenci załatwiają telefonicznie i gdzie rejestracja traci najwięcej czasu. Na tej podstawie określamy zakres wdrożenia i przedstawiamy wycenę.',
      },
      {
        name: 'Projekt scenariuszy rozmów',
        text: 'Wspólnie z personelem rejestracji projektujemy przebieg rozmów: umawianie, odwoływanie, najczęstsze pytania pacjentów oraz zasady przekazywania rozmowy do człowieka. Dobieramy głos i ton dopasowany do placówki.',
      },
      {
        name: 'Integracja z terminarzem i telefonią',
        text: 'Podłączamy voicebota do systemu gabinetowego lub kalendarza placówki oraz do istniejącego numeru telefonu. Podpisujemy umowę powierzenia przetwarzania danych i konfigurujemy retencję nagrań.',
      },
      {
        name: 'Testy pilotażowe',
        text: 'Uruchamiamy bota na części ruchu, np. tylko po godzinach pracy rejestracji. Zwykle właśnie wtedy wychodzą pytania, których nikt nie przewidział przy stole. Analizujemy rzeczywiste rozmowy, poprawiamy scenariusze i dopiero potem rozszerzamy działanie na cały ruch telefoniczny.',
      },
      {
        name: 'Uruchomienie i stała opieka',
        text: 'Po starcie monitorujemy jakość rozmów, aktualizujemy odpowiedzi (np. zmiany godzin przyjęć czy zastępstwa lekarzy) i rozwijamy scenariusze w ramach miesięcznego pakietu utrzymania.',
      },
    ],
  },
  useCases: {
    title: 'Dla jakich placówek sprawdza się rejestracja telefoniczna AI',
    items: [
      {
        title: 'Przychodnia POZ',
        description:
          'Największy wolumen połączeń i poranne szczyty. Voicebot umawia wizyty i teleporady, informuje o zasadach recept i skierowań, odciąża rejestrację w godzinach największego ruchu.',
      },
      {
        title: 'Stomatologia',
        description:
          'Pacjenci często dzwonią z bólem po godzinach. Bot całodobowo zbiera zgłoszenia, proponuje najbliższe wolne terminy i przypomina o wizytach, ograniczając puste okienka w grafiku.',
      },
      {
        title: 'Medycyna estetyczna',
        description:
          'Klientki i klienci pytają o zabiegi, przygotowanie i ceny. Voicebot odpowiada na pytania o ofertę, umawia konsultacje i dyskretnie obsługuje odwołania oraz zmiany terminów.',
      },
      {
        title: 'Gabinet weterynaryjny',
        description:
          'Właściciele zwierząt dzwonią o różnych porach, także w nagłych sytuacjach. Bot umawia wizyty i szczepienia, a pilne przypadki od razu przekazuje pod wskazany numer dyżurny.',
      },
      {
        title: 'Fizjoterapia i rehabilitacja',
        description:
          'Cykliczne serie zabiegów oznaczają dużo umawiania i przekładania terminów. Voicebot zarządza całą serią wizyt i wysyła przypomnienia przed każdym spotkaniem.',
      },
    ],
  },
  pricing: {
    title: 'Ile kosztuje voicebot dla przychodni',
    note: 'Ceny netto. Ostateczna wycena zależy od zakresu integracji i liczby scenariuszy. Pierwsza konsultacja jest bezpłatna.',
    rows: [
      {
        name: 'Wdrożenie',
        price: 'od 5 000 zł',
        description:
          'Mały zakres: scenariusze rozmów, integracja z terminarzem, konfiguracja telefonii i testy. Większe wdrożenia wyceniamy indywidualnie.',
      },
      {
        name: 'Utrzymanie Starter',
        price: '249 zł/mies.',
        description: 'Monitoring działania, drobne poprawki scenariuszy, wsparcie mailowe.',
      },
      {
        name: 'Utrzymanie Standard',
        price: '499 zł/mies.',
        description: 'Rozwój scenariuszy, aktualizacje odpowiedzi, priorytetowe wsparcie.',
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
      question: 'Ile kosztuje voicebot dla przychodni?',
      answer:
        'Wdrożenie zaczyna się od 5 000 zł netto przy małym zakresie (pojedynczy numer, podstawowe scenariusze, integracja z terminarzem). Większe placówki i bardziej złożone integracje wyceniamy indywidualnie. Do tego dochodzi miesięczne utrzymanie: 249, 499 lub 799 zł netto, zależnie od pakietu. Pierwsza konsultacja i wycena są bezpłatne.',
    },
    {
      question: 'Czy dane pacjentów są bezpieczne i zgodne z RODO?',
      answer:
        'Tak. Wszystkie dane przetwarzane przez voicebota, czyli nagrania, dane kontaktowe i informacje o wizytach, przechowujemy na serwerach w Polsce, w pełnej zgodności z RODO i według standardów zgodnych z ISO 27001. Z placówką podpisujemy umowę powierzenia przetwarzania danych, stosujemy minimalizację zbieranych informacji i konfigurujemy okres przechowywania nagrań według wytycznych administratora danych.',
    },
    {
      question: 'Czy voicebot zintegruje się z naszym systemem gabinetowym?',
      answer:
        'W większości przypadków tak. Na etapie analizy sprawdzamy, z jakiego systemu korzysta placówka i jakie udostępnia interfejsy. Jeśli system ma API, bot pracuje bezpośrednio na jego terminarzu. Gdy integracja bezpośrednia nie jest możliwa, proponujemy wariant pośredni, np. kalendarz synchronizowany z grafikiem. Który to będzie, ustalamy podczas bezpłatnej konsultacji.',
    },
    {
      question: 'Co jeśli pacjent chce rozmawiać z człowiekiem?',
      answer:
        'Zostaje przełączony. To żelazna zasada każdego naszego wdrożenia. Voicebot rozpoznaje prośbę o rozmowę z rejestracją i przekazuje połączenie do personelu w godzinach pracy, a poza nimi przyjmuje zgłoszenie i zapisuje prośbę o oddzwonienie. Bot obsługuje sprawy proste i powtarzalne, dzięki czemu rejestratorki mają czas na te trudniejsze.',
    },
    {
      question: 'Ile trwa wdrożenie voicebota w przychodni?',
      answer:
        'Typowe wdrożenie dla pojedynczej placówki zamyka się w 2–4 tygodniach: analiza, scenariusze rozmów, integracja z terminarzem, testy pilotażowe i start. Przy większych podmiotach, gdzie dochodzi kilka lokalizacji i rozbudowane integracje z systemem gabinetowym, realny horyzont to 1–3 miesiące. Harmonogram ustalamy na początku i pilnujemy go etapami. Bywa różnie: jeśli wąskim gardłem okazuje się dostęp do systemu gabinetowego, termin potrafi się przesunąć i lepiej wiedzieć o tym od razu.',
    },
    {
      question: 'Czy pacjenci zorientują się, że rozmawiają z AI?',
      answer:
        'Bot na początku rozmowy przedstawia się jako asystent automatyczny, więc pacjent od razu wie, z kim rozmawia. To także dobra praktyka prawna. Głos oparty na technologii ElevenLabs brzmi naturalnie po polsku, więc rozmowa przebiega płynnie: bez wybierania cyfr na klawiaturze i bez sztywnych komunikatów znanych ze starych automatów.',
    },
  ],
  cta: {
    heading: 'Sprawdź, ile połączeń traci Twoja rejestracja',
    sub: 'Umów bezpłatną konsultację. Przeanalizujemy ruch telefoniczny placówki i pokażemy, jak wyglądałby voicebot dopasowany do Waszego terminarza.',
  },
  related: [
    { label: 'Agent głosowy AI', href: '/uslugi/agent-glosowy-ai' },
    { label: 'Cennik wdrożeń AI', href: '/cennik' },
    { label: 'Bezpłatny kurs o voicebotach', href: '/akademia' },
  ],
};

export default function Page() {
  return <SeoLanding content={content} />;
}
