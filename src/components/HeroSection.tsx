import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedGradientBackground } from './AnimatedGradientBackground';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedGradientBackground />

      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title - Centered and prominent */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] font-display mb-8"
          >
            <span className="block">Procesos Inteligentes,</span>
            <span className="block text-gradient-primary">Resultados Superiores.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Transformamos tu empresa combinando{' '}
            <span className="text-foreground font-medium">Inteligencia Artificial</span> con estrategia humana.
            Automatiza lo operativo, escala lo estratégico.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="btn-glow rounded-xl px-8 py-6 text-lg group"
              asChild
            >
              <a href="#demos">
                Probar Tecnología
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-xl px-8 py-6 text-lg border-2 border-white/20 hover:border-primary/50 bg-white/5 backdrop-blur-sm group"
              asChild
            >
              <a href="#contacto">
                <Calendar className="mr-2 w-5 h-5" />
                Agendar Consultoría
              </a>
            </Button>
          </motion.div>

          {/* Minimal stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 flex items-center justify-center gap-12 md:gap-16"
          >
            {[
              { value: '$12M+', label: 'Ahorrados' },
              { value: '450+', label: 'Bases Migradas' },
              { value: '99.9%', label: 'Uptime' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary font-display">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-2.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};