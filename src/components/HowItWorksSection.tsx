import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Calendar } from 'lucide-react';
import { MagicCard } from '@/components/ui/magic-card';
import { BlurFade } from '@/components/ui/blur-fade';
import { Spotlight } from '@/components/ui/spotlight';
import { PulsatingButton } from '@/components/ui/pulsating-button';
import { CONFIG } from '@/config/constants';

const steps = [
  {
    number: '01',
    emoji: '💬',
    title: 'Conversamos',
    description: 'Agendás una videollamada gratuita de 30 minutos. Entendemos tu negocio, tus datos y qué querés lograr.',
    badge: 'Sin compromiso',
  },
  {
    number: '02',
    emoji: '📐',
    title: 'Diseñamos',
    description: 'Analizamos tu base de datos y procesos actuales. Te presentamos una propuesta con alcance, precio cerrado y timeline claro.',
    badge: 'Propuesta en 48-72hs',
  },
  {
    number: '03',
    emoji: '⚡',
    title: 'Implementamos',
    description: 'Configuramos agentes, conectamos bases de datos, armamos dashboards y capacitamos a tu equipo.',
    badge: '1 a 4 semanas',
  },
  {
    number: '04',
    emoji: '📈',
    title: 'Optimizamos',
    description: 'Monitoreamos resultados, ajustamos prompts, ampliamos funcionalidades y acompañamos el crecimiento de tu negocio.',
    badge: 'Acompañamiento continuo',
  },
];

export const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    if (isInView) {
      const revealSteps = async () => {
        for (let i = 0; i < steps.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 500));
          setActiveStep(i);
        }
      };
      revealSteps();
    }
  }, [isInView]);

  return (
    <section id="proceso" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <motion.div
        className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none"
        animate={{ x: [0, 50, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with Spotlight */}
        <div className="relative text-center mb-16 md:mb-20">
          <Spotlight size={700} fill="hsl(262 83% 58% / 0.08)" />
          <BlurFade>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
              Cómo <span className="text-gradient-primary">Trabajamos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              De la idea al sistema funcionando. Sin vueltas, sin sorpresas.
            </p>
          </BlurFade>
        </div>

        {/* ── Desktop: Horizontal Timeline ── */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          {/* Connecting Line with tracing beam */}
          <div className="relative h-1 bg-white/10 rounded-full mb-12 mx-16">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: `${((activeStep + 1) / steps.length) * 100}%` } : { width: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            {/* Glowing orb at the end of the tracing beam */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(162_100%_39%/0.8)]"
              initial={{ left: '0%' }}
              animate={isInView ? { left: `${((activeStep + 1) / steps.length) * 100}%` } : { left: '0%' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{ transform: 'translate(-50%, -50%)' }}
            />
            {steps.map((_, i) => (
              <motion.div
                key={i}
                className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-4 transition-all duration-500 ${
                  activeStep >= i
                    ? 'bg-primary border-primary shadow-lg shadow-primary/50'
                    : 'bg-background border-white/20'
                }`}
                style={{ left: `${(i / (steps.length - 1)) * 100}%`, transform: 'translate(-50%, -50%)' }}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              />
            ))}
          </div>

          {/* Step Cards with MagicCard */}
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const isActive = activeStep >= i;
              return (
                <BlurFade key={i} delay={0.2 + i * 0.15}>
                  <div className="relative">
                    {/* Number */}
                    <div className={`text-center mb-4 transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-20'}`}>
                      <span className="text-6xl font-black font-mono text-primary/30">{step.number}</span>
                    </div>

                    <MagicCard className={`transition-all duration-500 ${
                      isActive ? 'border-primary/30 shadow-[0_0_30px_-10px] shadow-primary/30' : 'border-white/5'
                    }`}>
                      <div className="p-6">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto text-2xl transition-all duration-500 ${
                          isActive ? 'bg-primary/15' : 'bg-white/5'
                        }`}>
                          {step.emoji}
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-center font-display">{step.title}</h3>
                        <p className="text-sm text-muted-foreground text-center leading-relaxed mb-4">{step.description}</p>

                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={isActive ? { scale: 1, opacity: 1 } : {}}
                          transition={{ delay: 0.3 }}
                          className="flex justify-center"
                        >
                          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                            <Check className="w-3 h-3" />
                            {step.badge}
                          </span>
                        </motion.div>
                      </div>
                    </MagicCard>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>

        {/* ── Mobile: Vertical Timeline ── */}
        <div className="lg:hidden max-w-md mx-auto">
          <div className="relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-white/10">
              <motion.div
                className="w-full bg-gradient-to-b from-primary to-accent"
                initial={{ height: 0 }}
                animate={isInView ? { height: `${((activeStep + 1) / steps.length) * 100}%` } : { height: 0 }}
                transition={{ duration: 2, ease: 'easeOut' }}
              />
            </div>

            <div className="space-y-8">
              {steps.map((step, i) => {
                const isActive = activeStep >= i;
                return (
                  <BlurFade key={i} delay={0.1 + i * 0.15}>
                    <div className="relative">
                      <motion.div
                        className={`absolute -left-5 top-6 w-4 h-4 rounded-full border-4 transition-all duration-500 ${
                          isActive ? 'bg-primary border-primary shadow-lg shadow-primary/50' : 'bg-background border-white/20'
                        }`}
                        initial={{ scale: 0 }}
                        animate={isActive ? { scale: 1 } : { scale: 0.5 }}
                      />
                      <MagicCard className={`transition-all duration-500 ${
                        isActive ? 'border-primary/30' : 'border-white/5'
                      }`}>
                        <div className="p-5">
                          <div className="flex items-center gap-4 mb-3">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${
                              isActive ? 'bg-primary/15' : 'bg-white/5'
                            }`}>
                              {step.emoji}
                            </div>
                            <div>
                              <span className="text-3xl font-black text-primary/30 font-mono">{step.number}</span>
                              <h3 className="text-lg font-bold font-display -mt-1">{step.title}</h3>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-3">{step.description}</p>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                            <Check className="w-3 h-3" /> {step.badge}
                          </span>
                        </div>
                      </MagicCard>
                    </div>
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── CTA with PulsatingButton ── */}
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
