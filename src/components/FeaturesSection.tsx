import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Database, Bot, FileText, Scale, BarChart3, Zap, ArrowRight, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    id: 'migration',
    title: 'Migración Inteligente de Bases de Datos',
    description: 'Mapeo y traslado de SQL masivo con razonamiento de IA. Detecta esquemas, resuelve conflictos y ejecuta migraciones en segundos.',
    icon: Database,
    badge: 'Flagship',
    isFlagship: true,
    available: true,
    href: '/demos/migracion-db.html',
  },
  {
    id: 'analytics',
    title: 'Dashboard Analytics IA',
    description: 'Métricas en tiempo real con insights predictivos y alertas inteligentes para tomar decisiones basadas en datos.',
    icon: BarChart3,
    available: false,
  },
  {
    id: 'reports',
    title: 'Generador de Reportes',
    description: 'Transforma datos crudos en reportes ejecutivos con insights accionables y visualizaciones profesionales.',
    icon: FileText,
    available: false,
  },
  {
    id: 'contracts',
    title: 'Analizador de Contratos',
    description: 'IA que detecta cláusulas riesgosas, inconsistencias y resume contratos legales en minutos.',
    icon: Scale,
    available: false,
  },
  {
    id: 'automation',
    title: 'Automatización de Workflows',
    description: 'Conecta tus herramientas y automatiza procesos repetitivos con flujos inteligentes.',
    icon: Zap,
    available: false,
  },
  {
    id: 'custom-agent',
    title: 'Agente IA Personalizado',
    description: 'Entrena un agente con el conocimiento específico de tu empresa para atención y soporte.',
    icon: Bot,
    available: false,
  },
];

export const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="funcionalidades" ref={ref} className="py-32 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Funcionalidades</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Herramientas de <span className="text-gradient-primary">Automatización IA</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Suite completa de soluciones para transformar tu operación empresarial
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className={`group relative ${feature.isFlagship ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className={`
                  relative h-full p-6 rounded-2xl border transition-all duration-300
                  ${feature.isFlagship 
                    ? 'glass-card border-primary/30 hover:border-primary/50' 
                    : 'glass-card border-white/10 hover:border-white/20'
                  }
                  ${!feature.available && !feature.isFlagship ? 'opacity-60' : ''}
                `}>
                  {/* Glow effect for flagship */}
                  {feature.isFlagship && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                  
                  {/* Badge */}
                  {feature.badge && (
                    <div className="absolute -top-3 left-6">
                      <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-full shadow-glow">
                        {feature.badge}
                      </span>
                    </div>
                  )}

                  {/* Lock for unavailable */}
                  {!feature.available && (
                    <div className="absolute top-4 right-4">
                      <Lock className="w-4 h-4 text-muted-foreground" />
                    </div>
                  )}

                  <div className="relative z-10">
                    <div className={`
                      w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300
                      ${feature.isFlagship 
                        ? 'bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow' 
                        : 'bg-white/5 text-foreground/60 group-hover:bg-white/10'
                      }
                    `}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-xl font-bold mb-2 font-display">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {feature.description}
                    </p>

                    {feature.available ? (
                      <Button
                        variant="ghost"
                        className="p-0 h-auto text-primary hover:text-primary/80 group/btn"
                        asChild
                      >
                        <a href={feature.href} target="_blank" rel="noopener noreferrer">
                          Probar ahora
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    ) : (
                      <span className="text-sm text-muted-foreground/60 italic">
                        Próximamente
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
