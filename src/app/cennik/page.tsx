import type { Metadata } from 'next';
import SeoLanding, { SeoLandingContent } from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'Ile kosztuje wdrożenie AI w firmie? Cennik 2026',
  description:
    'Ile kosztuje wdrożenie AI? Od 5 000 zł netto za mały zakres, utrzymanie od 249 zł/mies. Sprawdź cennik AI dla firm i umów bezpłatną konsultację.',
  alternates: { canonical: '/cennik' },
  openGraph: {
    title: 'Ile kosztuje wdrożenie AI w firmie? Cennik 2026',
    description:
      'Wdrożenie agenta AI od 5 000 zł netto, utrzymanie od 249 zł/mies. Zobacz pełny cennik AI dla firm: chatboty, voiceboty, automatyzacja procesów.',
    type: 'website',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

const content: SeoLandingContent = {
  path: '/cennik',
  breadcrumbLabel: 'Cennik',
  h1: 'Ile kosztuje wdrożenie AI w firmie? Cennik 2026',
  lead: 'Wdrożenie AI w firmie kosztuje od 5 000 zł netto za mały zakres, na przykład za chatbota na stronę albo prostego agenta głosowego. Przy rozbudowanych integracjach schodzi to na wycenę indywidualną. Do tego dochodzi utrzymanie: od 249 do 799 zł netto miesięcznie. Pierwsza konsultacja i audyt procesów są bezpłatne, a małe wdrożenie trwa 2–4 tygodnie.',
  sections: [
    {
      heading: 'Co wpływa na cenę wdrożenia AI',
      paragraphs: [
        'Nie ma jednej ceny wdrożenia AI, bo nie ma dwóch identycznych firm. Widełki są szerokie: od 5 000 zł netto do wycen indywidualnych. Wpływają na nie cztery rzeczy i wszystkie sprawdzamy podczas bezpłatnego audytu procesów, zanim padnie jakakolwiek kwota. Wolimy tak, niż rzucić cenę z sufitu i korygować ją w trakcie prac.',
      ],
      bullets: [
        'Najwięcej waży zakres. Jeden dobrze zdefiniowany proces, na przykład odpowiadanie na powtarzalne pytania klientów, to mały zakres. Kilka procesów naraz albo agent podejmujący decyzje w wielu krokach to już zupełnie inna wycena.',
        'Agent, który tylko rozmawia, jest tańszy od takiego, który sprawdza status zamówienia w Waszym systemie, zakłada zgłoszenie w CRM albo wypełnia dokumenty kadrowe. Każda integracja to osobna robota.',
        'Chatbot na stronie WWW to jedno. Ten sam agent dostępny w WhatsAppie, na Teams, Slacku i Telegramie (obsługujemy ponad 23 kanały) wymaga osobnej konfiguracji i osobnych testów w każdym z nich.',
        'Zostaje jeszcze Wasza baza wiedzy. Uporządkowane FAQ i spisane procedury skracają wdrożenie. Gorzej, gdy wiedza siedzi w mailach i w głowach pracowników, bo najpierw trzeba ją stamtąd wyciągnąć, a to zwykle trwa dłużej, niż wszystkim się na starcie wydaje.',
      ],
    },
    {
      heading: 'Ile kosztuje chatbot AI?',
      paragraphs: [
        'Chatbot AI dla firm w małym zakresie kosztuje od 5 000 zł netto. W tej cenie mieści się agent tekstowy na jednym kanale (np. strona WWW lub WhatsApp), zbudowany na Waszej bazie wiedzy: ofercie, cenniku, procedurach, najczęstszych pytaniach klientów. Agent odpowiada całą dobę. Rozmowy, w których potrzebny jest człowiek, przekazuje do zespołu.',
        'Wersję rozszerzoną wyceniamy indywidualnie, bo koszt zależy wprost od liczby integracji i kanałów. Mówimy tu o agencie działającym na kilku kanałach naraz (WhatsApp, Slack, Teams, Telegram, Discord i inne), podpiętym pod systemy firmowe, obsługującym procesy sprzedażowe czy rekrutacyjne.',
        'Do kosztu wdrożenia trzeba doliczyć utrzymanie: od 249 zł netto miesięcznie w planie Starter. Dzięki temu chatbot nie starzeje się razem z ofertą. Aktualizujemy bazę wiedzy i pilnujemy jakości odpowiedzi, bo bez tego po kilku miesiącach agent zaczyna mijać się z prawdą.',
      ],
    },
    {
      heading: 'Ile kosztuje agent głosowy (voicebot)?',
      paragraphs: [
        'Agent głosowy AI w podstawowym zakresie również zaczyna się od 5 000 zł netto. Budujemy go na technologii ElevenLabs, więc mówi naturalną polszczyzną, bez syntetycznego „robotycznego" brzmienia. Telefon odbiera 24 godziny na dobę, 7 dni w tygodniu.',
        'Przykład z naszych wdrożeń: dla regionalnego przewoźnika autobusowego zbudowaliśmy agenta głosowego, który przez telefon podaje pasażerom rozkłady jazdy o każdej porze, bez kolejki i bez angażowania pracowników. To akurat wdzięczny przypadek, bo jeden temat i jedno źródło danych.',
        'Voicebot zwykle wymaga podpięcia pod firmową telefonię, a często też pod kalendarz, system rezerwacji albo CRM. Dlatego wdrożenia głosowe częściej niż tekstowe kończą się wyceną indywidualną. Przy pracy całodobowej rekomendujemy plan utrzymania Standard lub Premium, żeby agent miał stałą opiekę techniczną.',
      ],
    },
    {
      heading: 'Dlaczego liczymy ROI przed wdrożeniem',
      paragraphs: [
        'Nie sprzedajemy technologii dla samej technologii. Przed przygotowaniem wyceny liczymy z Wami rachunek: ile godzin miesięcznie zespół spędza na powtarzalnych zadaniach, ile kosztuje ta praca i jaką jej część przejmie agent. Jeśli rachunek się nie spina, mówimy to wprost. Taniej usłyszeć „to się nie opłaci" na bezpłatnej konsultacji niż po wdrożeniu.',
        'Wstępny szacunek możesz zrobić samodzielnie w naszym kalkulatorze ROI pod adresem infinityteam.io/kalkulator. Podajesz liczbę godzin i stawki, a kalkulator pokazuje, kiedy wdrożenie się zwróci. To oczywiście tylko szacunek i bywa z nim różnie, bo część oszczędności widać dopiero po pierwszym miesiącu pracy agenta. Na konsultacji przechodzimy przez ten sam rachunek na Waszych realnych danych.',
      ],
    },
  ],
  howTo: {
    title: 'Jak powstaje wycena i wdrożenie',
    steps: [
      {
        name: 'Bezpłatna konsultacja',
        text: 'Rozmawiamy o Waszych procesach i wskazujemy miejsca, gdzie agent AI faktycznie oszczędzi czas lub pieniądze. Bez zobowiązań i bez prezentacji sprzedażowej.',
      },
      {
        name: 'Audyt procesów i wycena',
        text: 'Sprawdzamy zakres, potrzebne integracje, kanały i stan Waszej bazy wiedzy. Dostajecie konkretną cenę, harmonogram i szacunek zwrotu z inwestycji, wszystko przed podpisaniem czegokolwiek.',
      },
      {
        name: 'Wdrożenie pilotażowe',
        text: 'Startujemy od jednego procesu. Mały zakres wdrażamy w 2–4 tygodnie, większe projekty w 1–3 miesiące. Testujemy na realnych rozmowach, zanim agent przejmie ruch.',
      },
      {
        name: 'Rozbudowa i utrzymanie',
        text: 'Po pilocie decydujecie o rozszerzeniu zakresu. Agent działa pod stałą opieką w abonamencie od 249 do 799 zł netto miesięcznie. Monitorujemy jakość i aktualizujemy bazę wiedzy.',
      },
    ],
  },
  pricing: {
    title: 'Cennik AI dla firm — wdrożenie i utrzymanie',
    note: 'Wszystkie ceny są cenami netto. Ostateczna wycena wdrożenia zależy od zakresu ustalonego podczas bezpłatnego audytu.',
    rows: [
      {
        name: 'Konsultacja i audyt procesów',
        price: 'Bezpłatnie',
        description: 'Analiza procesów, wskazanie miejsc do automatyzacji, szacunek ROI i konkretna wycena.',
      },
      {
        name: 'Wdrożenie agenta AI: mały zakres',
        price: 'od 5 000 zł',
        description: 'Chatbot lub voicebot dla jednego procesu, jeden kanał, baza wiedzy, testy i szkolenie zespołu. Realizacja 2–4 tygodnie.',
      },
      {
        name: 'Wdrożenie rozszerzone / integracje',
        price: 'wycena indywidualna',
        description: 'Wiele kanałów, integracje z CRM, telefonią i systemami firmowymi, automatyzacja wieloetapowych procesów. Realizacja 1–3 miesiące.',
      },
      {
        name: 'Utrzymanie Starter',
        price: '249 zł/mies.',
        description: 'Monitoring działania agenta, drobne poprawki i aktualizacje bazy wiedzy w podstawowym zakresie.',
      },
      {
        name: 'Utrzymanie Standard',
        price: '499 zł/mies.',
        description: 'Szybszy czas reakcji, regularne zmiany w scenariuszach rozmów i rozwój bazy wiedzy.',
      },
      {
        name: 'Utrzymanie Premium',
        price: '799 zł/mies.',
        description: 'Wsparcie non-stop, priorytetowa obsługa zgłoszeń i bieżący rozwój agenta. Rekomendowane przy pracy 24/7.',
      },
    ],
  },
  faq: [
    {
      question: 'Czy w cenniku są jakieś ukryte koszty?',
      answer:
        'Nie. Wycena przed startem obejmuje pełny zakres wdrożenia: konfigurację agenta, uzgodnione integracje, testy i szkolenie zespołu. Jedyny stały koszt po wdrożeniu to abonament utrzymaniowy, od 249 do 799 zł netto miesięcznie, znany Wam z góry. Jeśli w trakcie prac pojawi się potrzeba rozszerzenia zakresu, najpierw dostajecie wycenę i to Wy decydujecie, czy ją akceptujecie.',
    },
    {
      question: 'Co dokładnie obejmuje miesięczne utrzymanie?',
      answer:
        'Utrzymanie to stała opieka nad agentem: monitoring jakości odpowiedzi, poprawki, aktualizacje bazy wiedzy i wsparcie techniczne. Plan Starter (249 zł/mies.) obejmuje podstawowy zakres, Standard (499 zł/mies.) dodaje szybszy czas reakcji i regularny rozwój scenariuszy, a Premium (799 zł/mies.) zapewnia wsparcie non-stop. To ostatnie ma znaczenie zwłaszcza wtedy, gdy agent odbiera telefony całą dobę.',
    },
    {
      question: 'Jak długo trwa wdrożenie AI w firmie?',
      answer:
        'Małe wdrożenie, czyli jeden proces na jednym kanale, trwa 2–4 tygodnie od akceptacji wyceny. Większe projekty, z wieloma kanałami i integracjami z systemami firmowymi, zajmują 1–3 miesiące. Dokładny harmonogram dostajecie razem z wyceną po audycie procesów, więc od początku wiecie, kiedy agent zacznie pracować.',
    },
    {
      question: 'Czy można zacząć od małego pilota?',
      answer:
        'Tak. Właśnie tak najczęściej zaczynamy. Wybieramy jeden proces, w którym efekt będzie najłatwiej zmierzyć, i wdrażamy go w małym zakresie od 5 000 zł netto. Po 2–4 tygodniach macie działającego agenta i realne dane: ile rozmów obsłużył i ile czasu zespołu uwolnił. Dopiero na tej podstawie decydujecie o rozbudowie.',
    },
    {
      question: 'Czy można płacić etapami?',
      answer:
        'Tak. Przy większych wdrożeniach dzielimy płatność na etapy powiązane z odbiorem konkretnych części projektu: zaliczka na start, kolejne transze po zaakceptowaniu uzgodnionych etapów prac. Harmonogram płatności ustalamy w umowie przed rozpoczęciem wdrożenia, więc nie ma tu niespodzianek. Utrzymanie rozliczamy w prostym miesięcznym abonamencie.',
    },
    {
      question: 'Czy wdrożenie AI jest zgodne z RODO?',
      answer:
        'Tak. Dane klientów przetwarzamy na serwerach w Polsce, w pełnej zgodności z RODO i według standardów zgodnych z ISO 27001. Podczas audytu ustalamy, jakie dane agent faktycznie musi przetwarzać, i ograniczamy ten zakres do minimum. Kwestie powierzenia przetwarzania danych regulujemy w umowie wdrożeniowej.',
    },
  ],
  cta: {
    heading: 'Poznaj cenę dla swojej firmy',
    sub: 'Pierwsza konsultacja jest bezpłatna. Opowiedz nam o swoich procesach, a przygotujemy konkretną wycenę z szacunkiem zwrotu z inwestycji.',
  },
  related: [
    { label: 'Agent głosowy AI', href: '/uslugi/agent-glosowy-ai' },
    { label: 'Chatbot AI dla firm', href: '/uslugi/chatbot-ai' },
    { label: 'Automatyzacja procesów AI', href: '/uslugi/automatyzacja-procesow-ai' },
    { label: 'Automatyzacja HR i kadr', href: '/uslugi/automatyzacja-hr' },
    { label: 'Automatyzacja obsługi klienta', href: '/uslugi/automatyzacja-obslugi-klienta' },
    { label: 'Kalkulator ROI', href: '/kalkulator' },
  ],
};

export default function Page() {
  return <SeoLanding content={content} />;
}
