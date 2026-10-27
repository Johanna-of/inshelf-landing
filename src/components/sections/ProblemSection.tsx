import React from 'react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="border-b border-slate-200 bg-slate-100 px-4 py-20 text-slate-900 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Cabecera de la sección */}
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#ff5743]"></span>
            <span className="text-lg font-bold tracking-widest text-[#ff5743] uppercase">
              El Problema
            </span>
          </div>
          <h2 className="mb-6 text-3xl leading-tight font-extrabold tracking-tight text-[#152136] sm:text-4xl lg:text-5xl">
            Lo que pasa en la góndola te llega tarde.{' '}
            <br className="hidden sm:inline" />Y tarde sale caro.
          </h2>
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            Tu estrategia comercial puede estar perfecta en la presentación. En
            el punto de venta se gana o se pierde todos los días, y casi nadie
            lo está viendo a tiempo.
          </p>
        </div>

        {/* Línea divisoria horizontal superior */}
        <div className="mb-0 h-px w-full bg-black"></div>

        {/* Grid de 3 columnas con líneas divisorias verticales */}
        <div className="grid grid-cols-1 gap-10 divide-slate-300 md:grid-cols-3 md:gap-0 md:divide-x">
          {/* Tarjeta 1: El Reporte */}
          <div className="flex flex-col pt-4 md:pr-8 lg:pr-12">
            <div className="mb-3 inline-block w-fit rounded-md bg-[#ff5743] px-2.5 py-1 shadow-sm">
              <span className="text-[12px] font-bold tracking-widest text-white uppercase">
                El reporte
              </span>
            </div>

            <h3 className="mb-3 text-xl font-bold text-[#152136]">
              Te enteras del agotado cuando ya costó.
            </h3>
            <p className="text-[13px] leading-relaxed text-slate-600">
              El informe llega días o semanas después. Para entonces el
              comprador ya se llevó otra marca y el espacio en el anaquel lo
              ocupó alguien más.
            </p>
          </div>

          {/* Tarjeta 2: La Visita */}
          <div className="flex flex-col pt-4 md:px-8 lg:px-12">
            <div className="mb-3 inline-block w-fit rounded-md bg-[#ff5743] px-2.5 py-1 shadow-sm">
              <span className="text-[12px] font-bold tracking-widest text-white uppercase">
                La visita
              </span>
            </div>

            <h3 className="mb-3 text-xl font-bold text-[#152136]">
              Pagas visitas que no puedes verificar.
            </h3>
            <p className="text-[13px] leading-relaxed text-slate-600">
              Con equipo propio o tercerizado, la pregunta es la misma: ¿se hizo
              lo que se acordó, en el punto de venta que era, como era? Sin
              evidencia, es un acto de fe.
            </p>
          </div>

          {/* Tarjeta 3: El Sell-Out */}
          <div className="flex flex-col pt-4 md:pl-8 lg:pl-12">
            <div className="mb-3 inline-block w-fit rounded-md bg-[#ff5743] px-2.5 py-1 shadow-sm">
              <span className="text-[12px] font-bold tracking-widest text-white uppercase">
                El sell-out
              </span>
            </div>

            <h3 className="mb-3 text-xl font-bold text-[#152136]">
              Explicas la caída. Nunca la anticipas.
            </h3>
            <p className="text-[13px] leading-relaxed text-slate-600">
              Cuando el sell-out baja, el análisis empieza después del cierre
              del mes. Las causas estaban en la góndola semanas antes, a la
              vista de quien estuviera midiendo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
