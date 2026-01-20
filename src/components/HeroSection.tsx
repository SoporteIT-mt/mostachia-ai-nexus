import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WavyBackground } from '@/components/ui/wavy-background';
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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export const HeroSection = () => {
  return (
    <WavyBackground
      containerClassName="relative min-h-screen w-full"
      className="w-full"
      colors={[
        "#00C896", // Primary mint
        "#00D9A5", // Lighter mint  
        "#7C3AED", // Accent violet
        "#9333EA", // Lighter violet
        "#00B385", // Darker mint
      ]}
      waveWidth={45}
      blur={15}
      speed="slow"
      waveOpacity={0.25}
      wavePosition={0.78}
      waveAmplitude={80}
      backgroundFill="hsl(222, 47%, 7%)"
    >
      {/* Decorative overlay gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      {/* Main Content */}
      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm mb-8 md:mb-12"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Circle className="h-2 w-2 fill-primary text-primary" />
            </motion.div>
            <span className="text-sm text-muted-foreground tracking-wide">
              Tecnología que escala con vos
            </span>
            <Sparkles className="w-3.5 h-3.5 text-primary" />
          </motion.div>

          {/* Main Title with letter-by-letter animation */}
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
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

          {/* Subtitle */}
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed mb-10">
              Transformamos tu empresa combinando el poder de la{' '}
              <span className="text-foreground font-semibold">Inteligencia Artificial</span> con la estrategia humana.
              <br className="hidden sm:block" />
              Automatiza lo operativo, escala lo estratégico.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.div variants={fadeUpSpring}>
              <Button
                size="lg"
                className="btn-glow rounded-xl px-8 py-6 text-lg group relative overflow-hidden"
                asChild
              >
                <a href="#demos">
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative">Probar Tecnología Ahora</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
                </a>
              </Button>
            </motion.div>
            <motion.div variants={fadeUpSpring}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-8 py-6 text-lg border-2 border-white/20 hover:border-primary/50 bg-white/5 backdrop-blur-sm group"
                onClick={() => window.open(CAL_LINK, '_blank', 'noopener,noreferrer')}
              >
                <Calendar className="mr-2 w-5 h-5" />
                Agendar Consultoría
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
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
                whileHover={{ scale: 1.05 }}
                className="text-center cursor-default"
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-primary font-display"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 + i * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Logos Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <TechLogosBar 
              title="Integramos con las herramientas que ya usás"
              variant="default"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <motion.div 
            className="w-1.5 h-2.5 rounded-full bg-primary"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </WavyBackground>
  );
};
