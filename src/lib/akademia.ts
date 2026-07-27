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

export interface Lesson {
  slug: string;
  /** Numer w kursie, używany w nawigacji i danych strukturalnych. */
  number: number;
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** Zajawka pod H1 i na kafelku w hubie. */
  lead: string;
  /** Szacowany czas czytania w minutach. */
  minutes: number;
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
    metaTitle: 'Jak działa voicebot — rozmowa telefoniczna z AI krok po kroku',
    metaDescription:
      'Co się dzieje między słowem klienta a odpowiedzią voicebota: rozpoznanie mowy, model językowy, synteza głosu. Wyjaśniamy, skąd bierze się opóźnienie i co je psuje.',
    lead: 'Różnica między infolinią sprzed dekady a dzisiejszym voicebotem nie polega na lepszym lektorze. Polega na tym, że po drodze ktoś w ogóle rozumie, co mówisz.',
    minutes: 7,
    sections: [
      {
        h2: 'Trzy etapy jednej wypowiedzi',
        paragraphs: [
          'Gdy klient mówi „chciałbym przełożyć wizytę na czwartek”, system wykonuje trzy osobne operacje. Najpierw zamienia dźwięk na tekst. Potem model językowy odczytuje intencję i decyduje, co zrobić. Na końcu odpowiedź wraca zamieniona z powrotem na mowę.',
          'To rozdzielenie ma praktyczne znaczenie, bo każdy etap psuje się inaczej. Zła jakość połączenia uderza w pierwszy, źle opisane zadanie w drugi, a nienaturalna barwa głosu w trzeci. Kiedy klient mówi, że „bot go nie rozumie”, w połowie przypadków chodzi o coś zupełnie innego niż rozumienie.',
        ],
      },
      {
        h2: 'Skąd bierze się opóźnienie',
        paragraphs: [
          'Człowiek w rozmowie telefonicznej zaczyna się niepokoić po mniej więcej sekundzie ciszy. To jest budżet, w którym muszą zmieścić się wszystkie trzy etapy razem z drogą przez sieć.',
          'Dlatego dobrze zbudowany voicebot nie czeka z odpowiedzią, aż przetworzy całe zdanie. Zaczyna mówić, gdy ma pierwszy fragment, podobnie jak człowiek, który wtrąca „tak, sprawdzam”. Ta jedna sztuczka robi większą różnicę w odbiorze niż wymiana modelu na droższy.',
          'Jest też druga strona medalu. Agent, który odpowiada natychmiast na wszystko, brzmi nienaturalnie i przerywa rozmówcy w połowie zdania. Strojenie tego progu to zwykle kilka dni pracy przy wdrożeniu, nie jedno ustawienie.',
        ],
      },
      {
        h2: 'Czego ten łańcuch nie naprawi',
        paragraphs: [
          'Voicebot rozumie mowę i formułuje odpowiedzi, ale nie wie nic o Waszej firmie, dopóki mu tego nie damy. Godziny otwarcia, dostępne terminy, status zamówienia: to wszystko musi przyjść z systemu, który już macie.',
          'Jeśli te dane są rozproszone albo nieaktualne, voicebot będzie je powtarzał z równie dużą pewnością siebie jak te prawidłowe. Uporządkowanie źródła jest częścią wdrożenia, i to zwykle tą, która zajmuje najwięcej czasu.',
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
    ],
    faq: [
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
      'Zanim wydacie złotówkę: jak policzyć połączenia, rozpoznać pytania powtarzalne i sprawdzić, czy voicebot zdejmie realny ciężar. Z listą sytuacji, w których nie warto.',
    lead: 'Najdroższy voicebot to ten, który obsługuje pięć telefonów dziennie. Ta lekcja jest o tym, jak sprawdzić skalę, zanim ktokolwiek zacznie coś budować.',
    minutes: 8,
    sections: [
      {
        h2: 'Policzcie, zanim zapytacie o wycenę',
        paragraphs: [
          'Potrzebne są trzy liczby i da się je zebrać w tydzień. Ile połączeń przychodzi dziennie. Ile z nich zostaje nieodebranych. Ile trwa średnia rozmowa.',
          'Trzecia liczba zaskakuje najczęściej. Firmy zwykle zakładają, że rozmowa trwa dwie minuty, a po sprawdzeniu wychodzi cztery, bo w tych minutach mieści się też szukanie informacji i przepraszanie za czekanie.',
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
          'Powiemy to wprost, bo częściej odradzamy, niż się spodziewacie. Przy kilku telefonach dziennie koszt wdrożenia i utrzymania nie zwróci się w rozsądnym czasie, a Wy dołożycie sobie system do pilnowania.',
          'Druga sytuacja to firma, w której każda rozmowa jest inna. Jeśli po trzech dniach notowania okaże się, że w dwudziestu telefonach było dwadzieścia różnych spraw, to nie ma czego automatyzować. Nie ma tam wzorca, jest doradztwo.',
          'Trzecia, najbardziej podstępna: firma, której klienci dzwonią właśnie dlatego, że chcą usłyszeć konkretną osobę. Automat odbiera wtedy przewagę, za którą ludzie płacą.',
        ],
      },
      {
        h2: 'Prosty test opłacalności',
        paragraphs: [
          'Weźcie liczbę połączeń dziennie, pomnóżcie przez udział pytań z pierwszego kubełka i przez średni czas rozmowy. Wyjdzie liczba godzin miesięcznie, które voicebot mógłby przejąć.',
          'Jeśli wynik to mniej niż kilkanaście godzin, odłóżcie temat i wróćcie, gdy urośnie ruch. Jeśli wychodzi kilkadziesiąt, rozmowa o wdrożeniu ma sens. My zresztą liczymy to samo na pierwszym spotkaniu i mówimy, gdy wynik nie wychodzi.',
        ],
      },
    ],
    takeaways: [
      'Trzy liczby na start: połączenia dziennie, nieodebrane, średni czas rozmowy.',
      'Posortujcie pytania na powtarzalne, wymagające decyzji i takie, które musi wziąć człowiek.',
      'Przy kilku telefonach dziennie albo przy braku powtarzalności voicebot się nie opłaca.',
      'Policzcie godziny do przejęcia. Kilkanaście miesięcznie to za mało, żeby zaczynać.',
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
    minutes: 8,
    sections: [
    {
      h2: "Agent bez granic nie milczy. Zgaduje",
      paragraphs: [
        "System głosowy jest zbudowany po to, żeby produkować sensownie brzmiącą wypowiedź. Jeśli nikt mu nie powiedział, czego ma nie robić, i tak coś powie. W kanale tekstowym ktoś ma szansę to wychwycić, bo widzi zdanie na ekranie i może porównać je z cennikiem albo z regulaminem. Przez telefon takiej szansy nie ma. Słowo pada raz, brzmi rzeczowo, a rozmówca zapisuje je w głowie jako ustalenie z firmą.",
        "Widać to najlepiej przy pytaniach z pogranicza. Klient pyta o rzecz, która w bazie wiedzy istnieje w połowie: cena jest, ale nie dla wariantu, o który pyta. Agent bez opisanych granic sklei brakującą część z tego, co wygląda podobnie, i poda kwotę. Potem ktoś z zespołu tłumaczy przez kwadrans, dlaczego liczba z telefonu nie zgadza się z fakturą.",
        "Koszt takiej sytuacji jest bardzo prozaiczny. Godziny pracy zespołu, jeden zdenerwowany klient i cicha decyzja właściciela, żeby wyłączyć bota na tydzień.",
      ],
    },
    {
      h2: "Cztery progi, przy których rozmowa idzie do człowieka",
      paragraphs: [
        "Granice opisuje się prościej, niż większość osób zakłada. Nie trzeba przewidzieć wszystkich pytań świata ani budować drzewa na dwadzieścia gałęzi. Wystarczy wskazać sytuacje, w których agent kończy swoją część i przełącza rozmowę, bez negocjacji i bez próby ratowania sprawy na własną rękę.",
        "Trzy pierwsze progi są oczywiste dla każdego, kto przez tydzień posłuchał nagrań z infolinii. Czwarty ludzie zwykle pomijają, a to on ratuje najwięcej rozmów. Cierpliwość spada gwałtownie po drugiej prośbie o powtórzenie i wtedy nie ma sensu iść po trzecią.",
        "Progi zapisujemy w dokumencie. Ustalenie na spotkaniu wyparuje po dwóch tygodniach. Prosimy klienta o jedną kartkę: co agent robi sam, czego nie dotyka nigdy, kto odbiera rozmowę po przekazaniu i w jakich godzinach. Ta kartka waży w projekcie więcej niż większość ustawień technicznych.",
      ],
      list: [
        "Rozmówca prosi o człowieka. Jedna prośba wystarczy, bez dopytywania o powód i bez oferowania jeszcze jednej próby.",
        "Pojawia się skarga albo emocje. Ktoś mówi o błędzie firmy, podnosi głos, wraca do sprawy z zeszłego tygodnia.",
        "Rozmowa dotyczy pieniędzy w konkretnej sprawie: zwrotu, korekty faktury, spornej płatności, rozliczenia zaliczki.",
        "Druga nieudana próba zrozumienia tego samego zdania. Trzecie podejście to już strata czasu obu stron.",
      ],
    },
    {
      h2: "Zdanie, które gasi większość problemów",
      paragraphs: [
        "Brzmi banalnie: jeżeli nie masz pewności, powiedz, że sprawdzisz, i przekaż dalej. Jedna reguła załatwia zaskakująco dużo, bo daje agentowi gotowe wyjście w każdej niejasnej sytuacji. Zamiast produkować odpowiedź na siłę, ma ruch, który zawsze jest dopuszczalny.",
        "Ważne jest to, jak ta reguła brzmi w słuchawce. „Nie wiem” zostawia rozmówcę z niczym i kończy rozmowę źle. „Sprawdzę to i połączę Pana z osobą, która zna szczegóły” brzmi jak normalna obsługa. Ta sama informacja, zupełnie inne wrażenie.",
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
    ],
    takeaways: [
    "Agent bez opisanych granic nie przyzna się do niewiedzy. Wygeneruje odpowiedź, która brzmi pewnie i bywa nieprawdziwa.",
    "Ustal cztery twarde progi przekazania: prośba rozmówcy, skarga, sprawa pieniężna, druga nieudana próba zrozumienia.",
    "Reguła „sprawdzę i przekażę dalej” rozwiązuje większość niejasnych sytuacji, o ile agent nie obiecuje przy tym terminów.",
    "Przekazanie bez kontekstu jest gorsze niż brak bota. Klient opowiada swoją sprawę drugi raz i zwykle już nie wraca.",
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
    minutes: 8,
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
        "Powitanie ma zrobić dwie rzeczy: powiedzieć, gdzie się dodzwoniłem i kto mówi, a potem oddać głos rozmówcy. Nic więcej. Każde dodatkowe zdanie o wartościach firmy albo o podnoszeniu jakości obsługi kosztuje sekundy, w których człowiek zaczyna się niecierpliwić.",
        "Informacja o tym, że po drugiej stronie jest asystent AI, musi paść. Wynika to z unijnych przepisów o AI, a termin ich stosowania przypada na 2 sierpnia 2026. Da się to zmieścić bez zgrzytu: „Dzień dobry, tu asystent głosowy przychodni Zdrowie, rozmawia Pan z AI. W czym mogę pomóc?”. Cztery sekundy i temat zamknięty.",
        "Po powitaniu idzie jedno pytanie otwarte, a potem cisza. Ta cisza jest ważniejsza, niż się wydaje. Systemy, które za szybko wchodzą rozmówcy w słowo, psują pierwsze wrażenie mocniej niż sztucznie brzmiąca barwa głosu.",
      ],
    },
    {
      h2: "Pytania otwarte, ale nie za szerokie",
      paragraphs: [
        "„W czym mogę pomóc” jest dobre na start i słabe w środku rozmowy. Kiedy wiadomo już, że chodzi o rezerwację, pytanie musi się zawęzić. Zbyt szerokie pytanie w połowie rozmowy daje odpowiedź, której nie da się zamienić na dane w systemie, a agent zaczyna dopytywać i rozmowa się rozłazi. Zasada jest prosta: im bliżej końca, tym węższe pytanie i tym mniej miejsca na dowolność.",
        "Przed każdą akcją, która zostawia ślad w systemie, agent powtarza ustalenia. Termin, imię, numer telefonu, czasem adres. Jedno zdanie spokojnym tempem i pytanie o potwierdzenie. Kosztuje pięć sekund rozmowy, oszczędza telefon reklamacyjny w przyszłym tygodniu.",
        "Potwierdzanie ma jeszcze jedną funkcję, mniej oczywistą. Daje rozmówcy moment na poprawienie przekręconego nazwiska albo pomylonej cyfry. Rozpoznawanie mowy najczęściej myli się właśnie przy nazwiskach i długich ciągach cyfr, zwłaszcza gdy ktoś dzwoni z ulicy albo z auta.",
      ],
      list: [
        "Zamiast „jakie ma Pan preferencje” zapytaj „na kiedy mam szukać terminu”.",
        "Zamiast „proszę podać dane” pytaj po kolei: najpierw imię i nazwisko, potem numer telefonu.",
        "Zamiast „kiedy Pani pasuje” zaproponuj dwa konkretne terminy i poproś o wybór.",
        "Zamiast „czy coś jeszcze” zapytaj wprost „czy mam zapisać to zgłoszenie”.",
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
    "Powitanie krótkie, z informacją o AI, potem jedno pytanie otwarte i cisza na odpowiedź.",
    "Zawężaj pytania w miarę rozmowy, a przed zapisem czegokolwiek powtórz ustalenia i poproś o potwierdzenie.",
    "Przy dwóch powtarzalnych sprawach albo w hałasie zwykłe menu bywa lepszym wyborem niż rozmowa.",
    ],
    faq: [
    {
      q: "Czy voicebot musi informować, że jest sztuczną inteligencją?",
      a: "Tak. Obowiązek informowania rozmówcy, że rozmawia z AI, wynika z unijnych przepisów o AI, a termin ich stosowania to 2 sierpnia 2026. W praktyce lepiej ustawić to od razu, bo zdanie i tak trzeba będzie dopisać. Przy okazji ludzie, którzy wiedzą, z kim mówią, formułują prośby prościej.",
    },
    {
      q: "Jak długie powinno być powitanie?",
      a: "Kilka sekund. Ma zmieścić nazwę firmy, informację o asystencie AI i pytanie otwarte. Wszystko, co poza tym, rozmówca i tak przestaje słuchać, bo czeka na moment, w którym będzie mógł powiedzieć, po co dzwoni.",
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
    minutes: 8,
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
        "Tempo ustawia się nieco wolniej niż w zwykłej rozmowie. Rozmówca nie widzi twarzy, często jest w ruchu, czasem słabo słyszy. Zbyt szybki asystent zmusza do proszenia o powtórzenie, a każde powtórzenie zbliża rozmowę do progu przekazania do człowieka.",
        "Pauzy bywają ważniejsze od samego tempa. Po pytaniu musi zostać cisza, w której człowiek zdąży zebrać myśli. Dłuższą odpowiedź lepiej rozbić na dwa oddechy, zamiast wyrzucać ją jednym ciągiem.",
        "Osobna sprawa to opóźnienie. Między końcem zdania rozmówcy a początkiem odpowiedzi zawsze coś upływa. Gdy ta przerwa rośnie, ludzie mówią „halo?” i wchodzą agentowi w słowo. Krótkie potwierdzenie w rodzaju „już sprawdzam” potrafi tę dziurę zasypać, o ile nie pada po każdej wypowiedzi, bo wtedy zaczyna brzmieć jak tik.",
      ],
      list: [
        "Numery telefonów i kwoty czytaj wolniej niż resztę zdania, w grupach po dwie albo trzy cyfry.",
        "Po pytaniu zostaw ciszę zamiast dopowiadać podpowiedzi, kiedy rozmówca się zastanawia.",
        "Testuj nagrania na głośniku telefonu w hałaśliwym pomieszczeniu, bo tak dzwoni duża część ludzi.",
        "Sprawdź, jak asystent brzmi przy złym zasięgu, kiedy dźwięk się rwie i tempo zaczyna przeszkadzać.",
      ],
    },
    {
      h2: "Imię, przedstawienie się i spójność z marką",
      paragraphs: [
        "Imię pomaga, bo daje rozmówcy sposób mówienia o asystencie i porządkuje rozmowę. Ma też drugą stronę. Ludzkie imię podane bez wyjaśnienia sugeruje pracownika, a tego chcemy uniknąć. Bezpieczny układ to imię plus rola, na przykład „Ola, asystentka głosowa salonu”.",
        "Informacja, że rozmówca rozmawia z AI, nie jest kwestią stylu. Unijne przepisy o AI nakładają obowiązek poinformowania, a termin ich stosowania to 2 sierpnia 2026. Praktyczny efekt bywa całkiem dobry: ludzie, którzy wiedzą, że mówią do maszyny, formułują prośby prościej i rzadziej irytują się drobnym potknięciem.",
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
    ],
    takeaways: [
    "Barwa głosu ustawia oczekiwania co do kompetencji, zanim padnie pierwsza odpowiedź. Dobieraj ją do branży i do stanu, w jakim dzwonią ludzie.",
    "Tempo nieco wolniejsze niż w zwykłej rozmowie, wyraźna pauza po pytaniu, cyfry czytane grupami.",
    "Imię plus rola i jasna informacja o AI. Obowiązek wynika z unijnych przepisów, termin stosowania to 2 sierpnia 2026.",
    "Bardzo naturalny głos przy prostym bocie działa przeciwko tobie. Neutralna barwa mniej obiecuje i mniej rozczarowuje.",
    ],
    faq: [
    {
      q: "Głos męski czy żeński?",
      a: "Nie mamy na to twardej odpowiedzi i nie ufamy prostym regułom w stylu „w medycynie zawsze kobiecy”. Zwykle proponujemy dwa warianty, puszczamy je na kilkunastu prawdziwych rozmowach i słuchamy, przy którym ludzie mniej dopytują. Ważniejsza od płci głosu bywa jego wyrazistość na słabym połączeniu.",
    },
    {
      q: "Czy asystent może nosić imię pracownika z recepcji?",
      a: "Odradzamy. Rozmówca może uznać, że rozmawia z tą osobą, a to kłóci się z obowiązkiem informowania o AI. Lepiej wybrać imię neutralne i zawsze dodawać rolę, żeby od pierwszego zdania było jasne, kto jest po drugiej stronie.",
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
    metaDescription: "Agent głosowy nie zna Waszej firmy. Sprawdź, z jakich systemów bierze dane, dlaczego jedno źródło prawdy wygrywa z liczbą integracji i kiedy to zawodzi.",
    lead: "Voicebot w dniu uruchomienia nie wie o Was nic. Każda cena, godzina i dostępność musi przyjść z konkretnego systemu, w momencie rozmowy.",
    minutes: 7,
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
        "W zapytaniach ofertowych prawie zawsze pada pytanie, z iloma systemami się integrujemy. Rozumiem, skąd się bierze, ale prowadzi w złą stronę. Ważniejsze jest inne: który system rozstrzyga spór, kiedy dwa pokazują co innego.",
        "Prosty przypadek z warsztatu samochodowego. Na stronie wisi PDF z cennikiem, przegląd za 180 zł. W systemie warsztatowym od czerwca jest inna, wyższa stawka, bo ceny poszły w górę. Agent czyta PDF, bo ktoś uznał, że to najszybsza droga do informacji o cenach. Klient przyjeżdża i przy kasie słyszy inną kwotę. Formalnie racja jest po stronie warsztatu. Praktycznie klient ma w głowie nagranie rozmowy i poczucie, że go wpuszczono w maliny. Jedna taka rozbieżność potrafi skasować efekt kilkudziesięciu poprawnie obsłużonych połączeń.",
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
      h2: "Gdzie ta układanka się sypie",
      paragraphs: [
        "Pierwsza przeszkoda to system bez API. Stary program na jednym komputerze w księgowości, dane wyciągane ręcznym eksportem do pliku. Da się na tym pracować, ale agent operuje wtedy obrazem sprzed kilku godzin albo sprzed doby. Dla rozkładu jazdy to bez znaczenia, bo rozkład zmienia się rzadko. Dla wolnych terminów u fryzjera to już kłopot, bo agent zaproponuje godzinę zajętą rano.",
        "Druga przeszkoda jest trudniejsza, bo nie widać jej w żadnej dokumentacji. Część wiedzy siedzi wyłącznie w głowach zespołu. Że doktor Kowalska nie przyjmuje dzieci poniżej trzeciego roku życia. Że w piątki po piętnastej nie umawiamy pierwszych wizyt, bo nie zdążymy. Nikt tego nie zapisał, bo pani Ania wie. Agent takich reguł nie odgadnie. Ktoś u Was musi usiąść i je spisać, zwykle są to dwie albo trzy godziny rozmów przy kawie, i tej roboty nie przerzucicie na dostawcę.",
        "Czasem wniosek jest niewygodny. Jeśli większość pytań dotyczy rzeczy, których nie ma w żadnym systemie i nie da się ich sensownie opisać, voicebot obsłuży wąski kawałek ruchu. Uczciwie jest wtedy zacząć od uporządkowania danych, a rozmowę o wdrożeniu odłożyć o kwartał. Mówimy to na bezpłatnej pierwszej konsultacji, zanim ktokolwiek podpisze umowę.",
      ],
    },
    ],
    takeaways: [
    "Voicebot nie ma własnej wiedzy o firmie. Każda cena, godzina i dostępność musi przyjść z systemu w chwili rozmowy.",
    "Zanim policzycie integracje, ustalcie, który system rozstrzyga spór. Dwie wersje cennika kończą się reklamacją.",
    "Agent, który cytuje źródło, jest łatwiejszy do sprawdzenia i rzadziej wprowadza rozmówcę w błąd.",
    "Brak API albo wiedza wyłącznie w głowach zespołu to realna przeszkoda, nie drobiazg do dogrania po starcie.",
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
    minutes: 8,
    sections: [
    {
      h2: "Rozmówca ma wiedzieć, z kim rozmawia",
      paragraphs: [
        "Unijne przepisy o AI wprowadzają obowiązek poinformowania człowieka, że rozmawia z systemem sztucznej inteligencji. Termin stosowania to 2 sierpnia 2026. W praktyce zamyka to drogę pomysłom, w których agent udaje pracownika i nikt się do tego nie przyznaje.",
        "Wykonanie jest banalne. Wystarczy pierwsze zdanie powitania: „Dzień dobry, tu automatyczny asystent przychodni Zdrowie”. Nikt nie wymaga czytania regulaminu przez pół minuty. Wymagane jest to, żeby informacja padła na początku i była zrozumiała dla osoby, która dzwoni w biegu, z ulicy, z dzieckiem na ręku.",
        "Właściciele firm często boją się, że ludzie zaczną się rozłączać. Z tego, co obserwujemy przy odbiorach, część rozmówców faktycznie od razu prosi o człowieka. To w porządku i agent powinien umieć takie przełączenie wykonać bez dyskusji. Ukrywanie natury systemu i tak wychodzi po dwóch pytaniach, tylko wtedy klient czuje się oszukany zamiast poinformowany.",
      ],
      list: [
        "Że po drugiej stronie jest system automatyczny",
        "W czyim imieniu ten system odbiera albo dzwoni",
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
        "Administratorem tych danych jest Wasza firma. Dostawca voicebota przetwarza je na Wasze zlecenie i dlatego potrzebna jest umowa powierzenia. Nie podpisujcie jej w ciemno. Powinniście z niej wyczytać, jakie dane obejmuje, w jakim celu, jak długo są trzymane i kto jeszcze ma z nimi styczność.",
        "Hosting utrzymujemy w Polsce albo w chmurze UE, zgodnie z RODO. Głos opieramy na ElevenLabs, więc ten dostawca występuje w łańcuchu jako podprocesor i nie ma sensu tego chować pod dywan. Stosujemy standardy bezpieczeństwa zgodne z normą ISO 27001, natomiast certyfikatu ISO nie posiadamy i nie będziemy tego przedstawiać inaczej. Jeśli ktoś na rynku obiecuje Wam certyfikat, poproście o numer i jednostkę certyfikującą.",
      ],
      list: [
        "Zakres danych, które trafiają do systemu, i cel ich przetwarzania",
        "Lista podprocesorów: dostawca głosu, telefonia, hosting",
        "Okres przechowywania nagrań oraz transkrypcji",
        "Sposób zgłaszania naruszeń i czas reakcji dostawcy",
      ],
    },
    {
      h2: "Czego ta lekcja nie załatwia",
      paragraphs: [
        "To nie jest porada prawna. Piszemy z perspektywy firmy, która wdraża agentów głosowych, a nie kancelarii. Przy wątpliwościach pytajcie własnego prawnika albo inspektora ochrony danych, bo tylko oni znają Wasz kontekst, dotychczasowe klauzule i zgody, które już zbieracie.",
        "Są sytuacje, w których samodzielna ocena jest ryzykowna. Dane o zdrowiu. Windykacja. Rekrutacja. Połączenia wychodzące do osób, które nie zostawiły zgody na kontakt telefoniczny. W tej ostatniej sprawie wchodzą jeszcze przepisy telekomunikacyjne i te o marketingu bezpośrednim, więc samo RODO nie wystarczy jako punkt odniesienia.",
        "Nie chcę tym straszyć, bo skala problemu bywa wyolbrzymiana. Typowe wdrożenie na infolinii przychodzącej wymaga czterech rzeczy: poprawionego powitania, informacji o nagrywaniu, umowy powierzenia i decyzji o retencji. To praca na jedno popołudnie, o ile ktoś się nią zajmie. Robi się z tego problem dopiero wtedy, gdy wszyscy o niej zapomną i przypomną sobie po pierwszej skardze.",
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
    metaDescription: "Co zmierzyć przed startem voicebota, na co patrzeć po uruchomieniu i dlaczego odsetek odebranych połączeń niczego nie mówi. Plus sygnały do wycofania.",
    lead: "Voicebot bez pomiaru zamienia się w rozmowę o wrażeniach. Pokazuję, co zebrać przed startem, co oglądać potem i po czym poznać, że lepiej się wycofać.",
    minutes: 8,
    sections: [
    {
      h2: "Zmierzcie stan sprzed startu, bo drugi raz go nie zobaczycie",
      paragraphs: [
        "Zanim agent odbierze pierwsze połączenie, zbierzcie cztery liczby. Ile telefonów tygodniowo wpada na główny numer i o których godzinach. Ile z nich nikt nie odbiera. Ile trwa średnia rozmowa. Które dwa albo trzy pytania powtarzają się najczęściej. Do pierwszych trzech wystarczy billing od operatora, do czwartej dwa tygodnie kartki przy telefonie w recepcji.",
        "Po uruchomieniu tego stanu już nie odtworzycie i to jest cały problem. Ruch się zmienia. Ludzie, którzy wcześniej rezygnowali po czwartym sygnale, teraz się dodzwaniają, więc liczba obsłużonych spraw rośnie z powodu, który nie ma nic wspólnego z jakością agenta. Bez punktu odniesienia zostaje porównywanie nowych danych z pamięcią, a pamięć jest łaskawa dla decyzji, które sami podjęliśmy.",
        "Powiem szczerze: sporo firm startuje bez tego pomiaru, także u nas. Potem, po trzech miesiącach, pada pytanie „czy to się opłaciło” i nie ma z czym zestawić odpowiedzi. Zostaje wrażenie recepcji, że jest spokojniej. Bywa, że to dobry sygnał, tylko nikt nie zbuduje na nim decyzji o rozszerzeniu wdrożenia na drugi oddział.",
      ],
    },
    {
      h2: "Co oglądać po uruchomieniu",
      paragraphs: [
        "Po starcie liczy się jedno pytanie: ile spraw zostało załatwionych do końca bez udziału człowieka. Wokół niego układa się reszta. Warto rozbić to na kilka pozycji, bo sama średnia potrafi ukryć problem, który powtarza się codziennie o tej samej porze.",
        "Osobno warto pilnować metryki, która nic nie mówi, a świetnie wygląda w raporcie. „Odebranych 100 procent połączeń” mierzy tyle, że system istnieje i się nie wywrócił. Automat zawsze odbierze. W tej samej rodzinie jest liczba obsłużonych rozmów podana bez informacji, ile z nich skończyło się czymkolwiek konkretnym.",
        "Eskalacja do człowieka nie jest porażką. Agent, który po dwóch nieudanych próbach zrozumienia przełącza rozmowę dalej, zachowuje się poprawnie. Niepokoić powinny dwie inne rzeczy: eskalacja przy pytaniu, które agent miał obsługiwać od pierwszego dnia, oraz cicha porażka, czyli rozmówca odkłada słuchawkę, a statystyka zapisuje rozmowę jako zakończoną.",
      ],
      list: [
        "Rozmowy domknięte bez przełączenia, liczone tylko wtedy, gdy sprawa faktycznie została załatwiona",
        "Eskalacje z podziałem na powód: agent nie zrozumiał, zabrakło danych w systemie, rozmówca od razu poprosił o człowieka, sprawa wykraczała poza zakres",
        "Rozłączenia w pierwszych kilkunastu sekundach, bo to zwykle reakcja na samo powitanie",
        "Sprawy powracające, czyli ten sam numer dzwoniący drugi raz w tej samej sprawie w ciągu doby",
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
      h2: "Sygnały, że trzeba się wycofać",
      paragraphs: [
        "Wycofanie się jest normalną opcją i lepiej mieć ją z tyłu głowy od początku. Pierwszy sygnał: odsetek eskalacji nie spada po dwóch albo trzech rundach poprawek, mimo że każda runda miała konkretny powód. Drugi: klienci zaczynają narzekać wprost, nie w ankiecie, tylko w rozmowie z pracownikiem. Trzeci jest najcichszy, bo pracownicy po prostu zaczynają obchodzić system i podawać znajomym bezpośredni numer.",
        "Druga kategoria wygląda inaczej. Agent działa poprawnie, tylko nie ma czego obsługiwać. Kilkanaście połączeń tygodniowo, każde w innej sprawie, żadnego powtarzalnego wzorca. Przy wdrożeniu od 5 000 zł netto i stałym utrzymaniu taka matematyka się nie domknie. Lepiej powiedzieć to sobie w trzecim miesiącu niż w trzecim roku.",
        "Rzadko trzeba wyłączać wszystko. Zwykle sensowniejsze jest cofnięcie się o krok: zostawić agenta na wieczory i weekendy, a dzień oddać ludziom. Albo zawęzić go do jednej sprawy, w której radzi sobie dobrze, choćby do samego umawiania wizyt. Wąski agent, który działa, jest wart więcej niż szeroki, którego wszyscy omijają.",
      ],
    },
    ],
    takeaways: [
    "Przed startem zbierzcie liczbę połączeń, nieodebrane, średni czas rozmowy i najczęstsze pytania. Po uruchomieniu tego stanu nie odtworzycie.",
    "Odsetek odebranych połączeń niczego nie mówi. Liczy się, ile spraw zamknięto bez człowieka i co poszło nie tak w pozostałych.",
    "Dziesięć odsłuchanych rozmów tygodniowo pokazuje więcej niż tabela z liczbami, zwłaszcza gdy słucha ktoś z pierwszej linii.",
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
      a: "Da się oszacować, jeśli wiecie, ile czasu zespół spędzał wcześniej na powtarzalnych rozmowach. Wystarczy przemnożyć ten czas przez koszt godziny pracy. Bez danych sprzed wdrożenia zostaje szacunek na wyczucie i właśnie dlatego pomiar przed startem tak się opłaca.",
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
    minutes: 8,
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
      h2: "Plan wycofania, czyli co robimy, gdy zapali się czerwona lampka",
      paragraphs: [
        "Zanim voicebot odbierze pierwsze połączenie, powinny być ustalone dwie sprawy: kto może zdecydować o wyłączeniu i ile to zajmuje. Przy naszych wdrożeniach powrót do poprzedniego układu trwa minuty, a nie dni, bo bot siedzi na przekierowaniu numeru i nie zastępuje centrali. To celowa decyzja projektowa i radzimy jej pilnować niezależnie od tego, kto wdraża.",
        "Wyłączenie warto przećwiczyć na sucho przed startem. Ktoś z zespołu je wykonuje, ktoś inny dzwoni i sprawdza, czy naprawdę odbiera człowiek. Brzmi trywialnie i właśnie dlatego bywa pomijane. Potem okazuje się, że dostęp do panelu ma jedna osoba, akurat na urlopie.",
        "Trzeba się też umówić, co jest powodem do wyłączenia. Kilka rozmów, w których bot nie zrozumiał pytania, to normalny pierwszy tydzień i nie ma sensu na to reagować paniką. Skarga od kogoś, kto w pilnej sprawie nie mógł dodzwonić się do człowieka, należy do innej kategorii i reakcja powinna być natychmiastowa.",
      ],
    },
    {
      h2: "Pierwszy tydzień i granice tego podejścia",
      paragraphs: [
        "Po starcie kusi, żeby poprawiać scenariusz po każdej nieudanej rozmowie. Radzimy odwrotnie. Przez pierwszy tydzień głównie słuchać, notować i zbierać. Zmiany wprowadzane na gorąco, po jednym telefonie, potrafią zepsuć ścieżki, które do tej pory działały bez zarzutu.",
        "Konkret z praktyki: zawsze pojawia się grupa pytań, których nikt nie przewidział przy projektowaniu. W przychodni to pytania o parking i o to, czy trzeba przyjść na czczo. W transporcie o to, czy do autobusu można wnieść rower. Takich rzeczy nie wymyśli się przy stole, one wychodzą z nagrań.",
        "Uczciwie o cenie tego podejścia. Wdrożenie trwa dłużej, bo między etapami czeka się na dane, a nie na programistów, i firma, która chciała mieć temat z głowy w dwa tygodnie, musi się z tym pogodzić. Jest też pułapka w samych wynikach. Nocne rozmowy są krótsze i bardziej rzeczowe niż te z poniedziałkowego szczytu, więc dobre liczby z pierwszego etapu niczego nie gwarantują w drugim. To argument za tym, żeby drugiego etapu nie przeskakiwać, nawet jeśli wszystko wygląda świetnie.",
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
    "Zaczynaj od godzin, w których alternatywą dla bota jest nieodebrany telefon. Ryzyko jest wtedy najmniejsze, a korzyść widać od razu.",
    "Plan wycofania ustal przed startem i przetestuj go na sucho, razem z listą osób, które mogą go uruchomić.",
    "Przez pierwszy tydzień odsłuchuj rozmowy i notuj nieprzewidziane pytania, zamiast przerabiać scenariusz po każdym telefonie.",
    "Zatrzymanie się na drugim etapie na stałe jest normalnym wynikiem wdrożenia, nie jego porażką.",
    ],
    faq: [
    {
      q: "Jak długo powinien trwać pierwszy etap?",
      a: "Liczy się go w tygodniach, nie w dniach. Chodzi o to, żeby uzbierać na tyle rozmów, by zobaczyć powtarzalne wzorce zamiast przypadków. Przy mniejszych wdrożeniach, które realizujemy w 2 do 4 tygodni, pierwszy etap to zwykle kilkanaście dni normalnego ruchu wieczornego i weekendowego. Przy większych projektach, gdzie całość zajmuje od miesiąca do trzech, etapy są odpowiednio dłuższe.",
    },
    {
      q: "Czy klientom przeszkadza, że raz odbiera bot, a raz człowiek?",
      a: "W praktyce rzadko. Ludzie są przyzwyczajeni, że po godzinach obsługa wygląda inaczej niż w środku dnia. Ważniejsze jest, żeby bot na wstępie powiedział, że jest automatem, i żeby dało się poprosić o kontakt z człowiekiem następnego dnia. Od 2 sierpnia 2026 informowanie rozmówcy, że rozmawia z AI, wynika wprost z unijnych przepisów.",
    },
    {
      q: "Co jeśli po pierwszym etapie widać, że bot sobie nie radzi?",
      a: "Wtedy pierwszy etap zrobił dokładnie to, po co był. Zostaje decyzja: poprawiamy scenariusz i dane, na których bot się opiera, albo ograniczamy jego rolę do prostszych spraw. Jest też trzecie wyjście, czyli rezygnacja. Kosztuje mniej niż utrzymywanie przez rok czegoś, co irytuje dzwoniących.",
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
    minutes: 8,
    sections: [
    {
      h2: "Błędy, które widać od pierwszego dnia",
      paragraphs: [
        "Ta grupa błędów ma wspólną cechę. Daje o sobie znać natychmiast i psuje wrażenie u pierwszych kilkuset rozmówców. Naprawić się je da, tylko opinia zdąży się rozejść.",
        "Najdroższy z tej czwórki jest pierwszy. Bot, który nie umie oddać rozmowy człowiekowi, zamienia drobną niedogodność w utraconego klienta, i to bez żadnego sygnału ostrzegawczego. Prawie nikt nie dzwoni po to, żeby złożyć skargę na automat. Ludzie po prostu przestają dzwonić. Traktujemy ścieżkę do konsultanta jako warunek uruchomienia i sprawdzamy ją przed każdym startem.",
      ],
      list: [
        "Brak ścieżki do człowieka. Rozmówca, który nie może przerwać bota i poprosić o konsultanta, rozłącza się i dzwoni gdzie indziej. Powiedz na wejściu, że w każdej chwili można poprosić o człowieka, i zadbaj, żeby po przełączeniu nikt nie musiał podawać swoich danych drugi raz.",
        "Przełączenie całego ruchu w jeden dzień. Wszystkie braki scenariusza wychodzą naraz i na największej możliwej próbce. Zacznij od godzin, w których alternatywą jest nieodebrany telefon, i dokładaj ruch stopniowo.",
        "Start na nieuporządkowanych danych. Jeśli cennik istnieje w trzech wersjach, a grafik w zeszycie, bot będzie powtarzał ten bałagan setki razy dziennie. Uporządkuj to, co ma czytać, zanim odbierze pierwsze połączenie. Ta praca zwykle zajmuje więcej czasu niż budowa samego bota.",
        "Brak testu na własnym numerze. Zadzwoń sam, z ulicy, przy włączonym radiu, tak jak dzwonią klienci. Większość wpadek słychać w pierwszych piętnastu sekundach.",
      ],
    },
    {
      h2: "Błędy, które wychodzą dopiero po miesiącu",
      paragraphs: [
        "Pierwszy z nich to udawanie człowieka. Kusi, bo głos brzmi naturalnie, a skoro nikt nie pyta, to część firm uznaje, że nie trzeba mówić. Kłopot zaczyna się, gdy rozmówca zorientuje się sam, a orientuje się prawie zawsze. Poczucie, że ktoś próbował go nabrać, zostaje na dłużej niż irytacja automatem. Do tego od 2 sierpnia 2026 obowiązek poinformowania, że rozmowa jest prowadzona ze sztuczną inteligencją, wynika z unijnych przepisów o AI. Jedno zdanie na początku załatwia sprawę.",
        "Drugi błąd to mierzenie liczby obsłużonych rozmów. Wygląda dobrze w raporcie i nie mówi prawie nic. Bot może odebrać tysiąc połączeń i w połowie z nich niczego nie załatwić, bo ludzie oddzwonili później do biura. Patrz na sprawy zamknięte bez udziału zespołu, na odsetek próśb o człowieka i na to, ile telefonów wraca w ciągu doby. Te liczby bywają nieprzyjemne i są prawdziwe.",
        "Trzeci jest cichy: po pierwszym miesiącu nikt już nie odsłuchuje rozmów. Wdrożenie działa, więc przestaje kogokolwiek obchodzić, a firma się zmienia. Nowa usługa, inne godziny, podniesiony cennik. Bot mówi po staremu jeszcze przez pół roku. Kwartalny przegląd kilkunastu nagrań wystarczy, żeby to wyłapać.",
      ],
    },
    {
      h2: "Błędy po stronie firmy, nie technologii",
      paragraphs: [
        "Brak właściciela projektu. Voicebot bez jednej osoby odpowiedzialnej po stronie zamawiającego rozmywa się między działami. Pytania od nas trafiają na skrzynkę, na którą patrzy pięć osób i żadna nie czuje się zobowiązana odpowiedzieć. Wdrożenia, które szły najciężej, wyglądały dokładnie tak. Wystarczy jedna osoba z decyzyjnością i godziną tygodniowo.",
        "Automatyzowanie rozmów, które wymagają empatii. Odwołanie wizyty, sprawdzenie godziny odjazdu, umówienie przeglądu, potwierdzenie rezerwacji: to zadania dla bota. Informacja o wyniku badania, reklamacja po nieudanej usłudze, telefon od kogoś roztrzęsionego: to zadania dla człowieka. Technicznie voicebot poradzi sobie z każdą z tych rozmów. Nie o technikę tu chodzi.",
        "Zdarza się też błąd odwrotny, rzadszy i kosztowny. Firma kupuje voicebota, a stare menu tonowe zostawia jako pierwszą warstwę. Dzwoniący przechodzi przez cztery poziomy wyboru cyframi, żeby dotrzeć do automatu, z którym mógł od razu po prostu porozmawiać. Jeśli wdrażasz bota, IVR w większości przypadków powinien zniknąć.",
      ],
    },
    {
      h2: "Kiedy najlepszą decyzją jest nie wdrażać",
      paragraphs: [
        "Ta lekcja zamyka kurs, więc powiemy rzecz, której zwykle nie mówi firma sprzedająca wdrożenia. Voicebot nie ma sensu wszędzie i wcale nie tak rzadko go odradzamy.",
        "Jeśli odbieracie kilkanaście telefonów dziennie i nikt nie czeka w kolejce, wdrożenie od 5 000 zł netto plus utrzymanie od 249 zł netto miesięcznie nie zwróci się w rozsądnym czasie. Jeśli każda rozmowa jest inna i opiera się na wiedzy, której nie da się spisać, bot będzie przeszkadzał obu stronom. Jeśli w firmie nie ma nikogo, kto się tym zajmie, lepiej poczekać, aż taka osoba się znajdzie.",
        "Jeżeli po dziesięciu lekcjach wyszło Ci, że u Ciebie to się nie opłaca, kurs zadziałał tak, jak miał zadziałać. Lepiej stracić kilka godzin na czytanie niż kilkanaście tysięcy na system, który będzie się kurzył. A jeśli wyszło odwrotnie, pierwsza konsultacja jest bezpłatna i można na niej zadać dokładnie te pytania, które nasunęły się po drodze.",
      ],
    },
    ],
    takeaways: [
    "Ścieżka do człowieka jest warunkiem uruchomienia, a nie dodatkiem. Bot, który nie oddaje rozmowy, kosztuje klientów.",
    "Uporządkuj dane, które bot ma czytać, zanim odbierze pierwsze połączenie. To zwykle dłuższa część pracy niż budowa bota.",
    "Mierz sprawy zamknięte bez udziału zespołu i telefony powracające w ciągu doby, a nie liczbę odebranych połączeń.",
    "Wniosek, że voicebot u Ciebie się nie opłaca, jest pełnoprawnym efektem tego kursu.",
    ],
    faq: [
    {
      q: "Który z tych błędów zdarza się najczęściej?",
      a: "Brak ścieżki do człowieka oraz bałagan w danych. Pierwszy bierze się z chęci zautomatyzowania wszystkiego, drugi z założenia, że bot jakoś sobie poradzi z informacjami rozrzuconymi po kilku miejscach. Oba da się usunąć jeszcze przed startem, jeśli ktoś o nich w porę pomyśli.",
    },
    {
      q: "Czy naprawdę trzeba mówić, że to AI, skoro rozmówcy i tak słyszą?",
      a: "Tak. Poza tym, że to zwykła uczciwość wobec dzwoniącego, od 2 sierpnia 2026 obowiązek informowania o kontakcie ze sztuczną inteligencją wynika z unijnych przepisów. W praktyce to jedno zdanie na początku rozmowy. Nie spotkaliśmy się z tym, żeby ktoś się na nie skarżył.",
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
];

export const LESSON_SLUGS = LESSONS.map((l) => l.slug);

export function getLesson(slug: string): Lesson | undefined {
  return LESSONS.find((l) => l.slug === slug);
}

/** Poprzednia i następna lekcja, do nawigacji na dole strony. */
export function getNeighbours(slug: string): { prev?: Lesson; next?: Lesson } {
  const i = LESSONS.findIndex((l) => l.slug === slug);
  if (i === -1) return {};
  return { prev: LESSONS[i - 1], next: LESSONS[i + 1] };
}

export const TOTAL_MINUTES = () => LESSONS.reduce((s, l) => s + l.minutes, 0);
