import type { Metadata } from 'next';
import SeoLanding, { SeoLandingContent } from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'Voicebot dla firm transportowych — infolinia AI',
  description:
    'Voicebot dla firm transportowych: agent głosowy AI podaje rozkłady jazdy przez telefon całą dobę, informuje o utrudnieniach i przyjmuje reklamacje. Zobacz nasze demo.',
  alternates: { canonical: '/branze/voicebot-dla-transportu' },
  openGraph: {
    title: 'Voicebot dla firm transportowych — infolinia AI',
    description:
      'Agent głosowy w transporcie: rozkłady jazdy przez telefon 24/7, statusy kursów, reklamacje. Publiczne demo na danych rozkładowych, dane na serwerach w Polsce.',
    type: 'website',
  },
};

const content: SeoLandingContent = {
  path: '/branze/voicebot-dla-transportu',
  breadcrumbLabel: 'Voicebot dla transportu',
  h1: 'Voicebot dla firm transportowych — infolinia, która odbiera o piątej rano',
  lead: 'Voicebot dla firm transportowych to agent głosowy AI, który odbiera infolinię przewoźnika przez całą dobę: podaje rozkłady jazdy przez telefon, informuje o statusie kursu i utrudnieniach, przyjmuje reklamacje i przekierowuje trudniejsze sprawy do dyspozytora. Mówi naturalną polszczyzną, obsługuje wiele połączeń naraz, a dane trzyma na serwerach w Polsce.',
  serviceName: 'Voicebot dla firm transportowych: infolinia przewoźnika AI',
  serviceDescription:
    'Wdrożenie agenta głosowego AI dla przewoźników i firm transportowych: całodobowa infolinia, rozkłady jazdy przez telefon, informacja o kursach i utrudnieniach, przyjmowanie reklamacji, przekierowanie do dyspozytora. Dane na serwerach w Polsce, zgodnie z RODO.',
  sections: [
    {
      heading: 'Czym infolinia przewoźnika AI różni się od zwykłego automatu',
      paragraphs: [
        'Większość infolinii przewoźnikowych działa w jednym z dwóch trybów. Albo telefon odbiera człowiek: w godzinach pracy biura, jeden dzwoniący naraz, a reszta słucha sygnału zajętości. Albo stoi automat IVR z „wybierz jeden, aby usłyszeć rozkład jazdy" i drzewkiem menu, w którym rozkładu i tak nie ma. Bo nagrań nikt nie aktualizował od zeszłego sezonu.',
        'Agent głosowy w transporcie działa inaczej, bo nie odtwarza nagrań, tylko rozumie pytanie i sprawdza odpowiedź w danych. Pasażer mówi „o której jest najbliższy autobus z Gryfic do Trzebiatowa", a bot odpowiada konkretną godziną. Bez znajomości numeru linii. Bez wybierania cyfr i bez czekania, aż ktoś otworzy biuro.',
        'Druga różnica to skala. Kiedy w poniedziałek rano po zmianie rozkładu dzwoni sto osób naraz, człowiek odbierze jedną rozmowę, a bot sto. Głos oparty na technologii ElevenLabs brzmi po polsku naturalnie, z odmianą nazw miejscowości i normalną intonacją, a nie sylabizowaniem znanym ze starych syntezatorów. Z rzadkimi nazwami wsi bywa oczywiście różnie. Część z nich dopisujemy do słownika ręcznie, dopiero po pierwszych testach.',
      ],
    },
    {
      heading: 'Co agent głosowy załatwia na infolinii przewoźnika',
      paragraphs: [
        'Zakres ustalamy przed wdrożeniem, bo zależy od tego, jakie dane firma faktycznie udostępnia i do jakich systemów da się podłączyć. Poniżej to, co realnie da się obsłużyć głosem. Bez obiecywania integracji, których jeszcze na oczy nie widzieliśmy.',
      ],
      bullets: [
        'Rozkłady jazdy przez telefon: najbliższe odjazdy z konkretnego przystanku, kursy na wskazanej relacji, godziny w dni robocze, soboty i święta.',
        'Status kursu. Czy kurs jest realizowany, czy jest opóźnienie, czy tego dnia obowiązuje rozkład wakacyjny.',
        'Informacja o utrudnieniach: objazdy, zamknięte przystanki, zawieszone kursy. Bot podaje ten sam komunikat wszystkim dzwoniącym, bez pomyłek i bez zmęczenia.',
        'Przyjmowanie reklamacji i zgłoszeń. Agent spisuje treść, dane kontaktowe i numer kursu, a potem przekazuje zgłoszenie do systemu obsługi klienta w uzgodnionym formacie.',
        'Pytania o bilety: taryfy, ulgi, gdzie i jak kupić, zasady przewozu bagażu i rowerów. Sprzedaż biletów przez telefon wymaga integracji z systemem sprzedażowym, więc jej zakres ustalamy indywidualnie.',
        'Przekierowanie do dyspozytora, gdy sprawa jest pilna albo pasażer po prostu prosi o człowieka.',
      ],
    },
    {
      heading: 'Nasze demo: rozkłady jazdy przez telefon na publicznych danych',
      paragraphs: [
        'To jest branża, w której mamy najwięcej do pokazania, więc powiemy wprost, co to jest, a czym nie jest. Pod adresem pks-gryfice-demo.vercel.app działa nasza publiczna prezentacja agenta głosowego zbudowana na publicznie dostępnych danych rozkładowych PKS Gryfice. To nie jest wdrożenie u tego przewoźnika i PKS Gryfice nie jest naszym klientem. Zbudowaliśmy je sami, żeby pokazać działający system, bo slajdów z obietnicami każdy widział już wystarczająco dużo.',
        'Demo obsługuje 6 przystanków i 276 odjazdów. Można je otworzyć w przeglądarce, zapytać o najbliższy kurs z wybranego przystanku i usłyszeć odpowiedź. Jeden szczegół ma tu większe znaczenie niż sam głos: agent przy odpowiedzi podaje źródło danych. Wiadomo, skąd wziął godzinę odjazdu, więc odpowiedź da się zweryfikować, a nie tylko przyjąć na wiarę. To ważne w transporcie, gdzie zmyślona przez model godzina odjazdu oznacza pasażera na przystanku o złej porze.',
        'Ten sam mechanizm przenosimy na wdrożenia produkcyjne: dane w kontrolowanym źródle, odpowiedź z cytowaniem, zero swobodnej improwizacji modelu. Jeśli chcesz sprawdzić, jak brzmi agent w innych branżach, pod asystenci-glosowi.vercel.app udostępniamy pięciu asystentów branżowych, w tym Tomka obsługującego scenariusze transportowe.',
      ],
    },
    {
      heading: 'Kiedy voicebot dla firm transportowych się nie opłaca',
      paragraphs: [
        'Jeśli obsługujesz kilka kursów dziennie, a telefon dzwoni pięć razy w tygodniu, to wdrożenie za 5 000 zł netto plus abonament nigdy się nie zwróci. W tej skali kierowca albo właściciel odbierze telefon szybciej, niż zajęłoby zaprojektowanie scenariuszy rozmów. Mówimy to na konsultacji, zanim ktokolwiek podpisze umowę.',
        'Drugi przypadek: rozkład, którego nie ma w żadnej ustrukturyzowanej formie. Jeżeli aktualne godziny istnieją wyłącznie jako skan PDF wieszany na przystanku i zmieniany ręcznie co miesiąc, najpierw trzeba uporządkować dane. Bot nie naprawi bałaganu w źródle. Powieli go, tylko szybciej i przez telefon. Porządkowanie cudzych rozkładów to zresztą najmniej wdzięczna część tej roboty i nie będziemy udawać, że ją lubimy. Bez niej jednak nie ma o czym rozmawiać.',
        'Trzeci przypadek: gdy większość rozmów to nietypowe sprawy wymagające decyzji. Przewóz ładunku specjalnego, negocjacja stawki, reklamacja szkody transportowej. W takich rozmowach kontrahent i tak trafi do człowieka. Wtedy voicebot ma sens najwyżej jako pierwsza warstwa: odbiera, kwalifikuje sprawę i przekazuje ją dalej wraz z notatką. Bywa, że i to wystarczy, żeby wdrożenie się opłaciło, ale liczby trzeba policzyć przed startem, a nie po.',
      ],
    },
    {
      heading: 'Dane, RODO i nagrania rozmów',
      paragraphs: [
        'Na infolinii przewoźnika padają dane osobowe: imię i nazwisko przy reklamacji, numer telefonu, czasem numer biletu i relacja przejazdu. Nagrania, transkrypcje i dane kontaktowe trzymamy na serwerach w Polsce, zgodnie z RODO i według standardów zgodnych z ISO 27001.',
        'Z firmą podpisujemy umowę powierzenia przetwarzania danych. Ustalamy w niej, jak długo przechowywane są nagrania i transkrypcje, kto ma do nich dostęp i kiedy są usuwane. Domyślnie zbieramy minimum potrzebne do załatwienia sprawy: przy pytaniu o rozkład jazdy bot nie potrzebuje żadnych danych osobowych i żadnych nie zapisuje.',
        'Sam framework, na którym budujemy agentów, to open source: OpenClaw, z ponad 380 tysiącami gwiazdek na GitHubie. Nie jesteśmy oficjalnym partnerem projektu, po prostu na nim pracujemy. Dla klienta ma to jedną praktyczną konsekwencję. Warstwa agentowa nie jest zamkniętym pudełkiem jednego dostawcy, a wdrożenie da się w razie potrzeby przenieść.',
      ],
    },
  ],
  howTo: {
    title: 'Jak wdrażamy voicebota u przewoźnika',
    steps: [
      {
        name: 'Bezpłatna konsultacja i przegląd ruchu na infolinii',
        text: 'Sprawdzamy, ile połączeń przychodzi, o co pytają najczęściej pasażerowie i kiedy wypadają szczyty: poranek, początek sezonu, zmiana rozkładu. Jeśli z tych liczb wyjdzie, że wdrożenie się nie zwróci, mówimy to od razu.',
      },
      {
        name: 'Uporządkowanie danych rozkładowych',
        text: 'Ustalamy, skąd bot będzie brał godziny odjazdów i informacje o utrudnieniach: z pliku, z API systemu rozkładowego czy z arkusza aktualizowanego przez dyspozytornię. Bez wiarygodnego źródła nie ruszamy dalej.',
      },
      {
        name: 'Projekt scenariuszy rozmów',
        text: 'Piszemy przebieg typowych rozmów: pytanie o odjazd, o status kursu, o bilet, zgłoszenie reklamacji. Ustalamy też twarde granice, czyli czego bot nie mówi i w jakich sytuacjach od razu przełącza do dyspozytora.',
      },
      {
        name: 'Podłączenie telefonii i testy',
        text: 'Podpinamy agenta pod istniejący numer infolinii i uruchamiamy testy na ograniczonym ruchu, na przykład tylko poza godzinami pracy biura. Słuchamy prawdziwych rozmów i poprawiamy scenariusze na podstawie tego, co faktycznie mówią dzwoniący.',
      },
      {
        name: 'Start i utrzymanie',
        text: 'Po uruchomieniu monitorujemy rozmowy, aktualizujemy komunikaty przy zmianach rozkładu i objazdach oraz rozwijamy scenariusze w ramach miesięcznego pakietu utrzymania.',
      },
    ],
  },
  useCases: {
    title: 'Do czego przewoźnicy używają agenta głosowego',
    items: [
      {
        title: 'Rozkłady jazdy przez telefon 24/7',
        description:
          'Pasażer dzwoni o piątej rano albo w niedzielę wieczorem i pyta o najbliższy kurs z konkretnego przystanku. Bot podaje godzinę i źródło danych, bez czekania na otwarcie biura.',
      },
      {
        title: 'Statusy kursów',
        description:
          'Czy autobus jedzie, czy jest opóźniony, czy dziś obowiązuje rozkład świąteczny. Jedno pytanie, jedna odpowiedź, ta sama dla wszystkich dzwoniących w tej samej minucie.',
      },
      {
        title: 'Przyjmowanie reklamacji',
        description:
          'Bot spisuje zgłoszenie: numer kursu, datę, opis sprawy i dane kontaktowe. Komplet trafia do systemu obsługi klienta, więc nikt nie przepisuje notatek z kartki.',
      },
      {
        title: 'Obsługa sezonowych szczytów',
        description:
          'Wakacje, ferie, długi weekend, zmiana rozkładu od pierwszego września. W tygodniach, w których ruch telefoniczny rośnie kilkukrotnie, bot obsługuje wiele połączeń jednocześnie.',
      },
      {
        title: 'Informacja o utrudnieniach',
        description:
          'Objazd, zamknięty przystanek, zawieszony kurs. Dyspozytornia aktualizuje komunikat w jednym miejscu, a agent powtarza go bezbłędnie każdemu dzwoniącemu.',
      },
      {
        title: 'Przekierowanie do dyspozytora',
        description:
          'Sprawy pilne i nietypowe bot przekazuje człowiekowi razem z tym, co już ustalił w rozmowie. Dyspozytor nie zaczyna od zera i nie prosi o powtórzenie tych samych danych.',
      },
    ],
  },
  pricing: {
    title: 'Ile kosztuje voicebot dla firmy transportowej',
    note: 'Ceny netto. Ostateczna wycena zależy od stanu danych rozkładowych i zakresu integracji. Pierwsza konsultacja jest bezpłatna.',
    rows: [
      {
        name: 'Wdrożenie',
        price: 'od 5 000 zł',
        description:
          'Mniejszy zakres: scenariusze rozmów, podłączenie źródła rozkładów, konfiguracja telefonii i testy. Większe wdrożenia wyceniamy indywidualnie.',
      },
      {
        name: 'Utrzymanie Starter',
        price: '249 zł/mies.',
        description: 'Monitoring działania, drobne poprawki scenariuszy, wsparcie mailowe.',
      },
      {
        name: 'Utrzymanie Standard',
        price: '499 zł/mies.',
        description: 'Rozwój scenariuszy, aktualizacje komunikatów o utrudnieniach, priorytetowe wsparcie.',
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
      question: 'Ile kosztuje voicebot dla firmy transportowej?',
      answer:
        'Wdrożenie zaczyna się od 5 000 zł netto przy mniejszym zakresie: jeden numer infolinii, podstawowe scenariusze i jedno źródło danych rozkładowych. Większe projekty, z wieloma liniami i integracją z systemem sprzedaży, wyceniamy indywidualnie. Do tego dochodzi utrzymanie: 249, 499 albo 799 zł netto miesięcznie, zależnie od pakietu. Konsultacja i wycena są bezpłatne.',
    },
    {
      question: 'Co dzieje się z danymi i nagraniami rozmów w świetle RODO?',
      answer:
        'Nagrania, transkrypcje i dane kontaktowe przechowujemy na serwerach w Polsce, zgodnie z RODO i według standardów zgodnych z ISO 27001. Z przewoźnikiem podpisujemy umowę powierzenia przetwarzania danych, w której ustalamy okres retencji i dostęp do nagrań. Przy zwykłym pytaniu o rozkład jazdy bot nie zbiera i nie zapisuje żadnych danych osobowych.',
    },
    {
      question: 'Skąd bot bierze rozkłady jazdy i czy się nie pomyli?',
      answer:
        'Agent nie zgaduje godzin z pamięci modelu, tylko czyta je z konkretnego źródła, które podłączamy przy wdrożeniu: API systemu rozkładowego, pliku albo arkusza aktualizowanego przez dyspozytornię. W naszym publicznym demo na danych PKS Gryfice agent przy każdej odpowiedzi podaje źródło, więc odpowiedź da się zweryfikować. Ten sam mechanizm stosujemy na produkcji.',
    },
    {
      question: 'Czy PKS Gryfice jest Waszym klientem?',
      answer:
        'Nie. Demo pod adresem pks-gryfice-demo.vercel.app zbudowaliśmy sami, na publicznie dostępnych danych rozkładowych tego przewoźnika, żeby pokazać działającego agenta zamiast opisywać go w prezentacji. Obejmuje 6 przystanków i 276 odjazdów. To nasza prezentacja techniczna, a nie wdrożenie u przewoźnika i nie referencja klienta.',
    },
    {
      question: 'Czym to się różni od automatu IVR, który już mamy?',
      answer:
        'IVR odtwarza nagrania i wymaga wybierania cyfr, więc pasażer musi znać strukturę menu i numer linii. Agent głosowy rozumie zdanie wypowiedziane normalnym językiem, dopytuje o brakujący szczegół i sam znajduje odpowiedź w danych. Aktualizacja to zmiana w źródle danych, a nie nagrywanie nowych komunikatów lektorskich przy każdej korekcie rozkładu.',
    },
    {
      question: 'Ile trwa wdrożenie voicebota u przewoźnika?',
      answer:
        'Mniejsze wdrożenie zamyka się zwykle w 2–4 tygodniach: przegląd infolinii, uporządkowanie danych rozkładowych, scenariusze rozmów, testy i start. Przy większym zakresie (wiele linii, integracja z systemem sprzedaży biletów lub obsługi reklamacji) realny horyzont to 1–3 miesiące. Najdłużej trwa zwykle nie technologia, tylko doprowadzenie danych rozkładowych do porządku.',
    },
  ],
  cta: {
    heading: 'Posłuchaj, jak agent podaje rozkład jazdy',
    sub: 'Otwórz nasze demo pod pks-gryfice-demo.vercel.app, a potem umów bezpłatną konsultację. Policzymy razem, czy przy Waszym ruchu telefonicznym wdrożenie ma sens.',
  },
  related: [
    { label: 'Agent głosowy AI', href: '/uslugi/agent-glosowy-ai' },
    { label: 'Cennik wdrożeń AI', href: '/cennik' },
    { label: 'Branże', href: '/branze' },
    { label: 'Voicebot dla przychodni', href: '/branze/voicebot-dla-przychodni' },
  ],
};

export default function Page() {
  return <SeoLanding content={content} />;
}
