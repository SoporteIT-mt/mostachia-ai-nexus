import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONFIG } from '@/config/constants';

const industrias = [
  {
    emoji: '🎬',
    title: 'Cines y Entretenimiento',
    bullets: [
      'Dashboards de boletería y candy en tiempo real',
      'Analytics de ocupación por sala y película',
      'Agente de redes sociales con datos de cartelera',
      'Integración con sistemas de venta de entradas',
    ],
  },
  {
    emoji: '🍽️',
    title: 'Gastronomía',
    bullets: [
      'Analytics de ventas por producto, mesero y turno',
      'Rankings de platos más vendidos y tendencias',
      'Integración con sistemas POS',
      'Adaptable a restaurantes, heladerías, cafeterías',
    ],
  },
  {
    emoji: '💊',
    title: 'Salud y Farmacias',
    bullets: [
      'Interfaces PWA premium para gestión',
      'Conexión con sistemas de stock existentes',
      'Automatización de procesos internos',
      'Alertas y seguimiento automatizado',
    ],
  },
  {
    emoji: '📊',
    title: 'Estudios Contables y Legales',
    bullets: [
      'Dashboards de gestión multi-cliente',
      'Automatización de vencimientos y alertas',
      'Integración con AFIP y facturación',
      'Reportes automáticos para cada cliente',
    ],
  },
  {
    emoji: '🛒',
    title: 'E-commerce y Retail',
    bullets: [
      'Automatización de inventario y pedidos',
      'Agentes de atención al cliente con IA',
      'Integración TiendaNube, Shopify, WooCommerce',
      'Reportes de ventas y métricas automáticas',
    ],
  },
  {
    emoji: '🎓',
    title: 'Educación y Comunidades',
    bullets: [
      'Automatización de contenido educativo',
      'Gestión de comunidades online con IA',
      'Sistemas de seguimiento de alumnos',
      'Bots de soporte y FAQ automatizados',
    ],
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 90, damping: 16, delay: i * 0.1 },
  }),
};

export const IndustriasSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="industrias" ref={ref} className="py-24 md:py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Industrias que <span className="text-gradient-primary">Transformamos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Misma arquitectura modular probada, adaptada a cada rubro.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industrias.map((ind, i) => (
            <motion.div
              key={ind.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
              className="group relative"
            >
              <div className="relative h-full p-6 rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/[0.1] hover:border-primary/30 transition-all duration-500 overflow-hidden">
                {/* Emoji */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform duration-300">
                  {ind.emoji}
                </div>

                <h3 className="text-lg font-bold font-display mb-4 group-hover:text-primary transition-colors">
                  {ind.title}
                </h3>

                <ul className="space-y-2 mb-5">
                  {ind.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Hover CTA overlay */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={CONFIG.CALCOM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl btn-glow text-sm font-semibold text-primary-foreground"
                  >
                    Consultar para este rubro
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 max-w-5xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 md:p-8 rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/[0.1]">
            <div className="text-center sm:text-left">
              <p className="text-foreground font-display font-semibold text-lg">
                ¿Tu rubro no está en la lista? No importa.
              </p>
              <p className="text-sm text-muted-foreground">
                Si tenés datos y procesos, podemos automatizarlos.
              </p>
            </div>
            <Button className="btn-glow rounded-xl px-6 whitespace-nowrap" asChild>
              <a href={CONFIG.CALCOM_URL} target="_blank" rel="noopener noreferrer">
                Contanos tu caso
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
