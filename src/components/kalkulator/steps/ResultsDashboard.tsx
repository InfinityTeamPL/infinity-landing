'use client';

import Link from 'next/link';
import { ArrowRight, Shield } from 'lucide-react';
import type { AggregateResults, CompanyProfile } from '@/lib/kalkulator/types';
import { formatZl } from '@/lib/kalkulator/engine';
import ROISummaryCards from '../ROISummaryCards';
import SavingsBreakdownTable from '../SavingsBreakdownTable';
import ResultsChart from '../ResultsChart';
import TimelineChart from '../TimelineChart';
import ExportButton from '../ExportButton';

interface ResultsDashboardProps {
  results: AggregateResults;
  companyProfile: CompanyProfile;
}

export default function ResultsDashboard({ results, companyProfile }: ResultsDashboardProps) {
  return (
    <div className="space-y-8" id="kalkulator-results">
      {/* Nagłówek */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--fg)' }}>
          {companyProfile.companyName
            ? `Raport ROI dla ${companyProfile.companyName}`
            : 'Twój raport ROI automatyzacji'}
        </h2>
        <p className="text-sm" style={{ color: 'var(--accent-text)' }}>
          Szacunek na podstawie średnich rynkowych dla Polski (marzec 2026) i procesów, które zaznaczyłeś
        </p>
      </div>

      {/* Karty KPI */}
      <ROISummaryCards results={results} />

      {/* Tabela rozbicia */}
      <SavingsBreakdownTable processes={results.processes} />

      {/* Wykresy */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Porównanie kosztów */}
        <ResultsChart processes={results.processes} />

        {/* Projekcja 5-letnia */}
        <TimelineChart
          years={results.compoundYears}
          implementationCost={results.estimatedImplementationCost}
        />
      </div>

      {/* Redukcja błędów */}
      <div
        className="rounded-2xl p-5 md:p-6"
        style={{ background: 'rgba(10,22,40,0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.06)' }}
      >
        <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--fg)' }}>
          Redukcja błędów dzięki AI
        </h3>
        <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--fg-60)' }}>
          Te odsetki to średnie dla danego typu zadania, nie pomiar w Twojej firmie. Różnica jest
          największa tam, gdzie chodzi o przepisywanie danych z jednego miejsca w drugie. Przy
          sprawach nietypowych, reklamacji z awanturą, wyjątku w umowie, agent nadal powinien
          oddawać decyzję człowiekowi.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.processes.map((proc) => (
            <div key={proc.categoryId} className="space-y-2">
              <div className="flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: proc.categoryColor }}
                />
                <span className="text-sm font-medium" style={{ color: 'var(--fg)' }}>
                  {proc.categoryName}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {/* Przed */}
                <div className="flex-1">
                  <div className="text-xs mb-1" style={{ color: 'var(--fg-60)' }}>Błędy (ludzie)</div>
                  <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${Math.min(proc.errorReduction.before * 10, 100)}%`,
                        backgroundColor: '#EF4444',
                        minWidth: '8px',
                      }}
                    />
                  </div>
                  <div className="text-xs font-semibold mt-0.5" style={{ color: '#EF4444' }}>
                    {proc.errorReduction.before}%
                  </div>
                </div>
                {/* Strzałka */}
                <ArrowRight className="w-4 h-4 flex-shrink-0 mt-3" style={{ color: '#ccc' }} />
                {/* Po */}
                <div className="flex-1">
                  <div className="text-xs mb-1" style={{ color: 'var(--fg-60)' }}>Błędy (AI)</div>
                  <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${Math.min(proc.errorReduction.after * 10, 100)}%`,
                        backgroundColor: '#22C55E',
                        minWidth: '4px',
                      }}
                    />
                  </div>
                  <div className="text-xs font-semibold mt-0.5" style={{ color: '#22C55E' }}>
                    {proc.errorReduction.after}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ulga podatkowa */}
      <div
        className="rounded-2xl p-6 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(46,74,173,0.05), rgba(46,74,173,0.12))',
          border: '2px solid rgba(46,74,173,0.2)',
        }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: 'rgba(46,74,173,0.15)' }}
          >
            <Shield className="w-6 h-6" style={{ color: 'var(--accent-text)' }} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--fg)' }}>
              Ulga na robotyzację (50% odliczenia)
            </h3>
            <p className="text-sm" style={{ color: 'var(--accent-text)' }}>
              Ustawa obowiązuje od 2022 do 2026 roku i pozwala odliczyć od podstawy opodatkowania
              połowę kosztów wdrożenia.
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-2xl font-bold" style={{ color: 'var(--accent-text)' }}>
              {formatZl(results.taxRelief)} zł
            </div>
            <div className="text-xs" style={{ color: 'var(--accent-text)' }}>
              szacowana ulga
            </div>
          </div>
        </div>
        <p className="text-xs mt-4 leading-relaxed" style={{ color: 'var(--fg-60)' }}>
          Kwota obok to arytmetyka, nie decyzja urzędu skarbowego. Przepis celuje przede wszystkim
          w roboty przemysłowe i oprogramowanie potrzebne do ich uruchomienia, więc to, czy wdrożenie
          samego agenta AI się kwalifikuje, przesądzi Twoja księgowość. Zapytaj o to, zanim wpiszesz
          tę pozycję do budżetu.
        </p>
      </div>

      {/* Zastrzeżenia do liczb */}
      <div
        className="rounded-2xl p-5 md:p-6 space-y-4"
        style={{ background: 'rgba(10,22,40,0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.06)' }}
      >
        <h3 className="text-lg font-bold" style={{ color: 'var(--fg)' }}>
          Zanim potraktujesz to jako budżet
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-60)' }}>
          Koszt wdrożenia w tabeli wyżej to nie oferta, tylko reguła kciuka: 2,5 razy miesięczna
          oszczędność, nie mniej niż 5 000 zł netto. Prawdziwa wycena zależy głównie od tego, ile
          systemów trzeba ze sobą połączyć i czy dane są już w jednym miejscu, czy dopiero trzeba je
          pozbierać.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-60)' }}>
          Wykres pięcioletni zakłada, że oszczędność rośnie o 15% rocznie. To założenie, nie pomiar.
          Bierze się z tego, że modele tanieją, a raz wdrożony agent z czasem obsługuje więcej
          przypadków. Równie dobrze może wyjść płasko, jeśli po pierwszym roku nikt nie będzie go
          rozwijał. Pięcioletnich danych z wdrożeń AI nikt na razie nie ma, więc to prognoza, a nie
          historia.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-60)' }}>
          Kalkulator nie powie Ci, kiedy to się nie opłaca, więc powiemy my. Nie ma sensu
          automatyzować procesu, który zajmuje kilka godzin w miesiącu, bo samo wdrożenie zje całą
          oszczędność. Nie ma też sensu, jeśli każda sprawa wygląda inaczej i nie da się z niej
          wyciągnąć schematu, albo jeśli dane siedzą na papierze i w głowie jednej osoby. W tym
          ostatnim przypadku najpierw trzeba uporządkować proces. AI dokładamy dopiero potem.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-60)' }}>
          Czego tu nie ma, a w budżecie będzie: utrzymanie po wdrożeniu, czyli 249, 499 albo 799 zł
          netto miesięcznie zależnie od pakietu, plus koszt zapytań do modelu u dostawcy. Do tego
          czas Twojego zespołu na testy i poprawki w pierwszych tygodniach, którego nikt nigdy nie
          wpisuje do arkusza. Osobna sprawa: zaoszczędzone godziny nie zamieniają się same w
          gotówkę. Jeśli nikt nie odchodzi z firmy, korzyść polega na tym, że te same osoby robią
          coś innego. Warto z góry wiedzieć, co konkretnie.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-60)' }}>
          Co warto mieć przed rozmową: dostęp do systemu, w którym proces naprawdę żyje (CRM,
          skrzynka, arkusz), i kilkanaście prawdziwych przykładów spraw, koniecznie razem z tymi
          nietypowymi. Potrzebna jest też jedna osoba, która może zdecydować, co agent załatwia sam,
          a co odsyła do człowieka. Ten ostatni punkt pomija się najczęściej i to przez niego
          wdrożenia się przeciągają.
        </p>
      </div>

      {/* Podsumowanie + CTA */}
      <div
        className="dark-scope rounded-2xl p-6 md:p-8 text-center"
        style={{
          background: 'linear-gradient(135deg, #0B0F2E 0%, #1A2461 100%)',
        }}
      >
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
          Łączna roczna oszczędność netto
        </h3>
        <div className="text-4xl md:text-5xl font-bold mb-1" style={{ color: 'var(--accent-text)' }}>
          {formatZl(results.totalAnnualSavings)} zł
        </div>
        <p className="text-sm text-white/50 mb-6">
          + {formatZl(results.taxRelief)} zł ulgi podatkowej • ROI {results.roiPercent}% • zwrot w {results.paybackMonths} mies.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <ExportButton />
          <Link
            href="/#kontakt"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold transition-all hover:scale-105"
            style={{
              backgroundColor: '#2E4AAD',
              color: 'var(--fg)',
              boxShadow: '0 4px 20px rgba(46,74,173,0.3)',
            }}
          >
            Umów bezpłatną konsultację
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-center" style={{ color: 'var(--fg-60)' }}>
        * Kalkulacje szacunkowe na podstawie średnich rynkowych dla Polski (marzec 2026).
        Dane: GUS, ZUS, Eurostat, badania branżowe. Koszt pracodawcy uwzględnia ZUS (20,48%),
        miesiąc liczymy jako 168 godzin pracy. U Ciebie wyjdzie inaczej, bo liczby zależą od tego,
        jak proces wygląda naprawdę. To punkt wyjścia do rozmowy, nie obietnica.
      </p>
    </div>
  );
}
