import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-studio.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 md:pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Streamly Production Studio" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      </div>

      {/* Floating orbs – subtle white */}
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
            Produkcja
            <br />
            wideo, która
            <br />
            zmienia
            <br />
            <span className="gradient-text">perspektywę</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-12"
          >
            Tworzymy programy TV, materiały video, reklamy, relacje z eventów i transmisje online
            – zawsze z pasją do detalu i profesjonalizmem na każdym etapie.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <a href="#kontakt" className="btn-primary">
              Zamów produkcję
            </a>
            <a href="#realizacje" className="btn-outline">
              Zobacz realizacje
            </a>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-xs text-muted-foreground uppercase tracking-[3px] font-medium"
          >
            Warszawa · Programy TV · Video Marketing · Transmisje Live · Relacje z Eventów
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-3 gap-8 mt-20 pt-8 border-t border-border/30 max-w-2xl"
        >
          {[
            { number: '100+', label: 'Produkcji rocznie' },
            { number: '500+', label: 'Godzin wideo' },
            { number: '24/7', label: 'Wsparcie na miejscu' },
          ].map((stat, index) => (
            <div key={index}>
              <span className="stat-number text-3xl md:text-5xl text-foreground">{stat.number}</span>
              <p className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};