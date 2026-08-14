import { motion } from 'framer-motion';
import { Camera, Sliders, Radio, Server } from 'lucide-react';

const items = [
  {
    icon: Camera,
    title: 'Kamery broadcastowe',
    description: 'Sony FX9 i FX6 z zestawem obiektywów Sony GM — obraz gotowy do transmisji i archiwizacji w 4K.',
  },
  {
    icon: Sliders,
    title: 'Mikser i reżyserka',
    description: 'Blackmagic ATEM Television Studio HD8 ISO — wielokamerowa produkcja live z pełnym zapisem ISO.',
  },
  {
    icon: Radio,
    title: 'Osprzęt streamingowy',
    description: 'Monitory podglądowe, intercom, teleprompter, wireless audio — pełne zaplecze do transmisji hybrydowych.',
  },
  {
    icon: Server,
    title: 'Platforma VOD Streamly Studio',
    description: 'Własna infrastruktura streamingowa i VOD — transmisja, archiwum i dystrybucja pod jedną marką klienta.',
  },
];

export const TechBackbone = () => {
  return (
    <section className="section-padding border-t border-border/60">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <span className="eyebrow block mb-4">Zaplecze techniczne</span>
          <h2 className="section-title">
            Sprzęt i platforma <span className="hero-accent">w jednym zespole.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mt-6">
            Sprzęt filmowy najwyższej klasy i doświadczony zespół w jednym miejscu. Gotową realizację wyemitujesz
            na platformie Streamly Studio, kiedy jej potrzebujesz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 md:p-8 rounded-2xl border border-border/60 hover:border-accent-warm/30 transition-all duration-300"
              style={{ background: 'hsl(30 6% 10% / 0.6)' }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'hsl(35 60% 55% / 0.1)', border: '1px solid hsl(35 60% 55% / 0.15)' }}
              >
                <item.icon className="w-5 h-5" style={{ color: 'hsl(35 60% 55%)' }} />
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-3 leading-tight">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};