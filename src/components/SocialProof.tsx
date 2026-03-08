import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const clients = [
  { name: 'POLSAT', subtitle: 'Produkcje eventowe i telewizyjne' },
  { name: 'TVP', subtitle: 'Realizacje programowe i specjalne' },
  { name: 'Impact CEE', subtitle: 'Transmisje konferencyjne na żywo' },
  { name: 'UMCS', subtitle: 'Produkcje edukacyjne i wizerunkowe' },
];

export const SocialProof = () => {
  return (
    <section className="py-24 border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground max-w-xl text-lg leading-relaxed"
        >
          Zaufanie zdobywa się na planie, nie w prezentacji. Dlatego wracają do nas marki,{' '}
          <span className="text-foreground font-medium">które nie tolerują kompromisów.</span>
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="marquee-container">
        <div className="marquee-track">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="client-card text-center mx-3 min-w-[220px] flex-shrink-0"
            >
              <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-1">
                {client.name}
              </h3>
              <p className="text-sm text-muted-foreground">{client.subtitle}</p>
            </div>
          ))}
          {/* CTA card */}
          <a
            href="#kontakt"
            className="flex flex-col items-center justify-center mx-3 min-w-[220px] flex-shrink-0 border border-dashed border-border rounded-2xl p-8 hover:border-foreground/30 transition-colors group"
          >
            <h3 className="font-display font-bold text-lg text-foreground mb-1">Dołącz do nich</h3>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};
