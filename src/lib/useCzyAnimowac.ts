'use client';

import { useEffect, useState, type RefObject } from 'react';

/**
 * Mówi, czy warto w ogóle kręcić pętlą animacji.
 *
 * Powstał, bo komponenty rysujące po canvasie (Aurora, Particles,
 * FloatingLines) chodziły bez przerwy od wejścia na stronę — także wtedy,
 * gdy siedziały kilka ekranów niżej albo karta była w tle. Na stronie
 * głównej to trzy równoległe pętle po 60 klatek na sekundę, których nikt
 * nie widzi: darmowy koszt dla procesora, baterii i czasu reakcji
 * na interakcje.
 *
 * Zwraca true tylko wtedy, gdy element jest w polu widzenia, karta jest
 * aktywna, a użytkownik nie prosił o ograniczenie ruchu.
 */
export function useCzyAnimowac(ref: RefObject<Element | null>): boolean {
  const [wWidoku, setWWidoku] = useState(false);
  const [kartaAktywna, setKartaAktywna] = useState(true);
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
    const przyZmianie = () => setKartaAktywna(!document.hidden);
    przyZmianie();
    document.addEventListener('visibilitychange', przyZmianie);
    return () => document.removeEventListener('visibilitychange', przyZmianie);
  }, []);

  useEffect(() => {
    const zapytanie = window.matchMedia('(prefers-reduced-motion: reduce)');
    const przyZmianie = () => setOgraniczonyRuch(zapytanie.matches);
    przyZmianie();
    zapytanie.addEventListener('change', przyZmianie);
    return () => zapytanie.removeEventListener('change', przyZmianie);
  }, []);

  return wWidoku && kartaAktywna && !ograniczonyRuch;
}
