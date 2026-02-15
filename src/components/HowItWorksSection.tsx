import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Check, Calendar, MessageSquare, PenTool, Rocket, TrendingUp } from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { DotPattern } from '@/components/ui/dot-pattern';
import { CONFIG } from '@/config/constants';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Conversamos',
    description: 'Agendás una videollamada gratuita de 30 minutos. Entendemos tu negocio, tus datos y qué querés lograr.',
    badge: 'Sin compromiso',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Diseñamos',
    description: 'Analizamos tu base de datos y procesos. Te presentamos una propuesta con alcance, precio cerrado y timeline.',
    badge: 'Propuesta en 48-72hs',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Implementamos',
    description: 'Configuramos agentes, conectamos bases de datos, armamos dashboards y capacitamos a tu equipo.',
    badge: '1 a 4 semanas',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Optimizamos',
    description: 'Monitoreamos resultados, ajustamos prompts, ampliamos funcionalidades y acompañamos tu crecimiento.',
    badge: 'Acompañamiento continuo',
  },
];

export const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeStep, setActiveStep] = useState(-1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame: number;
    let start: number;
    const duration = 3200;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const pct = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - pct, 3);
      setProgress(eased * 100);

      const thresholds = [0.08, 0.3, 0.55, 0.8];
      for (let i = 0; i < thresholds.length; i++) {
        if (eased >= thresholds[i]) setActiveStep(prev => Math.max(prev, i));
      }
      if (pct < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isInView]);

  return (
    <section id="proceso" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <BlurFade className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
            Cómo <span className="text-gradient-primary">Trabajamos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            De la idea al sistema funcionando. Sin vueltas, sin sorpresas.
          </p>
        </BlurFade>

        {/* ── Desktop ── */}
        <div className="hidden lg:block max-w-5xl mx-auto">
          {/* Top progress */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="flex items-center gap-4 mb-14"
          >
            <div className="flex items-center gap-2">
              {steps.map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    activeStep >= i ? 'bg-primary shadow-[0_0_6px_hsl(162_100%_39%/0.6)]' : 'bg-white/10'
                  }`}
                />
              ))}
            </div>
            <div className="flex-1 relative h-px bg-white/[0.06]">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary/80 to-primary"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-[11px] font-mono text-primary/80 tabular-nums w-10 text-right">
              {Math.round(progress)}%
            </span>
          </motion.div>

          {/* Steps grid - alternating layout */}
          <div className="relative">
            {/* Center vertical line */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-[2px] bg-white/[0.04]">
              <motion.div
                className="w-full bg-gradient-to-b from-primary via-primary/80 to-accent/60"
                style={{ height: `${Math.min(progress * 1.05, 100)}%` }}
              />
            </div>

            <div className="space-y-4">
              {steps.map((step, i) => {
                const isActive = activeStep >= i;
                const isCurrent = activeStep === i;
                const Icon = step.icon;
                const isLeft = i % 2 === 0;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={isActive ? { opacity: 1 } : { opacity: 0.15 }}
                    transition={{ duration: 0.5 }}
                    className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-0"
                  >
                    {/* Left content or spacer */}
                    <div className={isLeft ? 'pr-10' : ''}>
                      {isLeft && (
                        <StepCard step={step} isActive={isActive} isCurrent={isCurrent} align="right" />
                      )}
                    </div>

                    {/* Center node */}
                    <div className="relative z-10 flex items-center justify-center">
                      <motion.div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-500 ${
                          isCurrent
                            ? 'border-primary/60 bg-primary/15 shadow-[0_0_24px_-4px_hsl(162_100%_39%/0.5)]'
                            : isActive
                              ? 'border-primary/30 bg-primary/8'
                              : 'border-white/[0.08] bg-white/[0.02]'
                        }`}
                        animate={isCurrent ? { scale: [1, 1.08, 1] } : {}}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <Icon className={`w-[18px] h-[18px] transition-colors duration-500 ${
                          isActive ? 'text-primary' : 'text-white/20'
                        }`} />
                      </motion.div>
                    </div>

                    {/* Right content or spacer */}
                    <div className={!isLeft ? 'pl-10' : ''}>
                      {!isLeft && (
                        <StepCard step={step} isActive={isActive} isCurrent={isCurrent} align="left" />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Mobile ── */}
        <div className="lg:hidden max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex-1 h-px bg-white/[0.06] overflow-hidden relative">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-[10px] font-mono font-bold text-primary tabular-nums">{Math.round(progress)}%</span>
          </motion.div>

          <div className="relative pl-10">
            <div className="absolute left-[14px] top-0 bottom-0 w-[2px] bg-white/[0.04]">
              <motion.div
                className="w-full bg-gradient-to-b from-primary to-accent/60"
                style={{ height: `${Math.min(progress * 1.05, 100)}%` }}
              />
            </div>

            <div className="space-y-5">
              {steps.map((step, i) => {
                const isActive = activeStep >= i;
                const isCurrent = activeStep === i;
                const Icon = step.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.15, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative"
                  >
                    <motion.div
                      className={`absolute -left-[26px] top-4 w-7 h-7 rounded-lg flex items-center justify-center border transition-all duration-500 ${
                        isCurrent
                          ? 'border-primary/60 bg-primary/15 shadow-[0_0_16px_-3px_hsl(162_100%_39%/0.5)]'
                          : isActive
                            ? 'border-primary/30 bg-primary/8'
                            : 'border-white/[0.08] bg-white/[0.02]'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-primary' : 'text-white/20'}`} />
                    </motion.div>

                    <div className={`p-4 rounded-xl border backdrop-blur-sm transition-all duration-500 ${
                      isCurrent
                        ? 'bg-white/[0.05] border-primary/20 shadow-[0_0_40px_-12px_hsl(162_100%_39%/0.15)]'
                        : isActive
                          ? 'bg-white/[0.03] border-white/[0.08]'
                          : 'bg-white/[0.01] border-white/[0.04]'
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-lg font-black font-mono transition-colors ${isActive ? 'text-primary/30' : 'text-white/[0.06]'}`}>{step.number}</span>
                        <h3 className={`text-base font-bold font-display transition-colors ${isActive ? 'text-foreground' : 'text-foreground/20'}`}>{step.title}</h3>
                      </div>
                      <p className={`text-xs leading-relaxed mb-3 transition-colors ${isActive ? 'text-muted-foreground' : 'text-muted-foreground/15'}`}>
                        {step.description}
                      </p>
                      <AnimatePresence>
                        {isActive && (
                          <motion.span
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-medium"
                          >
                            <Check className="w-2.5 h-2.5" /> {step.badge}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <BlurFade delay={0.8} className="mt-16 max-w-lg mx-auto text-center">
          <div className="relative p-10 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-primary/20 overflow-hidden"
            style={{ boxShadow: '0 0 60px -20px hsla(162, 100%, 39%, 0.15)' }}
          >
            <DotPattern className="opacity-[0.04]" width={24} height={24} cr={0.8} />
            <p className="text-2xl font-display font-bold mb-2 relative z-10">
              🚀 ¿Listo para arrancar?
            </p>
            <p className="text-sm text-muted-foreground mb-6 relative z-10">
              Transformá tu negocio con IA en menos de lo que pensás.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, type: 'spring', stiffness: 200, damping: 15 }}
              className="relative z-10"
            >
              <a href={CONFIG.CALCOM_URL} target="_blank" rel="noopener noreferrer">
                <ShimmerButton
                  shimmerColor="hsl(162 100% 70%)"
                  shimmerDuration="2.5s"
                  borderRadius="9999px"
                  background="linear-gradient(135deg, hsl(162 100% 39%), hsl(172 80% 35%))"
                  className="text-lg font-bold px-10 py-5 group"
                  style={{ boxShadow: '0 0 40px rgba(115,215,203,0.4), 0 4px 20px rgba(0,0,0,0.3)' } as React.CSSProperties}
                >
                  <motion.span
                    className="inline-block mr-2"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <Calendar className="w-5 h-5" />
                  </motion.span>
                  Agendar Consultoría Gratuita
                </ShimmerButton>
              </a>
            </motion.div>
            <div className="flex items-center justify-center gap-3 mt-5 relative z-10">
              <span className="text-xs text-muted-foreground">30 minutos</span>
              <span className="text-primary text-xs">|</span>
              <span className="text-xs text-muted-foreground">Sin compromiso</span>
              <span className="text-primary text-xs">|</span>
              <span className="text-xs text-muted-foreground">100% gratuito</span>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

// ── Step Card sub-component ──
const StepCard = ({
  step,
  isActive,
  isCurrent,
  align,
}: {
  step: typeof steps[0];
  isActive: boolean;
  isCurrent: boolean;
  align: 'left' | 'right';
}) => (
  <motion.div
    initial={{ opacity: 0, x: align === 'right' ? 15 : -15 }}
    animate={isActive ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className={`p-5 rounded-xl border backdrop-blur-sm transition-all duration-500 ${
      isCurrent
        ? 'bg-white/[0.05] border-primary/20 shadow-[0_0_40px_-12px_hsl(162_100%_39%/0.15)]'
        : isActive
          ? 'bg-white/[0.03] border-white/[0.08]'
          : 'bg-white/[0.01] border-white/[0.04]'
    }`}
  >
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-3">
        <span className={`text-2xl font-black font-mono transition-colors ${isActive ? 'text-primary/25' : 'text-white/[0.04]'}`}>
          {step.number}
        </span>
        <h3 className={`text-lg font-bold font-display transition-colors ${isActive ? 'text-foreground' : 'text-foreground/20'}`}>
          {step.title}
        </h3>
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-medium whitespace-nowrap"
          >
            <Check className="w-2.5 h-2.5" /> {step.badge}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
    <p className={`text-sm leading-relaxed transition-colors ${isActive ? 'text-muted-foreground' : 'text-muted-foreground/15'}`}>
      {step.description}
    </p>
    {isCurrent && (
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        className="mt-3 h-[2px] rounded-full bg-gradient-to-r from-primary/60 to-primary/0 origin-left"
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
    )}
  </motion.div>
);
