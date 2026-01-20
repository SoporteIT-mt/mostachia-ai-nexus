import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { href: '#demos', label: 'Demos' },
  { href: '#soluciones', label: 'Soluciones' },
  { href: '#casos', label: 'Casos de Éxito' },
  { href: '#precios', label: 'Precios' },
];

const CAL_LINK = 'https://cal.com/mostachia/consultoria';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Scroll progress for dynamic styling
  const { scrollY } = useScroll();
  
  // Transform values based on scroll
  const headerBg = useTransform(
    scrollY,
    [0, 50, 100],
    ['rgba(0,0,0,0)', 'rgba(11,15,25,0.7)', 'rgba(11,15,25,0.95)']
  );
  
  const headerBlur = useTransform(
    scrollY,
    [0, 50, 100],
    ['blur(0px)', 'blur(12px)', 'blur(20px)']
  );
  
  const headerBorder = useTransform(
    scrollY,
    [0, 50, 100],
    ['rgba(255,255,255,0)', 'rgba(255,255,255,0.05)', 'rgba(255,255,255,0.1)']
  );

  const headerShadow = useTransform(
    scrollY,
    [0, 100, 200],
    ['0 0 0 0 rgba(0,0,0,0)', '0 4px 20px -5px rgba(0,0,0,0.3)', '0 8px 30px -5px rgba(0,0,0,0.5)']
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
      setScrollProgress(Math.min(scrollTop / 200, 1));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBooking = () => {
    window.open(CAL_LINK, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{
        backgroundColor: headerBg,
        backdropFilter: headerBlur,
        WebkitBackdropFilter: headerBlur,
        borderBottomColor: headerBorder,
        boxShadow: headerShadow,
      }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-4 md:py-5'
      }`}
    >
      {/* Progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-primary to-accent"
        style={{
          width: `${scrollProgress * 100}%`,
          opacity: scrollProgress > 0.1 ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
      />

      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="#" 
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div 
            className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden shadow-lg shadow-primary/25"
            whileHover={{ 
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.5 }
            }}
          >
            <span className="text-xl font-bold text-white">M</span>
            <motion.div 
              className="absolute inset-0 bg-white/20"
              initial={{ y: '100%' }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <span className="font-display font-bold text-xl">
            Mostach<span className="text-primary">IA</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              whileHover={{ y: -2 }}
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* CTA Buttons & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="ghost" 
              className="font-medium text-muted-foreground hover:text-foreground"
              onClick={handleBooking}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Agendar
            </Button>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05, y: -2 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Button className="btn-glow rounded-xl px-6" asChild>
              <a href="#demos">Probar Demo</a>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isMobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-border/30"
            style={{
              backgroundColor: 'rgba(11,15,25,0.98)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-lg font-medium py-2 hover:text-primary transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div 
                className="flex flex-col gap-3 mt-4 pt-4 border-t border-border/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <ThemeToggle />
                <Button 
                  variant="outline" 
                  className="w-full border-primary/30"
                  onClick={handleBooking}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar Consultoría
                </Button>
                <Button className="btn-glow w-full rounded-xl" asChild>
                  <a href="#demos">Probar Demo</a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};