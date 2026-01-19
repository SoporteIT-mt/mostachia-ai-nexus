import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layers, Building2, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const saasFeatures = [
  'Acceso a todas las herramientas SaaS',
  'Actualizaciones automáticas',
  'Soporte por chat',
  'Dashboard de métricas',
  'Integraciones básicas',
];

const enterpriseFeatures = [
  'Desarrollo de soluciones custom',
  'Migración de datos complejos',
  'Implementación in-company',
  'Consultor dedicado',
  'SLA garantizado 99.9%',
  'Capacitación del equipo',
];

export const BusinessModelSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="modelo" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/50 to-transparent" />
      
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            Dos Caminos, Un <span className="text-primary">Objetivo</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Elegí el modelo que mejor se adapte a tu etapa de crecimiento
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* SaaS Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
            
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Layers className="w-8 h-8 text-primary" />
              </div>

              <div className="mb-4">
                <span className="text-sm font-mono text-primary">AUTOMATIZACIÓN</span>
                <h3 className="text-2xl font-bold mt-1">SaaS</h3>
                <p className="text-muted-foreground mt-2">
                  Suscripción mensual. Acceso a herramientas estandarizadas. Ideal para PyMEs.
                </p>
              </div>

              <div className="space-y-3 my-8">
                {saasFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold font-mono">$99</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
                <Button className="w-full rounded-xl" variant="outline" asChild>
                  <a href="#demos">
                    Comenzar ahora
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Enterprise Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 relative overflow-hidden group border-2 border-primary/20"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute top-4 right-4">
              <span className="badge-flagship">Recomendado</span>
            </div>
            
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>

              <div className="mb-4">
                <span className="text-sm font-mono text-accent">CONSULTORÍA</span>
                <h3 className="text-2xl font-bold mt-1">Enterprise</h3>
                <p className="text-muted-foreground mt-2">
                  A medida. Desarrollo custom, implementación y soporte premium.
                </p>
              </div>

              <div className="space-y-3 my-8">
                {enterpriseFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold font-mono">Custom</span>
                  <span className="text-muted-foreground">/proyecto</span>
                </div>
                <Button className="w-full rounded-xl btn-glow" asChild>
                  <a href="#contacto">
                    Agendar reunión
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
