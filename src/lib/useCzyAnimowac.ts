'use client';

import { useEffect, useState, type RefObject } from 'react';

/**
 * Mówi, czy element jest w polu widzenia i czy użytkownik godzi się na ruch.
 *
 * Powstał, bo komponenty rysujące po canvasie (Aurora, Particles) chodziły
 * bez przerwy od wejścia na stronę — także wtedy, gdy siedziały kilka ekranów
 * niżej. Na stronie głównej to dwie równoległe pętle po 60 klatek na sekundę,
 * których nikt nie widzi.
 *
 * DWIE DECYZJE PROJEKTOWE, obie z przeglądu kodu:
 *
 * 1. NIE śledzimy widoczności karty. Przeglądarki same wstrzymują
 *    requestAnimationFrame w kartach w tle, więc nic byśmy nie zyskali,
 *    a stan „karta aktywna" w tablicy zależności efektu powodował, że każdy
 *    powrót do karty rozbierał i składał od nowa cały stan komponentu —
 *    w Particles znaczyło to losowanie cząstek od zera przy każdym przełączeniu.
 *
 * 2. Zwracamy DWIE osobne flagi zamiast jednej. Wcześniej prefers-reduced-motion
 *    zwracało false z całego haka, co blokowało nie samą animację, ale cały
 *    efekt — Aurora i Particles nie rysowały wtedy niczego. Teraz komponent
 *    rysuje jedną statyczną klatkę i po prostu się nie zapętla.
 */
export function useCzyAnimowac(ref: RefObject<Element | null>): {
  wWidoku: boolean;
  ograniczonyRuch: boolean;
} {
  const [wWidoku, setWWidoku] = useState(false);
  const [ograniczonyRuch, setOgraniczonyRuch] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Margines sprawia, że animacja rusza chwilę przed wjechaniem w kadr,
    // więc użytkownik nie widzi zimnego startu.
    const obs = new IntersectionObserver(
      ([wpis]) => setWWidoku(wpis.isIntersecting),
      { rootMargin: '200px' },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);

  useEffect(() => {
    const zapytanie = window.matchMedia('(prefers-reduced-motion: reduce)');
    const przyZmianie = () => setOgraniczonyRuch(zapytanie.matches);
    przyZmianie();
    zapytanie.addEventListener('change', przyZmianie);
    return () => zapytanie.removeEventListener('change', przyZmianie);
  }, []);

  return { wWidoku, ograniczonyRuch };
}
