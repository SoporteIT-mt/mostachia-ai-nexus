import { ArrowRight, Calendar, Film, UtensilsCrossed, HeartPulse, Scale, ShoppingCart, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { MagicCard } from '@/components/ui/magic-card';
import { BlurFade } from '@/components/ui/blur-fade';
import { Spotlight } from '@/components/ui/spotlight';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { CONFIG } from '@/config/constants';
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
  return (
    <section id="industrias" className="py-16 lg:py-20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="relative text-center mb-16">
          <Spotlight size={600} fill="hsl(162 100% 39% / 0.08)" />
          <BlurFade>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Industrias que <span className="text-gradient-primary">Transformamos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Misma arquitectura modular probada, adaptada a cada rubro.
            </p>
          </BlurFade>
        </div>

        {/* Grid with MagicCard */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industrias.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <BlurFade key={ind.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
                  className="group relative h-full"
                >
                  <MagicCard className="h-full">
                    <div className="relative p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6" />
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

                      {/* CTA link */}
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

        {/* Banner */}
        <BlurFade delay={0.5} className="mt-12 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 md:p-8 rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/[0.1]">
            <div className="text-center sm:text-left">
              <p className="text-foreground font-display font-semibold text-lg">
                ¿Tu rubro no está en la lista? No importa.
              </p>
              <p className="text-sm text-muted-foreground">
                Si tenés datos y procesos, podemos automatizarlos.
              </p>
            </div>
            <a href={CONFIG.CALCOM_URL} target="_blank" rel="noopener noreferrer">
              <ShimmerButton
                shimmerColor="rgba(127, 205, 179, 0.8)"
                background="linear-gradient(135deg, #60b99a, #4a9e82)"
                borderRadius="12px"
                className="px-6 py-3 font-semibold whitespace-nowrap shadow-[0_4px_24px_rgba(96,185,154,0.4)]"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Agendar Diagnóstico Gratis
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
