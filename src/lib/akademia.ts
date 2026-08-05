/* =========================================================
   Akademia Głosowa — bezpłatny kurs o agentach telefonicznych.

   PODZIAŁ WZGLĘDEM clawlabs.pro/akademia (WAŻNE, nie łamać):
   ClawLabs uczy budowania agentów TEKSTOWYCH na własnej platformie,
   samodzielnie. Ten kurs jest o GŁOSIE: telefon, rozmowa, latencja,
   nagrywanie, eskalacja do człowieka. Oba serwisy są nasze, więc
   dublowanie tematów oznaczałoby konkurowanie samemu ze sobą.
   Nowa lekcja o promptach, modelach czy hostingu należy do ClawLabs,
   nie tutaj.

   Treść trzymamy w jednym miejscu, żeby dodanie lekcji było
   dopisaniem obiektu, a nie tworzeniem strony.
   ========================================================= */

export interface LessonSection {
  h2: string;
  paragraphs: string[];
  /** Lista wypunktowana pod ostatnim akapitem sekcji. */
  list?: string[];
}

/**
 * Ścieżki kursu. Dzielimy je, bo czytelnik przychodzi tu z dwoma różnymi
 * pytaniami: „czy to w ogóle ma sens u mnie" (podstawy) oraz „jak ma
 * brzmieć rozmowa w mojej branży" (scenariusze). Wrzucone do jednej listy
 * kanibalizowały się nawzajem w nawigacji.
 */
export type TrackId = 'podstawy' | 'scenariusze';

export interface Track {
  id: TrackId;
  name: string;
  lead: string;
}

export const TRACKS: Track[] = [
  {
    id: 'podstawy',
    name: 'Podstawy',
    lead: 'Od tego, jak działa rozmowa z agentem, po decyzję czy wdrażać i jak to zmierzyć. Jeśli dopiero rozważacie voicebota, zacznijcie tutaj.',
  },
  {
    id: 'scenariusze',
    name: 'Scenariusze branżowe',
    lead: 'Konkretne rozmowy, zdanie po zdaniu: co agent mówi, gdzie oddaje słuchawkę człowiekowi i co w danej branży psuje się najczęściej.',
  },
];

export interface Lesson {
  slug: string;
  /** Numer w kursie, używany w nawigacji i danych strukturalnych. */
  number: number;
  /** Ścieżka, do której należy lekcja. Brak = podstawy (zgodność wsteczna). */
  track?: TrackId;
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** Zajawka pod H1 i na kafelku w hubie. */
  lead: string;
  /**
   * Pole historyczne. Czasu czytania NIE bierzemy już stąd, tylko liczymy
   * z treści przez readingMinutes(). Ręcznie wpisywane wartości rozjechały
   * się z rzeczywistością: lekcja na 480 słów i ta na 1086 miały obie „8 min".
   */
  minutes?: number;
  sections: LessonSection[];
  /** Podsumowanie na końcu lekcji. */
  takeaways: string[];
  faq?: Array<{ q: string; a: string }>;
  /** Linki do stron usługowych i branżowych, do których lekcja pasuje. */
  related?: Array<{ label: string; href: string }>;
}

export const LESSONS: Lesson[] = [
  {
    slug: 'jak-dziala-voicebot',
    number: 1,
    title: 'Jak działa voicebot i dlaczego przestał brzmieć jak automat',
    metaTitle: 'Jak działa voicebot — od słowa klienta do odpowiedzi',
    metaDescription:
      'Co dzieje się między słowem klienta a odpowiedzią voicebota: rozpoznanie mowy, model, synteza głosu. Skąd bierze się opóźnienie i co je psuje.',
    lead: 'Różnica między infolinią sprzed dekady a dzisiejszym voicebotem nie polega na lepszym lektorze. Polega na tym, że po drodze ktoś w ogóle rozumie, co mówicie.',
    sections: [
      {
        h2: 'Trzy etapy jednej wypowiedzi',
        paragraphs: [
          'Gdy klient mówi „chciałbym przełożyć wizytę na czwartek”, system wykonuje trzy osobne operacje. Najpierw zamienia dźwięk na tekst. Potem model językowy odczytuje intencję i decyduje, co zrobić. Na końcu odpowiedź wraca zamieniona z powrotem na mowę.',
          'To rozdzielenie ma praktyczne znaczenie, bo każdy etap psuje się inaczej. Zła jakość połączenia uderza w pierwszy, źle opisane zadanie w drugi, a nienaturalna barwa głosu w trzeci. Kiedy klient mówi, że „bot go nie rozumie”, warto najpierw ustalić, o który etap chodzi, bo winowajcą bywa coś zupełnie innego niż rozumienie.',
          'Między tymi etapami siedzi jeszcze coś, czego nikt nie liczy: droga dźwięku i moment, w którym system uznaje, że rozmówca skończył mówić. Głos leci przez sieć operatora paczkami, zanim w ogóle trafi do rozpoznania mowy. Potem trzeba odczekać chwilę ciszy, żeby nie wejść człowiekowi w słowo. To czekanie klient odbiera jako namysł agenta, choć z myśleniem nie ma nic wspólnego.',
        ],
      },
      {
        h2: 'Skąd bierze się opóźnienie',
        paragraphs: [
          'Człowiek w rozmowie telefonicznej zaczyna się niepokoić po mniej więcej sekundzie ciszy. To jest budżet, w którym muszą zmieścić się wszystkie trzy etapy razem z drogą przez sieć.',
          'Dlatego dobrze zbudowany voicebot nie czeka z odpowiedzią, aż przetworzy całe zdanie. Zaczyna mówić, gdy ma pierwszy fragment, podobnie jak człowiek, który wtrąca „tak, sprawdzam”. Ta jedna sztuczka robi większą różnicę w odbiorze niż wymiana modelu na droższy.',
          'Jest też druga strona medalu. Agent, który odpowiada natychmiast na wszystko, brzmi nienaturalnie i przerywa rozmówcy w połowie zdania. Strojenie tego progu to zwykle kilka dni pracy przy wdrożeniu, nie jedno ustawienie.',
          'Gdzie w tym łańcuchu uciekają milisekundy. Poniżej rzędy wielkości, a nie obietnica, bo wynik zależy od łącza i od tego, jak długo mówi rozmówca.',
        ],
        list: [
          'Cisza, po której system uznaje wypowiedź za zakończoną: kilkaset milisekund. Skrócicie ją, agent zacznie przerywać. Wydłużycie, zrobi się ospały.',
          'Rozpoznanie mowy pracuje na bieżąco, więc po ostatnim słowie zostaje mu do domknięcia ułamek sekundy, nie cała.',
          'Model językowy: liczy się moment, w którym pada pierwsze słowo odpowiedzi, nie długość całej. Reszta powstaje już w trakcie mówienia.',
          'Synteza głosu i droga z powrotem do słuchawki: znowu kilkaset milisekund, zanim rozmówca usłyszy pierwszą sylabę.',
        ],
      },
      {
        h2: 'Dlaczego czasem słychać pauzę',
        paragraphs: [
          'Czasem agent milczy dłużej i nie zawsze da się to wyciąć. Najczęstszy powód jest prozaiczny: poszedł po dane. Sprawdzenie wolnego terminu w kalendarzu albo statusu przesyłki to osobne zapytanie do Waszego systemu, a agent czeka na nie tak samo jak człowiek wpatrzony w kręcące się kółko. Jeśli tamten system odpowiada dwie sekundy, żaden lepszy model tego nie skróci.',
          'Drugi powód leży po stronie mówiącego. Zdanie z poprawką w środku („na wtorek, nie, czekaj, na środę”) trzeba wysłuchać do końca, bo sens pada dopiero na końcu. Bywa też rwące się połączenie, przy którym rozpoznanie mowy dostaje dziurawy dźwięk i czeka na resztę. No i długość samej odpowiedzi: im dłuższe zdanie agent ma wypowiedzieć, tym więcej trzeba przygotować, zanim padnie pierwsza sylaba.',
          'Da się z tym zrobić kilka rzeczy i żadna nie jest magiczna. Agent może powiedzieć, że sprawdza, zamiast milczeć. Może mieć limit czekania, po którym przyznaje, że nie dostał odpowiedzi, zamiast wisieć w ciszy piętnaście sekund. Czego nie zrobi: nie zacznie mówić, zanim będzie wiedział co. Pauza przed odpowiedzią, która wymaga zajrzenia do danych, jest uczciwa i lepiej ją zapowiedzieć, niż udawać, że jej nie ma.',
        ],
      },
      {
        h2: 'Czego ten łańcuch nie naprawi',
        paragraphs: [
          'Voicebot rozumie mowę i formułuje odpowiedzi, ale nie wie nic o Waszej firmie, dopóki mu tego nie damy. Godziny otwarcia, dostępne terminy, status zamówienia: to wszystko musi przyjść z systemu, który już macie.',
          'Jeśli te dane są rozproszone albo nieaktualne, voicebot będzie je powtarzał z równie dużą pewnością siebie jak te prawidłowe. Uporządkowanie źródła jest częścią wdrożenia, i to zwykle tą, która zajmuje najwięcej czasu. Sam łańcuch ma zresztą własne słabe punkty, bo każdy z trzech etapów gubi się na czymś innym.',
        ],
        list: [
          'Rozpoznanie mowy radzi sobie z polszczyzną dobrze, gorzej z gwarą, mocnym akcentem i rozmową z głośnika w samochodzie.',
          'Model językowy odpowie na wszystko, także wtedy, gdy nie zna odpowiedzi. Dlatego granice trzeba opisać wprost.',
          'Synteza głosu brzmi naturalnie, dopóki nie trafi na nazwę własną, skrót albo numer, którego nikt nie nauczył jej czytać.',
        ],
      },
    ],
    takeaways: [
      'Rozmowa to trzy osobne etapy: rozpoznanie mowy, decyzja modelu, synteza głosu. Każdy psuje się inaczej.',
      'Budżet na odpowiedź to około sekundy. Dlatego agent zaczyna mówić, zanim przetworzy całe zdanie.',
      'Voicebot nie zna Waszej firmy. Dane muszą przyjść z systemu, a ich uporządkowanie zajmuje najwięcej czasu.',
      'Najdłuższą pauzę robi zwykle nie AI, tylko zapytanie do Waszego systemu. Tam szukajcie sekund, nie w modelu.',
    ],
    faq: [
      {
        q: 'Ile realnie trwa odpowiedź agenta?',
        a: 'Gdy agent odpowiada z tego, co już wie, mieści się mniej więcej w sekundzie i rozmowa płynie. Gdy musi sprawdzić termin albo status w Waszym systemie, dochodzi tyle, ile ten system potrzebuje, i wtedy agent ma to powiedzieć, a nie milczeć. Te liczby traktujcie jako rząd wielkości, bo mierzy się je na prawdziwej linii telefonicznej, nie na laptopie przy dobrym wifi.',
      },
      {
        q: 'Czy klient pozna, że rozmawia z AI?',
        a: 'Przy krótkiej, prostej sprawie często nie. Przy dłuższej rozmowie zwykle tak, bo agent trzyma się tematu bardziej konsekwentnie niż człowiek. Niezależnie od tego od 2 sierpnia 2026 roku unijne przepisy nakazują poinformować rozmówcę, że rozmawia z systemem AI, więc kwestia i tak przestaje być hipotetyczna.',
      },
      {
        q: 'Czy voicebot poradzi sobie z gwarą albo mocnym akcentem?',
        a: 'Częściowo. Standardowa polszczyzna z regionalnym zabarwieniem zwykle nie sprawia problemu, silna gwara już tak. Jeśli obsługujecie region, w którym to codzienność, warto to sprawdzić na prawdziwych nagraniach przed decyzją, a nie po wdrożeniu.',
      },
    ],
    related: [
      { label: 'Agent głosowy AI: jak wdrażamy', href: '/uslugi/agent-glosowy-ai' },
      { label: 'Voicebot a klasyczne IVR', href: '/blog/voicebot-a-ivr' },
    ],
  },
  {
    slug: 'czy-twoj-telefon-nadaje-sie',
    number: 2,
    title: 'Czy Wasz telefon w ogóle nadaje się do automatyzacji',
    metaTitle: 'Czy voicebot ma sens w Twojej firmie — test w trzy dni',
    metaDescription:
      'Zanim wydacie złotówkę: jak policzyć połączenia i pytania powtarzalne. Z listą sytuacji, w których voicebot się nie opłaca.',
    lead: 'Najdroższy voicebot to ten, który obsługuje pięć telefonów dziennie. Ta lekcja jest o tym, jak sprawdzić skalę, zanim ktokolwiek zacznie coś budować.',
    sections: [
      {
        h2: 'Policzcie, zanim zapytacie o wycenę',
        paragraphs: [
          'Potrzebne są trzy liczby i da się je zebrać w tydzień. Ile połączeń przychodzi dziennie. Ile z nich zostaje nieodebranych. Ile trwa średnia rozmowa.',
          'Trzecia liczba zaskakuje najczęściej, bo z pamięci podaje się zwykle sam czas mówienia. Zmierzcie pełną długość połączenia, razem z szukaniem informacji i przepraszaniem za czekanie. Różnica między tym, co ludzie szacują, a tym, co pokazuje billing, potrafi zmienić cały rachunek.',
        ],
      },
      {
        h2: 'Podzielcie pytania na trzy kubełki',
        paragraphs: [
          'Przez trzy dni zapisujcie, z czym ludzie dzwonią. Nie trzeba systemu, wystarczy kartka przy telefonie. Potem posortujcie wpisy.',
        ],
        list: [
          'Pytania z jedną poprawną odpowiedzią: godziny otwarcia, czy jest wolny termin, gdzie jest przesyłka. To domena voicebota.',
          'Sprawy wymagające decyzji: rabat, wyjątek od regulaminu, reklamacja. Tu agent zbiera informacje i przekazuje dalej.',
          'Rozmowy, w których liczy się człowiek: kondolencje, poważny problem zdrowotny, zdenerwowany klient. Tych nie automatyzujemy i nie należy próbować.',
        ],
      },
      {
        h2: 'Kiedy voicebot się nie opłaca',
        paragraphs: [
          'Powiemy to wprost, bo częściej odradzamy, niż się spodziewacie. Przy kilku telefonach dziennie rachunek z końca tej lekcji wychodzi w okolicach dwóch, trzech godzin miesięcznie, czyli daleko poniżej progu opłacalności. Koszt wdrożenia i utrzymania się nie zwróci, a Wy dołożycie sobie system do pilnowania.',
          'Druga sytuacja to firma, w której każda rozmowa jest inna. Jeśli po trzech dniach notowania okaże się, że w dwudziestu telefonach było dwadzieścia różnych spraw, to nie ma czego automatyzować. Nie ma tam wzorca, jest doradztwo.',
          'Trzecia, najbardziej podstępna: firma, której klienci dzwonią właśnie dlatego, że chcą usłyszeć konkretną osobę. Automat odbiera wtedy przewagę, za którą ludzie płacą.',
        ],
      },
      {
        h2: 'Prosty test opłacalności',
        paragraphs: [
          'Rachunek ma cztery kroki i warto zrobić je po kolei, bo pomylenie minut z godzinami potrafi przestawić wynik o kilka razy. Najpierw mnożycie liczbę połączeń dziennie przez udział pytań z pierwszego kubełka. Wychodzi liczba rozmów dziennie, które agent mógłby przejąć. Mnożycie ją przez średni czas rozmowy w minutach, dzielicie przez sześćdziesiąt i mnożycie przez liczbę dni roboczych w miesiącu, czyli mniej więcej dwadzieścia jeden.',
          'Na liczbach: przy trzydziestu telefonach dziennie, z czego połowa to pytania powtarzalne, i przy rozmowie trwającej cztery minuty wychodzi piętnaście rozmów dziennie razy cztery minuty, czyli godzina dziennie. Po przemnożeniu przez dni robocze daje to około dwudziestu jeden godzin miesięcznie.',
          'Gdzie postawić próg. Poniżej mniej więcej dziesięciu godzin miesięcznie rzadko widzimy sensowny zwrot, bo sama konfiguracja i późniejsze poprawki zjadają tę oszczędność. Powyżej trzydziestu rozmowa o wdrożeniu robi się konkretna. Między jednym a drugim decyduje to, ile z tych połączeń dziś w ogóle przepada. To samo liczymy na pierwszym spotkaniu i mówimy wprost, gdy wynik nie wychodzi.',
        ],
      },
      {
        h2: 'Druga połowa pytania: czy Wasza telefonia to udźwignie',
        paragraphs: [
          'Skala odpowiada za połowę decyzji. Druga połowa siedzi w tym, jak macie dziś zestawiony telefon, i tam zaskoczenia bywają większe niż w kalkulacji.',
          'Poniżej układy, na które trafiamy najczęściej, i to, co w każdym z nich potrafi zaskoczyć.',
        ],
        list: [
          'Komórka właściciela z przekierowaniem. Przy wariancie „gdy nie odbieram” najpierw dzwoni aparat w kieszeni, agent rusza po kilkunastu sekundach, a rozmówca ma przez ten czas sam sygnał.',
          'Stara centrala analogowa albo ISDN, utrzymywana przez firmę z zewnątrz. Agenta nie ma tam gdzie wpiąć bez bramki albo bez zmiany łącza na SIP. Da się, tylko harmonogram przestaje zależeć od Was.',
          'Numer bezpłatny 800 albo 801. Ma własne zasady rozliczeń i przekierowanie potrafi zmienić to, kto płaci za minutę. Lepiej zapytać wcześniej, niż zobaczyć na fakturze.',
          'System call center z kolejką. Agent staje przed nią albo za nią. Przed kolejką zdejmuje ruch od razu, za kolejką łapie już tylko tych, którym znudziło się czekanie.',
          'Numer zapisany na osobę fizyczną, a nie na firmę. Problem nie jest techniczny i blokuje najskuteczniej, bo każdą zmianę musi podpisać ta konkretna osoba.',
        ],
      },
      {
        h2: 'O co zapytać operatora, zanim ktokolwiek zacznie budować',
        paragraphs: [
          'Ta rozmowa trwa kwadrans i prawie zawsze ląduje na końcu listy, przez co potrafi wywrócić termin tydzień przed startem. Odpowiedzi zapiszcie, bo konsultant na infolinii mówi jedno, a umowa bywa napisana inaczej.',
        ],
        list: [
          'Ile połączeń naraz przechodzi przez nasz numer i co słyszy drugi dzwoniący, gdy pierwszy rozmawia?',
          'Dostaniemy do numeru dostęp SIP, czy zostaje nam samo przekierowanie?',
          'Przekierowanie ustawiamy sami w panelu czy zgłoszeniem, i ile trwa cofnięcie zmiany?',
          'Czy przekazanie rozmowy na komórkę pracownika liczy się jako osobne połączenie i po jakiej stawce?',
          'Czy dostaniemy billing z rozbiciem na godziny i osobno wykaz nieodebranych? Ten jeden zapiszcie nawet wtedy, gdy resztę odpuścicie, bo daje Wam pierwsze trzy liczby z tej lekcji bez tygodnia notowania.',
        ],
      },
      {
        h2: 'Gdy odpowiedź brzmi: nie tym numerem',
        paragraphs: [
          'Czasem wychodzi twarde nie. Numer stoi na kimś, kogo nie ma jak złapać, albo centrala jest cudza i jej opiekun nie ma teraz czasu. To nie kończy tematu, zmienia kolejność prac.',
          'Obejście jest proste. Agent dostaje własny numer, a stary przekierowujecie na niego wtedy, kiedy chcecie: po godzinach, po kilkunastu sekundach dzwonienia, albo na start wcale. Niczego nie przenosicie i niczego nie podpisujecie. Cena jest taka, że przez jakiś czas macie w obiegu dwa numery i ktoś musi pilnować, który gdzie jest opublikowany. Przeniesienie numeru do operatora VoIP ma własne terminy po stronie obu operatorów, więc zaczyna się je razem z budową agenta, nie po odbiorze.',
          'Jest wreszcie odpowiedź, przy której nie ma po co szukać obejść. Firma, do której ludzie piszą na WhatsAppie, a dzwonią co drugi dzień, nie potrzebuje agenta głosowego, tylko szybszych odpowiedzi na wiadomości. Mówimy to na bezpłatnej konsultacji, zanim pojawi się jakakolwiek faktura.',
        ],
      },
    ],
    takeaways: [
      'Trzy liczby na start: połączenia dziennie, nieodebrane, średni czas rozmowy.',
      'Posortujcie pytania na powtarzalne, wymagające decyzji i takie, które musi wziąć człowiek.',
      'Przy kilku telefonach dziennie albo przy braku powtarzalności voicebot się nie opłaca.',
      'Policzcie godziny miesięcznie: rozmowy dziennie razy minuty, podzielone przez 60, razy 21 dni roboczych. Poniżej dziesięciu godzin rzadko warto zaczynać.',
      'Zapytajcie operatora, ile połączeń przechodzi przez numer naraz, kto figuruje w umowie i jak szybko cofniecie przekierowanie. Gdy usłyszycie nie, agent dostaje własny numer.',
    ],
    faq: [
      {
        q: 'Skąd wziąć statystyki połączeń, jeśli nie mamy centrali?',
        a: 'Wystarczy billing od operatora albo historia połączeń w telefonie za ostatni miesiąc. To mniej dokładne niż raport z centrali, ale w zupełności wystarcza do decyzji, czy w ogóle zaczynać rozmowę o wdrożeniu.',
      },
      {
        q: 'Czy nieodebrane połączenia naprawdę tyle kosztują?',
        a: 'Zależy od branży i tego, jak łatwo klient znajdzie kogoś obok. W usługach lokalnych, gdzie w mapach jest pięć innych firm, nieodebrany telefon zwykle oznacza utraconą sprawę. W relacjach stałych klient oddzwoni. Warto to ocenić uczciwie, zamiast zakładać najgorszy scenariusz, bo od tego zależy cała kalkulacja.',
      },
    ],
    related: [
      { label: 'Ile kosztuje voicebot', href: '/blog/ile-kosztuje-voicebot' },
      { label: 'Kalkulator oszczędności', href: '/kalkulator' },
    ],
  },
  {
    slug: "granice-voicebota",
    number: 3,
    title: "Co voicebot ma zrobić, gdy nie zna odpowiedzi",
    metaTitle: "Granice voicebota - co robić, gdy nie zna odpowiedzi",
    metaDescription: "Jak ustawić granice voicebota, żeby nie zgadywał. Twarde progi przekazania do człowieka, zdanie ratunkowe i co robić, gdy przekazanie zawodzi.",
    lead: "Najgorsza rzecz, jaką potrafi zrobić agent głosowy, to odpowiedzieć spokojnym, pewnym tonem na pytanie, którego nie rozumie. Granice trzeba mu wypisać, zanim odbierze pierwszy telefon.",
    sections: [
    {
      h2: "Agent bez granic nie milczy. Zgaduje",
      paragraphs: [
        "System głosowy jest zbudowany po to, żeby produkować sensownie brzmiącą wypowiedź. Jeśli nikt mu nie powiedział, czego ma nie robić, i tak coś powie. W kanale tekstowym ktoś ma szansę to wychwycić, bo widzi zdanie na ekranie i może porównać je z cennikiem albo z regulaminem. Przez telefon takiej szansy nie ma. Słowo pada raz, brzmi rzeczowo, a rozmówca zapisuje je w głowie jako ustalenie z firmą.",
        "Widać to najlepiej przy pytaniach z pogranicza. Klient pyta o rzecz, która w bazie wiedzy istnieje w połowie: cena jest, ale nie dla wariantu, o który pyta. Agent bez opisanych granic sklei brakującą część z tego, co wygląda podobnie, i poda kwotę. Potem ktoś z zespołu tłumaczy przez kwadrans, dlaczego liczba z telefonu nie zgadza się z fakturą. Koszt takiej sytuacji jest bardzo prozaiczny: godziny pracy zespołu, jeden zdenerwowany klient i cicha decyzja właściciela, żeby wyłączyć bota na tydzień.",
      ],
    },
    {
      h2: "Cztery progi, przy których rozmowa idzie do człowieka",
      paragraphs: [
        "Granice opisuje się prościej, niż większość osób zakłada. Nie trzeba przewidzieć wszystkich pytań świata ani budować drzewa na dwadzieścia gałęzi. Wystarczy wskazać sytuacje, w których agent kończy swoją część i przełącza rozmowę, bez negocjacji i bez próby ratowania sprawy na własną rękę.",
        "Trzy pierwsze progi są oczywiste dla każdego, kto przez tydzień posłuchał nagrań z infolinii. Czwarty ludzie zwykle pomijają, a to on ratuje najwięcej rozmów. Cierpliwość spada gwałtownie po drugiej prośbie o powtórzenie i wtedy nie ma sensu iść po trzecią.",
        "Progi zapisujemy w dokumencie. Ustalenie na spotkaniu wyparuje po dwóch tygodniach. Prosimy klienta o jedną kartkę: co agent robi sam, czego nie dotyka nigdy, kto odbiera rozmowę po przekazaniu i w jakich godzinach. Ta kartka waży w projekcie więcej niż większość ustawień technicznych. Cztery pozycje wracają na niej w każdym wdrożeniu, niezależnie od branży.",
      ],
      list: [
        "Rozmówca prosi o człowieka. Jedna prośba wystarczy, bez dopytywania o powód i bez oferowania jeszcze jednej próby.",
        "Pojawia się skarga albo emocje. Ktoś mówi o błędzie firmy, podnosi głos, wraca do sprawy z zeszłego tygodnia.",
        "Rozmowa dotyczy pieniędzy w konkretnej sprawie: zwrotu, korekty faktury, spornej płatności, rozliczenia zaliczki.",
        "Druga nieudana próba zrozumienia tego samego zdania. Trzecie podejście to już strata czasu obu stron.",
      ],
    },
    {
      h2: "Czego agent nie usłyszy, choćby scenariusz był idealny",
      paragraphs: [
        "Progi mówią, kiedy oddać rozmowę. Osobne pytanie brzmi, co najczęściej doprowadza do tego momentu. Wracają te same sytuacje i żadna z nich nie bierze się ze źle napisanego scenariusza. Rozpoznawanie mowy ma swoje warunki brzegowe, a lepiej poznać je na testach niż na nagraniach z pierwszego tygodnia.",
        "Część da się ustawić. Próg ciszy, po którym agent uznaje, że rozmówca skończył zdanie, to pierwsza rzecz, którą ruszamy na infolinii z przewagą starszych osób. Numer zlecenia albo kod rezerwacji łatwiej wystukać na klawiaturze telefonu niż podyktować w hałasie, więc zostawiamy obie drogi. Reszty nie naprawi żaden zapis w promptcie i wtedy zostaje jedno: krótka droga do człowieka.",
      ],
      list: [
        "Gwar w tle. Telewizor w pokoju obok, radio w aucie, druga rozmowa w open space. Transkrypcja wciąga wtedy słowa, których rozmówca nie powiedział, i najczęściej gubi się na cyfrach.",
        "Mowa potoczna. Ludzie nie mówią „chciałbym umówić wizytę”, tylko „dzwonię w sprawie tego, co Pani doktor robiła mi w piątek”. Do tego poprawki w środku zdania: „na wtorek, nie, czekaj, na środę”. Agent zapisze wtorek, jeśli nikt nie przewidział takiej poprawki.",
        "Osoby starsze. Mówią ciszej i robią dłuższe przerwy w środku wypowiedzi. System bierze przerwę za koniec zdania i wchodzi w słowo, rozmówca traci wątek i zaczyna od początku. Czasem pyta „halo?”, bo nie wie, czy cokolwiek się dzieje.",
        "Akcent i gwara. Najlepiej wychodzi standardowa polszczyzna. Przy wyraźnym akcencie regionalnym albo u osób mówiących po polsku jako drugim językiem sypią się nazwiska i nazwy miejscowości, czyli akurat te słowa, których nie da się odgadnąć z kontekstu.",
        "Zdenerwowany rozmówca. Mówi szybko, głośno, przerywa i nie odpowiada na pytanie, tylko opowiada całą sprawę od początku. Tu nie zawodzi technika, tylko sam pomysł, żeby ta osoba rozmawiała z automatem.",
      ],
    },
    {
      h2: "Zdanie, które gasi większość problemów",
      paragraphs: [
        "Brzmi banalnie: jeżeli agent nie ma pewności, mówi, że sprawdzi, i przekazuje rozmowę dalej. Jedna reguła załatwia zaskakująco dużo, bo daje agentowi gotowe wyjście w każdej niejasnej sytuacji. Zamiast produkować odpowiedź na siłę, ma ruch, który zawsze jest dopuszczalny.",
        "Ważne jest to, jak ta reguła brzmi w słuchawce. „Nie wiem” zostawia rozmówcę z niczym i kończy rozmowę źle. „Sprawdzę to i przełączę do osoby, która zna szczegóły” brzmi jak normalna obsługa. Ta sama informacja, zupełnie inne wrażenie.",
        "Do tego dochodzi drugie zdanie, o którym łatwo zapomnieć. Agent nie obiecuje rzeczy, których nie kontroluje: żadnych terminów realizacji, rabatów ani zapewnień, że na pewno się uda. Może przyjąć zgłoszenie i powiedzieć, kiedy ktoś oddzwoni. Tyle wystarczy, a każde słowo ponad to wraca do firmy w formie pretensji.",
      ],
    },
    {
      h2: "Co się dzieje, gdy przekazanie nie działa",
      paragraphs: [
        "Tu zaczyna się część, o której rzadko mówi się na prezentacjach. Przekazanie do człowieka wygląda dobrze na schemacie i bywa najsłabszym punktem całego wdrożenia. Klient opowiedział swoją sprawę agentowi, czeka, słyszy sygnał, odbiera konsultant i pyta, w czym może pomóc. Historia leci drugi raz.",
        "Drugie opowiadanie tej samej sprawy jest gorsze niż brak bota, bo rozmówca ma poczucie, że przeszedł przez zbędny etap. Dlatego przy przekazaniu musi wędrować kontekst: numer, imię, o co chodzi, co agent zdążył ustalić. Jeśli centrala nie potrafi pokazać tego konsultantowi na ekranie, niech chociaż podsumowanie trafi do CRM albo na czat zespołu, zanim rozmowa się połączy.",
        "Druga dziura to godziny i obłożenie. O 21:00 nie ma komu przełączyć rozmowy, w poniedziałek rano wszystkie linie są zajęte. Wtedy jedyne uczciwe rozwiązanie polega na zebraniu prośby o kontakt z konkretnym oknem czasowym i faktycznym oddzwonieniu. Voicebot, który obiecuje kontakt, a nikt nie dzwoni, szkodzi bardziej niż zwykła zapowiedź o godzinach pracy.",
      ],
    },
    {
      h2: "Jak sprawdzić granice przed startem",
      paragraphs: [
        "Te wszystkie rzeczy i tak wyjdą w pierwszym tygodniu produkcji, choć wystarczyłoby na nie jedno popołudnie wcześniej. Zdania wymyślone przy biurku zawsze przechodzą, więc nie ma sensu ich sprawdzać. Puśćcie agentowi to, co ludzie mówią naprawdę, najlepiej z nagrań albo z pamięci osoby, która przez rok odbierała ten numer.",
        "Kilka telefonów warto wykonać w warunkach, w jakich klienci naprawdę dzwonią: z auta na trasie, z korytarza, sprzed hali. Ktoś z zespołu powinien też celowo mówić półzdaniami, poprawiać się w połowie i podać nazwisko z trudną końcówką. Nie po to, żeby złamać agenta. Po to, żeby zobaczyć, co robi po drugiej nieudanej próbie i czy faktycznie przekazuje rozmowę zamiast pytać trzeci raz.",
        "Oceniajcie przy tym transkrypcję, nie wrażenie z rozmowy. Rozmowa potrafi brzmieć składnie, a w zapisie widać, że agent usłyszał Kowalczyk zamiast Kowalczuk i nikt tego nie potwierdził. Nazwiska, numery telefonów i daty sprawdzajcie osobno, bo to na nich wykłada się najwięcej wdrożeń, a nie na pytaniach o ofertę.",
      ],
    },
    ],
    takeaways: [
    "Agent bez opisanych granic nie przyzna się do niewiedzy. Wygeneruje odpowiedź, która brzmi pewnie i bywa nieprawdziwa.",
    "Ustalcie cztery twarde progi przekazania: prośba rozmówcy, skarga, sprawa pieniężna, druga nieudana próba zrozumienia.",
    "Reguła „sprawdzę i przekażę dalej” rozwiązuje większość niejasnych sytuacji, o ile agent nie obiecuje przy tym terminów.",
    "Przekazanie bez kontekstu jest gorsze niż brak bota. Klient opowiada swoją sprawę drugi raz i zwykle już nie wraca.",
    "Nie każde nieporozumienie to wina scenariusza. Gwar w tle i mowa potoczna psują transkrypcję niezależnie od tego, jak dobrze opisaliście granice.",
    ],
    faq: [
    {
      q: "Czy voicebot może po prostu powiedzieć, że czegoś nie wie?",
      a: "Może i powinien, tylko nie w takiej formie. Samo „nie wiem” zostawia rozmówcę bez dalszego kroku. Lepiej brzmi zapowiedź sprawdzenia połączona z przekazaniem do człowieka albo z przyjęciem zgłoszenia i informacją, kiedy ktoś oddzwoni.",
    },
    {
      q: "Jaka część rozmów powinna trafiać do człowieka?",
      a: "Nie ma tu jednej dobrej liczby i nie warto ustawiać sobie sztywnego celu. W większości wdrożeń na starcie przekazań jest sporo, potem spadają, bo baza wiedzy się uzupełnia. Ważniejsze od procentu jest to, czy przekazywane są właściwe sprawy: skargi, pieniądze i wszystko, czego agent nie ma opisanego.",
    },
    {
      q: "Co zrobić, gdy w firmie nie ma komu odebrać przekazanej rozmowy?",
      a: "Trzeba to powiedzieć wprost już na etapie projektu. Agent wtedy nie przełącza nikogo, tylko zbiera zgłoszenie i podaje realne okno kontaktu, na przykład następny dzień roboczy do południa. Obietnica natychmiastowego połączenia, której nikt nie dowiezie, kosztuje więcej niż brak takiej opcji.",
    },
    {
      q: "Dzwonią do nas głównie starsze osoby. Czy agent głosowy ma wtedy sens?",
      a: "Bywa, że ma, ale przy innych ustawieniach i po trzeźwej ocenie. Dłuższy próg ciszy, wolniejsze tempo, krótsze zdania i wcześniejsze przekazanie, na przykład już przy pierwszej nieudanej próbie zamiast drugiej. Jeśli po testach na własnych nagraniach widać, że i tak połowa rozmów ląduje u konsultanta, uczciwiej jest zostawić agenta na wieczory i weekendy, a w godzinach pracy nie wpuszczać go na pierwszą linię.",
    },
    {
      q: "Czy da się nauczyć agenta gwary albo akcentu?",
      a: "Nie w takim sensie, w jakim uczy się człowieka. Można natomiast podać modelowi listę nazw własnych, które padają w waszych rozmowach: ulice, miejscowości, nazwy produktów, nazwiska lekarzy. To realnie pomaga, bo system przestaje zgadywać te słowa z powietrza. Samego akcentu nie zmieni, więc przy takich rozmówcach agent powinien powtarzać nazwisko i numer do potwierdzenia zamiast zakładać, że usłyszał dobrze.",
    },
    ],
    related: [
    { label: "Agent głosowy AI dla firm", href: "/uslugi/agent-glosowy-ai" },
    { label: "Automatyzacja obsługi klienta", href: "/uslugi/automatyzacja-obslugi-klienta" },
    ],
  },
  {
    slug: "scenariusz-rozmowy",
    number: 4,
    title: "Jak zaprojektować rozmowę, żeby nie wyszło drugie IVR",
    metaTitle: "Scenariusz rozmowy voicebota - nie rób drugiego IVR",
    metaDescription: "Jak zaprojektować scenariusz rozmowy z voicebotem: powitanie, pytania otwarte, potwierdzanie ustaleń. I kiedy zwykłe menu wyborów sprawdza się lepiej.",
    lead: "IVR irytuje ludzi nie dlatego, że jest automatem. Irytuje, bo każe rozmówcy przetłumaczyć własną sprawę na cztery cyfry, które ktoś wymyślił dwa lata temu.",
    sections: [
    {
      h2: "Menu wyborów kontra rozmowa",
      paragraphs: [
        "Menu tonowe działa w jedną stronę. Firma ustala listę, dzwoniący ma się do niej dopasować. Jeśli jego sprawa mieści się w opisie, wszystko idzie gładko. Jeśli nie, zostaje mu wciśnięcie czegokolwiek i nadzieja, że po drugiej stronie ktoś to rozplącze. Stąd bierze się nawyk wciskania zera, zanim lektor skończy zdanie.",
        "Agent głosowy odwraca ten układ. Rozmówca mówi swoimi słowami, a system dopasowuje się do treści. Brzmi to jak drobna różnica, dopóki nie posłucha się nagrań. Ludzie w pierwszym zdaniu podają zwykle więcej informacji, niż zmieściłoby się w trzech poziomach menu: kto dzwoni, o co chodzi, czasem od razu proponowany termin.",
        "Problem w tym, że bardzo łatwo zbudować voicebota, który jest menu w przebraniu. Wystarczy zapytać „powiedz jeden, jeśli chcesz umówić wizytę” i cała przewaga znika. Rozmówca słyszy listę i wraca do trybu zgadywania, która opcja jest najmniej zła. Zwykle bierze się to z ostrożności: ktoś boi się, że agent nie poradzi sobie ze swobodną wypowiedzią, więc na wszelki wypadek podaje opcje. Efekt jest odwrotny od zamierzonego, bo lista sama w sobie prowokuje odpowiedzi spoza listy.",
      ],
    },
    {
      h2: "Pierwsze dziesięć sekund",
      paragraphs: [
        "Powitanie ma zmieścić cztery rzeczy, i to szybko. Gdzie się dodzwoniłem. Że odbiera asystent AI. Że rozmowa jest nagrywana, o ile faktycznie jest. Jak poprosić o człowieka. Potem głos wraca do rozmówcy. Zdania o wartościach firmy albo o podnoszeniu jakości obsługi kosztują sekundy, w których człowiek zaczyna się niecierpliwić.",
        "Cztery elementy brzmią jak dużo, a mieszczą się w jednym oddechu: „Dzień dobry, tu asystentka AI przychodni Zdrowie, rozmowa jest nagrywana. W każdej chwili mogę połączyć z rejestracją. W czym mogę pomóc?”.",
        "Skąd bierze się obowiązek nazwania rzeczy po imieniu, rozkładamy w lekcji siódmej. Tutaj liczy się wykonanie: w powitaniu ma paść „asystent AI” albo „asystentka AI”, bez owijania w bawełnę i bez form typu „rozmawia Pan”, bo tego samego nagrania słucha każdy, kto zadzwoni.",
        "Po powitaniu idzie jedno pytanie otwarte, a potem cisza. Ta cisza jest ważniejsza, niż się wydaje. Systemy, które za szybko wchodzą rozmówcy w słowo, psują pierwsze wrażenie mocniej niż sztucznie brzmiąca barwa głosu.",
      ],
    },
    {
      h2: "Pytania otwarte, ale nie za szerokie",
      paragraphs: [
        "„W czym mogę pomóc” jest dobre na start i słabe w środku rozmowy. Kiedy wiadomo już, że chodzi o rezerwację, pytanie musi się zawęzić. Zbyt szerokie pytanie w połowie rozmowy daje odpowiedź, której nie da się zamienić na dane w systemie, a agent zaczyna dopytywać i rozmowa się rozłazi. Zasada jest prosta: im bliżej końca, tym węższe pytanie i tym mniej miejsca na dowolność.",
        "Przed każdą akcją, która zostawia ślad w systemie, agent powtarza ustalenia. Termin, imię, numer telefonu, czasem adres. Jedno zdanie spokojnym tempem i pytanie o potwierdzenie. Kosztuje pięć sekund rozmowy, oszczędza telefon reklamacyjny w przyszłym tygodniu.",
        "Potwierdzanie ma jeszcze jedną funkcję, mniej oczywistą. Daje rozmówcy moment na poprawienie przekręconego nazwiska albo pomylonej cyfry. Rozpoznawanie mowy najczęściej myli się właśnie przy nazwiskach i długich ciągach cyfr, zwłaszcza gdy ktoś dzwoni z ulicy albo z auta. W scenariuszu obie te rzeczy, zawężanie pytania i potwierdzanie ustaleń, sprowadzają się do kilku prostych zamian w treści.",
      ],
      list: [
        "Zamiast „jakie ma Pan preferencje” zapytajcie „na kiedy mam szukać terminu”.",
        "Zamiast „proszę podać dane” pytajcie po kolei: najpierw imię i nazwisko, potem numer telefonu.",
        "Zamiast „kiedy Pani pasuje” zaproponujcie dwa konkretne terminy i poproście o wybór.",
        "Zamiast „czy coś jeszcze” zapytajcie wprost „czy mam zapisać to zgłoszenie”.",
      ],
    },
    {
      h2: "Kiedy menu wyborów jednak wygrywa",
      paragraphs: [
        "Nie każda infolinia potrzebuje rozmowy. Jeśli firma ma dwie albo trzy sprawy, z którymi ludzie dzwonią, a po drugiej stronie są stali klienci wykonujący tę samą czynność co tydzień, menu bywa po prostu szybsze. Kierowca sprawdzający status zlecenia woli wcisnąć jedynkę, niż tłumaczyć się automatowi.",
        "Rozmowa przegrywa też w hałasie. Warsztat, hala, głośna ulica: rozpoznawanie mowy gubi wtedy końcówki i myli cyfry, a tony z klawiatury przechodzą zawsze. W kilku projektach zostawiliśmy z tego powodu układ mieszany, w którym agent normalnie rozmawia, ale numer zlecenia rozmówca może wystukać palcem.",
        "Jest jeszcze przypadek, w którym szczerze odradzamy budowanie rozmowy. Kiedy firma nie ma spisanych zasad i o terminach decyduje to, kto akurat siedzi na recepcji, agent nie ma czego odwzorować. Najpierw porządkuje się procedurę, potem projektuje scenariusz. Odwrotna kolejność kończy się botem, który brzmi świetnie i ustala rzeczy niezgodne z tym, co robi zespół.",
      ],
    },
    ],
    takeaways: [
    "Menu każe rozmówcy dopasować się do firmy. Rozmowa robi odwrotnie i dlatego wygrywa przy sprawach, których nie da się zamknąć w liście.",
    "Powitanie krótkie, ale pełne: kto odbiera, że to asystent AI, nagrywanie jeśli nagrywacie i droga do człowieka. Potem jedno pytanie otwarte i cisza na odpowiedź.",
    "Zawężajcie pytania w miarę rozmowy, a przed zapisem czegokolwiek powtórzcie ustalenia i poproście o potwierdzenie.",
    "Przy dwóch powtarzalnych sprawach albo w hałasie zwykłe menu bywa lepszym wyborem niż rozmowa.",
    ],
    faq: [
    {
      q: "Czy voicebot musi informować, że jest sztuczną inteligencją?",
      a: "Tak. Obowiązek wynika z unijnych przepisów o AI, a termin ich stosowania to 2 sierpnia 2026. Zakres, papiery i to, kto za co odpowiada, rozkładamy w lekcji siódmej i tam odsyłamy po szczegóły. Z punktu widzenia scenariusza sprawa jest prosta: w pierwszym zdaniu powitania pada „asystent AI” albo „asystentka AI” i temat zamknięty.",
    },
    {
      q: "Jak długie powinno być powitanie?",
      a: "Kilka sekund, mimo że elementów jest cztery: nazwa firmy, informacja o asystencie AI, nagrywanie jeśli nagrywacie i sposób poproszenia o człowieka. Na końcu pytanie otwarte. Wszystko, co poza tym, rozmówca i tak przestaje słuchać, bo czeka na moment, w którym będzie mógł powiedzieć, po co dzwoni.",
    },
    {
      q: "Czy da się połączyć rozmowę z klawiaturą telefonu?",
      a: "Da się i czasem tak robimy. Agent prowadzi rozmowę normalnie, a przy numerach zlecenia, PESEL czy kodach rezerwacji proponuje wystukanie ich na klawiaturze. To ratuje rozmowy prowadzone w hałasie i skraca sprawy, w których liczy się dokładność, a nie swoboda wypowiedzi.",
    },
    ],
    related: [
    { label: "Voicebot a IVR: czym się różnią", href: "/blog/voicebot-a-ivr" },
    { label: "Voicebot dla przychodni", href: "/branze/voicebot-dla-przychodni" },
    ],
  },
  {
    slug: "glos-i-persona",
    number: 5,
    title: "Głos, tempo i imię asystenta",
    metaTitle: "Głos voicebota - barwa, tempo i imię asystenta",
    metaDescription: "Jak dobrać barwę głosu i tempo mówienia voicebota, czy nadawać mu imię oraz dlaczego zbyt ludzki głos przy prostym bocie rozczarowuje rozmówcę.",
    lead: "Barwa głosu decyduje o tym, czy rozmówca potraktuje asystenta poważnie, zanim usłyszy pierwszą konkretną odpowiedź. To ustawienie, przy którym najczęściej widzimy decyzje podjęte przypadkiem.",
    sections: [
    {
      h2: "Barwa głosu ustawia oczekiwania",
      paragraphs: [
        "Ludzie oceniają kompetencję po głosie w kilka sekund, na długo przed treścią. Ten sam tekst przeczytany niżej i spokojnie brzmi jak informacja z firmy, a podany wysoko i energicznie jak reklama. Wybór barwy nie jest więc kwestią gustu osoby, która akurat klika w panelu.",
        "Dopasowanie idzie za branżą i za stanem, w jakim ludzie dzwonią. Przychodnia potrzebuje głosu spokojnego i raczej wolniejszego, bez entuzjazmu, bo po drugiej stronie bywa ktoś chory albo zdenerwowany. Salon zniesie cieplejszą barwę. Firma transportowa woli głos rzeczowy, bo kierowca w kabinie chce usłyszeć godzinę i się rozłączyć.",
        "Głos opieramy na ElevenLabs. W praktyce oznacza to sporo wariantów do przesłuchania i możliwość dostrojenia szczegółów, ale też jeden obowiązek: próbki trzeba odsłuchać przez telefon, a nie na dobrych słuchawkach. Linia telefoniczna obcina górę i dół pasma. Głos, który w komputerze brzmi aksamitnie, przez komórkę potrafi zrobić się płaski i nosowy.",
      ],
    },
    {
      h2: "Tempo, pauzy i to, co słychać w słuchawce",
      paragraphs: [
        "Tempo ustawia się nieco wolniej niż w zwykłej rozmowie. Rozmówca nie widzi twarzy, często jest w ruchu, czasem słabo słyszy. Zbyt szybki asystent zmusza do proszenia o powtórzenie, a każde powtórzenie zbliża rozmowę do progu przekazania do człowieka. Pauzy bywają przy tym ważniejsze od samego tempa. Po pytaniu musi zostać cisza, w której człowiek zdąży zebrać myśli, a dłuższą odpowiedź lepiej rozbić na dwa oddechy, zamiast wyrzucać ją jednym ciągiem.",
        "Osobna sprawa to opóźnienie. Między końcem zdania rozmówcy a początkiem odpowiedzi zawsze coś upływa. Gdy ta przerwa rośnie, ludzie mówią „halo?” i wchodzą agentowi w słowo. Krótkie potwierdzenie w rodzaju „już sprawdzam” potrafi tę dziurę zasypać, o ile nie pada po każdej wypowiedzi, bo wtedy zaczyna brzmieć jak tik. Żadnej z tych rzeczy nie ocenicie w panelu, trzeba je przećwiczyć na słuchawce.",
      ],
      list: [
        "Numery telefonów i kwoty czytajcie wolniej niż resztę zdania, w grupach po dwie albo trzy cyfry.",
        "Po pytaniu zostawcie ciszę zamiast dopowiadać podpowiedzi, kiedy rozmówca się zastanawia.",
        "Nagrania testujcie tak, jak dzwonią ludzie: z głośnika telefonu, w hałaśliwym pomieszczeniu i przy słabym zasięgu, kiedy dźwięk się rwie.",
      ],
    },
    {
      h2: "Tempo i ton pod branżę",
      paragraphs: [
        "Jedno ustawienie tempa na cały scenariusz to skrót, który mści się zawsze w tym samym miejscu. Powitanie i pytania mogą iść zwyczajnie, ale w chwili, gdy agent podaje termin, adres albo numer zlecenia, po drugiej stronie ktoś szuka długopisu. Tam trzeba zwolnić i rozbić zdanie na krótsze kawałki. Testujcie to na kimś, kto naprawdę zapisuje. Inaczej nie usłyszycie, że agent zdążył podać trzy rzeczy, a rozmówca zapamiętał jedną.",
        "Poza tym punktem ton idzie za sytuacją, w jakiej ludzie sięgają po telefon. Kilka układów, które widujemy najczęściej.",
      ],
      list: [
        "Transport i rozkłady: rozmówca stoi na dworze, w hałasie, chce usłyszeć godzinę i się rozłączyć. Krótkie zdania i godzina powtórzona raz na końcu.",
        "Przychodnia albo gabinet: dzwoni ktoś chory lub rodzic z małym dzieckiem w tle. Wolniej, bez wesołości, z cierpliwością na zacinanie się, bo agent nie może wchodzić w słowo komuś, kto szuka nazwy leku.",
        "Gastronomia wieczorem: hałas po obu stronach linii. Wyraźniej i głośniej, ale nie szybciej. To dwie różne rzeczy i mylenie ich psuje najwięcej rozmów.",
        "Serwis i awarie po godzinach: rozmówca jest zdenerwowany. Spokojny, lekko wolniejszy głos brzmi jak ktoś, kto się tym zajmie. Szybkie tempo odbiera się jako zbywanie, nawet gdy treść jest w porządku.",
      ],
    },
    {
      h2: "Kto ma wybrać tempo",
      paragraphs: [
        "Da się rozdzielić ton po porze dnia albo po numerze, na który ktoś dzwoni. Rzadko to proponujemy. Każda wersja to osobny zestaw nagrań i osobne miejsce, w którym coś pójdzie nie tak, a przy przeglądaniu rozmów trudniej dojść, która zawiodła. Prościej ustawić jedno tempo pod trudniejszy przypadek i pilnować, żeby w łatwiejszym nie brzmiało ślamazarnie.",
        "Sam wybór zamyka się szybciej, niż wygląda, o ile nie robicie z niego dyskusji o gustach. Nagrywamy jedno zdanie w trzech tempach i puszczamy je przez telefon osobie, która na co dzień odbiera te połączenia. Właściciel firmy wybiera zwykle ładniejszy głos. Recepcjonistka wybiera ten, przy którym rzadziej trzeba powtarzać. My idziemy za recepcjonistką.",
      ],
    },
    {
      h2: "Imię, przedstawienie się i spójność z marką",
      paragraphs: [
        "Imię pomaga, bo daje rozmówcy sposób mówienia o asystencie i porządkuje rozmowę. Ma też drugą stronę. Ludzkie imię podane bez wyjaśnienia sugeruje pracownika, a tego chcemy uniknąć. Bezpieczny układ to imię plus rola nazwana wprost, na przykład „Ola, asystentka AI salonu”. Nie „asystentka głosowa”, nie „wirtualna recepcja”, tylko AI, bo tylko to słowo rozmówca zrozumie od razu.",
        "Informacja, że rozmówca rozmawia z AI, nie jest kwestią stylu ani uprzejmości. Obowiązek i jego zakres opisujemy w lekcji siódmej, tutaj interesuje nas wyłącznie brzmienie. Praktyczny efekt bywa całkiem dobry: ludzie, którzy wiedzą, że mówią do maszyny, formułują prośby prościej i rzadziej irytują się drobnym potknięciem.",
        "Spójność z marką to część mniej techniczna, za to widoczna od pierwszej sekundy. Jeśli firma pisze do klientów luźno i po imieniu, sztywny asystent brzmi obco. Jeśli komunikacja jest formalna, wesoły głos podważa jej wiarygodność. Zwykle prosimy o dwa nagrania rozmów z recepcji albo o kilka maili wysyłanych do klientów i z tego układamy ton.",
      ],
    },
    {
      h2: "Pułapka zbyt ludzkiego głosu",
      paragraphs: [
        "Najczęstszy błąd wygląda tak: ktoś wybiera najbardziej naturalną próbkę, jaką znajdzie, i wkłada ją do bota, który umie cztery rzeczy. Głos obiecuje partnera do rozmowy, a po pierwszym trudniejszym pytaniu okazuje się, że to prosty automat. Rozczarowanie jest wtedy większe, niż gdyby rozmówca od początku słyszał neutralną, wyraźnie syntetyczną barwę.",
        "Do tego dochodzą rzeczy, których żaden silnik mowy nie robi bezbłędnie. Nazwy ulic, nazwiska z trudną odmianą, skróty branżowe, obce słowa wrzucone w polskie zdanie, godziny zapisane w nietypowy sposób. Część poprawia się ręcznie w słowniku wymowy, część zostaje. Po uruchomieniu zawsze zbieramy listę słów, które asystent przekręca, i czyścimy ją przez kolejne tygodnie.",
        "Osobno odradzamy klonowanie głosu konkretnej osoby z firmy. Na pokazie robi wrażenie, a potem zaczynają się kłopoty: zgoda pracownika, zapis w umowie, aktualizacja nagrań, gdy ta osoba odejdzie. Do tego rozmówca, który zorientuje się później, że słyszał kopię głosu recepcjonistki, ma prawo poczuć się wprowadzony w błąd. Więcej papieru niż pożytku.",
      ],
    },
    {
      h2: "Gdy rozmówca nie wie, że to automat",
      paragraphs: [
        "Ludzie mówią inaczej do człowieka niż do maszyny, a różnica jest większa, niż się wydaje. Do człowieka opowiada się sprawę od początku, z dygresją o tym, że dzwoniło się już we wtorek i nikt nie odebrał. W jednej wypowiedzi siedzą wtedy dwie intencje i pół historii rodzinnej. Rozpoznawanie mowy radzi sobie z takim materiałem gorzej niż z prostym „chcę przełożyć wizytę”. Wychodzi z tego rzecz przewrotna: im bardziej ludzki głos, tym trudniejsze wejście dostaje system, który ma za nim nadążyć.",
        "Druga sprawa jest czysto techniczna i kosztuje najwięcej. W rozmowie z człowiekiem przytakujemy. „Mhm”, „tak, tak”, odruchowo, żeby pokazać, że słuchamy. Wykrywanie mowy traktuje takie mruknięcie jak wejście w słowo i przerywa zdanie agenta w połowie. Rozmówca słyszy urwaną informację, więc pyta jeszcze raz, agent zaczyna od nowa, a przy trzecim podejściu ktoś się rozłącza. Kiedy człowiek wie, że po drugiej stronie jest automat, przytakuje wyraźnie rzadziej, bo nie ma komu.",
        "Zostaje moment odkrycia. Ktoś w połowie rozmowy orientuje się, z czym rozmawia, i prawie zawsze robi to samo: zostawia swoją sprawę i zaczyna sprawdzać. Najpierw „czy ja rozmawiam z człowiekiem”, potem pytanie z zupełnie innej beczki, żeby przyłapać. Rozmowa rusza od zera, z gorszym nastawieniem niż na starcie. Gorzej, jeśli po drodze powiedział więcej, niż zamierzał, bo mówił jak do recepcji. Pretensja nie dotyczy wtedy głosu, tylko tego, że nikt go nie uprzedził. Co i kiedy trzeba powiedzieć, opisujemy w lekcji siódmej.",
        "Dlatego barwę dobiera się razem z pierwszym zdaniem, a nie osobno. Bez informacji o AI naturalny głos pracuje przeciwko Wam, bo im lepiej udaje człowieka, tym mocniejsze będzie zderzenie. Z tą informacją można pozwolić sobie na cieplejszą barwę, bo nikt się już w połowie rozmowy niczego nie dowie.",
      ],
    },
    ],
    takeaways: [
    "Barwa głosu ustawia oczekiwania co do kompetencji, zanim padnie pierwsza odpowiedź. Dobierajcie ją do branży i do stanu, w jakim dzwonią ludzie.",
    "Tempo nieco wolniejsze niż w zwykłej rozmowie, wyraźna pauza po pytaniu, cyfry czytane grupami.",
    "Imię plus rola nazwana wprost: „asystentka AI”, nie „asystentka głosowa”. Skąd bierze się ten obowiązek, tłumaczy lekcja siódma.",
    "Bardzo naturalny głos przy prostym bocie działa przeciwko Wam. Neutralna barwa mniej obiecuje i mniej rozczarowuje.",
    "Kto nie wie, że mówi do maszyny, mówi dłużej i przytakuje w środku zdania. Agent przerywa, rozmowa się zapętla. Zdanie o AI na wstępie oszczędza tę pętlę.",
    ],
    faq: [
    {
      q: "Głos męski czy żeński?",
      a: "Nie mamy na to twardej odpowiedzi i nie ufamy prostym regułom w stylu „w medycynie zawsze kobiecy”. Zwykle proponujemy dwa warianty, puszczamy je na kilkunastu prawdziwych rozmowach i słuchamy, przy którym ludzie mniej dopytują. Ważniejsza od płci głosu bywa jego wyrazistość na słabym połączeniu.",
    },
    {
      q: "Czy asystent może nosić imię pracownika z recepcji?",
      a: "Odradzamy. Rozmówca może uznać, że rozmawia z tą osobą, a to kłóci się z obowiązkiem informowania o AI, który opisujemy w lekcji siódmej. Lepiej wybrać imię neutralne i zawsze dokleić do niego rolę ze słowem AI, na przykład „Ola, asystentka AI salonu”. Wtedy od pierwszego zdania jest jasne, kto jest po drugiej stronie.",
    },
    {
      q: "Rozmówcy mówią, że asystent mówi za wolno. Przyspieszać?",
      a: "Najpierw sprawdźcie, w którym miejscu pada ta uwaga. Jeśli przy powitaniu, tnijcie bez wahania, bo tam ludzie chcą przejść dalej. Przy podawaniu terminu albo numeru zostawcie wolne tempo, bo ono pracuje na Waszą korzyść, tylko rozmówca tego tak nie nazwie. I zwykle więcej daje skrócenie tekstu niż przyspieszenie odtwarzania. Krótsze zdanie w normalnym tempie brzmi lepiej niż długie puszczone szybciej.",
    },
    {
      q: "Ile trwa dobranie głosu i czy to osobny koszt?",
      a: "To część wdrożenia, a nie oddzielna usługa. Całe wdrożenie zaczyna się od 5 000 zł netto i trwa 2 do 4 tygodni przy mniejszych projektach albo od 1 do 3 miesięcy przy większych. Dobór głosu zajmuje z tego zwykle jedno spotkanie i kilka odsłuchań. Pierwsza konsultacja jest bezpłatna.",
    },
    ],
    related: [
    { label: "Agent głosowy AI dla firm", href: "/uslugi/agent-glosowy-ai" },
    { label: "Voicebot dla salonów", href: "/branze/voicebot-dla-salonow" },
    ],
  },
  {
    slug: "skad-voicebot-bierze-dane",
    number: 6,
    title: "Skąd voicebot bierze prawdę o Waszej firmie",
    metaTitle: "Skąd voicebot bierze dane o firmie - lekcja 6",
    metaDescription: "Agent głosowy nie zna Waszej firmy. Sprawdźcie, z jakich systemów bierze dane, dlaczego jedno źródło prawdy wygrywa z liczbą integracji i kiedy to zawodzi.",
    lead: "Voicebot w dniu uruchomienia nie wie o Was nic. Każda cena, godzina i dostępność musi przyjść z konkretnego systemu, w momencie rozmowy.",
    sections: [
    {
      h2: "Agent zna tylko to, co mu podacie",
      paragraphs: [
        "Voicebot w dniu uruchomienia wie mniej niż nowy pracownik po szkoleniu. Umie prowadzić rozmowę, rozpoznać intencję, poprosić o powtórzenie numeru. O Waszej firmie nie wie nic. Nie zna cennika, nie widzi grafiku, nie ma pojęcia, czy pan Nowak dzwonił wczoraj i w jakiej sprawie.",
        "Wszystko, co brzmi jak konkret, musi przyjść z systemu w chwili rozmowy. Termin z kalendarza. Cena z bazy usług. Status zamówienia z magazynu albo z CRM. Godzina odjazdu z rozkładu. Jeśli agent ma odpowiadać na pytania o dostępność, ktoś musi mu dać dostęp do miejsca, w którym ta dostępność jest naprawdę zapisana.",
        "Alternatywa wygląda niewinnie. Wpisujemy najczęstsze informacje na sztywno w konfigurację i mamy spokój. Działa do pierwszej zmiany cennika. Potem agent przez trzy tygodnie podaje starą kwotę, a nikt tego nie zauważa, bo przecież odpowiada płynnie i uprzejmie. Sztywne dane starzeją się po cichu i to jest w nich najgorsze.",
      ],
    },
    {
      h2: "Jedno źródło prawdy bije liczbę integracji",
      paragraphs: [
        "W zapytaniach ofertowych prawie zawsze pada pytanie, z iloma systemami się integrujemy. Rozumiemy, skąd się bierze, ale prowadzi w złą stronę. Ważniejsze jest inne: który system rozstrzyga spór, kiedy dwa pokazują co innego.",
        "Prosty przypadek z warsztatu samochodowego. Na stronie wisi PDF z cennikiem, przegląd za 180 zł. W systemie warsztatowym od czerwca jest inna, wyższa stawka, bo ceny poszły w górę. Agent czyta PDF, bo ktoś uznał, że to najszybsza droga do informacji o cenach.",
        "Klient przyjeżdża i przy kasie słyszy inną kwotę. Formalnie racja jest po stronie warsztatu. Praktycznie ma w głowie nagranie rozmowy i poczucie, że go wpuszczono w maliny. Jedna taka rozbieżność potrafi skasować efekt kilkudziesięciu poprawnie obsłużonych połączeń.",
        "Mniej integracji bywa lepsze. Dwie dobrze wybrane, kalendarz i baza klientów, dają więcej pożytku niż pięć, które podważają się nawzajem. Zanim ruszy wdrożenie, warto rozstrzygnąć kilka rzeczy na kartce.",
      ],
      list: [
        "Który system podaje ceny i kto ma prawo je w nim zmieniać",
        "Gdzie leży aktualny grafik i czy ktoś równolegle prowadzi drugi, papierowy",
        "Co się dzieje z terminem zarezerwowanym przez agenta, gdy recepcja wpisze wizytę ręcznie",
        "Kto zauważy, że integracja przestała odpowiadać, i po jakim czasie",
      ],
    },
    {
      h2: "Niech agent cytuje, zamiast zgadywać",
      paragraphs: [
        "Jest zasada, którą stosujemy w scenariuszach: agent podaje konkret wyłącznie wtedy, gdy dostał go z systemu, i mówi, skąd go ma. Brzmi to zwyczajnie. „Według rozkładu na dziś”, „w kalendarzu widzę wolny termin w czwartek o czternastej”, „w systemie mam zamówienie z dwunastego”. Rozmówca dostaje sygnał, że po drugiej stronie jest odczyt danych, a nie domysł.",
        "Nasze demo transportowe działa dokładnie tak. Zbudowaliśmy je na publicznych danych rozkładowych PKS Gryfice: sześć przystanków, dwieście siedemdziesiąt sześć odjazdów. PKS Gryfice nie jest naszym klientem, sięgnęliśmy po otwarte dane, żeby pokazać mechanikę na czymś, co każdy może zweryfikować. Agent nie próbuje wnioskować, że pewnie coś jedzie koło południa. Sięga do rekordu, podaje godzinę i kierunek, a gdy rekordu nie ma, przyznaje to wprost.",
        "Efekt uboczny jest taki, że agent bywa nudny. „Nie mam takiego kursu w rozkładzie, mogę podać najbliższy późniejszy”. Na pokazie robi to mniejsze wrażenie niż płynna improwizacja. W realnej obsłudze jest odwrotnie. Przy odbiorze wdrożenia pytajcie celowo o rzeczy, których w danych nie ma, i sprawdzajcie, czy agent umie się przyznać do braku. Pięć minut testu oszczędza późniejsze tłumaczenia się przed klientem.",
      ],
    },
    {
      h2: "Stare dane nie krzyczą",
      paragraphs: [
        "Zepsuta integracja jest łaskawa. Rzuca błędem, agent mówi, że nie ma teraz dostępu do kalendarza, ktoś dzwoni do nas tego samego dnia. Gorzej wygląda sytuacja, w której połączenie działa poprawnie, tylko po drugiej stronie leży odpowiedź sprzed miesiąca. Agent poda ją tym samym spokojnym tonem co wszystko inne. Nikt nie ma powodu jej podważać, bo brzmi identycznie jak prawda.",
        "Dlatego przy każdym źródle ustalcie, ile godzin wstecz jeszcze akceptujecie i co agent robi po przekroczeniu tej granicy. Zła odpowiedź to podać dalej i udawać, że nic się nie stało. Sensowne są dwie: podać z zastrzeżeniem, w stylu „to stan z porannego eksportu, potwierdzę SMS-em”, albo nie podawać w ogóle i przełączyć do człowieka.",
        "Do tego jedna rzecz techniczna, która ratuje skórę przy pierwszej reklamacji. W logu rozmowy ma być zapisane nie tylko to, co agent powiedział, ale też godzina pobrania danych i system, z którego przyszły. Bez tego po tygodniu nie ustalicie, czy agent podał złą cenę, czy dostał złą cenę. To dwa różne problemy i naprawia się je w dwóch różnych miejscach.",
        "Sprzeczność między źródłami w trakcie rozmowy to osobna sprawa i agent nie powinien jej rozstrzygać sam. Kalendarz pokazuje wolne, a w systemie recepcyjnym ta sama godzina jest zajęta, bo ktoś wpisał wizytę ręcznie po telefonie. Ustalcie pierwszeństwo na papierze, a przypadki rozjazdu kierujcie do człowieka i zapisujcie osobno. Po miesiącu ta lista powie Wam o stanie Waszych systemów więcej niż niejeden audyt.",
        "Przy odbiorze poproście o pokazanie, jak wygląda rozmowa przy padniętej integracji. Nie opis w dokumencie, tylko odtworzenie: odcinamy dostęp i dzwonimy. Agent ma wtedy powiedzieć, że nie może w tej chwili sprawdzić terminu, i zaproponować drugą drogę. Jeśli zamiast tego milknie na kilka sekund albo zaczyna improwizować, nie jest gotowy do odebrania pierwszego prawdziwego telefonu.",
      ],
    },
    {
      h2: "Gdzie ta układanka się sypie",
      paragraphs: [
        "Pierwsza przeszkoda to system bez API. Stary program na jednym komputerze w księgowości, dane wyciągane ręcznym eksportem do pliku. Da się na tym pracować, ale agent operuje wtedy obrazem sprzed kilku godzin albo sprzed doby. Dla rozkładu jazdy to bez znaczenia, bo rozkład zmienia się rzadko. Dla wolnych terminów u fryzjera to już kłopot, bo agent zaproponuje godzinę zajętą rano.",
        "Druga przeszkoda jest trudniejsza, bo nie widać jej w żadnej dokumentacji. Część wiedzy siedzi wyłącznie w głowach zespołu. Że doktor Kowalska nie przyjmuje dzieci poniżej trzeciego roku życia. Że w piątki po piętnastej nie umawiamy pierwszych wizyt, bo nie zdążymy. Nikt tego nie zapisał, bo pani Ania wie. Agent takich reguł nie odgadnie. Ktoś u Was musi usiąść i je spisać, zwykle są to dwie albo trzy godziny rozmów przy kawie, i tej roboty nie przerzucicie na dostawcę.",
        "Czasem wniosek jest niewygodny. Jeśli większość pytań dotyczy rzeczy, których nie ma w żadnym systemie i nie da się ich sensownie opisać, voicebot obsłuży wąski kawałek ruchu. Uczciwie jest wtedy zacząć od uporządkowania danych, a rozmowę o wdrożeniu odłożyć o kwartał. Mówimy to na bezpłatnej pierwszej konsultacji, zanim ktokolwiek podpisze umowę.",
      ],
    },
    {
      h2: "Test dwudziestu rozmów",
      paragraphs: [
        "Zostaje pytanie, jak stwierdzić, że to właśnie Wasz przypadek, zanim ktokolwiek wystawi fakturę. Test jest prosty i zrobicie go sami, w jedno popołudnie. Weźcie dwadzieścia ostatnich telefonów od klientów, z rejestru połączeń albo z notatek recepcji, i na każdy spróbujcie odpowiedzieć wyłącznie z systemów. Bez pytania kogokolwiek z zespołu, bez zaglądania do zeszytu przy recepcji.",
        "Liczba, która wyjdzie, to górny pułap tego, co agent obsłuży w pierwszym miesiącu. Nie średnia, pułap, bo Wy przy takim teście i tak podświadomie włączacie intuicję, której agent nie ma. Jeśli wyszło siedem na dwadzieścia, wdrożenie dalej ma sens, tylko zakres trzeba zawęzić do tych siedmiu spraw i nie obiecywać sobie reszty. Siódemka jest tu przykładem, nie progiem z żadnych badań.",
        "Nie wszystko, co przy tym wypłynie, blokuje start, więc nie róbcie z porządków projektu na pół roku. Duplikaty klientów bolą od pierwszego dnia, bo agent nie wie, do którego rekordu dopisać wizytę, i albo pyta o te same dane trzeci raz, albo trafia w zły. Martwe rekordy zwykle da się odfiltrować jednym warunkiem i posprzątać po starcie. Wyjątkiem są pola używane niezgodnie z nazwą, bo tu nie pomoże żaden skrypt, a agent, który znajdzie cenę w polu na komentarz, poda ją jako pewnik.",
        "Osobno uważajcie na dane, które wyglądają na świeże, bo ktoś je niedawno edytował, a mimo to kłamią. Cennik z datą sprzed tygodnia, w którym poprawiono dwie pozycje z czterdziestu. Grafik odświeżany codziennie w kolumnie z nazwiskami, ale nie w kolumnie z godzinami. Data ostatniej modyfikacji nie mówi nic o tym, czy rekord jest prawdziwy, a to na nią wszyscy patrzą pierwszym odruchem.",
        "Ile takie sprzątanie trwa, nie podamy, bo każde widełki byłyby zmyślone. Bywa, że popołudnie. Bywa, że dłużej niż samo wdrożenie, jeśli system pracował latami bez nikogo, kto by go pilnował. Przy przeglądzie warto celowo poszukać kilku rzeczy, które powtarzają się prawie wszędzie.",
      ],
      list: [
        "Ten sam klient w bazie kilka razy, bo raz numer wpisano z kierunkowym, raz bez",
        "Pozycje w cenniku, których nikt już nie sprzedaje, zostawione na wszelki wypadek",
        "Pole używane niezgodnie z własną nazwą, bo trzy lata temu tak było szybciej",
        "Blokady w kalendarzu, które dla każdej osoby w zespole znaczą co innego",
        "Rekordy testowe sprzed lat, których nikt nie kasuje, bo a nuż do czegoś służą",
      ],
    },
    ],
    takeaways: [
    "Voicebot nie ma własnej wiedzy o firmie. Każda cena, godzina i dostępność musi przyjść z systemu w chwili rozmowy.",
    "Zanim policzycie integracje, ustalcie, który system rozstrzyga spór. Dwie wersje cennika kończą się reklamacją.",
    "Agent, który cytuje źródło, jest łatwiejszy do sprawdzenia i rzadziej wprowadza rozmówcę w błąd.",
    "Brak API albo wiedza wyłącznie w głowach zespołu to realna przeszkoda, nie drobiazg do dogrania po starcie.",
    "Zepsuta integracja daje o sobie znać. Działająca integracja podająca stare dane nie daje znaku i to ona kosztuje najwięcej.",
    "Przejdźcie dwadzieścia ostatnich rozmów wyłącznie po systemach. Wynik pokazuje realny zakres na pierwszy miesiąc.",
    ],
    faq: [
    {
      q: "Czy voicebot może działać bez integracji z naszymi systemami?",
      a: "Może, tylko zakres będzie wąski. Bez dostępu do danych agent odpowie o godzinach otwarcia, dojeździe i ogólnym zakresie usług, a resztę przekaże człowiekowi. Część firm zaczyna właśnie tak i dokłada integracje w drugim kroku, gdy wiadomo już, o co ludzie pytają najczęściej.",
    },
    {
      q: "Ile integracji robicie zwykle przy pierwszym wdrożeniu?",
      a: "Zwykle jedną albo dwie, te które obsługują najczęstsze sprawy. Kalendarz przy umawianiu wizyt, baza klientów przy statusie zamówienia. Reszta czeka, aż z nagrań zobaczymy, czego naprawdę brakuje. Dokładanie integracji później jest tańsze niż budowanie na zapas.",
    },
    {
      q: "Co, jeśli nasz system nie ma API?",
      a: "Sprawdzamy inne drogi: eksport uruchamiany na harmonogram, dostęp do bazy, czasem prostą warstwę pośrednią. Jeśli żadna nie wchodzi w grę, mówimy o tym przed podpisaniem umowy, a nie w połowie realizacji. Bywa, że sensowniejszą kolejnością jest najpierw zmiana systemu, a voicebot poczeka.",
    },
    {
      q: "Sprzątacie bazę za nas przed wdrożeniem?",
      a: "Przeglądamy ją i mówimy wprost, co się nie nadaje, to część pierwszej, bezpłatnej rozmowy. Samego przepisywania rekordów nie weźmiemy na siebie i nie dlatego, że nam się nie chce. Przy dwóch wersjach ceny tej samej usługi tylko ktoś od Was wie, która obowiązuje. Możemy przygotować listę miejsc do poprawy i sprawdzić efekt, decyzje zostają po Waszej stronie.",
    },
    ],
    related: [
    { label: "Voicebot dla transportu", href: "/branze/voicebot-dla-transportu" },
    { label: "Agent głosowy AI", href: "/uslugi/agent-glosowy-ai" },
    ],
  },
  {
    slug: "prawo-i-nagrywanie",
    number: 7,
    title: "Informowanie o AI, nagrywanie rozmów i dane osobowe",
    metaTitle: "Voicebot a prawo: AI, nagrywanie - lekcja 7",
    metaDescription: "Obowiązek informowania, że rozmówcą jest AI, zasady nagrywania rozmów i dane osobowe w telefonie. Co ustawić przed startem voicebota, bez straszenia.",
    lead: "Trzy rzeczy trzeba ustawić przed uruchomieniem voicebota: informację o AI, zasady nagrywania i papiery na dane osobowe. Nic z tego nie jest trudne, o ile nie zostawicie tego na koniec.",
    sections: [
    {
      h2: "Rozmówca ma wiedzieć, z kim rozmawia",
      paragraphs: [
        "Unijne przepisy o AI wprowadzają obowiązek poinformowania człowieka, że rozmawia z systemem sztucznej inteligencji. Termin stosowania to 2 sierpnia 2026. W praktyce zamyka to drogę pomysłom, w których agent udaje pracownika i nikt się do tego nie przyznaje.",
        "Wykonanie jest banalne. Wystarczy pierwsze zdanie powitania: „Dzień dobry, tu asystent AI przychodni Zdrowie”. Nikt nie wymaga czytania regulaminu przez pół minuty. Wymagane jest to, żeby informacja padła na początku i była zrozumiała dla osoby, która dzwoni w biegu, z ulicy, z dzieckiem na ręku. Samo „automatyczny asystent” bywa odbierane jako zapowiedź starej infolinii, więc lepiej powiedzieć wprost, że rozmówcą jest asystent AI.",
        "Właściciele firm często boją się, że ludzie zaczną się rozłączać. Z tego, co obserwujemy przy odbiorach, część rozmówców faktycznie od razu prosi o człowieka. To w porządku i agent powinien umieć takie przełączenie wykonać bez dyskusji. Ukrywanie natury systemu i tak wychodzi po dwóch pytaniach, tylko wtedy klient czuje się oszukany zamiast poinformowany. Niezależnie od reakcji rozmówcy powitanie ma zmieścić te same cztery elementy, które w lekcji czwartej mieszczą się w jednym oddechu.",
      ],
      list: [
        "W czyim imieniu asystent odbiera albo dzwoni",
        "Że po drugiej stronie jest asystent AI, powiedziane tymi słowami",
        "Że rozmowa jest nagrywana, o ile faktycznie jest",
        "Jak poprosić o człowieka, jednym prostym zdaniem",
      ],
    },
    {
      h2: "Nagrywanie: informacja na starcie, nie po fakcie",
      paragraphs: [
        "Nagrania są w tym projekcie bardzo przydatne. Z nich wychodzi, gdzie agent się gubi, czego brakuje w scenariuszu i o co ludzie pytają inaczej, niż zakładaliście. Bez nich poprawianie agenta zamienia się w zgadywanie. Jednocześnie nagranie rozmowy to przetwarzanie danych osobowych, a sam głos bywa traktowany jako dana o osobie.",
        "Zasada praktyczna jest prosta: informacja przed nagraniem, nigdy po. Rozmówca ma mieć realną możliwość rozłączenia się albo załatwienia sprawy inną drogą. Jeśli nagrywacie także po to, żeby uczyć system, powiedzcie o tym otwarcie. Zdanie w rodzaju „rozmowa jest nagrywana, korzystamy z nagrań przy poprawianiu jakości obsługi” załatwia sprawę i nie brzmi jak ostrzeżenie prawnicze.",
        "Osobno ustalcie, jak długo nagrania żyją i kto ma do nich dostęp. Trzymanie wszystkiego bezterminowo, bo miejsce jest tanie, to najgorsza z możliwych decyzji. My proponujemy domyślnie krótką retencję i wąski dostęp, a wydłużamy tylko wtedy, gdy jest do tego konkretny powód, na przykład spory z klientami przy zamówieniach. Do samego poprawiania agenta zwykle wystarczą transkrypcje.",
      ],
    },
    {
      h2: "Dane osobowe i papiery, które trzeba mieć",
      paragraphs: [
        "W rozmowie telefonicznej padają dane osobowe, nawet jeśli nikt tego tak nie nazywa. Imię i nazwisko, numer telefonu, adres, numer zamówienia, czasem PESEL. W przychodni prawie zawsze pojawia się informacja o stanie zdrowia, a to kategoria wymagająca ostrożniejszego traktowania niż nazwisko i telefon.",
        "Administratorem tych danych jest Wasza firma. Dostawca voicebota przetwarza je na Wasze zlecenie i dlatego potrzebna jest umowa powierzenia. Nie podpisujcie jej w ciemno.",
        "Hosting utrzymujemy w Polsce albo w chmurze UE, zgodnie z RODO. Głos opieramy na ElevenLabs, więc ten dostawca występuje w łańcuchu jako podprocesor i nie ma sensu tego chować pod dywan. Stosujemy standardy bezpieczeństwa zgodne z normą ISO 27001, natomiast certyfikatu ISO nie posiadamy i nie będziemy tego przedstawiać inaczej. Jeśli ktoś na rynku obiecuje Wam certyfikat, poproście o numer i jednostkę certyfikującą. Przed podpisem przejdźcie umowę punkt po punkcie i sprawdźcie, czy stoi w niej wszystko, co stać powinno.",
      ],
      list: [
        "Zakres danych, które trafiają do systemu, i cel ich przetwarzania",
        "Lista podprocesorów: dostawca głosu, telefonia, hosting",
        "Okres przechowywania nagrań oraz transkrypcji",
        "Co dzieje się z nagraniami i transkrypcjami po zakończeniu współpracy",
        "Sposób zgłaszania naruszeń i czas reakcji dostawcy",
      ],
    },
    {
      h2: "Czego ta lekcja nie załatwia",
      paragraphs: [
        "To nie jest porada prawna. Piszemy z perspektywy firmy, która wdraża agentów głosowych, a nie kancelarii. Przy wątpliwościach pytajcie własnego prawnika albo inspektora ochrony danych, bo tylko oni znają Wasz kontekst, dotychczasowe klauzule i zgody, które już zbieracie.",
        "Są sytuacje, w których samodzielna ocena jest ryzykowna. Dane o zdrowiu. Windykacja. Rekrutacja. Połączenia wychodzące do osób, które nie zostawiły zgody na kontakt telefoniczny. W tej ostatniej sprawie wchodzą jeszcze przepisy telekomunikacyjne i te o marketingu bezpośrednim, więc samo RODO nie wystarczy jako punkt odniesienia.",
        "Nie chcemy tym straszyć, bo skala problemu bywa wyolbrzymiana. Typowe wdrożenie na infolinii przychodzącej wymaga czterech rzeczy: poprawionego powitania, informacji o nagrywaniu, umowy powierzenia i decyzji o retencji. To praca na jedno popołudnie, o ile ktoś się nią zajmie. Robi się z tego problem dopiero wtedy, gdy wszyscy o niej zapomną i przypomną sobie po pierwszej skardze.",
      ],
    },
    ],
    takeaways: [
    "Od 2 sierpnia 2026 rozmówca musi wiedzieć, że po drugiej stronie jest system AI. Najprościej powiedzieć to w pierwszym zdaniu powitania.",
    "Nagrywanie wymaga informacji na starcie oraz decyzji, jak długo nagrania żyją i kto je odsłuchuje.",
    "Administratorem danych jesteście Wy, dostawca przetwarza je na Wasze zlecenie. Umowa powierzenia porządkuje resztę, łącznie z listą podprocesorów.",
    "Przy danych o zdrowiu, windykacji i połączeniach wychodzących sprawdźcie wszystko z prawnikiem, zanim uruchomicie agenta.",
    ],
    faq: [
    {
      q: "Czy voicebot może brzmieć jak człowiek?",
      a: "Może brzmieć naturalnie i dziś zwykle tak właśnie brzmi. Nie może natomiast wprowadzać w błąd co do tego, czym jest. Naturalny głos i jasna informacja na starcie spokojnie idą w parze, bo ludzie reagują na to, czy sprawa została załatwiona, a nie na samą etykietę.",
    },
    {
      q: "Czy potrzebujemy zgody na nagrywanie każdej rozmowy?",
      a: "Zależy od celu nagrania i podstawy przetwarzania, którą przyjmiecie. W praktyce najbezpieczniej poinformować o nagrywaniu na samym początku i zostawić rozmówcy inną drogę załatwienia sprawy. Konkretną podstawę ustalcie z prawnikiem albo inspektorem ochrony danych, bo w przychodni wygląda inaczej niż w sklepie.",
    },
    {
      q: "Gdzie trafiają dane z rozmów?",
      a: "Hosting utrzymujemy w Polsce lub w chmurze UE, zgodnie z RODO. Głos opieramy na ElevenLabs, więc ten dostawca jest podprocesorem i wpisujemy go do dokumentacji. Stosujemy standardy bezpieczeństwa zgodne z normą ISO 27001, samego certyfikatu ISO nie mamy.",
    },
    ],
    related: [
    { label: "AI Act a chatboty i voiceboty", href: "/blog/ai-act-chatboty-obowiazki" },
    { label: "RODO a chatbot i voicebot", href: "/blog/rodo-a-chatbot-i-voicebot" },
    ],
  },
  {
    slug: "jak-mierzyc-voicebota",
    number: 8,
    title: "Jak sprawdzić, czy voicebot naprawdę pomaga",
    metaTitle: "Jak mierzyć voicebota - metryki i odsłuchy",
    metaDescription: "Na co patrzeć po uruchomieniu voicebota, dlaczego odsetek odebranych połączeń niczego nie mówi i po czym poznać, że trzeba się wycofać.",
    lead: "Voicebot bez pomiaru zamienia się w rozmowę o wrażeniach. Punkt odniesienia macie z lekcji drugiej, tu pokazujemy, co oglądać po starcie i po czym poznać, że lepiej się wycofać.",
    sections: [
    {
      h2: "Punktem odniesienia są liczby zebrane przed startem",
      paragraphs: [
        "Audyt macie z lekcji drugiej: połączenia dziennie, nieodebrane, średni czas rozmowy i trzy dni notowania, z czym ludzie dzwonią. To jest stan zero i nie ma sensu mierzyć go po raz drugi w innej formie. Dwa różne zdjęcia sprzed startu blokują potem decyzję równie skutecznie jak brak zdjęcia, bo na spotkaniu każdy wybiera to, które pasuje mu do tezy. Reszta tej lekcji dotyczy już tego, co widać dopiero po uruchomieniu.",
        "Po uruchomieniu tego stanu już nie odtworzycie i to jest cały problem. Ruch się zmienia. Ludzie, którzy wcześniej rezygnowali po czwartym sygnale, teraz się dodzwaniają, więc liczba obsłużonych spraw rośnie z powodu, który nie ma nic wspólnego z jakością agenta. Bez punktu odniesienia zostaje porównywanie nowych danych z pamięcią, a pamięć jest łaskawa dla decyzji, które sami podjęliśmy.",
        "Powiemy szczerze: sporo firm startuje bez tych liczb, także u nas. Potem, po trzech miesiącach, pada pytanie „czy to się opłaciło” i nie ma z czym zestawić odpowiedzi. Zostaje wrażenie recepcji, że jest spokojniej. Bywa, że to dobry sygnał, tylko nikt nie zbuduje na nim decyzji o rozszerzeniu wdrożenia na drugi oddział.",
      ],
    },
    {
      h2: "Co oglądać po uruchomieniu",
      paragraphs: [
        "Po starcie liczy się jedno pytanie: ile spraw zostało załatwionych do końca bez udziału człowieka. Zanim ktokolwiek wpisze to do raportu, ustalcie kryterium i już go nie ruszajcie. Nasze brzmi tak: sprawa jest załatwiona, gdy rozmowa skończyła się bez przekazania do konsultanta i tego samego dnia nikt z tego numeru nie oddzwonił w tej samej sprawie. Bez drugiego warunku liczycie rozmowy, które się po prostu urwały. Resztę rozbijcie na pozycje, bo średnia potrafi ukryć problem wracający codziennie o tej samej porze.",
        "Teraz metryka, przy której trzeba uważać, bo świetnie wygląda w raporcie i nie znaczy nic. „Odebranych 100 procent połączeń” mierzy tyle, że system istnieje i się nie wywrócił. Automat zawsze odbierze. W tej samej rodzinie jest liczba obsłużonych rozmów podana bez informacji, ile z nich skończyło się czymkolwiek konkretnym.",
        "Eskalacja do człowieka nie jest porażką. Agent, który po dwóch nieudanych próbach zrozumienia przełącza rozmowę dalej, zachowuje się poprawnie. Niepokoić powinny dwie inne rzeczy: eskalacja przy pytaniu, które agent miał obsługiwać od pierwszego dnia, oraz cicha porażka, czyli rozmówca odkłada słuchawkę, a statystyka zapisuje rozmowę jako zakończoną. Dlatego w panelu oglądamy co tydzień te same pozycje.",
      ],
      list: [
        "Rozmowy domknięte bez przekazania do człowieka i bez oddzwonienia z tego samego numeru w tej samej sprawie jeszcze tego samego dnia",
        "Eskalacje z podziałem na powód: agent nie zrozumiał, zabrakło danych w systemie, rozmówca od razu poprosił o człowieka, sprawa wykraczała poza zakres",
        "Rozłączenia w pierwszych kilkunastu sekundach, bo to zwykle reakcja na samo powitanie",
      ],
    },
    {
      h2: "Miary, które mylą, i czym je zastąpić",
      paragraphs: [
        "Średni czas rozmowy jest w tej rodzinie najbardziej podstępny, bo spada z dwóch przeciwnych powodów. Albo agent szybciej dochodzi do sedna. Albo ludzie odkładają słuchawkę po trzydziestu sekundach. Średnia w obu przypadkach wygląda tak samo, rozkład już nie. Wystarczy sprawdzić, ile rozmów mieści się poniżej minuty, żeby odróżnić jedno od drugiego. My oglądamy medianę i ogon powyżej trzech minut, samej średniej nie ruszamy.",
        "Druga pułapka to ankieta na końcu rozmowy. Odpowiada na nią garstka i zwykle są to ludzie z krańców skali, więc dostajecie wynik piękny albo dramatyczny, w obu przypadkach zbudowany na kilku osobach. Jeśli ją zostawiacie, traktujcie ją jak źródło cytatów, nie jak wskaźnik. Jedno zdanie wpisane przez zirytowanego klienta bywa warte więcej niż średnia ocena z całego miesiąca.",
        "Trzecia rzecz przychodzi od strony technicznej i brzmi poważnie, bo ma dwa miejsca po przecinku. Dostawcy silników mowy podają skuteczność rozpoznawania. Ta liczba mówi, czy system poprawnie zapisał słowa, a nie czy zrozumiał, o co człowiek prosi. Rozmówca powie wyraźnie „chciałbym przełożyć to, co miałem w piątek”, transkrypcja wyjdzie bezbłędna, a agent i tak nie skojarzy, o którą wizytę chodzi. To parametr do szukania usterek, nie do slajdu dla zarządu.",
        "Jest za to miara, której prawie nikt nie liczy, a stoi najbliżej pytania „czy to się opłaca”. Koszt jednej domkniętej sprawy, czyli miesięczne utrzymanie plus rachunek za minuty, podzielone przez liczbę spraw zamkniętych bez człowieka. Przy utrzymaniu za 249 zł netto i pięciuset domkniętych sprawach w miesiącu samo utrzymanie kosztuje pół złotego na sprawę. Przy trzydziestu sprawach to już ponad osiem złotych i minuty dochodzą osobno. Ta jedna liczba zamyka dyskusję szybciej niż godzinna prezentacja z wykresami.",
      ],
      list: [
        "Liczba obsłużonych rozmów w miesiącu. Rośnie razem z ruchem i sezonem, więc opisuje głównie to, ile razy zadzwonił telefon",
        "Czas oczekiwania na połączenie. Spada do zera pierwszego dnia, bo automat odbiera od razu, i potem nie powie już nic",
        "Liczba rozpoznanych intencji w panelu. Mówi, ile razy agent coś dopasował, nie ile razy dopasował dobrze",
        "Wrażenie z demo przed startem. To ocena scenariusza, nie rozmowy z kimś, kto dzwoni z peronu i ma minutę do odjazdu",
      ],
    },
    {
      h2: "Raz w tygodniu posłuchajcie prawdziwych rozmów",
      paragraphs: [
        "Panel z liczbami pokaże, ile spraw zamknięto bez człowieka. Nie pokaże, że agent po trzeciej minucie zaczyna mówić za szybko, że powitanie jest o zdanie za długie albo że codziennie ktoś pyta o rzecz, której w scenariuszu nigdy nie było. To słychać dopiero w nagraniu. Dziesięć losowych rozmów tygodniowo plus wszystkie zakończone eskalacją to rozsądna próbka na początek.",
        "Ważne, kto słucha. Najwięcej wyłapie osoba z pierwszej linii, nie właściciel. Recepcjonistka po piętnastu sekundach wie, czego klient naprawdę chciał, i wyłapie ton, który dla nas brzmi neutralnie, a dla dzwoniącego opryskliwie. Po pierwszym miesiącu można zejść do próbki co dwa tygodnie, bo najgrubsze błędy są już wtedy wyłapane.",
        "Z odsłuchu ma powstać lista poprawek uporządkowana według liczby powtórzeń, a nie według tego, co najbardziej zirytowało szefa. Zwykle w pierwszych tygodniach zbiera się kilkanaście drobiazgów i dwie większe zmiany w scenariuszu. To normalna część utrzymania, które kosztuje 249, 499 albo 799 zł netto miesięcznie zależnie od zakresu, i właśnie za to się w nim płaci.",
      ],
    },
    {
      h2: "Ile trzeba czekać, zanim liczby coś znaczą",
      paragraphs: [
        "Dane z pierwszych dwóch dni wyrzućcie. Dzwonią wtedy pracownicy, znajomi pracowników i ktoś z zarządu, kto chce sprawdzić, czy agent pozna jego nazwisko. To nie jest ruch, to zwiedzanie. Normalne rozmowy zaczynają się wtedy, gdy przestaje być ciekawie, zwykle w drugim tygodniu.",
        "Dalej liczy się nie kalendarz, tylko liczba rozmów w konkretnej kategorii. Cztery tygodnie przy trzydziestu połączeniach dziennie to zupełnie inna próbka niż cztery tygodnie przy pięciu. Nasza reguła kciuka, wzięta z doświadczenia, a nie z podręcznika statystyki: żeby powiedzieć cokolwiek o jednym typie sprawy, chcemy zobaczyć przynajmniej sto takich rozmów. O całym agencie da się mówić po pełnym miesiącu, bo dopiero wtedy przejdzie końcówka miesiąca i kilka weekendów.",
        "Jest jeszcze rzecz, która psuje pomiar częściej niż mała próbka. Każda zmiana w scenariuszu zaczyna nową próbkę. Jeśli w środę skróciliście powitanie, to dane z poniedziałku i z czwartku opisują dwa różne agenty i zestawianie ich w jednej kolumnie nie ma sensu. Wystarczy plik z datą i jednym zdaniem, co zmieniono. Bez niego po dwóch miesiącach nikt nie odtworzy, dlaczego w połowie maja odsetek eskalacji podskoczył, a po tygodniu wrócił na swoje.",
        "Ostatnia sprawa to sezon. Przychodnia w lutym i przychodnia w lipcu to dwa różne miejsca, a w biurze rachunkowym różnica między drugim tygodniem miesiąca a końcówką bywa większa niż wszystko, co zrobi agent. Zestawiajcie okresy, które da się zestawić. Jeśli takich nie macie, powiedzcie to na spotkaniu wprost, zamiast udawać, że wykres jest czysty. Rok danych ten problem zdejmuje, tylko mało kto ma cierpliwość czekać rok.",
      ],
    },
    {
      h2: "Sygnały, że trzeba się wycofać",
      paragraphs: [
        "Wycofanie się jest normalną opcją i lepiej mieć ją z tyłu głowy od początku. Pierwszy sygnał: odsetek eskalacji nie spada po dwóch albo trzech rundach poprawek, mimo że każda runda miała konkretny powód. Drugi: klienci zaczynają narzekać wprost, nie w ankiecie, tylko w rozmowie z pracownikiem. Trzeci jest najcichszy, bo pracownicy po prostu zaczynają obchodzić system i podawać znajomym bezpośredni numer.",
        "Druga kategoria wygląda inaczej. Agent działa poprawnie, tylko nie ma czego obsługiwać. Ruchu jak na lekarstwo, każde połączenie w innej sprawie, żadnego powtarzalnego wzorca. Przeliczcie to jeszcze raz rachunkiem z lekcji drugiej, tym od godzin miesięcznie. Jeśli przy wdrożeniu od 5 000 zł netto i stałym utrzymaniu matematyka się nie domyka, lepiej powiedzieć to sobie w trzecim miesiącu niż w trzecim roku.",
        "Rzadko trzeba wyłączać wszystko. Zwykle sensowniejsze jest cofnięcie się o krok: zostawić agenta na wieczory i weekendy, a dzień oddać ludziom. Albo zawęzić go do jednej sprawy, w której radzi sobie dobrze, choćby do samego umawiania wizyt. Wąski agent, który działa, jest wart więcej niż szeroki, którego wszyscy omijają.",
      ],
    },
    ],
    takeaways: [
    "Punktem odniesienia są liczby z audytu w lekcji drugiej. Nie zbierajcie ich drugi raz w innej formie, bo po starcie i tak nie odtworzycie stanu sprzed.",
    "Odsetek odebranych połączeń niczego nie mówi. Liczy się sprawa zamknięta bez przekazania i bez oddzwonienia tego samego dnia, plus to, co poszło nie tak w pozostałych.",
    "Średni czas rozmowy spada i wtedy, gdy agent działa dobrze, i wtedy, gdy ludzie się rozłączają. Patrzcie na rozkład, nie na średnią.",
    "Dziesięć odsłuchanych rozmów tygodniowo pokazuje więcej niż tabela z liczbami, zwłaszcza gdy słucha ktoś z pierwszej linii.",
    "Pierwsze dwa dni to zwiedzanie, nie ruch. O jednym typie sprawy da się coś powiedzieć po mniej więcej stu takich rozmowach, a każda zmiana w scenariuszu zaczyna liczenie od nowa.",
    "Brak poprawy po kilku rundach zmian to sygnał do zawężenia zakresu albo wyłączenia agenta, a nie do dokładania funkcji.",
    ],
    faq: [
    {
      q: "Jaki odsetek rozmów bez człowieka jest dobry?",
      a: "Nie ma jednej liczby, bo wszystko zależy od zakresu. Agent umawiający wizyty domknie sam znacznie więcej spraw niż agent odbierający wszystko, co wpada na główny numer. Sensowniej patrzeć na trend w kolejnych tygodniach niż na wartość wyrwaną z kontekstu.",
    },
    {
      q: "Kiedy pierwszy raz sprawdzać wyniki?",
      a: "Pierwszy przegląd po tygodniu, ale na nagraniach, bo wtedy widać najbardziej oczywiste błędy. Liczby zaczynają coś znaczyć po trzech albo czterech tygodniach, gdy przejdzie pełen cykl z końcem miesiąca i weekendami. Wcześniej próbka jest za mała, żeby cokolwiek z niej wyciągać.",
    },
    {
      q: "Czy da się przeliczyć efekt na złotówki?",
      a: "Da się oszacować, jeśli wiecie, ile czasu zespół spędzał wcześniej na powtarzalnych rozmowach. Wystarczy przemnożyć ten czas przez koszt godziny pracy. Bez danych sprzed wdrożenia zostaje szacunek na wyczucie i właśnie dlatego audyt z lekcji drugiej tak się opłaca.",
    },
    ],
    related: [
    { label: "Kalkulator oszczędności", href: "/kalkulator" },
    { label: "Ile kosztuje voicebot", href: "/blog/ile-kosztuje-voicebot" },
    ],
  },
  {
    slug: "uruchomienie-etapami",
    number: 9,
    title: "Od nocnej zmiany do pełnego ruchu",
    metaTitle: "Wdrożenie voicebota etapami - jak zacząć bez ryzyka",
    metaDescription: "Jak uruchomić voicebota etapami: najpierw poza godzinami pracy, potem część ruchu, na końcu całość. Plan wycofania i pierwszy tydzień odsłuchu rozmów.",
    lead: "Największe ryzyko przy uruchamianiu voicebota nie leży w technologii. Leży w tym, że ktoś przełącza całą infolinię naraz i w poniedziałek rano zbiera skargi.",
    sections: [
    {
      h2: "Poniedziałek o ósmej to najgorszy moment na start",
      paragraphs: [
        "Voicebot jest przetestowany, scenariusze przeklikane, głos brzmi dobrze. Pojawia się wtedy naturalna myśl: skoro działa, przełączmy od poniedziałku całą infolinię. Tak zaczyna się większość wdrożeń, o których ktoś potem mówi, że AI się nie sprawdziło.",
        "Rzecz w tym, że test to co innego niż ruch. Na testach dzwonią osoby, które wiedzą, o co zapytać, bo same pisały scenariusz. W realnym ruchu ludzie mówią z jadącego samochodu, przerywają w połowie zdania, pytają o coś z ulotki sprzed dwóch lat. Przy pełnym przełączeniu wszystkie te sytuacje spadają na bota jednego dnia i w pełnej skali. Nie ma potem jak rozdzielić, co dokładnie zawiodło.",
        "Etapowanie służy jednej rzeczy. Błędy pojawiają się pojedynczo, na małej liczbie rozmów, i da się je poprawić zanim dotkną kogoś, kto naprawdę potrzebował pomocy.",
      ],
    },
    {
      h2: "Trzy etapy, w kolejności od najmniejszego ryzyka",
      paragraphs: [
        "Kolejność wynika z jednego pytania: co się stanie, jeśli bot odpowie źle? Odpowiedź zależy od tego, co byłoby na jego miejscu, gdyby go nie było. Poza godzinami pracy alternatywą jest cisza albo sygnał w słuchawce. Nawet przeciętna rozmowa z automatem jest lepsza niż nieodebrany telefon o 21:40.",
        "Dlatego pierwszy etap prawie zawsze wygląda tak samo, niezależnie od branży. Warto od razu wiedzieć, że sporo firm zatrzymuje się na etapie drugim i tak już zostaje. Voicebot obsługuje wtedy noce, weekendy i dwa typy spraw w ciągu dnia, a reszta idzie do ludzi. Taki układ bywa rozsądniejszy niż pełna automatyzacja i nie oznacza, że coś się nie udało.",
      ],
      list: [
        "Etap pierwszy obejmuje wyłącznie połączenia poza godzinami pracy, w weekendy i święta. Bot zbiera zgłoszenia i umawia terminy, a rano zespół widzi je w kalendarzu.",
        "Etap drugi to część ruchu w godzinach pracy. Zwykle jeden typ sprawy (na przykład odwoływanie wizyt) albo połączenia, które czekają w kolejce dłużej niż minutę.",
        "Etap trzeci jest opcjonalny. Bot odbiera wszystko jako pierwszy i przekazuje dalej to, czego nie obsłuży sam.",
        "Między etapami zostawia się co najmniej dwa tygodnie normalnego ruchu. Chodzi o to, żeby zobaczyć powtarzalne wzorce, a nie pojedyncze wpadki.",
      ],
    },
    {
      h2: "Godzina przed przełączeniem",
      paragraphs: [
        "Samo przełączenie ruchu to jedna zmiana w ustawieniach przekierowania i zajmuje moment. Godzina przed nią jest ciekawsza. Przechodzimy wtedy listę rzeczy, których nie widać z panelu, bo panel pokazuje zielone kropki także wtedy, gdy dzwoniący słyszy sygnał zajętości.",
        "Awarie na tym etapie są nudne i powtarzalne. Przekierowanie ustawione na godziny, ale bez świąt. Kalendarz podpięty do konta, którego nikt w recepcji nie otwiera. Numer konsultanta, który przestał istnieć przy zmianie operatora. Żadna z tych rzeczy nie ma nic wspólnego z tym, jak agent rozmawia.",
        "Termin też ma znaczenie. Pierwszy etap uruchamiamy w środę albo w czwartek wieczorem. Po piątkowym starcie dwie doby ruchu przechodzą bez nikogo, kto mógłby zareagować, a w poniedziałek rano do przesłuchania czeka nie pięć nagrań, tylko czterdzieści. Ostatni punkt listy jest zawsze ten sam: ktoś dzwoni z prywatnej komórki, z zewnątrz, zanim zrobi to pierwszy klient.",
      ],
      list: [
        "Warunek przekierowania po godzinach: czy obejmuje święta i dni wolne, czy tylko zakres godzin. Pierwsze święto w środku tygodnia sprawdza to bezlitośnie.",
        "Co słyszy dzwoniący, gdy agent nie podniesie w ciągu kilku sekund. To ustawienie leży po stronie operatora, nie w panelu agenta, i domyślnie bywa nim sygnał zajętości.",
        "Ścieżka do człowieka wieczorem, czyli wtedy, gdy żadnego człowieka nie ma. Agent musi mówić co innego niż w środku dnia: przyjmuje prośbę o kontakt i podaje, kiedy ktoś oddzwoni.",
        "Zapis terminu sprawdzony na żywo, w tym kalendarzu, który rano otwiera recepcja. Do tego jedna próba zapisu na zajętą godzinę, żeby zobaczyć, co się dzieje przy kolizji.",
        "Informacja, że rozmówca rozmawia z asystentem AI, pada przed pierwszym pytaniem, a nie po nim.",
        "Pięć połączeń naraz. Wieczorem to rzadko problem, w drugim etapie już bywa, a mało kto wie, ile jednoczesnych rozmów wytrzymuje jego numer.",
        "Cennik, godziny i lista usług w wersji z dnia przełączenia. Jeśli coś zmieniło się w trakcie budowy agenta, zwykle nie trafiło do jego bazy.",
        "Kto dostaje sygnał, gdy w nocy coś przestanie działać, i pod jaki numer ten sygnał idzie.",
        "Ostatni punkt jest zawsze ten sam: ktoś dzwoni z prywatnej komórki, z zewnątrz, zanim zrobi to pierwszy klient. Nie z biurka, nie z numeru wewnętrznego, bo te przechodzą inną drogą i potrafią zadziałać wtedy, gdy zwykłe połączenie nie działa.",
      ],
    },
    {
      h2: "Plan wycofania, czyli co robimy, gdy zapali się czerwona lampka",
      paragraphs: [
        "Zanim voicebot odbierze pierwsze połączenie, powinny być ustalone dwie sprawy: kto może zdecydować o wyłączeniu i ile to zajmuje. Przy naszych wdrożeniach powrót do poprzedniego układu trwa minuty, a nie dni, bo bot siedzi na przekierowaniu numeru i nie zastępuje centrali. To celowa decyzja projektowa i radzimy jej pilnować niezależnie od tego, kto wdraża.",
        "Wyłączenie warto przećwiczyć na sucho przed startem. Ktoś z zespołu je wykonuje, ktoś inny dzwoni i sprawdza, czy naprawdę odbiera człowiek. Brzmi trywialnie i właśnie dlatego bywa pomijane. Potem okazuje się, że dostęp do panelu ma jedna osoba, akurat na urlopie.",
        "Trzeba się też umówić, co jest powodem do wyłączenia. Kilka rozmów, w których bot nie zrozumiał pytania, to normalny pierwszy tydzień i nie ma sensu na to reagować paniką. Skarga od kogoś, kto w pilnej sprawie nie mógł dodzwonić się do człowieka, należy do innej kategorii i reakcja powinna być natychmiastowa.",
        "Samo wycofanie rzadko oznacza wyłączenie wszystkiego. Ma trzy głębokości, a wybór między nimi trwa chwilę pod warunkiem, że ktoś przemyślał je wcześniej niż w środku awarii.",
      ],
      list: [
        "Zawężenie zakresu. Agent zostaje na linii, ale traci sprawę, która się sypie. Zamiast umawiać terminy, przyjmuje prośbę o oddzwonienie. Sięgamy po to najczęściej, bo problem zwykle siedzi w jednej ścieżce.",
        "Cofnięcie o etap. Ruch dzienny wraca do zespołu, agent zostaje na wieczorach i weekendach, czyli tam, gdzie już się sprawdził.",
        "Zdjęcie przekierowania. Numer zachowuje się dokładnie tak jak przed wdrożeniem. To wybór na sytuacje, w których wciąż nie wiadomo, co się właściwie zepsuło.",
      ],
    },
    {
      h2: "Po wyłączeniu zostaje robota ręczna",
      paragraphs: [
        "O tej części łatwo zapomnieć w nerwach. Zgłoszenia, które agent przyjął w ostatnich godzinach, nie przepiszą się same, więc ktoś musi je przejrzeć i oddzwonić. Zespół trzeba uprzedzić od razu, inaczej przez pół dnia wszyscy zakładają, że wieczorne telefony ktoś odbiera. Do tego dwa zdania w notatce: co się stało, o której godzinie, na którym nagraniu. Bez tego ten sam problem wraca za dwa tygodnie, a nikt już nie pamięta, jak wyglądał za pierwszym razem.",
        "Nie każde wycofanie da się przeprowadzić czysto. Jeśli agent zapisuje coś w systemie rezerwacji albo w CRM, po wyłączeniu zostają rekordy w połowie drogi i ktoś musi je odszukać. Przy takich integracjach pytamy przed startem, jak wygląda ręczne odkręcenie pojedynczego zapisu. Kiedy nikt w firmie nie potrafi odpowiedzieć, przełączenie ruchu przesuwamy o kilka dni.",
        "Powrót jest osobną decyzją i nie zapada tego samego popołudnia. Kusi, żeby po godzinie naprawiania wrócić dokładnie tam, gdzie się było. Bezpieczniej zejść o jeden etap niżej, przepuścić kilka wieczorów i dopiero potem wracać na ruch dzienny. Kosztuje to tydzień. Druga awaria w tym samym miejscu kosztuje zaufanie zespołu do całego wdrożenia, a to odbudowuje się dużo dłużej.",
      ],
    },
    {
      h2: "Pierwszy tydzień i granice tego podejścia",
      paragraphs: [
        "Po starcie kusi, żeby poprawiać scenariusz po każdej nieudanej rozmowie. Radzimy odwrotnie. Przez pierwszy tydzień głównie słuchać, notować i zbierać. Zmiany wprowadzane na gorąco, po jednym telefonie, potrafią zepsuć ścieżki, które do tej pory działały bez zarzutu.",
        "Zawsze pojawia się grupa pytań, których nikt nie przewidział przy projektowaniu. W przychodni bywa to parking albo to, czy trzeba przyjść na czczo. W transporcie pytanie, czy do autobusu można wnieść rower. Takich rzeczy nie wymyśli się przy stole, one wychodzą z nagrań, i to jest główny powód, dla którego warto ich słuchać przez pierwszy tydzień.",
        "Uczciwie o cenie tego podejścia. Wdrożenie trwa dłużej, bo między etapami czeka się na dane, a nie na programistów, i firma, która chciała mieć temat z głowy w dwa tygodnie, musi się z tym pogodzić. Jest też pułapka w samych wynikach. Nocne rozmowy są krótsze i bardziej rzeczowe niż te z poniedziałkowego szczytu, więc dobre liczby z pierwszego etapu niczego nie gwarantują w drugim. To argument za tym, żeby drugiego etapu nie przeskakiwać, nawet jeśli wszystko wygląda świetnie. Notatnik z pierwszego tygodnia wygląda przy każdym etapie tak samo.",
      ],
      list: [
        "Pytania, które padły, a nie ma ich w scenariuszu.",
        "Momenty, w których rozmówca prosił o człowieka, i to, czy dostał go od razu.",
        "Rozmowy przerwane w pierwszych dziesięciu sekundach.",
        "Sprawy załatwione do końca bez udziału zespołu.",
      ],
    },
    ],
    takeaways: [
    "Zaczynajcie od godzin, w których alternatywą dla bota jest nieodebrany telefon. Ryzyko jest wtedy najmniejsze, a korzyść widać od razu.",
    "Plan wycofania ustalcie przed startem i przetestujcie go na sucho, razem z listą osób, które mogą go uruchomić.",
    "Listę przed przełączeniem przechodźcie z telefonem w ręce, nie z otwartym panelem. Zajęty numer i martwe przekierowanie widać tylko od strony dzwoniącego.",
    "Przez pierwszy tydzień odsłuchujcie rozmowy i notujcie nieprzewidziane pytania, zamiast przerabiać scenariusz po każdym telefonie.",
    "Zatrzymanie się na drugim etapie na stałe jest normalnym wynikiem wdrożenia, nie jego porażką.",
    ],
    faq: [
    {
      q: "Jak długo powinien trwać pierwszy etap?",
      a: "Liczy się go w tygodniach, nie w dniach. Chodzi o to, żeby uzbierać na tyle rozmów, by zobaczyć powtarzalne wzorce zamiast przypadków. Warto rozdzielić dwie rzeczy, bo łatwo je pomylić: budowa i uruchomienie agenta zajmują u nas 2 do 4 tygodni przy mniejszych wdrożeniach, a etapowanie ruchu zaczyna się dopiero po starcie i biegnie równolegle z normalną pracą firmy. Pierwszy etap to zwykle kilkanaście dni ruchu wieczornego i weekendowego, więc pełne przejście przez wszystkie etapy trwa dłużej niż samo wdrożenie i nie ma powodu, żeby to przyspieszać.",
    },
    {
      q: "Czy klientom przeszkadza, że raz odbiera bot, a raz człowiek?",
      a: "W praktyce rzadko. Ludzie są przyzwyczajeni, że po godzinach obsługa wygląda inaczej niż w środku dnia. Ważniejsze jest, żeby bot na wstępie powiedział, że jest asystentem AI, i żeby dało się poprosić o kontakt z człowiekiem następnego dnia. Od 2 sierpnia 2026 informowanie rozmówcy, że rozmawia z AI, wynika wprost z unijnych przepisów.",
    },
    {
      q: "Co jeśli po pierwszym etapie widać, że bot sobie nie radzi?",
      a: "Wtedy pierwszy etap zrobił dokładnie to, po co był. Zostaje decyzja: poprawiamy scenariusz i dane, na których bot się opiera, albo ograniczamy jego rolę do prostszych spraw. Jest też trzecie wyjście, czyli rezygnacja. Kosztuje mniej niż utrzymywanie przez rok czegoś, co irytuje dzwoniących.",
    },
    {
      q: "Czy wycofanie oznacza, że wdrożenie trzeba zbudować od nowa?",
      a: "Nie. Konfiguracja, scenariusze i dane zostają na miejscu, zmienia się tylko to, ile ruchu trafia do agenta. Najczęściej wracamy o jeden etap, poprawiamy jedną ścieżkę i po kilku dniach ruszamy dalej. Realny koszt to czas zespołu na przejrzenie zgłoszeń z ostatnich godzin i oddzwonienie do tych osób, a nie ponowne wdrożenie.",
    },
    ],
    related: [
    { label: "Jak działa agent głosowy w praktyce", href: "/uslugi/agent-glosowy-ai" },
    { label: "Voicebot a stare menu IVR", href: "/blog/voicebot-a-ivr" },
    ],
  },
  {
    slug: "bledy-wdrozen-voicebotow",
    number: 10,
    title: "Najczęstsze błędy przy wdrażaniu voicebotów",
    metaTitle: "Błędy przy wdrażaniu voicebotów - czego unikać",
    metaDescription: "Brak ścieżki do człowieka, start na całym ruchu, bałagan w danych, ukrywanie że to AI. Błędy, które psują wdrożenia voicebotów i co robić zamiast nich.",
    lead: "Ostatnia lekcja kursu. Zebraliśmy błędy, które realnie kosztują firmy klientów i pieniądze, a przy każdym piszemy, co zrobić zamiast.",
    sections: [
    {
      h2: "Błędy, które widać od pierwszego dnia",
      paragraphs: [
        "Ta grupa błędów ma wspólną cechę. Daje o sobie znać natychmiast i psuje wrażenie u pierwszych kilkuset rozmówców. Naprawić się je da, tylko opinia zdąży się rozejść.",
        "Najdroższy z nich dotyczy przekazania rozmowy. Bot, który nie umie oddać jej człowiekowi, zamienia drobną niedogodność w utraconego klienta, i to bez żadnego sygnału ostrzegawczego. Prawie nikt nie dzwoni po to, żeby złożyć skargę na automat. Ludzie po prostu przestają dzwonić. Dlatego ścieżkę do konsultanta traktujemy jako warunek uruchomienia i sprawdzamy ją przed każdym startem. Poniżej ten błąd i trzy kolejne z tej samej grupy, przy każdym od razu to, co robić zamiast.",
      ],
      list: [
        "Brak ścieżki do człowieka. Rozmówca, który nie może przerwać bota i poprosić o konsultanta, rozłącza się i dzwoni gdzie indziej. Powiedzcie na wejściu, że w każdej chwili można poprosić o człowieka, i zadbajcie, żeby po przełączeniu nikt nie musiał podawać swoich danych drugi raz.",
        "Przełączenie całego ruchu w jeden dzień. Wszystkie braki scenariusza wychodzą naraz i na największej możliwej próbce. Zacznijcie od godzin, w których alternatywą jest nieodebrany telefon, i dokładajcie ruch stopniowo.",
        "Start na nieuporządkowanych danych. Jeśli cennik istnieje w trzech wersjach, a grafik w zeszycie, bot będzie powtarzał ten bałagan setki razy dziennie. Uporządkujcie to, co ma czytać, zanim odbierze pierwsze połączenie. Ta praca zwykle zajmuje więcej czasu niż budowa samego bota.",
        "Brak testu na własnym numerze. Zadzwońcie sami, z ulicy, przy włączonym radiu, tak jak dzwonią klienci. Większość wpadek słychać w pierwszych piętnastu sekundach.",
      ],
    },
    {
      h2: "Błędy, które wychodzą dopiero po miesiącu",
      paragraphs: [
        "Pierwszy z nich to udawanie człowieka. Kusi, bo głos brzmi naturalnie, a skoro nikt nie pyta, to część firm uznaje, że nie trzeba mówić. Kłopot zaczyna się, gdy rozmówca zorientuje się sam. Przy krótkiej sprawie może nie poznać, ale im dłuższa rozmowa, tym większa szansa, że pozna. Poczucie, że ktoś próbował go nabrać, zostaje na dłużej niż irytacja automatem. Do tego dochodzi obowiązek z unijnych przepisów, który rozkładamy na części w lekcji siódmej. Wykonanie mieści się w jednym zdaniu powitania, w którym pada „asystent AI” albo „asystentka AI”. Nie „asystent głosowy”, nie „wirtualna obsługa”.",
        "Drugi błąd to mierzenie liczby obsłużonych rozmów. Wygląda dobrze w raporcie i nie mówi prawie nic. Bot może odebrać tysiąc połączeń i w połowie z nich niczego nie załatwić, bo ludzie oddzwonili później do biura. Patrzcie na sprawy zamknięte bez przekazania do człowieka, na odsetek próśb o konsultanta i na to, ile numerów wraca z tą samą sprawą tego samego dnia. Kryterium rozpisaliśmy w lekcji ósmej. Te liczby bywają nieprzyjemne i są prawdziwe.",
        "Trzeci jest cichy: po pierwszym miesiącu nikt już nie odsłuchuje rozmów. Wdrożenie działa, więc przestaje kogokolwiek obchodzić, a firma się zmienia. Nowa usługa, inne godziny, podniesiony cennik. Bot mówi po staremu jeszcze przez pół roku. Ratuje przed tym rytm z lekcji ósmej: w pierwszym miesiącu próbka nagrań co tydzień, potem co dwa tygodnie, bez przerw na kwartał.",
      ],
    },
    {
      h2: "Błędy po stronie firmy, nie technologii",
      paragraphs: [
        "Brak właściciela projektu. Voicebot bez jednej osoby odpowiedzialnej po stronie zamawiającego rozmywa się między działami. Pytania od nas trafiają na skrzynkę, na którą patrzy pięć osób i żadna nie czuje się zobowiązana odpowiedzieć. Wdrożenia, które szły najciężej, wyglądały dokładnie tak. Wystarczy jedna osoba z decyzyjnością i godziną tygodniowo.",
        "Automatyzowanie rozmów, które wymagają empatii. Odwołanie wizyty, sprawdzenie godziny odjazdu, umówienie przeglądu, potwierdzenie rezerwacji: to zadania dla bota. Informacja o wyniku badania, reklamacja po nieudanej usłudze, telefon od kogoś roztrzęsionego: to zadania dla człowieka. Agent potrafi wypowiedzieć zdanie w każdej z tych sytuacji, ale to nie znaczy, że powinien ją prowadzić. Przy wynikach badań dochodzi jeszcze to, że są danymi o zdrowiu, więc rozmowa o nich wymaga zupełnie innej podstawy prawnej niż odwołanie wizyty.",
        "Zdarza się też błąd odwrotny, rzadszy i kosztowny. Firma kupuje voicebota, a stare menu tonowe zostawia jako pierwszą warstwę. Dzwoniący przechodzi przez cztery poziomy wyboru cyframi, żeby dotrzeć do automatu, z którym mógł od razu po prostu porozmawiać. Błędem jest tu piętro nad rozmową, a nie menu samo w sobie. Tam, gdzie sprawy są dwie i wracają co tydzień albo gdzie w tle huczy hala, wybór cyfrą bywa szybszy od mówienia i zostawiamy go świadomie, o czym piszemy w lekcji czwartej. Ta sama pomyłka ma wersję lustrzaną: voicebot, który czyta listę opcji i każe wybierać, czyli menu w przebraniu.",
      ],
    },
    {
      h2: "Kiedy najlepszą decyzją jest nie wdrażać",
      paragraphs: [
        "Ta lekcja zamyka kurs, więc powiemy rzecz, której zwykle nie mówi firma sprzedająca wdrożenia. Voicebot nie ma sensu wszędzie i wcale nie tak rzadko go odradzamy.",
        "Zróbcie rachunek z lekcji drugiej, ten od godzin miesięcznie. Jeśli wychodzi poniżej progu dziesięciu godzin i nikt nie czeka w kolejce, wdrożenie od 5 000 zł netto plus utrzymanie od 249 zł netto miesięcznie nie zwróci się w rozsądnym czasie. Jeśli każda rozmowa jest inna i opiera się na wiedzy, której nie da się spisać, bot będzie przeszkadzał obu stronom. Jeśli w firmie nie ma nikogo, kto się tym zajmie, lepiej poczekać, aż taka osoba się znajdzie.",
        "Jeżeli po dziesięciu lekcjach wyszło Wam, że u Was to się nie opłaca, kurs zadziałał tak, jak miał zadziałać. Lepiej stracić kilka godzin na czytanie niż kilkanaście tysięcy na system, który będzie się kurzył. A jeśli wyszło odwrotnie, pierwsza konsultacja jest bezpłatna i można na niej zadać dokładnie te pytania, które nasunęły się po drodze.",
      ],
    },
    ],
    takeaways: [
    "Ścieżka do człowieka jest warunkiem uruchomienia, a nie dodatkiem. Bot, który nie oddaje rozmowy, kosztuje klientów.",
    "Uporządkujcie dane, które bot ma czytać, zanim odbierze pierwsze połączenie. To zwykle dłuższa część pracy niż budowa bota.",
    "Mierzcie sprawy zamknięte bez przekazania do człowieka i numery wracające tego samego dnia, a nie liczbę odebranych połączeń.",
    "Wniosek, że voicebot u Was się nie opłaca, jest pełnoprawnym efektem tego kursu.",
    ],
    faq: [
    {
      q: "Który z tych błędów zdarza się najczęściej?",
      a: "Brak ścieżki do człowieka oraz bałagan w danych. Pierwszy bierze się z chęci zautomatyzowania wszystkiego, drugi z założenia, że bot jakoś sobie poradzi z informacjami rozrzuconymi po kilku miejscach. Oba da się usunąć jeszcze przed startem, jeśli ktoś o nich w porę pomyśli.",
    },
    {
      q: "Czy naprawdę trzeba mówić, że to AI, skoro rozmówcy i tak słyszą?",
      a: "Tak. Poza tym, że to zwykła uczciwość wobec dzwoniącego, od 2 sierpnia 2026 obowiązek wynika z unijnych przepisów, które opisujemy w lekcji siódmej. W praktyce to jedno zdanie na początku rozmowy ze słowami „asystent AI”. Nie spotkaliśmy się z tym, żeby ktoś się na nie skarżył.",
    },
    {
      q: "Ile trwa naprawienie źle uruchomionego voicebota?",
      a: "Zależy, co poszło źle. Poprawki w scenariuszu to kwestia dni. Uporządkowanie danych i zmiana sposobu przekazywania rozmów do zespołu potrafi zająć tyle, co nowe wdrożenie, czyli od 2 do 4 tygodni przy mniejszych systemach. Dlatego taniej wychodzi zrobić to spokojnie za pierwszym razem.",
    },
    ],
    related: [
    { label: "Ile kosztuje voicebot", href: "/blog/ile-kosztuje-voicebot" },
    { label: "Obowiązek informowania, że rozmawiasz z AI", href: "/blog/ai-act-chatboty-obowiazki" },
    ],
  },
  {
    slug: "scenariusz-przychodnia",
    number: 11,
    track: 'scenariusze',
    title: "Rozmowa w przychodni: rejestracja, przekładanie, odwoływanie",
    metaTitle: "Scenariusz rozmowy voicebota w przychodni",
    metaDescription: "Scenariusz telefonu do rejestracji zdanie po zdaniu: powitanie z informacją o AI, cztery ścieżki sprawy, propozycja terminów i granice przy objawach.",
    lead: "Rejestracja telefoniczna to najbardziej powtarzalna rozmowa w przychodni i jednocześnie ta, w której agent najłatwiej przekracza granicę. Rozbieramy ją na zdania: co mówi, o co pyta, kiedy oddaje słuchawkę.",
    sections: [
      {
        h2: "Pierwsze dziesięć sekund: kto mówi i w jakiej sprawie",
        paragraphs: [
          "Rozmowa zaczyna się od zdania, które robi dwie rzeczy naraz. Mówi pacjentowi, dokąd trafił, i uprzedza go, że po drugiej stronie odpowiada maszyna. Od 2 sierpnia 2026 informowanie o tym, że rozmówcą jest AI, wynika z przepisów unijnych, więc nie traktujcie tego zdania jako ozdobnika. U nas brzmi ono tak: „Przychodnia Zdrowie, dzień dobry. Rozmawia Pani z automatycznym asystentem. Mogę umówić, przełożyć albo odwołać wizytę. W czym mogę pomóc?”",
          "Kolejność ma znaczenie. Najpierw nazwa placówki, bo pacjent chce wiedzieć, czy dodzwonił się dobrze. Potem informacja o automacie, zanim rozmówca zdąży zacząć opowiadać. Na końcu zakres spraw, czyli lista tego, co agent faktycznie załatwi. Ten ostatni element oszczędza mnóstwo nieporozumień, bo pacjent od razu słyszy, że o wyniki badań pytać nie ma sensu. Całość mieści się w kilkunastu sekundach.",
          "Pierwsze pytanie ma rozdzielić ruch na cztery ścieżki. Jeśli pacjent zaczyna ogólnie („dzień dobry, ja w sprawie wizyty”), agent dopytuje wprost: „Chodzi o umówienie nowej wizyty, przełożenie istniejącej, czy o jej odwołanie?”. Zdanie „chcę się zapisać” prowadzi do pytania o poradnię albo o nazwisko lekarza, a dopiero potem agent zagląda do wolnych okien. Zdanie „nie dam rady we wtorek” uruchamia ścieżkę przełożenia, w której najpierw trzeba odnaleźć istniejącą rezerwację.",
          "Zostają dwa pozostałe warianty. „Proszę mnie wykreślić” to najkrótsza ścieżka w całym scenariuszu, dwa pytania i potwierdzenie. „Dzwonię po wyniki” kończy się natychmiastowym przekazaniem do rejestracji, bez zaglądania do jakiegokolwiek systemu. Cztery ścieżki, cztery różne zakończenia. Nic poza nimi agent nie obsługuje samodzielnie.",
        ],
      },
      {
        h2: "Terminy: jak agent proponuje, potwierdza i cofa",
        paragraphs: [
          "Najczęstszy błąd w scenariuszach rejestracji polega na czytaniu pacjentowi całej listy wolnych godzin. Przez telefon nikt tego nie zapamięta. Agent podaje dwa terminy i pyta o wybór: „Mam wolne w czwartek czwartego czerwca o dziewiątej dwadzieścia oraz w piątek piątego czerwca o czternastej. Który termin Pani odpowiada?”. Jeżeli żaden nie pasuje, podaje kolejne dwa, a za trzecim razem proponuje inne rozwiązanie: „Mogę zapisać Panią na listę oczekujących i oddzwonimy, gdy ktoś odwoła. Zrobić tak?”",
          "Osobno obsłużcie pacjenta, który mówi „potrzebuję jak najszybciej”. To zdanie brzmi jak prośba o termin, a bywa sygnałem, że dzieje się coś niedobrego. Agent nie ocenia, jak pilna jest sprawa, bo nie ma do tego żadnych podstaw. Mówi: „Najbliższy wolny termin u doktora Nowaka to poniedziałek o ósmej dziesięć. Jeżeli sprawa jest pilna, przełączę Panią do rejestratorki, ona zdecyduje o przyjęciu poza kolejnością.” Decyzja wraca do człowieka, a pacjent nie zostaje z niczym.",
          "Dane pacjenta agent zbiera na końcu, nie na wstępie. Pyta o imię, nazwisko i datę urodzenia, po czym powtarza wszystko głośno: „Powtarzam: Anna Kowalska, dwunasty marca tysiąc dziewięćset osiemdziesiątego drugiego, poradnia dermatologiczna, czwartek o dziewiątej dwadzieścia. Zgadza się?”. Powtórzenie łapie literówki w nazwisku i pomyłki w dacie, zanim trafią do kalendarza. Na koniec zapowiedź potwierdzenia: „Za chwilę wyślemy SMS na numer, z którego Pani dzwoni.”",
          "Przy przekładaniu i odwoływaniu agent najpierw nazywa to, co znalazł, a dopiero potem pyta o zgodę: „Widzę wizytę u doktor Zielińskiej w piątek o jedenastej czterdzieści. Odwołać ten termin?”. Po odwołaniu pada jedno pytanie więcej: „Odwołane. Umówić od razu nowy termin?”. Przy projektowaniu tej części scenariusza pilnujemy czterech rzeczy.",
        ],
          list: [
          "Dwa terminy naraz i ani jednego więcej, bo trzeci już się nie mieści w pamięci rozmówcy.",
          "Data zawsze z dniem tygodnia, bo „czwartek czwartego” jest odporniejszy na przesłyszenie niż samo „czwartego”.",
          "Godzina wypowiadana pełnymi słowami, bez skrótów w rodzaju „dziewiąta dwadzieścia po”.",
          "Każde ustalenie powtórzone przed zapisem, łącznie z nazwiskiem lekarza i nazwą poradni.",
      ],
      },
      {
        h2: "Zdania, których agent w przychodni nie wypowie",
        paragraphs: [
          "Agent w przychodni pracuje jako rejestrator. Porad medycznych nie udziela, wyników badań nie interpretuje, o pilności objawów nie orzeka. Tę granicę zapisujemy w scenariuszu jako gotową formułę, żeby model nie próbował jej obchodzić uprzejmością. Nasza brzmi: „Nie mogę oceniać objawów ani doradzać w sprawach zdrowia. Łączę Panią z rejestracją.” Kropka, przekazanie, koniec tematu.",
          "Najostrzejsza reguła dotyczy objawów alarmowych. Jeżeli w wypowiedzi pacjenta pojawia się ból w klatce piersiowej, duszność, nagłe zaburzenia mowy albo silne krwawienie, agent przerywa scenariusz w pół zdania: „Proszę natychmiast zadzwonić pod numer 112. Przełączam Pana teraz do rejestracji.” Nie dopytuje o szczegóły, nie prosi o dokończenie danych, nie proponuje terminu. Przerwanie jest twarde i zawsze wygrywa z resztą scenariusza.",
          "Listę wyzwalaczy budujecie razem z personelem medycznym, a nie sami przy biurku. Cztery grupy sytuacji muszą się w niej znaleźć zawsze.",
        ],
          list: [
          "Objawy ze strony serca i oddechu, razem z opisami potocznymi w rodzaju „ściska mnie w piersi”.",
          "Nagłe objawy neurologiczne: opadający kącik ust, bełkotliwa mowa, brak czucia w ręce.",
          "Ciąża z bólem lub krwawieniem, gdzie termin za tydzień nie jest żadną odpowiedzią.",
          "Zdania o odebraniu sobie życia, po których agent podaje numer alarmowy i natychmiast oddaje rozmowę.",
      ],
      },
      {
        h2: "Dane wrażliwe i rozmowy, które zostają przy człowieku",
        paragraphs: [
          "Informacja o zdrowiu należy do szczególnej kategorii danych, więc scenariusz projektujemy tak, żeby agent zebrał ich jak najmniej. Do umówienia wizyty wystarczy imię, nazwisko, data urodzenia, poradnia i termin. Agent nie pyta „na co Pani choruje”, nie prosi o PESEL na wszelki wypadek i nie zbiera opisu dolegliwości „dla lekarza”. Każde dodatkowe pole to dane, które potem trzeba przechowywać, zabezpieczać i kiedyś usunąć.",
          "Pacjenci i tak opowiadają. To zupełnie naturalne, dzwonią przecież w sprawie zdrowia. Agent ma na to gotową odpowiedź, uprzejmą i zamykającą temat: „Dziękuję, tych informacji nie potrzebuję do zapisania wizyty. Powie je Pani lekarzowi na miejscu.” Całą resztę, czyli nagrania i zapisy rozmów, obejmujemy tymi samymi regułami retencji, a systemy stawiamy na hostingu w Polsce lub w chmurze UE, zgodnie z RODO.",
          "Cztery rozmowy zostawiamy człowiekowi i nie próbujemy ich obejść lepiej napisanym promptem. Pierwsza to wyniki badań, bo nawet neutralne „są gotowe” pacjent słyszy jako komunikat o swoim zdrowiu, a pytanie „to co tam wyszło” pada sekundę później. Druga to poradnia onkologiczna, gdzie sama rejestracja bywa rozmową o strachu. Trzecia to pacjent zdenerwowany, który podnosi głos albo płacze: agent rozpoznaje ton i przekazuje rozmowę bez negocjacji. Czwarta to każda sytuacja, w której pacjent od pierwszego zdania prosi o człowieka. Prośbę „proszę mnie połączyć z kimś żywym” traktujemy jak polecenie, którego się nie zbija.",
          "Zaplanujcie też wariant, w którym przekazanej rozmowy nikt nie odbiera. Agent nie może wtedy wrócić do umawiania wizyty, jakby nic się nie stało. Mówi: „Nie mogę teraz połączyć Pani z rejestracją. Jeżeli sprawa jest nagła, proszę dzwonić pod 112. Przekażę informację, żeby rejestracja oddzwoniła najszybciej, jak się da.” To zdanie ratuje więcej rozmów niż cała reszta scenariusza razem wzięta.",
        ],
      },
    ],
    takeaways: [
      "Zakres spraw podany w powitaniu ucina połowę nieporozumień, bo pacjent od razu wie, czego agent nie zrobi.",
      "Dwa terminy naraz zamiast listy godzin, a każde ustalenie powtórzone głośno przed zapisaniem w kalendarzu.",
      "Objawy alarmowe przerywają scenariusz natychmiast: numer alarmowy i przekazanie do człowieka, bez dopytywania.",
      "Agent zbiera minimum danych, bo informacja o zdrowiu to szczególna kategoria, a każde pole trzeba potem chronić.",
    ],
    faq: [
      {
        q: "Czy agent może powiedzieć pacjentowi, że wyniki badań są gotowe?",
        a: "Odradzamy to nawet w tak okrojonej formie. Sama informacja o wykonanym badaniu dotyczy zdrowia konkretnej osoby, a po zdaniu „są gotowe” niemal zawsze pada pytanie „to co tam wyszło”. Bezpieczniej, gdy agent przekazuje rozmowę do rejestracji od razu, bez zaglądania do systemu.",
      },
      {
        q: "Po czym agent poznaje, że pacjent jest zdenerwowany?",
        a: "Częściowo po słowach, czyli po skargach, podniesionym tonie i prośbach o człowieka, a częściowo po tym, że rozmowa nie posuwa się do przodu mimo dwóch prób. Ustawiamy próg nisko i wolimy przekazać rozmowę o jedną za wcześnie niż o jedną za późno. Przekazanie nigdy nie jest błędem agenta.",
      },
      {
        q: "Co z pacjentami, którzy nie chcą rozmawiać z automatem?",
        a: "Scenariusz ma zawsze jedno zdanie wyjścia, dostępne w każdym momencie: „Oczywiście, przełączam do rejestracji.” Agent nie tłumaczy wtedy swoich zalet i nie prosi o jeszcze jedną szansę. Zakres tego, co przechodzi do ludzi, ustalamy na pierwszej konsultacji, która jest bezpłatna.",
      },
    ],
    related: [
      { label: "Voicebot dla przychodni", href: "/branze/voicebot-dla-przychodni" },
      { label: "Granice voicebota", href: "/akademia/granice-voicebota" },
      { label: "Prawo i nagrywanie rozmów", href: "/akademia/prawo-i-nagrywanie" },
    ],
  },
  {
    slug: "scenariusz-warsztat-salon",
    number: 12,
    track: 'scenariusze',
    title: "Rozmowa w salonie i warsztacie: terminy, wyceny, przypomnienia",
    metaTitle: "Voicebot w salonie i warsztacie: scenariusz rozmowy",
    metaDescription: "Gotowy scenariusz rozmowy w salonie i warsztacie: rozpoznanie usługi, długość wizyty, widełki cenowe, potwierdzenie SMS i przypomnienie dzień wcześniej.",
    lead: "Telefon w salonie dzwoni zawsze wtedy, gdy ktoś ma ręce w farbie albo głowę pod maską samochodu. Ta lekcja to scenariusz takiej rozmowy, zdanie po zdaniu, gotowy do przetestowania na sobie.",
    sections: [
      {
        h2: "Powitanie i rozpoznanie usługi",
        paragraphs: [
          "Powitanie w salonie może być krótsze niż w przychodni, bo sprawa jest prostsza. Nadal musi zawierać informację o AI, która od 2 sierpnia 2026 wynika z przepisów unijnych. U fryzjera brzmi to tak: „Salon Perfekt, dzień dobry. Mówi automatyczny asystent salonu. Umówię Panią na wizytę albo sprawdzę wolny termin. Czego dotyczy telefon?”. W warsztacie prawie identycznie: „Serwis Kowalski, dzień dobry. Rozmawia Pan z automatycznym asystentem. Mogę zapisać samochód na termin. W czym pomóc?”",
          "Zaraz potem zaczyna się część, którą najczęściej projektuje się za płytko. Klient mówi „chciałabym się ostrzyc” albo „coś mi stuka z przodu”, a agent musi z tego zrobić pozycję z Waszego cennika i konkretne okno w grafiku. Strzyżenie zajmuje inny czas niż koloryzacja, wymiana opon inny niż diagnostyka zawieszenia. Żadnych uniwersalnych czasów tu nie podamy, bo każdy zakład ma swoje. Chodzi o to, żeby agent w ogóle o tej różnicy wiedział.",
          "Zanim agent dotknie kalendarza, ustala cztery rzeczy.",
        ],
          list: [
          "Jaka usługa, nazwana tak jak w Waszym cenniku, a nie tak jak nazwał ją klient przez telefon.",
          "Ile trwa, czyli które okno w grafiku zostaje zablokowane.",
          "Kto wykonuje, jeżeli u Was liczy się konkretna osoba, a nie samo stanowisko.",
          "Czy dochodzi coś dodatkowego: mycie i modelowanie, odbiór auta z parkingu, samochód zastępczy.",
      ],
      },
      {
        h2: "Warsztat: marka i model, zanim padnie termin",
        paragraphs: [
          "W warsztacie kolejność jest odwrotna niż w salonie. Najpierw samochód, potem termin. Agent pyta prosto: „Poproszę markę i model, a jeśli Pan pamięta, także rocznik.” Bez tego nie da się sensownie zarezerwować stanowiska, bo ta sama usługa na różnych autach zajmuje różne okna, a część robót wymaga podnośnika albo zamówienia części z wyprzedzeniem.",
          "Cała wymiana wygląda wtedy tak. Klient: „Chcę wymienić opony.” Agent: „Jasne. Jaka marka i model auta?” Klient: „Octavia, rocznik dwa tysiące osiemnaście.” Agent: „Dziękuję. Opony ma Pan swoje na felgach, czy zdejmujemy z felg i zakładamy nowe?”. Dopiero po tej odpowiedzi agent sięga do kalendarza i proponuje dwa terminy, tak samo jak w każdym innym scenariuszu rezerwacyjnym.",
          "Gdy klient nie wie, co się dzieje z autem, agent nie zgaduje przyczyny. Zapisuje objaw własnymi słowami klienta i rezerwuje okno diagnostyczne: „Nie szkodzi, mechanik ustali to na miejscu. Zapiszę Pana na diagnostykę i zanotuję, że stuka przy skręcaniu w lewo.” Żadnych podpowiedzi w stylu „to pewnie łożysko”. Agent nie stawia diagnozy, nawet jeśli brzmi to bardzo prawdopodobnie.",
        ],
      },
      {
        h2: "„Ile to będzie kosztować?” bez zgadywania",
        paragraphs: [
          "To pytanie pada w większości rozmów i jest najtrudniejszym fragmentem scenariusza. Agent ma dostęp do cennika z widełkami, więc odpowiada dwuczęściowo. Najpierw liczby, potem warunek: „Wymiana klocków i tarcz z przodu to u nas zwykle od czterystu do siedmiuset złotych za robociznę, plus części. Dokładną kwotę poda mechanik po obejrzeniu auta.” Obie części w jednej wypowiedzi, nigdy osobno.",
          "W salonie działa ta sama zasada, tylko powód jest inny. Cena zależy od włosów, nie od oględzin podnośnikiem. „Koloryzacja zaczyna się u nas od dwustu pięćdziesięciu złotych. Przy długich i gęstych włosach schodzi więcej farby, więc kwota rośnie. Ostateczną cenę ustali fryzjerka na konsultacji przed usługą.” Klient wychodzi z rozmowy z widełkami i ze świadomością, od czego zależy końcowa liczba.",
          "Agent nie negocjuje. Nie obiecuje rabatu, nie mówi „na pewno się zmieścimy”, nie schodzi z ceny, gdy klient naciska. Ma na to jedno zdanie: „Nie mogę ustalać cen ani rabatów. Zanotuję Pana pytanie i oddzwoni kierownik serwisu.” Cztery reguły opisują całą tę część scenariusza.",
        ],
          list: [
          "Widełki zawsze z górną granicą, bo samo „od czterystu złotych” klient zapamięta jako cenę końcową.",
          "Zdanie o ostatecznej wycenie w tej samej wypowiedzi, nie dopiero na pożegnanie.",
          "Kwoty wymawiane pełnymi słowami, bez skrótów w rodzaju „czterysta plus”.",
          "Brak pozycji w cenniku oznacza przekazanie pytania człowiekowi, nie improwizację agenta.",
      ],
      },
      {
        h2: "SMS, przypomnienie i rozmowy, których nie oddajemy maszynie",
        paragraphs: [
          "Rezerwacja kończy się potwierdzeniem, które klient może sobie później obejrzeć. Agent zapowiada je jednym zdaniem: „Potwierdzenie wyślemy SMS na ten numer, będzie w nim termin i adres.” Dzień przed wizytą wychodzi przypomnienie. Głos w połączeniach wychodzących opieramy na ElevenLabs, więc brzmi tak samo jak w rozmowie przychodzącej, co dla stałych klientów ma znaczenie.",
          "Przypomnienie to osobny, bardzo krótki scenariusz: „Dzień dobry, przypominam o jutrzejszej wizycie w Serwisie Kowalski o dziesiątej. Termin aktualny?”. Przy odpowiedzi twierdzącej rozmowa kończy się w dwóch zdaniach. Przy odmowie agent od razu przechodzi do zmiany: „Odwołuję jutrzejszy termin. Chce Pan wybrać nowy teraz, czy mamy oddzwonić w przyszłym tygodniu?”. Milczenia nie liczymy jako potwierdzenia, wtedy grafik zostaje bez zmian, a informacja idzie do obsługi.",
          "Czterech rozmów nie oddajemy maszynie i nie ma tu dyskusji. Pierwsza to reklamacja po nieudanej usłudze, kiedy klient dzwoni z pretensją o kolor albo o hałas, który wrócił po naprawie. Agent mówi wtedy jedno zdanie i przekazuje: „Przykro mi, że tak wyszło. Łączę Pana z kierownikiem.” Druga to negocjacja ceny, bo maszyna, która raz zejdzie z kwoty, ustawia precedens na wszystkie kolejne telefony.",
          "Trzecia to stały klient, który dzwoni „do Pani Basi” i nie interesuje go żadne wolne okno u kogokolwiek innego. Agent rozpoznaje imię pracownika i przekazuje rozmowę, zamiast proponować zamiennik. Czwarta to duża zmiana, na przykład rozjaśnienie ciemnych włosów albo nietypowa naprawa po kolizji, gdzie przed zapisaniem terminu potrzebna jest rozmowa z fachowcem. W tych czterech przypadkach automat ma tylko rozpoznać sytuację i szybko zniknąć z linii.",
        ],
      },
    ],
    takeaways: [
      "Agent tłumaczy język klienta na pozycję z cennika, bo od nazwy usługi zależy długość okna w grafiku.",
      "W warsztacie najpierw marka i model auta, dopiero potem propozycja terminu i rezerwacja stanowiska.",
      "Na pytanie o cenę odpowiadają widełki z górną granicą razem ze zdaniem o wycenie po oględzinach.",
      "Reklamacja, negocjacja ceny i prośba o konkretną osobę idą do człowieka, bez próby zatrzymania klienta.",
    ],
    faq: [
      {
        q: "Czy agent może odwołać wizytę bez sprawdzania tożsamości?",
        a: "Przy zwykłej usłudze wystarczy zwykle numer telefonu, z którego przychodzi połączenie, oraz potwierdzenie imienia i nazwiska. Gdy numer się nie zgadza z rezerwacją, agent prosi o datę wizyty jako drugi element i dopiero wtedy odwołuje. Przy droższych usługach z zadatkiem wolimy, żeby odwołanie potwierdzał człowiek.",
      },
      {
        q: "Co robi agent, gdy klient prosi o usługę spoza cennika?",
        a: "Nie wymyśla ceny ani czasu trwania. Mówi wprost: „Tej usługi nie mam w cenniku. Zanotuję Pani prośbę i oddzwonimy z terminem.” Taki telefon trafia na listę do obsługi razem z nagranym opisem sprawy, więc nic nie ginie.",
      },
      {
        q: "Lepiej przypominać SMS-em czy telefonem?",
        a: "SMS jest tańszy i mniej nachalny, telefon skuteczniej wyłapuje odwołania, bo klient odpowiada od razu i można od ręki zaproponować nowy termin. Wiele zakładów łączy oba kanały: SMS zaraz po rezerwacji, połączenie dzień przed wizytą. Który wariant ma sens u Was, ustalamy na pierwszej konsultacji, która jest bezpłatna.",
      },
    ],
    related: [
      { label: "Voicebot dla salonów", href: "/branze/voicebot-dla-salonow" },
      { label: "Jak zbudować scenariusz rozmowy", href: "/akademia/scenariusz-rozmowy" },
      { label: "Voicebot w innych branżach", href: "/branze" },
    ],
  },
  {
    slug: "scenariusz-transport",
    number: 13,
    track: 'scenariusze',
    title: "Rozmowa w firmie transportowej: rozkłady, statusy, reklamacje",
    metaTitle: "Voicebot w transporcie: scenariusz rozmowy o rozkładzie",
    metaDescription: "Jak zbudować scenariusz voicebota w firmie transportowej: pytania o odjazd, status przesyłki, cytowanie rozkładu i moment przekazania do dyspozytora.",
    lead: "Pod jednym numerem przewoźnika spotykają się dwie rozmowy, które nie mają ze sobą nic wspólnego. Ta lekcja rozpisuje obie, zdanie po zdaniu.",
    sections: [
      {
        h2: "Dwa telefony na jednym numerze",
        paragraphs: [
          "Do firmy transportowej dzwonią dwie osoby o zupełnie różnych potrzebach. Pierwsza chce wiedzieć, o której odjeżdża autobus i czy zdąży na przesiadkę. Druga pyta, gdzie jest jej paleta i czy dojedzie przed weekendem. Jeśli agent zacznie rozmowę od ogólnego „w czym mogę pomóc”, obie osoby zaczną opowiadać po swojemu, a wy dostaniecie transkrypcje, z których niewiele wynika.",
          "Dlatego pierwsze zdanie ma rozdzielić ruch. Brzmi to tak: „Dzień dobry, tu automatyczny asystent [nazwa firmy]. Rozmawia Pan z systemem AI. Dzwoni Pan w sprawie kursu i rozkładu, czy w sprawie przesyłki?”. Informacja o AI nie jest grzecznościowym dodatkiem. Unijny obowiązek informowania rozmówcy, że po drugiej stronie jest sztuczna inteligencja, ma termin stosowania 2 sierpnia 2026, więc lepiej wpisać to zdanie od razu, niż dopisywać je potem w pośpiechu.",
          "Rozdzielenie na starcie daje jeszcze jedną rzecz: dwa osobne zestawy danych. Gałąź pasażerska sięga do rozkładu. Gałąź przesyłkowa sięga do systemu zleceń. Agent, który miesza jedno z drugim, prędzej czy później odpowie na pytanie o paletę godziną odjazdu autobusu.",
          "Zbudowaliśmy publiczne demo transportowe, żeby pokazać, jak agent zachowuje się na prawdziwych, nierównych danych rozkładowych. Stoi ono na publicznie dostępnym rozkładzie PKS Gryfice: 6 przystanków i 276 odjazdów. Przewoźnik nie jest naszym klientem, a dane pochodzą ze źródła jawnego. Traktujcie to jako poligon, nie jako opis wdrożenia.",
        ],
      },
      {
        h2: "Pasażer: skąd, dokąd, kiedy",
        paragraphs: [
          "Rozmowa pasażerska ma komplet zmiennych: przystanek początkowy, przystanek docelowy, datę oraz porę dnia. Agent pyta o nie pojedynczo, bo człowiek przez telefon nie odpowiada na listę. „Z którego przystanku Pani wyjeżdża?”, potem „Dokąd Pani jedzie?”, potem „Jedzie Pani dzisiaj czy w inny dzień?”. Dopiero na końcu doprecyzowanie: „Rano czy po południu?”.",
          "Kiedy agent ma komplet, podaje godziny i od razu mówi, skąd je ma: „Z Gryfic do Trzebiatowa w piątek mam dwa odjazdy przed południem, o 6:40 i 11:05. Godziny czytam z rozkładu obowiązującego od 1 marca”. Ten drugi człon wygląda na zbędny, dopóki rozmowa nie trafi na dzień świąteczny albo objazd. Wtedy ratuje sytuację, bo pasażer wie, na czym opiera się odpowiedź, i sam dopyta.",
          "Najważniejsze zdanie w tym scenariuszu jest krótkie: „Nie mam takiego kursu w rozkładzie”. Bez ozdobników, bez „chyba”, bez „raczej nie kursuje”. Model, który w tym miejscu improwizuje, wysyła kogoś na przystanek o godzinie, której nie ma, a taki błąd wraca do was telefonem od zdenerwowanego człowieka. Zaraz po tym zdaniu agent daje wyjście: „Mogę sprawdzić inny dzień albo przełączyć Panią do dyspozytora. Co wybieramy?”.",
          "Zanim agent w ogóle otworzy rozkład, musi mieć zebrane cztery rzeczy, i każda z nich ma własną pułapkę.",
        ],
          list: [
          "Przystanek początkowy w brzmieniu z rozkładu. Pasażer powie „spod szkoły”, a w danych stoi nazwa ulicy, więc agent musi umieć potwierdzić: „Chodzi o przystanek [nazwa]?”.",
          "Przystanek docelowy z rozstrzygnięciem nazw, które się powtarzają. „Nowa Wieś jest u nas na dwóch trasach. Jedzie Pani przez Płoty czy przez Brojce?”.",
          "Data, a nie sam dzień tygodnia. Rozkład szkolny i wakacyjny to dwa różne pliki, a pasażer mówi „w poniedziałek”, mając na myśli za tydzień.",
          "Pora dnia albo godzina graniczna, żeby agent nie zaczął czytać kilkunastu odjazdów pod rząd. „Mam sześć kursów tego dnia. Podać dwa najbliższe czy przeczytać wszystkie?”.",
      ],
      },
      {
        h2: "Przesyłka: numer zlecenia, status, termin",
        paragraphs: [
          "Gałąź przesyłkowa zaczyna się od identyfikatora i tu przegrywa najwięcej rozmów, bo numery są długie, a linia telefoniczna gubi cyfry. Agent prosi o numer i od razu narzuca tempo: „Proszę podać numer zlecenia, może Pan czytać cyfra po cyfrze”. Po odczycie potwierdza całość na głos: „Odczytuję: siedem, cztery, zero, dwa, jeden, osiem. Zgadza się?”. To kosztuje pięć sekund. Oszczędza całą rozmowę.",
          "Odpowiedź o statusie ma dwa elementy: gdzie przesyłka jest teraz i kiedy planowo dojedzie. „Ostatni skan mam dzisiaj o 4:20 w sortowni w Poznaniu. Planowana dostawa to jutro, w przedziale od 9 do 15”. Agent nie dokłada nic od siebie. Nie mówi „pewnie dojedzie rano”, bo za takim zdaniem klient przestawia sobie cały dzień i zostaje w domu na próżno.",
          "Kiedy numeru nie ma w systemie, obowiązuje ta sama zasada co przy braku kursu. „Nie znajduję zlecenia o tym numerze. Może brakować jednej cyfry, albo nadanie nie zostało jeszcze zeskanowane. Podamy numer jeszcze raz, czy mam przełączyć do obsługi?”. Dwie drogi wyjścia, żadnej hipotezy o tym, gdzie paczka jest naprawdę.",
          "Jest też zestaw rzeczy, których agent w tej gałęzi nie robi, choć technicznie by potrafił. Nie podaje numeru telefonu kierowcy ani jego pozycji na trasie. Nie zmienia adresu dostawy, bo to zmiana warunków zlecenia. Nie zawęża godziny dostawy poniżej przedziału z systemu, nawet gdy klient naciska, a naciskać będzie.",
        ],
      },
      {
        h2: "Jedno źródło prawdy i sprawy poza zasięgiem agenta",
        paragraphs: [
          "Rozkład jest danymi zmiennymi i to odróżnia transport od większości branż. Zmienia się sezonowo, zmienia się przy remoncie drogi, a kursy szkolne znikają na wakacje. Scenariusz musi więc wskazywać jedno miejsce, z którego agent czyta godziny, i mieć w tym miejscu datę obowiązywania. Dwa pliki od dwóch osób z dwóch działów to gwarancja, że agent poda godzinę z tego starszego.",
          "Datę aktualizacji opłaca się wystawić poza samą rozmowę. Agent może ją wypowiadać, a wy powinniście widzieć ją w panelu. Do tego przydaje się bezpiecznik: jeśli plik rozkładu jest starszy niż ustalony przez was próg, agent przestaje podawać godziny i mówi „Nie mam potwierdzonej aktualnej wersji rozkładu, przełączam do dyspozytora”. Lepszy taki komunikat niż pewnie brzmiąca nieprawda.",
          "Osobno stoją sprawy, których nie oddajemy agentowi w żadnej wersji scenariusza. Łączy je jedno: od pierwszego zdania powstaje materiał, który może trafić do ubezpieczyciela, do sądu albo do rozliczenia kary umownej.",
          "Przekazanie do człowieka ma brzmieć jak decyzja, a nie jak awaria: „Ta sprawa wymaga rozmowy z dyspozytorem, przełączam, proszę o chwilę”. Poza godzinami pracy agent nie zostawia rozmówcy z niczym: „Dyspozytornia pracuje od siódmej. Zapiszę zgłoszenie i Pani numer, oddzwonimy rano”. Zapisane zgłoszenie z konkretnym numerem zlecenia jest warte więcej niż nieodebrany telefon o drugiej w nocy. Poniżej sprawy, które w transporcie agent oddaje od razu, nawet jeśli technicznie potrafiłby zebrać dane.",
        ],
          list: [
          "Zgłoszenie szkody w przesyłce. Opis uszkodzenia, zdjęcia i termin zgłoszenia to dokumentacja, którą prowadzi człowiek.",
          "Opóźnienie, z którego wynikają pieniądze: przepadła przesiadka, stanęła produkcja, naliczy się kara umowna.",
          "Każda rozmowa po wypadku, kolizji albo zdarzeniu z udziałem pasażera.",
          "Zmiana warunków zlecenia: adres, termin, sposób płatności, dane odbiorcy.",
      ],
      },
    ],
    takeaways: [
      "Pierwsze zdanie agenta rozdziela ruch pasażerski od przesyłkowego, bo obie gałęzie sięgają po inne dane.",
      "Przy każdej godzinie agent mówi, z jakiego rozkładu ją czyta, i nigdy nie zgaduje kursu, którego nie ma.",
      "Numer zlecenia agent potwierdza cyfra po cyfrze, a status podaje dokładnie taki, jaki widzi w systemie.",
      "Szkody, opóźnienia z konsekwencjami finansowymi i sprawy po wypadku zostają po stronie człowieka.",
    ],
    faq: [
      {
        q: "Co agent ma zrobić, gdy pasażer pyta o kurs, którego nie ma w rozkładzie?",
        a: "Powiedzieć wprost: „Nie mam takiego kursu w rozkładzie”. Zaraz potem zaproponować dwie drogi, czyli sprawdzenie innego dnia albo przełączenie do dyspozytora. Improwizacja w tym miejscu kończy się pasażerem na pustym przystanku.",
      },
      {
        q: "Czy demo transportowe na danych PKS Gryfice oznacza, że przewoźnik jest waszym klientem?",
        a: "Nie. Demo powstało na publicznie dostępnych danych rozkładowych (6 przystanków, 276 odjazdów) i pokazuje zachowanie agenta na realnym zbiorze godzin. Przewoźnik nie jest naszym klientem i nie zamawiał tego wdrożenia.",
      },
      {
        q: "Jak często trzeba aktualizować rozkład w scenariuszu?",
        a: "Tak często, jak zmienia się u was rozkład, i zawsze z jednego źródła. Przy zmianie sezonowej to kilka razy w roku, przy objazdach częściej. Dobrze ustawić próg, po którym agent przestaje podawać godziny i przekazuje rozmowę do dyspozytora.",
      },
    ],
    related: [
      { label: "Voicebot dla firm transportowych", href: "/branze/voicebot-dla-transportu" },
      { label: "Lekcja 4: scenariusz rozmowy", href: "/akademia/scenariusz-rozmowy" },
      { label: "Agent głosowy AI", href: "/uslugi/agent-glosowy-ai" },
    ],
  },
  {
    slug: "scenariusz-gastronomia",
    number: 14,
    track: 'scenariusze',
    title: "Rozmowa w restauracji: rezerwacje, zamówienia, alergeny",
    metaTitle: "Voicebot w restauracji: rezerwacje i zamówienia na wynos",
    metaDescription: "Scenariusz voicebota dla restauracji: rezerwacja stolika, zamówienie na wynos z powtórzeniem kwoty, pytania o alergeny i moment przekazania do kuchni.",
    lead: "Piątek, dziewiętnasta, sala pełna, a telefon dzwoni po raz szósty. Ta lekcja rozpisuje, co dokładnie mówi agent, który odbiera go zamiast kelnera.",
    sections: [
      {
        h2: "Piątkowy szczyt i pierwsze zdanie",
        paragraphs: [
          "W restauracji telefon dzwoni najgęściej wtedy, kiedy nikt nie ma na niego czasu. Kelner idzie z czterema talerzami, kuchnia woła o wydanie, przy barze czeka rachunek. Telefon przegrywa z gościem, który siedzi na sali, i słusznie przegrywa. Tylko że po drugiej stronie ktoś właśnie chciał zarezerwować stolik na osiem osób.",
          "Agent odbiera od pierwszego sygnału i od razu segreguje ruch: „Dzień dobry, restauracja [nazwa], tu automatyczny asystent, rozmawia Pani z AI. Rezerwacja stolika, zamówienie na wynos, czy inna sprawa?”. Zdanie o AI ma paść na początku, a nie po minucie rozmowy. Unijny obowiązek informowania, że rozmówcą jest sztuczna inteligencja, ma termin stosowania 2 sierpnia 2026.",
          "Zanim zajmiecie się rezerwacjami, opłaca się wpisać odpowiedzi na pytania, które wracają codziennie w tym samym brzmieniu. Agent zamyka je w kilka sekund i rozmowa się kończy, bez zajmowania kelnera. Poniżej cztery, które słychać najczęściej, w formie gotowych kwestii do przerobienia na wasze realia.",
        ],
          list: [
          "Parking. „Mamy własne miejsca na tyłach budynku, wjazd od ulicy [nazwa]. W piątek wieczorem bywa komplet, wtedy najbliższy parking miejski jest kilka minut spacerem”.",
          "Pies. „Psy są u nas mile widziane na tarasie i w dolnej sali. Miska z wodą czeka przy wejściu”.",
          "Krzesełko dla dziecka. „Mamy krzesełka dla dzieci. Zapiszę to przy rezerwacji, żeby czekało już przy stoliku”.",
          "Taras. „Taras jest czynny do końca września i ogrzewany po zmroku. Przy deszczu przenosimy Państwa do sali, dzwonimy wtedy wcześniej”.",
      ],
      },
      {
        h2: "Rezerwacja: liczba osób, godzina, miejsce, okazja",
        paragraphs: [
          "Rezerwacja ma cztery zmienne i agent zbiera je pojedynczo, w tej kolejności: „Na ile osób szukamy stolika?”, „Na którą godzinę?”, „Woli Pani salę czy taras?”, „Czy świętujecie coś szczególnego?”. Ostatnie pytanie wygląda na uprzejmość, a bywa najbardziej praktyczne z całej czwórki. Urodziny oznaczają świeczkę w deserze, rocznica stolik dalej od przejścia, spotkanie służbowe względną ciszę.",
          "Kiedy termin jest zajęty, agent nie obiecuje, że „spróbujemy coś wcisnąć”. Podaje alternatywy: „Na dwudziestą nie mam już stolika na cztery osoby. Wolna jest osiemnasta trzydzieści albo dwudziesta pierwsza. Która godzina Państwu pasuje?”. Dwie konkretne propozycje działają lepiej niż pytanie „a może inna godzina?”, bo gość nie musi zgadywać, co jeszcze u was wchodzi w grę.",
          "Zamknięcie rezerwacji to powtórzenie kompletu i zapowiedź potwierdzenia: „Powtarzam: czwartek, dwudziesta, cztery osoby, taras, urodziny. Wyślę SMS z potwierdzeniem na ten numer. Wszystko się zgadza?”. Przy okazji agent mówi o zasadzie, o którą i tak zapytacie później: „Stolik trzymamy piętnaście minut. Jeśli się Państwo spóźnią, proszę o telefon, wtedy poczekamy dłużej”.",
          "Ta sama gałąź obsługuje odwołanie i przesunięcie, bo gość dzwoni w tej sprawie z tego samego powodu co przy rezerwowaniu: jest w biegu. Agent odnajduje wpis po numerze telefonu i potwierdza go na głos, zanim cokolwiek zmieni: „Mam rezerwację na czwartek, dwudziesta, cztery osoby. Odwołujemy czy przesuwamy na inny termin?”. Odwołany stolik o osiemnastej w piątek to stolik, który zdążycie sprzedać jeszcze raz.",
        ],
      },
      {
        h2: "Zamówienie na wynos i powtórzenie z kwotą",
        paragraphs: [
          "Zamówienie na wynos dyktuje się szybko i chaotycznie, bo gość ma przed sobą menu na telefonie i dwie osoby w tle, które zmieniają zdanie. Agent musi domykać każdą pozycję od razu, zamiast zbierać warianty na koniec. Po „poproszę margheritę” pada natychmiast „Rozmiar trzydzieści dwa czy czterdzieści pięć?”, a zaraz potem „Dodać sos czosnkowy albo ostry?”. Doprecyzowanie na końcu rozmowy oznacza czytanie całej listy od nowa.",
          "Osobno trzeba przewidzieć „to co zwykle”. Agent, który nie ma potwierdzonej historii zamówień z tego numeru, mówi wprost: „Nie mam podglądu w poprzednie zamówienia, podyktuje mi Pan pozycje?”. Zgadywanie kończy się pizzą, po którą nikt nie przyjeżdża.",
          "Najważniejszy krok całej rozmowy jest jeden i wygląda niepozornie. Przed potwierdzeniem agent czyta całe zamówienie razem z kwotą i czasem odbioru: „Powtarzam: dwie margherity czterdzieści pięć, jedna z podwójnym serem, sałatka cezar bez grzanek, dwa sosy czosnkowe. Razem sto dwadzieścia cztery złote. Odbiór osobisty za około czterdzieści minut. Wszystko się zgadza?”. Ten fragment ratuje więcej zamówień niż cała reszta scenariusza, bo wyłapuje pomyłkę, zanim kuchnia zacznie pracować.",
          "Płatność kartą przez telefon odrzucamy jawnie i bez wyjątków. Agent nie prosi o dane karty, a gdy gość zaczyna je dyktować, przerywa: „Proszę nie podawać numeru karty. Płatność przyjmujemy przy odbiorze, gotówką albo kartą na miejscu”. Jeśli macie link do płatności, agent może go zapowiedzieć i wysłać po rozmowie. Numer karty w nagraniu to problem, którego nie chcecie mieć na dysku.",
        ],
      },
      {
        h2: "Alergeny i rozmowy, których agent nie prowadzi",
        paragraphs: [
          "Alergeny są jedynym miejscem w tym scenariuszu, gdzie pomyłka agenta może skończyć się karetką. Zasada jest więc twarda: agent odpowiada wyłącznie z zatwierdzonej karty składników, bez wnioskowania i bez analogii między daniami. Jeśli w karcie stoi nerkowiec, agent mówi „W tym daniu, według naszej karty składników, jest nerkowiec”. Jeśli w karcie czegoś nie ma, agent nie zakłada, że nie ma tego w potrawie.",
          "Przy jakiejkolwiek niepewności rozmowa idzie do kuchni, natychmiast: „Nie mam potwierdzonej informacji o [składnik] w tym daniu. Nie będę zgadywać, łączę Panią z kuchnią”. Zakazane są wszystkie miękkie formy: „chyba nie ma”, „raczej bezpieczne”, „nie sądzę, żeby było”. Model, który zgaduje przy orzechach, jest gorszy niż nieodebrany telefon, bo nieodebrany telefon kosztuje jedno zamówienie. Pytania o wspólną patelnię i ryzyko śladowych ilości zostawcie człowiekowi w całości.",
          "Poza alergenami jest jeszcze kilka rozmów, których nie oddajemy agentowi, choć wszystkie zaczynają się od zwykłego telefonu. Łączy je to, że po drugiej stronie ktoś potrzebuje decyzji, a nie informacji.",
          "Przekazanie ma brzmieć spokojnie i konkretnie: „Poproszę o chwilę, przekazuję słuchawkę menedżerowi”. Jeśli menedżera nie ma, agent nie udaje, że poradzi sobie sam: „Menedżer jest dostępny od jedenastej. Zapiszę Pani numer i temat, oddzwoni rano”. Wolniejsza decyzja człowieka jest lepsza niż szybka decyzja agenta, który nie ma do niej podstaw. Cztery sytuacje zostawiamy ludziom i warto ustalić to w scenariuszu, zanim agent odbierze pierwszy telefon.",
        ],
          list: [
          "Duże grupy i imprezy zamknięte, czyli komunia, osiemnastka albo wigilia firmowa. To negocjacja menu, zaliczki i godzin, więc rozmowa handlowa.",
          "Reklamacja jedzenia. Gość, który dzwoni po niedobrym daniu, chce usłyszeć człowieka i decyzję o rekompensacie.",
          "Gość, który już siedzi na sali i dzwoni, bo coś jest nie tak przy stoliku. Ta rozmowa musi trafić na salę w kilkanaście sekund.",
          "Pytania o alergeny wykraczające poza zatwierdzoną kartę składników.",
      ],
      },
    ],
    takeaways: [
      "Pierwsze zdanie agenta rozdziela rezerwacje od zamówień na wynos i od razu informuje, że rozmówcą jest AI.",
      "Powtórzenie całego zamówienia z kwotą przed potwierdzeniem wyłapuje pomyłki, zanim kuchnia zacznie pracować.",
      "Przy alergenach agent cytuje zatwierdzoną kartę składników albo łączy z kuchnią, nigdy nie zgaduje.",
      "Imprezy zamknięte, reklamacje jedzenia, gość na sali i płatność kartą przez telefon zostają poza scenariuszem agenta.",
    ],
    faq: [
      {
        q: "Czy agent może przyjąć płatność kartą przez telefon?",
        a: "Nie. Odrzucamy to jawnie, a agent przerywa gościowi, gdy ten zaczyna dyktować numer karty. Płatność przyjmujecie przy odbiorze albo linkiem wysłanym po rozmowie, jeśli macie taki kanał.",
      },
      {
        q: "Co zrobić, gdy gość pyta o alergen, którego nie ma w karcie składników?",
        a: "Agent mówi, że nie ma potwierdzonej informacji, i łączy z kuchnią. Żadnych form warunkowych w stylu „chyba nie ma”. Zatwierdzona karta składników jest jedynym źródłem, z którego agent może cytować.",
      },
      {
        q: "Ile trwa przygotowanie takiego scenariusza dla jednej restauracji?",
        a: "Mniejsze wdrożenia zamykamy w 2 do 4 tygodni, większe w 1 do 3 miesięcy. Wdrożenie zaczyna się od 5 000 zł netto, a utrzymanie kosztuje 249, 499 albo 799 zł netto miesięcznie. Pierwsza konsultacja jest bezpłatna.",
      },
    ],
    related: [
      { label: "Voicebot dla gastronomii", href: "/branze/voicebot-dla-gastronomii" },
      { label: "Lekcja 3: granice voicebota", href: "/akademia/granice-voicebota" },
      { label: "Automatyzacja obsługi klienta", href: "/uslugi/automatyzacja-obslugi-klienta" },
    ],
  },
  {
    slug: "scenariusz-administracja",
    number: 15,
    track: 'scenariusze',
    title: "Rozmowa w urzędzie: statusy spraw, dokumenty, terminy",
    metaTitle: "Scenariusz rozmowy dla urzędu: sprawy i dokumenty",
    metaDescription: "Scenariusz rozmowy dla urzędu: powitanie z informacją o AI, rozpoznanie sprawy po języku potocznym, dokumenty, godziny przyjęć i granice agenta.",
    lead: "Administracja to jedyny sektor, w którym dzwoniący często nie umie nazwać własnej sprawy. Ta lekcja pokazuje, co agent głosowy ma mówić zdanie po zdaniu, żeby mimo to skierować mieszkańca we właściwe miejsce.",
    sections: [
      {
        h2: "Powitanie: kto odbiera i w czyim imieniu",
        paragraphs: [
          "Rozmowa z urzędem zaczyna się inaczej niż rozmowa ze sklepem. Dzwoniący nie wybrał Was z reklamy, tylko musi coś załatwić, a często dzwoni już drugi albo trzeci raz. Pierwsze zdanie agenta załatwia cztery sprawy naraz: mówi, gdzie człowiek trafił, uprzedza, że rozmawia z programem, zarysowuje zakres pomocy i oddaje głos rozmówcy. Krótko.",
          "Brzmi to mniej więcej tak: „Urząd Miasta, infolinia ogólna. Rozmawia Pani z asystentem głosowym, czyli programem. Mogę powiedzieć, jakie dokumenty są potrzebne, w jakich godzinach przyjmują wydziały i gdzie sprawę złożyć. W czym mogę pomóc?”. Informacja o tym, że rozmówcą jest AI, przestaje być dobrym zwyczajem i staje się obowiązkiem, bo unijne przepisy trzeba stosować od 2 sierpnia 2026. W urzędzie ta jedna linijka robi jeszcze coś: ustawia oczekiwania. Człowiek od razu wie, że po drugiej stronie nie siedzi urzędnik prowadzący jego sprawę.",
          "Druga rzecz, o której komercyjne scenariusze nie muszą myśleć, to podział kompetencji między urzędami. Mieszkaniec dzwoni do gminy w sprawie rejestracji auta, do starostwa w sprawie meldunku, do skarbówki w sprawie odpadów. Agent musi rozpoznać taką pomyłkę i nie odbić się od niej zdaniem „to nie u nas”. Zamiast tego: „Tu urząd gminy. Rejestracją pojazdów zajmuje się starostwo powiatowe, to osobny urząd. Mogę podać numer i godziny, w jakich przyjmują. Podyktować?”.",
          "Granicę kompetencji agenta stawiacie od razu, zanim rozmówca zdąży zapytać o rozstrzygnięcie. Agent informuje o procedurze i nie ocenia sprawy: „Mogę powiedzieć, co jest wymagane i ile trwa procedura. Nie oceniam, czy w Pana sytuacji decyzja będzie pozytywna, bo to należy do urzędnika prowadzącego”. To zdanie zapisujecie w scenariuszu raz i wracacie do niego przy każdym pytaniu, które zaczyna się od „a czy mi się należy”.",
        ],
      },
      {
        h2: "Kiedy dzwoniący nie zna nazwy swojej sprawy",
        paragraphs: [
          "Mieszkaniec dzwoni z problemem, nie z nazwą procedury. Mówi „papier na dom”, „chcę zameldować babcię u siebie”, „kupiłem auto i nie wiem, co teraz”. Żadne z tych sformułowań nie występuje w strukturze urzędu ani w nazwie żadnego wydziału. Cała robota projektowa w tym sektorze polega na zbudowaniu mostu między językiem mieszkańca a językiem procedury.",
          "Zanim napiszecie choćby jedno zdanie agenta, zróbcie listę potocznych określeń, które faktycznie padają na Waszej infolinii. Najprościej wyciągnąć je z pamięci osób odbierających telefon w kancelarii, bo one słyszą je codziennie. Kilka przykładów, które powtarzają się niemal wszędzie:",
          "Agent nigdy nie zgaduje po cichu. Dopasowanie powtarza głośno i prosi o potwierdzenie: „Jeśli dobrze rozumiem, chodzi o budowę domu na własnej działce. U nas ta sprawa nazywa się pozwolenie na budowę i prowadzi ją wydział architektury. Zgadza się?”. Jeżeli rozmówca zaprzeczy, agent nie próbuje drugiego strzału w ciemno, tylko oddaje inicjatywę: „To proszę opisać własnymi słowami, co chce Pan zrobić. Ja dopasuję to do naszej listy spraw”.",
          "Część opisów pasuje do dwóch procedur naraz i to jest normalne. Agent ma prawo tego nie rozstrzygać: „Ta sprawa ma dwie ścieżki, zależnie od wielkości budynku. Przy altanie zwykle wystarcza zgłoszenie, przy domu potrzebne jest pozwolenie. Łączę z architekturą, tam ustalą to w minutę”. Zwróćcie uwagę na słowo „zwykle”. Agent, który powie „wystarczy zgłoszenie” bez tego zastrzeżenia, właśnie zinterpretował przepis za urzędnika. Sześć najczęstszych zwrotów potocznych zebraliśmy razem z procedurą, która się za nimi kryje, i wydziałem prowadzącym sprawę.",
        ],
          list: [
          "„papier na dom”, „pozwolenie, żeby budować”: pozwolenie na budowę albo zgłoszenie robót, wydział architektury",
          "„chcę wyciąć drzewo na swojej działce”: zgłoszenie zamiaru usunięcia drzewa, ochrona środowiska",
          "„wyrobić dowód dla dziecka”: wniosek o dowód osobisty, sprawy obywatelskie",
          "„zameldować babcię u siebie”: zameldowanie na pobyt stały, ewidencja ludności",
          "„sprzedałem auto, czy muszę coś zgłaszać”: zawiadomienie o zbyciu pojazdu, wydział komunikacji w starostwie",
          "„czy mogę postawić altankę bez pozwolenia”: zgłoszenie obiektu małej architektury, znowu architektura",
      ],
      },
      {
        h2: "Dokumenty, terminy i status sprawy",
        paragraphs: [
          "Lista dokumentów to najczęstszy powód, dla którego ludzie dzwonią do urzędu, i najłatwiejsza rzecz do oddania automatowi. Warunek jest jeden: agent czyta ją porcjami, nie jednym ciągiem. „Do wniosku o dowód potrzebne są dwie rzeczy. Aktualne zdjęcie, takie jak do paszportu, oraz dokument potwierdzający tożsamość, na przykład stary dowód albo paszport. Powtórzyć wolniej?”. Po liście zawsze pada oferta zapisu: „Mogę wysłać to SMS na numer, z którego Pani dzwoni. Wysłać?”.",
          "Godziny przyjęć wyglądają w urzędzie inaczej niż w firmie i scenariusz musi to uwzględniać. Wydziały mają różne godziny, kasa zamyka się wcześniej niż budynek, jeden dzień w tygodniu bywa dłuższy. Agent podaje to od razu, bez dopytywania: „Wydział przyjmuje od poniedziałku do piątku od ósmej. W poniedziałki dłużej, do siedemnastej. Kasa kończy pół godziny przed urzędem, więc opłatę wygodniej zrobić przelewem”.",
          "Status sprawy po numerze ma sens tylko wtedy, gdy Wasz system faktycznie go udostępnia. Wtedy agent prosi o numer i podpowiada, gdzie go szukać: „Proszę podać numer sprawy, to ciąg znaków z pisma, zwykle w prawym górnym rogu, nad datą”. Odpowiedź ogranicza się do etapu, bez treści rozstrzygnięcia: „Sprawa jest na etapie uzgodnień, wpłynęła piętnastego. Treści decyzji nie odczytuję przez telefon, dostanie ją Pan na piśmie”. Gdy integracji nie ma, agent mówi to wprost i proponuje kontakt zwrotny, zamiast udawać, że sprawdza w komputerze.",
          "Ostatni element to przekazanie rozmowy. „Przełączę do informacji” jest dla dzwoniącego karą, bo oznacza opowiadanie wszystkiego od nowa obcej osobie. Agent kieruje do konkretnego wydziału i mówi, dokąd dzwoni: „Łączę z geodezją, numer wewnętrzny dwieście czternaście. Uprzedzam ich, że pyta Pani o wypis z rejestru gruntów”. Gdy nikt nie odbiera, zamiast ciszy pada plan B: „Nikt nie odbiera, pewnie są przy okienku. Mogę zostawić wiadomość z Pani numerem i opisem sprawy. Oddzwonią dziś albo jutro rano”.",
        ],
      },
      {
        h2: "Wolniej i cierpliwiej, bo telefon bywa jedynym kanałem",
        paragraphs: [
          "Część mieszkańców nie ma konta na rządowej platformie, nie zagląda na stronę urzędu i nie odbierze maila. Telefon jest dla nich jedynym kanałem kontaktu z administracją, a to zmienia parametry scenariusza mocniej niż jakakolwiek branżowa specyfika. Rozmowa musi być wolniejsza niż komercyjna. Naprawdę wolniejsza.",
          "W praktyce oznacza to kilka ustawień, o które trzeba poprosić przy wdrożeniu, bo domyślnie systemy stroi się pod sprawne rozmowy sprzedażowe. Agent czeka dłużej na ciszy, zanim uzna, że rozmówca skończył zdanie. Nie wchodzi w słowo. Powtarza bez pretensji: „Oczywiście, powtórzę”. I nie rzuca skrótem bez wyjaśnienia: „Wniosek można złożyć przez internet, na rządowej platformie ePUAP. Jeśli woli Pani papierowo, wszystko da się załatwić na miejscu, w okienku”.",
          "Do tego dochodzi coś, czego nie widać w transkrypcie: ton. W urzędzie sprawdza się głos spokojny i niski, bez sprzedażowej energii. Zdanie „Nie spieszę się, proszę mówić spokojnie” warto wpisać jako gotową reakcję na zawahanie, bo starsze osoby często przepraszają, że zajmują czas. Głos opieramy na ElevenLabs, więc tempo i barwę ustawiamy razem z Wami podczas prób, na prawdziwych nagraniach. Agent pełni rolę telefonicznej recepcji Waszego urzędu i nic ponad to.",
          "Osobno decydujecie, czego agent w ogóle nie tyka. W administracji ta lista jest krótsza i twardsza niż w biznesie, bo po drugiej stronie stoją terminy ustawowe i prawa strony postępowania. Cztery obszary zostawiacie ludziom:",
        ],
          list: [
          "skargi i wnioski, które mają własny tryb oraz termin i muszą trafić do człowieka",
          "sprawy sporne, w tym każdą rozmowę o odmowie albo o odwołaniu",
          "wszystko, co przypomina decyzję administracyjną lub jej wykładnię",
          "sprawy wymagające oceny urzędnika, na przykład czy dany dokument w tej konkretnej sytuacji wystarczy",
      ],
      },
    ],
    takeaways: [
      "Pierwsze zdanie nazywa urząd i uprzedza, że rozmówcą jest program. Obowiązek informowania o AI trzeba stosować od 2 sierpnia 2026.",
      "Zbudujcie słownik potocznych określeń, zanim napiszecie scenariusz. Agent powtarza dopasowanie głośno i prosi o potwierdzenie, zamiast zgadywać po cichu.",
      "Agent informuje o procedurze i nie ocenia sprawy. Zdanie o tym, że decyzja należy do urzędnika, wraca przy każdym pytaniu w stylu „czy mi się należy”.",
      "Tempo w administracji jest wolniejsze niż w komercji: dłuższe pauzy, spokojne powtórzenia i skróty tłumaczone za każdym razem.",
    ],
    faq: [
      {
        q: "Czy agent głosowy może podać status sprawy?",
        a: "Może, jeśli Wasz system pozwala odpytać go o etap po numerze sprawy. Agent podaje wtedy sam etap i datę wpływu, bez treści rozstrzygnięcia. Gdy integracji nie ma, mówi wprost, że nie ma wglądu w akta, i proponuje wiadomość do wydziału albo kontakt zwrotny.",
      },
      {
        q: "Co zrobić, gdy mieszkaniec nie chce rozmawiać z automatem?",
        a: "Przełączenie na człowieka musi działać na pierwsze żądanie, bez dopytywania o powód i bez przekonywania. W scenariuszu zapisujemy jedno zdanie: „Rozumiem, łączę z pracownikiem”. Jeśli linia jest zajęta, agent proponuje oddzwonienie i podaje realny przedział czasu.",
      },
      {
        q: "Ile trwa uruchomienie takiego scenariusza w urzędzie?",
        a: "Mniejsze wdrożenia zajmują 2 do 4 tygodni, większe od miesiąca do trzech, bo dochodzą uzgodnienia wewnętrzne i integracje. Wdrożenie zaczyna się od 5 000 zł netto, utrzymanie kosztuje 249, 499 albo 799 zł netto miesięcznie. Hosting stoi w Polsce lub w chmurze UE, zgodnie z RODO, a pierwsza konsultacja jest bezpłatna.",
      },
    ],
    related: [
      { label: "Voicebot dla administracji publicznej", href: "/branze/ai-dla-administracji" },
      { label: "Granice voicebota: kiedy oddać słuchawkę", href: "/akademia/granice-voicebota" },
      { label: "Jak zbudować scenariusz rozmowy", href: "/akademia/scenariusz-rozmowy" },
    ],
  },
  {
    slug: "scenariusz-nieruchomosci",
    number: 16,
    track: 'scenariusze',
    title: "Rozmowa w biurze nieruchomości: oferta, kwalifikacja, oględziny",
    metaTitle: "Scenariusz rozmowy voicebota w biurze nieruchomości",
    metaDescription: "Scenariusz telefonu w biurze nieruchomości zdanie po zdaniu: identyfikacja oferty, powtarzalne pytania, kwalifikacja zainteresowanego i umówienie oględzin.",
    lead: "Telefon w biurze nieruchomości prawie zawsze dotyczy jednej konkretnej oferty, nie firmy w ogóle. Ta lekcja rozbiera taką rozmowę na zdania: co agent ustala jako pierwsze, o co dopytuje i gdzie kończy się jego rola.",
    sections: [
      {
        h2: "Pierwsze zdanie i pytanie o konkretną ofertę",
        paragraphs: [
          "Rozmowa w biurze nieruchomości rzadko zaczyna się od ogólnego „dzień dobry, mam pytanie”. Dzwoniący ma przed sobą konkretne ogłoszenie, otwarte kwadrans wcześniej w portalu, i chce wiedzieć, czy jest jeszcze aktualne. Powitanie musi to uwzględnić od pierwszego zdania.",
          "U nas brzmi ono tak: „Biuro Nieruchomości Kowalscy, dzień dobry. Rozmawia Pan z automatycznym asystentem. Mogę odpowiedzieć na pytania o ofertę i umówić oglądanie. O którą nieruchomość Pan pyta?”. Zdanie o AI nie jest formalnością. Od 2 sierpnia 2026 informowanie rozmówcy, że ma do czynienia z systemem sztucznej inteligencji, wynika wprost z unijnego rozporządzenia.",
          "Część dzwoniących pamięta adres albo numer oferty z portalu, i wtedy sprawa jest prosta: agent odczytuje dane z bazy i przechodzi dalej. Częściej pamiętają fragmenty, dzielnicę, przybliżony metraż, cenę z grubsza. Wtedy agent dopytuje o dwa szczegóły z opisu, żeby trafić na właściwy rekord, zamiast zgadywać po jednym słowie.",
          "Zdarza się też telefon o ofertę, która już zniknęła z bazy, bo została sprzedana albo wycofana. Agent nie improwizuje w tym miejscu. Mówi wprost, że oferta jest nieaktualna, i pyta, czy dzwoniący chce usłyszeć o podobnych. Krótsza rozmowa niż dochodzenie do prawdy przez trzy kolejne pytania.",
        ],
      },
      {
        h2: "Pytania, które padają przy każdej ofercie",
        paragraphs: [
          "Niezależnie od tego, czy chodzi o mieszkanie w bloku, czy o dom pod miastem, wraca ten sam zestaw pytań. Agent odpowiada na nie z opisu oferty, bez przełączania do człowieka. Cztery grupy pokrywają większość takich rozmów.",
        ],
        list: [
          "Parametry lokalu: metraż, liczba pokoi, piętro, winda, rok budowy, stan wykończenia.",
          "Koszty poza ceną: czynsz administracyjny, media, forma własności, prowizja biura.",
          "Otoczenie i dojazd: szkoła w pobliżu, komunikacja, parking, zgoda na zwierzęta w budynku.",
          "Termin oglądania: kiedy można obejrzeć lokal i ile trwa samo spotkanie.",
        ],
      },
      {
        h2: "Pytania, na które nie ma odpowiedzi w ogłoszeniu",
        paragraphs: [
          "Reszta pytań nie ma odpowiedzi nigdzie w opisie oferty, a pada w co drugiej rozmowie. „Dlaczego właściciel sprzedaje?” Agent nie zgaduje i nie mówi „chyba się przeprowadzają”. Ma jedno zdanie: „Tego nie mam w karcie oferty, zanotuję pytanie dla agenta prowadzącego”. Przy cenie podobnie: „W ogłoszeniu jest cena wywoławcza, o warunkach rozmawia agent prowadzący”. Ani słowa o tym, czy da się zejść niżej.",
          "Osobno pilnujemy pytania „czy ktoś jeszcze to oglądał”. Kusi, żeby automat podbił zainteresowanie. Nie robimy tego. Agent, który powie „mam już trzech chętnych”, kiedyś trafi na kogoś, kto zapyta o to samo na oględzinach, a wtedy tracicie nie klienta, tylko wiarygodność biura.",
          "Dwie rzeczy agent zatrzymuje dla siebie, choć obie ma w bazie: dokładny adres i numer do właściciela. Jeśli u Was adres podaje się dopiero przy potwierdzaniu terminu, musi to stać w scenariuszu wprost. Model domyślnie odczyta cały rekord, razem z numerem mieszkania.",
        ],
        list: [
          "„Ile wynosi prowizja?” Agent podaje stawkę z Waszego cennika i na tym kończy. Prowizji przez telefon się nie negocjuje.",
          "„To oferta od właściciela czy z biura?” Odpowiedź prosta i zgodna z prawdą, bo dzwoniący filtruje po tym ogłoszenia.",
          "„A da się to wynająć zamiast kupić?” Jeśli najem prowadzicie osobno, agent sprawdza tam, zamiast odsyłać z niczym.",
        ],
      },
      {
        h2: "Kwalifikacja i umówienie oględzin",
        paragraphs: [
          "Sama odpowiedź na pytania o metraż nic Wam jeszcze nie mówi o tym, czy dzwoniący może kupić tę nieruchomość. Do tego służy krótka kwalifikacja, którą agent prowadzi zaraz po ustaleniu, że oferta wciąż interesuje rozmówcę. Cztery pytania wystarczają w większości przypadków, i tyle też zwykle ustalamy z Wami przed wdrożeniem.",
        ],
        list: [
          "Czy zakup będzie gotówkowy, czy z kredytem.",
          "Na jakim etapie jest finansowanie, jeśli kredyt już wstępnie rozpatrzono.",
          "W jakim terminie dzwoniący chce się przeprowadzić.",
          "Czy ma do sprzedania własną nieruchomość.",
        ],
      },
      {
        h2: "Nie każdy telefon jest od kupującego",
        paragraphs: [
          "Scenariusz napisany wyłącznie pod kupującego pęka w pierwszym tygodniu. Dzwonią też właściciele, którzy chcą coś sprzedać, agenci z innych biur i handlowcy. Ile tego jest, w każdym biurze wychodzi inaczej.",
          "Właściciel z nieruchomością do oddania jest wart więcej niż pytanie o cudze ogłoszenie. Agent nie wycenia i nie obiecuje, że biuro ofertę weźmie. Zbiera pięć rzeczy: typ nieruchomości, lokalizację, metraż, oczekiwaną cenę i numer telefonu, a potem zapowiada kontakt z konkretną porą. Pora ma wynikać z Waszego grafiku, nie z uprzejmości.",
          "Agent z innego biura, pytający o współpracę przy ofercie, idzie do człowieka od razu. Telefony handlowe kończymy inaczej, a dzwonią tu często: portale ogłoszeniowe, sesje zdjęciowe, pośrednicy kredytowi. „Nie prowadzę takich rozmów, ofertę proszę wysłać mailem na adres biura”. Bez notatki i bez oddzwaniania.",
        ],
      },
      {
        h2: "Zdania, których agent nie wypowie",
        paragraphs: [
          "Agent w biurze nieruchomości pracuje jako pierwszy kontakt i recepcjonista bazy ofert. Transakcji nie prowadzi, bo tam liczy się coś, czego żaden model nie ma: wyczucie sytuacji i znajomość obu stron. Cztery rodzaje rozmów zostawiamy człowiekowi bez wyjątku.",
        ],
        list: [
          "Negocjacje ceny, bo liczy się w nich wyczucie i znajomość motywacji obu stron.",
          "Doradztwo prawne i podatkowe: stan księgi wieczystej, sprawy spadkowe, podatek od czynności cywilnoprawnych.",
          "Doradztwo kredytowe. Agent pyta o etap finansowania, nie ocenia zdolności ani nie poleca banku.",
          "Rozmowy ze sprzedającym o obniżce ceny albo o przedłużeniu umowy z biurem.",
        ],
      },
      {
        h2: "Po czym agent poznaje, że pora oddać słuchawkę",
        paragraphs: [
          "Poprzednia sekcja mówi, czego agent nie robi. Ta o tym, kiedy ma wyjść z rozmowy prowadzonej dotąd poprawnie. Granicę widać po zdaniu dzwoniącego, nie po temacie wpisanym w scenariusz.",
          "Przekazanie wygląda tu inaczej niż w przychodni, gdzie po drugiej stronie siedzi rejestracja. Agent prowadzący ofertę stoi właśnie w kuchni oglądanego mieszkania i nie odbierze, więc domyślnym trybem jest oddzwonienie: „Mam Pana numer z połączenia, oddzwonimy dziś do osiemnastej”. Cztery sygnały kończą rozmowę z automatem.",
        ],
        list: [
          "Pada konkretna kwota, na przykład „dam czterysta pięćdziesiąt”. To już oferta, a nie pytanie o ofertę.",
          "W rozmowie pojawia się spadek, rozwód, współwłaściciel, komornik albo sprawa w sądzie.",
          "Dzwoni właściciel oferty, którą prowadzicie, w sprawie swojej umowy z biurem.",
          "To samo pytanie wraca trzeci raz. Agent go nie rozumie i czwarta próba niczego nie zmieni.",
        ],
      },
    ],
    takeaways: [
      "Pierwsze pytanie ustala, o którą ofertę chodzi, bo w nieruchomościach rozmowa rzadko dotyczy firmy w ogóle.",
      "Cztery grupy pytań, czyli parametry, koszty, otoczenie i termin, pokrywają większość rozmów o ofertę.",
      "Pytania spoza ogłoszenia, czyli powód sprzedaży, cena i stan prawny, wymagają gotowych zdań, bo model odpowie na nie sam i pewnym tonem.",
      "Kwalifikacja przed umówieniem oględzin mówi Wam, czy dzwoniący realnie może kupić tę nieruchomość.",
      "Negocjacje, doradztwo prawne i kredytowe zostają przy człowieku niezależnie od tego, jak dobrze napisano scenariusz.",
    ],
    faq: [
      {
        q: "Co się dzieje, gdy oferta została już sprzedana?",
        a: "Agent czyta aktualny status z bazy i mówi to wprost, zamiast potwierdzać dostępność mieszkania, którego już nie ma. Pyta też, czy zaproponować podobne oferty z tej samej okolicy.",
      },
      {
        q: "Czy agent umówi oglądanie bez udziału biura?",
        a: "Tak, jeśli termin jest wolny w kalendarzu i dane oferty są aktualne. Agent podaje dwa warianty godzin, potwierdza wybór i zapisuje spotkanie, a Wy dostajecie powiadomienie od razu, nie po fakcie.",
      },
      {
        q: "Jak agent radzi sobie, gdy dzwoniący pyta o kilka ofert naraz?",
        a: "Prowadzi rozmowę po kolei, jedna oferta na raz, i na końcu podsumowuje ustalenia dla każdej z nich. Trzymanie trzech wątków naraz kończy się pomyłkami, więc scenariusz świadomie tego unika.",
      },
      {
        q: "Kto odbiera telefon od właściciela, który chce sprzedać przez Was?",
        a: "Agent zbiera podstawy oferty i numer, a rozmowę o warunkach prowadzi już człowiek. Takie zgłoszenia warto oznaczać osobno, żeby nie leżały w jednej kolejce z pytaniami o metraż.",
      },
      {
        q: "Czy trzeba mieć system CRM, żeby to działało?",
        a: "Potrzebne jest źródło danych, z którego agent odczyta aktualny stan ofert, czy to CRM z API, czy regularnie odświeżany eksport. Bez tego agent operowałby na nieaktualnych danych, a to w tej branży boli bardziej niż brak automatyzacji.",
      },
    ],
    related: [
      { label: "Voicebot dla biura nieruchomości", href: "/branze/voicebot-dla-nieruchomosci" },
      { label: "Skąd voicebot bierze dane", href: "/akademia/skad-voicebot-bierze-dane" },
      { label: "Granice voicebota: kiedy oddać słuchawkę", href: "/akademia/granice-voicebota" },
    ],
  },
];

export const LESSON_SLUGS = LESSONS.map((l) => l.slug);

export function getLesson(slug: string): Lesson | undefined {
  return LESSONS.find((l) => l.slug === slug);
}

/** Lekcje jednej ścieżki, w kolejności numerów. */
export function getTrackLessons(track: TrackId): Lesson[] {
  return LESSONS.filter((l) => (l.track ?? 'podstawy') === track).sort(
    (a, b) => a.number - b.number,
  );
}

export function getTrack(id: TrackId): Track | undefined {
  return TRACKS.find((t) => t.id === id);
}

/**
 * Poprzednia i następna lekcja. Nawigujemy WEWNĄTRZ ścieżki, nie po całej
 * liście: przeskok z ostatniej lekcji podstaw prosto w scenariusz dla
 * przychodni byłby dla czytelnika zgrzytem.
 */
export function getNeighbours(slug: string): { prev?: Lesson; next?: Lesson } {
  const lekcja = getLesson(slug);
  if (!lekcja) return {};
  const rodzenstwo = getTrackLessons(lekcja.track ?? 'podstawy');
  const i = rodzenstwo.findIndex((l) => l.slug === slug);
  if (i === -1) return {};
  return { prev: rodzenstwo[i - 1], next: rodzenstwo[i + 1] };
}

/**
 * Czas czytania liczony z treści, a nie wpisywany ręcznie.
 * 190 słów na minutę to ostrożne tempo dla polskiej prozy biznesowej
 * (polskie słowa są dłuższe niż angielskie, więc typowe 250 zawyżałoby).
 * Liczymy wszystko, co czytelnik faktycznie czyta: zajawkę, nagłówki,
 * akapity, listy, wnioski i FAQ.
 */
const SLOW_NA_MINUTE = 190;

export function readingMinutes(l: Lesson): number {
  const tekst = [
    l.lead,
    ...l.sections.flatMap((s) => [s.h2, ...s.paragraphs, ...(s.list ?? [])]),
    ...l.takeaways,
    ...(l.faq ?? []).flatMap((f) => [f.q, f.a]),
  ].join(' ');
  const slow = tekst.split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.round(slow / SLOW_NA_MINUTE));
}

export const TOTAL_MINUTES = () => LESSONS.reduce((s, l) => s + readingMinutes(l), 0);
