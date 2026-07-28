'use client';

import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  end: number;
  className?: string;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

/**
 * Licznik liczący w górę, gdy wjedzie w widok.
 *
 * WAŻNE, DLACZEGO STAN STARTUJE OD `null`, A NIE OD ZERA:
 * wcześniej było `useState(0)`, więc w HTML z serwera stała cyfra 0, a
 * prawdziwa liczba pojawiała się dopiero po uruchomieniu animacji. Animacja
 * czeka na IntersectionObserver, czyli na przewinięcie strony, którego robot
 * indeksujący nie musi wykonać. Skutek był taki, że Google zaindeksował
 * „0% firm w Polsce nie korzysta z AI" zamiast 92 procent i „0 własnych
 * produktów" zamiast czterech. Statystyka mówiąca dokładnie odwrotnie niż
 * prawda jest gorsza od braku statystyki.
 *
 * Teraz `null` znaczy „jeszcze nie animujemy", a wtedy renderujemy wartość
 * docelową. Zero pojawia się dopiero w momencie startu animacji, czyli już
 * po stronie przeglądarki i tylko wtedy, gdy ktoś na ten licznik patrzy.
 */
export default function AnimatedCounter({
  end,
  className = '',
  duration = 2,
  suffix = '',
  prefix = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState<number | null>(null);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Kto prosił o mniej ruchu, dostaje samą liczbę bez odliczania.
    const bezRuchu = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (bezRuchu) return;

    let animationFrame: number;
    let startTime: number | undefined;

    const animate = (timestamp: number) => {
      if (startTime === undefined) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      // Zero ustawiamy dopiero TUTAJ, w pierwszej realnej klatce animacji.
      // Gdyby robić to już przy wejściu w widok, a requestAnimationFrame nigdy
      // by nie ruszył (karta w tle, robot przewijający bez rysowania klatek),
      // na ekranie zostałoby zero. Czyli dokładnie ten błąd, który naprawiamy.
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        // Powrót do null, czyli do wartości docelowej. Zaokrąglanie w dół
        // potrafi zatrzymać licznik o jeden przed metą.
        setCount(null);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        animationFrame = requestAnimationFrame(animate);
      },
      { threshold: 0.1 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [end, duration]);

  const wyswietlana = count === null ? end : count;

  return (
    <span ref={ref} className={cn('gradient-text font-bold', className)}>
      {prefix}
      {wyswietlana.toLocaleString('pl-PL')}
      {suffix}
    </span>
  );
}
