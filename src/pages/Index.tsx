import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SocialProof } from '@/components/SocialProof';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { Portfolio } from '@/components/Portfolio';
import { StreamlyStudio } from '@/components/StreamlyStudio';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden noise-overlay">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Process />
        <Portfolio />
        <StreamlyStudio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;