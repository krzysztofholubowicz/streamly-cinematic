import { motion } from 'framer-motion';
import { Film, Smartphone, Radio, Video, Building2 } from 'lucide-react';

const services = [
  {
    icon: Film,
    title: 'Programy TV i serie wideo',
    description: 'Od scenariusza po mastering — z broadcastową precyzją i terminami, które dotrzymujemy.',
  },
  {
    icon: Smartphone,
    title: 'Video marketing i kampanie',
    description: 'Spoty, kampanie social, wideo sprzedażowe. Każdy format z myślą o konwersji.',
  },
  {
    icon: Radio,
    title: 'Transmisje live',
    description: 'Multicam, redundantne łącza, zero marginu na błąd. Impact CEE, Polsat — nam ufają.',
  },
  {
    icon: Video,
    title: 'Produkcja pod platformy VOD',
    description: 'Materiały gotowe do publikacji — zoptymalizowane, zmasterowane, ready to stream.',
  },
  {
    icon: Building2,
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {services.slice(3).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="service-card group"
    >
      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 border border-border">
        <Icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
      </div>
      <h3 className="font-display text-lg font-bold mb-3 text-foreground">
        {service.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {service.description}
      </p>
    </motion.div>
  );
};
