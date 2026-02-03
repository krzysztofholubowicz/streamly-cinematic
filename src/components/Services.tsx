import { motion } from 'framer-motion';

const services = [
  {
    number: '01',
    title: 'Programy TV',
    description: 'Produkcja formatów telewizyjnych z broadcastowym standardem jakości.'
  },
  {
    number: '02',
    title: 'Video Marketing',
    description: 'Materiały, które wciągają emocjonalnie i zamieniają uwagę w działanie.'
  },
  {
    number: '03',
    title: 'Transmisje Live',
    description: 'Realizacja konferencji, eventów i koncertów bez problemów technicznych.'
  },
  {
    number: '04',
    title: 'Produkcja VOD',
    description: 'Materiały gotowe do publikacji na platformach streamingowych.'
  },
  {
    number: '05',
    title: 'Filmy Korporacyjne',
    description: 'Szkolenia, onboardingi HR i filmy wizerunkowe dla zespołów.'
  },
];

export const Services = () => {
  return (
    <section id="uslugi" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left column - title */}
          <div className="lg:col-span-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="eyebrow block mb-4"
            >
              Usługi
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="section-title mb-6"
            >
              Czym się
              <br />
              zajmujemy
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground leading-relaxed"
            >
              Specjalizujemy się w produkcji wideo na najwyższym poziomie – 
              każdy projekt to opowieść, którą musimy opowiedzieć doskonale.
            </motion.p>
          </div>

          {/* Right column - services list */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-border">
              {services.map((service, index) => (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group py-8 first:pt-0 last:pb-0 cursor-pointer"
                >
                  <div className="flex items-start gap-8">
                    <span className="text-sm text-muted-foreground font-mono">
                      {service.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 group-hover:translate-x-2 transition-transform duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground max-w-md">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
