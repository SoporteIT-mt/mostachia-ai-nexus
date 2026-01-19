import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ConstellationBackground } from './ConstellationBackground';

const logos = [
  { name: 'TechCorp', width: 100 },
  { name: 'DataFlow', width: 90 },
  { name: 'CloudScale', width: 110 },
  { name: 'AIStack', width: 85 },
  { name: 'Nexus', width: 95 },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/90" />
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(160 100% 39% / 0.2), transparent)',
        }}
      />
      {/* Accent glow */}
      <div 
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(262 84% 58% / 0.15), transparent 70%)',
        }}
      />
      <ConstellationBackground />

      <div className="container relative z-10 mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Tu nuevo sistema operativo empresarial
            </span>
          </motion.div>

          {/* Main Heading with SEO */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] font-display"
          >
            Automatización IA Argentina{' '}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                para Empresas que Escalan
              </span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute bottom-2 left-0 h-3 bg-primary/20 -z-0"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-body"
          >
            Transformamos tu empresa combinando{' '}
            <span className="text-foreground font-medium">Inteligencia Artificial</span> con estrategia humana.
            Migración SQL automatizada, agentes IA y consultoría de élite.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              size="lg"
              className="btn-glow rounded-xl px-8 py-6 text-lg group"
              asChild
            >
              <a href="#demos">
                Probar Tecnología Ahora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-xl px-8 py-6 text-lg border-2 border-primary/30 hover:border-primary/50 group"
              asChild
            >
              <a href="#contacto">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Empezar Transformación
              </a>
            </Button>
          </motion.div>

          {/* Mini Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-xl mx-auto mb-16"
          >
            {[
              { value: '$12M+', label: 'Ahorrados' },
              { value: '450+', label: 'Bases Migradas' },
              { value: '99.9%', label: 'Uptime SLA' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="stat-number mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">
            Tecnología preparada para escalar con:
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap opacity-40 grayscale hover:opacity-60 hover:grayscale-0 transition-all duration-500">
            {logos.map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                className="h-8 flex items-center"
              >
                <div 
                  className="font-display font-bold text-lg text-foreground/60"
                  style={{ width: logo.width }}
                >
                  {logo.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};