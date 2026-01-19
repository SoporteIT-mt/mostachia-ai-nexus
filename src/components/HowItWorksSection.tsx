import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, Wrench, Rocket, TrendingUp } from 'lucide-react';

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

  return (
    <section ref={ref} className="py-32 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
                  className="relative group"
                >
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                  )}
                  
                  <div className="relative text-center">
                    {/* Number */}
                    <div className="absolute -top-4 -left-2 text-6xl font-bold text-primary/10 font-display">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="relative z-10 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>
                    
                    {/* Highlight */}
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {step.highlight}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
