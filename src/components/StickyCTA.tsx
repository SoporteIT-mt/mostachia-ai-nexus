import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONFIG } from '@/config/constants';

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      const footerTop = footer?.getBoundingClientRect().top ?? Infinity;
      const pastHero = window.scrollY > 600;
      const beforeFooter = footerTop > window.innerHeight;
      setIsVisible(pastHero && beforeFooter);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-30 md:hidden backdrop-blur-xl bg-background/80 border-t border-white/10 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]"
        >
          <div className="flex gap-3">
            <Button
              className="flex-1 rounded-xl py-5 font-semibold"
              asChild
            >
              <a href={CONFIG.CALCOM_URL} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-2" />
                Agendar
              </a>
            </Button>
            <Button
              variant="outline"
              className="rounded-xl py-5 px-4 border-white/20"
              style={{ backgroundColor: '#25D366', borderColor: '#25D366', color: 'white' }}
              asChild
            >
              <a href={CONFIG.WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
