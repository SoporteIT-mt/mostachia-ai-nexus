import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { TechLogosBar } from './TechLogos';
import { CONFIG } from '@/config/constants';

// ─── Animation variants ───────────────────────────────────────
const wordReveal = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.045, delayChildren: delay },
  }),
};

const wordChild = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function AnimatedWords({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <motion.span className="inline" custom={delay} variants={wordReveal} initial="hidden" animate="visible">
      {text.split(' ').map((word, i) => (
        <motion.span key={i} variants={wordChild} className="inline-block mr-[0.3em]">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] } },
});

const staggerStats = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 1.2 } },
};

const statCard = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 14 } },
};

// ─── Stats data ───────────────────────────────────────────────
const stats = [
  { value: '+10', label: 'Clientes activos' },
  { value: '6', label: 'Industrias cubiertas' },
  { value: '24/7', label: 'Agentes automatizados' },
  { value: '1-4 sem', label: 'Implementación' },
];

// ─── Component ────────────────────────────────────────────────
export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const titleY = useTransform(scrollY, [0, 500], [0, 80]);
  const subtitleY = useTransform(scrollY, [0, 500], [0, 60]);
  const ctaY = useTransform(scrollY, [0, 500], [0, 50]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

  return (
    <AuroraBackground className="min-h-screen">
      <motion.div
        ref={containerRef}
        className="container relative z-10 mx-auto px-6 py-20 min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ opacity, scale }}
      >
        <div className="max-w-4xl mx-auto text-center">
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

          {/* ── H1 ──────────────────────────────── */}
          <motion.div style={{ y: titleY }}>
            <h1 className="text-[1.75rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight mb-6 md:mb-8 leading-[1.1]">
              <span className="block text-foreground">
                <AnimatedWords text="Tu Negocio con" delay={0} />
                <motion.span
                  className="inline-block ml-[0.3em] text-primary"
                  initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  style={{ textShadow: '0 0 30px hsl(162 100% 39% / 0.5)' }}
                >
                  IA,
                </motion.span>
              </span>
              <span className="block mt-1">
                <AnimatedWords text="Otro Nivel de" delay={0.3} />
                <motion.span
                  className="inline-block ml-[0.3em] text-gradient-primary"
                  initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.5, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
                >
                  Resultados.
                </motion.span>
              </span>
            </h1>
          </motion.div>

          {/* ── Subtitle ────────────────────────── */}
          <motion.div style={{ y: subtitleY }} variants={fadeUp(0.6)} initial="hidden" animate="visible">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto font-light leading-relaxed mb-10">
              Automatizamos procesos, generamos dashboards inteligentes y conectamos agentes de IA a tus datos reales. Todo desde WhatsApp.
            </p>
          </motion.div>

          {/* ── CTAs ─────────────────────────────── */}
          <motion.div
            style={{ y: ctaY }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <motion.div variants={fadeUp(0.8)} initial="hidden" animate="visible" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}>
              <a href={CONFIG.CALCOM_URL} target="_blank" rel="noopener noreferrer">
                <ShimmerButton
                  shimmerColor="hsl(162 100% 70%)"
                  background="hsl(162 100% 32%)"
                  borderRadius="12px"
                  className="px-8 py-4 text-lg font-semibold shadow-[0_4px_20px_hsl(160_100%_39%/0.4)]"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Agendar Consultoría Gratis
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </ShimmerButton>
              </a>
            </motion.div>

            <motion.div variants={fadeUp(0.9)} initial="hidden" animate="visible" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-8 py-6 text-lg border-2 border-white/20 hover:border-primary/50 bg-white/5 backdrop-blur-sm w-full sm:w-auto"
                asChild
              >
                <a href={CONFIG.WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Escribinos por WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* ── Micro-proof ──────────────────────── */}
          <motion.div variants={fadeUp(1.0)} initial="hidden" animate="visible" className="mb-14">
            <p className="text-sm text-muted-foreground flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              <span>✅ Consultoría gratuita de 30 min</span>
              <span className="hidden sm:inline text-white/20">·</span>
              <span>⚡ Implementación en 1-4 semanas</span>
              <span className="hidden sm:inline text-white/20">·</span>
              <span>🇦🇷 Equipo 100% argentino</span>
            </p>
          </motion.div>

          {/* ── Stats ────────────────────────────── */}
          <motion.div
            variants={staggerStats}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-16 max-w-3xl mx-auto"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={statCard}
                whileHover={{ scale: 1.06, y: -4 }}
                className="rounded-xl bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] px-4 py-5 text-center cursor-default"
              >
                <div className="text-2xl md:text-3xl font-extrabold font-display text-foreground">{s.value}</div>
                <div className="text-[10px] md:text-xs font-mono uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Tech logos ────────────────────────── */}
          <motion.div variants={fadeUp(2)} initial="hidden" animate="visible">
            <TechLogosBar
              title="Integramos con las herramientas que ya usás"
              variant="marquee"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll indicator ─────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        style={{ opacity }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-7 h-11 rounded-full border-2 border-white/20 flex items-start justify-center p-2 backdrop-blur-sm bg-white/5"
        >
          <motion.div
            className="w-1.5 h-3 rounded-full bg-gradient-to-b from-primary to-primary/50"
            animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <motion.p
          className="text-xs text-muted-foreground mt-3 text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll para explorar
        </motion.p>
      </motion.div>
    </AuroraBackground>
  );
};
