import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import tvProduction from '@/assets/services/tv-production.jpg';
import videoMarketing from '@/assets/services/video-marketing.jpg';
import liveEvent from '@/assets/services/live-event.jpg';
import vodPlatform from '@/assets/services/vod-platform.jpg';
import corporateVideo from '@/assets/services/corporate-video.jpg';

const services = [
  {
    number: '01',
    title: 'Targi online',
    description: 'Kompleksowa organizacja targów w formule online — sceny wirtualne, stoiska wystawców, panele dyskusyjne, transmisje wielokamerowe i moduł networkingowy w jednej platformie.',
    proof: '',
    image: tvProduction,
    size: 'large' as const,
  },
  {
    number: '02',
    title: 'Wystawy hybrydowe',
    description: 'Łączymy przestrzeń fizyczną z transmisją online. Realizacja techniczna wystawy na miejscu plus dedykowana wersja cyfrowa — jedna wystawa, dwie widownie, wspólne dane.',
    proof: '',
    image: videoMarketing,
    size: 'large' as const,
  },
  {
    number: '03',
    title: 'Kongresy online i hybrydowe',
    description: 'Wielosalowe kongresy z prelegentami zdalnymi i lokalnymi. Reżyserka wielokamerowa, tłumaczenia, Q&A, głosowania — bez marginu na błąd.',
    proof: '',
    image: liveEvent,
    size: 'small' as const,
  },
  {
    number: '04',
    title: 'Streaming i rejestracja wydarzeń',
    description: 'Transmisje na żywo w jakości 4K z adaptacyjnym bitrate, wielokamerowa rejestracja i mastering — gotowe do publikacji zaraz po zakończeniu wydarzenia.',
    proof: '',
    image: vodPlatform,
    size: 'small' as const,
  },
  {
    number: '05',
    title: 'Archiwizacja i dystrybucja VOD',
    description: 'Wszystkie materiały z wydarzenia trafiają na platformę Streamly Studio — dostęp na żądanie, kontrola widowni, analityka i dystrybucja pod marką klienta.',
    proof: '',
    image: corporateVideo,
    size: 'small' as const,
  },
];

const BentoCard = ({ service, index, className }: { service: typeof services[0]; index: number; className?: string }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ scale }}
      className={`group relative overflow-hidden rounded-xl border border-border bg-card ${className}`}
    >
      {/* Background image with parallax */}
      <div className="absolute inset-0">
        <motion.img
          style={{ y }}
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover opacity-30 grayscale group-hover:opacity-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
        >
          <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-3 leading-tight">
            {service.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 group-hover:line-clamp-none transition-all">
            {service.description}
          </p>

          {service.proof && (
            <span className="text-[hsl(var(--accent-warm))] text-xs font-medium tracking-wide">
              {service.proof}
            </span>
          )}
        </motion.div>
      </div>

      {/* Hover border accent */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[hsl(var(--accent-warm)/0.5)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
};

export const Services = () => {
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
          <span className="eyebrow block mb-4">Zakres działalności</span>
          <h2 className="section-title">
            Wydarzenia online i hybrydowe.
            <br />
            <span className="hero-accent">Kompleksowa obsługa.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mt-6">
            Dzięki inwestycji z Krajowego Planu Odbudowy rozwijamy nową usługę — organizację targów, wystaw i kongresów w formule online oraz hybrydowej. Produkcja telewizyjna pozostaje naszą kompetencją techniczną wspierającą realizację wydarzeń.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Row 1: 2 large cards */}
          <BentoCard service={services[0]} index={0} className="min-h-[340px] md:min-h-[400px]" />
          <BentoCard service={services[1]} index={1} className="min-h-[340px] md:min-h-[400px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {/* Row 2: 3 smaller cards */}
          <BentoCard service={services[2]} index={2} className="min-h-[280px] md:min-h-[320px]" />
          <BentoCard service={services[3]} index={3} className="min-h-[280px] md:min-h-[320px]" />
          <BentoCard service={services[4]} index={4} className="min-h-[280px] md:min-h-[320px]" />
        </div>
      </div>
    </section>
  );
};
