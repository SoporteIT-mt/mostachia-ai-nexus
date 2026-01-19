import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
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
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background effects */}
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

        {/* Horizontal Timeline for Desktop */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          {/* Connecting Line */}
          <div className="relative h-1 bg-white/10 rounded-full mb-12 mx-16">
            <motion.div 
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: `${((activeStep + 1) / steps.length) * 100}%` } : { width: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            {/* Step dots on line */}
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

          {/* Step Cards */}
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = activeStep >= i;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 10 }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                  className="relative"
                >
                  {/* Big Number */}
                  <div className={`text-center mb-4 transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-20'}`}>
                    <span className="text-7xl font-black font-display bg-gradient-to-b from-primary/40 to-transparent bg-clip-text text-transparent">
                      {step.number}
                    </span>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={isActive ? { scale: 1.03, y: -4 } : {}}
                    className={`relative p-6 rounded-2xl glass-card border transition-all duration-500 ${
                      isActive 
                        ? 'border-primary/30 shadow-[0_0_30px_-10px] shadow-primary/30' 
                        : 'border-white/5'
                    }`}
                  >
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto transition-all duration-500 ${
                      isActive 
                        ? 'bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/30' 
                        : 'bg-white/5'
                    }`}>
                      <Icon className={`w-7 h-7 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-center font-display">{step.title}</h3>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed mb-4">
                      {step.description}
                    </p>
                    
                    {/* Highlight badge */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={isActive ? { scale: 1, opacity: 1 } : {}}
                      transition={{ delay: 0.3 }}
                      className="flex justify-center"
                    >
                      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                        <Check className="w-3 h-3" />
                        {step.highlight}
                      </span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden max-w-md mx-auto">
          <div className="relative pl-8">
            {/* Vertical Line */}
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
                const Icon = step.icon;
                const isActive = activeStep >= i;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.4 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    {/* Dot */}
                    <motion.div
                      className={`absolute -left-5 top-6 w-4 h-4 rounded-full border-4 transition-all duration-500 ${
                        isActive 
                          ? 'bg-primary border-primary shadow-lg shadow-primary/50' 
                          : 'bg-background border-white/20'
                      }`}
                      initial={{ scale: 0 }}
                      animate={isActive ? { scale: 1 } : { scale: 0.5 }}
                    />

                    {/* Card */}
                    <div className={`p-5 rounded-xl glass-card border transition-all duration-500 ${
                      isActive ? 'border-primary/30' : 'border-white/5'
                    }`}>
                      <div className="flex items-center gap-4 mb-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                          isActive ? 'bg-gradient-to-br from-primary to-primary/80' : 'bg-white/5'
                        }`}>
                          <Icon className={`w-6 h-6 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                        </div>
                        <div>
                          <span className="text-3xl font-black text-primary/30 font-display">{step.number}</span>
                          <h3 className="text-lg font-bold font-display -mt-1">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{step.description}</p>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                        <Check className="w-3 h-3" /> {step.highlight}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
