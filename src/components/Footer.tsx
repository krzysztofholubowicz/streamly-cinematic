import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-foreground/5 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo */}
          <span className="font-display text-2xl font-bold text-gradient-primary mb-6">
            Streamly
          </span>

          {/* Description */}
          <p className="text-muted-foreground text-sm max-w-lg mb-6">
            Produkcja wideo, TV, video marketing, transmisje online dla marek, które liczą się wyniki.
          </p>

          {/* Streamly Studio */}
          <p className="text-sm text-foreground/70 mb-8">
            <span className="text-primary">Streamly Studio</span> – platforma VOD do dystrybucji
            Twoich materiałów wideo
          </p>

          {/* EU Notice */}
          <p className="text-xs text-muted-foreground/50 max-w-lg mb-8">
            Projekt współfinansowany ze środków Unii Europejskiej w ramach Krajowego Planu
            Odbudowy i Zwiększania Odporności.
          </p>

          {/* Copyright */}
          <div className="pt-6 border-t border-foreground/5 w-full">
            <p className="text-xs text-muted-foreground/40">
              © 2026 Streamly Production. Wszystkie prawa zastrzeżone.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
