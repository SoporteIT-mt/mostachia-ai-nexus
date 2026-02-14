import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const diferenciadores = [
  {
    emoji: '🔒',
    title: 'Tus Datos, Tu Control',
    description: 'Trabajamos directamente con tu base de datos. No almacenamos información sensible. Toda la IA se ejecuta sobre tus propios sistemas.',
  },
  {
    emoji: '⚡',
    title: 'Implementación Express',
    description: 'En 1 a 4 semanas tenés tu solución funcionando. Sin meses de desarrollo ni costos ocultos.',
  },
  {
    emoji: '🇦🇷',
    title: 'Equipo Local, Soporte Real',
    description: 'Somos un equipo argentino de Córdoba. Hablás directamente con quienes construyen tu solución, no con bots de soporte.',
  },
  {
    emoji: '🔧',
    title: 'Tecnología Modular',
    description: 'Misma arquitectura probada, adaptada a tu rubro. Lo que funciona para un cine funciona para un restaurante, una farmacia o un e-commerce.',
  },
];

const garantias = [
  '✅ Consultoría inicial gratuita',
  '✅ Capacitación incluida',
  '✅ Soporte post-implementación',
  '✅ Compatible con tu base de datos actual',
  '✅ Funciona por WhatsApp',
  '✅ Español nativo 🧉',
];

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 80, damping: 15, delay: 0.2 + i * 0.12 },
  }),
};

export const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="confianza" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 60, damping: 15 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            ¿Por Qué <span className="text-gradient-primary">Elegirnos</span>?
          </h2>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14">
          {diferenciadores.map((d, i) => (
            <motion.div
              key={d.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300 } }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/[0.1] hover:border-primary/30 transition-all duration-500 text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {d.emoji}
                </div>
                <h3 className="text-lg font-semibold font-display mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Garantías chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto"
        >
          {garantias.map((g, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + i * 0.06 }}
              className="px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] text-sm text-foreground/80"
            >
              {g}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
