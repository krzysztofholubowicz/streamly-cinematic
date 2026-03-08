import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { FlagshipItems } from '@/components/equipment/FlagshipItems';
import { PackagesAccordion } from '@/components/equipment/PackagesAccordion';
import { ExtrasAccordion } from '@/components/equipment/ExtrasAccordion';
import { RentalForm } from '@/components/equipment/RentalForm';

export interface SelectedEquipment {
  id: string;
  name: string;
  qty: number;
}

const EquipmentPage = () => {
  const [selected, setSelected] = useState<Record<string, SelectedEquipment>>({});

  const handleToggle = useCallback((id: string, name: string, maxQty: number) => {
    setSelected((prev) => {
      const next = { ...prev };
      if (next[id]) {
        delete next[id];
      } else {
        next[id] = { id, name, qty: maxQty };
      }
      return next;
    });
  }, []);

  const handleClear = useCallback(() => setSelected({}), []);

  const selectedList = Object.values(selected);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-32">
        {/* Back link */}
        <div className="section-padding pb-0">
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm uppercase tracking-[0.15em]">Powrót</span>
          </Link>
        </div>

        {/* Hero */}
        <section className="section-padding !pb-12">
          <div className="max-w-5xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow block mb-6"
            >
              Wynajem sprzętu
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="section-title text-foreground mb-8"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)' }}
            >
              Wynajmij top sprzęt filmowy
              <br />
              <span className="gradient-text">w Warszawie</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-6"
            >
              Kamery, obiektywy, oświetlenie, dźwięk, realizacja, streaming – cały park maszynowy
              Streamly Production dostępny dla Twojej produkcji.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[hsl(var(--accent-warm)/0.3)] bg-[hsl(var(--accent-warm)/0.06)]"
            >
              <Zap className="w-4 h-4 text-[hsl(var(--accent-warm))]" />
              <span className="text-sm font-medium text-[hsl(var(--accent-warm))]">
                Dostępny od ręki · Odpowiedź w 2h
              </span>
            </motion.div>
          </div>
        </section>

        <div className="divider" />

        {/* Flagship items */}
        <section className="section-padding">
          <FlagshipItems selected={selected} onToggle={handleToggle} />
        </section>

        {/* Packages & Extras accordions */}
        <section className="section-padding !pt-0">
          <PackagesAccordion selected={selected} onToggle={handleToggle} />
        </section>

        <section className="section-padding !pt-0">
          <ExtrasAccordion />
        </section>

        <div className="divider" />

        {/* Rental form */}
        <section className="section-padding">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-2xl mb-2 text-center">Wyślij zapytanie</h2>
            <p className="text-sm text-muted-foreground mb-10 text-center">
              Wybierz sprzęt powyżej, podaj daty i wyślij – odpowiemy w 2h.
            </p>
            <RentalForm selected={selectedList} onClearSelection={handleClear} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EquipmentPage;
