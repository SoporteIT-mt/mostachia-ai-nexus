import { useRef, ReactNode } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

type TransitionDirection = 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale' | 'blur';

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
  direction?: TransitionDirection;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}

const getVariants = (direction: TransitionDirection): Variants => {
  const baseTransition = {
    type: "spring" as const,
    stiffness: 100,
    damping: 20,
  };

  switch (direction) {
    case 'up':
      return {
        hidden: { opacity: 0, y: 60 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: baseTransition
        }
      };
    case 'down':
      return {
        hidden: { opacity: 0, y: -60 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: baseTransition
        }
      };
    case 'left':
      return {
        hidden: { opacity: 0, x: 80 },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: baseTransition
        }
      };
    case 'right':
      return {
        hidden: { opacity: 0, x: -80 },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: baseTransition
        }
      };
    case 'scale':
      return {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { 
          opacity: 1, 
          scale: 1,
          transition: baseTransition
        }
      };
    case 'blur':
      return {
        hidden: { opacity: 0, filter: 'blur(10px)' },
        visible: { 
          opacity: 1, 
          filter: 'blur(0px)',
          transition: { duration: 0.6, ease: 'easeOut' }
        }
      };
    case 'fade':
    default:
      return {
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { duration: 0.6, ease: 'easeOut' }
        }
      };
  }
};

export const SectionTransition = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration,
  once = true,
  amount = 0.2
}: SectionTransitionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });
  
  const variants = getVariants(direction);
  
  // Override duration if provided
  if (duration && variants.visible && typeof variants.visible === 'object') {
    variants.visible.transition = {
      ...variants.visible.transition,
      duration
    };
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      style={{ transitionDelay: `${delay}s` }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Staggered container for multiple children
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
  staggerDelay = 0.1,
  once = true,
  amount = 0.2
}: StaggerContainerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
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

// Child item for stagger container
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: TransitionDirection;
}

export const StaggerItem = ({
  children,
  className = '',
  direction = 'up'
}: StaggerItemProps) => {
  const variants = getVariants(direction);

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
};

// Animated section divider
export const AnimatedDivider = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="relative h-24 flex items-center justify-center overflow-hidden">
      <motion.div 
        className="w-full max-w-lg h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
      <motion.div 
        className="absolute w-2 h-2 rounded-full bg-primary/50 shadow-lg shadow-primary/40"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 300 }}
      />
      {/* Expanding ring effect */}
      <motion.div 
        className="absolute w-2 h-2 rounded-full border border-primary/30"
        initial={{ scale: 1, opacity: 0 }}
        animate={isInView ? { 
          scale: [1, 4, 6], 
          opacity: [0.5, 0.2, 0] 
        } : { scale: 1, opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
      />
    </div>
  );
};
