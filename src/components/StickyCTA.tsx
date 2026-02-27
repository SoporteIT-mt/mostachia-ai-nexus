import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MessageCircle } from 'lucide-react';
import { ShimmerButton } from '@/components/ui/shimmer-button';
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
          className="fixed bottom-0 left-0 right-0 z-30 md:hidden backdrop-blur-xl bg-[rgba(15,30,39,0.9)] border-t border-[rgba(115,215,203,0.1)] px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]"
        >
          <div className="flex gap-3">
            <a href={CONFIG.CALCOM_URL} target="_blank" rel="noopener noreferrer" className="flex-1">
              <ShimmerButton
                shimmerColor="rgba(127, 205, 179, 0.8)"
                background="linear-gradient(135deg, #60b99a, #4a9e82)"
                borderRadius="12px"
                className="w-full py-3 font-semibold text-sm"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Agendar Diagnóstico Gratis
              </ShimmerButton>
            </a>
            <Button
              variant="outline"
              className="rounded-xl py-3 px-4 border-white/20 hover:border-mint-400/50"
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
