import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight, MessageCircle, BarChart3, Headphones, Instagram } from 'lucide-react';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { CONFIG } from '@/config/constants';

const AGENTS = [
  {
    title: 'Agente de Ventas 24/7',
    description: 'Atiende consultas de WhatsApp, califica leads y agenda reuniones automáticamente.',
    icon: '💬',
    videoSrc: '',
    mockupType: 'whatsapp' as const,
  },
  {
    title: 'Agente de Redes Sociales',
    description: 'Genera contenido, programa publicaciones y responde comentarios en piloto automático.',
    icon: '📱',
    videoSrc: '',
    mockupType: 'instagram' as const,
  },
  {
    title: 'Agente de Análisis de Datos',
    description: 'Transforma datos crudos en dashboards accionables y reportes ejecutivos.',
    icon: '📊',
    videoSrc: '',
    mockupType: 'dashboard' as const,
  },
  {
    title: 'Agente de Atención al Cliente',
    description: 'Resuelve tickets, escala problemas y mantiene la satisfacción al máximo.',
    icon: '🎧',
    videoSrc: '',
    mockupType: 'tickets' as const,
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    scale: 0.75,
    rotateY: direction > 0 ? 25 : -25,
    opacity: 0,
    filter: 'blur(4px)',
  }),
  center: {
    x: 0,
    scale: 1,
    rotateY: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
      mass: 0.8,
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    scale: 0.75,
    rotateY: direction < 0 ? 25 : -25,
    opacity: 0,
    filter: 'blur(4px)',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
      mass: 0.8,
    },
  }),
};

/* ── Mockup Placeholders ── */

const WhatsAppMockup = () => (
  <div className="w-full h-full flex flex-col bg-[#0B141A] rounded-2xl sm:rounded-[2rem] overflow-hidden">
    {/* Header */}
    <div className="flex items-center gap-3 px-4 py-3 bg-[#1F2C34] border-b border-white/5">
      <div className="w-9 h-9 rounded-full bg-mint-400/20 flex items-center justify-center">
        <MessageCircle className="w-4 h-4 text-mint-400" />
      </div>
      <div>
        <div className="text-sm font-semibold text-white/90">Agente MostachIA</div>
        <div className="text-[10px] text-mint-400/70">en línea</div>
      </div>
    </div>
    {/* Messages */}
    <div className="flex-1 p-4 flex flex-col gap-2 justify-end overflow-hidden">
      <div className="self-start max-w-[75%] bg-[#1F2C34] rounded-xl rounded-tl-sm px-3 py-2">
        <p className="text-xs sm:text-sm text-white/80">Hola! Quiero info sobre sus servicios de IA 🤖</p>
        <span className="text-[9px] text-white/30 float-right mt-1">10:32</span>
      </div>
      <div className="self-end max-w-[75%] bg-mint-400/20 rounded-xl rounded-tr-sm px-3 py-2">
        <p className="text-xs sm:text-sm text-mint-400/90">¡Hola! 👋 Soy el agente IA de MostachIA. ¿En qué industria estás? Te armo un diagnóstico personalizado.</p>
        <span className="text-[9px] text-mint-400/40 float-right mt-1">10:32 ✓✓</span>
      </div>
      <div className="self-start max-w-[75%] bg-[#1F2C34] rounded-xl rounded-tl-sm px-3 py-2">
        <p className="text-xs sm:text-sm text-white/80">Gastronomía, tengo 3 locales</p>
        <span className="text-[9px] text-white/30 float-right mt-1">10:33</span>
      </div>
      <div className="self-end max-w-[75%] bg-mint-400/20 rounded-xl rounded-tr-sm px-3 py-2">
        <p className="text-xs sm:text-sm text-mint-400/90">Perfecto 🍽️ Para gastro tenemos automatización de pedidos, reservas y respuestas en redes. ¿Agendamos una demo?</p>
        <span className="text-[9px] text-mint-400/40 float-right mt-1">10:33 ✓✓</span>
      </div>
    </div>
  </div>
);

const InstagramMockup = () => (
  <div className="w-full h-full flex flex-col bg-[#0B0B0F] rounded-2xl sm:rounded-[2rem] overflow-hidden">
    <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
        <Instagram className="w-4 h-4 text-white" />
      </div>
      <span className="text-sm font-semibold text-white/90">@mostachia.ia</span>
      <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-mint-400/20 text-mint-400">Autopilot ✨</span>
    </div>
    <div className="flex-1 p-3 sm:p-4 grid grid-cols-2 gap-2 sm:gap-3 overflow-hidden">
      {[
        { bg: 'from-mint-400/30 to-cyan-500/20', label: '🚀 5 formas de usar IA', likes: '2.4k' },
        { bg: 'from-amber-400/30 to-orange-500/20', label: '📊 Caso de éxito', likes: '1.8k' },
        { bg: 'from-violet-400/30 to-purple-500/20', label: '🤖 Agente en acción', likes: '3.1k' },
        { bg: 'from-rose-400/30 to-pink-500/20', label: '💡 Tips de automatización', likes: '1.2k' },
      ].map((post, i) => (
        <div key={i} className={`rounded-xl bg-gradient-to-br ${post.bg} border border-white/5 p-3 flex flex-col justify-between aspect-square`}>
          <span className="text-xs sm:text-sm font-medium text-white/80">{post.label}</span>
          <span className="text-[10px] text-white/40">❤️ {post.likes}</span>
        </div>
      ))}
    </div>
  </div>
);

const DashboardMockup = () => (
  <div className="w-full h-full flex flex-col bg-[#0F1E27] rounded-2xl sm:rounded-[2rem] overflow-hidden">
    <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
      <BarChart3 className="w-4 h-4 text-mint-400" />
      <span className="text-sm font-semibold text-white/80">Analytics Dashboard</span>
      <div className="ml-auto flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="text-[10px] text-green-400/70 font-mono">Live</span>
      </div>
    </div>
    <div className="flex-1 p-3 sm:p-4 flex flex-col gap-3 overflow-hidden">
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'Revenue', val: '$48.2k', pct: '+23%' },
          { label: 'Leads', val: '1,284', pct: '+47%' },
          { label: 'Conversión', val: '89%', pct: '+12%' },
        ].map((s, i) => (
          <div key={i} className="rounded-lg bg-white/[0.03] border border-white/[0.06] p-2 sm:p-3">
            <div className="text-[9px] sm:text-[10px] text-white/40">{s.label}</div>
            <div className="text-sm sm:text-base font-bold text-white/90 font-mono">{s.val}</div>
            <div className="text-[9px] sm:text-[10px] text-mint-400/80">{s.pct}</div>
          </div>
        ))}
      </div>
      <div className="flex-1 rounded-lg bg-white/[0.02] border border-white/[0.04] p-2 sm:p-3 flex items-end gap-0.5">
        {Array.from({ length: 20 }).map((_, i) => {
          const h = 25 + Math.sin(i * 0.6) * 30 + (i % 3) * 8;
          return <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-mint-400/50 to-mint-400/10" style={{ height: `${h}%` }} />;
        })}
      </div>
    </div>
  </div>
);

const TicketsMockup = () => (
  <div className="w-full h-full flex flex-col bg-[#0B141A] rounded-2xl sm:rounded-[2rem] overflow-hidden">
    <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
      <Headphones className="w-4 h-4 text-amber-400" />
      <span className="text-sm font-semibold text-white/80">Centro de Soporte</span>
      <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-400 font-mono">3 abiertos</span>
    </div>
    <div className="flex-1 p-3 sm:p-4 flex flex-col gap-2 overflow-hidden">
      {[
        { id: '#1042', title: 'Error en facturación', status: 'Resuelto', statusColor: 'text-mint-400 bg-mint-400/10', time: 'Hace 2 min' },
        { id: '#1043', title: 'Consulta de envío', status: 'En progreso', statusColor: 'text-amber-400 bg-amber-400/10', time: 'Hace 5 min' },
        { id: '#1044', title: 'Cambio de plan', status: 'IA respondió', statusColor: 'text-cyan-400 bg-cyan-400/10', time: 'Hace 8 min' },
        { id: '#1045', title: 'Reset de contraseña', status: 'Resuelto', statusColor: 'text-mint-400 bg-mint-400/10', time: 'Hace 12 min' },
      ].map((t, i) => (
        <div key={i} className="flex items-center gap-3 rounded-lg bg-white/[0.03] border border-white/[0.06] p-2.5 sm:p-3">
          <span className="text-[10px] font-mono text-white/30 w-12 shrink-0">{t.id}</span>
          <div className="flex-1 min-w-0">
            <div className="text-xs sm:text-sm text-white/80 truncate">{t.title}</div>
            <div className="text-[9px] text-white/30">{t.time}</div>
          </div>
          <span className={`text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-medium shrink-0 ${t.statusColor}`}>{t.status}</span>
        </div>
      ))}
    </div>
  </div>
);

const MOCKUP_MAP: Record<string, React.FC> = {
  whatsapp: WhatsAppMockup,
  instagram: InstagramMockup,
  dashboard: DashboardMockup,
  tickets: TicketsMockup,
};

/* ── Main Component ── */

export const AgentVideoShowcase = () => {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const touchStartX = useRef(0);
  const autoplayTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const paginate = useCallback((dir: number) => {
    setCurrent(([prev]) => {
      const next = (prev + dir + AGENTS.length) % AGENTS.length;
      return [next, dir];
    });
  }, []);

  // Autoplay
  const startAutoplay = useCallback(() => {
    if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    autoplayTimer.current = setInterval(() => paginate(1), 6000);
  }, [paginate]);

  const pauseAutoplay = useCallback(() => {
    if (autoplayTimer.current) { clearInterval(autoplayTimer.current); autoplayTimer.current = null; }
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(startAutoplay, 10000);
  }, [startAutoplay]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, [startAutoplay]);

  const handleInteraction = useCallback((dir: number) => {
    pauseAutoplay();
    paginate(dir);
  }, [pauseAutoplay, paginate]);

  // Swipe
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) handleInteraction(diff > 0 ? 1 : -1);
  };

  const agent = AGENTS[current];
  const MockupComponent = MOCKUP_MAP[agent.mockupType];

  return (
    <section id="agentes" className="relative w-full py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-mint-400/30 bg-mint-400/10 px-4 py-1.5 mb-6 text-sm font-medium text-mint-400">
            🤖 Nuestros Agentes en Acción
          </span>
        </motion.div>

        {/* Synced text */}
        <div className="text-center mb-10 min-h-[100px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-foreground mb-3">
                <span className="mr-3">{agent.icon}</span>
                {agent.title}
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground font-light max-w-xl">
                {agent.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 3D Stage */}
      <div
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Arrows */}
        <div className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30">
          <button
            onClick={() => handleInteraction(-1)}
            className="w-14 h-14 rounded-full bg-[#1f3d4b]/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/60 transition-all hover:bg-gold-400/20 hover:text-gold-400 hover:border-gold-400/40 hover:scale-110 shadow-2xl"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
        <div className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30">
          <button
            onClick={() => handleInteraction(1)}
            className="w-14 h-14 rounded-full bg-[#1f3d4b]/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/60 transition-all hover:bg-gold-400/20 hover:text-gold-400 hover:border-gold-400/40 hover:scale-110 shadow-2xl"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel container */}
        <div
          className="relative w-full max-w-6xl mx-auto aspect-video flex items-center justify-center"
          style={{ perspective: '1200px' }}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ transformStyle: 'preserve-3d' }}
              className="absolute inset-0 w-full h-full rounded-2xl sm:rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(96,185,154,0.15)]"
            >
              {/* "Demo próximamente" badge */}
              {!agent.videoSrc && (
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-[10px] sm:text-xs font-semibold text-amber-400 backdrop-blur-sm">
                  Demo próximamente
                </div>
              )}

              {agent.videoSrc ? (
                <video
                  src={agent.videoSrc}
                  className="w-full h-full object-cover"
                  autoPlay muted loop playsInline
                />
              ) : (
                MockupComponent && <MockupComponent />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {AGENTS.map((_, i) => (
            <button
              key={i}
              onClick={() => { pauseAutoplay(); setCurrent([i, i > current ? 1 : -1]); }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-mint-400' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Ir al agente ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center mt-12"
      >
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
      </motion.div>
    </section>
  );
};

export default AgentVideoShowcase;
