import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Calendar, ArrowRight, Play, Sparkles } from 'lucide-react';
import { DotPattern } from '@/components/ui/dot-pattern';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { BorderBeam } from '@/components/ui/border-beam';
import { CONFIG } from '@/config/constants';

const AVATARS = [
  'https://i.pravatar.cc/80?img=1',
  'https://i.pravatar.cc/80?img=2',
  'https://i.pravatar.cc/80?img=3',
  'https://i.pravatar.cc/80?img=4',
  'https://i.pravatar.cc/80?img=5',
];

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 3D Mouse Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { damping: 30, stiffness: 100 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { damping: 30, stiffness: 100 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#1f3d4b' }}
    >
      {/* Background texture & zenith light */}
      <DotPattern width={24} height={24} cr={0.8} className="opacity-[0.07] text-white" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(96,185,154,0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-32 pb-24 lg:pt-40 lg:pb-32 flex flex-col items-center text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-mint-400/30 bg-mint-400/10 px-4 py-1.5 mb-8"
        >
          <Sparkles className="w-4 h-4 text-mint-400" />
          <span className="text-sm font-medium text-mint-400">
            Automatización Inteligente Definitiva
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight leading-[1.15] mb-6"
        >
          <span className="block text-white">
            Tu equipo digital con{' '}
            <span className="text-mint-400">IA</span>,
          </span>
          <span
            className="block"
            style={{
              background: 'linear-gradient(135deg, #60b99a 0%, #f6c667 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            listo para escalar.
          </span>
        </motion.h1>

        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl font-light leading-relaxed text-steel-300 mb-10"
        >
          No vendemos software, construimos agentes de inteligencia artificial
          a medida que venden, atienden y gestionan por ti 24/7.
        </motion.h2>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
            <a href={CONFIG.CALCOM_URL} target="_blank" rel="noopener noreferrer">
              <ShimmerButton
                shimmerColor="rgba(127, 205, 179, 0.8)"
                background="linear-gradient(135deg, #60b99a, #4a9e82)"
                borderRadius="12px"
                className="px-7 py-4 text-base sm:text-lg font-semibold shadow-[0_4px_24px_rgba(96,185,154,0.4)]"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Agendar Diagnóstico Gratuito
                <ArrowRight className="ml-2 w-4 h-4" />
              </ShimmerButton>
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
            <a href="#agentes">
              <button className="flex items-center gap-2 px-7 py-4 rounded-xl border border-white/15 bg-white/[0.04] text-white font-medium text-base sm:text-lg backdrop-blur-sm transition-all hover:bg-white/[0.08] hover:border-white/25">
                <Play className="w-4 h-4" />
                Conocer los Agentes
              </button>
            </a>
          </motion.div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          <div className="flex -space-x-3">
            {AVATARS.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="w-9 h-9 rounded-full border-2 border-navy-900 object-cover"
                loading="lazy"
              />
            ))}
          </div>
          <p className="text-sm text-steel-400">
            Respaldado por resultados reales en{' '}
            <span className="text-mint-400 font-semibold">+50 empresas</span>
          </p>
        </motion.div>

        {/* 3D Interactive Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative w-full max-w-5xl mx-auto"
          style={{ perspective: '1200px' }}
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden border border-white/[0.08] bg-white/[0.02] backdrop-blur-md shadow-2xl"
          >
            <BorderBeam
              size={250}
              duration={10}
              colorFrom="hsl(155 40% 55%)"
              colorTo="hsl(42 90% 70%)"
            />

            {/* MacOS-style top bar */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-white/[0.04] border-b border-white/[0.06] flex items-center px-4 gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
            </div>

            {/* Mockup content */}
            <div className="absolute inset-0 pt-8 flex flex-col items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-mint-400/10 border border-mint-400/20 flex items-center justify-center">
                <img src="/isotipo-mint.png" alt="MostachIA" className="w-7 h-7 object-contain" />
              </div>
              <span className="text-lg font-display font-semibold text-white/60">
                Plataforma MostachIA
              </span>
            </div>
          </motion.div>

          {/* Glow under mockup */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-mint-400/15 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};
