import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const KpoFunding = () => {
  return (
    <section className="section-padding border-t border-border/60">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <span className="eyebrow block mb-4">Projekt KPO • Dofinansowanie UE</span>
            <h2 className="section-title">
              Nowa usługa dzięki inwestycji z <span className="hero-accent">Krajowego Planu Odbudowy.</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-6">
              Rozszerzenie działalności o organizację targów, wystaw i kongresów online oraz hybrydowych — projekt
              współfinansowany ze środków Unii Europejskiej w ramach KPO i&nbsp;Zwiększania Odporności.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="px-6 md:px-10 py-6 md:py-8 rounded-2xl flex items-center justify-center bg-white"
          >
            <img
              src="/images/kpo/kpo-banner.jpg"
              alt="Krajowy Plan Odbudowy – Rzeczpospolita Polska – Sfinansowane przez Unię Europejską NextGenerationEU"
              className="w-full max-w-3xl object-contain"
            />
          </motion.div>

          <div className="text-center mt-10">
            <Link
              to="/kpo"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-sm font-semibold tracking-[0.1em] transition-all duration-300"
              style={{
                background: 'hsl(35 60% 55% / 0.1)',
                border: '1px solid hsl(35 60% 55% / 0.25)',
                color: 'hsl(35 60% 55%)',
              }}
            >
              POZNAJ SZCZEGÓŁY PROJEKTU
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};