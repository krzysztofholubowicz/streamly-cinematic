export interface EquipmentItem {
  id: string;
  name: string;
  quantity: number;
  category: string;
  image?: string;
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
      { id: 'sony-fx9', name: 'Sony PXW-FX9', quantity: 2, category: 'cameras', image: '/equipment/sony-fx9.jpg' },
      { id: 'sony-fx6', name: 'Sony FX6', quantity: 2, category: 'cameras', image: '/equipment/sony-fx6.jpg' },
    ],
  },
  {
    id: 'lenses',
    name: 'Obiektywy',
    items: [
      { id: 'sony-24-70', name: 'Sony 24-70mm f/2.8 GM II', quantity: 2, category: 'lenses' },
      { id: 'sony-16-35', name: 'Sony 16-35mm f/2.8 GM II', quantity: 2, category: 'lenses' },
      { id: 'sony-70-200', name: 'Sony 70-200mm f/2.8 GM II', quantity: 2, category: 'lenses' },
    ],
  },
  {
    id: 'lighting',
    name: 'Światło',
    items: [
      { id: 'aputure-300x', name: 'Aputure LS 300X (V-Mount)', quantity: 2, category: 'lighting', image: '/equipment/aputure-600d.jpg' },
      { id: 'aputure-fresnel', name: 'Aputure Fresnel 2X', quantity: 2, category: 'lighting' },
      { id: 'nanlite-alien', name: 'Nanlite Alien 300C', quantity: 2, category: 'lighting' },
    ],
  },
  {
    id: 'audio',
    name: 'Dźwięk',
    items: [
      { id: 'sennheiser-avx', name: 'Sennheiser AVX-ME2/835 Set (wireless)', quantity: 4, category: 'audio' },
      { id: 'hollyland-solidcom', name: 'Hollyland Solidcom C1 Pro (intercom, 6 słuchawek)', quantity: 1, category: 'audio' },
    ],
  },
  {
    id: 'streaming',
    name: 'Realizacja / Streaming',
    items: [
      { id: 'atem-hd8', name: 'Blackmagic ATEM Television Studio HD8 ISO', quantity: 1, category: 'streaming', image: '/equipment/atem-mini.jpg' },
      { id: 'bm-multiview', name: 'Blackmagic Multiview 4 HD', quantity: 2, category: 'streaming' },
      { id: 'bm-converter', name: 'Blackmagic Micro Converter SDI to HDMI 3G', quantity: 2, category: 'streaming' },
      { id: 'swit-monitor', name: 'SWIT FM-215HDR 21,5" monitory', quantity: 2, category: 'streaming' },
      { id: 'datavideo-tp650', name: 'Datavideo TP-650 MKII (teleprompter)', quantity: 1, category: 'streaming' },
    ],
  },
  {
    id: 'tripods',
    name: 'Statywy i rigging',
    items: [
      { id: 'sachtler', name: 'Sachtler System S2064S-FTGS', quantity: 4, category: 'tripods' },
      { id: 'manfrotto', name: 'Manfrotto 008BSU', quantity: 4, category: 'tripods' },
      { id: 'smallrig-shoulder', name: 'SmallRig 4274 Shoulder Rig Kit Pro', quantity: 2, category: 'tripods' },
      { id: 'smallrig-vct14', name: 'SmallRig VCT-14 Quick Release', quantity: 4, category: 'tripods' },
      { id: 'tilta-rig', name: 'Tilta ES-T18-V (klatka/rig)', quantity: 2, category: 'tripods' },
    ],
  },
  {
    id: 'power',
    name: 'Zasilanie',
    items: [
      { id: 'swit-pb-c420s', name: 'SWIT PB-C420S akumulatory', quantity: 6, category: 'power' },
      { id: 'swit-lb-su98', name: 'SWIT LB-SU98 akumulatory (~98Wh)', quantity: 8, category: 'power' },
      { id: 'swit-s3602u', name: 'SWIT S-3602U ładowarka', quantity: 2, category: 'power' },
      { id: 'swit-s3822s', name: 'SWIT S-3822S ładowarka', quantity: 2, category: 'power' },
    ],
  },
  {
    id: 'cards',
    name: 'Karty i czytniki',
    items: [
      { id: 'sony-xqd', name: 'Sony QD-G120F (XQD 120GB)', quantity: 8, category: 'cards' },
      { id: 'lexar-cfexpress', name: 'Lexar CFexpress Pro Gold 320GB (Type A)', quantity: 4, category: 'cards' },
      { id: 'sony-mrw-g1', name: 'Sony MRW-G1 czytnik', quantity: 2, category: 'cards' },
      { id: 'sony-mrw-g2', name: 'Sony MRW-G2 czytnik', quantity: 2, category: 'cards' },
    ],
  },
  {
    id: 'cables',
    name: 'Okablowanie',
    items: [
      { id: 'percon-vk66', name: 'Percon VK 66 (SDI kable)', quantity: 4, category: 'cables' },
      { id: 'percon-vk66-uhd', name: 'Percon VK 66 UHD2', quantity: 4, category: 'cables' },
    ],
  },
  {
    id: 'computers',
    name: 'Komputery',
    items: [
      { id: 'macbook-pro', name: 'MacBook Pro 16"', quantity: 2, category: 'computers' },
      { id: 'ipad-pro', name: 'iPad Pro 13"', quantity: 1, category: 'computers' },
    ],
  },
];
