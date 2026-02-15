import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Check, Calendar, MessageSquare, PenTool, Rocket, TrendingUp } from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { PulsatingButton } from '@/components/ui/pulsating-button';
import { CONFIG } from '@/config/constants';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Conversamos',
    description: 'Agendás una videollamada gratuita de 30 minutos. Entendemos tu negocio, tus datos y qué querés lograr.',
    badge: 'Sin compromiso',
    color: 'from-blue-500 to-cyan-400',
    glowColor: 'blue-500',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Diseñamos',
    description: 'Analizamos tu base de datos y procesos. Te presentamos una propuesta con alcance, precio cerrado y timeline.',
    badge: 'Propuesta en 48-72hs',
    color: 'from-violet-500 to-purple-400',
    glowColor: 'violet-500',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Implementamos',
    description: 'Configuramos agentes, conectamos bases de datos, armamos dashboards y capacitamos a tu equipo.',
    badge: '1 a 4 semanas',
    color: 'from-primary to-emerald-400',
    glowColor: 'primary',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Optimizamos',
    description: 'Monitoreamos resultados, ajustamos prompts, ampliamos funcionalidades y acompañamos tu crecimiento.',
    badge: 'Acompañamiento continuo',
    color: 'from-amber-500 to-orange-400',
    glowColor: 'amber-500',
  },
];

export const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeStep, setActiveStep] = useState(-1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    // Smooth progress counter
    let frame: number;
    let start: number;
    const duration = 3000; // 3s total

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const pct = Math.min(elapsed / duration, 1);
      
      // Eased progress
      const eased = 1 - Math.pow(1 - pct, 3);
      setProgress(eased * 100);

      // Reveal steps at thresholds
      const stepThresholds = [0.1, 0.3, 0.55, 0.8];
      for (let i = 0; i < stepThresholds.length; i++) {
        if (eased >= stepThresholds[i]) setActiveStep(prev => Math.max(prev, i));
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

        {/* ── Desktop: Vertical progressive timeline ── */}
        <div className="hidden lg:block max-w-4xl mx-auto">
          {/* Overall progress indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-between mb-12 px-4"
          >
            <span className="text-xs font-mono text-muted-foreground">INICIO</span>
            <div className="flex-1 mx-4 relative h-1 rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary"
                style={{ width: `${progress}%` }}
              />
              {/* Glow pulse at the tip */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary"
                style={{ left: `${progress}%`, transform: 'translate(-50%, -50%)' }}
                animate={{ boxShadow: ['0 0 8px hsl(162 100% 39% / 0.6)', '0 0 20px hsl(162 100% 39% / 0.9)', '0 0 8px hsl(162 100% 39% / 0.6)'] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
            <motion.span
              className="text-xs font-mono font-bold text-primary"
              key={Math.round(progress)}
            >
              {Math.round(progress)}%
            </motion.span>
          </motion.div>

          {/* Steps */}
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-[39px] top-0 bottom-0 w-[2px] bg-white/[0.06]">
              <motion.div
                className="w-full bg-gradient-to-b from-primary to-accent"
                style={{ height: `${Math.min(progress * 1.1, 100)}%` }}
              />
            </div>

            <div className="space-y-6">
              {steps.map((step, i) => {
                const isActive = activeStep >= i;
                const isCurrent = activeStep === i;
                const Icon = step.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.2, x: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex items-start gap-6"
                  >
                    {/* Node */}
                    <div className="relative z-10 flex-shrink-0">
                      <motion.div
                        className={`w-[80px] h-[80px] rounded-2xl flex flex-col items-center justify-center border-2 transition-all duration-500 ${
                          isCurrent
                            ? 'border-primary bg-primary/10 shadow-[0_0_30px_-5px] shadow-primary/40'
                            : isActive
                              ? 'border-primary/40 bg-primary/5'
                              : 'border-white/10 bg-white/[0.02]'
                        }`}
                        animate={isCurrent ? { scale: [1, 1.05, 1] } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Icon className={`w-6 h-6 mb-1 ${isActive ? 'text-primary' : 'text-muted-foreground/30'}`} />
                        <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-primary' : 'text-muted-foreground/30'}`}>
                          {step.number}
                        </span>
                      </motion.div>
                    </div>

                    {/* Content card */}
                    <motion.div
                      className={`flex-1 p-6 rounded-xl border transition-all duration-500 ${
                        isCurrent
                          ? 'bg-white/[0.06] border-primary/30 shadow-lg shadow-primary/5'
                          : isActive
                            ? 'bg-white/[0.04] border-white/[0.1]'
                            : 'bg-white/[0.02] border-white/[0.05]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className={`text-xl font-bold font-display ${isActive ? 'text-foreground' : 'text-foreground/30'}`}>
                          {step.title}
                        </h3>
                        <AnimatePresence>
                          {isActive && (
                            <motion.span
                              initial={{ opacity: 0, scale: 0.8, x: 10 }}
                              animate={{ opacity: 1, scale: 1, x: 0 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-semibold"
                            >
                              <Check className="w-3 h-3" />
                              {step.badge}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>
                      <p className={`text-sm leading-relaxed transition-colors ${isActive ? 'text-muted-foreground' : 'text-muted-foreground/20'}`}>
                        {step.description}
                      </p>

                      {/* Loading indicator for current step */}
                      {isCurrent && (
                        <motion.div
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: '100%' }}
                          className="mt-4 h-0.5 rounded-full bg-gradient-to-r from-primary/60 via-primary to-primary/60 origin-left"
                          transition={{ duration: 1, ease: 'easeOut' }}
                        />
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Mobile: Vertical Timeline ── */}
        <div className="lg:hidden max-w-md mx-auto">
          {/* Mobile progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex-1 h-1 rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs font-mono font-bold text-primary">{Math.round(progress)}%</span>
          </motion.div>

          <div className="relative pl-10">
            {/* Vertical line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-white/[0.06]">
              <motion.div
                className="w-full bg-gradient-to-b from-primary to-accent"
                style={{ height: `${Math.min(progress * 1.1, 100)}%` }}
              />
            </div>

            <div className="space-y-6">
              {steps.map((step, i) => {
                const isActive = activeStep >= i;
                const isCurrent = activeStep === i;
                const Icon = step.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.2, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    {/* Node dot */}
                    <motion.div
                      className={`absolute -left-[30px] top-5 w-7 h-7 rounded-full flex items-center justify-center border-2 transition-all ${
                        isCurrent
                          ? 'border-primary bg-primary/20 shadow-[0_0_12px] shadow-primary/40'
                          : isActive
                            ? 'border-primary/50 bg-primary/10'
                            : 'border-white/10 bg-background'
                      }`}
                    >
                      {isActive ? (
                        <Icon className="w-3 h-3 text-primary" />
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      )}
                    </motion.div>

                    {/* Card */}
                    <div className={`p-4 rounded-xl border transition-all duration-300 ${
                      isCurrent ? 'bg-white/[0.06] border-primary/30' : 'bg-white/[0.03] border-white/[0.06]'
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-2xl font-black font-mono ${isActive ? 'text-primary/40' : 'text-white/10'}`}>{step.number}</span>
                        <h3 className={`text-base font-bold font-display ${isActive ? 'text-foreground' : 'text-foreground/30'}`}>{step.title}</h3>
                      </div>
                      <p className={`text-xs leading-relaxed mb-3 ${isActive ? 'text-muted-foreground' : 'text-muted-foreground/20'}`}>
                        {step.description}
                      </p>
                      {isActive && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-semibold"
                        >
                          <Check className="w-3 h-3" /> {step.badge}
                        </motion.span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <BlurFade delay={0.8} className="mt-16 max-w-lg mx-auto text-center">
          <div className="p-8 rounded-2xl glass-card border border-white/[0.1]">
            <p className="text-xl font-display font-bold mb-5">¿Listo para arrancar?</p>
            <a href={CONFIG.CALCOM_URL} target="_blank" rel="noopener noreferrer">
              <PulsatingButton className="text-lg px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Consultoría Gratuita
              </PulsatingButton>
            </a>
            <p className="text-xs text-muted-foreground mt-4">
              30 minutos · Sin compromiso · 100% gratuito
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};
