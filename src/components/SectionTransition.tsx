import { useRef, ReactNode } from 'react';
import { motion, useInView, useSpring, useTransform, useScroll, Variants } from 'framer-motion';

type TransitionType = 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'blur' | 'rotate';

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
  type?: TransitionType;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}

const getVariants = (type: TransitionType, duration: number): Variants => {
  const springTransition = {
    type: "spring" as const,
    stiffness: 80,
    damping: 20,
    duration
  };

  const easeTransition = {
    duration,
    ease: [0.25, 0.1, 0.25, 1] as const
  };

  switch (type) {
    case 'slideUp':
      return {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: springTransition }
      };
    case 'slideDown':
      return {
        hidden: { opacity: 0, y: -40 },
        visible: { opacity: 1, y: 0, transition: springTransition }
      };
    case 'slideLeft':
      return {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: springTransition }
      };
    case 'slideRight':
      return {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: springTransition }
      };
    case 'scale':
      return {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: springTransition }
      };
    case 'blur':
      return {
        hidden: { opacity: 0, filter: 'blur(8px)' },
        visible: { opacity: 1, filter: 'blur(0px)', transition: easeTransition }
      };
    case 'rotate':
      return {
        hidden: { opacity: 0, rotate: -3, scale: 0.98 },
        visible: { opacity: 1, rotate: 0, scale: 1, transition: springTransition }
      };
    case 'fade':
    default:
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: easeTransition }
      };
  }
};

export const SectionTransition = ({
  children,
  className = '',
  type = 'slideUp',
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.15
}: SectionTransitionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });
  const variants = getVariants(type, duration);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      custom={delay}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
};

// Smooth animated divider between sections
export const AnimatedDivider = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const lineScale = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [0, 1]),
    { stiffness: 100, damping: 30 }
  );

  return (
    <div ref={ref} className="relative h-16 flex items-center justify-center overflow-hidden my-4">
      <motion.div 
        className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"
        style={{ scaleX: lineScale }}
      />
      <motion.div 
        className="absolute w-1.5 h-1.5 rounded-full bg-primary/60"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.2, type: 'spring', stiffness: 200 }}
      />
    </div>
  );
};

// Stagger container for grouped animations
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
  amount?: number;
}

export const StaggerContainer = ({
  children,
  className = '',
  staggerDelay = 0.08,
  once = true,
  amount = 0.15
}: StaggerContainerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.05
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  type?: TransitionType;
}

export const StaggerItem = ({
  children,
  className = '',
  type = 'slideUp'
}: StaggerItemProps) => {
  const variants = getVariants(type, 0.5);
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
};
