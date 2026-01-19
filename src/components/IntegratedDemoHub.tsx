import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Search, ExternalLink, ArrowRight, Utensils, PieChart, Leaf, X } from 'lucide-react';

const demos = [
  {
    id: 'hub',
    title: 'Hub de Experiencias',
    desc: 'Accede al catálogo completo de nuestras demos interactivas. Explora soluciones para diferentes industrias.',
    icon: Sparkles,
    tag: 'Plataforma',
    file: '/demos/hubdemos.html',
  },
  {
    id: 'migration',
    title: 'Migración Inteligente',
    desc: 'Migración SQL masiva con razonamiento de IA. Detecta esquemas, resuelve conflictos y ejecuta en segundos.',
    icon: Search,
    tag: 'Database',
    file: '/demos/migracion-db.html',
  },
  {
    id: 'resto',
    title: 'Agente Restaurante',
    desc: 'Bot de WhatsApp para restaurantes: menú del día, reservas y delivery automático 24/7.',
    icon: Utensils,
    tag: 'Gastronomía',
    file: '/demos/resto.html',
  },
  {
    id: 'contable',
    title: 'Asistente Contable',
    desc: 'Dashboard inteligente para estudios contables: vencimientos, clientes y automatización de tareas.',
    icon: PieChart,
    tag: 'Finanzas',
    file: '/demos/contable.html',
  },
  {
    id: 'analytics',
    title: 'Analytics IA',
    desc: 'Dashboard de métricas en tiempo real con insights predictivos generados por inteligencia artificial.',
    icon: Leaf,
    tag: 'Analytics',
    file: '/demos/demo3.html',
  },
];

const categories = ['Todos', 'Plataforma', 'Database', 'Gastronomía', 'Finanzas', 'Analytics'];

export const IntegratedDemoHub = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerUrl, setViewerUrl] = useState('');
  const [viewerTitle, setViewerTitle] = useState('');

  const filteredDemos = demos.filter((demo) => {
    const matchesSearch = demo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      demo.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      demo.tag.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'Todos' || demo.tag === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const openViewer = (file: string, title: string) => {
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
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Hub de Demos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Hub de <span className="text-gradient-primary">Innovación</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explorá nuestras demos interactivas y descubrí el potencial de la automatización IA
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-12 mb-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary font-display">{demos.length}</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Demos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary font-display">{categories.length - 1}</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Categorías</div>
          </div>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-12"
        >
          {/* Search */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Buscar demo, cliente o tecnología..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 pl-12 py-4 rounded-2xl glass-card border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'glass-card border border-white/10 text-muted-foreground hover:border-primary/30 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Demo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {filteredDemos.map((demo, i) => {
            const Icon = demo.icon;
            return (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                onClick={() => openViewer(demo.file, demo.title)}
                className="group cursor-pointer"
              >
                <div className="relative h-full p-6 rounded-2xl glass-card border border-white/10 hover:border-primary/30 transition-all duration-300 overflow-hidden">
                  {/* Shine effect */}
                  <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:left-[100%] transition-all duration-700" />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider group-hover:bg-primary group-hover:text-primary-foreground transition-all">
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
                      <span className="text-primary font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                        Explorar <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {filteredDemos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No se encontraron demos con ese criterio</p>
          </div>
        )}
      </div>

      {/* Viewer Modal */}
      <div className={`fixed inset-0 z-[100] transition-transform duration-500 ${viewerOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="h-full flex flex-col bg-background">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 glass-card border-b border-white/10">
            <button
              onClick={closeViewer}
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-white/10 hover:border-primary/30 transition-all text-sm font-medium"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Volver
            </button>
            <span className="font-bold font-display">{viewerTitle}</span>
            <div className="flex items-center gap-2">
              <a
                href={viewerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-sm font-medium"
              >
                Abrir en nueva pestaña <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={closeViewer}
                className="p-2 rounded-xl glass-card border border-white/10 hover:border-destructive/30 hover:text-destructive transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Iframe */}
          <div className="flex-1 bg-white">
            {viewerUrl && (
              <iframe
                src={viewerUrl}
                className="w-full h-full border-none"
                title={viewerTitle}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
