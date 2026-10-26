import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children, //lo que se escribe dentro del bóton
  href, //opcional, si se quiere que el botón sea un enlace
  onClick, //opcional,la funcion que se ejecutaal hacer clic si es un botón
  variant = 'primary', //Selecciona un estilo predefinido (primary, secondary, outline).
  className = '', //inyecta clases adicionales de Tailwind CSS para personalizar el estilo del botón
}) => {
  // Estilos base compartidos por todos los botones
  const baseStyles =
    'rounded-lg px-5 py-2.5 text-sm font-medium transition-all shadow-md inline-flex items-center justify-center cursor-pointer';

  // Variantes de color basadas en la identidad de InShelf
  const variants = {
    // Botón principal
    primary:
      'bg-[#ff5743] hover:bg-[#ff5743] text-white shadow-md shadow-[#ff5743]/20 border border-transparent px-6 py-3 text-base sm:text-lg lg:text-xl font-bold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#ff5743]/30 transition-all text-center',

    // Botón secundario (mismo padding responsivo)
    secondary:
      'border border-slate-400/50 bg-[#152136]/50 text-white hover:bg-slate-800/80 hover:border-slate-300 shadow-none px-6 py-3 text-base sm:text-lg lg:text-xl font-bold hover:-translate-y-0.5 transition-all text-center',

    outline:
      'border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 shadow-none text-center',
  };

  const combinedClassName = twMerge(baseStyles, variants[variant], className);

  // Si se le pasa un href, se renderiza como un enlace <a>
  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  // De lo contrario, se renderiza como un botón <button> estándar
  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};
