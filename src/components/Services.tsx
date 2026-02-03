import { motion } from 'framer-motion';
import { Tv, Video, Radio, Film, Users } from 'lucide-react';

const services = [
  {
    icon: Tv,
    title: 'Programy TV i serie video',
    description:
      'Tworzymy content, który przyciąga i utrzymuje uwagę. Od koncepcji przez produkcję po post-realizację – każdy odcinek to dzieło sztuki z broadcastowym standardem.',
  },
  {
    icon: Video,
    title: 'Video marketing i reklamy',
    description:
      'Materiały, które nie tylko pokazują produkt – wciągają emocjonalnie. Wiemy, jak zapamiętać się w umysłach widza i zamienić zainteresowanie w działanie.',
  },
  {
    icon: Radio,
    title: 'Transmisje i relacje live',
    description:
      'Realizujemy konferencje, eventy, koncerty z napięciem, które buduje atmosferę. Nasza technika gwarantuje zero problemów technicznych w kluczowym momencie.',
  },
  {
    icon: Film,
    title: 'Produkcja dla platform VOD',
    description:
      'Tworzymy materiały gotowe do publikacji na Streamly Studio i innych platformach. Od masteringu do formatów wieloekranowych – produkcja dostosowana do cyfrowej dystrybucji.',
  },
  {
    icon: Users,
    title: 'Filmy korporacyjne i onboarding',
    description:
      'Materiały szkoleniowe, onboardingi HR, filmy wizerunkowe. Przekazujemy wiedzę w sposób, który angażuje i zostaje w pamięci zespołów.',
  },
];

export const Services = () => {
  return (
    <section id="oferta" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-card/50 via-background to-background" />

      {/* Light leak */}
      <div className="light-leak w-[500px] h-[500px] top-0 right-0 opacity-30" />

      <div className="relative container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Czym się zajmujemy?{' '}
            <span className="text-gradient-primary">Tym, co zmienia całość.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Specjalizujemy się w produkcji programów telewizyjnych, materiałów video
            marketingowych, reklam, profesjonalnych relacji z eventów i transmisji online –
            każdy projekt to opowieść, którą musimy opowiedzieć doskonale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="cinematic-card rounded-2xl p-8 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
