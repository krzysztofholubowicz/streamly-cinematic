import { motion } from 'framer-motion';

const clients = ['Polsat', 'TVP', 'Impact CEE', 'UMCS'];

export const SocialProof = () => {
  return (
    <section className="py-16 border-y border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Gdy liczą się wyniki, każdy kadr musi być idealny. 
          Dlatego nas wybierają marki, które nie mogą sobie pozwolić na błędy.
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {clients.map((client, index) => (
            <motion.span
              key={client}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-xl md:text-2xl font-display font-bold text-muted-foreground/50 hover:text-foreground transition-colors duration-300"
            >
              {client}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};
