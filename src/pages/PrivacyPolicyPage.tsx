import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 section-padding">
        <Link to="/" className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm uppercase tracking-[0.15em]">Powrót</span>
        </Link>
        <h1 className="font-display font-bold text-3xl md:text-4xl mb-8">Polityka prywatności</h1>
        <div className="prose prose-invert max-w-3xl text-muted-foreground">
          <p>Treść polityki prywatności zostanie dodana wkrótce.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
