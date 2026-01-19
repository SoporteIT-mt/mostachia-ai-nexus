import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Clock, Users, Award, CheckCircle2, HeartHandshake } from 'lucide-react';

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

export const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <HeartHandshake className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Compromiso Total</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            ¿Por Qué <span className="text-gradient-primary">Confiar en Nosotros</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No somos una empresa más de tecnología. Somos tu socio estratégico en la transformación digital.
          </p>
        </motion.div>

        {/* Trust Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl glass-card border border-white/10 hover:border-primary/30 transition-all duration-300 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 rounded-3xl glass-card border border-primary/20">
            <h3 className="text-2xl font-bold text-center mb-8">
              Nuestras <span className="text-primary">Garantías</span>
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {guarantees.map((guarantee, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
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
