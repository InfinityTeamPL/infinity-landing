import type { Metadata } from 'next';
import SeoLanding, { SeoLandingContent } from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'Automatyzacja procesów AI dla firm — wdrożenia agentów',
  description:
    'Automatyzacja procesów AI: agenci wykonują powtarzalne zadania za Twój zespół. Wdrożenie od 5 000 zł netto, pierwsza konsultacja bezpłatna.',
  alternates: { canonical: '/uslugi/automatyzacja-procesow-ai' },
  openGraph: {
    title: 'Automatyzacja procesów AI dla firm — wdrożenia agentów',
    description:
      'Agenci AI, którzy wykonują powtarzalne zadania za Twój zespół: dokumenty, raporty, e-maile, CRM. Wdrożenie od 5 000 zł netto.',
    type: 'website',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

const content: SeoLandingContent = {
  path: '/uslugi/automatyzacja-procesow-ai',
  breadcrumbLabel: 'Automatyzacja procesów AI',
  h1: 'Automatyzacja procesów AI — agenci, którzy wykonują pracę za Ciebie',
  lead: 'Automatyzacja procesów AI to zastąpienie powtarzalnej pracy biurowej agentami, którzy samodzielnie wykonują zadania: czytają dokumenty, piszą e-maile, uzupełniają systemy i pilnują terminów. Chatbot odpowiada na pytania i na tym kończy. Agent prowadzi cały proces od początku do końca, a człowiek zatwierdza wynik.',
  serviceName: 'Automatyzacja procesów AI',
  serviceDescription:
    'Wdrożenia agentów AI, którzy wykonują powtarzalne procesy biznesowe: obieg dokumentów, raporty, obsługę e-maili, pracę w CRM, fakturowanie i onboarding. Wdrożenie od 5 000 zł netto, utrzymanie w abonamencie.',
  sections: [
    {
      heading: 'Czym agenci AI dla firm różnią się od chatbotów',
      paragraphs: [
        'Większość firm zna AI od strony chatbotów. To narzędzia, które odpowiadają na pytania. Agent AI idzie o krok dalej: dostaje zadanie i je wykonuje. Odbiera e-mail z zamówieniem, wyciąga z niego dane, wprowadza je do systemu, przygotowuje potwierdzenie i zapisuje sprawę w CRM. Chatbot kończy na rozmowie. Agent kończy na rezultacie.',
        'Nasze wdrożenia budujemy m.in. na OpenClaw, frameworku agentów AI, który w 60 dni od premiery stał się najpopularniejszym projektem na GitHubie i ma dziś ponad 380 tysięcy gwiazdek. Stworzył go Peter Steinberger. My wykorzystujemy go do łączenia agentów z narzędziami, z których Twoja firma już korzysta: pocztą, kalendarzem, CRM-em czy systemem księgowym.',
        'Jako agencja automatyzacji AI nie sprzedajemy gotowego pudełka. Każde wdrożenie zaczynamy od procesów, które faktycznie zabierają czas Twojemu zespołowi. Dopiero pod nie dobieramy narzędzia oraz zakres samodzielności agenta.',
      ],
    },
    {
      heading: 'Które procesy automatyzować najpierw',
      paragraphs: [
        'Nie każdy proces opłaca się automatyzować od razu. Najlepsze efekty na start dają zadania, które spełniają trzy warunki:',
        'Procesy kreatywne, negocjacje i decyzje strategiczne zostawiamy ludziom. Automatyzacja AI dla firm działa najlepiej tam, gdzie praca jest przewidywalna, a ewentualny błąd łatwo wychwycić. Dlatego na audycie wskazujemy najpierw zadania o niskim ryzyku i szybkim zwrocie z inwestycji. Nie zawsze trafiamy za pierwszym razem. Bywa, że dopiero pilot pokazuje, iż ciekawszy do automatyzacji jest sąsiedni proces.',
      ],
      bullets: [
        'Zadanie wraca codziennie albo co tydzień w tym samym schemacie, jak przepisywanie danych z faktur czy sklejanie zestawień.',
        'Da się je opisać jasnymi zasadami: jeśli X, zrób Y. Agent potrzebuje reguł, nie intuicji.',
        'Powtórzeń jest dużo, bo im większy wolumen, tym szybciej zwraca się wdrożenie. Sto e-maili dziennie to lepszy kandydat niż jeden na tydzień.',
      ],
    },
    {
      heading: 'Człowiek w pętli i kontrola nad automatyzacją',
      paragraphs: [
        'W procesach, które dotykają pieniędzy, klientów albo danych osobowych, agent nie działa w pełni samodzielnie. Stosujemy podejście human-in-the-loop: agent przygotowuje pracę (projekt odpowiedzi, wypełniony dokument, zestawienie do akceptacji), a człowiek zatwierdza wynik jednym kliknięciem. Zespół zachowuje kontrolę i przestaje wykonywać pracę odtwórczą.',
        'Zakres samodzielności agenta ustalamy wspólnie na etapie wdrożenia i możemy go stopniowo rozszerzać. Zwykle firmy zaczynają od akceptacji każdego kroku, a po kilku tygodniach zostawiają sobie tylko wyjątki i sprawy nietypowe. Bywa różnie. Część zespołów woli sprawdzać wszystko i tak już zostaje, to też jest w porządku.',
      ],
    },
    {
      heading: 'Przykłady z naszych wdrożeń',
      paragraphs: [
        'Realizacje opisujemy anonimowo, bo naszym klientom zależy na dyskrecji. W obszarze kadr i płac zbudowaliśmy agentkę AI z bazą aktualnego polskiego prawa pracy. Pilnuje terminów ZUS i PIT, wypełnia dokumenty kadrowe i odpowiada na pytania pracowników, a specjalista kadrowy zatwierdza efekty jej pracy.',
        'Dla sektora rolniczego stworzyliśmy aplikację AI wspierającą codzienne decyzje operacyjne. Regionalnemu przewoźnikowi autobusowemu zbudowaliśmy agenta głosowego, który przez telefon podaje rozkłady jazdy 24/7. Powstała też platforma kojarząca startupy z inwestorami. Różne branże, ten sam schemat: powtarzalny proces przejmuje agent, człowiek pilnuje jakości.',
      ],
    },
  ],
  howTo: {
    title: 'Jak wdrażamy automatyzację procesów AI',
    steps: [
      {
        name: 'Audyt procesów',
        text: 'Na bezpłatnej konsultacji mapujemy procesy w Twojej firmie i sprawdzamy, ile czasu pochłaniają. Szukamy zadań, które powtarzają się często i dają się opisać regułami.',
      },
      {
        name: 'Lista quick-winów',
        text: 'Wybieramy 2–3 procesy o najlepszym stosunku efektu do kosztu wdrożenia. Dostajesz konkretną propozycję z wyceną, a nie ogólną prezentację.',
      },
      {
        name: 'Pilot',
        text: 'Wdrażamy pierwszego agenta na ograniczonym zakresie. W małych firmach trwa to 2–4 tygodnie. Efekty sprawdzamy na realnych zadaniach, z człowiekiem w pętli.',
      },
      {
        name: 'Skalowanie',
        text: 'Gdy pilot się sprawdzi, rozszerzamy automatyzację na kolejne procesy i działy. Większe wdrożenia zamykamy zwykle w 1–3 miesiące.',
      },
      {
        name: 'Utrzymanie i rozwój',
        text: 'W abonamencie monitorujemy pracę agentów, poprawiamy jakość ich działania i dokładamy integracje w miarę potrzeb.',
      },
    ],
  },
  useCases: {
    title: 'Co najczęściej automatyzujemy',
    items: [
      {
        title: 'Obieg dokumentów',
        description:
          'Agent odczytuje umowy, faktury i formularze, wyciąga z nich dane i wprowadza je do właściwych systemów, bez ręcznego przepisywania.',
      },
      {
        title: 'Raporty',
        description:
          'Cykliczne zestawienia sprzedaży, stanów magazynowych czy wskaźników powstają automatycznie i trafiają na skrzynkę albo na Slacka o ustalonej porze.',
      },
      {
        title: 'Obsługa e-maili',
        description:
          'Agent segreguje pocztę, odpowiada na powtarzalne zapytania i przygotowuje projekty odpowiedzi w trudniejszych sprawach.',
      },
      {
        title: 'Praca w CRM',
        description:
          'Uzupełnianie kart klientów, notatki po rozmowach, przypomnienia o follow-upach. CRM aktualizuje się sam.',
      },
      {
        title: 'Fakturowanie i płatności',
        description:
          'Wystawianie faktur cyklicznych, dopasowywanie płatności do dokumentów i przypomnienia o zaległościach, zawsze z akceptacją człowieka.',
      },
      {
        title: 'Onboarding',
        description:
          'Nowy pracownik lub klient dostaje komplet dokumentów, dostępów i instrukcji według ustalonej ścieżki, a agent pilnuje, czy każdy krok się wykonał.',
      },
    ],
  },
  pricing: {
    title: 'Ile kosztuje automatyzacja procesów AI',
    note: 'Wdrożenie wyceniamy po audycie: od 5 000 zł netto za mały zakres po wyceny indywidualne przy większych projektach. Utrzymanie rozliczamy w abonamencie.',
    rows: [
      {
        name: 'Wdrożenie',
        price: 'od 5 000 zł netto',
        description: 'Mały zakres, np. jeden proces z integracjami. Większe projekty wyceniamy indywidualnie po audycie.',
      },
      {
        name: 'Starter',
        price: '249 zł/mies.',
        description: 'Podstawowe utrzymanie i monitoring wdrożonej automatyzacji.',
      },
      {
        name: 'Standard',
        price: '499 zł/mies.',
        description: 'Utrzymanie plus bieżący rozwój automatyzacji i szybsze wsparcie.',
      },
      {
        name: 'Premium',
        price: '799 zł/mies.',
        description: 'Najszerszy zakres opieki i rozwoju, szczegóły dopasowujemy do skali wdrożenia.',
      },
    ],
  },
  faq: [
    {
      question: 'Ile kosztuje automatyzacja procesów AI dla firmy?',
      answer:
        'Wdrożenie zaczyna się od 5 000 zł netto przy małym zakresie, np. automatyzacji jednego procesu. Większe projekty wyceniamy indywidualnie po audycie. Do tego dochodzi abonament utrzymaniowy: Starter 249 zł, Standard 499 zł lub Premium 799 zł miesięcznie. Pierwsza konsultacja, na której szacujemy koszty dla Twojej firmy, jest bezpłatna.',
    },
    {
      question: 'Jak policzyć, czy automatyzacja AI mi się opłaci?',
      answer:
        'Najprościej: pomnóż liczbę godzin, które zespół spędza na powtarzalnym zadaniu, przez koszt godziny pracy i porównaj z kosztem wdrożenia oraz abonamentu. Na naszej stronie znajdziesz kalkulator ROI automatyzacji, który robi to za Ciebie. Na bezpłatnej konsultacji liczymy to razem, na danych z Twojej firmy, bez zobowiązań.',
    },
    {
      question: 'Czy automatyzacja procesów AI jest zgodna z RODO?',
      answer:
        'Tak. Dane naszych klientów przetwarzamy na serwerach w Polsce, w pełnej zgodności z RODO, a nasze standardy bezpieczeństwa są zgodne z ISO 27001. Przed wdrożeniem ustalamy, jakie dane agent może przetwarzać, ograniczamy zakres do niezbędnego minimum i podpisujemy umowę powierzenia przetwarzania danych, jeśli proces tego wymaga.',
    },
    {
      question: 'Czy agenci AI zastąpią moich pracowników?',
      answer:
        'Nie, przejmują powtarzalną część ich pracy. Agent przepisuje dane, pilnuje terminów i przygotowuje dokumenty, a ludzie zajmują się tym, czego automatyzacja nie umie: relacjami z klientami, decyzjami i sytuacjami nietypowymi. W praktyce zespoły nie maleją, tylko przestają tonąć w zadaniach odtwórczych.',
    },
    {
      question: 'Czy zintegrujecie agentów z SAP, Salesforce albo Microsoft 365?',
      answer:
        'Tak, integracje to standardowa część wdrożenia. Agenci łączą się z systemami przez API lub gotowe konektory: od pakietów biurowych, przez CRM-y, po systemy ERP. Jeśli Twój system nie udostępnia API, szukamy innej drogi, np. pracy na eksportach plików. Dokładny zakres integracji ustalamy na audycie.',
    },
    {
      question: 'Jak długo trwa wdrożenie automatyzacji?',
      answer:
        'Małe wdrożenia, czyli jeden proces i kilka integracji, zamykamy w 2–4 tygodnie. Większe projekty, obejmujące kilka działów i systemów, trwają zwykle 1–3 miesiące. Zawsze zaczynamy od pilota, więc pierwsze efekty widzisz na długo przed końcem całego projektu.',
    },
  ],
  cta: {
    heading: 'Sprawdźmy, które procesy w Twojej firmie da się zautomatyzować',
    sub: 'Na bezpłatnej konsultacji zmapujemy Twoje procesy i wskażemy, gdzie agenci AI zwrócą się najszybciej. Bez zobowiązań.',
  },
  related: [
    { label: 'Automatyzacja HR i kadr', href: '/uslugi/automatyzacja-hr' },
    { label: 'Agent głosowy AI', href: '/uslugi/agent-glosowy-ai' },
    { label: 'AI dla kancelarii prawnej', href: '/branze/ai-dla-kancelarii' },
    { label: 'OpenClaw Polska', href: '/openclaw' },
    { label: 'Cennik wdrożeń AI', href: '/cennik' },
  ],
};

export default function Page() {
  return <SeoLanding content={content} />;
}
