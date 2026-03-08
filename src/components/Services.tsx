import { motion } from 'framer-motion';

const services = [
  {
    title: 'Programy TV i serie wideo',
    description: 'Od scenariusza po mastering — z broadcastową precyzją i terminami, które dotrzymujemy.',
  },
  {
    title: 'Video marketing i kampanie',
    description: 'Spoty, kampanie social, wideo sprzedażowe. Każdy format z myślą o konwersji.',
  },
  {
    title: 'Transmisje live',
    description: 'Multicam, redundantne łącza, zero marginu na błąd. Impact CEE, Polsat — nam ufają.',
  },
  {
    title: 'Produkcja pod platformy VOD',
    description: 'Materiały gotowe do publikacji — zoptymalizowane, zmasterowane, ready to stream.',
  },
  {
    title: 'Wideo korporacyjne',
    description: 'Onboarding, szkolenia, komunikacja wewnętrzna. Materiały, które ludzie oglądają do końca.',
  },
];

export const Services = () => {
  return (
    <section id="uslugi" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="eyebrow block mb-4">Usługi</span>
          <h2 className="section-title">
            Pięć specjalizacji.
            <br />
            <span className="text-muted-foreground">Jeden standard.</span>
          </h2>
        </motion.div>

        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="border-b transition-colors duration-300 hover:bg-[rgba(255,255,255,0.02)]"
              style={{ borderColor: 'rgba(255,255,255,0.1)' }}
            >
              <div className="flex items-start md:items-center py-7 gap-4 md:gap-8">
                {/* Number */}
                <span
                  className="text-sm font-medium shrink-0 w-8 pt-0.5 md:pt-0"
                  style={{ color: 'hsl(var(--accent-warm))' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Name + Description */}
                <div className="flex flex-col md:flex-row md:items-center flex-1 gap-1 md:gap-0">
                  <h3 className="font-bold text-foreground text-lg md:text-xl md:w-[320px] shrink-0">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
