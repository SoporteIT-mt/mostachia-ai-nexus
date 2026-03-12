import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Calendar, ArrowRight, BarChart3, Megaphone, Palette, ShoppingCart, Headphones } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { BlurFade } from '@/components/ui/blur-fade';
import { CONFIG } from '@/config/constants';
import { cn } from '@/lib/utils';

interface Agent {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tags: string[];
  videoUrl?: string;
  thumbnailUrl?: string;
}

const AGENTS: Agent[] = [
  {
    id: 'analytics',
    icon: <BarChart3 className="w-5 h-5" />,
    title: 'Agente de Analytics & Dashboards',
    subtitle: 'Tu negocio en tiempo real, sin tocar una planilla',
    description: 'Preguntale a tus datos como si le hablaras a una persona. Consulta tu base de datos en vivo, responde en lenguaje natural y genera dashboards interactivos.',
    features: [
      'Consulta datos en lenguaje natural',
      'Dashboards con KPIs, gráficos y tablas',
      'Descarga reportes en PDF al instante',
      'Actualiza reportes con un mensaje',
    ],
    tags: ['MySQL', 'PostgreSQL', 'MongoDB', 'Google Sheets'],
    videoUrl: 'https://www.youtube.com/embed/msn2181HNDQ',
  },
  {
    id: 'marketing',
    icon: <Megaphone className="w-5 h-5" />,
    title: 'Agente de Marketing',
    subtitle: 'Tu estrategia ejecutándose sola mientras vos crecés',
    description: 'Analizá campañas, planificá contenido con datos reales, enviá emails segmentados y optimizá anuncios en automático.',
    features: [
      'Análisis de rendimiento de campañas',
      'Calendarios de contenido con datos reales',
      'Campañas de email segmentadas',
      'Optimización automática de anuncios',
    ],
    tags: ['Meta Ads', 'Google Ads', 'Brevo', 'n8n'],
    videoUrl: 'https://www.youtube.com/embed/R1n2rXTnhVs',
  },
  {
    id: 'contenido',
    icon: <Palette className="w-5 h-5" />,
    title: 'Agente Creador de Contenido',
    subtitle: 'Contenido profesional en segundos, con tu identidad',
    description: 'Creá posts para Instagram con tu catálogo, carruseles adaptados a tu marca, videos de productos y avatares con IA — todo con tus colores y tu tono.',
    features: [
      'Posts con fotos de tu catálogo real',
      'Carruseles adaptados a tu marca',
      'Videos de productos con IA',
      'Avatares y piezas visuales listas para publicar',
    ],
    tags: ['Instagram', 'TikTok', 'Kling AI', 'ElevenLabs'],
    videoUrl: 'https://www.youtube.com/embed/Z4GZdqN8T4g',
  },
  {
    id: 'ventas',
    icon: <ShoppingCart className="w-5 h-5" />,
    title: 'Agente de Ventas',
    subtitle: 'Tu vendedor más rápido, disponible 24/7',
    description: 'Calificá prospectos, agendá reuniones, gestioná pagos y seguimientos sin intervención humana. Del primer contacto al cierre.',
    features: [
      'Calificación automática de leads',
      'Agenda reuniones sin ida y vuelta',
      'Gestión de pagos y seguimientos',
      'Integración directa con tu CRM',
    ],
    tags: ['WhatsApp', 'Cal.com', 'Stripe', 'CRM'],
    videoUrl: 'https://www.youtube.com/embed/az-ZwEZb6VI',
  },
  {
    id: 'soporte',
    icon: <Headphones className="w-5 h-5" />,
    title: 'Agente de Soporte',
    subtitle: 'Atención que no duerme y siempre está de buen humor',
    description: 'Respondé consultas, resolvé problemas, gestioná devoluciones y derivá casos complejos — con memoria de conversación y tono de tu marca.',
    features: [
      'Respuestas a consultas frecuentes 24/7',
      'Gestión de devoluciones automática',
      'Derivación inteligente a tu equipo',
      'Memoria de conversación y contexto',
    ],
    tags: ['WhatsApp', 'Email', 'Telegram', 'Tickets'],
    videoUrl: 'https://www.youtube.com/embed/qkcCv5gf0DA',
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
    filter: 'blur(4px)',
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring' as const, stiffness: 300, damping: 30 },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 60 : -60,
    opacity: 0,
    filter: 'blur(4px)',
    transition: { type: 'spring' as const, stiffness: 300, damping: 30 },
  }),
};

export const AgentVideoShowcase = () => {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const touchStartX = useRef(0);
  const autoplayTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const paginate = useCallback((dir: number) => {
    setCurrent(([prev]) => {
      const next = (prev + dir + AGENTS.length) % AGENTS.length;
      return [next, dir];
    });
  }, []);

  const startAutoplay = useCallback(() => {
    if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    autoplayTimer.current = setInterval(() => paginate(1), 7000);
  }, [paginate]);

  const stopAutoplay = useCallback(() => {
    if (autoplayTimer.current) { clearInterval(autoplayTimer.current); autoplayTimer.current = null; }
    if (resumeTimer.current) { clearTimeout(resumeTimer.current); resumeTimer.current = null; }
  }, []);

  const pauseAutoplay = useCallback(() => {
    stopAutoplay();
    resumeTimer.current = setTimeout(startAutoplay, 12000);
  }, [startAutoplay, stopAutoplay]);

  useEffect(() => {
    if (dialogOpen) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, [dialogOpen, startAutoplay, stopAutoplay]);

  const handleNav = useCallback((dir: number) => {
    pauseAutoplay();
    paginate(dir);
  }, [pauseAutoplay, paginate]);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) handleNav(diff > 0 ? 1 : -1);
  };

  const agent = AGENTS[current];

  return (
    <section id="agentes" className="relative w-full py-20 lg:py-28 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <BlurFade delay={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-mint-400/30 bg-mint-400/10 px-4 py-1.5 mb-6 text-sm font-medium text-mint-400">
              Nuestros Agentes en Acción
            </span>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="section-title text-foreground mb-4">
              Agentes que <span className="text-gradient-primary">trabajan por vos</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="section-subtitle mx-auto">
              Cada agente se conecta a tus datos reales y opera 24/7 sin intervención.
            </p>
          </BlurFade>
        </div>

        {/* Main carousel card */}
        <div
          className="relative max-w-5xl mx-auto"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Navigation arrows */}
          <button
            onClick={() => handleNav(-1)}
            className="absolute left-0 lg:-left-16 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[hsl(var(--card))]/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-muted-foreground transition-all hover:bg-mint-400/20 hover:text-mint-400 hover:border-mint-400/30 hover:scale-110"
            aria-label="Agente anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleNav(1)}
            className="absolute right-0 lg:-right-16 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[hsl(var(--card))]/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-muted-foreground transition-all hover:bg-mint-400/20 hover:text-mint-400 hover:border-mint-400/30 hover:scale-110"
            aria-label="Agente siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Animated card container */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={agent.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 sm:p-8 lg:p-10">
                {/* LEFT — Agent info */}
                <div className="flex flex-col justify-center gap-5">
                  {/* Agent badge */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-mint-400/10 border border-mint-400/20 flex items-center justify-center text-mint-400">
                      {agent.icon}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {agent.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
                    {agent.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-sm text-mint-400/80 italic">
                    "{agent.subtitle}"
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {agent.description}
                  </p>

                  {/* Feature bullets */}
                  <ul className="space-y-2 mt-1">
                    {agent.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-steel-300">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-mint-400 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* RIGHT — Video area */}
                <div className="flex items-center justify-center">
                  {agent.videoUrl ? (
                    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                      <DialogTrigger asChild>
                        <button className="w-full aspect-video rounded-xl overflow-hidden relative group cursor-pointer border border-white/[0.06]">
                          <img
                            src={agent.thumbnailUrl || `https://img.youtube.com/vi/${agent.videoUrl.split('/').pop()}/maxresdefault.jpg`}
                            alt={`Demo ${agent.title}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-mint-400/90 flex items-center justify-center shadow-[0_0_30px_rgba(96,185,154,0.5)] group-hover:scale-110 transition-transform">
                              <Play className="w-6 h-6 text-white ml-1" />
                            </div>
                          </div>
                          <div className="absolute bottom-3 left-3 text-xs font-medium text-white/80 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                            ▶ Ver demo
                          </div>
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0 bg-black border-white/10 overflow-hidden">
                        <div className="aspect-video w-full">
                          <iframe
                            src={`${agent.videoUrl}?autoplay=1&rel=0`}
                            className="w-full h-full"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            title={`Demo ${agent.title}`}
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/[0.06] bg-gradient-to-br from-[hsl(var(--card))] via-[hsl(var(--background))] to-[hsl(var(--card))] flex flex-col items-center justify-center gap-4 relative">
                      <div className="absolute inset-0 opacity-[0.03]">
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <pattern id={`dots-${agent.id}`} width="16" height="16" patternUnits="userSpaceOnUse">
                              <circle cx="1" cy="1" r="0.6" fill="currentColor" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill={`url(#dots-${agent.id})`} className="text-foreground" />
                        </svg>
                      </div>
                      <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                        {agent.icon}
                      </div>
                      <div className="flex items-center gap-2 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center">
                          <Play className="w-4 h-4 text-muted-foreground ml-0.5" />
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground font-mono relative z-10">Video próximamente</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots navigation */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {AGENTS.map((a, i) => (
              <button
                key={a.id}
                onClick={() => { pauseAutoplay(); setCurrent([i, i > current ? 1 : -1]); }}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === current ? "w-8 bg-mint-400" : "w-2 bg-white/20 hover:bg-white/40"
                )}
                aria-label={`Ir a ${a.title}`}
              />
            ))}
          </div>

          {/* Agent counter */}
          <div className="flex justify-center mt-3">
            <span className="text-xs font-mono text-muted-foreground">
              {current + 1} / {AGENTS.length}
            </span>
          </div>
        </div>

        {/* CTA */}
        <BlurFade delay={0.3} className="flex justify-center mt-12">
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
            <a href={CONFIG.CALCOM_URL} target="_blank" rel="noopener noreferrer">
              <ShimmerButton
                shimmerColor="rgba(127, 205, 179, 0.8)"
                background="linear-gradient(135deg, #60b99a, #4a9e82)"
                borderRadius="12px"
                className="px-7 py-4 text-base font-semibold shadow-[0_4px_24px_rgba(96,185,154,0.4)]"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Agendar Diagnóstico y Ver Demo Real
                <ArrowRight className="ml-2 w-4 h-4" />
              </ShimmerButton>
            </a>
          </motion.div>
        </BlurFade>
      </div>
    </section>
  );
};

export default AgentVideoShowcase;
