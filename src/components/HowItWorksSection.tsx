import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { MessageSquare, Wrench, Rocket, TrendingUp, Check } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Conversamos',
    description: 'Agendás una llamada gratuita de 30 minutos. Entendemos tu negocio, tus desafíos y tus objetivos.',
    highlight: 'Sin compromiso',
  },
  {
    number: '02',
    icon: Wrench,
    title: 'Diseñamos',
    description: 'Creamos una propuesta personalizada con las soluciones exactas que necesitás. Precio cerrado, sin sorpresas.',
    highlight: 'Propuesta en 48hs',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Implementamos',
    description: 'Ponemos en marcha tu solución. Migramos datos, configuramos sistemas y capacitamos a tu equipo.',
    highlight: 'En 1 semana',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Escalamos',
    description: 'Monitoreamos resultados y optimizamos continuamente. Tu negocio crece, nosotros crecemos con vos.',
    highlight: 'Acompañamiento continuo',
  },
];

export const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeStep, setActiveStep] = useState(-1);
  const controls = useAnimation();

  // Progressive step reveal
  useEffect(() => {
    if (isInView) {
      const revealSteps = async () => {
        for (let i = 0; i < steps.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 600));
          setActiveStep(i);
        }
      };
      revealSteps();
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Rocket className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Proceso Simple</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            ¿Cómo <span className="text-gradient-primary">Funciona</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            De la idea a los resultados en 4 pasos simples. Sin complicaciones, sin jerga técnica.
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="max-w-5xl mx-auto relative">
          {/* Central connecting line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
            <motion.div 
              className="w-full bg-gradient-to-b from-primary via-primary to-primary/30 rounded-full"
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : { height: 0 }}
              transition={{ duration: 2.5, ease: 'easeOut' }}
            />
          </div>

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = activeStep >= i;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  animate={isActive ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    type: 'spring',
                    stiffness: 100,
                    damping: 15
                  }}
                  className={`relative lg:flex lg:items-center lg:gap-8 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content Card */}
                  <div className={`lg:w-[calc(50%-40px)] ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={`relative p-6 rounded-2xl glass-card border transition-all duration-500 ${
                        isActive 
                          ? 'border-primary/30 shadow-[0_0_30px_-10px] shadow-primary/20' 
                          : 'border-white/10'
                      }`}
                    >
                      {/* Step number watermark */}
                      <div className={`absolute -top-4 ${isLeft ? '-right-2 lg:-left-2' : '-left-2'} text-7xl font-bold text-primary/10 font-display`}>
                        {step.number}
                      </div>
                      
                      <div className={`relative z-10 ${isLeft ? 'lg:pr-4' : 'lg:pl-4'}`}>
                        <h3 className="text-2xl font-bold mb-3 font-display">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {step.description}
                        </p>
                        
                        {/* Highlight badge */}
                        <motion.span 
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={isActive ? { scale: 1, opacity: 1 } : {}}
                          transition={{ delay: 0.3, type: 'spring' }}
                          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold"
                        >
                          <Check className="w-4 h-4" />
                          {step.highlight}
                        </motion.span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Icon Node */}
                  <motion.div 
                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-20"
                    initial={{ scale: 0 }}
                    animate={isActive ? { scale: 1 } : { scale: 0 }}
                    transition={{ 
                      delay: 0.2,
                      type: 'spring',
                      stiffness: 200,
                      damping: 15
                    }}
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      isActive 
                        ? 'bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/40' 
                        : 'bg-background border border-white/20'
                    }`}>
                      <Icon className={`w-7 h-7 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                    </div>
                  </motion.div>

                  {/* Mobile Icon */}
                  <motion.div 
                    className="lg:hidden flex items-center gap-4 mb-4"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isActive ? { scale: 1, opacity: 1 } : {}}
                  >
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      isActive 
                        ? 'bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/30' 
                        : 'bg-white/5 border border-white/10'
                    }`}>
                      <Icon className={`w-6 h-6 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                    </div>
                    <div className="text-5xl font-bold text-primary/20 font-display">{step.number}</div>
                  </motion.div>

                  {/* Spacer for layout */}
                  <div className="hidden lg:block lg:w-[calc(50%-40px)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
