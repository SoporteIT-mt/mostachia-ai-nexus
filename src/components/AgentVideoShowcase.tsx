import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Play, Bot } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { CONFIG } from '@/config/constants';

const agents = [
  {
    title: 'Agente de Ventas 24/7',
    description:
      'Atiende consultas de WhatsApp, califica leads y agenda reuniones automáticamente. Tu equipo comercial, sin dormir.',
    icon: '💬',
  },
  {
    title: 'Agente de Redes Sociales',
    description:
      'Genera contenido, programa publicaciones y responde comentarios en todas tus plataformas. Presencia digital constante.',
    icon: '📱',
  },
  {
    title: 'Agente de Análisis de Datos',
    description:
      'Conecta tus fuentes de datos, genera reportes inteligentes y detecta oportunidades que tu equipo no ve.',
    icon: '📊',
  },
  {
    title: 'Agente de Atención al Cliente',
    description:
      'Resuelve tickets, escala casos complejos y mantiene satisfacción al 98%. Soporte instantáneo, sin esperas.',
    icon: '🎧',
  },
];

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] } },
});

export const AgentVideoShowcase = () => {
  return (
    <section id="demos" className="relative z-10 py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* ── Header ──────────────────────────── */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/40 border border-border/30 backdrop-blur-sm mb-6">
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-xs font-mono tracking-wide text-muted-foreground uppercase">
              Nuestros Agentes en Acción
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight mb-4">
            <span className="text-foreground">Mirá cómo trabajan </span>
            <span className="text-gradient-primary">nuestros agentes</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Cada agente está diseñado a medida para resolver un problema real de tu negocio. 
            Agendá una demo personalizada para verlos en vivo.
          </p>
        </motion.div>

        {/* ── Carousel ────────────────────────── */}
        <motion.div
          className="max-w-5xl mx-auto"
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <Carousel
            opts={{ align: 'center', loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {agents.map((agent, i) => (
                <CarouselItem key={i} className="pl-4 md:pl-6">
                  <div className="rounded-2xl bg-card/30 backdrop-blur-md border border-border/20 p-6 md:p-8">
                    {/* Agent Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <span className="text-3xl">{agent.icon}</span>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold font-display text-foreground mb-2">
                          {agent.title}
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                          {agent.description}
                        </p>
                      </div>
                    </div>

                    {/* Video Container */}
                    <div className="aspect-video w-full rounded-2xl overflow-hidden border border-border/20 shadow-2xl relative bg-card/60">
                      <video
                        src=""
                        controls
                        muted
                        loop
                        className="w-full h-full object-cover"
                        style={{ backgroundColor: 'hsl(199 42% 14%)' }}
                      />
                      {/* Placeholder overlay — remove when videos are added */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-card/80 backdrop-blur-sm">
                        <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                          <Play className="w-7 h-7 text-primary ml-1" />
                        </div>
                        <span className="text-sm text-muted-foreground font-mono">
                          Video de demostración próximamente
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows */}
            <CarouselPrevious
              className="hidden md:flex -left-14 h-12 w-12 border-2 border-border/30 bg-card/50 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            />
            <CarouselNext
              className="hidden md:flex -right-14 h-12 w-12 border-2 border-border/30 bg-card/50 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            />
          </Carousel>

          {/* Dot indicators for mobile */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {agents.map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-muted-foreground/30"
              />
            ))}
          </div>
        </motion.div>

        {/* ── CTA ─────────────────────────────── */}
        <motion.div
          className="text-center mt-12"
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <a href={CONFIG.CALCOM_URL} target="_blank" rel="noopener noreferrer">
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
              <ShimmerButton
                shimmerColor="rgba(127, 205, 179, 0.8)"
                background="linear-gradient(135deg, #60b99a, #4a9e82)"
                borderRadius="9999px"
                className="px-8 py-4 text-base font-semibold shadow-[0_4px_20px_rgba(96,185,154,0.4)]"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Quiero ver una demo en vivo
                <ArrowRight className="ml-2 w-4 h-4" />
              </ShimmerButton>
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
