import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { EquipmentCatalog } from '@/components/equipment/EquipmentCatalog';
import { RentalForm } from '@/components/equipment/RentalForm';
import type { EquipmentItem } from '@/data/equipment';

const EquipmentPage = () => {
  const [selected, setSelected] = useState<Record<string, number>>({});

  const handleToggle = useCallback((item: EquipmentItem) => {
    setSelected((prev) => {
      const next = { ...prev };
      if (next[item.id]) {
        delete next[item.id];
      } else {
        next[item.id] = 1;
      }
      return next;
    });
  }, []);

  const handleQtyChange = useCallback((id: string, qty: number) => {
    setSelected((prev) => ({ ...prev, [id]: qty }));
  }, []);

  const handleClear = useCallback(() => setSelected({}), []);

  const totalSelected = Object.keys(selected).length;

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
        <section className="section-padding !pb-16">
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
              Profesjonalny sprzęt filmowy
              <br />
              <span className="gradient-text">do wynajęcia</span>
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

            {/* CTA badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[hsl(var(--accent-warm)/0.3)] bg-[hsl(var(--accent-warm)/0.06)]"
            >
              <Zap className="w-4 h-4 text-[hsl(var(--accent-warm))]" />
              <span className="text-sm font-medium text-[hsl(var(--accent-warm))]">
                Dostępny od ręki
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm text-muted-foreground mt-6"
            >
              Odpowiedź w 2h · Ceny indywidualnie · Dostawa na plan
            </motion.p>
          </div>
        </section>

        <div className="divider" />

        {/* Main content: Catalog + Form */}
        <section className="section-padding">
          <div className="grid lg:grid-cols-5 gap-12 xl:gap-16">
            {/* Catalog – takes 3/5 */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display font-bold text-xl">Katalog sprzętu</h2>
                {totalSelected > 0 && (
                  <span className="text-xs px-3 py-1.5 rounded-full bg-[hsl(var(--accent-warm)/0.1)] text-[hsl(var(--accent-warm))] font-medium">
                    {totalSelected} wybranych
                  </span>
                )}
              </div>
              <EquipmentCatalog
                selected={selected}
                onToggle={handleToggle}
                onQtyChange={handleQtyChange}
              />
            </div>

            {/* Form – takes 2/5, sticky */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-28">
                <h2 className="font-display font-bold text-xl mb-2">Wyślij zapytanie</h2>
                <p className="text-sm text-muted-foreground mb-8">
                  Wybierz sprzęt z katalogu, podaj daty i wyślij – odpowiemy w 2h.
                </p>
                <RentalForm selected={selected} onClearSelection={handleClear} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EquipmentPage;
