import React from 'react';
import { Button } from '@/components/ui/Button';
import { GridBackground } from '@/components/ui/GridBackground';

export const Banner: React.FC = () => {
  // Función simplificada que recibe el id directamente sin el evento e
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#152136] py-20 text-white lg:py-25"
    >
      {/* FONDO DE CUADRÍCULA TÉCNICA (SVG) */}
      <GridBackground />

      {/* CONTENIDO PRINCIPAL DEL BANNER */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-8">
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
        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          InShelf convierte cada visita de tu equipo de campo en un dato
          verificable, y cada dato en una{' '}
          <strong className="font-semibold text-white">
            predicción de sell-out
          </strong>
          . Ve qué está pasando en tus puntos de venta mientras todavía puedes
          corregirlo.
        </p>

        {/* Botones de Acción usando tu componente reutilizable Button */}
        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Botón Primario: Va al formulario de contacto */}
          <Button
            variant="primary"
            onClick={() => scrollToSection('#contacto')}
          >
            Agenda una demo de 30 minutos →
          </Button>

          {/* Botón Secundario: Va a la calculadora */}
          <Button
            variant="secondary"
            onClick={() => scrollToSection('#calculadora')}
          >
            Calcula lo que está en juego
          </Button>
        </div>

        {/* Viñetas o Características Inferiores */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5743]"></span>
            Funciona con tu equipo propio o tercero
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5743]"></span>6
            variables en cada visita
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5743]"></span>
            Modelo predictivo explicado a tu equipo
          </span>
        </div>
      </div>
    </section>
  );
};
