import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Martín Fernández',
    role: 'CTO, TechScale',
    content: 'La migración de nuestra base de datos legacy tomaba semanas. Con MostachIA lo hicimos en 2 horas con cero errores. Impresionante.',
    rating: 5,
    image: null,
  },
  {
    id: 2,
    name: 'Carolina Ruiz',
    role: 'Directora de Operaciones, RetailMax',
    content: 'El agente de WhatsApp atiende el 70% de las consultas automáticamente. Nuestro equipo ahora se enfoca en lo que realmente importa.',
    rating: 5,
    image: null,
  },
  {
    id: 3,
    name: 'Diego Morales',
    role: 'CEO, DataFlow Argentina',
    content: 'Pensábamos que necesitábamos 3 desarrolladores más. MostachIA automatizó todo y ahorramos $15,000 mensuales.',
    rating: 5,
    image: null,
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-primary">Testimonios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Lo que Dicen <span className="text-gradient-primary">Nuestros Clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empresas que ya transformaron su operación con MostachIA
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl glass-card border border-white/10 hover:border-primary/30 transition-all duration-300">
                {/* Quote icon */}
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                    <Quote className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 pt-2">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/90 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg font-bold text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
