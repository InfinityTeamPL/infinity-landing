'use client';

import { useRef, useEffect, useCallback } from 'react';

interface ClickSparkProps {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
  extraScale?: number;
  children: React.ReactNode;
}

/**
 * Iskry przy kliknięciu.
 *
 * Dwie rzeczy, które trzeba tu rozumieć, bo poprzednia wersja kosztowała
 * bardzo dużo przy zerowym zysku wizualnym:
 *
 * 1. Canvas jest przypięty do OKNA (position: fixed), nie do rodzica.
 *    Wcześniej dostawał wymiary elementu nadrzędnego, a ten opakowuje całą
 *    stronę — na stronie głównej dawało to bufor 1280 × 33363 px, czyli
 *    ponad 42 megapiksele i ~170 MB pamięci. Iskry i tak pojawiają się
 *    wyłącznie w miejscu kliknięcia, więc bufor wielkości okna wystarcza
 *    w zupełności i schodzi do ~4 MB.
 *
 * 2. Pętla animacji chodzi tylko wtedy, gdy jest co rysować. Wcześniej
 *    requestAnimationFrame wywoływał się bezwarunkowo, więc przeglądarka
 *    czyściła ten olbrzymi bufor 60 razy na sekundę przez cały czas wizyty,
 *    także gdy użytkownik w nic nie kliknął. Teraz pętla startuje przy
 *    kliknięciu i sama się zatrzymuje, gdy ostatnia iskra wygaśnie.
 */
const ClickSpark = ({
  sparkColor = '#fff',
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = 'ease-out',
  extraScale = 1.0,
  children,
}: ClickSparkProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<{ x: number; y: number; angle: number; startTime: number }[]>([]);
  const klatkaRef = useRef<number | null>(null);

  // Rozmiar bufora równy oknu, nie dokumentowi.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let opoznienie: ReturnType<typeof setTimeout>;
    const dopasuj = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };
    const przyZmianie = () => {
      clearTimeout(opoznienie);
      opoznienie = setTimeout(dopasuj, 100);
    };

    dopasuj();
    window.addEventListener('resize', przyZmianie);
    return () => {
      window.removeEventListener('resize', przyZmianie);
      clearTimeout(opoznienie);
    };
  }, []);

  const easeFunc = useCallback(
    (t: number) => {
      switch (easing) {
        case 'linear':
          return t;
        case 'ease-in':
          return t * t;
        case 'ease-in-out':
          return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        default:
          return t * (2 - t);
      }
    },
    [easing],
  );

  // Zatrzymanie pętli przy odmontowaniu — sama pętla startuje dopiero z kliknięcia.
  useEffect(() => {
    return () => {
      if (klatkaRef.current !== null) cancelAnimationFrame(klatkaRef.current);
    };
  }, []);

  const rysuj = useCallback(
    (czas: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((iskra) => {
        const uplynelo = czas - iskra.startTime;
        if (uplynelo >= duration) return false;

        const postep = uplynelo / duration;
        const wygladzony = easeFunc(postep);
        const odleglosc = wygladzony * sparkRadius * extraScale;
        const dlugosc = sparkSize * (1 - wygladzony);

        const x1 = iskra.x + odleglosc * Math.cos(iskra.angle);
        const y1 = iskra.y + odleglosc * Math.sin(iskra.angle);
        const x2 = iskra.x + (odleglosc + dlugosc) * Math.cos(iskra.angle);
        const y2 = iskra.y + (odleglosc + dlugosc) * Math.sin(iskra.angle);

        ctx.strokeStyle = sparkColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        return true;
      });

      // Nie ma iskier — nie ma po co budzić przeglądarki w kolejnej klatce.
      if (sparksRef.current.length === 0) {
        klatkaRef.current = null;
        return;
      }
      klatkaRef.current = requestAnimationFrame(rysuj);
    },
    [duration, easeFunc, extraScale, sparkColor, sparkRadius, sparkSize],
  );

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canvasRef.current) return;
    // Użytkownicy z ograniczonym ruchem nie dostają efektu w ogóle.
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    // Canvas pokrywa okno, więc współrzędne kliknięcia są już właściwe.
    const x = e.clientX;
    const y = e.clientY;
    const teraz = performance.now();

    sparksRef.current.push(
      ...Array.from({ length: sparkCount }, (_, i) => ({
        x,
        y,
        angle: (2 * Math.PI * i) / sparkCount,
        startTime: teraz,
      })),
    );

    if (klatkaRef.current === null) {
      klatkaRef.current = requestAnimationFrame(rysuj);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }} onClick={handleClick}>
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          userSelect: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
      {children}
    </div>
  );
};

export default ClickSpark;
