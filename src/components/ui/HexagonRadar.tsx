import {
  HEXAGON_VARIABLES,
  type HexagonVariable,
} from '@/data/hexagonVariables';
import React from 'react';

interface HexagonRadarProps {
  activeId: string;
  onSelectVariable: (id: string) => void;
}

export const HexagonRadar: React.FC<HexagonRadarProps> = ({
  activeId,
  onSelectVariable,
}) => {
  return (
    <div className="relative flex h-[300px] w-full max-w-[380px] items-center justify-center">
      <svg viewBox="0 0 360 260" className="h-full w-full overflow-visible">
        {/* Telaraña / Guías internas del hexágono con gris más oscuro */}
        <polygon
          points="180,30 270,80 270,180 180,230 90,180 90,80"
          fill="none"
          stroke="#cbd5e1"
          strokeWidth="1.5"
        />
        <polygon
          points="180,63 240,96 240,163 180,196 120,163 120,96"
          fill="none"
          stroke="#cbd5e1"
          strokeWidth="1"
        />
        <polygon
          points="180,96 210,113 210,146 180,163 150,146 150,113"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1"
        />

        {/* Líneas desde el centro (180, 130) a los vértices con mejor contraste */}
        <line
          x1="180"
          y1="130"
          x2="180"
          y2="30"
          stroke="#cbd5e1"
          strokeWidth="1"
        />
        <line
          x1="180"
          y1="130"
          x2="270"
          y2="80"
          stroke="#cbd5e1"
          strokeWidth="1"
        />
        <line
          x1="180"
          y1="130"
          x2="270"
          y2="180"
          stroke="#cbd5e1"
          strokeWidth="1"
        />
        <line
          x1="180"
          y1="130"
          x2="180"
          y2="230"
          stroke="#cbd5e1"
          strokeWidth="1"
        />
        <line
          x1="180"
          y1="130"
          x2="90"
          y2="180"
          stroke="#cbd5e1"
          strokeWidth="1"
        />
        <line
          x1="180"
          y1="130"
          x2="90"
          y2="80"
          stroke="#cbd5e1"
          strokeWidth="1"
        />

        {/* Borde completo del hexágono (Base azul oscuro) */}
        <polygon
          points="180,30 270,80 270,180 180,230 90,180 90,80"
          fill="none"
          stroke="#152136"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Segmentos activos resaltados en Naranja Coral (#ff5743) */}
        {HEXAGON_VARIABLES.map((v: HexagonVariable) => {
          const prev = HEXAGON_VARIABLES.find((p) => p.id === v.prevId)!;
          const isActive = activeId === v.id;
          return (
            <g key={v.id}>
              {isActive && (
                <line
                  x1={prev.x}
                  y1={prev.y}
                  x2={v.x}
                  y2={v.y}
                  stroke="#ff5743"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
              )}
            </g>
          );
        })}

        {/* Nodos (Círculos) en los vértices */}
        {HEXAGON_VARIABLES.map((v: HexagonVariable) => {
          const isActive = activeId === v.id;
          return (
            <circle
              key={`node-${v.id}`}
              cx={v.x}
              cy={v.y}
              r={isActive ? '5.5' : '4'}
              fill={isActive ? '#ff5743' : '#ffffff'}
              stroke={isActive ? '#ff5743' : '#152136'}
              strokeWidth="2.5"
              className="cursor-pointer transition-all duration-200"
              onMouseEnter={() => onSelectVariable(v.id)}
            />
          );
        })}

        {/* Etiquetas de texto alrededor del hexágono */}
        {HEXAGON_VARIABLES.map((v: HexagonVariable) => {
          const isActive = activeId === v.id;
          return (
            <text
              key={`text-${v.id}`}
              x={v.textX}
              y={v.textY}
              textAnchor={v.textAnchor}
              className={`cursor-pointer text-[11px] transition-all duration-200 ${
                isActive
                  ? 'fill-[#ff5743] font-black'
                  : 'fill-[#152136] font-bold'
              }`}
              onMouseEnter={() => onSelectVariable(v.id)}
            >
              {v.title}
            </text>
          );
        })}

        {/* Texto central */}
        <text
          x="180"
          y="124"
          textAnchor="middle"
          className="fill-slate-400 text-[9px] font-bold tracking-widest uppercase"
        >
          1 VISITA
        </text>
        <text
          x="180"
          y="140"
          textAnchor="middle"
          className="fill-[#152136] text-[13px] font-black"
        >
          6 respuestas
        </text>
      </svg>
    </div>
  );
};
