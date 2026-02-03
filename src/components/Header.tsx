import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#oferta', label: 'Oferta' },
  { href: '#transmisje', label: 'Transmisje Online' },
  { href: '#realizacje', label: 'Realizacje' },
  { href: '#wynajem', label: 'Wynajem Sprzętu' },
  { href: '#kpo', label: 'Projekt KPO' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-foreground/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold text-gradient-primary">
            Streamly
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm font-medium text-foreground/70 hover:text-foreground transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="ml-4 px-6 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-lg btn-glow transition-all duration-300 hover:scale-105"
          >
            Kontakt
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-foreground"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-foreground/5"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground/70 hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 bg-primary text-primary-foreground font-semibold text-center rounded-lg"
              >
                Kontakt
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
