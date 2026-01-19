import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Search, ArrowRight, Utensils, PieChart, Leaf, X, Lock, Database, MessageCircle, BarChart3 } from 'lucide-react';

const demos = [
  {
    id: 'migration',
    title: 'Migración Inteligente',
    desc: 'Migración SQL masiva con razonamiento de IA. Detecta esquemas, resuelve conflictos y ejecuta en segundos.',
    icon: Database,
    tag: 'Database',
    file: '/demos/migracion-db.html',
    isLocked: false,
  },
  {
    id: 'resto',
    title: 'Agente Restaurante',
    desc: 'Bot de WhatsApp para restaurantes: menú del día, reservas y delivery automático 24/7.',
    icon: Utensils,
    tag: 'Gastronomía',
    file: '/demos/resto.html',
    isLocked: true,
  },
  {
    id: 'contable',
    title: 'Asistente Contable',
    desc: 'Dashboard inteligente para estudios contables: vencimientos, clientes y automatización.',
    icon: PieChart,
    tag: 'Finanzas',
    file: '/demos/contable.html',
    isLocked: true,
  },
  {
    id: 'analytics',
    title: 'Analytics IA',
    desc: 'Dashboard de métricas en tiempo real con insights predictivos generados por IA.',
    icon: BarChart3,
    tag: 'Analytics',
    file: '/demos/demo3.html',
    isLocked: true,
  },
  {
    id: 'whatsapp',
    title: 'Agente WhatsApp',
    desc: 'Atención al cliente 24/7 con IA conversacional que resuelve el 70% de consultas.',
    icon: MessageCircle,
    tag: 'Atención',
    file: '/demos/hubdemos.html',
    isLocked: true,
  },
  {
    id: 'sustainability',
    title: 'Dashboard Sustentable',
    desc: 'Monitoreo de métricas ESG y huella de carbono con reportes automáticos.',
    icon: Leaf,
    tag: 'ESG',
    file: '/demos/demo3.html',
    isLocked: true,
  },
];

export const IntegratedDemoHub = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerUrl, setViewerUrl] = useState('');
  const [viewerTitle, setViewerTitle] = useState('');

  const openViewer = (file: string, title: string, isLocked: boolean) => {
    if (isLocked) {
      // Scroll to pricing section (Growth plan)
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    setViewerUrl(file);
    setViewerTitle(title);
    setViewerOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeViewer = () => {
    setViewerOpen(false);
    document.body.style.overflow = '';
    setTimeout(() => {
      setViewerUrl('');
      setViewerTitle('');
    }, 300);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeViewer();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <section id="demos" ref={ref} className="py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Demos Interactivas</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-display mb-6">
            Hub de <span className="text-gradient-primary">Innovación</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Probá nuestras herramientas en vivo. Sin registro, sin compromiso.
          </p>
        </motion.div>

        {/* Demo Grid - 6 cards, 2x3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {demos.map((demo, i) => {
            const Icon = demo.icon;
            return (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                onClick={() => openViewer(demo.file, demo.title, demo.isLocked)}
                className="group cursor-pointer"
              >
                <div className={`relative h-full p-6 rounded-2xl glass-card border transition-all duration-300 overflow-hidden ${
                  demo.isLocked 
                    ? 'border-white/5 opacity-80' 
                    : 'border-primary/20 hover:border-primary/40 hover:shadow-[0_0_40px_-15px] hover:shadow-primary/30'
                }`}>
                  {/* Locked overlay */}
                  {demo.isLocked && (
                    <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] z-20 flex flex-col items-center justify-center gap-3">
                      <Lock className="w-8 h-8 text-muted-foreground" />
                      <span className="text-sm font-semibold text-muted-foreground">Plan Growth</span>
                      <span className="text-xs text-primary">Click para ver planes →</span>
                    </div>
                  )}
                  
                  {/* Shine effect */}
                  <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:left-[100%] transition-all duration-700" />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        demo.isLocked 
                          ? 'bg-white/5 text-muted-foreground' 
                          : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-[-5deg]'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                        demo.isLocked 
                          ? 'bg-white/5 text-muted-foreground' 
                          : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground'
                      }`}>
                        {demo.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-2 font-display group-hover:text-primary transition-colors">
                      {demo.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {demo.desc}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className={`font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all ${
                        demo.isLocked ? 'text-muted-foreground' : 'text-primary'
                      }`}>
                        {demo.isLocked ? 'Desbloquear' : 'Probar ahora'} <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Viewer Modal */}
      <div className={`fixed inset-0 z-[100] transition-transform duration-500 ${viewerOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="h-full flex flex-col bg-background">
          <div className="flex items-center justify-between px-6 py-4 glass-card border-b border-white/10">
            <button onClick={closeViewer} className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-white/10 hover:border-primary/30 transition-all text-sm font-medium">
              <ArrowRight className="w-4 h-4 rotate-180" /> Volver
            </button>
            <span className="font-bold font-display">{viewerTitle}</span>
            <button onClick={closeViewer} className="p-2 rounded-xl glass-card border border-white/10 hover:border-destructive/30 hover:text-destructive transition-all">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 bg-white">
            {viewerUrl && <iframe src={viewerUrl} className="w-full h-full border-none" title={viewerTitle} />}
          </div>
        </div>
      </div>
    </section>
  );
};
