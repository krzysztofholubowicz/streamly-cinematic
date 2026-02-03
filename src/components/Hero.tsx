import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-studio.jpg';

const stats = [
  { value: '100+', label: 'Produkcji rocznie' },
  { value: '500+', label: 'Godzin wideo rocznie' },
  { value: '24/7', label: 'Wsparcie na miejscu' },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Film production studio"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </div>

      {/* Light leak effects */}
      <div className="light-leak w-[600px] h-[600px] -top-40 -right-40 animate-glow-pulse" />
      <div className="light-leak w-[400px] h-[400px] bottom-20 left-20 opacity-50 animate-glow-pulse animation-delay-400" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium tracking-widest uppercase text-sm mb-6"
          >
            Warsaw-based Production Studio
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hero-title text-foreground mb-6"
          >
            Produkcja wideo, która{' '}
            <span className="text-gradient-primary">zmienia perspektywę</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            Tworzymy programy TV, materiały video, reklamy, relacje z eventów i transmisje
            online – zawsze z pasją do detalu i profesjonalizmem na każdym etapie.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="#kontakt"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg btn-glow transition-all duration-300 hover:scale-105"
            >
              Zamów produkcję
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#realizacje"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-foreground/20 text-foreground font-semibold rounded-lg transition-all duration-300 hover:border-primary/50 hover:bg-primary/10"
            >
              <Play className="w-5 h-5" />
              Zobacz jak pracujemy
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-lg"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <p className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-10 left-6 right-6"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60 text-center">
            Warszawa • Programy TV • Video Marketing • Transmisje Live • Relacje z Eventów
          </p>
        </motion.div>
      </div>
    </section>
  );
};
