export interface EquipmentItem {
  id: string;
  name: string;
  quantity: number;
  category: string;
  image?: string;
  note?: string;
}

export interface EquipmentCategory {
  id: string;
  name: string;
  items: EquipmentItem[];
}

export const equipmentCategories: EquipmentCategory[] = [
  {
    id: 'cameras',
    name: 'Kamery',
    items: [
      { id: 'sony-fx9', name: 'Sony PXW-FX9', quantity: 2, category: 'cameras', image: '/equipment/sony-fx9.jpg', note: 'W zestawie: rig, akumulatory, karty pamięci, czytnik' },
      { id: 'sony-fx6', name: 'Sony FX6', quantity: 2, category: 'cameras', image: '/equipment/sony-fx6.jpg', note: 'W zestawie: rig, akumulatory, karty pamięci, czytnik' },
    ],
  },
  {
    id: 'lenses',
    name: 'Obiektywy',
    items: [
      { id: 'sony-24-70', name: 'Sony 24-70mm f/2.8 GM II', quantity: 2, category: 'lenses', image: '/equipment/sony-24-70.jpg' },
      { id: 'sony-16-35', name: 'Sony 16-35mm f/2.8 GM II', quantity: 2, category: 'lenses', image: '/equipment/sony-16-35.jpg' },
      { id: 'sony-70-200', name: 'Sony 70-200mm f/2.8 GM II', quantity: 2, category: 'lenses', image: '/equipment/sony-70-200.jpg' },
    ],
  },
  {
    id: 'lighting',
    name: 'Światło',
    items: [
      { id: 'aputure-300x', name: 'Aputure LS 300X (V-Mount)', quantity: 2, category: 'lighting', image: '/equipment/aputure-600d.jpg', note: 'Opcjonalnie z akumulatorami V-Mount' },
      { id: 'aputure-fresnel', name: 'Aputure Fresnel 2X', quantity: 2, category: 'lighting', image: '/equipment/aputure-fresnel.jpg' },
      { id: 'nanlite-alien', name: 'Nanlite Alien 300C', quantity: 2, category: 'lighting', image: '/equipment/nanlite-alien.jpg', note: 'Opcjonalnie z akumulatorami V-Mount' },
    ],
  },
  {
    id: 'audio',
    name: 'Dźwięk',
    items: [
      { id: 'sennheiser-avx', name: 'Sennheiser AVX-ME2/835 Set (wireless)', quantity: 4, category: 'audio', image: '/equipment/sennheiser-avx.jpg' },
      { id: 'hollyland-solidcom', name: 'Hollyland Solidcom C1 Pro (intercom, 6 słuchawek)', quantity: 1, category: 'audio', image: '/equipment/hollyland-solidcom.jpg' },
    ],
  },
  {
    id: 'streaming',
    name: 'Realizacja / Streaming',
    items: [
      { id: 'atem-hd8', name: 'Blackmagic ATEM Television Studio HD8 ISO', quantity: 1, category: 'streaming', image: '/equipment/atem-mini.jpg', note: 'Opcjonalnie w zestawie: okablowanie SDI, MacBook Pro, monitor' },
      { id: 'swit-monitor', name: 'SWIT FM-215HDR 21,5" monitory', quantity: 2, category: 'streaming', image: '/equipment/swit-monitor.jpg' },
      { id: 'datavideo-tp650', name: 'Datavideo TP-650 MKII (teleprompter)', quantity: 1, category: 'streaming', image: '/equipment/datavideo-tp650.jpg', note: 'Opcjonalnie w zestawie: iPad Pro' },
    ],
  },
  {
    id: 'tripods',
    name: 'Statywy',
    items: [
      { id: 'sachtler', name: 'Sachtler Activ6 i Activ8', quantity: 4, category: 'tripods', image: '/equipment/sachtler-activ.jpg' },
    ],
  },
];
