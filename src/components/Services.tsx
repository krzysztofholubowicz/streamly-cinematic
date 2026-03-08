import { motion } from 'framer-motion';
import { Film, Smartphone, Radio, Video, Building2 } from 'lucide-react';

const services = [
  {
    icon: Film,
    title: 'Programy TV i serie video',
    description: 'Tworzymy content, który przyciąga i utrzymuje uwagę. Od koncepcji przez produkcję po post-realizację – każdy odcinek to dzieło sztuki z broadcastowym standardem.',
  },
  {
    icon: Smartphone,
    title: 'Video Marketing i reklamy',
    description: 'Materiały, które nie tylko pokazują produkt – wciągają emocjonalnie. Wiemy, jak zapamiętać się w umysłach widza i zamienić zainteresowanie w działanie.',
  },
  {
    icon: Radio,
    title: 'Transmisje i relacje live',
    description: 'Realizujemy konferencje, eventy, koncerty z napięciem, które buduje atmosferę. Nasza technika gwarantuje zero problemów technicznych w kluczowym momencie.',
  },
  {
    icon: Video,
    title: 'Produkcja dla platform VOD',
    description: 'Tworzymy materiały gotowe do publikacji na Streamly Studio i innych platformach. Od masteringu do formatów wieloekranowych – produkcja dostosowana do cyfrowej dystrybucji.',
  },
  {
    icon: Building2,
    title: 'Filmy korporacyjne i onboarding',
    description: 'Materiały szkoleniowe, onboardingi HR, filmy wizerunkowe. Przekazujemy wiedzę w sposób, który angażuje i zostaje w pamięci zespołów.',
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
          className="text-center mb-20"
        >
          <span className="eyebrow block mb-4">Oferta</span>
          <h2 className="section-title mb-6">
            Czym się zajmujemy?
            <br />
            <span className="text-muted-foreground">Tym, co zmienia całość.</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Specjalizujemy się w produkcji programów telewizyjnych, materiałów video marketingowych,
            reklam, profesjonalnych relacji z eventów i transmisji online.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
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
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};