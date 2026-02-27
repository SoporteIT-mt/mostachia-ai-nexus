import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlurFade } from '@/components/ui/blur-fade';

const TEAM_DATA = [
  { name: 'Juan Cruz Bertorello', role: 'CEO & Co-founder', image: '/team/juan-cruz.jpg', bio: 'Liderando la visión de automatización inteligente para LATAM.', highlight: 'Estrategia & Ventas' },
  { name: 'Diego González', role: 'CTO & Co-founder', image: '/team/diego.jpg', bio: 'Arquitecto de las soluciones técnicas y plataforma de agentes.', highlight: 'Arquitectura & IA' },
  { name: 'Florencia Ferrer Cabrera', role: 'Head of Ops & UX', image: '/team/florencia.jpg', bio: 'Diseñando experiencias y optimizando procesos de entrega.', highlight: 'Operaciones & UX' },
  { name: 'Juan Andrés Huenz', role: 'Lead AI Developer', image: '/team/juan-andres.jpg', bio: 'Construyendo los agentes de IA que potencian cada solución.', highlight: 'Desarrollo & ML' },
];

const AUTOPLAY_MS = 5000;
const RESUME_MS = 8000;

const getInitials = (name: string) =>
  name.split(' ').map(w => w[0]).join('').slice(0, 2);

const FallbackAvatar = ({ name, className = '' }: { name: string; className?: string }) => (
  <div className={`bg-gradient-to-br from-[hsl(199,40%,18%)] to-[hsl(199,38%,24%)] flex items-center justify-center ${className}`}>
    <span className="text-6xl font-display text-white/10 select-none">{getInitials(name)}</span>
  </div>
);

const MemberImage = ({ src, name, className = '' }: { src: string; name: string; className?: string }) => {
  const [error, setError] = useState(false);
  // Reset error when src changes
  useEffect(() => setError(false), [src]);
  if (error) return <FallbackAvatar name={name} className={className} />;
  return (
    <img
      src={src}
      alt={name}
      className={`object-cover ${className}`}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
};

export const TeamShowcase = () => {
  const [active, setActive] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  const member = TEAM_DATA[active];

  // Autoplay
  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % TEAM_DATA.length);
    }, AUTOPLAY_MS);
  }, []);

  const pauseAutoplay = useCallback(() => {
    if (autoplayRef.current) { clearInterval(autoplayRef.current); autoplayRef.current = null; }
    if (resumeRef.current) clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(startAutoplay, RESUME_MS);
  }, [startAutoplay]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      if (resumeRef.current) clearTimeout(resumeRef.current);
    };
  }, [startAutoplay]);

  const selectMember = useCallback((i: number) => {
    pauseAutoplay();
    setActive(i);
  }, [pauseAutoplay]);

  // Swipe (mobile)
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      pauseAutoplay();
      setActive(prev => (prev + (diff > 0 ? 1 : -1) + TEAM_DATA.length) % TEAM_DATA.length);
    }
  };

  return (
    <section id="equipo" className="relative w-full py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <BlurFade delay={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-mint-400/30 bg-mint-400/10 px-4 py-1.5 mb-6 text-sm font-medium text-mint-400">
              👥 El equipo detrás de MostachIA
            </span>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="section-title text-foreground mb-4">
              Quiénes <span className="text-gradient-primary">Somos</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="section-subtitle mx-auto">
              Un equipo argentino combinando tecnología de punta con visión de negocio.
            </p>
          </BlurFade>
        </div>

        {/* ── DESKTOP ── */}
        <div className="hidden lg:grid grid-cols-[1fr_380px] gap-0 h-[650px] rounded-2xl overflow-hidden border border-white/[0.06]">
          {/* Left: Main Image */}
          <div className="relative w-full h-full overflow-hidden bg-card">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05, filter: 'blur(12px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(12px)' }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full"
              >
                <MemberImage src={member.image} name={member.name} className="w-full h-full" />
              </motion.div>
            </AnimatePresence>

            {/* Bottom gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

            {/* Info overlay */}
            <div className="absolute bottom-0 left-0 p-8 z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`info-${active}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold font-display text-white">{member.name}</h3>
                  <p className="text-mint-400 font-mono text-sm tracking-wider uppercase mt-1">{member.role}</p>
                  <p className="text-white/70 text-sm mt-2 max-w-md">{member.bio}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Counter */}
            <div className="absolute top-6 right-6 z-10">
              <span className="font-mono text-white/40 text-sm">
                {String(active + 1).padStart(2, '0')} / {String(TEAM_DATA.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Right: Minimap */}
          <div className="bg-card/50 backdrop-blur-sm flex flex-col">
            {TEAM_DATA.map((person, i) => {
              const isActive = i === active;
              return (
                <button
                  key={i}
                  onClick={() => selectMember(i)}
                  className={`relative flex-1 flex gap-4 items-center px-5 py-3 text-left cursor-pointer border-l-2 transition-all duration-300 ${
                    isActive
                      ? 'border-mint-400 bg-white/5'
                      : 'border-transparent hover:border-white/20 hover:bg-white/[0.02]'
                  }`}
                >
                  {/* Thumbnail */}
                  <div
                    className={`w-16 h-16 rounded-lg overflow-hidden shrink-0 transition-all duration-300 ${
                      isActive ? 'ring-2 ring-mint-400' : 'opacity-60 grayscale hover:opacity-80'
                    }`}
                  >
                    <MemberImage src={person.image} name={person.name} className="w-full h-full" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className={`text-sm font-semibold truncate transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/60'}`}>
                      {person.name}
                    </div>
                    <div className={`text-xs truncate transition-colors duration-300 ${isActive ? 'text-mint-400/80' : 'text-white/40'}`}>
                      {person.role}
                    </div>
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex mt-1 px-2 py-0.5 rounded-full text-[10px] bg-mint-400/10 text-mint-400 border border-mint-400/20"
                      >
                        {person.highlight}
                      </motion.span>
                    )}
                  </div>

                  {/* Autoplay progress bar */}
                  {isActive && (
                    <motion.div
                      ref={progressRef}
                      className="absolute bottom-0 left-0 h-[2px] bg-mint-400"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: AUTOPLAY_MS / 1000, ease: 'linear' }}
                      key={`progress-${active}-${Date.now()}`}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── MOBILE ── */}
        <div
          className="lg:hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Image */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/[0.06]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05, filter: 'blur(12px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(12px)' }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full"
              >
                <MemberImage src={member.image} name={member.name} className="w-full h-full" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 p-5 z-10">
              <h3 className="text-xl font-bold font-display text-white">{member.name}</h3>
              <p className="text-mint-400 font-mono text-xs tracking-wider uppercase mt-1">{member.role}</p>
            </div>
          </div>

          {/* Mobile info */}
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">{member.bio}</p>
            <span className="inline-flex mt-2 px-3 py-1 rounded-full text-xs bg-mint-400/10 text-mint-400 border border-mint-400/20">
              {member.highlight}
            </span>
          </div>

          {/* Dots */}
          <div className="flex gap-2 justify-center mt-4">
            {TEAM_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => selectMember(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 bg-mint-400' : 'w-2 bg-white/20'
                }`}
                aria-label={`Ver miembro ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;
