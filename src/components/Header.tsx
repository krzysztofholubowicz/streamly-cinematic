import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { href: '/#uslugi', label: 'Oferta' },
  { href: '/#realizacje', label: 'Realizacje' },
  { href: '/#studio', label: 'Streamly Studio' },
  { href: '/wynajem', label: 'Wynajem Sprzętu' },
  { href: '/kpo', label: 'Projekt KPO' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#') && location.pathname === '/') {
      const element = document.querySelector(href.replace('/', ''));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-display text-2xl font-bold gradient-text">
          Streamly
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            link.href.startsWith('/') && !link.href.includes('#') ? (
              <Link key={link.href} to={link.href} className="nav-item">
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} onClick={() => handleNavClick(link.href)} className="nav-item">
                {link.label}
              </a>
            )
          ))}
          <a
            href="/#kontakt"
            onClick={() => handleNavClick('/#kontakt')}
            className="btn-primary py-2.5 px-7 text-xs"
          >
            Kontakt
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-foreground">
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
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                link.href.startsWith('/') && !link.href.includes('#') ? (
                  <Link key={link.href} to={link.href} onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                ) : (
                  <a key={link.href} href={link.href} onClick={() => handleNavClick(link.href)}
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                )
              ))}
              <a href="/#kontakt" onClick={() => handleNavClick('/#kontakt')} className="btn-primary text-center mt-4">
                Kontakt
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
