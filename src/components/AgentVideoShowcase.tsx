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
  },
  {
    title: 'Agente de Redes Sociales',
    description: 'Genera contenido, programa publicaciones y responde comentarios en piloto automático.',
    icon: '📱',
  },
  {
    title: 'Agente de Análisis de Datos',
    description: 'Transforma datos crudos en dashboards accionables y reportes ejecutivos.',
    icon: '📊',
  },
  {
    title: 'Agente de Atención al Cliente',
    description: 'Resuelve tickets, escala problemas y mantiene la satisfacción al máximo.',
    icon: '🎧',
  },
];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? '80%' : '-80%',
    scale: 0.85,
    opacity: 0,
  }),
  center: {
    x: 0,
    scale: 1,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? '-80%' : '80%',
    scale: 0.85,
    opacity: 0,
  }),
};

const spring = { type: 'spring' as const, stiffness: 300, damping: 30 };

export const AgentVideoShowcase = () => {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = (dir: number) => {
    setCurrent(([prev]) => {
      const next = (prev + dir + AGENTS.length) % AGENTS.length;
      return [next, dir];
    });
  };

  const agent = AGENTS[current];

  return (
    <section className="relative w-full py-20 lg:py-28 overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Section header */}
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

        {/* Floating title + description */}
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

        {/* Video slider */}
        <div className="relative w-full max-w-6xl mx-auto">

          {/* Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/[0.06] backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 transition-all hover:bg-gold-400/20 hover:text-gold-400 hover:border-gold-400/40 hover:scale-110"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/[0.06] backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 transition-all hover:bg-gold-400/20 hover:text-gold-400 hover:border-gold-400/40 hover:scale-110"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Video container */}
          <div className="relative w-full aspect-video overflow-hidden rounded-2xl sm:rounded-3xl">
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={spring}
                className="absolute inset-0 w-full h-full"
              >
                <div
                  className="w-full h-full flex flex-col items-center justify-center gap-4 border border-white/[0.06] rounded-2xl sm:rounded-3xl"
                  style={{ backgroundColor: '#1f3d4b' }}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white/30 ml-1" />
                  </div>
                  <span className="text-sm text-white/25 font-mono">
                    Video de demostración
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
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
                Quiero ver una demo en vivo
                <ArrowRight className="ml-2 w-4 h-4" />
              </ShimmerButton>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
