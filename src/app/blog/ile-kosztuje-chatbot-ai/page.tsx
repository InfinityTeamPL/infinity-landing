import type { Metadata } from 'next';
import BlogArticle, { BlogArticleContent } from '@/components/BlogArticle';

export const metadata: Metadata = {
  title: 'Ile kosztuje chatbot AI dla firmy? Realne widełki cen 2026',
  description:
    'Od czego zależy cena chatbota AI, jakie są realne widełki na polskim rynku i za co faktycznie płacisz. Konkretne kwoty, bez „to zależy".',
  alternates: { canonical: '/blog/ile-kosztuje-chatbot-ai' },
  openGraph: {
    title: 'Ile kosztuje chatbot AI dla firmy? Realne widełki cen 2026',
    description:
      'Od czego zależy cena chatbota AI, jakie są realne widełki na polskim rynku i za co faktycznie płacisz. Konkretne kwoty, bez „to zależy".',
    type: 'article',
    images: [{ url: 'https://www.infinityteam.io/og.png', width: 1200, height: 630 }],
  },
};

const content: BlogArticleContent = {
  path: '/blog/ile-kosztuje-chatbot-ai',
  title: 'Ile kosztuje chatbot AI dla firmy? Realne widełki cen 2026',
  description:
    'Od czego zależy cena chatbota AI, jakie są realne widełki na polskim rynku i za co faktycznie płacisz. Konkretne kwoty, bez „to zależy".',
  datePublished: '2026-07-25',
  sections: [
    {
      paragraphs: [
        'Pytanie o cenę pada na naszych konsultacjach zwykle w pierwszych pięciu minutach, często zanim ustalimy, co ten chatbot miałby właściwie robić. Trudno się dziwić. Zanim ktoś zacznie myśleć o scenariuszach rozmów, chce wiedzieć, czy mówimy o kilkuset złotych miesięcznie, czy o kilkudziesięciu tysiącach jednorazowo. Kłopot w tym, że branża odpowiada na to „to zależy". My wolimy podać liczby.',
        'Krótko. Prosty bot z gotowej platformy SaaS to kilkaset złotych miesięcznie i konfiguracja po Twojej stronie. Agent AI szyty na miarę, czyli taki, który zna Twoją ofertę, sięga do Twojego systemu i faktycznie zamyka sprawę klienta, zaczyna się od 5 000 zł netto za wdrożenie. Do tego utrzymanie od 249 zł netto miesięcznie. Cała reszta to zakres: ile kanałów, ile integracji i czy bot ma też mówić głosem.',
        'Niżej rozbijamy tę kwotę na części i piszemy, co ją podnosi. Jest też fragment o tym, czego agent tekstowy nie zrobi, i drugi o tym, kiedy nie opłaca się go wdrażać. Rzadko trafiają do ofert, a bywają najbardziej przydatne.',
      ],
    },
    {
      heading: 'Z czego składa się koszt wdrożenia chatbota',
      paragraphs: [
        'Cena chatbota to cztery osobne pozycje i lepiej rozdzielić je już na etapie zapytania ofertowego. Jeśli dostawca podaje jedną kwotę bez rozbicia, nie masz jak porównać ofert.',
      ],
      bullets: [
        'Wdrożenie płacisz raz. Obejmuje projekt scenariuszy rozmów, zebranie bazy wiedzy o Twojej firmie, konfigurację, testy i uruchomienie. To największa pozycja na starcie.',
        'Utrzymanie płacisz co miesiąc. Serwery, monitoring, aktualizacje modeli AI, poprawki scenariuszy i wsparcie techniczne. Chatbot nie jest produktem „wdróż i zapomnij", bo oferta się zmienia, a pytania klientów razem z nią.',
        'Integracje wyceniamy osobno. Połączenie bota z CRM-em, systemem rezerwacji, ERP czy kalendarzem to praca po obu stronach. Bez nich chatbot tylko rozmawia. Z nimi umawia wizytę, sprawdza status zamówienia i zapisuje leada tam, gdzie go potem znajdziecie.',
        'Koszt modelu językowego rośnie razem z liczbą rozmów, bo rozlicza się go za zużycie. Część klientów pracuje na własnych kluczach API, w modelu BYOK. Wtedy rachunek od dostawcy modelu idzie prosto do nich, widzą go co do grosza, a my nie stoimy w środku tego strumienia.',
      ],
    },
    {
      heading: 'Ile kosztuje chatbot AI w Polsce',
      paragraphs: [
        'Rynek dzieli się na dwa światy. Pierwszy to gotowe platformy SaaS. Płacisz abonament od kilkuset złotych miesięcznie, dostajesz panel i sam składasz bota z klocków. Sensowne, jeśli masz czas, prostą ofertę i wystarczy Ci bot odpowiadający na kilkanaście typowych pytań. Minus jest taki, że scenariusze, treści i utrzymanie robisz sam, a możliwości kończą się tam, gdzie kończy się szablon. Tę granicę poznaje się zwykle w trzecim miesiącu, przy pierwszej integracji, której nie ma na liście.',
        'Drugi świat to agenci szyci na miarę i tu jesteśmy my. Wdrożenie zaczyna się od 5 000 zł netto przy mniejszym zakresie. Przy rozbudowanych systemach z wieloma integracjami przechodzimy na wycenę indywidualną, bo podanie widełek bez znajomości Waszych systemów byłoby zgadywaniem. Utrzymanie to trzy pakiety: Starter 249 zł, Standard 499 zł i Premium 799 zł netto miesięcznie. Różnią się zakresem opieki i czasem reakcji.',
        'Czas realizacji jest równie konkretny. Mniejsze wdrożenie zamykamy w 2 do 4 tygodni, większe projekty z integracjami i własną bazą wiedzy trwają od miesiąca do trzech. Budujemy na OpenClaw, otwartym frameworku z ponad 380 tysiącami gwiazdek na GitHubie. Nie jesteśmy jego oficjalnym partnerem, po prostu na nim pracujemy. Dla Ciebie ma to jeden praktyczny skutek: nie płacisz licencji za zamknięty silnik, tylko za pracę i dopasowanie do Twojej firmy.',
        'Dla porządku, u innych agencji w Polsce zobaczysz i kwoty podobne do naszych, i wyceny kilkukrotnie wyższe przy projektach korporacyjnych. Pytaj o rozbicie i o to, co konkretnie wchodzi w cenę. Zwłaszcza o jedno: czy w kwocie wdrożenia mieszczą się poprawki po pierwszych tygodniach ruchu. Bo pierwsza wersja bota nigdy nie jest tą docelową i to właśnie te poprawki decydują, czy narzędzie zacznie działać.',
      ],
    },
    {
      heading: 'Co podnosi cenę chatbota',
      paragraphs: [
        'Dwa wdrożenia nazwane tak samo potrafią różnić się ceną kilkukrotnie i oba bywają uczciwie wycenione. Różnica siedzi w zakresie.',
      ],
      bullets: [
        'Liczba kanałów waży najwięcej. Bot na stronie WWW to co innego niż agent obecny jednocześnie na WhatsAppie, Telegramie, w Teams, Slacku i na Discordzie. Obsługujemy ponad 23 kanały, tylko każdy dodatkowy to osobna konfiguracja i osobna runda testów.',
        'Integracje z CRM i ERP wymagają pracy po obu stronach: w systemie sprzedażowym, magazynowym albo kadrowym oraz w samym agencie. To zwykle największa pojedyncza pozycja. Im starszy system i im gorsze ma API, tym drożej. Przy systemach bez sensownego API zdarza nam się odradzić integrację zamiast ją wyceniać.',
        'Baza wiedzy przy setkach produktów albo przy procedurach i przepisach musi zostać zebrana i mieć sposób aktualizacji. Zebranie materiałów po stronie klienta potrafi zająć więcej czasu niż budowa samego agenta. To najczęstszy powód, dla którego harmonogram się rozjeżdża.',
        'Głos to wyższa półka. Voicebot rozmawia przez telefon, więc dochodzi synteza i rozpoznawanie polskiej mowy (u nas ElevenLabs), obsługa telefonii oraz strojenie naturalności rozmowy. Dochodzi też rachunek od operatora za minuty, którego przy bocie tekstowym nie ma w ogóle.',
      ],
    },
    {
      heading: 'Na co uważać u tanich dostawców',
      paragraphs: [
        'Niska cena na start potrafi być najdroższą opcją w skali roku. Zanim podpiszesz cokolwiek z dostawcą kuszącym abonamentem za grosze, sprawdź w umowie cztery rzeczy.',
        'Limity wiadomości. Wiele platform liczy każdą interakcję i po przekroczeniu pakietu dolicza opłaty albo po prostu wyłącza bota w połowie miesiąca. Jeśli chatbot ma obsłużyć ruch z kampanii reklamowej, tani abonament potrafi urosnąć kilkukrotnie. Policz to na swoim szczycie, nie na średniej.',
        'Własność danych. Rozmowy Twoich klientów mówią, o co pytają, czego nie znajdują na stronie i w którym miejscu rezygnują. To materiał, na którym da się poprawić ofertę, a nie tylko bota. U części dostawców zostaje on na ich serwerach, w ich formacie, bez sensownego eksportu. My trzymamy dane na serwerach w Polsce i pozostają one Twoje.',
        'Zamknięcie u dostawcy. Jeśli bot powstał w zamkniętym systemie konkretnej platformy, zmiana firmy oznacza budowę wszystkiego od nowa: scenariuszy, bazy wiedzy, integracji. Otwarty framework taki jak OpenClaw daje wyjście awaryjne, bo kod i konfiguracja są przenośne.',
        'Kto płaci za poprawki. To pytanie zadaje najmniej osób, a rachunek za nie potrafi zaskoczyć. Zapytaj wprost, ile zmian w scenariuszach mieści się w abonamencie i co się dzieje, gdy zmienicie cennik albo dołożycie nową usługę. U nas te poprawki siedzą w pakiecie utrzymaniowym, a ich zakres różni się między Starterem a Premium.',
      ],
    },
    {
      heading: 'Czego chatbot nie zrobi',
      paragraphs: [
        'Wycena robi się uczciwa dopiero wtedy, kiedy obie strony wiedzą, gdzie leży granica. Agent tekstowy dobrze zamyka sprawy powtarzalne i opisane. Poda status zamówienia po numerze, sprawdzi wolny termin w kalendarzu i go zarezerwuje, odpowie na pytanie o parametr produktu z bazy wiedzy, zbierze dane leada i wrzuci je do CRM-u, przypomni o niezapłaconej fakturze. Wszystko, co ma jasną procedurę, potrafi powtórzyć tysiąc razy bez spadku jakości. Także w niedzielę o drugiej w nocy.',
        'Gorzej z resztą. Tych rzeczy nie obiecujemy:',
      ],
      bullets: [
        'Negocjacji. Jeśli o cenie decyduje wyczucie i historia współpracy, bot najwyżej zbierze dane i przekaże sprawę handlowcowi.',
        'Odstępstw od procedury. Reklamacja zgłoszona po terminie, wyjątek dla stałego klienta, zgoda na rabat. To decyzja człowieka i tak powinno zostać.',
        'Porad, za które ktoś odpowiada zawodowo. Diagnoza, opinia prawna, interpretacja podatkowa. Agent zbierze fakty i umówi rozmowę ze specjalistą, ale nie zajmie jego miejsca.',
        'Rozmowy z klientem, który jest wściekły. Uczymy agenta rozpoznawać ten ton i przekazywać rozmowę człowiekowi, zamiast cytować regulamin komuś, kto właśnie stracił cierpliwość.',
      ],
    },
    {
      paragraphs: [
        'Osobna sprawa to zmyślanie. Model językowy puszczony bez ograniczeń potrafi wymyślić cenę, której nie ma w cenniku, i zrobi to bardzo pewnym tonem. Dlatego agenta trzymamy przy bazie wiedzy i uczymy go mówić „tego nie wiem, przekazuję dalej". Do zera to nie schodzi i nikt uczciwy nie powie, że schodzi. Dlatego w utrzymaniu siedzi przegląd rozmów: szukamy odpowiedzi, które poszły w bok, i domykamy luki w bazie. To akurat robota, której nie da się zrobić raz.',
      ],
    },
    {
      heading: 'Co przygotować przed wdrożeniem',
      paragraphs: [
        'Startu zwykle nie opóźnia kod, tylko czekanie na materiały. Ta lista skraca wdrożenie bardziej niż cokolwiek, co możemy zrobić po naszej stronie.',
      ],
      bullets: [
        'Kilkadziesiąt prawdziwych pytań klientów z maili i czatu z ostatnich miesięcy, w oryginalnym brzmieniu. Nie wygładzone FAQ ze strony, bo ludzie piszą zupełnie inaczej, niż nam się wydaje.',
        'Aktualny cennik i zasady współpracy. Co wchodzi w cenę, co jest dopłatą, ile trwa realizacja.',
        'Spisaną procedurę reklamacji i zwrotu, zaakceptowaną przez osobę, która o tym decyduje.',
        'Jedną osobę po Waszej stronie z prawem rozstrzygania sprzeczności w treści. Bez tego bot dostanie dwie wersje prawdy od dwóch działów i obie wypowie klientowi.',
        'Dostęp testowy do systemu, do którego agent ma sięgać, albo kontakt do jego dostawcy. Ten jeden punkt potrafi zająć dwa tygodnie sam z siebie.',
        'Decyzję, kiedy bot przełącza rozmowę na człowieka i do kogo konkretnie.',
      ],
    },
    {
      heading: 'Kiedy chatbot się nie opłaca',
      paragraphs: [
        'Bywa, że nie ma sensu. Lepiej usłyszeć to na bezpłatnej konsultacji niż po wdrożeniu.',
        'Mały ruch. Jeśli na stronę wpada kilka pytań dziennie i nikt w firmie nie ma z tym problemu, agent nie ma czego przejąć. Koszt rozłoży się na kilkadziesiąt rozmów miesięcznie, a oszczędność czasu zniknie w szumie. Porządna strona z cenami i zwykły formularz zrobią wtedy więcej za ułamek pieniędzy.',
        'Firma bez punktu prawdy. Agent odpowiada tym, czego go nauczymy. Jeśli w środku nie ma zgody co do tego, jak brzmi aktualny cennik i jak wygląda procedura reklamacji, bot wyciągnie te sprzeczności na wierzch przy pierwszym kliencie. Najpierw porządek, potem automatyzacja.',
        'Sprzedaż oparta na relacji. Kiedy każda rozmowa to ustalanie nietypowych warunków, agent odsieje najwyżej pytania o adres i godziny otwarcia. Za mało, żeby uzasadnić wdrożenie.',
        'Brak kogokolwiek do pilnowania treści. Chatbot to nie mebel. Ktoś raz na jakiś czas musi powiedzieć, że zmienił się cennik. Jeśli takiej osoby nie ma, po pół roku bot zacznie mijać się z prawdą i narobi więcej szkody niż pożytku.',
      ],
    },
    {
      heading: 'Jak policzyć, czy chatbot się opłaca',
      paragraphs: [
        'Cena nabiera sensu dopiero w zestawieniu z tym, co znika z kalendarza zespołu. Policz godziny, które ludzie zjadają miesięcznie na pytaniach o godziny otwarcia, status zamówienia, wolne terminy i cennik. Pomnóż przez koszt godziny pracy razem z narzutami. Potem dolicz zapytania, które przepadają po godzinach. Klient, który pisze o 21:00 i nie dostaje odpowiedzi, rano często kupuje gdzie indziej.',
        'Jeśli suma tych dwóch pozycji przekracza koszt utrzymania bota, wdrożenie ma sens ekonomiczny. Przy kilkuset zapytaniach miesięcznie zwykle przekracza. Wstępny szacunek zrobisz sam w kalkulatorze pod adresem infinityteam.io/kalkulator. Podstawiasz własne liczby, on pokazuje, po jakim czasie wdrożenie się spina. To szacunek oparty na Twoich założeniach i tyle jest wart, ile one.',
        'Jest jeszcze wariant pilotażowy. Zamiast wdrażać od razu wszystkie kanały i integracje, bierzemy jeden proces, zwykle najczęstsze pytania na stronie, i rozbudowujemy agenta dopiero wtedy, gdy pierwszy etap się obroni. Tak trzymasz koszt startu blisko dolnej granicy widełek. A po dwóch miesiącach rozmawiamy o rozbudowie na danych, nie na założeniach.',
      ],
    },
  ],
  faq: [
    {
      question: 'Czy chatbot AI wymaga stałego abonamentu?',
      answer:
        'Tak i lepiej zaplanować to od początku. Chatbot potrzebuje serwerów, monitoringu, aktualizacji modeli AI i poprawek scenariuszy, gdy zmienia się Twoja oferta. U nas utrzymanie kosztuje 249, 499 albo 799 zł netto miesięcznie, zależnie od pakietu. Bot bez opieki po kilku miesiącach zaczyna udzielać nieaktualnych odpowiedzi, a klient nie wie, że rozmawia z nieaktualną wersją firmy. To kosztuje więcej niż abonament.',
    },
    {
      question: 'Ile kosztuje voicebot w porównaniu z chatbotem tekstowym?',
      answer:
        'Voicebot jest droższy, bo dochodzi synteza i rozpoznawanie polskiej mowy, integracja z telefonią i dopracowanie naturalności rozmowy. Do tego dochodzi koszt, którego przy tekście nie ma wcale: minuty połączeń u operatora, rosnące razem z liczbą i długością rozmów. Głos budujemy na ElevenLabs. Konkretna różnica zależy od zakresu, dlatego voiceboty wyceniamy indywidualnie, po bezpłatnej konsultacji i analizie procesu.',
    },
    {
      question: 'Czy da się zacząć taniej, od pilota?',
      answer:
        'Tak i często tak właśnie robimy. Pilot obejmuje jeden kanał i jeden proces, na przykład odpowiedzi na najczęstsze pytania klientów na stronie WWW. Taki zakres mieści się blisko dolnej granicy widełek, czyli około 5 000 zł netto, i da się go uruchomić w 2 do 4 tygodni. Kolejne kanały i integracje dokładasz wtedy, gdy pierwszy etap obroni się na realnym ruchu.',
    },
    {
      question: 'Czy chatbot będzie zmyślał odpowiedzi?',
      answer:
        'Ryzyko istnieje i nie da się go zejść do zera. Model językowy zapytany o coś spoza bazy wiedzy potrafi wymyślić odpowiedź i podać ją pewnym tonem. Ograniczamy to dwoma sposobami: agent odpowiada z przygotowanej bazy, a przy pytaniu spoza niej mówi, że nie wie, i przekazuje sprawę człowiekowi. W ramach utrzymania przeglądamy rozmowy i domykamy luki w bazie. Jeśli ktoś obiecuje Wam zero pomyłek, obiecuje za dużo.',
    },
    {
      question: 'Co z RODO i danymi moich klientów?',
      answer:
        'Rozmowy z chatbotem to dane osobowe, więc dostawcę trzeba o to pytać wprost. W naszych wdrożeniach dane przetwarzamy na serwerach w Polsce, zgodnie z RODO, a bezpieczeństwo opieramy na standardach zgodnych z normą ISO 27001. Samego certyfikatu ISO nie posiadamy i mówimy o tym otwarcie. Dane z rozmów pozostają własnością Twojej firmy, masz do nich dostęp i możesz je wyeksportować.',
    },
    {
      question: 'Co zostaje z wdrożenia, jeśli po roku zrezygnujemy?',
      answer:
        'Dane z rozmów i baza wiedzy są Wasze, więc dostajecie je w eksporcie. Agent stoi na OpenClaw, otwartym frameworku, więc konfiguracja i scenariusze są przenośne, a nie zamknięte w panelu jednego dostawcy. Zadaj to pytanie każdemu dostawcy przed podpisaniem umowy: okres wypowiedzenia, format eksportu i to, co konkretnie zostaje po Waszej stronie, gdy współpraca się kończy.',
    },
  ],
  related: [
    { label: 'Cennik wdrożeń AI', href: '/cennik' },
    { label: 'Chatbot AI dla firm', href: '/uslugi/chatbot-ai' },
    { label: 'Kalkulator ROI', href: '/kalkulator' },
    { label: 'Agent AI a chatbot', href: '/blog/agent-ai-a-chatbot' },
    { label: 'Chatbot dla sklepu internetowego', href: '/branze/chatbot-dla-sklepu-internetowego' },
  ],
  ctaHeading: 'Wycena chatbota z rozbiciem na pozycje',
  ctaSub:
    'Powiedz nam, jakie pytania i procesy ma przejąć chatbot, a przygotujemy wycenę z rozbiciem na wdrożenie, utrzymanie i integracje. Konsultacja jest bezpłatna, a jeśli rachunek się nie spina, powiemy to wprost.',
};

export default function Page() {
  return <BlogArticle content={content} />;
}
