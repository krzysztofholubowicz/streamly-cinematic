import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-studio.jpg';
import { useCountUp } from '@/hooks/use-count-up';

export const Hero = () => {
  const stat1 = useCountUp(100, 2000);
  const stat2 = useCountUp(500, 2500);

  return (
    <section className="relative min-h-screen flex items-end pb-20 md:pb-32 overflow-hidden">
      {/* Background Image with parallax feel */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Streamly Production Studio"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      </div>

      {/* Floating orbs */}
      <div
        className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] rounded-full floating-orb pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)', filter: 'blur(120px)' }}
      />
      <div
        className="absolute bottom-[-80px] right-[-80px] w-[500px] h-[500px] rounded-full floating-orb-delayed pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)', filter: 'blur(120px)' }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hero-title text-foreground mb-8"
          >
            Produkcja,
            <br />
            której nie
            <br />
            da się
            <br />
            <span className="gradient-text">zignorować</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-12"
          >
            Realizujemy programy telewizyjne, kampanie wideo i transmisje live
            dla marek, które grają o najwyższą stawkę. Od Polsatu po startupy
            – każdy projekt traktujemy jak premierowy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <a href="#kontakt" className="btn-primary">
              Zapytaj o wycenę
            </a>
            <a href="#realizacje" className="btn-outline">
              Zobacz portfolio
            </a>
          </motion.div>

          {/* Tagline with vertical separators */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-xs text-muted-foreground uppercase tracking-[0.3em] font-medium"
          >
            Warszawa<span className="tagline-separator" />Broadcast<span className="tagline-separator" />Video Marketing<span className="tagline-separator" />Live Streaming<span className="tagline-separator" />VOD
          </motion.p>
        </div>

        {/* Stats – glassmorphism bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="stats-bar grid grid-cols-3 gap-8 mt-20 max-w-2xl"
        >
          <div ref={stat1.ref as React.RefObject<HTMLDivElement>}>
            <span className="stat-number text-3xl md:text-5xl text-foreground">{stat1.count}+</span>
            <p className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">Projektów dostarczonych na czas</p>
          </div>
          <div ref={stat2.ref as React.RefObject<HTMLDivElement>}>
            <span className="stat-number text-3xl md:text-5xl text-foreground">{stat2.count}+</span>
            <p className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">Godzin materiału rocznie</p>
          </div>
          <div>
            <span className="stat-number text-3xl md:text-5xl text-foreground">24/7</span>
            <p className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">Dostępność w dniu produkcji</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
