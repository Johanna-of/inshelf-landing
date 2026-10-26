import React from 'react';

export const ExecutionSection: React.FC = () => {
  return (
    <section className="border-b border-[#1e2f4d]/60 bg-[#152136] px-4 py-24 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl text-center">
        {/* Título principal */}
        <h2 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Saber qué hacer no es el problema.{' '}
          <span className="text-[#ff5743]">
            Ejecutarlo en cada punto de venta, sí.
          </span>
        </h2>

        {/* Descripción de apoyo */}
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          InShelf existe para cerrar la distancia entre lo que tu compañía
          decide en la sala de juntas y lo que el comprador encuentra frente al
          anaquel.
        </p>
      </div>
    </section>
  );
};
