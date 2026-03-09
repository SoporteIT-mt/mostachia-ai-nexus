import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONFIG } from '@/config/constants';

const navLinks = [
  { href: '#servicios', label: 'Ecosistema IA' },
  { href: '#demos', label: 'En Acción' },
  { href: '#proceso', label: 'Método' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-5xl rounded-full border ${
        isScrolled
          ? 'bg-black/40 backdrop-blur-xl border-white/[0.08] py-3 shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="flex items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src="/logo-horizontal-oscuro.png" alt="MostachIA" className="h-8 w-auto" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-white/60 hover:text-primary rounded-full hover:bg-white/[0.06] transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="text-[#25D366] hover:bg-[#25D366]/10 rounded-full"
            onClick={() => window.open(CONFIG.WHATSAPP_URL, '_blank')}
          >
            <MessageCircle className="w-4 h-4 mr-1.5" /> WhatsApp
          </Button>
          <Button
            size="sm"
            className="rounded-full bg-gradient-to-r from-primary to-primary text-primary-foreground font-semibold hover:shadow-[0_0_20px_rgba(96,185,154,0.4)]"
            onClick={() => window.open(CONFIG.CALCOM_URL, '_blank')}
          >
            <Calendar className="w-4 h-4 mr-1.5" /> Agendar Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden relative z-10 text-white p-2"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-full left-0 right-0 mt-4 p-4 bg-black/60 backdrop-blur-2xl border border-white/[0.08] rounded-3xl shadow-2xl flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-lg font-medium text-white p-2 rounded-xl hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-white/10 pt-4" />
            <Button
              className="w-full rounded-full bg-gradient-to-r from-primary to-primary text-primary-foreground font-semibold"
              onClick={() => window.open(CONFIG.CALCOM_URL, '_blank')}
            >
              Agendar Demo
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
