import React from 'react';

export const GridBackground: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Patrón de la cuadrícula */}
      <div className="absolute inset-0 opacity-15">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Efecto de iluminación / Difuminado (Glow) en el lado derecho */}
      <div className="pointer-events-none absolute -top-20 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px] lg:h-[700px] lg:w-[700px]" />

      {/* Un sutil destello secundario opcional para enriquecer el contraste */}
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[100px]" />
    </div>
  );
};
