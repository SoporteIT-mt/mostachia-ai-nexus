import { motion } from 'framer-motion';
import { TrendingUp, Clock, DollarSign, Target, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal';
import { TechLogosBar } from './TechLogos';

const casosExito = [
  {
    id: 1,
    empresa: 'TechCorp Industries',
    logo: 'TC',
    industria: 'Manufactura',
    color: 'from-blue-500 to-cyan-500',
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
    color: 'from-purple-500 to-pink-500',
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
    color: 'from-green-500 to-emerald-500',
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

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -10 },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 }
  }
};

export const CasosExitoSection = () => {
  const headerReveal = useScrollReveal({ direction: 'up', delay: 0 });
  const { containerRef, getItemStyle } = useStaggerReveal(casosExito.length, 200, 150, { direction: 'up' });

  return (
    <section id="casos" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div ref={headerReveal.ref} style={headerReveal.style} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
            <TrendingUp className="w-4 h-4" />
            Resultados Comprobados
          </span>
          <h2 className="section-title mb-6">
            Casos de Éxito{' '}
            <span className="text-gradient-primary">Reales</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Empresas que ya transformaron sus operaciones con nuestra tecnología.
            Resultados medibles, impacto inmediato.
          </p>
        </div>

        {/* Tech logos integration bar */}
        <div className="mb-16">
          <TechLogosBar 
            title="Trabajamos con empresas que usan estas tecnologías"
            variant="grid"
          />
        </div>

        {/* Casos de éxito */}
        <div ref={containerRef} className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {casosExito.map((caso, index) => (
            <motion.div
              key={caso.id}
              style={getItemStyle(index)}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
              className="glass-card p-6 lg:p-8 group"
            >
              {/* Header del caso */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${caso.color} flex items-center justify-center shadow-lg`}>
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
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/20 transition-colors"
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
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
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
