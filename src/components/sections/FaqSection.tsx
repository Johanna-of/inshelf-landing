import React, { useState } from 'react';
import { FiPlus, FiX } from 'react-icons/fi';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question:
      '¿Tengo que cambiar mi equipo de campo o mi proveedor de mercaderistas?',
    answer:
      'No. InShelf funciona con el equipo que ya tienes, propio o tercerizado. Tu equipo usa la app en cada visita y tú ves la información en la torre de control.',
  },
  {
    question: '¿Sirve para grandes superficies y para canal tradicional?',
    answer:
      'Sí. Las seis variables aplican igual en una cadena de autoservicio que en una tienda de barrio. La torre de control te deja comparar ambos canales en un mismo tablero.',
  },
  {
    question: '¿Qué necesita mi equipo para empezar?',
    answer:
      'Un celular con la app InShelf. Nosotros configuramos tus puntos de venta, referencias y metas, y capacitamos al equipo durante la implementación.',
  },
  {
    question: '¿Cuándo empiezo a ver información?',
    answer:
      'Desde la primera visita registrada, la torre de control muestra la ejecución. El modelo predictivo se construye con el historial de tu operación, y te explicamos cómo y en qué plazo en la propuesta.',
  },
  {
    question: '¿Cuánto cuesta?',
    answer:
      'Depende del tamaño de tu equipo y del alcance que necesites. No trabajamos con tarifas genéricas: primero entendemos tu operación y en una segunda conversación te presentamos una propuesta hecha a tu medida.',
  },
];

export const FaqSection: React.FC = () => {
  // Estado para controlar qué preguntas están abiertas (permite abrir varias a la vez)
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section
      id="faq"
      className="bg-slate-50 px-4 py-24 text-slate-900 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-4xl">
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#ff5743]"></span>
            <span className="text-lg font-bold tracking-widest text-[#ff5743] uppercase">
              Preguntas Frecuentes
            </span>
          </div>
          <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-[#152136] sm:text-4xl lg:text-5xl">
            Lo que nos preguntan antes de la primera reunión.
          </h2>
        </div>

        {/* LISTA DE ACORDEÓN */}
        <div className="border-t border-slate-300">
          {faqData.map((item, index) => {
            const isOpen = openIndexes.includes(index);

            return (
              <div key={index} className="border-b border-slate-300">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full cursor-pointer items-center justify-between py-6 text-left transition-colors hover:text-[#ff5743]"
                >
                  <span className="pr-4 text-base font-bold text-[#152136] sm:text-lg">
                    {item.question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center text-[#ff5743]">
                    {isOpen ? (
                      <FiX className="h-5 w-5 stroke-[2.5]" />
                    ) : (
                      <FiPlus className="h-5 w-5 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="animate-fadeIn pr-12 pb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
