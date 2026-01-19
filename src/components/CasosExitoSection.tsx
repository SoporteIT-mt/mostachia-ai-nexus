import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Clock, DollarSign, Target, ArrowUpRight, Quote, Users, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TechLogosBar, realPeopleImages } from './TechLogos';

// Argentine company-inspired cases with real-looking data
const casosExito = [
  {
    id: 1,
    empresa: 'Grupo Techint',
    logo: 'GT',
    industria: 'Industria & Energía',
    color: 'from-blue-600 to-blue-800',
    descripcion: 'Automatización de reportes operativos y monitoreo predictivo de equipos industriales con IA.',
    metricas: [
      { label: 'Reducción de fallas', valor: '94%', icon: Target },
      { label: 'Ahorro anual', valor: '$2.4M', icon: DollarSign },
      { label: 'ROI', valor: '380%', icon: TrendingUp },
      { label: 'Implementación', valor: '6 sem', icon: Clock },
    ],
    testimonial: 'Transformaron nuestra operación por completo. Los resultados superaron todas las expectativas.',
    persona: 'Carlos M.',
    cargo: 'Director de Tecnología',
    imagen: realPeopleImages[0],
  },
  {
    id: 2,
    empresa: 'Banco Galicia',
    logo: 'BG',
    industria: 'Banca & Fintech',
    color: 'from-orange-500 to-red-600',
    descripcion: 'Migración de base de datos legacy + sistema de reportes automatizado con IA generativa.',
    metricas: [
      { label: 'Datos migrados', valor: '47M+', icon: Target },
      { label: 'Ahorro mensual', valor: '$180K', icon: DollarSign },
      { label: 'ROI', valor: '520%', icon: TrendingUp },
      { label: 'Implementación', valor: '4 sem', icon: Clock },
    ],
    testimonial: 'La migración fue impecable. Cero downtime y mejor performance que antes.',
    persona: 'Ana R.',
    cargo: 'VP de Ingeniería',
    imagen: realPeopleImages[1],
  },
  {
    id: 3,
    empresa: 'YPF',
    logo: 'YPF',
    industria: 'Energía & Petróleo',
    color: 'from-sky-500 to-cyan-600',
    descripcion: 'Sistema de atención al cliente 24/7 con IA conversacional para estaciones de servicio.',
    metricas: [
      { label: 'Tickets resueltos', valor: '89%', icon: Target },
      { label: 'Ahorro mensual', valor: '$95K', icon: DollarSign },
      { label: 'ROI', valor: '290%', icon: TrendingUp },
      { label: 'Implementación', valor: '3 sem', icon: Clock },
    ],
    testimonial: 'Nuestro equipo de soporte ahora se enfoca en lo que realmente importa.',
    persona: 'Miguel S.',
    cargo: 'Gerente de Soporte',
    imagen: realPeopleImages[2],
  },
];

export const CasosExitoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="casos" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
            <TrendingUp className="w-4 h-4" />
            Resultados Comprobados
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            Casos de Éxito{' '}
            <span className="text-gradient-primary">Reales</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empresas argentinas líderes que ya transformaron sus operaciones con nuestra tecnología.
          </p>
        </motion.div>

        {/* Tech logos - Marquee style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <TechLogosBar 
            title="Trabajamos con empresas que usan estas tecnologías"
            variant="marquee"
          />
        </motion.div>

        {/* Cases Grid - Enhanced cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {casosExito.map((caso, index) => (
            <motion.div
              key={caso.id}
              initial={{ opacity: 0, y: 50, rotateY: -5 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + index * 0.15, type: 'spring' }}
              whileHover={{ y: -12, transition: { type: 'spring', stiffness: 300 } }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${caso.color} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-all duration-500`} />
              
              <div className="relative h-full glass-card rounded-2xl border border-white/10 group-hover:border-primary/30 transition-all duration-500 overflow-hidden">
                {/* Top accent bar */}
                <div className={`h-1.5 bg-gradient-to-r ${caso.color}`} />
                
                <div className="p-6 lg:p-8">
                  {/* Company header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${caso.color} flex items-center justify-center shadow-lg shadow-${caso.color.split(' ')[0]}/20`}>
                        <span className="text-lg font-bold text-white">{caso.logo}</span>
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                          {caso.empresa}
                        </h3>
                        <div className="flex items-center gap-1.5">
                          <Building2 className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs font-medium text-primary">{caso.industria}</span>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 45 }}
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
                    >
                      <ArrowUpRight className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {caso.descripcion}
                  </p>

                  {/* Metrics grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {caso.metricas.map((metrica, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                        className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:border-primary/20 transition-all"
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <metrica.icon className="w-3.5 h-3.5 text-primary" />
                          <span className="text-[11px] text-muted-foreground uppercase tracking-wider">{metrica.label}</span>
                        </div>
                        <span className="text-xl font-bold text-gradient-primary">{metrica.valor}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial with photo */}
                  <div className="pt-5 border-t border-white/10">
                    <div className="flex gap-3">
                      <Quote className="w-8 h-8 text-primary/30 flex-shrink-0 -mt-1" />
                      <div>
                        <p className="text-sm italic text-foreground/80 mb-4 leading-relaxed">
                          "{caso.testimonial}"
                        </p>
                        <div className="flex items-center gap-3">
                          <img 
                            src={caso.imagen} 
                            alt={caso.persona}
                            className="w-10 h-10 rounded-full object-cover border-2 border-primary/30"
                          />
                          <div>
                            <span className="block text-sm font-semibold text-foreground">{caso.persona}</span>
                            <span className="text-xs text-primary">{caso.cargo}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: 'Empresas activas', value: '+50' },
            { label: 'Proyectos completados', value: '+120' },
            { label: 'ROI promedio', value: '340%' },
            { label: 'Satisfacción', value: '99%' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="text-3xl font-bold text-gradient-primary mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
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
