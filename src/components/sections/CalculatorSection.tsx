import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { FiAlertTriangle } from 'react-icons/fi';

export const CalculatorSection: React.FC = () => {
  // Estados manejados como texto para permitir escritura y borrado libre
  const [stores, setStores] = useState<string>('300');
  const [avgSales, setAvgSales] = useState<string>('3500000');
  const [failPercentage, setFailPercentage] = useState<string>('12');
  const [lossPercentage, setLossPercentage] = useState<string>('25');

  // Estado para feedback de copiado
  const [copied, setCopied] = useState<boolean>(false);

  // Conversiones seguras a números para los cálculos
  const safeStores = Math.max(10, Math.min(5000, Number(stores) || 0));
  const safeAvgSales = Math.max(0, Number(avgSales) || 0);
  const safeFail = Math.max(0, Math.min(100, Number(failPercentage) || 0));
  const safeLoss = Math.max(0, Math.min(100, Number(lossPercentage) || 0));

  // Cálculos en tiempo real
  const storesWithFails = Math.round(safeStores * (safeFail / 100));
  const monthlyLoss = Math.round(
    storesWithFails * safeAvgSales * (safeLoss / 100),
  );
  const yearlyLoss = monthlyLoss * 12;

  // Formateador de moneda en pesos colombianos (COP)
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `Pérdida mensual estimada: ${formatCurrency(monthlyLoss)} (${storesWithFails} PDV con fallas)`,
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="calculadora"
      className="border-b border-slate-200 bg-slate-50 px-4 py-20 text-slate-900 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* ENCABEZADO DE LA SECCIÓN CALCULADORA */}
        <div className="mb-12 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#ff5743]"></span>
            <span className="text-lg font-bold tracking-widest text-[#ff5743] uppercase">
              Calculadora
            </span>
          </div>
          <h2 className="mb-4 text-3xl leading-tight font-extrabold tracking-tight text-[#152136] sm:text-4xl lg:text-5xl">
            ¿Cuánta venta se te está <br className="hidden sm:inline" />
            quedando en la góndola?
          </h2>
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            Pon tus propios supuestos. En menos de un minuto tienes una cifra
            para llevarle à tu comité.
          </p>
        </div>

        {/* TARJETA ÚNICA UNIFICADA DE LA CALCULADORA */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* LADO IZQUIERDO: CONTROLES */}
            <div className="flex flex-col justify-start px-8 py-8 sm:px-10 sm:py-10 lg:col-span-6">
              <div className="mt-9 mb-8 inline-block w-fit rounded-lg bg-slate-100/80 px-3.5 py-1.5 text-xs font-medium text-slate-500">
                Valores de ejemplo. Cámbialos por los de tu operación.
              </div>

              <div className="space-y-5">
                {/* Control 1: Puntos de venta */}
                <div>
                  <label className="mb-1.5 block text-sm font-bold text-[#152136]">
                    Puntos de venta que atiendes
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="10"
                      max="5000"
                      step="1"
                      value={safeStores}
                      onChange={(e) => setStores(e.target.value)}
                      className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-[#ff5743]"
                    />
                    <input
                      type="number"
                      min="10"
                      max="5000"
                      value={stores}
                      onChange={(e) => setStores(e.target.value)}
                      className="w-28 rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2 text-center text-sm font-bold text-[#152136] focus:border-[#ff5743] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Control 2: Venta mensual promedio */}
                <div>
                  <label className="mb-1 block text-sm font-bold text-[#152136]">
                    Venta mensual promedio de tu marca por punto de venta
                  </label>
                  <span className="mb-1.5 block text-xs text-slate-400">
                    En pesos colombianos, a precio de venta al público.
                  </span>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-sm font-medium text-slate-400">
                      $
                    </span>
                    <input
                      type="number"
                      min="0"
                      step="100000"
                      value={avgSales}
                      onChange={(e) => setAvgSales(e.target.value)}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50/80 py-2.5 pr-3 pl-8 text-sm font-bold text-[#152136] focus:border-[#ff5743] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Control 3: % con fallas */}
                <div>
                  <label className="mb-1 block text-sm font-bold text-[#152136]">
                    Puntos de venta con fallas de ejecución en el mes
                  </label>
                  <span className="mb-1.5 block text-xs text-slate-400">
                    Agotados, precio incorrecto, mala ubicación o promoción sin
                    ejecutar.
                  </span>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={safeFail}
                      onChange={(e) => setFailPercentage(e.target.value)}
                      className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-[#ff5743]"
                    />
                    <div className="flex w-28 items-center justify-between rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2 text-sm font-bold text-[#152136]">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={failPercentage}
                        onChange={(e) => setFailPercentage(e.target.value)}
                        className="w-full bg-transparent text-center focus:outline-none"
                      />
                      <span className="text-slate-400">%</span>
                    </div>
                  </div>
                </div>

                {/* Control 4: % que se pierde */}
                <div>
                  <label className="mb-1 block text-sm font-bold text-[#152136]">
                    Venta que se pierde en esos puntos de venta
                  </label>
                  <span className="mb-1.5 block text-xs text-slate-400">
                    Qué parte de la venta mensual se escapa mientras la falla no
                    se corrige.
                  </span>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={safeLoss}
                      onChange={(e) => setLossPercentage(e.target.value)}
                      className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-[#ff5743]"
                    />
                    <div className="flex w-28 items-center justify-between rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2 text-sm font-bold text-[#152136]">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={lossPercentage}
                        onChange={(e) => setLossPercentage(e.target.value)}
                        className="w-full bg-transparent text-center focus:outline-none"
                      />
                      <span className="text-slate-400">%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LADO DERECHO: RESUMEN FINANCIERO */}
            <div className="flex flex-col justify-between bg-[#0b1528] px-8 py-8 text-white sm:px-10 sm:py-10 lg:col-span-6">
              <div>
                {/* Header Tarjeta */}
                <div className="mb-6 flex items-center gap-3 border-b border-slate-800/80 pb-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ff5743] text-white shadow-md shadow-[#ff5743]/30">
                    <FiAlertTriangle className="h-4 w-4" />
                  </span>
                  <h3 className="text-lg font-bold tracking-tight text-white">
                    Venta en riesgo cada mes
                  </h3>
                </div>

                {/* Resultado Principal */}
                <div className="mb-5">
                  <div className="mb-2 text-4xl font-extrabold tracking-tight text-[#ff5743] sm:text-5xl">
                    {formatCurrency(monthlyLoss)}
                  </div>
                  <p className="text-sm font-medium text-slate-300">
                    en{' '}
                    <span className="font-bold text-white">
                      {storesWithFails} puntos de venta
                    </span>{' '}
                    con fallas
                  </p>
                </div>

                {/* Resultado Secundario */}
                <div className="mb-6 flex items-baseline gap-3 border-t border-slate-800/80 pt-5">
                  <span className="text-sm text-slate-400">En un año</span>
                  <span className="text-2xl font-bold text-white">
                    {formatCurrency(yearlyLoss)}
                  </span>
                </div>

                {/* Fórmula explicativa */}
                <div className="mb-5 rounded-xl border border-slate-800/60 bg-[#131f37] p-4 font-mono text-xs leading-relaxed text-slate-300">
                  {safeStores} PDV × {formatCurrency(safeAvgSales)} × {safeFail}
                  % con fallas × {safeLoss}% de venta perdida
                  <br />={' '}
                  <span className="text-[14px] font-bold text-white">
                    {formatCurrency(monthlyLoss)} al mes
                  </span>
                </div>

                <p className="mb-6 text-xs text-slate-400 italic">
                  Estimación construida con tus supuestos. No es una promesa de
                  resultados.
                </p>
              </div>

              {/* Botones de acción */}
              <div className="space-y-3">
                <Button
                  variant="primary"
                  onClick={handleScrollToContact}
                  className="w-full justify-center py-3.5 text-base shadow-lg shadow-[#ff5743]/30"
                >
                  Revisemos este número juntos
                </Button>

                <Button
                  variant="secondary"
                  onClick={handleCopy}
                  className="w-full justify-center py-3 text-sm font-bold"
                >
                  {copied
                    ? '¡Copiado al portapapeles! ✓'
                    : 'Copiar para mi equipo'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
