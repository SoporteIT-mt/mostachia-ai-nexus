import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight, Sparkles, Crown, Building2, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

export const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="precios" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Precios Transparentes</span>
          </div>
          <h2 className="section-title mb-4">
            Tu Nuevo <span className="text-primary">Sistema Operativo</span> Empresarial
          </h2>
          <p className="section-subtitle mx-auto">
            Elegí el plan que mejor se adapte a tu etapa de crecimiento
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className={`relative ${
                plan.isHighlighted 
                  ? 'pricing-highlight' 
                  : plan.isEnterprise 
                    ? 'pricing-enterprise' 
                    : 'glass-card'
              } p-6 flex flex-col`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="badge-popular">{plan.badge}</span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  plan.isHighlighted 
                    ? 'bg-gradient-to-br from-primary to-accent' 
                    : plan.isEnterprise
                      ? 'bg-gradient-to-br from-accent to-primary'
                      : 'bg-primary/10'
                }`}>
                  <plan.icon className={`w-6 h-6 ${
                    plan.isHighlighted || plan.isEnterprise ? 'text-white' : 'text-primary'
                  }`} />
                </div>
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
                  <div key={j} className="flex items-start gap-3">
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
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                className={`w-full rounded-xl ${
                  plan.isHighlighted 
                    ? 'btn-glow' 
                    : plan.isEnterprise
                      ? 'bg-accent hover:bg-accent/90 text-white'
                      : ''
                }`}
                variant={plan.isHighlighted || plan.isEnterprise ? 'default' : 'outline'}
                asChild
              >
                <a href={plan.isEnterprise ? '#contacto' : '#demos'}>
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
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