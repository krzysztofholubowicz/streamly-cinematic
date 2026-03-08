import { motion } from 'framer-motion';
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
    proof: '',
    image: studioCamera,
    size: 'large' as const,
  },
  {
    number: '02',
    title: 'Video marketing i kampanie reklamowe',
    description: 'Spoty, które zatrzymują scrollowanie. Kampanie, które sprzedają. Każdy format projektujemy pod konkretny cel — zasięg, konwersja, świadomość marki.',
    proof: '',
    image: liveProduction,
    size: 'large' as const,
  },
  {
    number: '03',
    title: 'Transmisje live i realizacje eventowe',
    description: 'Wielokamerowa reżyserka, sprawdzone łącza, zespół, który wie, że drugiego ujęcia nie będzie. Realizujemy na żywo bez marginu na błąd.',
    proof: '',
    image: cameraCloseup,
    size: 'small' as const,
  },
  {
    number: '04',
    title: 'Produkcja na platformy VOD',
    description: 'Materiały zoptymalizowane pod Streamly Studio i inne platformy VOD. Kodowanie wieloformatowe, QC, metadata — gotowe do publikacji od razu.',
    proof: 'Natywna integracja z własną platformą VOD',
    image: heroStudio,
    size: 'small' as const,
  },
  {
    number: '05',
    title: 'Wideo korporacyjne i onboarding',
    description: 'Szkolenia, które ludzie oglądają do końca. Onboarding HR, filmy wizerunkowe, komunikacja wewnętrzna.',
    proof: '3x dłuższy czas oglądania',
    image: blackmagic,
    size: 'small' as const,
  },
];

const BentoCard = ({ service, index, className }: { service: typeof services[0]; index: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className={`group relative overflow-hidden rounded-xl border border-border bg-card ${className}`}
  >
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover opacity-30 grayscale group-hover:opacity-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
    </div>

    {/* Content */}
    <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
      {/* Number */}
      <span className="text-[hsl(var(--accent-warm))] font-mono text-xs tracking-widest mb-3 block">
        {service.number}
      </span>

      <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-3 leading-tight">
        {service.title}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 group-hover:line-clamp-none transition-all">
        {service.description}
      </p>

      {/* Proof line */}
      <span className="text-[hsl(var(--accent-warm))] text-xs font-medium tracking-wide">
        {service.proof}
      </span>
    </div>

    {/* Hover border accent */}
    <div className="absolute top-0 left-0 w-full h-[2px] bg-[hsl(var(--accent-warm)/0.5)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
  </motion.div>
);

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
          <span className="eyebrow block mb-4">Usługi</span>
          <h2 className="section-title">
            Pięć specjalizacji.
            <br />
            <span className="text-muted-foreground">Jeden standard.</span>
          </h2>
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
