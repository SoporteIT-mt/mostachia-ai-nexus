import { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const FloatingParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.5 + 0.1,
    }));
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: particle.id % 3 === 0 
              ? 'hsl(var(--primary))' 
              : particle.id % 3 === 1
                ? 'hsl(262 84% 58%)'
                : 'hsl(var(--foreground))',
            opacity: particle.opacity,
            boxShadow: particle.size > 3 
              ? `0 0 ${particle.size * 2}px hsl(var(--primary) / 0.5)` 
              : 'none',
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -15, 10, 0],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity, particle.opacity * 0.7, particle.opacity],
            scale: [1, 1.2, 1, 0.9, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      {/* Larger glowing orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-sm"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 4) * 20}%`,
            width: 8 + i * 2,
            height: 8 + i * 2,
            background: i % 2 === 0 
              ? 'radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)'
              : 'radial-gradient(circle, hsl(262 84% 58% / 0.3) 0%, transparent 70%)',
          }}
          animate={{
            y: [0, -50 - i * 5, 0],
            x: [0, 20 + i * 3, -20 - i * 3, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12 + i * 2,
            delay: i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Subtle connecting lines that pulse */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <motion.line
          x1="10%"
          y1="20%"
          x2="30%"
          y2="40%"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.line
          x1="70%"
          y1="30%"
          x2="90%"
          y2="60%"
          stroke="hsl(262 84% 58%)"
          strokeWidth="1"
          animate={{ opacity: [0.5, 0.2, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.line
          x1="40%"
          y1="70%"
          x2="60%"
          y2="90%"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
      </svg>
    </div>
  );
};
