/**
 * Liczenie kontrastu i dobieranie czytelnych wariantów kolorów.
 *
 * Powód powstania: kolory kategorii w kalkulatorze służą jednocześnie za
 * identyfikację na wykresach i za kolor drobnych etykiet. Jako tekst zawodzą
 * w obu motywach, ale w przeciwnych kierunkach — #CA8A04 daje 2,70:1 na
 * jasnym tle i 6,66:1 na ciemnym, a #2563EB odwrotnie: 4,75:1 i 3,78:1.
 * Jedna wartość nie obsłuży obu motywów, więc wyliczamy dwa warianty
 * i pozwalamy CSS-owi wybrać właściwy.
 *
 * Funkcje są czyste i nie sięgają po aktualny motyw, więc wynik jest taki sam
 * na serwerze i w przeglądarce — nie ma ryzyka rozjazdu przy hydracji.
 */

/** Tła obu motywów, względem których liczymy kontrast. */
export const TLO_JASNE = '#F5F5F7';
export const TLO_CIEMNE = '#050B1F';

function naKanaly(hex: string): [number, number, number] {
  const n = parseInt(hex.replace('#', ''), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function naHex(r: number, g: number, b: number): string {
  const k = (v: number) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0');
  return `#${k(r)}${k(g)}${k(b)}`;
}

/** Luminancja względna wg WCAG 2.1. */
export function luminancja(hex: string): number {
  const [r, g, b] = naKanaly(hex).map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** Współczynnik kontrastu między dwoma nieprzezroczystymi kolorami. */
export function kontrast(hexA: string, hexB: string): number {
  const a = luminancja(hexA);
  const b = luminancja(hexB);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

function rgbNaHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h: number;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return [h, s, l];
}

function hslNaRgb(h: number, s: number, l: number): [number, number, number] {
  if (s === 0) return [l * 255, l * 255, l * 255];
  const f = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return [f(p, q, h + 1 / 3) * 255, f(p, q, h) * 255, f(p, q, h - 1 / 3) * 255];
}

/**
 * Przesuwa jasność koloru, zachowując odcień i nasycenie, aż osiągnie
 * zadany kontrast względem tła. Kierunek wynika z tego, czy tło jest jasne
 * czy ciemne. Zwraca kolor wyjściowy, jeśli już przechodzi próg.
 */
export function czytelnyNaTle(hex: string, tlo: string, prog = 4.5): string {
  if (kontrast(hex, tlo) >= prog) return hex;

  const [h, s, l] = rgbNaHsl(...naKanaly(hex));
  const wTlo = luminancja(tlo) > 0.2 ? -1 : 1; // jasne tło → ciemniejszy tekst
  let jasnosc = l;

  for (let i = 0; i < 100; i++) {
    jasnosc += wTlo * 0.01;
    if (jasnosc <= 0 || jasnosc >= 1) break;
    const kandydat = naHex(...hslNaRgb(h, s, jasnosc));
    if (kontrast(kandydat, tlo) >= prog) return kandydat;
  }
  // Skrajność: odcienia nie da się doprowadzić do progu bez utraty tożsamości.
  return wTlo < 0 ? '#1D1D1F' : '#FFFFFF';
}

/**
 * Para wariantów tego samego koloru: jeden czytelny na tle motywu jasnego,
 * drugi na tle ciemnego. Do wstawienia jako zmienne CSS, żeby o wyborze
 * decydował arkusz, a nie JavaScript.
 */
export function wariantyMotywu(hex: string, prog = 4.5): { jasny: string; ciemny: string } {
  return {
    jasny: czytelnyNaTle(hex, TLO_JASNE, prog),
    ciemny: czytelnyNaTle(hex, TLO_CIEMNE, prog),
  };
}

/**
 * Kolor napisu na kolorowym tle: biel albo ciemny atrament, zależnie od tego,
 * który daje wyższy kontrast. Punkt przejścia wypada przy luminancji ≈ 0,206.
 */
export function napisNaTle(hex: string): string {
  return luminancja(hex) > 0.206 ? '#1D1D1F' : '#FFFFFF';
}
