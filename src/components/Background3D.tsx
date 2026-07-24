'use client';

import { useEffect, useRef } from 'react';

/* =========================================================
   Tło strony — "siatka Vercel" w OBU motywach (czysty CSS,
   klasa .bg-grid-light w globals.css; kolory z tokenów, więc
   w dark linie są białe 4,5%, w light grafitowe 4,5%).
   Spotlight podąża za scrollem przez zmienną --spot-y.
   WebGL-owy kosmos z cząstkami usunięty 2026-07-25 na życzenie
   usera (rozpraszał) — historia w gicie, gdyby miał wrócić.
   ========================================================= */
export default function Background3D() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const p = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      gridRef.current?.style.setProperty('--spot-y', `${28 + p * 44}%`);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div ref={gridRef} className="bg-grid-light" aria-hidden="true" />;
}
