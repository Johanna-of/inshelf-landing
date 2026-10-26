export interface ComparisonItem {
  id: string;
  before: string;
  after: string;
}

export interface ValuePropRole {
  role: string;
  title: string;
  description: string;
}

export const COMPARISON_DATA: ComparisonItem[] = [
  {
    id: '1',
    before: 'Reportes por chat, fotos sueltas y planillas',
    after: 'Un solo registro por visita, con evidencia',
  },
  {
    id: '2',
    before: 'Te enteras del agotado en el informe del mes',
    after: 'Lo ves en la torre de control al cerrar la visita',
  },
  {
    id: '3',
    before: 'Cada proveedor de campo reporta a su manera',
    after: 'Las mismas seis variables para todos',
  },
  {
    id: '4',
    before: 'El sell-out se explica después del cierre',
    after: 'La caída se anticipa y se corrige antes',
  },
  {
    id: '5',
    before: 'Decisiones por intuición del ejecutivo de cuenta',
    after: 'Prioridades ordenadas por impacto en la venta',
  },
];

export const VALUE_PROPS_BY_ROLE: ValuePropRole[] = [
  {
    role: 'GERENCIA DE TRADE MARKETING',
    title: 'Sabes si lo que planeaste se ejecutó.',
    description:
      'Cumplimiento por variable, cadena y ciudad, con evidencia de cada visita para defender tu inversión en el punto de venta.',
  },
  {
    role: 'GERENCIA COMERCIAL Y KAM',
    title: 'Llegas a la negociación con datos.',
    description:
      'Agotados, precios y exhibición documentados por punto de venta para conversar con cada cadena desde los hechos.',
  },
  {
    role: 'DIRECCIÓN GENERAL',
    title: 'Ves hacia dónde va la venta.',
    description:
      'Una proyección de sell-out conectada con lo que pasa en la calle, para decidir antes de que el mes esté perdido.',
  },
];
