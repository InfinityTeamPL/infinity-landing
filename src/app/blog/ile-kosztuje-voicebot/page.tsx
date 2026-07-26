import type { Metadata } from 'next';
import BlogArticle, { BlogArticleContent } from '@/components/BlogArticle';

export const metadata: Metadata = {
  title: 'Ile kosztuje voicebot? Cennik agenta głosowego 2026',
  description:
    'Z czego składa się cena voicebota, ile kosztuje wdrożenie i utrzymanie w Polsce oraz kiedy telefonia i minuty rozmów podbijają rachunek.',
  alternates: { canonical: '/blog/ile-kosztuje-voicebot' },
  openGraph: {
    title: 'Ile kosztuje voicebot? Cennik agenta głosowego 2026',
    description:
      'Z czego składa się cena voicebota, ile kosztuje wdrożenie i utrzymanie w Polsce oraz kiedy telefonia i minuty rozmów podbijają rachunek.',
    type: 'article',
  },
};

const content: BlogArticleContent = {
  path: '/blog/ile-kosztuje-voicebot',
  title: 'Ile kosztuje voicebot? Cennik agenta głosowego 2026',
  description:
    'Z czego składa się cena voicebota, ile kosztuje wdrożenie i utrzymanie w Polsce oraz kiedy telefonia i minuty rozmów podbijają rachunek.',
  datePublished: '2026-07-26',
  sections: [
    {
      paragraphs: [
        'Pytanie „ile kosztuje voicebot" pada zwykle w pierwszych trzech minutach rozmowy. Czasem zanim w ogóle ustalimy, co ten voicebot miałby właściwie robić. To zrozumiałe. Zanim ktokolwiek zacznie się zastanawiać nad scenariuszami rozmów, chce wiedzieć, czy w ogóle mieści się w budżecie.',
        'Problem polega na tym, że uczciwa odpowiedź brzmi „zależy", a to nikomu nie pomaga. Więc rozbijemy tę cenę na części. Cena voicebota to nie jedna liczba, tylko trzy osobne strumienie: jednorazowe wdrożenie, miesięczne utrzymanie oraz koszty zmienne, czyli telefonia i czas rozmów. Ten trzeci najczęściej znika z ofert konkurencji. A potrafi zaskoczyć po pierwszym pełnym miesiącu pracy agenta.',
        'Poniżej pokazujemy nasze widełki wprost i tłumaczymy, co je przesuwa w górę. Piszemy też, kiedy koszt agenta głosowego się nie zwróci. Bo nie zawsze się zwraca, a lepiej usłyszeć to przed wdrożeniem niż po nim.',
      ],
    },
    {
      heading: 'Z czego składa się cena voicebota',
      paragraphs: [
        'Voicebot to nie jest pudełko, które się kupuje i włącza. To kilka warstw, z których każda ma własny model rozliczania. Jeśli ktoś podaje jedną kwotę bez rozbicia, prawie na pewno pominął tę zmienną. Czyli tę, która rośnie razem z liczbą rozmów.',
      ],
      bullets: [
        'Wdrożenie płacisz raz. Rozpisanie scenariuszy rozmowy, zbudowanie bazy wiedzy, konfiguracja i strojenie głosu, podpięcie agenta pod telefonię, testy na realnych połączeniach i szkolenie zespołu. To największa pozycja na starcie.',
        'Utrzymanie płacisz co miesiąc. Monitoring działania, poprawki scenariuszy po pierwszych tygodniach ruchu, aktualizacja bazy wiedzy, gdy zmienia się oferta lub cennik, reakcja na zgłoszenia.',
        'Telefonia i minuty rozmów idą osobno i rosną razem z ruchem. Numer telefoniczny, abonament u operatora oraz przetwarzanie rozmowy rozliczane za czas jej trwania. Ta pozycja jest po stronie klienta i wracamy do niej za chwilę osobno.',
        'Integracje wyceniamy zależnie od zakresu. Kalendarz, system rezerwacji, CRM, baza zamówień, przekazanie rozmowy do konkretnego pracownika. Każdy system, do którego agent ma sięgnąć, to osobna praca i osobne testy.',
      ],
    },
    {
      heading: 'Kto płaci za telefonię i minuty rozmów',
      paragraphs: [
        'To jest ta część, o której chcemy napisać najbardziej wprost, bo najczęściej bywa przemilczana. Agent głosowy musi mieć numer, pod który dzwonią klienci, i łącze, przez które te połączenia przechodzą. Numer i minuty kupujesz u operatora telefonii, nie u nas. Możemy pomóc wybrać operatora i wszystko podpiąć, ale rachunek za połączenia przychodzi od niego i to on ustala stawki.',
        'Rekomendujemy zwykle, żeby konto u operatora było założone na Waszą firmę. Dzięki temu widzicie rachunek co do minuty, możecie w każdej chwili zmienić dostawcę i nie płacicie nikomu marży za pośrednictwo w odsprzedaży minut. Wadą jest jedna faktura więcej w księgowości. Zaletą jest pełna kontrola nad kosztem, który rośnie razem z liczbą rozmów.',
        'Do minut telefonicznych dochodzi drugi koszt liczony od czasu rozmowy: przetwarzanie mowy i praca modelu językowego. Krótka, konkretna rozmowa kosztuje ułamek tego, co pięciominutowa dyskusja. Nie podajemy tu stawek za minutę, bo zależą od dostawcy, wolumenu i tego, jak długie są rozmowy w Waszej branży. Liczba wpisana tu na sztywno zestarzałaby się szybciej niż ten artykuł. Podajemy je zawsze w wycenie, razem z symulacją miesięcznego rachunku przy Waszym realnym ruchu.',
        'Liczy się więc długość rozmów, nie sama ich liczba. Agent, który w trzydzieści sekund poda godzinę odjazdu, jest tani w utrzymaniu. Agent prowadzący czterominutową rozmowę kwalifikacyjną z każdym leadem kosztuje wyraźnie więcej, choć nadal zwykle mniej niż etat.',
        'Najtrudniej oszacować właśnie tę średnią długość rozmowy. Klienci na spotkaniu mówią zwykle „to trwa pół minuty", a z pierwszych nagrań wychodzi minuta czterdzieści. Trudno to przewidzieć z góry, więc symulację kosztu robimy zawsze widełkowo i po miesiącu wracamy do niej z prawdziwymi danymi.',
      ],
    },
    {
      heading: 'Ile kosztuje agent głosowy u nas',
      paragraphs: [
        'Wdrożenie voicebota zaczyna się u nas od 5 000 zł netto. W tym zakresie mieści się agent obsługujący jeden dobrze zdefiniowany proces na jednym numerze: odbieranie połączeń, odpowiadanie na powtarzalne pytania z Waszej bazy wiedzy, przekazanie trudniejszej sprawy do człowieka. Większe projekty (wiele numerów, kilka scenariuszy, integracje z systemami) wyceniamy indywidualnie, po bezpłatnym audycie.',
        'Utrzymanie to trzy pakiety: Starter 249 zł netto miesięcznie, Standard 499 zł netto i Premium 799 zł netto. Starter to monitoring i drobne poprawki. Standard dokłada szybszy czas reakcji oraz regularne zmiany w scenariuszach. Premium to wsparcie non-stop i priorytetowa obsługa zgłoszeń. Przy agencie pracującym całą dobę zwykle właśnie ten pakiet ma sens, bo awaria o drugiej w nocy nie może czekać do poniedziałku.',
        'Czas realizacji: mniejsze wdrożenie zamykamy w 2–4 tygodnie, większe w 1–3 miesiące. Pierwsza konsultacja i audyt procesów są bezpłatne i to na nich pada konkretna kwota, nie wcześniej. Wszystkie podane ceny są cenami netto i nie obejmują opisanego wyżej rachunku od operatora telefonii.',
        'Jeśli chcesz najpierw usłyszeć, o czym w ogóle mówimy, mamy publiczne dema. Pod adresem asystenci-glosowi.vercel.app stoi pięciu asystentów branżowych: transport, medycyna, nieruchomości, usługi i administracja. Z kolei pks-gryfice-demo.vercel.app to agent podający rozkłady jazdy na podstawie publicznych danych rozkładowych: sześć przystanków, 276 odjazdów, z podaniem źródła. Zaznaczamy wprost: PKS Gryfice nie jest naszym klientem. To nasze własne demo zbudowane na ich publicznie dostępnych danych.',
      ],
    },
    {
      heading: 'Co podbija cenę voicebota',
      paragraphs: [
        'Różnica między wdrożeniem za 5 000 zł a wyceną kilkukrotnie wyższą rzadko bierze się z „lepszego głosu". Bierze się z liczby rzeczy, które agent musi umieć zrobić, i z liczby systemów, do których musi sięgnąć.',
      ],
      bullets: [
        'Liczba scenariuszy. Agent odpowiadający na pytania o godziny otwarcia to jeden scenariusz. Agent, który umawia wizytę, przekłada ją, odwołuje i jeszcze przyjmuje reklamację, to cztery osobne ścieżki, każda z własnymi wyjątkami i każda do przetestowania.',
        'Integracje z systemami: kalendarz, rezerwacje, CRM, baza zamówień. Im starszy i mniej otwarty system, tym więcej pracy. Zdarza się, że integracja kosztuje więcej niż sam agent, bo trzeba obejść brak sensownego API. Tego akurat nie lubimy robić i mówimy o tym na wycenie.',
        'Wiele numerów i oddziałów. Inny scenariusz dla centrali, inny dla oddziału, inne godziny pracy, inne osoby do przełączenia rozmowy. Każdy numer to osobna konfiguracja i osobna runda testów.',
        'Rozmowy wychodzące. Agent, który sam dzwoni (przypomnienia o wizycie, potwierdzenia, odzyskiwanie porzuconych zapytań), wymaga dodatkowej zgodności prawnej i ostrożniejszego strojenia niż agent tylko odbierający.',
        'Stan bazy wiedzy. Uporządkowane FAQ i procedury skracają wdrożenie. Wiedza rozproszona po mailach i w głowach trzech pracowników najpierw musi zostać zebrana, a to jest praca, którą ktoś musi wykonać i opłacić.',
      ],
    },
    {
      heading: 'Kiedy voicebot się nie opłaca',
      paragraphs: [
        'Teraz część, której nie znajdziecie w typowej ofercie. Voicebot bywa złą inwestycją. Lepiej to wiedzieć na etapie konsultacji, kiedy kosztuje to tylko godzinę rozmowy.',
        'Pierwszy przypadek: mały wolumen. Jeśli telefon dzwoni kilka razy dziennie i nikt w firmie nie ma z tym problemu, agent głosowy nie ma czego przejąć. Koszt wdrożenia i utrzymania rozłoży się wtedy na kilkadziesiąt rozmów miesięcznie, a oszczędność czasu będzie niemierzalna. Przy takim ruchu tańsze i skuteczniejsze bywa zwykłe przekierowanie na komórkę albo prosty formularz na stronie.',
        'Drugi: rozmowy, które nie są powtarzalne. Jeśli każde połączenie to negocjacja, ustalanie nietypowych warunków albo rozmowa wymagająca wyczucia i empatii, agent nie ma tam czego automatyzować. Może najwyżej odsiać kilka pytań o adres i godziny otwarcia. To za mało, żeby uzasadnić wdrożenie.',
        'Trzeci: firma bez uporządkowanej wiedzy. Agent odpowiada tylko tym, czego go nauczymy. Jeśli w firmie nie ma zgody co do tego, jak brzmi aktualny cennik i jaka jest procedura reklamacji, voicebot te sprzeczności wyciągnie na wierzch i powie klientowi rzecz nieaktualną. Najpierw porządek, potem automatyzacja.',
        'Czwarty: silna sezonowość przy niskiej średniej. Jeśli szczyt trwa sześć tygodni w roku, a przez pozostałe dziesięć miesięcy telefon milczy, roczny koszt utrzymania trzeba porównać z kosztem sezonowego wsparcia. Czasem wychodzi na korzyść agenta, czasem nie. To trzeba policzyć, a nie założyć.',
      ],
    },
    {
      heading: 'Jak policzyć, czy agent głosowy się zwróci',
      paragraphs: [
        'Rachunek jest prostszy, niż się wydaje, i da się go zrobić na kartce w kwadrans. Potrzebujesz czterech liczb. Ile połączeń miesięcznie odbiera dziś zespół. Ile z nich to sprawy powtarzalne, które agent faktycznie zamknie bez człowieka. Ile minut zajmuje przeciętna taka rozmowa razem z tym, co pracownik robi po niej: wpisaniem czegoś do systemu, oddzwonieniem, wysłaniem potwierdzenia. I ile kosztuje godzina pracy tej osoby razem z narzutami.',
        'Do tego dochodzi druga strona rachunku, o której łatwo zapomnieć: połączenia nieodebrane. Ile telefonów dziennie wpada po godzinach, w przerwie obiadowej i w szczycie, kiedy wszystkie linie są zajęte. Jeśli choćby część z nich to potencjalni klienci, dobrze wiedzieć, ile wart jest jeden taki klient. W wielu firmach usługowych to właśnie ta pozycja, a nie oszczędność czasu, decyduje o zwrocie z inwestycji.',
        'Wstępny szacunek zrobisz sam w naszym kalkulatorze pod adresem /kalkulator. Wpisujesz liczbę godzin i stawki, a on pokazuje, po jakim czasie wdrożenie się spina. To jest szacunek, nie wyrocznia: opiera się na Twoich założeniach i tyle jest wart, ile one. Na bezpłatnej konsultacji przechodzimy przez ten sam rachunek na realnych danych, razem z symulacją kosztu minut. Jeśli wynik wychodzi na nie, mówimy to wprost.',
      ],
    },
  ],
  faq: [
    {
      question: 'Czy przy voicebocie płacę osobno za minuty rozmów?',
      answer:
        'Tak, i mówimy o tym od razu. Numer telefoniczny oraz minuty połączeń kupujesz u operatora telefonii, a nie u nas. Rachunek przychodzi od niego i on ustala stawki. Do tego dochodzi przetwarzanie rozmowy rozliczane od czasu jej trwania. W wycenie pokazujemy symulację miesięcznego kosztu przy Waszym realnym ruchu, żeby nie było niespodzianek po pierwszym miesiącu.',
    },
    {
      question: 'Ile kosztuje utrzymanie agenta głosowego?',
      answer:
        'Mamy trzy pakiety: Starter 249 zł netto miesięcznie, Standard 499 zł netto i Premium 799 zł netto. Starter to monitoring i drobne poprawki, Standard dokłada szybszy czas reakcji i regularne zmiany w scenariuszach, Premium to wsparcie non-stop z priorytetową obsługą zgłoszeń. Przy agencie odbierającym telefony całą dobę zwykle rekomendujemy Standard lub Premium.',
    },
    {
      question: 'Czy da się zacząć od pilotażu zamiast pełnego wdrożenia?',
      answer:
        'Tak i zwykle właśnie tak zaczynamy. Wybieramy jeden proces, który dziś boli najbardziej, najczęściej nieodebrane telefony po godzinach, i uruchamiamy agenta w tym jednym zakresie. Mniejsze wdrożenie trwa 2–4 tygodnie i zaczyna się od 5 000 zł netto. Dopiero gdy pilotaż sprawdzi się na realnych rozmowach, dokładamy kolejne scenariusze i integracje.',
    },
    {
      question: 'Co z numerem telefonu, trzeba brać nowy?',
      answer:
        'Nie zawsze. Można podpiąć agenta pod nowy numer albo przekierować na niego istniejący, w całości lub tylko poza godzinami pracy biura. Sporo firm zaczyna od drugiego wariantu: w dzień odbiera człowiek, wieczorem i w weekend agent. Wybór zależy od Waszego operatora i obecnej konfiguracji telefonii. Sprawdzamy to na audycie przed wyceną.',
    },
    {
      question: 'Co z RODO przy nagrywaniu rozmów z agentem?',
      answer:
        'Dane przetwarzamy na serwerach w Polsce i Unii Europejskiej, zgodnie z RODO i w oparciu o standardy zgodne z ISO 27001. Rozmówca musi zostać poinformowany, że rozmawia z asystentem AI, oraz o nagrywaniu i celu przetwarzania. Wpisujemy to w scenariusz powitania. Zakres zbieranych danych, czas ich przechowywania i podstawę prawną ustalamy razem przed uruchomieniem agenta.',
    },
  ],
  related: [
    { label: 'Cennik wdrożeń AI', href: '/cennik' },
    { label: 'Agent głosowy AI', href: '/uslugi/agent-glosowy-ai' },
    { label: 'Kalkulator ROI', href: '/kalkulator' },
    { label: 'Ile kosztuje chatbot AI', href: '/blog/ile-kosztuje-chatbot-ai' },
  ],
  ctaHeading: 'Policzmy koszt voicebota na Twoich liczbach',
  ctaSub:
    'Powiedz nam, ile telefonów dziennie odbiera zespół i ile z nich zostaje bez odpowiedzi, a przygotujemy wycenę razem z symulacją miesięcznego kosztu minut. Konsultacja jest bezpłatna, a jeśli rachunek się nie spina, powiemy to wprost.',
};

export default function Page() {
  return <BlogArticle content={content} />;
}
