import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight, Sparkles, Crown, Building2, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Depth3DCard } from './ParallaxEffects';

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Para emprendedores que inician.',
    price: 49,
    period: '/mes',
    icon: Rocket,
    features: [
      'Acceso al Hub de Demos básico',
      '500 automatizaciones/mes',
      'Soporte por comunidad',
      'Templates de n8n básicos',
      '1 usuario',
    ],
    cta: 'Comenzar Ahora',
    variant: 'default' as const,
  },
  {
    id: 'growth',
    name: 'Growth',
    description: 'Para PyMEs en expansión.',
    price: 149,
    period: '/mes',
    icon: Sparkles,
    badge: 'Más Popular',
    isHighlighted: true,
    features: [
      'Todo lo de Starter +',
      '5.000 automatizaciones/mes',
      'Agentes de IA personalizados',
      'Soporte prioritario',
      'Migrador SQL (versión ligera)',
      '3 usuarios',
    ],
    cta: 'Elegir Growth',
    variant: 'glow' as const,
  },
  {
    id: 'scale',
    name: 'Scale',
    description: 'Para empresas consolidadas.',
    price: 299,
    period: '/mes',
    icon: Crown,
    features: [
      'Todo lo de Growth +',
      'Automatizaciones ilimitadas',
      'API Access completo',
      'Dashboard Analytics avanzado',
      'Consultoría mensual 30 min',
      '10 usuarios',
    ],
    cta: 'Escalar Ahora',
    variant: 'default' as const,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Transformación total para corporaciones.',
    price: null,
    period: '',
    icon: Building2,
    isEnterprise: true,
    features: [
      'Desarrollo a medida',
      'Migración DB Legacy compleja',
      'SLA 99.9% garantizado',
      'Ingeniero dedicado',
      'Implementación In-Company',
      'Capacitación de equipos',
    ],
    cta: 'Agendar Auditoría',
    variant: 'enterprise' as const,
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
      delay: 0.1 + i * 0.1,
    },
  }),
};

export const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="precios" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-6">
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
            <span className="text-sm font-medium text-primary">Precios Transparentes</span>
          </motion.div>
          <h2 className="section-title mb-4">
            Tu Nuevo <span className="text-primary">Sistema Operativo</span> Empresarial
          </h2>
          <p className="section-subtitle mx-auto">
            Elegí el plan que mejor se adapte a tu etapa de crecimiento
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-7xl mx-auto pt-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              data-plan={plan.id}
            >
              <Depth3DCard 
                depth={8}
                className={`relative h-full ${
                  plan.isHighlighted 
                    ? 'pricing-highlight' 
                    : plan.isEnterprise 
                      ? 'pricing-enterprise' 
                      : 'glass-card hover:border-primary/30 shadow-lg dark:shadow-none'
                } p-6 flex flex-col group cursor-pointer`}
            >
              {/* Badge - moved outside overflow */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <motion.span 
                    className="badge-popular whitespace-nowrap"
                    animate={{ 
                      boxShadow: ['0 0 20px rgba(0,200,150,0.3)', '0 0 30px rgba(0,200,150,0.5)', '0 0 20px rgba(0,200,150,0.3)']
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {plan.badge}
                  </motion.span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <motion.div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    plan.isHighlighted 
                      ? 'bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30' 
                      : plan.isEnterprise
                        ? 'bg-gradient-to-br from-accent to-primary shadow-lg shadow-accent/30'
                        : 'bg-primary/10 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30'
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <plan.icon className={`w-6 h-6 ${
                    plan.isHighlighted || plan.isEnterprise ? 'text-white' : 'text-primary group-hover:text-white'
                  }`} />
                </motion.div>
                <h3 className="text-xl font-bold font-display">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                {plan.price !== null ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold font-mono">${plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                ) : (
                  <div className="text-2xl font-bold font-mono text-accent">
                    Personalizado
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="space-y-3 flex-1 mb-6">
                {plan.features.map((feature, j) => (
                  <motion.div 
                    key={j} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 + j * 0.05 }}
                  >
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.isHighlighted 
                        ? 'bg-primary/20' 
                        : plan.isEnterprise
                          ? 'bg-accent/20'
                          : 'bg-primary/10'
                    }`}>
                      <Check className={`w-3 h-3 ${
                        plan.isEnterprise ? 'text-accent' : 'text-primary'
                      }`} />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <Button
                className={`w-full rounded-xl transition-all duration-300 ${
                  plan.isHighlighted 
                    ? 'btn-glow' 
                    : plan.isEnterprise
                      ? 'bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/30'
                      : 'shadow-md hover:shadow-lg'
                }`}
                variant={plan.isHighlighted || plan.isEnterprise ? 'default' : 'outline'}
                asChild
              >
                <a href={plan.isEnterprise ? '#contacto' : '#demos'}>
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              </Depth3DCard>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            ✓ Sin contratos anuales obligatorios &nbsp;·&nbsp; ✓ Cancela cuando quieras &nbsp;·&nbsp; ✓ Soporte en español
          </p>
        </motion.div>
      </div>
    </section>
  );
};
