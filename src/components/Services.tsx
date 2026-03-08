import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Film, Smartphone, Radio, Video, Building2, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: Film,
    number: '01',
    title: 'Programy TV i serie wideo',
    subtitle: 'Broadcast & serialized content',
    description: 'Od scenariusza po mastering — z broadcastową precyzją i terminami, które dotrzymujemy. Kompleksowa produkcja programów telewizyjnych i serii wideo dla platform streamingowych.',
    deliverables: ['Scenariusz', 'Realizacja multicam', 'Postprodukcja', 'Mastering & delivery'],
    stats: '200+ odcinków rocznie',
  },
  {
    icon: Smartphone,
    number: '02',
    title: 'Video marketing i kampanie',
    subtitle: 'Performance & brand content',
    description: 'Spoty, kampanie social, wideo sprzedażowe. Każdy format z myślą o konwersji i zasięgu. Tworzymy treści, które pracują na wyniki biznesowe.',
    deliverables: ['Spoty reklamowe', 'Social media content', 'Wideo produktowe', 'Kampanie 360°'],
    stats: '85% wzrost engagement',
  },
  {
    icon: Radio,
    number: '03',
    title: 'Transmisje live',
    subtitle: 'Live streaming & events',
    description: 'Multicam, redundantne łącza, zero marginu na błąd. Impact CEE, Polsat — nam ufają. Realizujemy transmisje na żywo z gwarancją ciągłości sygnału.',
    deliverables: ['Transmisje multicam', 'Streaming na platformy', 'Realizacja eventów', 'Redundancja łączy'],
    stats: '99.9% uptime',
  },
  {
    icon: Video,
    number: '04',
    title: 'Produkcja pod platformy VOD',
    subtitle: 'OTT & streaming-ready',
    description: 'Materiały gotowe do publikacji — zoptymalizowane, zmasterowane, ready to stream. Spełniamy techniczne wymagania każdej platformy.',
    deliverables: ['Mastering 4K/HDR', 'Kodowanie wieloformatowe', 'QC & compliance', 'Metadata & subtitles'],
    stats: 'Netflix & HBO ready',
  },
  {
    icon: Building2,
    number: '05',
    title: 'Wideo korporacyjne',
    subtitle: 'Internal & employer branding',
    description: 'Onboarding, szkolenia, komunikacja wewnętrzna. Materiały, które ludzie oglądają do końca. Profesjonalna jakość broadcastowa w służbie Twojej organizacji.',
    deliverables: ['Filmy szkoleniowe', 'Employer branding', 'Komunikacja CEO', 'Onboarding video'],
    stats: '3x dłuższy czas oglądania',
  },
];

export const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="uslugi" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="eyebrow block mb-4">Usługi</span>
            <h2 className="section-title">
              Pięć specjalizacji.
              <br />
              <span className="text-muted-foreground">Jeden standard.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
            Każda usługa to zamknięty proces — od briefu po delivery. Bez kompromisów w jakości, bez opóźnień w terminach.
          </p>
        </motion.div>

        <div className="space-y-0">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <button
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="w-full text-left group"
                >
                  <div className={`flex items-center gap-6 md:gap-10 py-7 border-t border-border transition-colors duration-300 ${isActive ? 'border-t-accent-warm/40' : ''}`}>
                    {/* Number */}
                    <span className={`font-display text-xs tracking-widest transition-colors duration-300 w-8 ${isActive ? 'text-accent-warm' : 'text-muted-foreground/40'}`}>
                      {service.number}
                    </span>

                    {/* Icon */}
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-300 shrink-0 ${isActive ? 'border-accent-warm/30 bg-accent-warm/10' : 'border-border bg-transparent'}`}>
                      <Icon className={`w-4 h-4 transition-colors duration-300 ${isActive ? 'text-accent-warm' : 'text-muted-foreground'}`} />
                    </div>

                    {/* Title */}
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-display text-lg md:text-xl font-bold transition-colors duration-300 ${isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                        {service.title}
                      </h3>
                      <span className="text-muted-foreground/50 text-xs tracking-wide hidden md:inline">
                        {service.subtitle}
                      </span>
                    </div>

                    {/* Arrow */}
                    <ChevronRight className={`w-5 h-5 text-muted-foreground/40 transition-all duration-300 shrink-0 ${isActive ? 'rotate-90 text-accent-warm' : 'group-hover:text-foreground'}`} />
                  </div>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-[4.5rem] md:pl-[6.5rem] pr-4">
                        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
                          {/* Left: description + deliverables */}
                          <div>
                            <p className="text-muted-foreground leading-relaxed text-sm mb-6 max-w-xl">
                              {service.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {service.deliverables.map((d) => (
                                <span key={d} className="deliverable-pill">{d}</span>
                              ))}
                            </div>
                          </div>

                          {/* Right: stat highlight */}
                          <div className="hidden md:flex flex-col items-end justify-center">
                            <span className="font-display text-2xl font-bold text-foreground">
                              {service.stats}
                            </span>
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
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};
