'use client';

import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';

interface TiltedCardProps {
  tierLabel?: string;
  title: string;
  description?: string;
  price?: string;
  features?: string[];
  className?: string;
  accentColor?: string;
  featured?: boolean;
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
}: TiltedCardProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

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
      className={cn('perspective-1000 h-full', featured && 'md:-mt-4 md:mb-4', className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          'relative overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 ease-out h-full flex flex-col',
          featured ? 'md:shadow-2xl border-2' : 'border'
        )}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
          borderColor: featured ? accentColor : 'rgba(119,120,112,0.15)',
          backgroundColor: '#ffffff',
        }}
      >
        {/* Featured badge */}
        {featured && (
          <div
            className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-bold text-white"
            style={{ backgroundColor: accentColor }}
          >
            Popularny
          </div>
        )}

        {/* Branded header */}
        <div
          className="relative h-32 w-full flex-shrink-0 overflow-hidden"
          style={{ backgroundColor: accentColor }}
        >
          {/* Decorative circles */}
          <div
            className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10"
            style={{ backgroundColor: '#fff' }}
          />
          <div
            className="absolute -right-2 -bottom-10 w-24 h-24 rounded-full opacity-[0.07]"
            style={{ backgroundColor: '#fff' }}
          />
          <div
            className="absolute left-1/2 -bottom-6 w-40 h-16 rounded-full opacity-[0.05]"
            style={{ backgroundColor: '#fff' }}
          />

          {/* Content: logo left, label right */}
          <div className="relative z-10 h-full flex items-center justify-between px-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 w-auto"
              style={{ filter: accentColor === '#0D0F05' ? 'brightness(0) saturate(100%) invert(45%) sepia(85%) saturate(1000%) hue-rotate(350deg)' : undefined, opacity: 0.9 }}
            />
            <span className="text-white font-extrabold text-3xl tracking-widest uppercase">
              {tierLabel || title.toUpperCase()}
            </span>
          </div>
        </div>

        <div className="p-5 flex-1 flex flex-col">
          {price && (
            <div className="mb-3">
              <span className="text-3xl font-bold" style={{ color: accentColor }}>
                {price}
              </span>
              <span className="text-sm" style={{ color: '#777870' }}> zł/miesiąc</span>
            </div>
          )}

          <h3 className="text-lg font-bold mb-1" style={{ color: '#0D0F05' }}>{title}</h3>

          {description && (
            <p className="text-sm mb-4" style={{ color: '#777870' }}>{description}</p>
          )}

          <div className="flex-1">
            {features && features.length > 0 && (
              <ul className="space-y-2.5">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm" style={{ color: '#333' }}>
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

          <a
            href="#kontakt"
            className="mt-5 block w-full py-3 rounded-full text-center font-semibold text-sm transition-all"
            style={{
              backgroundColor: featured ? accentColor : 'transparent',
              color: featured ? '#fff' : accentColor,
              border: `2px solid ${accentColor}`,
            }}
          >
            Wybierz {title}
          </a>
        </div>
      </div>
    </div>
  );
}
