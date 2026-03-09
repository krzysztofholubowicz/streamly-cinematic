import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SocialProof } from '@/components/SocialProof';
import { Portfolio } from '@/components/Portfolio';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { StreamlyStudio } from '@/components/StreamlyStudio';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { CookieBanner } from '@/components/CookieBanner';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden noise-overlay">
      <SEO
        title="Streamly Production | Produkcja wideo, TV, transmisje online | Warszawa"
        description="Profesjonalna produkcja wideo, programy TV, video marketing, transmisje online i relacje z eventów. 15+ lat doświadczenia. Polsat, TVP, Impact CEE."
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'VideoProductionCompany',
          name: 'Streamly Production',
          url: 'https://streamlyproduction.lovable.app',
          description: 'Studio Streamly Production. Programy TV, video marketing, transmisje live i własna platforma VOD.',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Warszawa',
            addressCountry: 'PL',
          },
          sameAs: [],
        }}
      />
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Portfolio />
        <Services />
        <Process />
        <StreamlyStudio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
