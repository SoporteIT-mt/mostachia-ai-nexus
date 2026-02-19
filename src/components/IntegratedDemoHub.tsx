import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Play, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BlurFade } from '@/components/ui/blur-fade';
import { BorderBeam } from '@/components/ui/border-beam';
import { CONFIG } from '@/config/constants';

const demos = [
  {
    id: 'migracion',
    label: '🔄 Migración de Datos',
    file: '/demos/migracion-db.html',
    description: 'Probá la herramienta que migra y valida bases de datos con IA. Cargá un esquema y mirá la magia.',
  },
  {
    id: 'resto',
    label: '🍽️ Analytics Restaurante',
    file: '/demos/resto.html',
    description: 'Consultá datos de ventas de un restaurante real. Escribí preguntas como "¿cuáles fueron los platos más vendidos?" y mirá las respuestas.',
  },
  {
    id: 'contable',
    label: '📊 Asistente Contable',
    file: '/demos/contable.html',
    description: 'Dashboard inteligente para estudios contables. Gestión de clientes, vencimientos y más.',
  },
];

export const IntegratedDemoHub = () => {
  const ref = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [iframeLoading, setIframeLoading] = useState(true);

  const activeDemo = demos[activeTab];

  const handleTabChange = (idx: number) => {
    if (idx === activeTab) return;
    setIframeLoading(true);
    setActiveTab(idx);
  };

  return (
    <section id="demos" ref={ref} className="py-24 md:py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <BlurFade className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Probá Nuestra Tecnología{' '}
            <span className="text-gradient-primary">en Vivo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Demos reales funcionando ahora mismo. Sin registro, sin compromiso, sin trucos.
          </p>
        </BlurFade>

        {/* Tabs with sliding underline */}
        <BlurFade delay={0.1} className="flex flex-wrap justify-center gap-2 mb-6">
          {demos.map((demo, idx) => (
            <button
              key={demo.id}
              onClick={() => handleTabChange(idx)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                idx === activeTab
                  ? 'border-primary/50 text-foreground'
                  : 'bg-white/[0.05] border-white/[0.1] text-muted-foreground hover:border-primary/30 hover:text-foreground'
              }`}
            >
              {idx === activeTab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full bg-primary/20 border border-primary/30 shadow-[0_0_20px_hsl(162_100%_39%/0.3)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{demo.label}</span>
            </button>
          ))}
        </BlurFade>

        {/* Demo description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeDemo.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="text-center text-sm text-muted-foreground max-w-xl mx-auto mb-6"
          >
            {activeDemo.description}
          </motion.p>
        </AnimatePresence>

        {/* Iframe viewer with BorderBeam */}
        <BlurFade delay={0.2}>
          <div className="relative max-w-5xl mx-auto rounded-2xl border border-white/[0.1] bg-white/[0.02] backdrop-blur-sm overflow-hidden">
            <BorderBeam size={200} duration={14} colorFrom="hsl(162 100% 50%)" colorTo="hsl(42 90% 70%)" />

            {/* Top bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-white/[0.03]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
              <span className="text-xs font-mono text-muted-foreground hidden sm:block">
                {activeDemo.file}
              </span>
              <a
                href={activeDemo.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Abrir en nueva pestaña</span>
              </a>
            </div>

            {/* Iframe */}
            <div className="relative min-h-[350px] md:min-h-[500px]">
              {iframeLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background/80 z-10">
                  <div className="w-10 h-10 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
                  <span className="text-sm text-muted-foreground">Cargando demo...</span>
                </div>
              )}
              <AnimatePresence mode="wait">
                <motion.iframe
                  key={activeDemo.id}
                  src={activeDemo.file}
                  className="w-full border-none min-h-[350px] md:min-h-[500px]"
                  loading="lazy"
                  title={activeDemo.label}
                  onLoad={() => setIframeLoading(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
            </div>
          </div>
        </BlurFade>

        {/* CTA card */}
        <BlurFade delay={0.4} className="mt-12 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/[0.1] border-l-4 border-l-primary">
            <div className="flex-1 text-center md:text-left">
              <p className="text-foreground font-display font-semibold text-lg mb-1">
                ¿Querés ver cómo se adaptaría a tu negocio?
              </p>
              <p className="text-sm text-muted-foreground">
                Te mostramos una demo personalizada con tus datos reales en una videollamada de 30 minutos.
              </p>
            </div>
            <Button className="btn-glow rounded-xl px-6 whitespace-nowrap" asChild>
              <a href={CONFIG.CALCOM_URL} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-2" />
                Agendar Demo Personalizada
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </BlurFade>

        {/* Video placeholder */}
        <BlurFade delay={0.5} className="mt-16 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold font-display mb-2">
            Mirá Cómo Funciona en <span className="text-gradient-primary">2 Minutos</span>
          </h3>
          <p className="text-muted-foreground mb-8">
            Un recorrido rápido por nuestros sistemas en acción.
          </p>

          <div className="relative aspect-video rounded-2xl bg-white/[0.03] border border-white/[0.1] overflow-hidden flex flex-col items-center justify-center gap-4 cursor-pointer group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 rounded-full bg-white/[0.08] border border-white/[0.15] flex items-center justify-center group-hover:bg-primary/20 transition-colors"
              >
                <Play className="w-8 h-8 text-muted-foreground ml-1 group-hover:text-primary transition-colors" />
              </motion.div>
              <span className="text-sm text-muted-foreground font-mono">▶ Ver demostración (2:30)</span>
              <span className="text-xs text-muted-foreground/60 mt-2">Próximamente</span>
              <a href="#demos" className="text-xs text-primary hover:underline mt-1">
                Mientras tanto, probá las demos en vivo arriba ↑
              </a>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};
