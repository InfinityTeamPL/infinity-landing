"use client";

import { useEffect, useRef, useCallback } from "react";
import Lenis from "lenis";

// ——— Lenis smooth scroll (singleton) ———
let lenisInstance: Lenis | null = null;

function initLenis() {
  if (lenisInstance) return lenisInstance;
  if (typeof window === "undefined") return null;

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    touchMultiplier: 2,
  });

  const raf = (time: number) => {
    lenisInstance?.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);

  return lenisInstance;
}

// ——— Lerp utility ———
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

// ——— Hook ———
export default function useHeroParallax() {
  const bgRef = useRef<HTMLDivElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Smoothed values for buttery interpolation
  const current = useRef({ scroll: 0, mouseX: 0, mouseY: 0 });
  const target = useRef({ scroll: 0, mouseX: 0, mouseY: 0 });

  const tick = useCallback(() => {
    const c = current.current;
    const t = target.current;

    // Lerp scroll
    c.scroll = lerp(c.scroll, t.scroll, 0.08);
    // Lerp mouse
    c.mouseX = lerp(c.mouseX, t.mouseX, 0.05);
    c.mouseY = lerp(c.mouseY, t.mouseY, 0.05);

    const s = c.scroll;
    const mx = c.mouseX; // -1..1
    const my = c.mouseY;

    // Background — slowest, slight mouse shift
    if (bgRef.current) {
      bgRef.current.style.transform =
        `translate3d(${mx * -8}px, ${s * 0.15 + my * -5}px, 0) scale(1.08)`;
    }

    // Mid glow — follows mouse more
    if (midRef.current) {
      midRef.current.style.transform =
        `translate3d(${mx * 15}px, ${s * 0.3 + my * 10}px, 0) scale(1.03)`;
    }

    // Foreground — fastest parallax
    if (fgRef.current) {
      fgRef.current.style.transform =
        `translate3d(${mx * 25}px, ${s * 0.5 + my * 18}px, 0)`;
    }

    // Dynamic overlay — darkens as user scrolls
    if (overlayRef.current) {
      const progress = Math.min(s / 700, 1);
      overlayRef.current.style.background =
        `linear-gradient(to bottom, rgba(0,0,0,${0.3 + progress * 0.3}), rgba(0,0,0,${0.5 + progress * 0.4}))`;
    }

    // Content — fade + blur + subtle lift
    if (contentRef.current) {
      const fade = Math.max(0, 1 - s / 500);
      const blur = Math.min(s / 150, 6);
      const lift = Math.min(s * 0.12, 60);
      contentRef.current.style.opacity = `${fade}`;
      contentRef.current.style.filter = `blur(${blur}px)`;
      contentRef.current.style.transform = `translate3d(0, -${lift}px, 0)`;
    }
  }, []);

  useEffect(() => {
    // Init Lenis
    initLenis();

    let raf: number;
    let active = true;

    // Scroll listener
    const onScroll = () => {
      target.current.scroll = window.scrollY;
    };

    // Mouse listener — normalised to -1..1
    const onMouse = (e: MouseEvent) => {
      target.current.mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      target.current.mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouse, { passive: true });

    // Animation loop
    const loop = () => {
      if (!active) return;
      tick();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Kick initial
    onScroll();

    return () => {
      active = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
    };
  }, [tick]);

  return { bgRef, midRef, fgRef, overlayRef, contentRef };
}
