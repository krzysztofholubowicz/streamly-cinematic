import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SocialProof } from '@/components/SocialProof';
import { Services } from '@/components/Services';
import { LiveStreaming } from '@/components/LiveStreaming';
import { Process } from '@/components/Process';
import { Portfolio } from '@/components/Portfolio';
import { Equipment } from '@/components/Equipment';
import { KPO } from '@/components/KPO';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <LiveStreaming />
        <Process />
        <Portfolio />
        <Equipment />
        <KPO />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
