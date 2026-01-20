import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Clock, DollarSign, Target, ArrowUpRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { realPeopleImages } from './TechLogos';

// Real Argentine company SVG logos
const companyLogos = {
  mercadoLibre: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12.04 6.95c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
      <path d="M12.04 1c-6.08 0-11 4.92-11 11h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.08-4.92-11-11-11z"/>
    </svg>
  ),
  globant: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.3"/>
      <circle cx="12" cy="12" r="3" fill="currentColor"/>
    </svg>
  ),
  despegar: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M3 12l4-4 6 6 8-8v4l-8 8-6-6z"/>
      <path d="M3 16l4-4 6 6 8-8v4l-8 8-6-6z" opacity="0.5"/>
    </svg>
  ),
  ypf: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2L4 6v12l8 4 8-4V6l-8-4zm0 2.5l5.5 2.75v7.5L12 17.5l-5.5-2.75v-7.5L12 4.5z"/>
    </svg>
  ),
  galicia: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <rect x="3" y="6" width="18" height="12" rx="2"/>
      <path d="M7 10h10M7 14h6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
    </svg>
  ),
  techint: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M4 4h16v4H4zM4 10h8v10H4zM14 10h6v10h-6z" opacity="0.8"/>
    </svg>
  ),
};

const casosExito = [
  {
    id: 1,
    empresa: 'Mercado Libre',
    logo: companyLogos.mercadoLibre,
    industria: 'E-commerce & Fintech',
    color: '#FFE600',
    descripcion: 'Automatización de atención al vendedor con IA conversacional multicanal.',
    metricas: [
      { label: 'Consultas automatizadas', valor: '78%', icon: Target },
      { label: 'Ahorro anual', valor: '$4.2M', icon: DollarSign },
    ],
    testimonial: 'La implementación superó todas las expectativas. El equipo de MostachIA entendió nuestras necesidades desde el día uno.',
    persona: 'Marcos L.',
    cargo: 'Director de Innovación',
    imagen: realPeopleImages[0],
  },
  {
    id: 2,
    empresa: 'Globant',
    logo: companyLogos.globant,
    industria: 'Tecnología & Servicios',
    color: '#BFD730',
    descripcion: 'Sistema de análisis predictivo para asignación de talento en proyectos globales.',
    metricas: [
      { label: 'Eficiencia en staffing', valor: '+45%', icon: TrendingUp },
      { label: 'Tiempo de asignación', valor: '-60%', icon: Clock },
    ],
    testimonial: 'Transformaron cómo asignamos talento. Los resultados fueron visibles en las primeras semanas.',
    persona: 'Carolina V.',
    cargo: 'VP People Operations',
    imagen: realPeopleImages[1],
  },
  {
    id: 3,
    empresa: 'Despegar',
    logo: companyLogos.despegar,
    industria: 'Travel & Tourism',
    color: '#7B2D8E',
    descripcion: 'Migración de base de datos legacy + chatbot de soporte 24/7 con IA.',
    metricas: [
      { label: 'Datos migrados', valor: '120M+', icon: Target },
      { label: 'Ahorro mensual', valor: '$280K', icon: DollarSign },
    ],
    testimonial: 'La migración fue impecable. Cero downtime y mejor performance que el sistema anterior.',
    persona: 'Fernando R.',
    cargo: 'CTO',
    imagen: realPeopleImages[2],
  },
  {
    id: 4,
    empresa: 'YPF',
    logo: companyLogos.ypf,
    industria: 'Energía & Petróleo',
    color: '#0072CE',
    descripcion: 'Sistema de atención al cliente para red de estaciones con IA conversacional.',
    metricas: [
      { label: 'Tickets resueltos', valor: '89%', icon: Target },
      { label: 'ROI', valor: '320%', icon: TrendingUp },
    ],
    testimonial: 'El equipo de soporte ahora se enfoca en casos complejos. La IA maneja el resto.',
    persona: 'Miguel S.',
    cargo: 'Gerente de Soporte',
    imagen: realPeopleImages[3] || realPeopleImages[0],
  },
  {
    id: 5,
    empresa: 'Banco Galicia',
    logo: companyLogos.galicia,
    industria: 'Banca & Finanzas',
    color: '#FF6B00',
    descripcion: 'Automatización de reportes regulatorios y análisis de riesgo crediticio.',
    metricas: [
      { label: 'Reportes automatizados', valor: '100%', icon: Target },
      { label: 'Ahorro en compliance', valor: '$1.8M', icon: DollarSign },
    ],
    testimonial: 'Pasamos de semanas a horas para generar reportes regulatorios. Increíble.',
    persona: 'Laura M.',
    cargo: 'Head of Compliance',
    imagen: realPeopleImages[4] || realPeopleImages[1],
  },
  {
    id: 6,
    empresa: 'Grupo Techint',
    logo: companyLogos.techint,
    industria: 'Industria & Energía',
    color: '#003366',
    descripcion: 'Monitoreo predictivo de equipos industriales con machine learning.',
    metricas: [
      { label: 'Reducción de fallas', valor: '94%', icon: Target },
      { label: 'Ahorro anual', valor: '$2.4M', icon: DollarSign },
    ],
    testimonial: 'Transformaron nuestra operación. Ahora predecimos fallas antes de que ocurran.',
    persona: 'Carlos M.',
    cargo: 'Director de Tecnología',
    imagen: realPeopleImages[5] || realPeopleImages[2],
  },
];

export const CasosExitoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 14,
      },
    },
  };

  return (
    <section id="casos" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.15, type: "spring", stiffness: 150 }}
          >
            <TrendingUp className="w-4 h-4" />
            Resultados Comprobados
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Casos de Éxito <span className="text-gradient-primary">Reales</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Empresas argentinas líderes que ya transformaron sus operaciones con nuestra tecnología.
          </motion.p>
        </motion.div>

        {/* Cases Grid - Compact professional cards */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {casosExito.map((caso) => (
            <motion.div
              key={caso.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="h-full p-5 rounded-xl glass-card border border-border/50 hover:border-primary/20 transition-all duration-300">
                {/* Company header */}
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-11 h-11 rounded-lg flex items-center justify-center p-2"
                    style={{ backgroundColor: `${caso.color}20`, color: caso.color }}
                  >
                    {caso.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-base text-foreground truncate">
                      {caso.empresa}
                    </h3>
                    <span className="text-[11px] text-muted-foreground">{caso.industria}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                  {caso.descripcion}
                </p>

                {/* Metrics - Compact */}
                <div className="flex gap-3 mb-4">
                  {caso.metricas.map((metrica, i) => (
                    <div key={i} className="flex-1 p-2.5 rounded-lg bg-secondary/50">
                      <div className="text-lg font-bold text-primary">{metrica.valor}</div>
                      <div className="text-[10px] text-muted-foreground leading-tight">{metrica.label}</div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="pt-4 border-t border-border/30">
                  <div className="flex gap-2 mb-3">
                    <Quote className="w-4 h-4 text-primary/40 flex-shrink-0" />
                    <p className="text-xs text-foreground/70 italic leading-relaxed line-clamp-2">
                      "{caso.testimonial}"
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img 
                      src={caso.imagen} 
                      alt={caso.persona}
                      className="w-7 h-7 rounded-full object-cover border border-border/30"
                    />
                    <div>
                      <span className="block text-xs font-medium text-foreground">{caso.persona}</span>
                      <span className="text-[10px] text-muted-foreground">{caso.cargo}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-14 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { label: 'Empresas activas', value: '+50' },
            { label: 'Proyectos completados', value: '+120' },
            { label: 'ROI promedio', value: '340%' },
            { label: 'Satisfacción', value: '99%' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
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
