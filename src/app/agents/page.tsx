'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  ArrowRight, 
  CheckCircle2,
  Menu,
  X,
  Cpu,
  Users,
  Building2,
  Clock,
  DollarSign,
  Sparkles,
  Zap,
  Shield,
  BarChart3,
  Bot,
  Brain,
  Globe,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Send,
  TrendingUp,
  Target,
  UsersRound,
  Megaphone,
  Wallet,
  AlertCircle,
  CheckCircle,
  FileText,
  Calendar,
  Bell,
  BarChart,
  MessageCircle,
  Eye,
  CalendarDays,
  PhoneCall,
  Building,
  ArrowDown
} from 'lucide-react';

import SplitText from '@/components/react-bits/SplitText';
import FadeIn from '@/components/react-bits/FadeIn';
import { Ripple } from '@/components/react-bits/Ripple';
import AnimatedGradient from '@/components/react-bits/AnimatedGradient';
import Beams from '@/components/react-bits/Beams';
import Aurora from '@/components/react-bits/Aurora';
import Particles from '@/components/react-bits/Particles';
import SpotlightCard from '@/components/react-bits/SpotlightCard';
import TiltedCard from '@/components/react-bits/TiltedCard';
import Accordion from '@/components/react-bits/Accordion';
import ShinyText from '@/components/react-bits/ShinyText';
import AnimatedCounter from '@/components/react-bits/AnimatedCounter';
import { cn } from '@/lib/utils';

// Agent Stats Data
const AGENT_STATS = {
  hr: {
    title: 'Dział HR',
    color: '#3b82f6',
    gradient: 'from-blue-500 to-cyan-500',
    stats: [
      { value: 'CV', suffix: '', label: 'wstępna selekcja' },
      { value: 'FAQ', suffix: '', label: 'urlopy, regulaminy' },
      { value: '24/7', suffix: '', label: 'także w nocy' },
    ]
  },
  marketing: {
    title: 'Marketing',
    color: '#ec4899',
    gradient: 'from-pink-500 to-purple-500',
    stats: [
      { value: 'Szkice', suffix: '', label: 'po kilkanaście wersji' },
      { value: 'Raport', suffix: '', label: 'w stałym formacie' },
      { value: 'SEO', suffix: '', label: 'opisy i meta tagi' },
    ]
  },
  sales: {
    title: 'Sprzedaż',
    color: '#10b981',
    gradient: 'from-green-500 to-emerald-500',
    stats: [
      { value: 'Lead', suffix: '', label: 'odpowiedź w minutę' },
      { value: 'Termin', suffix: '', label: 'wpis do kalendarza' },
      { value: 'Notatka', suffix: '', label: 'po każdej rozmowie' },
    ]
  }
};

const HR_AUTOMATION = [
  { area: 'Ewidencja i papiery', time: 'codziennie', potential: 'Weźmie' },
  { area: 'Czytanie CV', time: 'przy rekrutacji', potential: 'Weźmie wstępnie' },
  { area: 'Pytania o urlopy i wypłaty', time: 'codziennie', potential: 'Weźmie' },
  { area: 'Pilnowanie badań i szkoleń', time: 'co miesiąc', potential: 'Weźmie' },
];

const HR_FEATURES = [
  { title: 'Wstępna selekcja CV', desc: 'Agent czyta wszystkie aplikacje i układa listę według kryteriów, które sam wpisałeś w ogłoszeniu. Nikogo nie odrzuca. Kogo zaprosić, decyduje człowiek.', stats: ['potrzebny opis stanowiska', 'nie odrzuca sam'], color: 'blue' },
  { title: 'Pytania pracowników', desc: 'Ile mam urlopu, kiedy przelew, gdzie jest wniosek o opiekę. Agent odpowiada z regulaminu, a jak czegoś w regulaminie nie ma, mówi że nie wie i przekazuje sprawę dalej.', stats: ['odpowiada z dokumentu', 'nie zgaduje'], color: 'blue' },
  { title: 'Onboarding', desc: 'Komplet dokumentów pierwszego dnia, przypomnienia o szkoleniach, zgłoszenie do IT o dostępy. Samych uprawnień agent nie nadaje, to zostaje po stronie administratora.', stats: ['zgłasza, nie nadaje'], color: 'blue' },
  { title: 'Dokumenty z szablonu', desc: 'Umowa, aneks, zaświadczenie o zatrudnieniu. Agent wypełnia szablon danymi z systemu kadrowego. Jeśli szablonu nie ma, najpierw trzeba go napisać i to jest osobna robota na kilka dni.', stats: ['wymaga szablonu', 'podpis po waszej stronie'], color: 'blue' },
  { title: 'Terminy', desc: 'Badania lekarskie, BHP, koniec umowy na czas określony. Agent przypomina z wyprzedzeniem tej osobie, która ma to załatwić. Wizyty u lekarza nie umówi.', stats: ['przypomina', 'nie umawia za ciebie'], color: 'blue' },
  { title: 'Raporty kadrowe', desc: 'Stan zatrudnienia, rotacja, absencje, zawsze w tym samym formacie i o tej samej porze. Liczby będą tak dobre, jak dane w systemie. Bałaganu agent nie posprząta.', stats: ['tylko z waszych danych'], color: 'blue' },
];

const HR_MEASURE = [
  { label: 'Ile czasu idzie na papiery', how: 'Przez dwa tygodnie zapisujcie minuty. Bez tego nie masz punktu odniesienia i po wdrożeniu każdy będzie miał inne wrażenie.' },
  { label: 'Ile trwa odpowiedź na pytanie pracownika', how: 'Od maila do odpowiedzi, w godzinach. To akurat zmienia się od razu i widać to bez tabelki.' },
  { label: 'Które pytania wracają co miesiąc', how: 'Te same pytania w kółko to najlepszy kandydat na pierwszy zakres agenta. Reszta może poczekać.' },
  { label: 'Ile terminów uciekło w zeszłym roku', how: 'Policz z kalendarza. Jeśli wyszło zero, agent od terminów nie jest wam do niczego potrzebny.' },
];

const HR_SPLIT = [
  { before: 'Czyta 200 CV i opisuje je według kryteriów', after: 'Decyduje, kogo zaprosić' },
  { before: 'Odpowiada, ile komu zostało urlopu', after: 'Rozmawia z kimś, kto chce odejść' },
  { before: 'Wypełnia zaświadczenie z szablonu', after: 'Podpisuje i bierze za to odpowiedzialność' },
  { before: 'Przypomina o kończącym się badaniu', after: 'Ustala, co zrobić, gdy termin już minął' },
];

const MARKETING_TASKS = [
  { metric: 'Posty na social media', agent: 'Pisze kilkanaście wersji z waszych materiałów', human: 'Wybór, skrót, publikacja', verdict: 'Warto' },
  { metric: 'Opisy produktów', agent: 'Uzupełnia braki według szablonu', human: 'Sprawdzenie danych technicznych', verdict: 'Warto' },
  { metric: 'Newsletter', agent: 'Robi wersję roboczą i warianty tematu', human: 'Redakcja, bo agent lubi ogólniki', verdict: 'Warto' },
  { metric: 'Raport z kampanii', agent: 'Zbiera liczby i pisze suchy komentarz', human: 'Wnioski i decyzja o budżecie', verdict: 'Warto' },
  { metric: 'Teksty na stronę główną', agent: 'Proponuje szkic', human: 'Zwykle przepisanie od zera', verdict: 'Zależy' },
  { metric: 'Wypowiedź w imieniu zarządu', agent: 'Nie ma o tym pojęcia', human: 'Wszystko', verdict: 'Nie' },
];

const SALES_FUNCTIONS = [
  { icon: CheckCircle2, title: 'Pytania kwalifikujące' },
  { icon: Calendar, title: 'Umawianie spotkań' },
  { icon: PhoneCall, title: 'Przypomnienia' },
  { icon: MessageCircle, title: 'Odpowiedzi na pytania' },
  { icon: Eye, title: 'Notatka po rozmowie' },
];

const OBJECTIONS = [
  {
    q: 'A jak agent coś zmyśli?',
    a: 'Zdarza się, to jest wpisane w tę technologię i zera nikt ci nie obieca. Da się natomiast zejść do poziomu, na którym pomyłka jest widoczna i tania. Odpowiedzi podpinamy pod konkretne dokumenty, a przy braku źródła agent ma powiedzieć, że nie wie, i oddać sprawę człowiekowi. Przez pierwsze tygodnie ktoś u was i tak musi te odpowiedzi czytać.'
  },
  {
    q: 'Co z danymi osobowymi?',
    a: 'Dane kadrowe to dane osobowe, więc przed startem ustalamy, co w ogóle wchodzi do agenta, gdzie to leży i kto ma dostęp. Standardy bezpieczeństwa trzymamy zgodne z normą ISO 27001, ale certyfikatu ISO nie posiadamy i nie będziemy udawać, że jest inaczej.'
  },
  {
    q: 'Ludzie to zbojkotują.',
    a: 'Czasem tak. Najczęściej wtedy, gdy agent zaczyna oceniać ludzi albo gdy nikt im nie powiedział, po co go wstawiono. Kiedy przejmuje papiery, których i tak nikt nie lubi, opór jest znikomy.'
  },
  {
    q: 'Czy to zastąpi etat?',
    a: 'Nie w tym, co robimy. Agent zdejmuje część zadań z osoby, która ma ich za dużo. Jeśli plan jest taki, żeby po wdrożeniu kogoś zwolnić, powiedz to na pierwszej rozmowie, bo wtedy rozmawiamy o zupełnie innym projekcie i inaczej liczymy ryzyko.'
  },
  {
    q: 'Na czym to jest zbudowane?',
    a: 'Agentów budujemy na OpenClaw. Nie jesteśmy jego oficjalnym partnerem, po prostu na nim pracujemy. Model językowy dobieramy do zadania, bo do przeczytania dwustu CV sprawdza się co innego niż do pisania tekstów.'
  },
  {
    q: 'Ile to trwa?',
    a: 'Zależy od punktu startowego i tego akurat nie da się uczciwie wycenić z góry na stronie. Na bezpłatnej konsultacji zwykle wychodzi, że jedno z trzech zadań, o których myślisz, w ogóle się do tego nie nadaje. Lepiej dowiedzieć się o tym przed fakturą niż po.'
  },
];

const BEFORE_START = [
  'Jedno miejsce, w którym leżą dane. Jeśli umowy są w trzech folderach i w czyjejś skrzynce, wdrożenie zaczyna się od sprzątania, nie od AI.',
  'Spisany proces, choćby na jednej kartce. Agent nie odgadnie zasady, której nikt nigdy nie zapisał, bo wszyscy ją znają.',
  'Osoba, która może powiedzieć nie. Bez niej projekt stoi na akceptacjach i rośnie w nieskończoność.',
  'Zgoda na to, że przez pierwszy miesiąc ktoś czyta odpowiedzi agenta i je poprawia. To nie jest wdrożenie w tydzień i potem cisza.',
  'Decyzja, co się dzieje, gdy agent nie wie. Domyślnie ma powiedzieć, że nie wie, i przekazać sprawę człowiekowi.',
];

const NOT_WORTH_IT = [
  'Zadanie robicie raz na kwartał. Nie ma czego automatyzować, a utrzymanie płacisz co miesiąc.',
  'Proces zmienia się co kilka tygodni. Agent będzie ciągle nieaktualny i poprawki zjedzą całą oszczędność.',
  'Wiedza siedzi w głowie jednej osoby i nigdzie indziej. Najpierw trzeba ją spisać, a to jest projekt sam w sobie.',
  'Szukasz kogoś, kto weźmie odpowiedzialność za decyzję. Agent jej nie weźmie, my za niego też nie.',
  'Chodzi o zwolnienie ludzi od przyszłego miesiąca. Tak to nie działa, agent przejmuje zadania, nie etaty.',
];

// Hero
function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
      <Beams color="#6366f1" density={20} speed={4} />
      <Particles quantity={25} color="#818cf8" speed={0.8} />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <FadeIn direction="down" delay={0.2}>
          <div className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
            Agenci AI w HR, marketingu i sprzedaży
          </div>
        </FadeIn>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-[#0B0F2E]">
          <SplitText
            text="Agent bierze powtarzalną robotę"
            tag="span"
            className="block mb-2"
            duration={1}
            delay={80}
          />
          {/* Spacja jest tu potrzebna, choć wizualnie nic nie wnosi: oba człony
              są blokami, więc bez niej tekst H1 skleja się w wyszukiwarce
              w "robotęResztę" i traci sens jako fraza. */}
          {' '}
          <ShinyText text="Resztę robicie wy" />
        </h1>

        <FadeIn delay={0.5}>
          <p className="text-xl text-[#1A2461] mb-8 max-w-3xl mx-auto">
            Trzy działy i w każdym to samo: co agent AI naprawdę zrobi, czego nie zrobi
            i kiedy nie warto go w ogóle stawiać. Bez liczb, których nie zmierzyliśmy u ciebie.
          </p>
        </FadeIn>

        <FadeIn delay={0.7}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Ripple className="dark-scope px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-lg">
              Zobacz, co agent robi
            </Ripple>
            <button className="px-8 py-4 bg-white border-2 border-[#D6E4FF] rounded-full font-semibold text-lg hover:border-indigo-300 transition-all flex items-center justify-center gap-2 text-slate-700">
              Napisz do nas
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </FadeIn>

        <FadeIn delay={0.9}>
          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: UsersRound, title: 'HR', value: 'CV i papiery', color: 'blue' },
              { icon: Megaphone, title: 'Marketing', value: 'Wersje robocze', color: 'pink' },
              { icon: Target, title: 'Sprzedaż', value: 'Nocne leady', color: 'green' },
            ].map((dept, i) => (
              <div key={i} className={`p-6 rounded-2xl bg-${dept.color}-50 border border-${dept.color}-200`}>
                <dept.icon className={`w-8 h-8 mx-auto mb-2 text-${dept.color}-600`} />
                <div className={`text-2xl font-bold text-${dept.color}-600`}>{dept.value}</div>
                <div className="text-sm text-[#1A2461]">{dept.title}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex justify-center pt-2">
          <div className="w-1 h-3 bg-slate-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}

// Stats Overview
function StatsOverview() {
  return (
    <section className="dark-scope py-16 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(AGENT_STATS).map(([key, dept], i) => (
            <FadeIn key={key} delay={i * 0.1}>
              <div className="rounded-2xl p-6" style={{ background: `linear-gradient(135deg, ${dept.color}20, transparent)` }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${dept.gradient} flex items-center justify-center`}>
                    {key === 'hr' && <UsersRound className="w-5 h-5 text-white" />}
                    {key === 'marketing' && <Megaphone className="w-5 h-5 text-white" />}
                    {key === 'sales' && <Target className="w-5 h-5 text-white" />}
                  </div>
                  <h3 className="text-xl font-bold">{dept.title}</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {dept.stats.map((stat, j) => (
                    <div key={j} className="text-center">
                      <div className="text-2xl font-bold" style={{ color: dept.color }}>
                        {stat.value}{stat.suffix}
                      </div>
                      <div className="text-xs text-[#7B9BDB]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// HR Section - Full
function HRSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <div className="dark-scope w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
              <UsersRound className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B0F2E]">Agent AI w dziale HR</h2>
              <p className="text-[#7B9BDB]">Papiery, CV, terminy. To, co zjada dzień, a nikt tego nie liczy</p>
            </div>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Problem */}
          <FadeIn>
            <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-400">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-red-500" />
                <h3 className="text-lg font-bold text-red-800">Gdzie idzie czas</h3>
              </div>
              <p className="text-slate-700 mb-4">
                Nie napiszemy ci, ile procent dnia zjada u ciebie ewidencja, bo tego nie wiemy.
                Nikt tego u siebie nie mierzy, więc każda liczba w tym miejscu byłaby zmyślona.
                Wiemy tyle: w małych działach kadrowych wracają zawsze te same cztery rzeczy.
              </p>

              <div className="overflow-hidden rounded-xl border border-red-200">
                <table className="w-full text-sm">
                  <thead className="bg-red-100">
                    <tr>
                      <th className="text-left p-3 text-red-800">Zadanie</th>
                      <th className="text-center p-3 text-red-800">Jak często</th>
                      <th className="text-center p-3 text-red-800">Agent</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {HR_AUTOMATION.map((item, i) => (
                      <tr key={i} className="border-t border-red-100">
                        <td className="p-3 text-slate-700">{item.area}</td>
                        <td className="p-3 text-center text-[#1A2461]">{item.time}</td>
                        <td className="p-3 text-center">
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                            {item.potential}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 mt-4 text-sm">
                Czego w tej tabeli nie ma i nie będzie: rozmowa o podwyżce, zwolnienie, spór
                z pracownikiem, ocena okresowa. To zostaje u ludzi i dobrze, bo agent nie ma jak
                wziąć za takie rzeczy odpowiedzialności.
              </p>
            </div>
          </FadeIn>

          {/* Solution */}
          <FadeIn delay={0.2}>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <h3 className="text-lg font-bold text-blue-800">Co z tym robimy</h3>
              </div>
              <p className="text-slate-700 mb-6">
                Agent siada na tych czterech zadaniach i robi je zawsze tak samo. Nie jest mądrzejszy
                od twojego zespołu. Po prostu nie ma gorszego dnia, nie idzie na urlop i nie zapomina,
                że w piątek kończy się komuś umowa.
              </p>

              <div className="space-y-4">
                {[
                  'Czyta CV i układa je według kryteriów z ogłoszenia',
                  'Odpowiada na pytania o urlopy i wypłaty, także w nocy',
                  'Wypełnia umowy i zaświadczenia z gotowych szablonów',
                  'Przypomina o badaniach, szkoleniach i końcach umów',
                  'Składa raporty kadrowe w stałym formacie',
                  'Prowadzi nową osobę przez pierwszy tydzień'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* HR Features Grid */}
        <FadeIn>
          <h3 className="text-xl font-bold text-[#0B0F2E] mb-6">Sześć rzeczy, które agent robi w kadrach</h3>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {HR_FEATURES.map((feature, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-blue-100 hover:shadow-md transition-shadow h-full">
                <div className={`w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4`}>
                  {i === 0 && <FileText className="w-6 h-6 text-blue-600" />}
                  {i === 1 && <MessageCircle className="w-6 h-6 text-blue-600" />}
                  {i === 2 && <Users className="w-6 h-6 text-blue-600" />}
                  {i === 3 && <FileText className="w-6 h-6 text-blue-600" />}
                  {i === 4 && <CalendarDays className="w-6 h-6 text-blue-600" />}
                  {i === 5 && <BarChart className="w-6 h-6 text-blue-600" />}
                </div>
                <h4 className="font-bold text-slate-800 mb-2">{feature.title}</h4>
                <p className="text-[#1A2461] text-sm mb-3">{feature.desc}</p>
                <div className="flex items-center gap-2 text-xs">
                  {feature.stats.map((stat, j) => (
                    <span key={j} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{stat}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Timeline */}
        <FadeIn>
          <div className="bg-[#D6E4FF] rounded-2xl p-6 mb-8">
            <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              Rekrutacja rozpisana na godziny. Scenariusz, nie wdrożenie
            </h3>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              <div className="space-y-4">
                {[
                  { time: '09:00', event: 'Na ogłoszenie wpada 150 CV', color: 'bg-blue-600' },
                  { time: '09:30', event: 'Agent czyta wszystkie i opisuje je według kryteriów z ogłoszenia', color: 'bg-blue-500' },
                  { time: '09:35', event: 'Rekruter przegląda listę i zaznacza kilkanaście osób do kontaktu', color: 'bg-blue-400' },
                  { time: '10:00', event: 'Agent wysyła zaproszenia i zadaje pytania wstępne na czacie', color: 'bg-cyan-500' },
                  { time: '11:00', event: 'Agent podstawia wolne terminy z kalendarza rekrutera', color: 'bg-cyan-400' },
                  { time: '11:05', event: 'Rekruter dostaje listę z notatkami i wybiera sam', highlight: true },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 relative">
                    <div className={`dark-scope w-16 h-16 ${step.color || 'bg-blue-600'} rounded-full flex items-center justify-center text-white font-bold text-xs z-10 flex-shrink-0`}>
                      {step.time}
                    </div>
                    <div className={`flex-1 rounded-xl p-4 shadow-sm ${step.highlight ? 'bg-white border-2 border-green-300' : 'bg-white'}`}>
                      <p className="text-slate-700">{step.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-red-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-red-600">To scenariusz</div>
                <div className="text-red-700">a nie liczby z czyjegoś wdrożenia</div>
              </div>
              <div className="bg-green-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-600">Warunek</div>
                <div className="text-green-700">CV w jednym miejscu i spisane kryteria</div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Results */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <FadeIn>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <h4 className="font-semibold text-blue-800 mb-2">Co zmierzyć, zanim cokolwiek wdrożysz</h4>
              <p className="text-[#1A2461] text-sm mb-4">
                Cztery liczby. Zbierzesz je w dwa tygodnie, a potem masz z czym porównać.
                Bez tego dyskusja o wynikach kończy się na wrażeniach.
              </p>
              <div className="space-y-4">
                {HR_MEASURE.map((result, i) => (
                  <div key={i}>
                    <div className="text-slate-800 text-sm font-semibold">{result.label}</div>
                    <div className="text-xs text-[#1A2461] mt-1">{result.how}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6">
              <h4 className="font-semibold text-blue-800 mb-2">Odzyskany czas trzeba komuś przypisać</h4>
              <p className="text-[#1A2461] text-sm mb-4">
                Sam z siebie nie zamieni się w strategię. Wsiąknie w bieżączkę i po kwartale nikt
                nie będzie umiał powiedzieć, czy wdrożenie miało sens. Zapisz przed startem, na co
                ma pójść.
              </p>

              <div className="space-y-3">
                {[
                  { title: 'Rozmowy z ludźmi', desc: 'Te, na które zawsze brakuje popołudnia' },
                  { title: 'Porządek w dokumentach', desc: 'Szablony, procedury, jedno miejsce na pliki' },
                  { title: 'Docieranie do kandydatów', desc: 'Zamiast przerzucania CV z folderu do folderu' },
                  { title: 'Wdrażanie nowych osób', desc: 'Pierwsze trzy miesiące, nie pierwszy dzień' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div>
                      <div className="font-semibold text-slate-800">{item.title}</div>
                      <div className="text-xs text-[#7B9BDB]">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-white rounded-xl border-2 border-blue-200">
                <p className="text-slate-700 text-sm">
                  Nie podamy ci, ile godzin tygodniowo wróci. Nie mierzyliśmy tego u ciebie,
                  a cudza liczba w tym miejscu jest warta tyle, co obietnica z billboardu.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Transformation Table */}
        <FadeIn>
          <div className="mt-8 overflow-hidden rounded-xl border border-blue-200">
            <div className="dark-scope bg-blue-600 text-white p-4 text-center">
              <h4 className="font-bold">Podział pracy</h4>
            </div>
            <table className="w-full">
              <thead className="bg-blue-100">
                <tr>
                  <th className="p-4 text-left text-blue-800">Robi agent</th>
                  <th className="p-4 text-center text-blue-800">→</th>
                  <th className="p-4 text-left text-blue-800">Zostaje u człowieka</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {HR_SPLIT.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'border-b border-blue-100' : 'border-b border-blue-100 bg-blue-50'}>
                    <td className="p-4 text-[#1A2461]">{item.before}</td>
                    <td className="p-4 text-center text-blue-500">→</td>
                    <td className="p-4 text-slate-800 font-semibold">{item.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// Marketing Section
function MarketingSection() {
  return (
    <section className="py-24 bg-[#D6E4FF]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <div className="dark-scope w-14 h-14 bg-pink-600 rounded-2xl flex items-center justify-center">
              <Megaphone className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B0F2E]">Agent AI w marketingu</h2>
              <p className="text-[#7B9BDB]">Więcej wersji roboczych. Redakcja i tak zostaje u was</p>
            </div>
          </div>
        </FadeIn>

        {/* Stats Header */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { title: 'zamiast jednej wersji', value: 'Szkice', color: 'pink' },
            { title: 'zawsze o tej samej porze', value: 'Raporty', color: 'purple' },
            { title: 'zostaje przy człowieku', value: 'Redakcja', color: 'rose' },
          ].map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className={`bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl p-4 text-center`}>
                <div className={`text-3xl font-bold text-${stat.color}-600`}>{stat.value}</div>
                <div className="text-sm text-[#1A2461]">{stat.title}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <FadeIn>
            <h3 className="font-semibold text-slate-700 mb-4">Co agent przejmuje w marketingu</h3>
            <ul className="space-y-3">
              {[
                'Szkice postów, nagłówków i opisów, po kilkanaście wersji naraz',
                'Podmianę treści pod segmenty w mailingu',
                'Zbieranie liczb z kampanii do jednego raportu',
                'Uzupełnianie opisów produktów i meta tagów',
                'Wyłapywanie wzmianek o firmie w sieci',
                'Research przed kampanią, ten nudny, w tabelce'
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-[#1A2461]">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#1A2461] text-sm mt-4">
              Czego nie przejmie: pomysłu. Agent dobrze pisze piątą wersję czegoś, co już istnieje,
              i miernie pierwszą wersję czegoś, czego nie ma. Jeśli nie macie ani jednego dobrego
              tekstu, na którym da się go oprzeć, wyjdą ogólniki i będziecie je przepisywać.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
              <h4 className="font-semibold text-purple-800 mb-4">Kampania produktowa, przykładowy poranek</h4>
              <div className="space-y-2 text-sm">
                {[
                  { time: '08:00', event: 'Agent zbiera dane sprzedażowe z zeszłego miesiąca' },
                  { time: '08:05', event: 'Wyrzuca 20 wariantów nagłówka do wyboru' },
                  { time: '08:10', event: 'Robi wersje tekstu pod pięć segmentów' },
                  { time: '08:30', event: 'Marketing siada do redakcji i wycina połowę' },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 bg-white rounded-lg">
                    <span className="text-purple-600 font-mono">{step.time}</span>
                    <span className="text-[#1A2461]">{step.event}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-purple-100 rounded-lg">
                <span className="text-purple-700 text-sm">
                  Agent skraca pisanie, nie skraca myślenia. Godzina zaoszczędzona na wariantach
                  wraca w redakcji, jeśli nikt wcześniej nie ustalił, o czym ma być ta kampania.
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Metrics Table */}
        <FadeIn>
          <div className="mt-8 overflow-hidden rounded-xl border border-purple-200">
            <table className="w-full text-sm">
              <thead className="dark-scope bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <tr>
                  <th className="text-left p-4">Zadanie</th>
                  <th className="text-center p-4">Co robi agent</th>
                  <th className="text-center p-4">Co zostaje u ciebie</th>
                  <th className="text-center p-4">Nasza ocena</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {MARKETING_TASKS.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'border-b border-purple-100' : 'border-b border-purple-100 bg-purple-50'}>
                    <td className="p-4 text-slate-700">{row.metric}</td>
                    <td className="p-4 text-center text-[#7B9BDB]">{row.agent}</td>
                    <td className="p-4 text-center text-slate-700">{row.human}</td>
                    <td className="p-4 text-center font-bold text-green-600">{row.verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        {/* ROI Box */}
        <FadeIn>
          <div className="dark-scope mt-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
            <h4 className="font-bold text-lg mb-4">Ile na tym oszczędzisz, nie wiemy</h4>
            <p className="text-purple-100 mb-3">
              Żeby podać kwotę, trzeba znać wasze stawki i to, ile razy w miesiącu robicie daną
              rzecz. Nie znamy, więc nie podamy. Każda liczba w tym miejscu byłaby ładna i zmyślona.
              Zamiast niej masz rachunek, który zrobisz sam w kwadrans.
            </p>
            <p className="text-purple-100 mb-3">
              Bierzesz jedno zadanie. Mnożysz liczbę powtórzeń w miesiącu razy czas jednego
              powtórzenia i razy koszt godziny osoby, która to robi. To jest górna granica.
              Górna, bo ktoś musi przeczytać, poprawić i zatwierdzić to, co agent wypluje,
              a na to schodzi zwykle około jednej trzeciej pierwotnego czasu. Przy tekstach
              bywa więcej.
            </p>
            <p className="text-purple-100">
              Po drugiej stronie postaw wdrożenie od 5 000 zł netto i utrzymanie: 249, 499
              albo 799 zł netto miesięcznie, zależnie od pakietu. Jeśli z tego rachunku wychodzi
              zwrot dłuższy niż rok, powiemy to samo, co mówimy na konsultacji: zacznij od innego
              zadania albo nie zaczynaj wcale.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// Sales Section
function SalesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <div className="dark-scope w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B0F2E]">Agent AI w sprzedaży</h2>
              <p className="text-[#7B9BDB]">Zapytanie z nocy nie czeka do rana</p>
            </div>
          </div>
        </FadeIn>

        {/* Highlight */}
        <FadeIn>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-8 text-center">
            <div className="text-5xl font-extrabold text-green-600 mb-2">22:14</div>
            <p className="text-slate-700">
              O tej godzinie ktoś wysyła formularz. Agent odpowiada w kilkadziesiąt sekund.
              Nie dlatego, że jest lepszy od handlowca. Dlatego, że nie śpi.
            </p>
            <p className="text-green-600 font-semibold mt-2">Kto pisze w nocy, zwykle pisze nie tylko do was.</p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <FadeIn>
            <div>
              <h3 className="font-semibold text-slate-700 mb-4">Nocny lead, godzina po godzinie</h3>
              <div className="space-y-2">
                {[
                  { time: '22:14', event: 'Ktoś wypełnia formularz kontaktowy' },
                  { time: '22:15', event: 'Agent odpisuje i nawiązuje do tego, o co pytał' },
                  { time: '22:17', event: 'Pyta o budżet, termin i o to, kto po drugiej stronie decyduje' },
                  { time: '22:30', event: 'Podstawia wolne terminy z kalendarza handlowca' },
                  { time: '08:00', event: 'Handlowiec zaczyna dzień od gotowego spotkania i notatki', highlight: true },
                ].map((step, i) => (
                  <div key={i} className={`flex items-center gap-3 p-3 rounded-lg ${step.highlight ? 'bg-green-100 rounded-lg border-2 border-green-300' : 'bg-green-50'}`}>
                    <span className="text-green-600 font-mono text-sm">{step.time}</span>
                    <span className={`text-sm ${step.highlight ? 'text-slate-700 font-semibold' : 'text-[#1A2461]'}`}>{step.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6">
              <h4 className="font-semibold text-green-800 mb-4">Czego agent w sprzedaży nie zrobi</h4>
              <div className="space-y-3">
                {[
                  { title: 'Nie negocjuje ceny', desc: 'Poda cennik. Rabat to decyzja człowieka i tak ma zostać.' },
                  { title: 'Nie domyka transakcji', desc: 'Przy zakupie za kilkadziesiąt tysięcy klient chce rozmawiać z kimś, kto podpisuje.' },
                  { title: 'Nie gasi awantur', desc: 'Zdenerwowanego klienta ma przekazać dalej, a nie tłumaczyć mu, że rozumie jego frustrację.' },
                  { title: 'Nie wyceni nietypowego zlecenia', desc: 'Jeśli każda oferta jest inna, agent zbierze dane i odda je handlowcowi.' },
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-white rounded-lg">
                    <div className="font-semibold text-slate-800 text-sm">{item.title}</div>
                    <div className="text-xs text-[#1A2461] mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-white rounded-xl">
                <p className="text-sm text-slate-700">
                  Nie ma tu wykresu wzrostu przychodu, bo nie mamy wyników sprzedażowych klientów,
                  które wolno nam publikować. Cudze średnie z internetu i tak nie powiedzą nic
                  o twoim lejku.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Sales Functions */}
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {SALES_FUNCTIONS.map((func, i) => (
              <div key={i} className="bg-green-50 rounded-xl p-4 text-center">
                <div className="dark-scope w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <func.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm font-semibold text-slate-700">{func.title}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// Before you start
function BeforeStartSection() {
  return (
    <section className="py-24 bg-[#D6E4FF]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B0F2E] mb-3">Zanim zamówisz agenta</h2>
          <p className="text-[#1A2461] mb-10 max-w-3xl">
            Ta część jest nudna i dlatego zwykle jej nie ma na stronach o AI. A to ona decyduje,
            czy wdrożenie skończy się narzędziem, z którego ktoś korzysta, czy fakturą i zapomnianym
            czatem w rogu ekranu.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <FadeIn>
            <div className="bg-white rounded-2xl p-6 h-full">
              <h3 className="font-bold text-slate-800 mb-4">Co przygotować po swojej stronie</h3>
              <ul className="space-y-3">
                {BEFORE_START.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-[#1A2461] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white rounded-2xl p-6 h-full">
              <h3 className="font-bold text-slate-800 mb-4">Kiedy to się nie opłaca</h3>
              <ul className="space-y-3">
                {NOT_WORTH_IT.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-[#1A2461] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#1A2461] text-sm mt-4">
                Odradzamy wtedy wprost. Wolimy stracić jedno zlecenie niż mieć klienta, który po pół
                roku płaci za coś, czego nikt nie włącza.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="bg-white rounded-2xl p-6 mb-6">
            <h3 className="font-bold text-slate-800 mb-5">Pytania, które słyszymy najczęściej</h3>
            <div className="space-y-5">
              {OBJECTIONS.map((item, i) => (
                <div key={i}>
                  <div className="font-semibold text-slate-800">{item.q}</div>
                  <p className="text-[#1A2461] text-sm mt-1">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="bg-white rounded-2xl p-6">
            <h3 className="font-bold text-slate-800 mb-4">Ile to kosztuje</h3>
            <p className="text-[#1A2461] text-sm mb-3">
              Wdrożenie agencyjne zaczyna się od 5 000 zł netto. Do tego utrzymanie: 249, 499
              albo 799 zł netto miesięcznie, czyli pakiety Start, Standard i Premium. Konsultacja
              jest bezpłatna i nie kończy się ofertą na siłę.
            </p>
            <p className="text-[#1A2461] text-sm">
              Jeśli budżet jest mniejszy, a chcesz sam sobie coś poskładać, mamy do tego osobny
              produkt. ClawLabs, 399 zł miesięcznie, stawiasz agenta samodzielnie, bez naszej pracy
              wdrożeniowej. Dla jednego prostego zadania to zwykle rozsądniejszy start niż projekt
              za pięć tysięcy.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// Summary Section
function SummarySection() {
  return (
    <section className="dark-scope py-24 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Od czego zacząć, a co odpuścić</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6">
            <ul className="space-y-4">
              {[
                'Zacznij od zadania, które ktoś robi co tydzień i ma go serdecznie dość',
                'Zacznij od takiego, w którym błąd widać od razu, a nie po kwartale',
                'Odpuść, jeśli przez pierwszy miesiąc nie ma kto czytać odpowiedzi agenta',
                'Odpuść, jeśli proces dopiero powstaje. Poczekaj, aż się ustoi'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-6 flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-bold text-white mb-4">Następny krok</h3>
            <p className="text-blue-100 mb-6">
              Bezpłatna konsultacja. Godzina o tym, co u ciebie się do tego nadaje, a co nie.
            </p>
            <Ripple className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold">
              Umów konsultację →
            </Ripple>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 bg-[#0B0F2E] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Infinity Tech</div>
          <div className="flex gap-6 text-[#7B9BDB]">
            <a href="/polityka-prywatnosci" className="hover:text-white">Polityka Prywatności</a>
            <a href="/regulamin" className="hover:text-white">Regulamin</a>
            <a href="mailto:contact@infinityteam.io" className="hover:text-white">contact@infinityteam.io</a>
          </div>
        </div>
        <div className="text-center text-[#7B9BDB] mt-8 pt-8 border-t border-slate-800 space-y-1">
          <p className="text-sm">© 2026 Infinity Tech. Wszelkie prawa zastrzeżone.</p>
          <p className="text-xs text-[#7B9BDB]/70">
            KRS <span className="font-mono">0001236454</span>
            <span className="mx-2">·</span>
            NIP <span className="font-mono">9223090619</span>
            <span className="mx-2">·</span>
            REGON <span className="font-mono">544554591</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function AgentsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#0B0F2E]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-[#D6E4FF]">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 py-1">
              <Image 
                src="/logo.png" 
                alt="Infinity Tech Logo" 
                width={42} 
                height={42}
                className="object-contain"
              />
              <span className="text-xl md:text-2xl font-bold logo-text" style={{ background: 'linear-gradient(180deg, #1a1a2e 0%, #4a4a6a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>INFINITY TECH</span>
            </a>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="text-slate-700 hover:text-indigo-600 transition-colors font-medium">Start</a>
              <a href="/agents" className="text-slate-700 hover:text-indigo-600 transition-colors font-medium">Agenci AI</a>
              <a href="#kontakt" className="dark-scope px-5 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors">
                Kontakt
              </a>
            </div>

            <button 
              className="md:hidden p-2 text-slate-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      <main id="tresc" tabIndex={-1}>
        <HeroSection />
        <StatsOverview />
        <HRSection />
        <MarketingSection />
        <SalesSection />
        <BeforeStartSection />
        <SummarySection />
      </main>

      <Footer />
    </div>
  );
}
