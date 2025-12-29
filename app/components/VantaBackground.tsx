'use client';

import { useEffect, useRef } from 'react';

interface VantaEffect {
  destroy: () => void;
}

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<VantaEffect | null>(null);

  useEffect(() => {
    if (!vantaRef.current || effectRef.current) return;

    const loadVanta = async () => {
      try {
        const THREE = await import('three');
        const NET = (await import('vanta/dist/vanta.net.min')).default;

        effectRef.current = NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          color: 0x222222, // Very dark gray lines
          backgroundColor: 0x000000, // Pure black
          points: 8.0, // Fewer points
          maxDistance: 18.0, // Tighter connections
          spacing: 20.0, // More spread out
          showDots: false, // No dots, just lines
        });
      } catch (error) {
        console.error('Vanta.js failed to load:', error);
      }
    };

    loadVanta();

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return <div ref={vantaRef} className="absolute inset-0 z-0 opacity-50" aria-hidden="true" />;
}
