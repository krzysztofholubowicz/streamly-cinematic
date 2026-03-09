import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { href: '/#realizacje', label: 'Realizacje' },
  { href: '/#uslugi', label: 'Usługi' },
  { href: '/#studio', label: 'Streamly Studio' },
  { href: '/wynajem', label: 'Wynajem sprzętu' },
  { href: '/kpo', label: 'KPO' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
    };
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

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-2xl border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          <Link 
            to="/" 
            onClick={handleLogoClick}
            className="font-display text-2xl font-bold text-foreground hover:opacity-80 transition-opacity"
          >
            Streamly Production
          </Link>

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
              Porozmawiajmy
            </a>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-foreground">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden fixed inset-0 top-0 bg-background/98 backdrop-blur-2xl z-40"
            >
              <div className="flex flex-col items-center justify-center h-full gap-8">
                {navLinks.map((link) => (
                  link.href.startsWith('/') && !link.href.includes('#') ? (
                    <Link key={link.href} to={link.href} onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-display font-bold text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  ) : (
                    <a key={link.href} href={link.href} onClick={() => handleNavClick(link.href)}
                      className="text-2xl font-display font-bold text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  )
                ))}
                <a href="/#kontakt" onClick={() => handleNavClick('/#kontakt')} className="btn-primary mt-4">
                  Porozmawiajmy
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
