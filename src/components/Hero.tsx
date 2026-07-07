import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-studio.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Streamly Production Studio"
          className="w-full h-full object-cover object-center"
          initial={{ scale: 1.015 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 md:pt-40 pt-[16px]">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <h1 className="hero-title uppercase mb-8">
            {[
              { text: 'OPOWIADAMY', className: 'text-foreground', delay: 0.3 },
              { text: 'OBRAZEM.', className: 'hero-accent', delay: 0.5 },
            ].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  initial={{ y: '110%', opacity: 0, filter: 'blur(12px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 1, delay: line.delay, ease: [0.16, 1, 0.3, 1] }}
                  className={`block ${line.className}`}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-10"
          >
            Studio Streamly Production. Programy TV, video marketing, transmisje live i własna platforma VOD — dla marek,
            które nie idą na kompromisy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4"
          >
            <a href="#kontakt" className="btn-primary">
              Porozmawiajmy
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator"
      >
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
};