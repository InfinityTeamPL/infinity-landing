'use client';

import { ReactNode } from 'react';

interface GlareHoverProps {
  children: ReactNode;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
  playOnce?: boolean;
  className?: string;
}

export default function GlareHover({
  children,
  glareColor = '#7B9BDB',
  glareOpacity = 0.15,
  glareAngle = -30,
  glareSize = 300,
  transitionDuration = 800,
  playOnce = false,
  className = '',
}: GlareHoverProps) {
  const hex = glareColor.replace('#', '');
  let r = 255, g = 255, b = 255;
  if (hex.length === 6) {
    r = parseInt(hex.slice(0, 2), 16);
    g = parseInt(hex.slice(2, 4), 16);
    b = parseInt(hex.slice(4, 6), 16);
  } else if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  }
  const rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;

  return (
    <div
      className={`glare-hover ${playOnce ? 'glare-hover--play-once' : ''} ${className}`}
      style={{
        '--gh-angle': `${glareAngle}deg`,
        '--gh-duration': `${transitionDuration}ms`,
        '--gh-size': `${glareSize}%`,
        '--gh-rgba': rgba,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
