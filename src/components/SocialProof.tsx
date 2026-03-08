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

        {/* Client names row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-start flex-wrap gap-y-3 mb-16"
        >
          {clients.map((client, index) => (
            <span key={client.name} className="flex items-center">
              <span className="text-xl md:text-2xl font-bold text-foreground">
                {client.name}
              </span>
              {index < clients.length - 1 && (
                <span className="text-xl md:text-2xl text-muted-foreground mx-4">·</span>
              )}
            </span>
          ))}
        </motion.div>

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
