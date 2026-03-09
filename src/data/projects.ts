import liveImage from '@/assets/live-production.jpg';
import cameraImage from '@/assets/camera-closeup.jpg';
import studioImage from '@/assets/studio-camera.jpg';
import corporateVideo from '@/assets/services/corporate-video.jpg';
import liveEvent from '@/assets/services/live-event.jpg';
import tvProduction from '@/assets/services/tv-production.jpg';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
  client?: string;
  year?: string;
}

export const projects: Project[] = [
  { 
    id: '1',
    title: 'Polsat', 
    category: 'współpraca z telewizją', 
    image: liveImage,
    client: 'Polsat',
    year: '2024'
  },
  { 
    id: '2',
    title: 'Impact CEE', 
    category: 'Relacje z konferencji', 
    image: cameraImage,
    client: 'Impact CEE',
    year: '2024'
  },
  { 
    id: '3',
    title: 'Filmy korporacyjne', 
    category: 'PRODUKCJA', 
    image: studioImage,
    year: '2024'
  },
  {
    id: '4',
    title: 'Kampania wizerunkowa',
    category: 'Marketing',
    image: corporateVideo,
    year: '2024'
  },
  {
    id: '5',
    title: 'Event branżowy',
    category: 'Transmisje live',
    image: liveEvent,
    year: '2023'
  },
  {
    id: '6',
    title: 'Program telewizyjny',
    category: 'Produkcja TV',
    image: tvProduction,
    year: '2023'
  },
  {
    id: '7',
    title: 'Onboarding pracowniczy',
    category: 'E-learning',
    image: studioImage,
    year: '2023'
  },
  {
    id: '8',
    title: 'Relacja z targów',
    category: 'Event coverage',
    image: liveEvent,
    year: '2023'
  },
  {
    id: '9',
    title: 'Spot reklamowy',
    category: 'Reklama',
    image: corporateVideo,
    year: '2023'
  }
];
