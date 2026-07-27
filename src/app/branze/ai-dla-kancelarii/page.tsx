import type { Metadata } from 'next';
import SeoLanding, { SeoLandingContent } from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'AI dla kancelarii prawnej — automatyzacja i chatbot',
  description:
    'AI dla kancelarii i biura rachunkowego: powtarzalne pytania klientów, szukanie w archiwum pism, szkice z wzorca. Wdrożenie od 5 000 zł netto.',
  alternates: { canonical: '/branze/ai-dla-kancelarii' },
  openGraph: {
    title: 'AI dla kancelarii prawnej — automatyzacja i chatbot',
    description:
      'Agent AI w kancelarii i biurze rachunkowym: odbiera powtarzalne pytania, przeszukuje archiwum pism, przygotowuje szkice z wzorca. Nie udziela porad prawnych. Dane na serwerach w Polsce.',
    type: 'website',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

const content: SeoLandingContent = {
  path: '/branze/ai-dla-kancelarii',
  breadcrumbLabel: 'AI dla kancelarii',
  h1: 'AI dla kancelarii prawnej — agent, który szuka w Waszych aktach i nie udaje prawnika',
  lead: 'AI dla kancelarii prawnej to agent, który odbiera powtarzalne pytania klientów, przeszukuje archiwum pism i orzeczeń kancelarii oraz przygotowuje pierwsze wersje typowych dokumentów. Nie udziela porad prawnych i nie zastępuje prawnika. Każdą odpowiedź opiera na dokumentach kancelarii i wskazuje źródło, a decyzję podejmuje człowiek.',
  serviceName: 'AI dla kancelarii prawnej i biura rachunkowego',
  serviceDescription:
    'Wdrożenie agentów AI w kancelariach prawnych i biurach rachunkowych: obsługa powtarzalnych pytań klientów, wyszukiwanie w archiwum pism i orzeczeń, szkice dokumentów z wzorca kancelarii, przypomnienia o terminach. Agent nie udziela porad prawnych, wskazuje źródło każdej odpowiedzi. Dane w Polsce lub UE, izolowana instancja, BYOK i self-hosting.',
  sections: [
    {
      heading: 'Czego agent AI w kancelarii nie robi',
      paragraphs: [
        'Zacznijmy od granicy, bo w tej branży wszystko inne jest od niej pochodne. Agent AI nie udziela porad prawnych i nie zastępuje adwokata, radcy prawnego ani doradcy podatkowego. Nie ocenia szans w sporze i nie mówi klientowi, czy ma przyjąć ugodę. W biurze rachunkowym tak samo: nie rozstrzyga, jak zakwalifikować wydatek, i nie podpisuje deklaracji.',
        'To, co robi, jest mniej efektowne, za to daje się policzyć. Odbiera pytania, na które ktoś w kancelarii odpowiada po raz dziesiąty w tym tygodniu. Znajduje w archiwum pismo sprzed czterech lat, którego nikt nie pamięta z nazwy pliku. Podstawia dane do wzorca i oddaje szkic, który prawnik czyta, poprawia i dopiero potem podpisuje.',
        'Druga granica dotyczy tego, skąd bierze się odpowiedź. Agent pracuje na dokumentach kancelarii, a nie na ogólnej wiedzy modelu, i przy każdej odpowiedzi wskazuje źródło: konkretny przepis, pismo z repozytorium albo dokument z akt sprawy. Kiedy podstawy nie znajdzie, mówi że nie wie. Brzmi banalnie. W tekstach prawnych jest ważniejsze niż cokolwiek innego, bo model bez takiego ograniczenia potrafi napisać zdanie, które wygląda jak przepis, tylko takiego przepisu nie ma.',
      ],
      bullets: [
        'Nie udziela porad prawnych i nie zastępuje adwokata, radcy prawnego ani doradcy podatkowego.',
        'Nie wysyła pism, nie składa ich w sądzie i niczego nie zatwierdza. Szkic zawsze wraca do człowieka.',
        'Nie odpowiada z pamięci modelu. Jeśli czegoś nie ma w bazie kancelarii, przyznaje, że nie wie.',
        'Nie ma dostępu do akt, których mu nie damy. Zakres danych ustalamy przed uruchomieniem i zapisujemy w umowie.',
      ],
    },
    {
      heading: 'Pytania, które sekretariat odbiera po raz dziesiąty',
      paragraphs: [
        'W kancelarii i w biurze rachunkowym telefon dzwoni przez cały rok z tych samych powodów. Klient pyta, na jakim etapie jest jego sprawa. Pyta, co przynieść na pierwsze spotkanie i ile kosztuje porada. W styczniu dochodzi PIT, w marcu sprawozdanie, a przed każdym terminem podatkowym to samo, tylko głośniej. Sekretariat odpowiada, przerywa robotę i wraca do niej po minucie.',
        'Agent odbiera te rozmowy i pisze na czacie na stronie kancelarii. Głosowo pracuje na silniku ElevenLabs, więc mówi po polsku naturalnie, z odmianą nazwisk i normalną intonacją. Status sprawy poda tylko wtedy, gdy jest do czego się podłączyć: system kancelaryjny albo arkusz, który ktoś realnie aktualizuje. Bez tego zostaje informacja ogólna i zapowiedź kontaktu. Lepiej powiedzieć to na starcie niż po podpisaniu umowy.',
        'Osobna sprawa to nowe zgłoszenia. Chatbot dla kancelarii zbiera od dzwoniącego albo piszącego podstawowe fakty: czego dotyczy sprawa, kiedy się wydarzyła, czy jest już decyzja urzędu lub termin sądowy, jakie dokumenty klient ma przy sobie. Prawnik dostaje notatkę i decyduje, czy w ogóle bierze tę sprawę. Kwalifikacja nie jest poradą i tę różnicę wpisujemy wprost w scenariusz rozmowy. Agent zbiera fakty, nie ocenia ich.',
      ],
      bullets: [
        'Status sprawy i etap postępowania, jeśli agent ma podłączone źródło, które ktoś aktualizuje.',
        'Lista dokumentów na pierwsze spotkanie albo do rozliczenia rocznego, rozpisana na typowe sytuacje.',
        'Zasady rozliczeń: stawka godzinowa, ryczałt, opłata za pierwszą konsultację, koszty sądowe do zapłaty przez klienta.',
        'Godziny pracy, adres i to, gdzie podrzucić brakujący papier, żeby nie zaginął po drodze.',
        'Wstępne zgłoszenie nowej sprawy, spisane w notatce dla prawnika razem z datami i terminami.',
      ],
    },
    {
      heading: 'Archiwum, wzory pism i terminy, o których nikt nie pamięta',
      paragraphs: [
        'Kancelaria z dziesięcioletnim stażem ma archiwum, o którym wiadomo głównie tyle, że gdzieś jest. Pisma leżą w folderach nazwanych nazwiskiem klienta, część w skanach, część w załącznikach do maili, a najlepsze wzory siedzą na dysku osoby, która odeszła dwa lata temu. Szukanie po nazwie pliku działa dopóty, dopóki ktoś tę nazwę pamięta.',
        'Agent przeszukuje ten zbiór po treści. Pytasz, czy kancelaria pisała kiedyś odwołanie od decyzji ZUS w sprawie podlegania ubezpieczeniu, a w odpowiedzi dostajesz konkretne dokumenty i fragmenty, na których agent się oparł. Technicznie nazywa się to RAG, czyli odpowiadanie z podpiętej bazy dokumentów zamiast z pamięci modelu. Praktycznie oznacza tyle, że agent może zacytować wyłącznie to, co faktycznie macie u siebie. Halucynacja w kontekście prawnym jest realnym ryzykiem i to jest jedyny znany nam sposób, żeby je przyciąć.',
        'Że umiemy to zrobić na tekstach prawnych, wiemy z własnego produktu. Superkadrowa to nasza wirtualna kadrowa AI o imieniu Janina. Odpowiada na pytania z prawa pracy w oparciu o bazę ponad 40 aktów prawnych, ponad 900 dokumentów, 13 opracowań orzecznictwa Sądu Najwyższego i 17 wzorów dokumentów. Przy odpowiedzi podaje konkretny artykuł Kodeksu pracy, więc da się sprawdzić, czy nie zmyśla. Demo stoi pod adresem superkadrowa.vercel.app i można je kliknąć bez umawiania spotkania. Publicznego wdrożenia w kancelarii nie mamy i nie będziemy udawać, że mamy. Superkadrowa jest naszym własnym produktem, ale mechanizm cytowania źródła jest dokładnie ten sam.',
        'Poza szukaniem zostają dwie rzeczy, o które kancelarie pytają najczęściej. Pierwsza to powtarzalne pisma: wezwanie do zapłaty, sprzeciw od nakazu, wypowiedzenie, pełnomocnictwo, pismo przewodnie do sądu. Agent podstawia dane sprawy do wzorca kancelarii i oddaje szkic. Nie wymyśla treści od zera, korzysta z Waszego wzoru, a prawnik i tak czyta całość przed podpisem. Druga to terminy. Agent pilnuje dat wpisanych do kalendarza spraw i przypomina o nich z wyprzedzeniem, ale odpowiedzialność za termin procesowy zostaje przy prawniku i nie da się jej przenieść na oprogramowanie. To druga para oczu, a nie zabezpieczenie.',
      ],
    },
    {
      heading: 'Tajemnica zawodowa i miejsce, w którym leżą akta',
      paragraphs: [
        'Tajemnica adwokacka i radcowska nie ma stopni pośrednich. Albo akta zostają w środowisku, które kontrolujesz, albo wychodzą na zewnątrz i zaczyna się rozmowa, której nikt nie chce prowadzić. Dlatego dane trzymamy na serwerach w Polsce lub w Unii Europejskiej, a każda kancelaria dostaje osobną, izolowaną instancję. Żadnego wspólnego worka z danymi kilku klientów.',
        'Model językowy pracuje na Waszych kluczach API, czyli w modelu BYOK. Rachunek i historia zapytań zostają po Waszej stronie, my nie stoimy w środku tego strumienia. Można pójść dalej i postawić całość u siebie. Framework OpenClaw, na którym budujemy agentów, jest oprogramowaniem open source z ponad 380 tysiącami gwiazdek na GitHubie. Nie jesteśmy oficjalnym partnerem tego projektu, po prostu na nim pracujemy. Dla kancelarii liczy się to, że kod da się zaudytować, a wdrożenie przenieść, gdyby współpraca z nami kiedyś się skończyła. Warstwę zarządzania agentami dostajecie na naszej platformie ClawLabs (clawlabs.pro), również w wariancie self-hosted.',
        'Formalnie: umowa powierzenia przetwarzania danych, RODO, standardy bezpieczeństwa zgodne z normą ISO 27001, ustalony okres przechowywania rozmów i logów oraz automatyczne usuwanie po tym okresie. Jednej rzeczy nie zrobimy. Nie wystawimy oświadczenia, że takie wdrożenie jest zgodne z regulaminem wykonywania Waszego zawodu, bo to pytanie do izby, a nie do firmy technologicznej. Powiemy dokładnie, gdzie leżą dane i kto ma do nich dostęp. Ocena należy do Was i do Waszego samorządu.',
      ],
    },
    {
      heading: 'Kiedy AI w kancelarii się nie opłaca',
      paragraphs: [
        'Mała kancelaria bez powtarzalnego wolumenu nie ma z czego odzyskać tych pieniędzy. Jeśli telefon dzwoni kilka razy dziennie, a spraw prowadzicie kilkanaście miesięcznie, wdrożenie od 5 000 zł netto plus abonament nie zwróci się nigdy. Sekretariat odbierze szybciej, niż zajęłoby zaprojektowanie scenariuszy rozmów. Mówimy to na pierwszej konsultacji, bo wolimy stracić projekt niż tłumaczyć się pół roku później.',
        'Drugi przypadek to archiwum wyłącznie w papierze. Segregatory na regale są dla agenta zbiorem pustym. Zanim cokolwiek zacznie działać, trzeba je zeskanować i opisać, a to osobny projekt, kosztowny i nudny. Czasem opłaca się zdigitalizować tylko wycinek, na przykład wzory pism z ostatnich trzech lat, i zacząć od niego. Ale liczby trzeba zobaczyć przed podpisaniem czegokolwiek, nie po.',
        'Trzeci przypadek jest najciekawszy. Praktyka oparta na sprawach nietypowych, gdzie każda wymaga indywidualnej analizy, a każde pismo pisze się od zera. Spory arbitrażowe, skomplikowane restrukturyzacje. Tam nie ma czego automatyzować w warstwie merytorycznej, a próba na siłę kończy się szkicem, którego poprawianie trwa dłużej niż napisanie pisma od nowa. Zostaje wyszukiwanie w archiwum i to akurat bywa przydatne nawet w takiej kancelarii. Reszta to strata czasu i pieniędzy.',
      ],
    },
  ],
  howTo: {
    title: 'Jak wdrażamy agenta w kancelarii',
    steps: [
      {
        name: 'Bezpłatna konsultacja i przegląd powtarzalnych pytań',
        text: 'Sprawdzamy, o co klienci pytają najczęściej i ile czasu sekretariatu na to schodzi. Jeśli z tych liczb wychodzi, że wdrożenie się nie zwróci, mówimy to od razu i na tym kończymy.',
      },
      {
        name: 'Przegląd archiwum i wybór zakresu bazy wiedzy',
        text: 'Patrzymy, co realnie jest w wersji cyfrowej i jak to poukładane. Zwykle zaczynamy od wzorów pism i jednej kategorii spraw, a nie od całego dysku naraz. Węższy start daje szybszą ocenę, czy agent trafia w odpowiedzi.',
      },
      {
        name: 'Ustalenie granic i zasad poufności',
        text: 'Spisujemy, czego agent nie mówi i kiedy odsyła do prawnika. Ustalamy lokalizację danych, dostępy, okres przechowywania rozmów i wariant hostingu, łącznie z BYOK i self-hostingiem. Podpisujemy umowę powierzenia przetwarzania danych.',
      },
      {
        name: 'Pilotaż z udziałem prawnika',
        text: 'Uruchamiamy wąski zakres, na przykład pytania z sekretariatu albo samo wyszukiwanie w archiwum. Prawnik ocenia odpowiedzi i wskazuje te, w których agent poszedł za daleko. Poprawiamy scenariusze na podstawie prawdziwych rozmów, a nie założeń z prezentacji.',
      },
      {
        name: 'Start i utrzymanie',
        text: 'Po uruchomieniu monitorujemy rozmowy, dopisujemy nowe dokumenty do bazy i aktualizujemy treści przy zmianach przepisów. Raz na kwartał przeglądamy, o co pytano najczęściej. To zwykle materiał do poprawy samych procedur w kancelarii.',
      },
    ],
  },
  useCases: {
    title: 'Do czego kancelarie i biura rachunkowe używają agenta',
    items: [
      {
        title: 'Pytania o status sprawy',
        description:
          'Klient dzwoni albo pisze i pyta, co się dzieje z jego sprawą. Agent podaje etap z podłączonego źródła, a przy braku danych zapisuje prośbę o kontakt zamiast improwizować.',
      },
      {
        title: 'Lista dokumentów przed spotkaniem',
        description:
          'Co przynieść na pierwszą wizytę, co dosłać do rozliczenia rocznego, w ilu egzemplarzach i kto ma podpisać. Mniej spotkań kończy się odesłaniem po brakujący papier.',
      },
      {
        title: 'Szukanie w archiwum pism',
        description:
          'Pytanie zadane po treści sprawy, nie po nazwie pliku. Agent zwraca dokumenty z archiwum kancelarii razem z fragmentami, na których oparł odpowiedź.',
      },
      {
        title: 'Szkic powtarzalnego pisma',
        description:
          'Wezwanie do zapłaty, wypowiedzenie, pełnomocnictwo. Agent podstawia dane sprawy do wzorca kancelarii i oddaje wersję roboczą. Prawnik czyta ją i poprawia przed podpisem.',
      },
      {
        title: 'Przypomnienia o terminach',
        description:
          'Terminy procesowe i podatkowe z kalendarza spraw, przypominane z wyprzedzeniem. Druga para oczu przy dacie, za którą i tak odpowiada prawnik.',
      },
      {
        title: 'Wstępna kwalifikacja nowych zgłoszeń',
        description:
          'Chatbot spisuje fakty, daty i posiadane dokumenty, a prawnik dostaje notatkę i decyduje, czy bierze sprawę. Agent zbiera informacje i niczego nie ocenia.',
      },
    ],
  },
  pricing: {
    title: 'Ile kosztuje AI dla kancelarii',
    note: 'Ceny netto. Wycena zależy od stanu archiwum, zakresu integracji z systemem kancelaryjnym i wybranego wariantu hostingu. Pierwsza konsultacja jest bezpłatna.',
    rows: [
      {
        name: 'Wdrożenie podstawowe',
        price: 'od 5 000 zł',
        description:
          'Jeden obszar: obsługa powtarzalnych pytań albo wyszukiwanie w archiwum. Baza wiedzy z Waszych dokumentów, scenariusze rozmów, testy z prawnikiem i uruchomienie.',
      },
      {
        name: 'Wdrożenie rozszerzone',
        price: 'wycena indywidualna',
        description:
          'Integracja z systemem kancelaryjnym, generowanie pism z wzorców, kalendarz terminów, self-hosting na Waszej infrastrukturze. Zakres ustalamy po przeglądzie archiwum.',
      },
      {
        name: 'Utrzymanie',
        price: '249 / 499 / 799 zł/mies.',
        description:
          'Trzy pakiety. Starter: monitoring i drobne poprawki. Standard: rozwój scenariuszy i aktualizacje bazy po zmianach przepisów. Premium: rozbudowa funkcji, raporty z rozmów i najszybszy czas reakcji.',
      },
    ],
  },
  faq: [
    {
      question: 'Ile kosztuje wdrożenie AI w kancelarii prawnej?',
      answer:
        'Wdrożenie zaczyna się od 5 000 zł netto przy jednym obszarze, na przykład obsłudze powtarzalnych pytań klientów albo wyszukiwaniu w archiwum pism. Integracje z systemem kancelaryjnym, generowanie pism z wzorców i self-hosting wyceniamy indywidualnie po przeglądzie tego, co macie. Do tego dochodzi utrzymanie: 249, 499 albo 799 zł netto miesięcznie, zależnie od pakietu. Pierwsza konsultacja i wycena są bezpłatne.',
    },
    {
      question: 'Czy agent AI udziela porad prawnych?',
      answer:
        'Nie. Agent nie udziela porad prawnych i nie zastępuje adwokata, radcy prawnego ani doradcy podatkowego. Podaje informacje o procedurze, znajduje dokumenty w archiwum kancelarii i przygotowuje szkice z Waszych wzorców. Ocena sprawy, wykładnia przepisu i podpis pod pismem zostają po stronie prawnika. Tam, gdzie rozmowa dotyka takiej granicy, agent mówi o tym wprost i odsyła do człowieka.',
    },
    {
      question: 'Skąd wiadomo, że agent nie zmyśla przepisu?',
      answer:
        'Bo nie odpowiada z ogólnej wiedzy modelu, tylko z podpiętej bazy dokumentów, czyli w mechanizmie RAG. Przy każdej odpowiedzi wskazuje źródło: konkretny przepis, pismo z repozytorium albo dokument z akt. Kiedy podstawy nie znajdzie, mówi że nie wie. Tak samo działa nasza Superkadrowa, która przy odpowiedziach z prawa pracy cytuje konkretne artykuły Kodeksu pracy z bazy ponad 40 aktów prawnych. Weryfikacja odpowiedzi i tak należy do prawnika.',
    },
    {
      question: 'Co z tajemnicą zawodową i gdzie leżą dane z akt?',
      answer:
        'Dane trzymamy na serwerach w Polsce lub w Unii Europejskiej, a każda kancelaria pracuje na osobnej, izolowanej instancji. Podpisujemy umowę powierzenia przetwarzania danych, ustalamy okres przechowywania rozmów i logów oraz konfigurujemy automatyczne usuwanie po tym okresie. Całość prowadzimy według standardów bezpieczeństwa zgodnych z normą ISO 27001. Nie deklarujemy natomiast zgodności z regulaminem wykonywania zawodu, bo to ocena należąca do Waszej izby.',
    },
    {
      question: 'Czy da się postawić agenta na naszym serwerze?',
      answer:
        'Tak, i w kancelariach pytają o to najczęściej. Framework OpenClaw jest open source, więc całość może działać na Waszej infrastrukturze, bez wychodzenia danych na zewnątrz. Model językowy pracuje wtedy na Waszych kluczach API, w modelu BYOK, więc historia zapytań i rachunek zostają po Waszej stronie. Platformę ClawLabs też udostępniamy w wariancie self-hosted. Nie jesteśmy oficjalnym partnerem projektu OpenClaw, po prostu na nim budujemy.',
    },
    {
      question: 'Ile trwa wdrożenie?',
      answer:
        'Mniejsze wdrożenia zamykają się zwykle w 2 do 4 tygodni: przegląd pytań, wybór zakresu bazy wiedzy, scenariusze, testy z prawnikiem i start. Większe, z integracją systemu kancelaryjnego, generowaniem pism i self-hostingiem, to realnie 1 do 3 miesięcy. Najdłużej trwa zwykle nie technologia, tylko uporządkowanie archiwum i ustalenie, które dokumenty w ogóle mogą trafić do bazy.',
    },
    {
      question: 'Czym różni się AI w biurze rachunkowym od AI w kancelarii prawnej?',
      answer:
        'Mechanizm jest ten sam, zmienia się baza i kalendarz. W biurze rachunkowym powtarzalne pytania dotyczą kompletu dokumentów do rozliczenia, terminów płatności i statusu deklaracji, a szczyty ruchu wypadają przy terminach podatkowych. W kancelarii częściej chodzi o etap postępowania i o archiwum pism. Granica jest identyczna: agent nie rozstrzyga kwalifikacji podatkowej i nie zastępuje doradcy podatkowego.',
    },
    {
      question: 'Macie już wdrożenie w kancelarii?',
      answer:
        'Publicznego wdrożenia w kancelarii nie mamy i nie będziemy tego sugerować. Najbliższy dowód to nasz własny produkt: Superkadrowa, wirtualna kadrowa AI pracująca na bazie ponad 40 aktów prawnych, ponad 900 dokumentów, 13 opracowań orzecznictwa Sądu Najwyższego i 17 wzorów dokumentów, cytująca konkretne artykuły Kodeksu pracy. Demo działa pod adresem superkadrowa.vercel.app. Jeśli chcecie referencji z Waszej branży, powiemy wprost, że ich jeszcze nie ma.',
    },
  ],
  cta: {
    heading: 'Zacznijmy od pytania, które pada u Was najczęściej',
    sub: 'Umów bezpłatną konsultację. Przejrzymy, o co pytają klienci i co realnie leży w archiwum, a potem powiemy wprost, czy przy Waszej skali to się spina.',
  },
  related: [
    { label: 'Automatyzacja procesów AI', href: '/uslugi/automatyzacja-procesow-ai' },
    { label: 'Chatbot AI', href: '/uslugi/chatbot-ai' },
    { label: 'Branże', href: '/branze' },
    { label: 'Cennik wdrożeń AI', href: '/cennik' },
    { label: 'Słownik pojęć AI', href: '/slownik' },
  ],
};

export default function Page() {
  return <SeoLanding content={content} />;
}
