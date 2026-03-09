import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/use-count-up';

const clients = [
  { name: 'Polsat', subtitle: 'Produkcje eventowe i telewizyjne' },
  { name: 'TVP', subtitle: 'Realizacje programowe i specjalne' },
  { name: 'Impact CEE', subtitle: 'Transmisje konferencyjne na żywo' },
  { name: 'UMCS', subtitle: 'Produkcje edukacyjne i wizerunkowe' },
];

export const SocialProof = () => {
  const stat1 = useCountUp(100, 2000);
  const stat2 = useCountUp(500, 2500);

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground max-w-md text-lg leading-relaxed mb-16"
        >
          Zaufanie budujemy na planie, nie w prezentacji.
        </motion.p>

        {/* Client names marquee */}
        <div className="marquee-container mb-16">
          <div className="marquee-track">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="client-card text-center mx-3 min-w-[220px] flex-shrink-0"
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              >
                <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-1">
                  {client.name}
                </h3>
                <p className="text-sm text-muted-foreground">{client.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats – moved from hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-3 gap-8 max-w-2xl"
        >
          <div ref={stat1.ref as React.RefObject<HTMLDivElement>}>
            <span className="stat-number text-3xl md:text-5xl text-foreground">{stat1.count}+</span>
            <p className="text-xs md:text-sm text-muted-foreground mt-2 tracking-wider">realizacji</p>
          </div>
          <div ref={stat2.ref as React.RefObject<HTMLDivElement>}>
            <span className="stat-number text-3xl md:text-5xl text-foreground">{stat2.count}+</span>
            <p className="text-xs md:text-sm text-muted-foreground mt-2 tracking-wider">godzin materiału</p>
          </div>
          <div>
            <span className="stat-number text-3xl md:text-5xl text-foreground">24/7</span>
            <p className="text-xs md:text-sm text-muted-foreground mt-2 tracking-wider">dostępność w dniu produkcji</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
