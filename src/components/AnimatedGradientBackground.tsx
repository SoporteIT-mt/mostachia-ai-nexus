import { motion } from 'framer-motion';

export const AnimatedGradientBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
      
      {/* Primary animated gradient blob */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[120%] h-[120%]"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 30% 20%, hsl(160 100% 39% / 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 70% 80%, hsl(262 84% 58% / 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 40% 30% at 80% 30%, hsl(160 80% 45% / 0.06) 0%, transparent 50%)
          `,
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Secondary flowing gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            conic-gradient(from 180deg at 50% 50%, 
              hsl(160 100% 39% / 0.05) 0deg, 
              transparent 60deg, 
              hsl(262 84% 58% / 0.04) 120deg, 
              transparent 180deg,
              hsl(160 80% 50% / 0.03) 240deg,
              transparent 300deg,
              hsl(262 70% 50% / 0.04) 360deg
            )
          `,
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating orb 1 - Primary */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(160 100% 39% / 0.15) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 80, 40, 0],
          y: [0, 40, -40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Floating orb 2 - Accent */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(262 84% 58% / 0.12) 0%, transparent 60%)',
          filter: 'blur(70px)',
        }}
        animate={{
          x: [0, -60, -30, 0],
          y: [0, -50, 50, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Center pulsing glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, hsl(160 100% 39% / 0.08) 0%, transparent 50%)',
          filter: 'blur(50px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Mesh gradient lines */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, hsl(160 100% 39%) 1px, transparent 1px),
            linear-gradient(hsl(160 100% 39%) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
        animate={{
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};
