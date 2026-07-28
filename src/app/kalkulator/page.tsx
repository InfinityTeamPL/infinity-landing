'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowLeft, Calculator, TrendingUp, Clock, Shield } from 'lucide-react';
import KalkulatorWizard from '@/components/kalkulator/KalkulatorWizard';
import ClickSpark from '@/components/react-bits/ClickSpark';

const Background3D = dynamic(() => import('@/components/Background3D'), { ssr: false });
const StaggeredMenu = dynamic(() => import('@/components/StaggeredMenu'), { ssr: false });

const menuItems = [
  { label: 'Start', ariaLabel: 'Strona główna', link: '/' },
  { label: 'Usługi', ariaLabel: 'Zobacz nasze usługi', link: '/#uslugi' },
  { label: 'O nas', ariaLabel: 'Dowiedz się więcej o nas', link: '/#o-nas' },
  { label: 'Kalkulator ROI', ariaLabel: 'Oblicz ROI automatyzacji', link: '/kalkulator' },
  { label: 'Kontakt', ariaLabel: 'Skontaktuj się z nami', link: '/#kontakt' },
  { label: 'FAQ', ariaLabel: 'Częste pytania', link: '/#faq' },
];

const socialItems = [
  { label: 'X (Twitter)', link: 'https://x.com/InfinityTech_PL' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/company/infinitytechgroup/?viewAsMember=true' },
  { label: 'Email', link: 'mailto:contact@infinityteam.io' },
];

export default function KalkulatorPage() {
  return (
    <ClickSpark sparkColor="#7B9BDB" sparkSize={12} sparkRadius={20} sparkCount={8} duration={500}>
      <div className="min-h-screen text-white relative">
        {/* 3D Background */}
        <Background3D />

        {/* Navigation */}
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 50, pointerEvents: 'none' }}>
          <StaggeredMenu
            isFixed={true}
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#ffffff"
            openMenuButtonColor="#ffffff"
            changeMenuColorOnOpen={true}
            colors={['#0B0F2E', '#1A2461', '#2E4AAD']}
            logoUrl="/logo.png"
            accentColor="#2E4AAD"
          />
        </div>

        <main id="tresc" tabIndex={-1}>
        {/* Hero */}
        <section className="relative overflow-hidden print:hidden" style={{ zIndex: 1 }}>
          <div className="relative z-10 max-w-5xl mx-auto px-4 pt-24 pb-16 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-white/50 hover:text-white/80 text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Powrót na stronę główną
            </Link>

            <div className="flex items-center justify-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: 'rgba(46,74,173,0.3)' }}
              >
                <Calculator className="w-6 h-6 text-[#7B9BDB]" />
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Kalkulator ROI{' '}
              <span style={{ color: 'var(--accent-text)' }}>Automatyzacji AI</span>
            </h1>

            <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto mb-8">
              Policz, ile godzin i pieniędzy pochłania dziś powtarzalna praca w Twojej firmie. I ile z tego
              realnie da się odzyskać. Szacunek opieramy na danych o kosztach pracy w Polsce (GUS, ZUS).
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#7B9BDB]" />
                <span className="text-white/60 text-sm">
                  <strong className="text-white">2 minuty</strong> na wypełnienie
                </span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#7B9BDB]" />
                <span className="text-white/60 text-sm">
                  Wynik <strong className="text-white">w złotówkach i godzinach</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#7B9BDB]" />
                <span className="text-white/60 text-sm">
                  <strong className="text-white">Bez zapisu</strong> i bez e-maila
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Wizard */}
        <section className="py-8 md:py-12 relative" style={{ zIndex: 1 }}>
          <KalkulatorWizard />
        </section>

        {/* Treść wyjaśniająca — także pod SEO (zapytania o koszty i zwrot z automatyzacji) */}
        <section className="relative print:hidden" style={{ zIndex: 1 }}>
          <div className="max-w-3xl mx-auto px-4 py-12 md:py-16 space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Jak liczymy zwrot z automatyzacji</h2>
              <p className="leading-relaxed mb-4" style={{ color: 'var(--fg-70)' }}>
                Punktem wyjścia jest koszt godziny pracy w Twojej firmie. Nie samo wynagrodzenie brutto, tylko pełny
                koszt pracodawcy razem ze składkami. Mnożymy go przez liczbę godzin, które dziś idą na powtarzalne
                zadania: odbieranie tych samych telefonów, przepisywanie danych między systemami, wypełnianie
                dokumentów według stałego wzoru.
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--fg-70)' }}>
                Od tej kwoty odejmujemy koszt wdrożenia i miesięcznego utrzymania agenta. To, co zostaje, jest
                oszczędnością, ale traktuj ją jako szacunek, a nie obietnicę. Rzeczywisty wynik zależy od tego, jak
                uporządkowane są Wasze dane i ile wyjątków ma proces.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Czego nie uwzględnia kalkulator</h2>
              <p className="leading-relaxed mb-4" style={{ color: 'var(--fg-70)' }}>
                Uczciwie: kilku rzeczy nie da się sensownie policzyć w formularzu. Nie wyceniamy tu wartości
                połączeń odebranych po godzinach, których dziś w ogóle nie obsługujecie, ani tego, że pracownik
                przestaje wykonywać zadanie, którego szczerze nie znosi. W drugą stronę działa to tak samo: nie
                liczymy czasu, który Wasz zespół poświęci na wdrożenie i testy.
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--fg-70)' }}>
                Dlatego wynik z kalkulatora traktujemy jako punkt startu do rozmowy, a nie jako ofertę. Na audycie
                liczymy to na Waszych realnych danych.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Co przygotować przed rozmową</h2>
              <ul className="space-y-2.5">
                {[
                  'Ile telefonów, e-maili albo zgłoszeń przychodzi dziennie i w jakich godzinach',
                  'Kto się nimi dziś zajmuje i ile mniej więcej czasu to zajmuje',
                  'Jakie pytania powtarzają się najczęściej',
                  'Z jakich systemów korzystacie (CRM, kalendarz, system kadrowy, telefonia)',
                  'Gdzie jest granica, za którą sprawę musi przejąć człowiek',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3" style={{ color: 'var(--fg-70)' }}>
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2.5"
                      style={{ background: 'var(--accent-text)' }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-7" style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)' }}>
              <h2 className="text-xl font-bold mb-3">Wynik wygląda obiecująco?</h2>
              <p className="leading-relaxed mb-5" style={{ color: 'var(--fg-70)' }}>
                Umów bezpłatną rozmowę. Przejdziemy przez Wasz proces i policzymy to samo na prawdziwych liczbach.
                Jeśli wyjdzie, że automatyzacja się nie opłaca, powiemy to wprost.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#kontakt"
                  className="px-6 py-3 rounded-full font-semibold bg-[#2E4AAD] hover:bg-[#1A2461] transition-colors"
                  /* Przycisk ma własne granatowe tło w obu motywach, więc napis
                     zostaje biały — var(--fg) dałby tu ciemny atrament, 2,16:1. */
                  style={{ color: '#fff' }}
                >
                  Umów bezpłatną konsultację
                </Link>
                <Link
                  href="/cennik"
                  className="px-6 py-3 rounded-full font-semibold"
                  style={{ color: 'var(--accent-text)', border: '1px solid var(--border-soft)' }}
                >
                  Zobacz orientacyjne koszty
                </Link>
              </div>
            </div>
          </div>
        </section>

        </main>

        {/* Footer */}
        <footer className="text-center py-8 print:hidden relative" style={{ zIndex: 1, borderTop: '1px solid rgba(123,155,219,0.1)' }}>
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} Infinity Tech. Dane: GUS, ZUS, Eurostat, badania branżowe PL 2026.
          </p>
          <div className="flex items-center justify-center gap-4 mt-3">
            <Link href="/" className="text-sm text-[#7B9BDB] hover:text-white transition-colors">
              Strona główna
            </Link>
            <Link href="/#kontakt" className="text-sm text-[#7B9BDB] hover:text-white transition-colors">
              Kontakt
            </Link>
          </div>
        </footer>
      </div>
    </ClickSpark>
  );
}
