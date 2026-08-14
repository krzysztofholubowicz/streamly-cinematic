import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SocialProof } from '@/components/SocialProof';
import { Portfolio } from '@/components/Portfolio';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { StreamlyStudio } from '@/components/StreamlyStudio';
import { TechBackbone } from '@/components/TechBackbone';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { CookieBanner } from '@/components/CookieBanner';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden noise-overlay">
      <SEO
        title="Streamly Production — produkcja video, programy TV i transmisje live"
        description="Produkcja video dla marek, formaty telewizyjne, transmisje wydarzeń i własna platforma VOD Streamly Studio."
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Streamly Production',
          url: 'https://streamlyproduction.lovable.app',
          description: 'Produkcja video dla marek, formaty telewizyjne, transmisje wydarzeń i własna platforma VOD Streamly Studio.',
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <SocialProof />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Services />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <TechBackbone />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <StreamlyStudio />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Portfolio />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Process />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Contact />
        </motion.div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
