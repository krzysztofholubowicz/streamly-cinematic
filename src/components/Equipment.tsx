import { motion } from 'framer-motion';
import { Camera, Aperture, Sun, Mic, Monitor, Settings } from 'lucide-react';
import studioImage from '@/assets/studio-camera.jpg';

const categories = [
  {
    icon: Camera,
    title: 'Kamery',
    items: ['Sony FX9', 'Sony FX6', 'Blackmagic Pocket Cinema Camera 6K Pro'],
  },
  {
    icon: Aperture,
    title: 'Obiektywy',
    items: ['Sony 24-70mm f/2.8 GM', 'Sony 70-200mm f/2.8 GM OSS', 'Sony 16-35mm f/2.8 GM'],
  },
  {
    icon: Sun,
    title: 'Światło',
    items: ['Aputure 600D Pro', 'Aputure 300D II', 'Aputure MC RGBWW (zestaw 4 szt.)'],
  },
  {
    icon: Mic,
    title: 'Dźwięk',
    items: ['Sennheiser wireless (mikrofony krawatowe)', 'Zoom H6 rekorder', 'Audio-Technica shotgun'],
  },
  {
    icon: Monitor,
    title: 'Streaming & Recording',
    items: ['Blackmagic ATEM Mini Extreme ISO', 'Atomos Ninja V (recordery)', 'V-Mount batteries (zestawy)'],
  },
  {
    icon: Settings,
    title: 'Akcesoria',
    items: ['Statywy Manfrotto (wideo head)', 'Karty pamięci Sony CFexpress Type A', 'ND filtry (zmienne)'],
  },
];

export const Equipment = () => {
  return (
    <section id="wynajem" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={studioImage}
          alt="Professional studio equipment"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="relative container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Wynajem sprzętu{' '}
            <span className="text-gradient-primary">broadcastowego</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Profesjonalny sprzęt dla profesjonalnych realizacji. Kamery, obiektywy, światło,
            dźwięk, streaming – wszystko, czego potrzebujesz w jednym miejscu.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="cinematic-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary/20"
          >
            Zapytaj o dostępność
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            Odpowiadamy w ciągu 2 godzin w dni robocze. Ceny dostępne po wysłaniu zapytania.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
