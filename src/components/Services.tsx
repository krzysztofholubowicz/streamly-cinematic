import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import studioCamera from '@/assets/studio-camera.jpg';
import liveProduction from '@/assets/live-production.jpg';
import cameraCloseup from '@/assets/camera-closeup.jpg';
import heroStudio from '@/assets/hero-studio.jpg';
import blackmagic from '@/assets/equipment/blackmagic-pocket.jpg';

const services = [
  {
    number: '01',
    title: 'Programy TV i serie wideo',
    description: 'Realizujemy formaty telewizyjne od A do Z — scenariusz, plan zdjęciowy, montaż, mastering. Terminarz broadcastowy nie wybacza opóźnień. My ich nie mamy.',
    proof: 'Polsat · TVP · Canal+',
    image: studioCamera,
  },
  {
    number: '02',
    title: 'Video marketing i kampanie reklamowe',
    description: 'Spoty, które zatrzymują scrollowanie. Kampanie, które sprzedają. Każdy format projektujemy pod konkretny cel — zasięg, konwersja, świadomość marki.',
    proof: 'Średnio 3x większe zaangażowanie vs. statyczne kreacje',
    image: liveProduction,
  },
  {
    number: '03',
    title: 'Transmisje live i realizacje eventowe',
    description: 'Wielokamerowa reżyserka, sprawdzone łącza, zespół, który wie, że drugiego ujęcia nie będzie. Konferencje, gale, koncerty — realizujemy na żywo bez marginu na błąd.',
    proof: 'Impact CEE · 99.9% uptime',
    image: cameraCloseup,
  },
  {
    number: '04',
    title: 'Produkcja dedykowana na platformy VOD',
    description: 'Materiały zoptymalizowane pod Streamly Studio i inne platformy VOD. Kodowanie wieloformatowe, QC, metadata — gotowe do publikacji od razu.',
    proof: 'Natywna integracja z własną platformą VOD',
    image: heroStudio,
  },
  {
    number: '05',
    title: 'Wideo korporacyjne i onboarding',
    description: 'Szkolenia, które ludzie oglądają do końca. Onboarding HR, filmy wizerunkowe, komunikacja wewnętrzna. Tworzymy materiały, które pracują dla Twojej firmy.',
    proof: '3x dłuższy czas oglądania niż średnia branżowa',
    image: blackmagic,
  },
];

export const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section id="uslugi" className="section-padding">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <span className="eyebrow block mb-4">Usługi</span>
          <h2 className="section-title">
            Pięć specjalizacji.
            <br />
            <span className="text-muted-foreground">Jeden standard.</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <div>
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border-t border-[hsl(var(--border))]"
              >
                {/* Row button */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between py-7 group cursor-pointer"
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <span
                      className={`font-mono text-sm tracking-widest transition-colors duration-300 ${
                        isActive
                          ? 'text-[hsl(var(--accent-warm))]'
                          : 'text-muted-foreground/40 group-hover:text-muted-foreground'
                      }`}
                    >
                      {service.number}
                    </span>
                    <h3
                      className={`font-display text-xl md:text-[22px] font-bold text-left transition-colors duration-300 ${
                        isActive
                          ? 'text-foreground'
                          : 'text-muted-foreground group-hover:text-foreground'
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive
                        ? 'border-[hsl(var(--accent-warm)/0.4)] bg-[hsl(var(--accent-warm)/0.1)]'
                        : 'border-border group-hover:border-muted-foreground/40'
                    }`}
                  >
                    {isActive ? (
                      <X className="w-3.5 h-3.5 text-[hsl(var(--accent-warm))]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    )}
                  </div>
                </button>

                {/* Expanded content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-0 md:pl-[4.5rem] border-l-2 border-[hsl(var(--accent-warm)/0.4)] ml-[0.65rem] md:ml-[0.65rem] md:border-l-0">
                        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 pl-6 md:pl-0">
                          {/* Left: text */}
                          <div className="flex flex-col justify-between">
                            <p className="text-muted-foreground text-base leading-[1.7] mb-6 max-w-xl">
                              {service.description}
                            </p>
                            <span className="text-[13px] font-medium text-[hsl(var(--accent-warm))]">
                              {service.proof}
                            </span>
                          </div>

                          {/* Right: image */}
                          <div className="overflow-hidden rounded-[4px] aspect-[16/10]">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
          {/* Bottom border */}
          <div className="border-t border-[hsl(var(--border))]" />
        </div>
      </div>
    </section>
  );
};
