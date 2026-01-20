import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, ArrowRight, Utensils, PieChart, Leaf, X, Lock, Database, MessageCircle, BarChart3, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    id: 'ecommerce',
    title: 'Automatización E-commerce',
    desc: 'Gestión automatizada de inventario, pedidos y atención al cliente con IA integrada.',
    icon: ShoppingCart,
    tag: 'Ventas',
    file: '/demos/demo3.html',
    isLocked: true,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.1 + i * 0.08,
    },
  }),
};

export const IntegratedDemoHub = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerUrl, setViewerUrl] = useState('');
  const [viewerTitle, setViewerTitle] = useState('');

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('precios');
    if (pricingSection) {
      // Find the Growth plan element
      const growthPlan = pricingSection.querySelector('[data-plan="growth"]');
      pricingSection.scrollIntoView({ behavior: 'smooth' });
      // Add highlight effect
      setTimeout(() => {
        if (growthPlan) {
          growthPlan.classList.add('ring-2', 'ring-primary', 'ring-offset-2', 'ring-offset-background');
          setTimeout(() => {
            growthPlan.classList.remove('ring-2', 'ring-primary', 'ring-offset-2', 'ring-offset-background');
          }, 2000);
        }
      }, 800);
    }
  };

  const openViewer = (file: string, title: string, isLocked: boolean) => {
    if (isLocked) {
      scrollToPricing();
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
    <section id="demos" ref={ref} className="py-24 md:py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Demos Interactivas</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            Hub de <span className="text-gradient-primary">Innovación</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Probá nuestras herramientas en vivo. Sin registro, sin compromiso.
          </p>
        </motion.div>

        {/* Demo Grid - 6 cards, 2x3 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
          {demos.map((demo, i) => {
            const Icon = demo.icon;
            return (
              <motion.div
                key={demo.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ 
                  y: demo.isLocked ? -4 : -8, 
                  transition: { duration: 0.25, type: "spring", stiffness: 300 } 
                }}
                onClick={() => openViewer(demo.file, demo.title, demo.isLocked)}
                className="group cursor-pointer"
              >
                <div className={`relative h-full p-6 rounded-2xl border transition-all duration-300 overflow-hidden ${
                  demo.isLocked 
                    ? 'glass-card border-border/50 dark:border-white/5' 
                    : 'glass-card border-primary/20 hover:border-primary/40 hover:shadow-[0_0_50px_-15px] hover:shadow-primary/40 dark:hover:shadow-primary/30'
                }`}>
                  {/* Locked overlay - improved design */}
                  {demo.isLocked && (
                    <div className="absolute inset-0 bg-background/70 dark:bg-background/60 backdrop-blur-[3px] z-20 flex flex-col items-center justify-center gap-2 transition-all group-hover:bg-background/80 dark:group-hover:bg-background/70">
                      <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="w-14 h-14 rounded-full bg-muted/80 dark:bg-white/10 flex items-center justify-center mb-1 shadow-lg"
                      >
                        <Lock className="w-6 h-6 text-muted-foreground" />
                      </motion.div>
                      <span className="text-base font-bold text-foreground">Plan Growth</span>
                      <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Ver planes <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  )}
                  
                  {/* Shine effect */}
                  <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 dark:via-white/5 to-transparent group-hover:left-[100%] transition-all duration-700" />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <motion.div 
                        className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          demo.isLocked 
                            ? 'bg-muted/50 dark:bg-white/5 text-muted-foreground' 
                            : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-[-5deg] group-hover:shadow-lg group-hover:shadow-primary/30'
                        }`}
                        whileHover={!demo.isLocked ? { scale: 1.1, rotate: -5 } : {}}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                        demo.isLocked 
                          ? 'bg-muted/50 dark:bg-white/5 text-muted-foreground' 
                          : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground'
                      }`}>
                        {demo.tag}
                      </span>
                    </div>

                    <h3 className={`text-xl font-bold mb-2 font-display transition-colors ${
                      demo.isLocked ? '' : 'group-hover:text-primary'
                    }`}>
                      {demo.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {demo.desc}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50 dark:border-white/5">
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
        </div>

        {/* CTA after grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            ¿Querés acceso a todas las herramientas?
          </p>
          <Button 
            variant="outline" 
            className="rounded-xl px-6"
            onClick={scrollToPricing}
          >
            Ver planes completos
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>

      {/* Viewer Modal */}
      <div className={`fixed inset-0 z-[100] transition-transform duration-500 ${viewerOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="h-full flex flex-col bg-background">
          <div className="flex items-center justify-between px-6 py-4 glass-card border-b border-border dark:border-white/10">
            <button onClick={closeViewer} className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-border dark:border-white/10 hover:border-primary/30 transition-all text-sm font-medium">
              <ArrowRight className="w-4 h-4 rotate-180" /> Volver
            </button>
            <span className="font-bold font-display">{viewerTitle}</span>
            <button onClick={closeViewer} className="p-2 rounded-xl glass-card border border-border dark:border-white/10 hover:border-destructive/30 hover:text-destructive transition-all">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 bg-white dark:bg-white">
            {viewerUrl && <iframe src={viewerUrl} className="w-full h-full border-none" title={viewerTitle} />}
          </div>
        </div>
      </div>
    </section>
  );
};
