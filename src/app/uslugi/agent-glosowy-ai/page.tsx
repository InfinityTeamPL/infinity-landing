import type { Metadata } from 'next';
import SeoLanding, { SeoLandingContent } from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'Agent głosowy AI — voicebot odbierający telefony 24/7',
  description:
    'Agent głosowy AI odbiera telefony 24/7, umawia wizyty i informuje klientów naturalną polską mową. Wdrożenie od 5 000 zł netto. Umów bezpłatną konsultację.',
  alternates: { canonical: '/uslugi/agent-glosowy-ai' },
  openGraph: {
    title: 'Agent głosowy AI — voicebot odbierający telefony 24/7',
    description:
      'Voicebot dla firm z naturalną polską mową (ElevenLabs). Odbiera połączenia, umawia terminy, przekierowuje do człowieka. Pierwsza konsultacja bezpłatna.',
    type: 'website',
  },
};

const content: SeoLandingContent = {
  path: '/uslugi/agent-glosowy-ai',
  breadcrumbLabel: 'Agent głosowy AI',
  h1: 'Agent głosowy AI — voicebot, który odbiera telefony 24/7',
  lead: 'Agent głosowy AI to system, który odbiera połączenia telefoniczne i prowadzi naturalną rozmowę z dzwoniącym — odpowiada na pytania, umawia wizyty i przekazuje informacje bez udziału pracownika. W przeciwieństwie do infolinii z nagraniami rozumie swobodną mowę, działa 24 godziny na dobę i obsługuje wielu dzwoniących jednocześnie.',
  serviceName: 'Agent głosowy AI',
  serviceDescription:
    'Wdrożenia agentów głosowych AI dla firm: voicebot do obsługi telefonicznej z naturalną polską mową (ElevenLabs), dostępny 24/7, zintegrowany z kalendarzem, CRM i centralą telefoniczną.',
  sections: [
    {
      heading: 'Czym agent głosowy AI różni się od IVR i nagrań?',
      paragraphs: [
        'Klasyczna automatyczna infolinia to drzewko wyboru: „wciśnij 1, aby połączyć się z recepcją, wciśnij 2, aby poznać godziny otwarcia". Dzwoniący musi wysłuchać całego menu, dopasować swoją sprawę do jednej z opcji, a gdy żadna nie pasuje — czeka na konsultanta albo się rozłącza. Nagrania z kolei tylko odtwarzają komunikat i nie odpowiedzą na żadne pytanie, które wykracza poza przygotowany tekst.',
        'Agent głosowy AI działa inaczej. Dzwoniący po prostu mówi, z czym dzwoni — własnymi słowami, tak jak do człowieka. Voicebot rozumie intencję wypowiedzi, dopytuje, gdy czegoś mu brakuje, i prowadzi rozmowę do konkretnego rezultatu: umówionej wizyty, przekazanej informacji albo połączenia z właściwą osobą. Pamięta też kontekst — jeśli rozmówca w połowie rozmowy zmieni temat, agent nie zaczyna od zera.',
      ],
      bullets: [
        'IVR wymaga wciskania klawiszy — agent głosowy AI rozumie swobodną mowę',
        'Nagranie odtwarza jeden komunikat — voicebot odpowiada na pytania z bazy wiedzy firmy',
        'Kolejka do konsultanta rośnie w godzinach szczytu — agent obsługuje wielu dzwoniących równolegle',
        'IVR działa według sztywnego drzewka — agent prowadzi rozmowę i reaguje na zmianę tematu',
      ],
    },
    {
      heading: 'Asystent telefoniczny AI z naturalną polską mową',
      paragraphs: [
        'Największą barierą voicebotów była do niedawna sztuczna, „robotyczna" mowa — szczególnie w języku polskim, z jego odmianą i akcentem. Nasze wdrożenia opieramy na technologii ElevenLabs, która generuje jedną z najbardziej naturalnych syntez polskiej mowy dostępnych na rynku. Asystent telefoniczny AI poprawnie odmienia nazwy, daty i liczby, zachowuje naturalną intonację pytań i robi pauzy tam, gdzie zrobiłby je człowiek.',
        'Głos dobieramy wspólnie z klientem — ton, tempo i sposób mówienia powinny pasować do charakteru firmy. Inaczej brzmi recepcjonistka AI w gabinecie medycznym, inaczej infolinia przewoźnika. Agent zawsze na początku rozmowy informuje, że dzwoniący rozmawia z systemem AI — to wymóg uczciwej komunikacji i element zgodności z przepisami.',
      ],
    },
    {
      heading: 'Co potrafi voicebot do obsługi telefonicznej?',
      paragraphs: [
        'Zakres działania voicebota do obsługi telefonicznej ustalamy pod konkretne procesy firmy. Agent odpowiada wyłącznie na podstawie przygotowanej bazy wiedzy — nie improwizuje i nie zmyśla. Najczęściej wdrażane funkcje to:',
      ],
      bullets: [
        'Odbieranie połączeń 24/7 — także w weekendy, święta i poza godzinami pracy biura',
        'Umawianie, przekładanie i odwoływanie wizyt z zapisem bezpośrednio w kalendarzu firmy',
        'Informowanie o rozkładach, terminach, cenach, godzinach otwarcia i statusie sprawy',
        'Przekierowanie rozmowy do właściwego pracownika, gdy sprawa wymaga człowieka',
        'Zbieranie danych kontaktowych i tematu rozmowy, gdy nikt nie może odebrać — z prośbą o oddzwonienie',
        'Zapisywanie notatki z każdej rozmowy w CRM, żeby zespół widział pełną historię kontaktu',
      ],
    },
    {
      heading: 'Realizacja: voicebot dla przewoźnika autobusowego',
      paragraphs: [
        'Dla regionalnego przewoźnika autobusowego wdrożyliśmy agenta głosowego, który przez telefon podaje rozkłady jazdy — 24 godziny na dobę, 7 dni w tygodniu. Pasażer dzwoni, mówi skąd i dokąd chce jechać, a agent podaje najbliższe odjazdy i odpowiada na dodatkowe pytania o trasę.',
        'Wcześniej te połączenia trafiały do biura przewoźnika, które pracuje w standardowych godzinach — po ich zakończeniu pasażerowie zostawali bez informacji, a w godzinach szczytu linia bywała zajęta. Teraz agent odbiera każde połączenie od razu, niezależnie od pory i liczby dzwoniących jednocześnie, a pracownicy biura zajmują się sprawami, które faktycznie wymagają człowieka.',
      ],
    },
    {
      heading: 'Voicebot dla firm — kiedy wdrożenie ma sens?',
      paragraphs: [
        'Voicebot dla firm sprawdza się wszędzie tam, gdzie telefon jest ważnym kanałem kontaktu, a duża część rozmów jest powtarzalna: pytania o godziny, terminy, ceny, dostępność, status sprawy. Jeśli recepcja albo sekretariat spędza godziny na odpowiadaniu wciąż na te same pytania — to naturalne pierwsze zadanie dla agenta.',
        'Drugi typowy sygnał to nieodebrane połączenia. Każdy telefon, którego nikt nie odebrał — bo było po godzinach, bo linia była zajęta, bo pracownik obsługiwał klienta przy ladzie — to potencjalnie utracona wizyta, rezerwacja albo zlecenie. Agent głosowy AI nie zastępuje zespołu: przejmuje rozmowy proste i powtarzalne, a ludzi odciąża do spraw, w których naprawdę są potrzebni. Wdrożenie zaczynamy od wąskiego zakresu i rozszerzamy go, gdy agent udowodni swoją wartość na realnych rozmowach.',
      ],
    },
  ],
  howTo: {
    title: 'Jak wdrażamy agenta głosowego AI',
    steps: [
      {
        name: 'Bezpłatna konsultacja i analiza połączeń',
        text: 'Rozmawiamy o tym, kto i po co dzwoni do Twojej firmy, ile połączeń pozostaje nieodebranych i które rozmowy się powtarzają. Na tej podstawie wskazujemy zakres, w którym agent da najszybszy efekt, i przedstawiamy wycenę.',
      },
      {
        name: 'Projekt scenariuszy rozmów i bazy wiedzy',
        text: 'Wspólnie ustalamy, co agent ma wiedzieć i jak prowadzić rozmowę: powitanie, odpowiedzi na najczęstsze pytania, zasady umawiania terminów i reguły przekazywania rozmowy do pracownika.',
      },
      {
        name: 'Konfiguracja głosu i integracje',
        text: 'Dobieramy głos w technologii ElevenLabs i łączymy agenta z Twoją telefonią, kalendarzem oraz systemem CRM lub rezerwacyjnym, żeby działał na danych, z których firma korzysta na co dzień.',
      },
      {
        name: 'Testy na realnych rozmowach',
        text: 'Przed uruchomieniem testujemy agenta na próbnych połączeniach i różnych wariantach pytań — także tych zadanych niewyraźnie lub nietypowo. Poprawiamy scenariusze, aż rozmowy przebiegają płynnie.',
      },
      {
        name: 'Uruchomienie i utrzymanie',
        text: 'Agent zaczyna odbierać prawdziwe połączenia. W ramach pakietu utrzymania monitorujemy jakość rozmów, rozbudowujemy bazę wiedzy o nowe pytania i wprowadzamy zmiany, gdy zmienia się oferta firmy.',
      },
    ],
  },
  useCases: {
    title: 'Zastosowania agenta głosowego AI',
    items: [
      {
        title: 'Recepcjonistka AI w firmie',
        description:
          'Odbiera telefony do biura, informuje o ofercie i godzinach pracy, łączy z właściwym działem i zapisuje temat rozmowy, gdy nikt nie może odebrać.',
      },
      {
        title: 'Przychodnie i gabinety',
        description:
          'Umawia, przekłada i odwołuje wizyty bez angażowania rejestracji, informuje o przygotowaniu do badań i dostępnych terminach — również po godzinach.',
      },
      {
        title: 'Rezerwacje w restauracjach i salonach',
        description:
          'Przyjmuje rezerwacje stolików i terminów usług przez telefon, sprawdza dostępność w kalendarzu i potwierdza szczegóły z klientem.',
      },
      {
        title: 'Infolinia informacyjna',
        description:
          'Podaje rozkłady, ceny, statusy spraw i odpowiedzi na najczęstsze pytania — obsługując wielu dzwoniących jednocześnie, bez kolejki.',
      },
      {
        title: 'Przypomnienia o płatnościach',
        description:
          'Dzwoni z uprzejmym przypomnieniem o zbliżającym się lub zaległym terminie płatności i przekazuje sprawę pracownikowi, gdy klient chce ustalić szczegóły.',
      },
      {
        title: 'Rekrutacja i wstępna selekcja',
        description:
          'Przeprowadza krótkie rozmowy wstępne z kandydatami: pyta o dostępność, oczekiwania i doświadczenie, a wyniki zapisuje dla działu HR.',
      },
    ],
  },
  pricing: {
    title: 'Ile kosztuje agent głosowy AI?',
    note: 'Ceny netto. Dokładną wycenę przygotowujemy po bezpłatnej konsultacji — zależy od liczby scenariuszy rozmów i integracji.',
    rows: [
      {
        name: 'Wdrożenie',
        price: 'od 5 000 zł',
        description:
          'Mały zakres: pojedynczy scenariusz rozmowy, konfiguracja głosu, podstawowa integracja. Większe projekty wyceniamy indywidualnie.',
      },
      {
        name: 'Utrzymanie Starter',
        price: '249 zł/mies.',
        description: 'Monitoring działania agenta i drobne poprawki w bazie wiedzy.',
      },
      {
        name: 'Utrzymanie Standard',
        price: '499 zł/mies.',
        description: 'Regularna rozbudowa scenariuszy, raporty z rozmów, priorytetowe wsparcie.',
      },
      {
        name: 'Utrzymanie Premium',
        price: '799 zł/mies.',
        description: 'Pełna opieka: rozwój agenta, zmiany integracji, konsultacje i szybki czas reakcji.',
      },
    ],
  },
  faq: [
    {
      question: 'Ile kosztuje wdrożenie agenta głosowego AI?',
      answer:
        'Wdrożenie zaczyna się od 5 000 zł netto przy małym zakresie — na przykład jeden scenariusz rozmowy z podstawową integracją. Większe projekty wyceniamy indywidualnie po analizie potrzeb. Do tego dochodzi utrzymanie: pakiety od 249 do 799 zł netto miesięcznie, zależnie od zakresu wsparcia. Pierwsza konsultacja jest bezpłatna — po niej otrzymujesz konkretną wycenę bez żadnych zobowiązań.',
    },
    {
      question: 'Jak długo trwa wdrożenie voicebota?',
      answer:
        'W małych firmach wdrożenie trwa zwykle 2–4 tygodnie — od pierwszej rozmowy do momentu, gdy agent odbiera prawdziwe połączenia. Przy większych organizacjach, gdzie dochodzi więcej scenariuszy, integracji z systemami i testów, planujemy 1–3 miesiące. Sporo zależy od tego, jak szybko otrzymamy dostępy do centrali telefonicznej i systemów, z którymi agent ma współpracować.',
    },
    {
      question: 'Czy agent głosowy AI jest zgodny z RODO?',
      answer:
        'Tak. Dane rozmówców przetwarzamy na serwerach zlokalizowanych w Polsce, a wdrożenie projektujemy w pełnej zgodności z RODO — od podstaw prawnych przetwarzania po informowanie dzwoniącego, że rozmawia z systemem AI. Pracujemy według standardów zgodnych z ISO 27001. Pomagamy też przygotować zapisy do polityki prywatności i umowę powierzenia przetwarzania danych.',
    },
    {
      question: 'Czy voicebot naprawdę brzmi naturalnie po polsku?',
      answer:
        'Tak — korzystamy z technologii ElevenLabs, która generuje jedną z najbardziej naturalnych syntez polskiej mowy na rynku. Głos poprawnie odmienia słowa, daty i liczby, zachowuje intonację pytań i naturalne pauzy. Ton i tempo mówienia dobieramy wspólnie z klientem, a przed uruchomieniem możesz odsłuchać próbki i wybrać głos pasujący do charakteru firmy.',
    },
    {
      question: 'Co się dzieje, gdy agent nie zna odpowiedzi?',
      answer:
        'Agent nie zmyśla — odpowiada wyłącznie na podstawie bazy wiedzy, którą wspólnie przygotowujemy. Gdy pytanie wykracza poza jego zakres, przekierowuje rozmowę do wskazanego pracownika, a poza godzinami pracy zapisuje temat i numer telefonu, żeby zespół mógł oddzwonić. Takie rozmowy widać w raportach, więc baza wiedzy stale rośnie o realne pytania klientów.',
    },
    {
      question: 'Czy agenta można zintegrować z kalendarzem i CRM?',
      answer:
        'Tak. Agenta głosowego łączymy z kalendarzami, systemami CRM i rezerwacyjnymi oraz centralą telefoniczną, z której firma już korzysta. Dzięki temu sam sprawdza wolne terminy, zapisuje wizyty i po każdej rozmowie aktualizuje dane klienta. Jeśli używasz mniej typowego systemu, możliwości integracji sprawdzimy na bezpłatnej konsultacji.',
    },
  ],
  cta: {
    heading: 'Sprawdź, ile połączeń odbierze za Ciebie agent głosowy AI',
    sub: 'Pierwsza konsultacja jest bezpłatna. Przeanalizujemy, które rozmowy w Twojej firmie może przejąć voicebot, i przedstawimy konkretną wycenę.',
  },
  related: [
    { label: 'Chatbot AI dla firm', href: '/uslugi/chatbot-ai' },
    { label: 'Automatyzacja procesów AI', href: '/uslugi/automatyzacja-procesow-ai' },
    { label: 'Voicebot dla przychodni', href: '/branze/voicebot-dla-przychodni' },
    { label: 'Cennik wdrożeń AI', href: '/cennik' },
  ],
};

export default function Page() {
  return <SeoLanding content={content} />;
}
