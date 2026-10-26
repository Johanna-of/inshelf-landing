import React from 'react';
import { FiFileText, FiTrendingUp, FiUsers } from 'react-icons/fi';

export const HowWeWorkSection: React.FC = () => {
  return (
    <section
      id="como-trabajamos"
      className="bg-white px-4 py-24 text-slate-900 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LADO IZQUIERDO: TÍTULO Y DESCRIPCIÓN */}
          <div className="lg:col-span-5">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#ff5743]"></span>
              <span className="text-xs font-bold tracking-widest text-[#ff5743] uppercase">
                Cómo trabajamos contigo
              </span>
            </div>

            <h2 className="mb-6 text-3xl leading-tight font-extrabold tracking-tight text-[#152136] sm:text-4xl lg:text-5xl">
              Te entregamos una herramienta y un equipo que sabe de góndola.
            </h2>

            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              Venimos del trade marketing y de la ejecución en punto de venta.
              Sabemos lo que se pierde entre la estrategia y el anaquel porque
              lo hemos medido en la calle.
            </p>
          </div>

          {/* LADO DERECHO: TRES BLOQUES CON LÍNEAS SEPARADORAS */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-slate-100">
              {/* Ítem 1: Implementación acompañada */}
              <div className="flex items-start gap-5 py-6 first:pt-0 last:pb-0">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-[#152136]">
                  <FiFileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 text-base font-bold text-[#152136] sm:text-lg">
                    Implementación acompañada
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    Configuramos la app con tus puntos de venta, tus referencias
                    y tus metas, y capacitamos a tu equipo de campo.
                  </p>
                </div>
              </div>

              {/* Ítem 2: Modelo predictivo explicado */}
              <div className="flex items-start gap-5 py-6 first:pt-0 last:pb-0">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-[#152136]">
                  <FiTrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 text-base font-bold text-[#152136] sm:text-lg">
                    Modelo predictivo explicado
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    No te dejamos una caja negra. Tu equipo entiende qué
                    variables mueven tu sell-out y por qué.
                  </p>
                </div>
              </div>

              {/* Ítem 3: Sesiones de inteligencia comercial */}
              <div className="flex items-start gap-5 py-6 first:pt-0 last:pb-0">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-[#152136]">
                  <FiUsers className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 text-base font-bold text-[#152136] sm:text-lg">
                    Sesiones de inteligencia comercial
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    Nos sentamos con tu equipo a leer las variables y a
                    convertirlas en decisiones concretas para el siguiente
                    ciclo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
