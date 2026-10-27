export interface HexagonVariable {
  id: string;
  num: string;
  title: string;
  desc: string;
  x: number;
  y: number;
  textX: number;
  textY: number;
  textAnchor: 'start' | 'end' | 'middle';
  prevId: string;
}

export const HEXAGON_VARIABLES: HexagonVariable[] = [
  {
    id: 'disponibilidad',
    num: '01',
    title: 'Disponibilidad',
    desc: '¿Está tu producto en el anaquel, con los frentes acordados?',
    x: 270,
    y: 80,
    textX: 240, // Movido más a la derecha
    textY: 40, // Ajustado hacia arriba
    textAnchor: 'start',
    prevId: 'activacion',
  },
  {
    id: 'precio',
    num: '02',
    title: 'Precio',
    desc: '¿Se exhibe al precio pactado y bien marcado?',
    x: 270,
    y: 180,
    textX: 295, // Movido más a la derecha
    textY: 140, // Ajustado hacia abajo
    textAnchor: 'start',
    prevId: 'disponibilidad',
  },
  {
    id: 'calidad',
    num: '03',
    title: 'Calidad',
    desc: '¿Está en buen estado, limpio y dentro de fecha?',
    x: 180,
    y: 230,
    textX: 240, // Separado del vértice inferior derecho
    textY: 233, // Bajado para darle aire
    textAnchor: 'start',
    prevId: 'precio',
  },
  {
    id: 'visibilidad',
    num: '04',
    title: 'Visibilidad',
    desc: '¿Está en el nivel y la ubicación negociados con la cadena?',
    x: 90,
    y: 180,
    textX: 120, // Separado del vértice inferior izquierdo
    textY: 230, // Bajado para darle aire
    textAnchor: 'end',
    prevId: 'calidad',
  },
  {
    id: 'promocion',
    num: '05',
    title: 'Promoción',
    desc: '¿La promoción vigente se cumple en el punto de venta?',
    x: 90,
    y: 80,
    textX: 65, // Movido más a la izquierda
    textY: 140, // Ajustado
    textAnchor: 'end',
    prevId: 'visibilidad',
  },
  {
    id: 'activacion',
    num: '06',
    title: 'Activación',
    desc: '¿La activación planeada se ejecutó como se diseñó?',
    x: 180,
    y: 30,
    textX: 115, // Movido más a la izquierda
    textY: 39, // Ajustado
    textAnchor: 'end',
    prevId: 'promocion',
  },
];
