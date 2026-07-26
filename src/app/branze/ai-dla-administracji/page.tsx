import type { Metadata } from 'next';
import SeoLanding, { SeoLandingContent } from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'AI w administracji publicznej — infolinia urzędu',
  description:
    'Voicebot dla urzędu odbiera infolinię całą dobę: statusy spraw, wymagane dokumenty, właściwy wydział. Dane obywateli w Polsce, RODO. Bezpłatna konsultacja.',
  alternates: { canonical: '/branze/ai-dla-administracji' },
  openGraph: {
    title: 'AI w administracji publicznej — infolinia urzędu',
    description:
      'Agent głosowy odbiera telefon urzędu 24/7: status sprawy, wymagane dokumenty, właściwy wydział, terminy i opłaty. Dane obywateli na serwerach w Polsce.',
    type: 'website',
  },
};

const content: SeoLandingContent = {
  path: '/branze/ai-dla-administracji',
  breadcrumbLabel: 'AI dla administracji',
  h1: 'AI w administracji publicznej — infolinia urzędu, która odbiera za pierwszym razem',
  lead: 'AI w administracji publicznej to najczęściej agent głosowy, który odbiera infolinię urzędu przez całą dobę: sprawdza status sprawy, wymienia dokumenty potrzebne do wniosku, kieruje do właściwego wydziału i podaje terminy oraz opłaty. Mówi naturalną polszczyzną i obsługuje wiele połączeń naraz. Dane obywateli przetwarza na serwerach w Polsce, zgodnie z RODO.',
  serviceName: 'AI w administracji publicznej: voicebot dla urzędu',
  serviceDescription:
    'Wdrożenie agenta głosowego i chatbota dla urzędów oraz jednostek samorządu: całodobowa infolinia, informacja o statusie sprawy i wymaganych dokumentach, kierowanie do właściwego wydziału. Dane obywateli na serwerach w Polsce, zgodnie z RODO, z możliwością self-hostingu.',
  sections: [
    {
      heading: 'Dlaczego infolinie urzędów są przeciążone',
      paragraphs: [
        'Centrala urzędu ma zwykle kilka linii i kilka osób, które je obsługują. Ruch nie rozkłada się równo: telefon urywa się w poniedziałek rano, w ostatnim tygodniu terminu podatkowego i zawsze wtedy, gdy w mediach pojawi się informacja o nowym świadczeniu albo zmianie przepisów. W takich dniach dzwoniący słyszy sygnał zajętości, a nie odpowiedź.',
        'Druga rzecz to charakter pytań. Ogromna część połączeń dotyczy spraw powtarzalnych: co trzeba przynieść do wniosku o dowód, w którym pokoju składa się deklarację, ile wynosi opłata skarbowa, do kiedy zapłacić podatek od nieruchomości, czy sprawa jest już gotowa do odbioru. Odpowiedź jest jednoznaczna, bo wynika wprost z przepisu albo z systemu obiegu dokumentów. I urzędnik podaje ją po raz kolejny tego dnia, zamiast prowadzić postępowanie.',
        'Trzecia rzecz to godziny. Urząd pracuje najczęściej do 15:30 albo 16:00, czyli dokładnie wtedy, gdy mieszkaniec też jest w pracy. Jeden dzień z dyżurem do 17:00 niczego nie ratuje, bo generuje własny szczyt. Infolinia urzędu AI odbiera każde połączenie od razu, o dowolnej porze i niezależnie od tego, ile osób dzwoni w tej samej sekundzie. Sprawy proste zamyka od ręki, trudniejsze kieruje tam, gdzie faktycznie mają być rozpatrzone.',
        'Ile z tego ruchu agent realnie zdejmie, bywa bardzo różnie. W jednym urzędzie trzy te same pytania to grubo ponad połowa połączeń, w innym ruch jest rozproszony i zostaje może jedna trzecia. Bez zajrzenia w bilingi i w to, o co ludzie naprawdę pytają, każda liczba podana z góry jest zgadywaniem.',
      ],
    },
    {
      heading: 'Co voicebot dla urzędu załatwia bez udziału urzędnika',
      paragraphs: [
        'Agent głosowy prowadzi zwykłą rozmowę: interesant mówi, z czym dzwoni, a bot dopytuje o brakujące szczegóły i podaje konkretną odpowiedź. Żadnego wybierania cyfr jak w starym menu IVR. Rozmowa idzie naturalną polszczyzną, na silniku ElevenLabs. Każda odpowiedź opiera się na treściach, które urząd sam zatwierdził: kartach usług, regulaminach, uchwałach i informacjach z BIP. Tam, gdzie ma to znaczenie, agent podaje podstawę prawną i mówi wprost, skąd wziął informację.',
      ],
      bullets: [
        'Status sprawy: po numerze sprawy albo innym identyfikatorze bot sprawdza etap postępowania i informuje, czy dokument jest gotowy do odbioru.',
        'Wykaz wymaganych dokumentów. Co dołączyć do konkretnego wniosku, w ilu egzemplarzach, kto musi podpisać, jakie są wyjątki.',
        'Właściwy wydział i godziny. Do którego pokoju i w jakich godzinach zgłosić się z daną sprawą, gdzie złożyć pismo, kiedy urząd pracuje dłużej.',
        'Terminy i opłaty: ustawowy termin załatwienia sprawy, terminy płatności rat podatku, wysokość opłaty skarbowej i numer rachunku.',
        'Obsługa poza godzinami pracy. Wieczorem, w weekend i w święta bot odpowiada na pytania informacyjne, a sprawy wymagające urzędnika zapisuje jako prośbę o kontakt.',
        'Przekazanie do człowieka na każde żądanie dzwoniącego i zawsze wtedy, gdy sprawa wykracza poza informację ogólną.',
      ],
    },
    {
      heading: 'Gdzie trafiają nagrania rozmów i dane obywateli',
      paragraphs: [
        'W urzędzie to pytanie musi paść pierwsze, jeszcze przed rozmową o funkcjach. Rozmowa z infolinią to dane osobowe: numer telefonu, imię i nazwisko, numer sprawy, czasem informacja o sytuacji rodzinnej albo majątkowej. Dane obywateli przetwarzane przez agenta przechowujemy na serwerach zlokalizowanych w Polsce lub w Unii Europejskiej, zgodnie z RODO. Całe wdrożenie prowadzimy według standardów zgodnych z ISO 27001.',
        'Dla jednostek sektora publicznego istotny jest jeszcze jeden wariant: self-hosting. Framework OpenClaw, na którym budujemy agentów, jest oprogramowaniem open source, więc całość może działać na infrastrukturze urzędu albo w wybranej przez urząd serwerowni. Kod jest jawny, można go zaudytować, a instytucja nie jest zamknięta u jednego dostawcy. To argument, który zwykle rozstrzyga rozmowę z inspektorem ochrony danych i z działem IT.',
        'Praktyka jest prosta: minimalizacja i jasne zasady retencji. Agent zbiera tylko dane niezbędne do udzielenia informacji, okres przechowywania nagrań ustala administrator danych, a usuwanie po zdefiniowanym czasie konfigurujemy automatycznie. Podpisujemy umowę powierzenia przetwarzania, opisujemy zakres i cel przetwarzania, a na etapie analizy pomagamy przygotować materiał pod ocenę skutków dla ochrony danych, jeśli urząd uzna ją za konieczną.',
      ],
    },
    {
      heading: 'Dostępność cyfrowa, czyli telefon dla tych, którym e-usługi nie wychodzą',
      paragraphs: [
        'Sektor publiczny ma obowiązki dostępności, których nie ma biznes: strony i aplikacje muszą spełniać wymagania WCAG, a usługa ma być realnie osiągalna dla osób z niepełnosprawnościami. Wdrożenie agenta nie zwalnia z niczego. Nie zastępuje dostępnego serwisu i nie jest alternatywą dla poprawy strony. Dokłada za to kanał, który dla części mieszkańców jest najprostszy z możliwych.',
        'Telefon nie wymaga profilu zaufanego, logowania, aktualnej przeglądarki ani czytania małego druku na ekranie. Osoba starsza, osoba słabowidząca, ktoś bez smartfona albo ktoś, kto po prostu utknął w formularzu, może zadzwonić i zapytać własnymi słowami. Agent odpowiada głosem, w tempie rozmowy. I powtórzy to samo trzy razy bez zniecierpliwienia. Równolegle stawiamy chatbota na stronie urzędu i w kanałach tekstowych, żeby ta sama wiedza była dostępna także dla osób, które wolą pisać niż mówić.',
      ],
    },
    {
      heading: 'Kiedy AI w administracji publicznej się nie sprawdza',
      paragraphs: [
        'Trzeba to powiedzieć wprost, bo w sektorze publicznym granica przebiega ostrzej niż gdzie indziej. Agent nie wydaje decyzji administracyjnych, nie interpretuje przepisu w indywidualnej sprawie, nie ocenia dowodów i nie rozstrzyga wątpliwości na czyjąś korzyść. To zawsze należy do urzędnika, bo za tym stoi odpowiedzialność, tryb odwoławczy i konkretna podstawa prawna. Agent informuje o procedurze i o stanie sprawy. Na tym jego rola się kończy.',
        'Są też sytuacje, w których wdrożenie po prostu się nie opłaca. Jeśli urząd odbiera kilkanaście telefonów dziennie i nikt nie czeka na linii, koszt nie ma z czego się zwrócić. Lepiej wtedy uporządkować karty usług w BIP. Jeśli informacje o procedurach są rozproszone, sprzeczne i nikt ich od lat nie ruszał, też najpierw porządek, bo agent powtórzy błąd szybciej i częściej niż człowiek. Ta część projektu jest najmniej wdzięczna i nikt jej nie lubi, ale bez niej reszta nie ma sensu. I jeszcze jedno: jeśli w urzędzie nie ma osoby, która weźmie odpowiedzialność za treści i będzie je aktualizować przy zmianie przepisów, wdrożenie zestarzeje się w kilka miesięcy.',
      ],
      bullets: [
        'Sprawy wymagające decyzji administracyjnej, uznania albo interpretacji przepisu. Zawsze do urzędnika.',
        'Mały ruch telefoniczny, bez kolejek na linii: koszt wdrożenia nie ma z czego się zwrócić.',
        'Nieaktualne lub sprzeczne karty usług. Najpierw porządek w treściach, potem automatyzacja.',
        'Brak właściciela treści po stronie urzędu, czyli nikt nie zaktualizuje odpowiedzi po zmianie przepisów.',
      ],
    },
  ],
  howTo: {
    title: 'Jak wdrażamy agenta w urzędzie',
    steps: [
      {
        name: 'Bezpłatna konsultacja i przegląd ruchu na infolinii',
        text: 'Sprawdzamy, ile połączeń przychodzi, w jakich porach są szczyty i jakie pytania powtarzają się najczęściej. Wyliczamy, które z nich agent może zamknąć samodzielnie, i na tej podstawie określamy zakres oraz wycenę.',
      },
      {
        name: 'Uporządkowanie bazy wiedzy',
        text: 'Zbieramy karty usług, treści z BIP, regulaminy i wykazy dokumentów, a potem oznaczamy, który zapis wynika z jakiego aktu prawnego. Urząd zatwierdza treści przed uruchomieniem. Agent odpowiada wyłącznie na ich podstawie.',
      },
      {
        name: 'Ustalenie granic i ścieżek przekazania',
        text: 'Wspólnie z kierownikami wydziałów definiujemy, czego agent nie robi i kiedy natychmiast przełącza do człowieka. Ustalamy zakres danych, retencję nagrań i podpisujemy umowę powierzenia przetwarzania danych.',
      },
      {
        name: 'Pilotaż na wybranym zakresie',
        text: 'Startujemy wąsko: jeden wydział albo tylko obsługa poza godzinami pracy. Analizujemy prawdziwe rozmowy, poprawiamy odpowiedzi i dopiero potem rozszerzamy działanie na kolejne obszary.',
      },
      {
        name: 'Uruchomienie i utrzymanie',
        text: 'Po starcie monitorujemy jakość rozmów i aktualizujemy treści przy każdej zmianie przepisów, stawek lub godzin pracy. Urząd dostaje raport z tematów, które wracają najczęściej. To zwykle materiał do poprawy samych procedur.',
      },
    ],
  },
  useCases: {
    title: 'Gdzie obsługa interesantów AI daje efekt najszybciej',
    items: [
      {
        title: 'Status sprawy przez telefon',
        description:
          'Dzwoniący podaje numer sprawy i słyszy, na jakim etapie jest postępowanie oraz czy dokument czeka do odbioru. To zwykle najczęstsze pytanie na całej infolinii.',
      },
      {
        title: 'Wykaz wymaganych dokumentów',
        description:
          'Agent wymienia komplet załączników do konkretnego wniosku, przypomina o wyjątkach i podaje, gdzie pobrać formularz. Mniej wizyt kończy się odesłaniem po brakujący papier.',
      },
      {
        title: 'Kierowanie do właściwego wydziału',
        description:
          'Zamiast przełączania po kolei, agent ustala z rozmowy, czego dotyczy sprawa, i od razu podaje wydział, pokój i godziny albo przełącza pod właściwy numer.',
      },
      {
        title: 'Terminy i opłaty',
        description:
          'Ustawowy termin załatwienia sprawy, terminy rat podatku, wysokość opłaty skarbowej i numer rachunku. Same informacje jednoznaczne, a pyta o nie najwięcej osób.',
      },
      {
        title: 'Obsługa poza godzinami pracy urzędu',
        description:
          'Wieczorem i w weekend agent odpowiada na pytania informacyjne, a sprawy dla urzędnika zapisuje jako prośbę o kontakt z pierwszym dniem roboczym.',
      },
      {
        title: 'Odciążenie w szczycie sezonu',
        description:
          'Terminy podatkowe, nabory wniosków, zmiana przepisów. W tygodniach, gdy ruch rośnie kilkukrotnie, agent obsługuje wiele rozmów naraz i nikt nie słyszy sygnału zajętości.',
      },
    ],
  },
  pricing: {
    title: 'Ile kosztuje wdrożenie AI w urzędzie',
    note: 'Ceny netto. Zakres i wycenę przygotowujemy tak, aby dały się wprost przenieść do opisu przedmiotu zamówienia. Pierwsza konsultacja jest bezpłatna.',
    rows: [
      {
        name: 'Wdrożenie',
        price: 'od 5 000 zł',
        description:
          'Mały zakres: jeden numer, baza wiedzy z kart usług, scenariusze rozmów i testy. Większe wdrożenia, integracje z systemem obiegu dokumentów i self-hosting wyceniamy indywidualnie.',
      },
      {
        name: 'Utrzymanie Starter',
        price: '249 zł/mies.',
        description: 'Monitoring działania, drobne poprawki odpowiedzi, wsparcie mailowe.',
      },
      {
        name: 'Utrzymanie Standard',
        price: '499 zł/mies.',
        description: 'Aktualizacje treści po zmianach przepisów, rozwój scenariuszy, priorytetowe wsparcie.',
      },
      {
        name: 'Utrzymanie Premium',
        price: '799 zł/mies.',
        description: 'Pełna opieka: rozbudowa funkcji, raporty z tematów rozmów, najszybszy czas reakcji.',
      },
    ],
  },
  faq: [
    {
      question: 'Ile kosztuje voicebot dla urzędu?',
      answer:
        'Wdrożenie zaczyna się od 5 000 zł netto przy małym zakresie: jeden numer, baza wiedzy oparta na kartach usług, podstawowe scenariusze rozmów. Większe projekty, integracje z systemem obiegu dokumentów i wariant self-hosted wyceniamy indywidualnie. Do tego dochodzi utrzymanie: 249, 499 albo 799 zł netto miesięcznie. Pierwsza konsultacja i wycena są bezpłatne.',
    },
    {
      question: 'Gdzie trafiają dane obywateli i czy jest to zgodne z RODO?',
      answer:
        'Dane przetwarzane przez agenta, czyli nagrania, numery telefonów i numery spraw, przechowujemy na serwerach w Polsce lub w Unii Europejskiej, zgodnie z RODO i według standardów zgodnych z ISO 27001. Podpisujemy umowę powierzenia przetwarzania, stosujemy minimalizację danych i konfigurujemy automatyczne usuwanie nagrań po okresie ustalonym z administratorem danych. A jeśli to nie wystarczy, zostaje pełny self-hosting na infrastrukturze urzędu.',
    },
    {
      question: 'Czy agent może wydać decyzję albo zinterpretować przepis?',
      answer:
        'Nie i tak to konfigurujemy celowo. Agent udziela informacji o procedurze, wymaganych dokumentach, terminach i stanie sprawy. Każda kwestia wymagająca decyzji administracyjnej, uznania albo wykładni przepisu w konkretnej sprawie trafia do urzędnika. Gdy rozmowa dotknie takiej granicy, agent mówi o tym wprost i przekazuje połączenie lub zapisuje prośbę o kontakt.',
    },
    {
      question: 'Skąd wiadomo, że agent nie poda błędnej informacji?',
      answer:
        'Agent odpowiada wyłącznie na podstawie treści zatwierdzonych przez urząd: kart usług, informacji z BIP, regulaminów i uchwał. Tam, gdzie ma to znaczenie, podaje podstawę prawną i źródło. Podobnie działa nasza Superkadrowa, czyli kadrowa AI, która opiera odpowiedzi na ponad 40 aktach prawnych i cytuje konkretne artykuły Kodeksu pracy zamiast odpowiadać z pamięci modelu.',
    },
    {
      question: 'Jak wdrożenie ma się do zamówień publicznych?',
      answer:
        'Zakres, kamienie milowe i pozycje cenowe przygotowujemy w formie, którą można wprost przenieść do opisu przedmiotu zamówienia. Na etapie bezpłatnej konsultacji dorzucamy szacunek wartości i listę wymagań technicznych, w tym lokalizację danych oraz wariant self-hostingu. O trybie postępowania decyduje oczywiście sam urząd ze swoim działem zamówień. My tego nie rozstrzygamy.',
    },
    {
      question: 'Czy agent głosowy faktycznie radzi sobie z publicznymi danymi?',
      answer:
        'Mamy publiczne demo, które można przetestować bez umawiania spotkania: agent na stronie pks-gryfice-demo.vercel.app odpowiada na pytania o rozkłady jazdy regionalnego przewoźnika, obsługuje 6 przystanków i 276 odjazdów, a każdą odpowiedź opiera na publicznych danych rozkładowych i podaje źródło. To nasze demo, nie wdrożenie u klienta. Przewoźnik nam tej pracy nie zlecał.',
    },
  ],
  cta: {
    heading: 'Sprawdź, ile połączeń nie odbiera dziś Wasza centrala',
    sub: 'Umów bezpłatną konsultację. Przejrzymy ruch na infolinii, wskażemy pytania, które agent zamknie samodzielnie, i te, które muszą zostać u urzędnika.',
  },
  related: [
    { label: 'Agent głosowy AI', href: '/uslugi/agent-glosowy-ai' },
    { label: 'Cennik wdrożeń AI', href: '/cennik' },
    { label: 'Branże', href: '/branze' },
    { label: 'Automatyzacja procesów AI', href: '/uslugi/automatyzacja-procesow-ai' },
  ],
};

export default function Page() {
  return <SeoLanding content={content} />;
}
