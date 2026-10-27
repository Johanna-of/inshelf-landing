import React from 'react';
import { Button } from '@/components/ui/Button';
import bannerImage from '@/assets/InShelf-banner.png';

export const Banner: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#152136] py-20 text-white lg:py-28"
    >
      {/* FONDO DE IMAGEN */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={bannerImage}
          alt="Fondo de la sección de banner"
          className="h-full w-full object-cover object-center"
        />
        {/* Capa oscura semitransparente */}
        <div className="absolute inset-0 bg-[#152136]/60" />
      </div>

      {/* CONTENIDO PRINCIPAL - Movido hacia la izquierda con ml-4 / lg:ml-16 */}
      <div className="relative z-10 ml-4 w-full max-w-4xl px-6 text-left sm:ml-10 sm:px-8 lg:ml-20">
        {/* Etiqueta superior pequeña */}
        <span className="mb-4 inline-block text-xs font-semibold tracking-widest text-sky-400 uppercase">
          EJECUCIÓN EN PUNTO DE VENTA · SELL-OUT
        </span>

        {/* Titular Principal Impactante */}
        <h1 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Cada hueco en la góndola es una venta que se lleva{' '}
          <span className="text-[#ff5743]">tu competencia.</span>
        </h1>

        {/* Descripción o Subtítulo */}
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          InShelf convierte cada visita de tu equipo de campo en un dato
          verificable, y cada dato en una{' '}
          <strong className="font-semibold text-white">
            predicción de sell-out
          </strong>
          . Ve qué está pasando en tus puntos de venta mientras todavía puedes
          corregirlo.
        </p>

        {/* Botones de Acción */}
        <div className="mb-12 flex flex-col items-start justify-start gap-4 sm:flex-row">
          <Button
            variant="primary"
            onClick={() => scrollToSection('#contacto')}
          >
            Agenda una demo de 30 minutos →
          </Button>

          <Button
            variant="secondary"
            onClick={() => scrollToSection('#calculadora')}
          >
            Calcula lo que está en juego
          </Button>
        </div>

        {/* Viñetas o Características Inferiores */}
        <div className="flex flex-wrap items-center justify-start gap-6 text-sm text-slate-400">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
            Funciona con tu equipo propio o tercero
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>6
            variables en cada visita
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
            Modelo predictivo explicado a tu equipo
          </span>
        </div>
      </div>
    </section>
  );
};
