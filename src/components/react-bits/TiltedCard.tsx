'use client';

import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2, Send } from 'lucide-react';

interface TiltedCardProps {
  tierLabel?: string;
  title: string;
  description?: string;
  price?: string;
  features?: string[];
  className?: string;
  accentColor?: string;
  featured?: boolean;
  badgeText?: string;
  buttonText?: string;
  waitlistMode?: boolean;
  /** Link "Dowiedz się więcej" — np. dedykowany landing usługi */
  href?: string;
}

export default function TiltedCard({
  tierLabel,
  title,
  description,
  price,
  features,
  className = '',
  accentColor = '#EC6B2D',
  featured = false,
  badgeText,
  buttonText,
  waitlistMode = false,
  href,
}: TiltedCardProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const [waitlistStep, setWaitlistStep] = useState<'idle' | 'input' | 'submitting' | 'done' | 'error'>('idle');
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistError, setWaitlistError] = useState<string | null>(null);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = waitlistEmail.trim();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) return;

    setWaitlistStep('submitting');
    setWaitlistError(null);

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: `${tierLabel || title} waitlist` }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Nie udało się wysłać zgłoszenia');
      }

      setWaitlistStep('done');
    } catch (err) {
      setWaitlistError(err instanceof Error ? err.message : 'Spróbuj ponownie');
      setWaitlistStep('error');
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - (rect.left + rect.width / 2);
    const mouseY = e.clientY - (rect.top + rect.height / 2);
    setRotation({
      x: (mouseY / (rect.height / 2)) * -8,
      y: (mouseX / (rect.width / 2)) * 8,
    });
  };

  const handleMouseLeave = () => setRotation({ x: 0, y: 0 });

  return (
    <div
      ref={cardRef}
      className={cn('tc-wrap perspective-1000 h-full', className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative' }}
    >
      {/* Czysty wygląd: hairline + tokeny w obu motywach; delikatny lift na hover */}
      <style dangerouslySetInnerHTML={{ __html: `
        .tc-wrap { transition: transform 0.3s ease; }
        .tc-wrap:hover { transform: translateY(-4px); }
        [data-theme="light"] .tc-wrap:hover .tc-card {
          box-shadow: var(--shadow-card-hover);
        }
        [data-theme="light"] .waitlist-btn {
          animation: none;
          background: var(--surface-1) !important;
          border-color: rgba(var(--ink-rgb), 0.15) !important;
          box-shadow: var(--shadow-card);
        }
      ` }} />
      <div
        className={cn(
          'tc-card relative overflow-hidden rounded-2xl transition-transform duration-300 ease-out h-full flex flex-col',
          'border'
        )}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
          borderColor: 'var(--border-soft)',
          background: 'var(--surface-tile)',
          boxShadow: 'var(--shadow-card, none)',
          zIndex: 1,
        }}
      >
        <div className="p-6 flex-1 flex flex-col">
          {/* Eyebrow — dyskretna etykieta kategorii */}
          {tierLabel && (
            <span
              className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-3"
              style={{ color: 'var(--accent-text)' }}
            >
              {tierLabel}
            </span>
          )}
          {price && (
            <div className="mb-3">
              <span className="text-3xl font-bold" style={{ color: accentColor }}>
                {price}
              </span>
              <span className="text-sm" style={{ color: 'var(--fg-50)' }}> zł/miesiąc</span>
            </div>
          )}

          <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>

          {featured && badgeText && (
            <span className="inline-block w-fit px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-white mb-2" style={{ backgroundColor: accentColor }}>
              {badgeText}
            </span>
          )}

          {description && (
            <p className={`text-sm mb-4 ${!features || features.length === 0 ? 'flex-1 text-base leading-relaxed' : ''}`} style={{ color: 'var(--fg-50)' }}>{description}</p>
          )}

          <div className="flex-1">
            {features && features.length > 0 && (
              <ul className="space-y-2.5">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm" style={{ color: 'var(--fg-70)' }}>
                    <CheckCircle2
                      className="h-4 w-4 mt-0.5 flex-shrink-0"
                      style={{ color: accentColor }}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {waitlistMode ? (
            waitlistStep === 'idle' ? (
              <>
                <style dangerouslySetInnerHTML={{ __html: `
                  @keyframes silverShimmer {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                  }
                  @keyframes glowPulse {
                    0%, 100% { box-shadow: 0 0 14px 2px rgba(180,210,255,0.35), 0 0 30px 4px rgba(140,180,255,0.18), inset 0 1px 0 rgba(255,255,255,0.15); }
                    50% { box-shadow: 0 0 22px 6px rgba(180,210,255,0.6), 0 0 50px 10px rgba(140,180,255,0.3), inset 0 1px 0 rgba(255,255,255,0.2); }
                  }
                  .silver-shimmer-text {
                    background: linear-gradient(90deg, rgba(var(--ink-rgb),0.6) 0%, rgba(var(--ink-rgb),0.85) 20%, rgb(var(--ink-rgb)) 50%, rgba(var(--ink-rgb),0.85) 80%, rgba(var(--ink-rgb),0.6) 100%);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: silverShimmer 1.8s linear infinite;
                    font-size: 0.875rem;
                    font-weight: 700;
                    letter-spacing: 0.03em;
                  }
                  .waitlist-btn {
                    animation: glowPulse 2.2s ease-in-out infinite;
                  }
                  .waitlist-btn:hover {
                    transform: translateY(-1px);
                    animation: none;
                    box-shadow: 0 0 30px 8px rgba(180,210,255,0.7), 0 0 60px 16px rgba(140,180,255,0.35), inset 0 1px 0 rgba(255,255,255,0.25) !important;
                  }
                  .waitlist-btn:hover .silver-shimmer-text {
                    animation-duration: 0.9s;
                  }
                ` }} />
                <button
                  type="button"
                  onClick={() => setWaitlistStep('input')}
                  className="waitlist-btn mt-5 block w-full py-3 rounded-full text-center transition-all"
                  style={{
                    background: 'linear-gradient(135deg, rgba(140,180,255,0.12) 0%, rgba(var(--ink-rgb),0.06) 50%, rgba(140,180,255,0.12) 100%)',
                    border: '1.5px solid rgba(200,225,255,0.7)',
                  }}
                >
                  <span className="silver-shimmer-text">
                    {buttonText || 'Zapisz się na waitlist'}
                  </span>
                </button>
              </>
            ) : waitlistStep === 'input' || waitlistStep === 'submitting' || waitlistStep === 'error' ? (
              <div className="mt-5">
                <form
                  onSubmit={handleWaitlistSubmit}
                  className="flex items-center gap-2 rounded-full pr-1 pl-4 py-1 transition-all"
                  style={{
                    backgroundColor: 'transparent',
                    border: `2px solid ${accentColor}`,
                    opacity: waitlistStep === 'submitting' ? 0.7 : 1,
                  }}
                >
                  <input
                    type="email"
                    required
                    autoFocus={typeof window !== 'undefined' && window.innerWidth >= 768}
                    disabled={waitlistStep === 'submitting'}
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    placeholder="twoj@email.pl"
                    className="flex-1 bg-transparent text-sm text-white placeholder:text-white/30 outline-none min-w-0 disabled:cursor-not-allowed"
                  />
                  <button
                    type="submit"
                    disabled={waitlistStep === 'submitting'}
                    aria-label="Zapisz się"
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:brightness-125 disabled:cursor-not-allowed"
                    style={{ backgroundColor: accentColor, color: '#0A1628' }}
                  >
                    {waitlistStep === 'submitting' ? (
                      <span
                        className="w-4 h-4 rounded-full border-2 border-t-transparent animate-spin"
                        style={{ borderColor: '#0A1628', borderTopColor: 'transparent' }}
                      />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </button>
                </form>
                {waitlistStep === 'error' && waitlistError && (
                  <p className="mt-2 text-xs text-center text-red-400">{waitlistError}</p>
                )}
              </div>
            ) : (
              <div
                className="mt-5 flex items-center justify-center gap-2 w-full py-3 rounded-full text-center font-semibold text-sm"
                style={{
                  backgroundColor: 'transparent',
                  color: accentColor,
                  border: `2px solid ${accentColor}`,
                }}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Dziękujemy! Odezwiemy się.</span>
              </div>
            )
          ) : (
            <a
              href={href || '#kontakt'}
              className="mt-5 inline-flex items-center gap-1.5 font-semibold text-sm transition-opacity hover:opacity-70 w-fit"
              style={{ color: 'var(--accent-text)' }}
            >
              {buttonText || (features && features.length > 0 ? `Wybierz ${title}` : 'Dowiedz się więcej')}
              <span aria-hidden="true">→</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
