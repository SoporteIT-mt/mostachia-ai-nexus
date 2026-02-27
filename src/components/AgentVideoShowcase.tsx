import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Calendar, ArrowRight } from 'lucide-react';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { CONFIG } from '@/config/constants';

const AGENTS = [
  {
    title: 'Agente de Ventas 24/7',
    description: 'Atiende consultas de WhatsApp, califica leads y agenda reuniones automáticamente.',
    icon: '💬',
    videoSrc: '',
  },
  {
    title: 'Agente de Redes Sociales',
    description: 'Genera contenido, programa publicaciones y responde comentarios en piloto automático.',
    icon: '📱',
    videoSrc: '',
  },
  {
    title: 'Agente de Análisis de Datos',
    description: 'Transforma datos crudos en dashboards accionables y reportes ejecutivos.',
    icon: '📊',
    videoSrc: '',
  },
  {
    title: 'Agente de Atención al Cliente',
    description: 'Resuelve tickets, escala problemas y mantiene la satisfacción al máximo.',
    icon: '🎧',
    videoSrc: '',
  },
];

// Variantes 3D Extremas — píxeles fijos masivos
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 2000 : -2000,
    opacity: 0,
    scale: 0.5,
    rotateY: direction > 0 ? 45 : -45,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 2000 : -2000,
    opacity: 0,
    scale: 0.5,
    rotateY: direction < 0 ? 45 : -45,
  }),
};

export const AgentVideoShowcase = () => {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const paginate = (dir: number) => {
    setIsPlaying(false);
    setCurrent(([prev]) => {
      const next = (prev + dir + AGENTS.length) % AGENTS.length;
      return [next, dir];
    });
  };

  const agent = AGENTS[current];

  return (
    <section className="relative w-full py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Encabezado */}
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

        {/* Textos sincronizados */}
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

      {/* Escenario 3D para el Video — sin overflow-hidden, perspectiva activa */}
      <div
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6"
        style={{ perspective: '1200px' }}
      >
        {/* Flechas Laterales */}
        <div className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30">
          <button
            onClick={() => paginate(-1)}
            className="w-14 h-14 rounded-full bg-[#1f3d4b]/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/60 transition-all hover:bg-gold-400/20 hover:text-gold-400 hover:border-gold-400/40 hover:scale-110 shadow-2xl"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        <div className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30">
          <button
            onClick={() => paginate(1)}
            className="w-14 h-14 rounded-full bg-[#1f3d4b]/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/60 transition-all hover:bg-gold-400/20 hover:text-gold-400 hover:border-gold-400/40 hover:scale-110 shadow-2xl"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Contenedor de Videos con perspectiva 3D */}
        <div className="relative w-full max-w-6xl mx-auto aspect-video flex items-center justify-center" style={{ perspective: '2000px', transformStyle: 'preserve-3d' }}>
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 200, damping: 25, mass: 1 }}
              className="absolute inset-0 w-full h-full rounded-2xl sm:rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(96,185,154,0.15)] bg-[#0B151C]"
            >
              {agent.videoSrc ? (
                <video
                  src={agent.videoSrc}
                  className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <div
                  className="w-full h-full flex flex-col items-center justify-center gap-4 rounded-2xl sm:rounded-3xl border border-white/[0.06] relative overflow-hidden"
                  style={{ backgroundColor: '#1f3d4b' }}
                >
                  {/* Noise overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'repeat',
                    }}
                  />
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white/30 ml-1" />
                  </div>
                  <span className="text-sm text-white/25 font-mono">
                    Próximamente: Video Demostración
                  </span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {AGENTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent([i, i > current ? 1 : -1])}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-8 bg-mint-400'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Ir al agente ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CTA Final */}
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
