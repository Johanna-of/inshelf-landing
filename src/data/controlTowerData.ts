export interface VariableMetric {
  name: string;
  percentage: number;
  status: 'meta' | 'risk' | 'critical';
}

export interface AlertItem {
  id: string;
  store: string;
  variable: string;
  finding: string;
  status: 'Critica' | 'En riesgo' | 'Resuelta';
}

export interface ChartData {
  yLabels: string[];
  realPoints: string;
  projPoints: string;
  rangePoints: string;
  todayVal: number;
  todayPos: { x: number; y: number };
  projVal: number;
  projPos: { x: number; y: number };
}

export interface RegionData {
  executionIndex: number;
  executionTrend: string;
  visitedStores: string;
  coverage: string;
  openAlerts: number;
  criticalAlerts: number;
  variables: VariableMetric[];
  chart: ChartData;
  alertsTable: AlertItem[];
}

export const CONTROL_TOWER_DATA: Record<
  'centro' | 'costa' | 'antioquia',
  RegionData
> = {
  centro: {
    executionIndex: 78,
    executionTrend: '+4 pts vs. semana 41',
    visitedStores: '214 / 240',
    coverage: '89% de cobertura',
    openAlerts: 17,
    criticalAlerts: 6,
    variables: [
      { name: 'Disponibilidad', percentage: 71, status: 'risk' },
      { name: 'Precio', percentage: 88, status: 'meta' },
      { name: 'Calidad', percentage: 92, status: 'meta' },
      { name: 'Visibilidad', percentage: 79, status: 'risk' },
      { name: 'Promoción', percentage: 64, status: 'critical' },
      { name: 'Activación', percentage: 86, status: 'meta' },
    ],
    chart: {
      yLabels: ['200', '188', '175', '163', '150'],
      realPoints: '35,68 85,90 135,38 185,112 235,135 285,92 335,120 360,150',
      projPoints: '360,150 410,120 460,88 495,70',
      rangePoints: '360,150 410,130 495,120 495,45 410,85 360,150',
      todayVal: 160,
      todayPos: { x: 360, y: 150 },
      projVal: 184,
      projPos: { x: 495, y: 70 },
    },
    alertsTable: [
      {
        id: '1',
        store: 'Supermercado · Chapinero',
        variable: 'DISPONIBILIDAD',
        finding: 'Quiebre en 2 referencias líderes',
        status: 'Critica',
      },
      {
        id: '2',
        store: 'Autoservicio · Soacha',
        variable: 'PROMOCIÓN',
        finding: 'Promoción 2x1 sin exhibir',
        status: 'Critica',
      },
      {
        id: '3',
        store: 'Tienda · Kennedy',
        variable: 'PRECIO',
        finding: 'Precio 12% por encima del pactado',
        status: 'En riesgo',
      },
      {
        id: '4',
        store: 'Gran superficie · Usaquén',
        variable: 'VISIBILIDAD',
        finding: 'Producto en nivel inferior',
        status: 'En riesgo',
      },
    ],
  },
  costa: {
    executionIndex: 69,
    executionTrend: '-3 pts vs. semana 41',
    visitedStores: '132 / 160',
    coverage: '83% de cobertura',
    openAlerts: 24,
    criticalAlerts: 9,
    variables: [
      { name: 'Disponibilidad', percentage: 62, status: 'critical' },
      { name: 'Precio', percentage: 81, status: 'risk' },
      { name: 'Calidad', percentage: 84, status: 'risk' },
      { name: 'Visibilidad', percentage: 66, status: 'critical' },
      { name: 'Promoción', percentage: 58, status: 'critical' },
      { name: 'Activación', percentage: 77, status: 'risk' },
    ],
    chart: {
      yLabels: ['140', '125', '110', '95', '80'],
      realPoints: '35,70 85,50 135,78 185,55 235,85 285,102 335,70 360,122',
      projPoints: '360,122 410,135 460,98 495,80',
      rangePoints: '360,122 410,155 495,110 495,50 410,110 360,122',
      todayVal: 108,
      todayPos: { x: 360, y: 122 },
      projVal: 121,
      projPos: { x: 495, y: 80 },
    },
    alertsTable: [
      {
        id: '1',
        store: 'Gran superficie · Barranquilla',
        variable: 'DISPONIBILIDAD',
        finding: 'Quiebre en la referencia de mayor rotación',
        status: 'Critica',
      },
      {
        id: '2',
        store: 'Supermercado · Cartagena',
        variable: 'PROMOCIÓN',
        finding: 'Material POP sin instalar',
        status: 'Critica',
      },
      {
        id: '3',
        store: 'Tienda · Santa Marta',
        variable: 'VISIBILIDAD',
        finding: 'Frentes cedidos a la competencia',
        status: 'En riesgo',
      },
      {
        id: '4',
        store: 'Autoservicio · Montería',
        variable: 'PRECIO',
        finding: 'Etiqueta de precio ausente',
        status: 'En riesgo',
      },
    ],
  },
  antioquia: {
    executionIndex: 84,
    executionTrend: '+2 pts vs. semana 41',
    visitedStores: '176 / 185',
    coverage: '95% de cobertura',
    openAlerts: 8,
    criticalAlerts: 2,
    variables: [
      { name: 'Disponibilidad', percentage: 86, status: 'meta' },
      { name: 'Precio', percentage: 91, status: 'meta' },
      { name: 'Calidad', percentage: 94, status: 'meta' },
      { name: 'Visibilidad', percentage: 83, status: 'risk' },
      { name: 'Promoción', percentage: 76, status: 'risk' },
      { name: 'Activación', percentage: 88, status: 'meta' },
    ],
    chart: {
      yLabels: ['190', '175', '160', '145', '130'],
      realPoints:
        '35,150 85,138 135,125 185,132 235,110 285,118 335,102 360,98',
      projPoints: '360,98 410,88 460,75 495,65',
      rangePoints: '360,98 410,110 495,95 495,45 410,65 360,98',
      todayVal: 158,
      todayPos: { x: 360, y: 98 },
      projVal: 170,
      projPos: { x: 495, y: 65 },
    },
    alertsTable: [
      {
        id: '1',
        store: 'Droguería · Envigado',
        variable: 'PROMOCIÓN',
        finding: 'Promoción vigente sin comunicar',
        status: 'Critica',
      },
      {
        id: '2',
        store: 'Gran superficie · Medellín',
        variable: 'VISIBILIDAD',
        finding: 'Cabecera de góndola sin armar',
        status: 'En riesgo',
      },
      {
        id: '3',
        store: 'Tienda · Bello',
        variable: 'DISPONIBILIDAD',
        finding: '1 referencia con quiebre',
        status: 'En riesgo',
      },
      {
        id: '4',
        store: 'Supermercado · Rionegro',
        variable: 'ACTIVACIÓN',
        finding: 'Activación ejecutada según plan',
        status: 'Resuelta',
      },
    ],
  },
};
