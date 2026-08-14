import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/use-count-up';
const clients = [
  { name: 'Impact CEE', src: '/images/logos/impact.png' },
  { name: 'UMCS', src: '/images/logos/umcs.png' },
  { name: 'Polsat', src: '/images/logos/polsat.png' },
  { name: 'TVP', src: '/images/logos/tvp.png' },
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
          <div className="inline-block px-6 py-1.5 mb-8 border border-border/40 rounded-full backdrop-blur-sm">
            <span className="text-xs uppercase font-medium tracking-[0.2em] text-muted-foreground">Nasza filozofia</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground max-w-3xl leading-[1.1]">
            Twórcze podejście.<br />Bezkompromisowa jakość.
          </h2>
        </motion.div>

        {/* Client logos */}
        <div className="mb-16 flex flex-wrap items-center gap-x-12 gap-y-8 md:gap-x-20">
          {clients.map((client, index) => (
            <motion.img
              key={client.name}
              src={client.src}
              alt={client.name}
              loading="lazy"
              className="h-8 md:h-10 w-auto object-contain opacity-50 hover:opacity-90 transition-opacity duration-300"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 0.5, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            />
          ))}
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
            className="glass-card p-8 md:p-10 border border-border/50 hover:border-border transition-all duration-500"
          >
            <div className="flex flex-col items-start">
              <span className="font-display text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-4">
                {stat1.count}+
              </span>
              <div className="h-[1px] w-16 bg-gradient-to-r from-foreground/20 to-transparent mb-6" />
              <p className="text-sm md:text-base text-muted-foreground font-medium tracking-[0.08em] uppercase">
                Realizacji
              </p>
            </div>
          </div>
          <div 
            ref={stat2.ref as React.RefObject<HTMLDivElement>}
            className="glass-card p-8 md:p-10 border border-border/50 hover:border-border transition-all duration-500"
          >
            <div className="flex flex-col items-start">
              <span className="font-display text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-4">
                {stat2.count}+
              </span>
              <div className="h-[1px] w-16 bg-gradient-to-r from-foreground/20 to-transparent mb-6" />
              <p className="text-sm md:text-base text-muted-foreground font-medium tracking-[0.08em] uppercase">
                Godzin materiału
              </p>
            </div>
          </div>
          <div className="glass-card p-8 md:p-10 border border-border/50 hover:border-border transition-all duration-500">
            <div className="flex flex-col items-start">
              <span className="font-display text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-4">
                15+
              </span>
              <div className="h-[1px] w-16 bg-gradient-to-r from-foreground/20 to-transparent mb-6" />
              <p className="text-sm md:text-base text-muted-foreground font-medium tracking-[0.08em] uppercase">
                Lat doświadczenia
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
