import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Clock, Users, Award, CheckCircle2, HeartHandshake, Sparkles } from 'lucide-react';

const trustPoints = [
  {
    icon: Shield,
    title: 'Seguridad Empresarial',
    description: 'Tus datos están protegidos con encriptación de nivel bancario. Cumplimos con las normativas más exigentes.',
  },
  {
    icon: Clock,
    title: 'Implementación Rápida',
    description: 'En menos de una semana tendrás tu solución funcionando. Sin meses de desarrollo ni costos ocultos.',
  },
  {
    icon: Users,
    title: 'Soporte Humano 24/7',
    description: 'No hablás con bots. Nuestro equipo de especialistas está siempre disponible para ayudarte.',
  },
  {
    icon: Award,
    title: 'Resultados Garantizados',
    description: 'Si no ves resultados en los primeros 30 días, te devolvemos el 100% de tu inversión.',
  },
];

const guarantees = [
  'Sin contratos de permanencia',
  'Migración gratuita desde otras plataformas',
  'Capacitación incluida para tu equipo',
  'Actualizaciones automáticas sin costo extra',
  'Backup diario de todos tus datos',
  'Soporte en español nativo',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const guaranteeVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      delay: 0.5 + i * 0.06,
    },
  }),
};

export const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background with enhanced gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px]"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[80px]"
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            type: "spring",
            stiffness: 60,
            damping: 15,
          }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.15, type: "spring", stiffness: 150 }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <HeartHandshake className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-primary">Compromiso Total</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
            ¿Por Qué <span className="text-gradient-primary">Confiar en Nosotros</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No somos una empresa más de tecnología. Somos tu socio estratégico en la transformación digital.
          </p>
        </motion.div>

        {/* Trust Points Grid with Stagger */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {trustPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 15 }
                }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl glass-card border border-border/50 hover:border-primary/40 transition-all duration-500 text-center">
                  <motion.div 
                    className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 shadow-lg shadow-primary/10"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: 5,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <Icon className="w-8 h-8 transition-colors" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2 font-display">{point.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Guarantees with Stagger */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            type: "spring",
            stiffness: 60,
            damping: 15,
            delay: 0.4,
          }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 md:p-10 rounded-3xl glass-card border border-primary/20">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3 className="text-2xl font-bold text-center font-display">
                Nuestras <span className="text-gradient-primary">Garantías</span>
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {guarantees.map((guarantee, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={guaranteeVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ x: 4, transition: { type: "spring", stiffness: 300 } }}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.6 + i * 0.08, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  </motion.div>
                  <span className="text-sm text-foreground/80">{guarantee}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
