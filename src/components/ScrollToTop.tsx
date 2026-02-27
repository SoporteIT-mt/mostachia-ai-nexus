import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      
      setIsVisible(scrollTop > 2000);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(115, 215, 203, 0.4)' }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-mint-400 to-mint-500 backdrop-blur-sm border border-mint-400/30 shadow-lg shadow-mint-400/25 flex items-center justify-center group cursor-pointer"
          aria-label="Scroll to top"
        >
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/20" />
            <motion.circle
              cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              className="text-white"
              style={{ pathLength: scrollProgress }}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: scrollProgress }}
              transition={{ duration: 0.1 }}
              strokeDasharray="1" strokeDashoffset="0"
            />
          </svg>
          <motion.div animate={{ y: [0, -2, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
            <ArrowUp className="w-5 h-5 text-navy-900 relative z-10" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
