import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, ArrowUpRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

const TEAM_DATA: TeamMember[] = [
  {
    name: "Juan Cruz Bertorello",
    role: "Co-Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop",
    description: "Visión estratégica y liderazgo. Obsesionado con escalar negocios a través de IA.",
  },
  {
    name: "Diego Gonzalez",
    role: "Co-Founder & CTO",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop",
    description: "Arquitecto tecnológico. Transforma lógica compleja en soluciones de software impecables.",
  },
  {
    name: "Florencia Ferrer Cabrera",
    role: "Head of Operations & UX",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
    description: "El puente entre la tecnología y el usuario. Diseña experiencias fluidas y eficientes.",
  },
  {
    name: "Juan Andres Huenz",
    role: "Lead AI Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    description: "Especialista en LLMs y automatización. Entrena agentes para que piensen como humanos.",
  },
];

export const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play effect
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TEAM_DATA.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section className="relative w-full py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <BlurFade delay={0.1}>
            <div className="flex flex-col items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-mint-400/30 bg-mint-400/10 px-4 py-1.5 text-sm font-medium text-mint-400">
                // El Cerebro detrás de la IA
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-foreground">
                Conocé al Equipo
              </h2>
            </div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
              No somos una corporación sin rostro. Somos un equipo argentino apasionado por hacer que tu empresa gane más tiempo y dinero.
            </p>
          </BlurFade>
        </div>
      </div>

      {/* Interactive Slider */}
      <div
        className="container mx-auto px-4 sm:px-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 lg:gap-8 items-stretch">

          {/* Main Image with AnimatePresence */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[520px] rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={TEAM_DATA[activeIndex].image}
                  alt={TEAM_DATA[activeIndex].name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Dark vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="text-2xl sm:text-3xl font-bold text-white font-display"
                  >
                    {TEAM_DATA[activeIndex].name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="text-mint-400 font-medium mt-1"
                  >
                    {TEAM_DATA[activeIndex].role}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="text-white/60 text-sm mt-2 max-w-md"
                  >
                    {TEAM_DATA[activeIndex].description}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Minimap Sidebar */}
          <div className="flex flex-col gap-3 justify-center">
            {TEAM_DATA.map((member, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative group flex items-center gap-4 p-4 rounded-2xl transition-all duration-500 text-left ${
                    isActive
                      ? 'bg-white/10 border border-white/20 shadow-lg'
                      : 'bg-transparent border border-transparent hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="team-active-bg"
                      className="absolute inset-0 rounded-2xl bg-mint-400/5 border border-mint-400/20"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border border-white/10">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="relative flex-1 min-w-0">
                    <p className={`font-semibold text-sm truncate transition-colors ${
                      isActive ? 'text-mint-400' : 'text-foreground'
                    }`}>
                      {member.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {member.role}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
