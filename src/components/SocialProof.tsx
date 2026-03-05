import { motion } from 'framer-motion';

const clients = [
  { name: 'POLSAT', subtitle: 'Stacja TV' },
  { name: 'TVP', subtitle: 'Telewizja publiczna' },
  { name: 'Impact CEE', subtitle: 'Konferencja B2B' },
  { name: 'UMCS', subtitle: 'Uczelnia wyższa' },
];

export const SocialProof = () => {
  return (
    <section className="py-20 border-y border-border" style={{ background: 'linear-gradient(180deg, rgba(18,22,41,0.6) 0%, transparent 100%)' }}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Gdy liczą się wyniki, każdy kadr musi być idealny.
          Dlatego nas wybierają Polsat, TVP i marki, które nie mogą sobie pozwolić na błędy.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="client-card text-center"
            >
              <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-1">
                {client.name}
              </h3>
              <p className="text-sm text-muted-foreground">{client.subtitle}</p>
            </motion.div>
          ))}

          {/* Empty slot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="border border-dashed border-border/40 rounded-xl p-8 text-center opacity-30 flex flex-col items-center justify-center"
          >
            <h3 className="font-display font-bold text-lg text-foreground mb-1">Twoja marka</h3>
            <p className="text-sm text-muted-foreground">Następny klient?</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
