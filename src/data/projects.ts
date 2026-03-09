/**
 * PORTFOLIO PROJECTS CONFIGURATION
 * 
 * To add a new project:
 * 1. Add a new image to the /public/portfolio/ folder
 * 2. Add a new project object to the array below
 * 3. Fill in: id, title, category, image path, and optional fields
 * 
 * To change a project:
 * - Simply edit the values in the project object
 * - To change image: replace the file in /public/portfolio/ or update the path
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string; // Path to image in /public/ folder (e.g., '/portfolio/my-image.jpg')
  description?: string;
  client?: string;
  year?: string;
}

export const projects: Project[] = [
  { 
    id: '1',
    title: 'Polsat', 
    category: 'współpraca z telewizją', 
    image: '/images/portfolio/polsat.jpg',
    client: 'Polsat',
    year: '2024'
  },
  { 
    id: '2',
    title: 'Impact CEE', 
    category: 'Relacje z konferencji', 
    image: '/images/portfolio/impact-cee.jpg',
    client: 'Impact CEE',
    year: '2024'
  },
  { 
    id: '3',
    title: 'Filmy korporacyjne', 
    category: 'PRODUKCJA', 
    image: '/images/portfolio/corporate.jpg',
    year: '2024'
  },
  {
    id: '4',
    title: 'Kampania wizerunkowa',
    category: 'Marketing',
    image: '/images/portfolio/brand-campaign.jpg',
    year: '2024'
  },
  {
    id: '5',
    title: 'Event branżowy',
    category: 'Transmisje live',
    image: '/images/portfolio/live-event.jpg',
    year: '2023'
  },
  {
    id: '6',
    title: 'Program telewizyjny',
    category: 'Produkcja TV',
    image: '/images/portfolio/tv-production.jpg',
    year: '2023'
  },
  {
    id: '7',
    title: 'Onboarding pracowniczy',
    category: 'E-learning',
    image: '/images/portfolio/elearning.jpg',
    year: '2023'
  },
  {
    id: '8',
    title: 'Relacja z targów',
    category: 'Event coverage',
    image: '/images/portfolio/trade-show.jpg',
    year: '2023'
  },
  {
    id: '9',
    title: 'Spot reklamowy',
    category: 'Reklama',
    image: '/images/portfolio/commercial.jpg',
    year: '2023'
  }
];
