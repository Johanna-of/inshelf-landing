import React from 'react';
import logo_blanco from '@/assets/logo_blanco.png';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#0b1528] px-4 py-7 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          {/* COLUMNA IZQUIERDA: LOGO REAL DESDE ASSETS */}
          <div className="flex items-center">
            <img
              src={logo_blanco}
              alt="InShelf Logo"
              className="h-20 w-auto object-contain sm:h-24"
            />
          </div>

          {/* COLUMNA CENTRAL: FRASE INSTITUCIONAL */}
          <div>
            <p className="text-sm font-medium text-slate-300 italic sm:text-base">
              "Saber qué hacer no es el problema. Ejecutarlo, sí."
            </p>
          </div>

          {/* COLUMNA DERECHA: COPYRIGHT */}
          <div>
            <p className="text-xs text-slate-500">© 2026 InShelf · Colombia</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
