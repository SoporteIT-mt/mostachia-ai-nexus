import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { BeamsBackground } from '@/components/ui/beams-background';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { CONFIG } from '@/config/constants';

// ─── Animation variants ───────────────────────────────────────
const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] } },
});

const letterReveal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03, delayChildren: 0.2 } },
};

const letterChild = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Component ────────────────────────────────────────────────
export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const titleY = useTransform(scrollY, [0, 500], [0, 80]);
  const subtitleY = useTransform(scrollY, [0, 500], [0, 60]);
  const ctaY = useTransform(scrollY, [0, 500], [0, 50]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

  const brandName = "MostachIA";

  return (
    <BeamsBackground intensity="strong">
      <motion.div
        ref={containerRef}
        className="container relative z-10 mx-auto px-4 sm:px-6 pt-28 pb-16 min-h-[85vh] flex flex-col justify-center max-w-full overflow-hidden"
        style={{ opacity, scale }}
      >
        <div className="w-full max-w-5xl mx-auto text-center">
          {/* ── Badge ────────────────────────────── */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm mb-8 md:mb-10"
          >
            <span className="text-base" role="img" aria-label="robot">🤖</span>
            <span className="text-xs font-mono tracking-wide text-muted-foreground">
              Empresa argentina de automatización con IA
            </span>
          </motion.div>

          {/* ── H1 — Brand Name ──────────────────── */}
          <motion.div style={{ y: titleY }}>
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold font-display tracking-tighter mb-4 md:mb-6 leading-[0.95]"
              variants={letterReveal}
              initial="hidden"
              animate="visible"
            >
              {brandName.split('').map((char, i) => (
                <motion.span
                  key={i}
                  variants={letterChild}
                  className="inline-block"
                  style={{
                    background: 'linear-gradient(135deg, #60b99a 0%, #7fcdb3 40%, #60b99a 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: 'none',
                    filter: 'drop-shadow(0 0 40px rgba(96, 185, 154, 0.4))',
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

          {/* ── H2 — Tagline ─────────────────────── */}
          <motion.div style={{ y: subtitleY }}>
            <motion.h2
              variants={fadeUp(0.5)}
              initial="hidden"
              animate="visible"
              className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight mb-8 md:mb-10"
              style={{ color: '#dadada' }}
            >
              Procesos inteligentes, resultados superiores.
            </motion.h2>
          </motion.div>

          {/* ── Copy Persuasivo ──────────────────── */}
          <motion.div variants={fadeUp(0.7)} initial="hidden" animate="visible">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto font-light leading-relaxed mb-10">
              No vendemos software, construimos el equipo digital que tu empresa necesita.{' '}
              <span className="text-gradient-primary font-medium">
                Agentes de IA diseñados a medida
              </span>{' '}
              para escalar tus ventas, automatizar tus redes y optimizar tu tiempo.
              Sin complicaciones técnicas, resultados desde el día uno.
            </p>
          </motion.div>

          {/* ── CTA ──────────────────────────────── */}
          <motion.div
            style={{ y: ctaY }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <motion.div variants={fadeUp(0.9)} initial="hidden" animate="visible" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}>
              <a href={CONFIG.CALCOM_URL} target="_blank" rel="noopener noreferrer">
                <ShimmerButton
                  shimmerColor="rgba(127, 205, 179, 0.8)"
                  background="linear-gradient(135deg, #60b99a, #4a9e82)"
                  borderRadius="12px"
                  className="px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold shadow-[0_4px_20px_rgba(96,185,154,0.4)]"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Agendar Diagnóstico Gratuito
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </ShimmerButton>
              </a>
            </motion.div>
          </motion.div>

          {/* ── Micro-proof ──────────────────────── */}
          <motion.div variants={fadeUp(1.0)} initial="hidden" animate="visible">
            <p className="text-sm text-muted-foreground flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              <span>✅ Diagnóstico gratuito de 30 min</span>
              <span className="hidden sm:inline text-white/20">·</span>
              <span>⚡ Implementación en 1-4 semanas</span>
              <span className="hidden sm:inline text-white/20">·</span>
              <span>🇦🇷 Equipo 100% argentino</span>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </BeamsBackground>
  );
};
