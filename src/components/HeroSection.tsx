import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles, Circle, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Web3HeroBackground } from '@/components/ui/animated-web3-landing-page';
import { TechLogosBar } from './TechLogos';

const CAL_LINK = 'https://cal.com/mostachia/consultoria';

// Animated text component - letter by letter reveal
function AnimatedText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.03,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.2,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 1.2 }
  }
};

const fadeUpSpring = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

// Button hover animation variants
const buttonHoverVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    y: -3,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  },
  tap: { scale: 0.98 }
};

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax scroll effects
  const { scrollY } = useScroll();
  
  // Parallax transforms for different elements
  const titleY = useTransform(scrollY, [0, 500], [0, 80]);
  const subtitleY = useTransform(scrollY, [0, 500], [0, 60]);
  const badgeY = useTransform(scrollY, [0, 500], [0, 40]);
  const ctaY = useTransform(scrollY, [0, 500], [0, 50]);
  const statsY = useTransform(scrollY, [0, 500], [0, 30]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

  return (
    <Web3HeroBackground>
      {/* Main Content */}
      <motion.div
        ref={containerRef}
        className="container relative z-10 mx-auto px-6 py-20 min-h-screen flex flex-col justify-center"
        style={{ opacity, scale }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            style={{ y: badgeY }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm mb-8 md:mb-12"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Circle className="h-2 w-2 fill-primary text-primary" />
            </motion.div>
            <span className="text-sm text-muted-foreground tracking-wide">
              Tecnología que escala con vos
            </span>
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
            </motion.div>
          </motion.div>

          {/* Main Title with letter-by-letter animation and parallax */}
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            style={{ y: titleY }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight mb-6 md:mb-8 leading-[1.1]">
              <span className="block text-foreground">
                <AnimatedText text="Procesos Inteligentes," delay={0.5} />
              </span>
              <span className="block text-gradient-primary mt-2">
                <AnimatedText text="Resultados Superiores." delay={1.0} />
              </span>
            </h1>
          </motion.div>

          {/* Subtitle with parallax */}
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            style={{ y: subtitleY }}
          >
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed mb-10">
              Transformamos tu empresa combinando el poder de la{' '}
              <span className="text-foreground font-semibold">Inteligencia Artificial</span> con la estrategia humana.
              <br className="hidden sm:block" />
              Automatiza lo operativo, escala lo estratégico.
            </p>
          </motion.div>

          {/* CTAs with micro-interactions */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            style={{ y: ctaY }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.div 
              variants={fadeUpSpring}
              whileHover="hover"
              whileTap="tap"
              initial="initial"
            >
              <motion.div variants={buttonHoverVariants}>
                <Button
                  size="lg"
                  className="btn-glow rounded-xl px-8 py-6 text-lg group relative overflow-hidden"
                  asChild
                >
                  <a href="#demos">
                    {/* Animated shine effect */}
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        repeatDelay: 3,
                        ease: "easeInOut"
                      }}
                    />
                    {/* Pulsing glow behind */}
                    <motion.span
                      className="absolute inset-0 rounded-xl bg-primary/30 -z-10"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.2, 0.5]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <Play className="mr-2 w-5 h-5 fill-current relative" />
                    <span className="relative">Probar Tecnología Ahora</span>
                    <motion.span
                      className="relative ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={fadeUpSpring}
              whileHover="hover"
              whileTap="tap"
              initial="initial"
            >
              <motion.div variants={buttonHoverVariants}>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl px-8 py-6 text-lg border-2 border-white/20 hover:border-primary/50 bg-white/5 backdrop-blur-sm group relative overflow-hidden"
                  onClick={() => window.open(CAL_LINK, '_blank', 'noopener,noreferrer')}
                >
                  {/* Hover background fill */}
                  <motion.span
                    className="absolute inset-0 bg-primary/10 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Calendar className="mr-2 w-5 h-5 relative z-10" />
                  <span className="relative z-10">Agendar Consultoría</span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stats with parallax and hover interactions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            style={{ y: statsY }}
            className="flex items-center justify-center gap-12 md:gap-20 mb-16"
          >
            {[
              { value: '+10M', label: 'Registros procesados' },
              { value: '98%', label: 'Precisión IA' },
              { value: '24/7', label: 'Automatización' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.6 + i * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="text-center cursor-default group"
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-primary font-display"
                  whileHover={{ 
                    textShadow: "0 0 20px rgba(0,200,150,0.5)"
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1 group-hover:text-foreground transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Logos Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <TechLogosBar 
              title="Integramos con las herramientas que ya usás"
              variant="default"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator with enhanced animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        style={{ opacity }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-7 h-11 rounded-full border-2 border-white/20 flex items-start justify-center p-2 backdrop-blur-sm bg-white/5"
        >
          <motion.div 
            className="w-1.5 h-3 rounded-full bg-gradient-to-b from-primary to-primary/50"
            animate={{ 
              opacity: [1, 0.3, 1],
              y: [0, 8, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <motion.p
          className="text-xs text-muted-foreground mt-3 text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll para explorar
        </motion.p>
      </motion.div>
    </Web3HeroBackground>
  );
};