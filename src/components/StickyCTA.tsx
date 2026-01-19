import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CAL_LINK = 'https://cal.com/mostachia/consultoria';

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBooking = () => {
    window.open(CAL_LINK, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="sticky-cta md:hidden"
        >
          <div className="flex gap-3">
            <Button
              className="flex-1 btn-glow rounded-xl py-6"
              asChild
            >
              <a href="#demos">
                Probar Demos
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="rounded-xl py-6 px-4 border-primary/50"
              onClick={handleBooking}
            >
              <Calendar className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};