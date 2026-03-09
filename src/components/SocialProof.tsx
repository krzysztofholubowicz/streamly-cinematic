import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/use-count-up';

const clients = [
  { name: 'Polsat' },
  { name: 'TVP' },
  { name: 'Impact CEE' },
  { name: 'UMCS' },
];

export const SocialProof = () => {
  const stat1 = useCountUp(100, 2000);
  const stat2 = useCountUp(500, 2500);

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-block px-6 py-1.5 mb-6 border border-border rounded-full">
            <span className="eyebrow">Nasza filozofia</span>
          </div>
          <h2 className="section-title gradient-text-gold max-w-3xl">
            Twórcze podejście.<br />Bezkompromisowa jakość.
          </h2>
        </motion.div>

        {/* Client names marquee */}
        <div className="marquee-container mb-16">
          <div className="marquee-track">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="client-card text-center mx-4 min-w-[180px] flex-shrink-0"
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
                <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground">
                  {client.name}
                </h3>
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl"
        >
          <div 
            ref={stat1.ref as React.RefObject<HTMLDivElement>}
            className="feature-card group"
          >
            <div className="flex flex-col items-start">
              <span className="stat-number text-5xl md:text-6xl lg:text-7xl gradient-text-gold mb-3">
                {stat1.count}+
              </span>
              <div className="h-px w-12 bg-gradient-to-r from-accent-warm to-transparent mb-4" />
              <p className="text-sm md:text-base text-muted-foreground font-medium tracking-wide uppercase">
                Realizacji
              </p>
            </div>
          </div>
          <div 
            ref={stat2.ref as React.RefObject<HTMLDivElement>}
            className="feature-card group"
          >
            <div className="flex flex-col items-start">
              <span className="stat-number text-5xl md:text-6xl lg:text-7xl gradient-text-gold mb-3">
                {stat2.count}+
              </span>
              <div className="h-px w-12 bg-gradient-to-r from-accent-warm to-transparent mb-4" />
              <p className="text-sm md:text-base text-muted-foreground font-medium tracking-wide uppercase">
                Godzin materiału
              </p>
            </div>
          </div>
          <div className="feature-card group">
            <div className="flex flex-col items-start">
              <span className="stat-number text-5xl md:text-6xl lg:text-7xl gradient-text-gold mb-3">
                15+
              </span>
              <div className="h-px w-12 bg-gradient-to-r from-accent-warm to-transparent mb-4" />
              <p className="text-sm md:text-base text-muted-foreground font-medium tracking-wide uppercase">
                Lat doświadczenia
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
