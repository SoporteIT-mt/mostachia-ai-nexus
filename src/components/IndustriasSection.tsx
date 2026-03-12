import { useState } from 'react';
import { ArrowRight, Calendar, ChevronDown, Film, UtensilsCrossed, HeartPulse, Scale, ShoppingCart, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagicCard } from '@/components/ui/magic-card';
import { BlurFade } from '@/components/ui/blur-fade';
import { Spotlight } from '@/components/ui/spotlight';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { CONFIG } from '@/config/constants';
import { useIsMobile } from '@/hooks/use-mobile';
import { type LucideIcon } from 'lucide-react';

interface Industria {
  icon: LucideIcon;
  title: string;
  bullets: string[];
}

const industrias: Industria[] = [
  {
    icon: Film,
    title: 'Cines y Entretenimiento',
    bullets: [
      'Dashboards de boletería y candy en tiempo real',
      'Analytics de ocupación por sala y película',
      'Agente de redes sociales con datos de cartelera',
      'Integración con sistemas de venta de entradas',
    ],
  },
  {
    icon: UtensilsCrossed,
    title: 'Gastronomía',
    bullets: [
      'Analytics de ventas por producto, mesero y turno',
      'Rankings de platos más vendidos y tendencias',
      'Integración con sistemas POS',
      'Adaptable a restaurantes, heladerías, cafeterías',
    ],
  },
  {
    icon: HeartPulse,
    title: 'Salud y Farmacias',
    bullets: [
      'Interfaces PWA premium para gestión',
      'Conexión con sistemas de stock existentes',
      'Automatización de procesos internos',
      'Alertas y seguimiento automatizado',
    ],
  },
  {
    icon: Scale,
    title: 'Estudios Contables y Legales',
    bullets: [
      'Dashboards de gestión multi-cliente',
      'Automatización de vencimientos y alertas',
      'Integración con AFIP y facturación',
      'Reportes automáticos para cada cliente',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce y Retail',
    bullets: [
      'Automatización de inventario y pedidos',
      'Agentes de atención al cliente con IA',
      'Integración TiendaNube, Shopify, WooCommerce',
      'Reportes de ventas y métricas automáticas',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Educación y Comunidades',
    bullets: [
      'Automatización de contenido educativo',
      'Gestión de comunidades online con IA',
      'Sistemas de seguimiento de alumnos',
      'Bots de soporte y FAQ automatizados',
    ],
  },
];

export const IndustriasSection = () => {
  const isMobile = useIsMobile();
  const [showAll, setShowAll] = useState(false);
  const visibleIndustrias = isMobile && !showAll ? industrias.slice(0, 4) : industrias;

  return (
    <section id="industrias" className="py-12 lg:py-20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="relative text-center mb-10 md:mb-16">
          <Spotlight size={600} fill="hsl(162 100% 39% / 0.08)" />
          <BlurFade>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              Industrias que <span className="text-gradient-primary">Transformamos</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Misma arquitectura modular probada, adaptada a cada rubro.
            </p>
          </BlurFade>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {visibleIndustrias.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <BlurFade key={ind.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
                  className="group relative h-full"
                >
                  <MagicCard className="h-full">
                    <div className="relative p-5 md:p-6">
                      <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-5 w-5 md:h-6 md:w-6" />
                      </div>

                      <h3 className="text-base md:text-lg font-bold font-display mb-3 md:mb-4 group-hover:text-primary transition-colors">
                        {ind.title}
                      </h3>

                      <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-5">
                        {ind.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>

                      <a
                        href={CONFIG.CALCOM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                      >
                        Consultar para este rubro
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </MagicCard>
                </motion.div>
              </BlurFade>
            );
          })}
        </div>

        {/* "Ver todas" toggle - mobile only */}
        {isMobile && !showAll && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Ver todas las industrias
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Banner */}
        <BlurFade delay={0.5} className="mt-10 md:mt-12 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 md:p-8 rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/[0.1]">
            <div className="text-center sm:text-left">
              <p className="text-foreground font-display font-semibold text-base md:text-lg">
                ¿Tu rubro no está en la lista? No importa.
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                Si tenés datos y procesos, podemos automatizarlos.
              </p>
            </div>
            <a href={CONFIG.CALCOM_URL} target="_blank" rel="noopener noreferrer">
              <ShimmerButton
                shimmerColor="rgba(127, 205, 179, 0.8)"
                background="linear-gradient(135deg, #60b99a, #4a9e82)"
                borderRadius="12px"
                className="px-5 py-2.5 md:px-6 md:py-3 font-semibold whitespace-nowrap text-sm shadow-[0_4px_24px_rgba(96,185,154,0.4)]"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Hablemos de tu Rubro
                <ArrowRight className="w-4 h-4 ml-2" />
              </ShimmerButton>
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default IndustriasSection;
