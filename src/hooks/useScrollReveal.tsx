import { useRef, useEffect, useState, RefObject } from 'react';

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale' | 'rotate';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  direction?: RevealDirection;
  duration?: number;
  distance?: number;
}

interface ScrollRevealReturn {
  ref: RefObject<HTMLDivElement>;
  isVisible: boolean;
  style: React.CSSProperties;
}

export const useScrollReveal = (options: ScrollRevealOptions = {}): ScrollRevealReturn => {
  const {
    threshold = 0.1,
    rootMargin = '-50px',
    triggerOnce = true,
    delay = 0,
    direction = 'up',
    duration = 800,
    distance = 60
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, delay]);

  const getInitialTransform = (): string => {
    switch (direction) {
      case 'up': return `translateY(${distance}px)`;
      case 'down': return `translateY(-${distance}px)`;
      case 'left': return `translateX(${distance}px)`;
      case 'right': return `translateX(-${distance}px)`;
      case 'scale': return 'scale(0.85)';
      case 'rotate': return 'rotate(-5deg) scale(0.95)';
      case 'fade': return 'none';
      default: return `translateY(${distance}px)`;
    }
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'none' : getInitialTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1), transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
    transitionDelay: `${delay}ms`,
    willChange: 'opacity, transform'
  };

  return { ref, isVisible, style };
};

// Stagger children animation helper
export const useStaggerReveal = (
  itemCount: number,
  baseDelay: number = 0,
  staggerDelay: number = 100,
  options: Omit<ScrollRevealOptions, 'delay'> = {}
) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isContainerVisible, setIsContainerVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContainerVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const getItemStyle = (index: number): React.CSSProperties => {
    const delay = baseDelay + index * staggerDelay;
    const direction = options.direction || 'up';
    const distance = options.distance || 40;
    const duration = options.duration || 600;

    const getTransform = () => {
      switch (direction) {
        case 'up': return `translateY(${distance}px)`;
        case 'down': return `translateY(-${distance}px)`;
        case 'left': return `translateX(${distance}px)`;
        case 'right': return `translateX(-${distance}px)`;
        case 'scale': return 'scale(0.9)';
        default: return `translateY(${distance}px)`;
      }
    };

    return {
      opacity: isContainerVisible ? 1 : 0,
      transform: isContainerVisible ? 'none' : getTransform(),
      transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1), transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
      transitionDelay: `${delay}ms`
    };
  };

  return { containerRef, isContainerVisible, getItemStyle };
};

// Parallax scroll effect
export const useParallaxScroll = (speed: number = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      setOffset(scrollProgress * 100 * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offset };
};
