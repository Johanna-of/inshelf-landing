import React, { useState } from 'react';
import { CONTROL_TOWER_DATA } from '@/data/controlTowerData';
import { Button } from '../ui/Button';

export const ControlTowerSection: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<
    'centro' | 'costa' | 'antioquia'
  >('centro');
  const data = CONTROL_TOWER_DATA[selectedRegion];

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="torre-de-control"
      className="border-b border-slate-200 bg-white px-4 py-20 text-slate-900 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* ENCABEZADO SUPERIOR DE LA SECCIÓN */}
        <div className="mb-12 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#ff5743]"></span>
            <span className="text-lg font-bold tracking-widest text-[#ff5743] uppercase">
              Torre de control
            </span>
          </div>
          <h2 className="mb-6 text-3xl leading-tight font-extrabold tracking-tight text-[#152136] sm:text-4xl lg:text-5xl">
            Así se ve tu operación <br className="hidden sm:inline" />
            cuando por fin la ves completa.
          </h2>
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            Cambia de región y mira cómo el tablero te dice dónde está el
            problema, qué variable lo explica y hacia dónde va el sell-out.
          </p>
        </div>

        {/* CONTENEDOR PRINCIPAL DEL TABLERO / DASHBOARD */}
        <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-50/80 p-6 shadow-xl sm:p-10">
          {/* HEADER INTERNO CON TÍTULO Y SELECTOR DE REGIONES */}
          <div className="mb-8 flex flex-col gap-4 rounded-2xl bg-[#152136] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold tracking-tight text-white">
                InShelf
              </span>
              <span className="text-slate-400">|</span>
              <span className="text-sm font-medium text-slate-300">
                Torre de control · Semana 42
              </span>
            </div>

            {/* Pestañas de Regiones */}
            <div className="flex items-center rounded-xl bg-slate-900/60 p-1.5">
              {(['centro', 'costa', 'antioquia'] as const).map((region) => {
                const isActive = selectedRegion === region;
                return (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`rounded-lg px-4 py-2 text-xs font-bold capitalize transition-all duration-200 ${
                      isActive
                        ? 'bg-white text-[#152136] shadow-sm'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {region}
                  </button>
                );
              })}
            </div>
          </div>

          {/* GRID DE 3 TARJETAS SUPERIORES (KPIs) */}
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="text-xs font-medium text-slate-500">
                Índice de ejecución
              </span>
              <div className="my-2 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-[#152136]">
                  {data.executionIndex}
                </span>
                <span className="text-lg font-bold text-slate-700">%</span>
              </div>
              <p
                className={`text-xs font-semibold ${data.executionTrend.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}
              >
                {data.executionTrend}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="text-xs font-medium text-slate-500">
                Puntos de venta visitados
              </span>
              <div className="my-2 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-[#152136]">
                  {data.visitedStores.split('/')[0]}
                </span>
                <span className="text-base text-slate-400">
                  / {data.visitedStores.split('/')[1]}
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-600">
                {data.coverage}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="text-xs font-medium text-slate-500">
                Alertas abiertas
              </span>
              <div className="my-2">
                <span className="text-4xl font-extrabold text-[#152136]">
                  {data.openAlerts}
                </span>
              </div>
              <p className="text-xs font-semibold text-rose-500">
                • {data.criticalAlerts} críticas
              </p>
            </div>
          </div>

          {/* GRID CENTRAL: CUMPLIMIENTO Y GRÁFICA */}
          <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Cumplimiento por variable */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-5">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#152136]">
                  Cumplimiento por variable
                </h3>
                <span className="text-[11px] font-medium text-slate-400">
                  meta 85%
                </span>
              </div>

              <div className="space-y-4">
                {data.variables.map((v) => {
                  const barColor =
                    v.status === 'meta'
                      ? 'bg-emerald-500'
                      : v.status === 'risk'
                        ? 'bg-amber-500'
                        : 'bg-rose-500';

                  return (
                    <div
                      key={v.name}
                      className="flex items-center justify-between text-xs"
                    >
                      <span className="w-28 font-medium text-slate-700">
                        {v.name}
                      </span>
                      <div className="mx-2 h-2.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${barColor}`}
                          style={{ width: `${v.percentage}%` }}
                        ></div>
                      </div>
                      <span className="w-8 text-right font-bold text-slate-900">
                        {v.percentage}%
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center gap-4 text-[11px] text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>{' '}
                  En meta
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span> En
                  riesgo
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-rose-500"></span>{' '}
                  Crítico
                </div>
              </div>
            </div>

            {/* Gráfica Dinámica por Región */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-7">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#152136]">
                  Sell-out semanal y proyección
                </h3>
                <span className="text-[11px] font-medium text-slate-400">
                  millones COP
                </span>
              </div>

              <div className="relative my-4 h-52 w-full">
                <svg
                  viewBox="0 0 520 200"
                  className="h-full w-full overflow-visible"
                >
                  <polygon
                    points={`35,175 ${data.chart.realPoints} 360,175`}
                    fill="#f8fafc"
                    opacity="0.8"
                  />

                  {data.chart.yLabels.map((label, idx) => {
                    const yPos = 25 + idx * 37.5;
                    return (
                      <g key={`y-${label}-${idx}`}>
                        <text
                          x="0"
                          y={yPos + 3}
                          className="fill-slate-400 text-[10px] font-medium"
                        >
                          {label}
                        </text>
                        <line
                          x1="30"
                          y1={yPos}
                          x2="500"
                          y2={yPos}
                          stroke="#f1f5f9"
                          strokeWidth="1"
                        />
                      </g>
                    );
                  })}

                  <polygon
                    points={data.chart.rangePoints}
                    fill="#bae6fd"
                    opacity="0.4"
                  />

                  <line
                    x1="360"
                    y1="15"
                    x2="360"
                    y2="175"
                    stroke="#cbd5e1"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                  <text
                    x="365"
                    y="25"
                    className="fill-slate-400 text-[9px] font-bold tracking-wider"
                  >
                    HOY
                  </text>

                  <polyline
                    fill="none"
                    stroke="#152136"
                    strokeWidth="2.5"
                    points={data.chart.realPoints}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <polyline
                    fill="none"
                    stroke="#0ea5e9"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    points={data.chart.projPoints}
                    strokeLinecap="round"
                  />

                  <circle
                    cx={data.chart.todayPos.x}
                    cy={data.chart.todayPos.y}
                    r="4.5"
                    fill="#152136"
                  />
                  <text
                    x={data.chart.todayPos.x - 22}
                    y={data.chart.todayPos.y - 8}
                    className="fill-[#152136] text-[11px] font-black"
                  >
                    {data.chart.todayVal}
                  </text>

                  <circle
                    cx={data.chart.projPos.x}
                    cy={data.chart.projPos.y}
                    r="4.5"
                    fill="#0ea5e9"
                  />
                  <text
                    x={data.chart.projPos.x - 12}
                    y={data.chart.projPos.y - 12}
                    className="fill-[#152136] text-[11px] font-black"
                  >
                    {data.chart.projVal}
                  </text>

                  <g
                    className="fill-slate-400 text-[10px] font-medium"
                    textAnchor="middle"
                  >
                    <text x="35" y="195">
                      S35
                    </text>
                    <text x="135" y="195">
                      S37
                    </text>
                    <text x="235" y="195">
                      S39
                    </text>
                    <text x="300" y="195">
                      S41
                    </text>
                    <text x="360" y="195">
                      S43
                    </text>
                    <text x="440" y="195">
                      S45
                    </text>
                    <text x="495" y="195">
                      S46
                    </text>
                  </g>
                </svg>
              </div>

              <div className="mt-4 flex items-center gap-6 text-[11px] text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="h-0.5 w-4 bg-[#152136]"></span> Sell-out real
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-0.5 w-4 bg-sky-500"></span> Proyección
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-3 rounded bg-sky-200"></span> Rango
                  probable
                </div>
              </div>
            </div>
          </div>

          {/* TABLA INFERIOR */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-sm font-bold text-[#152136]">
                Qué corregir primero
              </h3>
              <span className="text-[11px] font-medium text-slate-400">
                ordenado por impacto
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400">
                    <th className="pb-3 font-semibold uppercase">
                      Punto de venta
                    </th>
                    <th className="pb-3 font-semibold uppercase">Variable</th>
                    <th className="pb-3 font-semibold uppercase">Hallazgo</th>
                    <th className="pb-3 text-right font-semibold uppercase">
                      Estado
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {data.alertsTable.map((item) => (
                    <tr
                      key={item.id}
                      className="transition-colors hover:bg-slate-50/50"
                    >
                      <td className="py-4 font-semibold text-[#152136]">
                        {item.store}
                      </td>
                      <td className="py-4">
                        <span className="rounded bg-slate-100 px-2 py-1 font-mono text-[10px] font-bold text-slate-600">
                          {item.variable}
                        </span>
                      </td>
                      <td className="py-4 text-slate-600">{item.finding}</td>
                      <td className="py-4 text-right">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold ${
                            item.status === 'Critica'
                              ? 'bg-rose-50 text-rose-600'
                              : item.status === 'En riesgo'
                                ? 'bg-amber-50 text-amber-600'
                                : 'bg-emerald-50 text-emerald-600'
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              item.status === 'Critica'
                                ? 'bg-rose-500'
                                : item.status === 'En riesgo'
                                  ? 'bg-amber-500'
                                  : 'bg-emerald-500'
                            }`}
                          ></span>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* PIE DE PÁGINA DE LA SECCIÓN */}
        <div className="mt-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="max-w-xl text-xs leading-relaxed text-slate-500 sm:text-sm">
            Tablero de demostración con datos ficticios. En la reunión te lo
            mostramos con un escenario parecido a tu operación.
          </p>

          <Button
            variant="primary"
            onClick={handleScrollToContact}
            className="group gap-2"
          >
            <span>Quiero verlo con mis datos</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
