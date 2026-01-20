import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, Building2 } from 'lucide-react';

import { realPeopleImages } from './TechLogos';

const testimonials = [
  {
    id: 1,
    name: 'Martín Fernández',
    role: 'CTO',
    company: 'TechScale Argentina',
    content: 'La migración de nuestra base de datos legacy tomaba semanas. Con MostachIA lo hicimos en 2 horas con cero errores.',
    rating: 5,
    metric: '95% menos tiempo',
    image: realPeopleImages[0],
  },
  {
    id: 2,
    name: 'Carolina Ruiz',
    role: 'Directora de Operaciones',
    company: 'RetailMax',
    content: 'El agente de WhatsApp atiende el 70% de las consultas automáticamente. La inversión se recuperó en el primer mes.',
    rating: 5,
    metric: '70% automatizado',
    image: realPeopleImages[1],
  },
  {
    id: 3,
    name: 'Diego Morales',
    role: 'CEO',
    company: 'DataFlow Argentina',
    content: 'Pensábamos que necesitábamos 3 desarrolladores más. MostachIA automatizó todo y ahorramos $15K mensuales.',
    rating: 5,
    metric: '$15K ahorro/mes',
    image: realPeopleImages[2],
  },
];

// Animation variants for subtle scroll reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.96,
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

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.15, type: "spring", stiffness: 150 }}
          >
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-primary">Historias Reales</span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold font-display mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Empresas que Ya <span className="text-gradient-primary">Transformaron</span> su Operación
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            No te contamos lo que podemos hacer. Te mostramos lo que ya hicimos.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto pt-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ 
                y: -6,
                transition: { duration: 0.25 }
              }}
              className="group"
            >
              <div className="relative h-full p-8 pt-10 rounded-2xl glass-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_hsl(162_100%_39%_/_0.15)]">
                {/* Quote icon - positioned properly */}
                <motion.div 
                  className="absolute -top-5 left-6 z-10"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/30">
                    <Quote className="w-5 h-5 text-primary-foreground" />
                  </div>
                </motion.div>

                {/* Metric badge */}
                <div className="mb-4">
                  <motion.span 
                    className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20"
                    whileHover={{ scale: 1.05 }}
                  >
                    {testimonial.metric}
                  </motion.span>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/90 leading-relaxed mb-6 text-[15px]">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                  />
                  <div className="flex-1">
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Building2 className="w-3 h-3" />
                      <span className="text-xs">{testimonial.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground">
            <span className="text-primary font-bold">+50 empresas</span> en Argentina ya confían en MostachIA
          </p>
        </motion.div>
      </div>
    </section>
  );
};

