import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export const ParallaxSection = ({ 
  children, 
  className = '',
  intensity = 0.3 
}: ParallaxSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * intensity, -100 * intensity]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ParallaxBackground = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating orb 1 */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 left-1/4 w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full bg-mint-400/[0.03] blur-3xl will-change-transform"
      />
      
      {/* Floating orb 2 */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/2 right-1/4 w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full bg-mint-500/[0.03] blur-3xl will-change-transform"
      />
      
      {/* Floating orb 3 */}
      <motion.div
        style={{ y: y3, rotate }}
        className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-navy-600/[0.05] blur-3xl will-change-transform"
      />

      {/* Gradient mesh that moves with scroll */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-mint-400/[0.06] via-transparent to-mint-500/[0.04]" />
      </motion.div>
    </div>
  );
};

export const SectionDivider = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scaleX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="relative h-32 flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ scaleX, opacity }}
        className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
      />
      <motion.div
        style={{ opacity }}
        className="absolute w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50"
      />
    </div>
  );
};
