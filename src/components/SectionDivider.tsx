'use client';

import dynamic from 'next/dynamic';

const FloatingLines = dynamic(() => import('./FloatingLines'), { ssr: false });

const LINES_GRADIENT = ['#1A2461', '#2E4AAD', '#7B9BDB', '#4F6AE8'];

export default function SectionDivider({
  height = 150,
  colorFrom,
  colorTo
}: {
  height?: number;
  colorFrom: string;
  colorTo: string;
}) {
  return (
    <div style={{
      width: '100%',
      height: `${height}px`,
      position: 'relative',
      overflow: 'hidden',
      marginTop: '-1px',
      marginBottom: '-1px',
      background: `linear-gradient(to bottom, ${colorFrom}, ${colorTo})`
    }}>
      <FloatingLines
        enabledWaves={['top', 'middle', 'bottom']}
        lineCount={3}
        lineDistance={4}
        bendRadius={5}
        bendStrength={-0.5}
        interactive={true}
        parallax={true}
        animationSpeed={0.3}
        linesGradient={LINES_GRADIENT}
        mixBlendMode="screen"
      />
    </div>
  );
}
