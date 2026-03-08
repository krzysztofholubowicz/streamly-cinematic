import { motion } from 'framer-motion';
import { Film, Smartphone, Radio, Video, Building2 } from 'lucide-react';

const services = [
  {
    icon: Film,
    title: 'Programy TV i serie wideo',
    description: 'Formatów telewizyjnych nie da się „nadrobić w post-produkcji". Dlatego planujemy każdy odcinek od scenariusza po mastering – z broadcastową precyzją i deadline\'ami, które dotrzymujemy.',
    proof: 'Polsat · TVP · 50+ odcinków rocznie',
  },
  {
    icon: Smartphone,
    title: 'Video Marketing i reklamy',
    description: 'Tworzymy materiały, które zatrzymują kciuk. Spoty produktowe, kampanie do social media, wideo sprzedażowe – każdy format z myślą o konwersji, nie tylko o estetyce.',
    proof: 'Średnio 3x większe zaangażowanie vs. zdjęcia statyczne',
  },
  {
    icon: Radio,
    title: 'Transmisje i relacje live',
    description: 'Konferencje, gale, koncerty – realizujemy na żywo z wielokamerową reżyserką, redundantnymi łączami i zespołem, który wie, że „druga szansa" nie istnieje. Zero margin na błąd.',
    proof: 'Impact CEE · 200+ transmisji live · 99.9% uptime',
  },
  {
    icon: Video,
    title: 'Produkcja dla platform VOD',
    description: 'Dostarczamy materiały gotowe do publikacji – zoptymalizowane pod Streamly Studio i inne platformy OTT. Mastering, adaptacje formatowe, metadata – wszystko w jednym procesie.',
    proof: 'Streamly Studio · Natywna integracja z naszą platformą VOD',
  },
  {
    icon: Building2,
    title: 'Filmy korporacyjne i onboarding',
    description: 'Szkolenia, które ludzie oglądają do końca. Onboarding HR, filmy wizerunkowe, komunikacja wewnętrzna – tworzymy materiały, które pracują na kulturę firmy, nie leżą w intranecie.',
    proof: 'Średnio 89% wskaźnik oglądalności do końca',
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
          <span className="eyebrow block mb-4">Co robimy</span>
          <h2 className="section-title mb-6">
            Pięć specjalizacji.
            <br />
            <span className="text-muted-foreground">Jeden standard.</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl text-lg leading-relaxed">
            Każda z naszych usług działa samodzielnie. Razem tworzą ekosystem,
            który pokrywa cały cykl życia wideo – od pomysłu po dystrybucję.
          </p>
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
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-border"
        style={{ background: 'rgba(255,255,255,0.03)' }}>
        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
      </div>
      <h3 className="font-display text-xl font-bold mb-4 text-foreground">
        {service.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed text-sm mb-4">
        {service.description}
      </p>
      <p className="proof-line">{service.proof}</p>
    </motion.div>
  );
};
