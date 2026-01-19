import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Clock, DollarSign, Target, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const casosExito = [
  {
    id: 1,
    empresa: 'TechCorp Industries',
    logo: 'TC',
    industria: 'Manufactura',
    descripcion: 'Automatización completa del proceso de control de calidad con IA predictiva.',
    metricas: [
      { label: 'Reducción de errores', valor: '94%', icon: Target },
      { label: 'Ahorro anual', valor: '$2.4M', icon: DollarSign },
      { label: 'ROI', valor: '380%', icon: TrendingUp },
      { label: 'Tiempo implementación', valor: '6 sem', icon: Clock },
    ],
    testimonial: '"Transformaron nuestra operación por completo. Los resultados superaron todas las expectativas."',
    persona: 'Carlos M., CTO',
  },
  {
    id: 2,
    empresa: 'DataFlow Analytics',
    logo: 'DF',
    industria: 'Fintech',
    descripcion: 'Migración de base de datos legacy + sistema de reportes automatizado con IA.',
    metricas: [
      { label: 'Datos migrados', valor: '47M+', icon: Target },
      { label: 'Ahorro mensual', valor: '$180K', icon: DollarSign },
      { label: 'ROI', valor: '520%', icon: TrendingUp },
      { label: 'Tiempo implementación', valor: '4 sem', icon: Clock },
    ],
    testimonial: '"La migración fue impecable. Cero downtime y mejor performance que antes."',
    persona: 'Ana R., VP of Engineering',
  },
  {
    id: 3,
    empresa: 'CloudScale Solutions',
    logo: 'CS',
    industria: 'SaaS',
    descripcion: 'Sistema de atención al cliente 24/7 con IA conversacional avanzada.',
    metricas: [
      { label: 'Tickets resueltos', valor: '89%', icon: Target },
      { label: 'Ahorro mensual', valor: '$95K', icon: DollarSign },
      { label: 'ROI', valor: '290%', icon: TrendingUp },
      { label: 'Tiempo implementación', valor: '3 sem', icon: Clock },
    ],
    testimonial: '"Nuestro equipo de soporte ahora se enfoca en lo que realmente importa."',
    persona: 'Miguel S., Head of Support',
  },
];

const logoEmpresas = [
  { nombre: 'TechCorp', iniciales: 'TC' },
  { nombre: 'DataFlow', iniciales: 'DF' },
  { nombre: 'CloudScale', iniciales: 'CS' },
  { nombre: 'AIStack', iniciales: 'AI' },
  { nombre: 'Nexus', iniciales: 'NX' },
  { nombre: 'Quantum', iniciales: 'QT' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 }
  }
};

export const CasosExitoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="casos" ref={ref} className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6"
          >
            <TrendingUp className="w-4 h-4" />
            Resultados Comprobados
          </motion.span>
          <h2 className="section-title mb-6">
            Casos de Éxito{' '}
            <span className="text-gradient-primary">Reales</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Empresas que ya transformaron sus operaciones con nuestra tecnología.
            Resultados medibles, impacto inmediato.
          </p>
        </motion.div>

        {/* Logos de empresas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center justify-center gap-6 md:gap-10 flex-wrap mb-16"
        >
          {logoEmpresas.map((empresa, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + i * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="font-bold text-sm text-primary">{empresa.iniciales}</span>
              </div>
              <span className="font-display font-semibold text-foreground/80 hidden sm:block">
                {empresa.nombre}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Casos de éxito */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {casosExito.map((caso) => (
            <motion.div
              key={caso.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
              className="glass-card p-6 lg:p-8 group"
            >
              {/* Header del caso */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25">
                    <span className="text-xl font-bold text-white">{caso.logo}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground">{caso.empresa}</h3>
                    <span className="text-xs font-medium text-primary">{caso.industria}</span>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 45 }}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowUpRight className="w-4 h-4 text-primary" />
                </motion.div>
              </div>

              {/* Descripción */}
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {caso.descripcion}
              </p>

              {/* Métricas */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {caso.metricas.map((metrica, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="p-3 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <metrica.icon className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs text-muted-foreground">{metrica.label}</span>
                    </div>
                    <span className="text-lg font-bold text-gradient-primary">{metrica.valor}</span>
                  </motion.div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="pt-5 border-t border-white/10">
                <p className="text-sm italic text-muted-foreground mb-2">
                  {caso.testimonial}
                </p>
                <span className="text-xs font-medium text-primary">{caso.persona}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="btn-glow rounded-xl px-8" asChild>
            <a href="#contacto">
              Quiero Resultados Similares
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
