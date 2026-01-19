import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Database, MessageSquare, FileText, Scale, BarChart3, Bot, Minus, Square, X } from 'lucide-react';
import { DemoCard } from './DemoCard';
import { DemoModal } from './DemoModal';

const demos = [
  {
    id: 'migration',
    title: 'Migración Inteligente de Bases de Datos',
    description: 'Mapeo y traslado de SQL masivo con razonamiento de IA. Detecta esquemas, resuelve conflictos y ejecuta migraciones en segundos.',
    icon: Database,
    badge: 'Flagship Product',
    isFlagship: true,
    demoUrl: '/demos/migracion-db.html',
  },
  {
    id: 'whatsapp',
    title: 'Agente de Ventas WhatsApp',
    description: 'Bot inteligente que cierra ventas 24/7 con personalidad de marca.',
    icon: MessageSquare,
    demoUrl: '/demos/hubdemos.html',
  },
  {
    id: 'analytics',
    title: 'Dashboard Analytics IA',
    description: 'Métricas en tiempo real con insights predictivos y alertas inteligentes.',
    icon: BarChart3,
    isLocked: true,
    demoUrl: '',
  },
  {
    id: 'reports',
    title: 'Generador de Reportes',
    description: 'Transforma datos crudos en reportes ejecutivos con insights accionables.',
    icon: FileText,
    isLocked: true,
    demoUrl: '',
  },
  {
    id: 'contracts',
    title: 'Analizador de Contratos',
    description: 'IA que detecta cláusulas riesgosas y resume contratos en minutos.',
    icon: Scale,
    isLocked: true,
    demoUrl: '',
  },
  {
    id: 'custom-agent',
    title: 'Agente IA Personalizado',
    description: 'Entrena un agente con el conocimiento de tu empresa.',
    icon: Bot,
    isLocked: true,
    demoUrl: '',
  },
];

export const DemoHubSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeDemo, setActiveDemo] = useState<typeof demos[0] | null>(null);

  return (
    <section id="demos" ref={ref} className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-sm font-medium text-accent">Hub de Experiencias</span>
          </div>
          <h2 className="section-title mb-4">
            Probá Nuestra <span className="text-primary">Tecnología</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Demos interactivos para que experimentes el poder de la Automatización IA Argentina
          </p>
          <p className="text-sm text-muted-foreground mt-4 font-mono">
            ⚡ Demo limitada a 5 usos por día sin registro
          </p>
        </motion.div>

        {/* Demo Window Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="demo-window max-w-6xl mx-auto"
        >
          {/* Window Header */}
          <div className="demo-window-header">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-primary" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-background/50 rounded-lg px-4 py-1.5 text-xs text-muted-foreground font-mono max-w-md mx-auto text-center">
                hub.mostachia.com/experiencias
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Minus className="w-4 h-4" />
              <Square className="w-3 h-3" />
              <X className="w-4 h-4" />
            </div>
          </div>

          {/* Window Content */}
          <div id="demo-hub-container" className="p-6 md:p-8">
            {/* <!-- PEGAR CÓDIGO DEL HUB AQUÍ --> */}
            {/* Grilla de demos por defecto */}
            <div className="grid md:grid-cols-3 gap-6">
              {demos.map((demo, i) => (
                <motion.div
                  key={demo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className={demo.isFlagship ? 'md:col-span-2 md:row-span-2' : ''}
                >
                  <DemoCard
                    {...demo}
                    onTryDemo={() => setActiveDemo(demo)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <DemoModal
        isOpen={!!activeDemo}
        onClose={() => setActiveDemo(null)}
        demoUrl={activeDemo?.demoUrl || ''}
        title={activeDemo?.title || ''}
      />
    </section>
  );
};