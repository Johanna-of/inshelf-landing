import React, { useState } from 'react';
import logo_blanco from '@/assets/logo_blanco.png';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Función para hacer el desplazamiento suave en los enlaces internos del menú
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1e2f4d]/60 bg-[#152136]/90 backdrop-blur-md">
      {/* Cinta / Banner Superior de Promoción / Evento */}
      <div className="bg-[#ff5743] py-3 text-center text-xs font-medium text-white sm:text-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-8 sm:px-12 lg:px-16">
          <span>
            Góndola 2026 · 28 al 30 de octubre · Cartagena. Nuestro equipo
            estará allá.
          </span>
        </div>
      </div>

      {/* Barra de Navegación Principal */}
      <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
        <div className="flex h-22 items-center justify-between">
          {/* Logo enlazado al inicio (#inicio) */}
          <a
            href="#inicio"
            onClick={(e) => scrollToSection(e, '#inicio')}
            className="flex cursor-pointer items-center"
          >
            <img
              src={logo_blanco}
              alt="InShelf Logo"
              className="h-17 w-auto object-contain"
            />
          </a>

          {/* Menú Desktop */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex xl:gap-8">
            <a
              href="#como-funciona"
              onClick={(e) => scrollToSection(e, '#como-funciona')}
              className="transition-colors hover:text-white"
            >
              Cómo funciona
            </a>
            <a
              href="#torre-de-control"
              onClick={(e) => scrollToSection(e, '#torre-de-control')}
              className="transition-colors hover:text-white"
            >
              Torre de control
            </a>
            <a
              href="#calculadora"
              onClick={(e) => scrollToSection(e, '#calculadora')}
              className="transition-colors hover:text-white"
            >
              Calculadora
            </a>
            <a
              href="#faq"
              onClick={(e) => scrollToSection(e, '#faq')}
              className="transition-colors hover:text-white"
            >
              Preguntas
            </a>
          </nav>

          {/* Botón Desktop de Agendar Demo (Redirige a WhatsApp) */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/573146361640?text=Hola,%20quiero%20agendar%20una%20demo%20de%20InShelf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-[#ff5743] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#ff5743]/20 transition-all hover:bg-[#e04837]"
            >
              Agendar demo
            </a>
          </div>

          {/* Botón Menú Móvil (Hamburguesa) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white lg:hidden"
            aria-label="Abrir menú"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menú Desplegable Móvil */}
        {isMobileMenuOpen && (
          <div className="space-y-3 border-t border-[#1e2f4d] py-4 lg:hidden">
            <a
              href="#como-funciona"
              onClick={(e) => scrollToSection(e, '#como-funciona')}
              className="block py-1 text-sm font-medium text-slate-300 hover:text-white"
            >
              Cómo funciona
            </a>
            <a
              href="#torre-de-control"
              onClick={(e) => scrollToSection(e, '#torre-de-control')}
              className="block py-1 text-sm font-medium text-slate-300 hover:text-white"
            >
              Torre de control
            </a>
            <a
              href="#calculadora"
              onClick={(e) => scrollToSection(e, '#calculadora')}
              className="block py-1 text-sm font-medium text-slate-300 hover:text-white"
            >
              Calculadora
            </a>
            <a
              href="#faq"
              onClick={(e) => scrollToSection(e, '#faq')}
              className="block py-1 text-sm font-medium text-slate-300 hover:text-white"
            >
              Preguntas
            </a>
            <a
              href="https://wa.me/573146361640?text=Hola,%20quiero%20agendar%20una%20demo%20de%20InShelf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 block rounded-lg bg-[#ff5743] py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-[#e04a37]"
            >
              Agendar demo
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
