import { motion } from 'framer-motion';

const clients = [
  { name: 'Polsat', logo: 'POLSAT' },
  { name: 'TVP', logo: 'TVP' },
  { name: 'Impact CEE', logo: 'IMPACT CEE' },
  { name: 'UMCS', logo: 'UMCS' },
];

export const SocialProof = () => {
  return (
    <section className="relative py-16 border-y border-foreground/5 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-12"
        >
          Gdy liczą się wyniki, każdy kadr musi być idealny. Dlatego nas wybierają{' '}
          <span className="text-foreground font-medium">Polsat, TVP</span> i marki, które nie
          mogą sobie pozwolić na błędy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-12 md:gap-20"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <span className="text-2xl md:text-3xl font-display font-bold text-muted-foreground/40 group-hover:text-muted-foreground transition-all duration-300 tracking-wider">
                {client.logo}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
