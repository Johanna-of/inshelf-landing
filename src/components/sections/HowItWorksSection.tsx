import React from 'react';
import { HEXAGON_VARIABLES } from '@/data/hexagonVariables';
import { useHexagonVariable } from '@/hooks/useHexagonVariable';
import { HexagonRadar } from '@/components/ui/HexagonRadar';

export const HowItWorksSection: React.FC = () => {
  const { activeVariableId, selectVariable } =
    useHexagonVariable('visibilidad');

  return (
    <section
      id="como-funciona"
      className="border-b border-slate-200 bg-slate-50 px-4 py-20 text-slate-900 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* PARTE 1: LO QUE MEDIMOS */}
        <div className="mb-24">
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#ff5743]"></span>
              <span className="text-lg font-bold tracking-widest text-[#ff5743] uppercase">
                Lo que medimos
              </span>
            </div>
            <h2 className="mb-6 text-3xl leading-tight font-extrabold tracking-tight text-[#152136] sm:text-4xl lg:text-5xl">
              Seis motores. Cada visita. <br className="hidden sm:inline" />
              Cada punto de venta.
            </h2>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              Una góndola bien ejecutada responde seis preguntas. InShelf las
              convierte en datos comparables entre cadenas, ciudades y equipos.
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Componente Hexágono SVG separado */}
            <div className="flex flex-col items-center justify-center lg:col-span-5">
              <HexagonRadar
                activeId={activeVariableId}
                onSelectVariable={selectVariable}
              />
            </div>

            {/* Cuadrícula de 6 variables con líneas divisorias en gris claro */}
            <div className="grid grid-cols-1 gap-[1px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-sm sm:grid-cols-2 lg:col-span-7">
              {HEXAGON_VARIABLES.map((v) => {
                const isActive = activeVariableId === v.id;
                return (
                  <div
                    key={v.id}
                    onMouseEnter={() => selectVariable(v.id)}
                    className={`group cursor-pointer p-6 transition-all duration-200 ${
                      isActive
                        ? 'bg-slate-100/90'
                        : 'bg-white hover:bg-slate-50/80'
                    }`}
                  >
                    <div className="mb-1.5 flex items-center gap-2">
                      <span className="text-[11px] font-bold text-slate-400">
                        {v.num}
                      </span>
                      <h3
                        className={`text-base font-extrabold transition-colors ${
                          isActive
                            ? 'text-[#ff5743]'
                            : 'text-[#152136] group-hover:text-[#ff5743]'
                        }`}
                      >
                        {v.title}
                      </h3>
                    </div>
                    <p className="text-xs leading-relaxed text-slate-600">
                      {v.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* PARTE 2: CÓMO FUNCIONA */}
        <div>
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#ff5743]"></span>
              <span className="text-lg font-bold tracking-widest text-[#ff5743] uppercase">
                Cómo funciona
              </span>
            </div>
            <h2 className="mb-6 text-3xl leading-tight font-extrabold tracking-tight text-[#152136] sm:text-4xl lg:text-5xl">
              Del celular de tu equipo a <br className="hidden sm:inline" />
              la decisión de tu gerencia.
            </h2>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              Tres capas que trabajan como una sola. Cada una alimenta a la
              siguiente.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Tarjeta 1 */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div>
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="h-px w-6 bg-[#ff5743]"></span>
                  <span className="text-xs font-extrabold tracking-widest text-slate-500 uppercase">
                    01 · Campo
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#152136]">
                  App InShelf
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  Tu equipo registra las seis variables en cada visita desde el
                  celular, con evidencia. Sin planillas, sin chats, sin reportes
                  armados al final del día.
                </p>
              </div>
              <div className="border-t border-dashed border-slate-200 pt-4">
                <span className="mb-1 block text-[10px] font-bold tracking-wider text-[#ff5743] uppercase">
                  Lo que obtienes
                </span>
                <p className="text-xs text-slate-600">
                  Cada visita queda documentada y es comparable con todas las
                  demás.
                </p>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div>
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="h-px w-6 bg-[#ff5743]"></span>
                  <span className="text-xs font-extrabold tracking-widest text-slate-500 uppercase">
                    02 · Control
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#152136]">
                  Torre de control
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  Ves en un solo tablero qué punto de venta cumple, cuál no y
                  qué hay que corregir primero. Por cadena, por ciudad, por
                  persona.
                </p>
              </div>
              <div className="border-t border-dashed border-slate-200 pt-4">
                <span className="mb-1 block text-[10px] font-bold tracking-wider text-[#ff5743] uppercase">
                  Lo que obtienes
                </span>
                <p className="text-xs text-slate-600">
                  Prioridades claras para tu equipo antes de la siguiente
                  visita.
                </p>
              </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div>
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="h-px w-6 bg-[#ff5743]"></span>
                  <span className="text-xs font-extrabold tracking-widest text-slate-500 uppercase">
                    03 · Anticipación
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#152136]">
                  Analítica predictiva
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  Cruzamos la ejecución con el comportamiento del sell-out para
                  anticipar dónde va a caer la venta. El modelo se entrega y se
                  explica a tu equipo.
                </p>
              </div>
              <div className="border-t border-dashed border-slate-200 pt-4">
                <span className="mb-1 block text-[10px] font-bold tracking-wider text-[#ff5743] uppercase">
                  Lo que obtienes
                </span>
                <p className="text-xs text-slate-600">
                  Decisiones tomadas antes del cierre de mes, no después.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
