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
    <section id="uslugi" className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(18,22,41,0.8), rgba(26,31,53,0.6))' }}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="eyebrow block mb-4">Oferta</span>
          <h2 className="section-title mb-6">
            Czym się zajmujemy?
            <br />
            <span className="text-muted-foreground">Tym, co zmienia całość.</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Specjalizujemy się w produkcji programów telewizyjnych, materiałów video marketingowych,
            reklam, profesjonalnych relacji z eventów i transmisji online – każdy projekt to opowieść,
            którą musimy opowiedzieć doskonale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="service-card group"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                  style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(168,85,247,0.1))' }}>
                  <Icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="font-display text-xl font-bold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
