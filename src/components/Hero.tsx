import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import heroImage from '@/assets/hero-studio.jpg';

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-end pb-20 md:pb-28 overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y: imageY }}
          className="absolute inset-0 -top-[30%] h-[130%]"
        >
          <motion.img
            src={heroImage}
            alt="Streamly Production Studio"
            className="w-full h-full object-cover"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
        
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      </div>

      {/* Content with Parallax */}
      <motion.div 
        style={{ y: contentY, opacity }}
        className="relative z-10 container mx-auto px-6 lg:px-12"
      >
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hero-title uppercase mb-8">
            
            <span className="text-foreground">TWOJA   HISTORIA</span>
            <br />
            <span className="hero-accent">NASZ OBRAZ</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-10">
            
            Studio Streamly Production. Programy TV, video marketing,
            transmisje live i własna platforma VOD — dla marek,
            które nie idą na kompromisy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}>
            
            <a href="#kontakt" className="btn-primary">
              Porozmawiajmy
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator">
        
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
      </motion.div>
    </section>);

};
