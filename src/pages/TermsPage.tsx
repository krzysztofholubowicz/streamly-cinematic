import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Regulamin"
        description="Regulamin korzystania z usług Streamly Production – warunki współpracy, prawa i obowiązki stron."
        path="/regulamin"
      />
      <Header />
      <main className="pt-32 section-padding">
        <Link to="/" className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm uppercase tracking-[0.15em]">Powrót</span>
        </Link>
        <h1 className="font-display font-bold text-3xl md:text-4xl mb-8">Regulamin</h1>
        <div className="prose prose-invert max-w-3xl text-muted-foreground">
          <p>Treść regulaminu zostanie dodana wkrótce.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
