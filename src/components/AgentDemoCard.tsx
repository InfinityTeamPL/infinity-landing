'use client';

import { useEffect, useRef, useState } from 'react';
import { Phone, CheckCircle2 } from 'lucide-react';

/* =========================================================
   AgentDemoCard — „agent w akcji" w hero. Animowana transkrypcja
   prawdziwego scenariusza z wdrożenia (voicebot przewoźnika:
   rozkład jazdy + rezerwacja). Wiadomości agenta wypisują się
   znak po znaku, dzwoniącego pojawiają się jak transkrypcja.
   Pętla z pauzą; przy prefers-reduced-motion — statyczna całość.
   ========================================================= */

type Role = 'caller' | 'agent';

const SCRIPT: { role: Role; text: string }[] = [
  { role: 'caller', text: 'Dzień dobry, o której jest najbliższy autobus do Lublina?' },
  { role: 'agent', text: 'Najbliższy kurs odjeżdża o 14:35 z dworca głównego, kolejny o 16:10. Zarezerwować Panu miejsce?' },
  { role: 'caller', text: 'Tak, poproszę na 14:35.' },
  { role: 'agent', text: 'Gotowe — miejsce zarezerwowane, potwierdzenie wysłałem SMS-em. Miłej podróży!' },
];

const TYPE_MS = 24;        // tempo pisania agenta
const CALLER_DELAY = 900;  // pauza przed wypowiedzią dzwoniącego
const LOOP_PAUSE = 4200;   // pauza po zakończeniu scenariusza

export default function AgentDemoCard() {
  // visible = ile wiadomości pokazujemy; typed = ile znaków ostatniej
  const [visible, setVisible] = useState(0);
  const [typed, setTyped] = useState(0);
  const [reduced, setReduced] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true);
      setVisible(SCRIPT.length);
      return;
    }

    let vis = 0;
    let chars = 0;

    const tick = () => {
      if (vis >= SCRIPT.length) {
        timerRef.current = setTimeout(() => {
          vis = 0;
          chars = 0;
          setVisible(0);
          setTyped(0);
          timerRef.current = setTimeout(tick, 600);
        }, LOOP_PAUSE);
        return;
      }
      const msg = SCRIPT[vis];
      if (msg.role === 'caller') {
        // wypowiedź dzwoniącego pojawia się w całości (jak transkrypcja)
        vis += 1;
        chars = 0;
        setVisible(vis);
        setTyped(0);
        timerRef.current = setTimeout(tick, CALLER_DELAY);
      } else {
        if (chars === 0) {
          vis += 1;
          setVisible(vis);
        }
        chars += 1;
        setTyped(chars);
        if (chars < msg.text.length) {
          timerRef.current = setTimeout(tick, TYPE_MS);
        } else {
          chars = 0;
          timerRef.current = setTimeout(tick, CALLER_DELAY);
        }
      }
    };

    timerRef.current = setTimeout(tick, 1400);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const done = visible >= SCRIPT.length && (reduced || typed === 0);

  return (
    <div className="w-full max-w-md mx-auto text-left">
      <div
        className="rounded-3xl overflow-hidden"
        style={{ background: 'var(--surface-1)', border: '1px solid var(--border-soft)', boxShadow: 'var(--shadow-card, 0 20px 50px rgba(0,0,0,0.35))' }}
      >
        {/* Pasek połączenia */}
        <div className="flex items-center gap-3 px-5 py-3.5" style={{ borderBottom: '1px solid var(--border-soft)' }}>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: '#22c55e' }} />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: '#22c55e' }} />
          </span>
          <span className="text-sm font-medium flex-1">Agent głosowy — połączenie przychodzące</span>
          <Phone className="w-4 h-4" style={{ color: 'var(--accent-text)' }} />
        </div>

        {/* Transkrypcja */}
        <div className="px-5 py-5 space-y-3 min-h-[248px]" aria-live="polite">
          {SCRIPT.slice(0, visible).map((m, i) => {
            const isLast = i === visible - 1;
            const isTyping = !reduced && isLast && m.role === 'agent' && typed > 0 && typed < m.text.length;
            const text = isTyping ? m.text.slice(0, typed) : m.text;
            return (
              <div key={i} className={`flex ${m.role === 'caller' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className="max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed"
                  style={
                    m.role === 'agent'
                      ? { background: '#2E4AAD', color: '#fff' }
                      : { background: 'rgba(var(--ink-rgb), 0.07)' }
                  }
                >
                  {text}
                  {isTyping && <span className="animate-pulse">▍</span>}
                </div>
              </div>
            );
          })}
          {done && (
            <div className="flex items-center gap-2 pt-1 text-xs" style={{ color: 'var(--accent-text)' }}>
              <CheckCircle2 className="w-4 h-4" />
              Rezerwacja potwierdzona — bez udziału człowieka
            </div>
          )}
        </div>
      </div>
      <p className="text-center text-xs mt-3 text-white/50">
        Scenariusz z naszego wdrożenia dla przewoźnika autobusowego
      </p>
    </div>
  );
}
