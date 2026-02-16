import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        x: isVisible ? 0 : 20 
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Progress track */}
      <div className="relative w-1 h-32 bg-border/30 rounded-full overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-accent rounded-full origin-bottom"
          style={{ scaleY }}
        />
      </div>
      
      {/* Percentage indicator */}
      <motion.div 
        className="text-[10px] font-mono text-muted-foreground"
        style={{ opacity: scrollYProgress }}
      >
        <motion.span>
          {/* Will be updated by CSS counter */}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};
