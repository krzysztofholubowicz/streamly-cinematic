import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after short delay
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="glass-card p-6 border border-border rounded-lg shadow-2xl">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-display font-bold text-lg text-foreground">
                Polityka cookies
              </h3>
              <button
                onClick={handleReject}
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label="Zamknij"
              >
                <X size={20} />
              </button>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Używamy plików cookies, aby poprawić Twoje doświadczenia na stronie.
              Kontynuując przeglądanie, zgadzasz się na ich użycie.{' '}
              <Link
                to="/polityka-prywatnosci"
                className="text-foreground hover:text-primary transition-colors underline"
              >
                Polityka prywatności
              </Link>
            </p>

            <div className="flex gap-3">
              <Button
                onClick={handleAccept}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Akceptuję
              </Button>
              <Button
                onClick={handleReject}
                variant="outline"
                className="flex-1"
              >
                Odrzuć
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
