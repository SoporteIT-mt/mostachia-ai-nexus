import { ArrowRight, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MagicCard } from '@/components/ui/magic-card';
import { BlurFade } from '@/components/ui/blur-fade';
import { Spotlight } from '@/components/ui/spotlight';
import { BorderBeam } from '@/components/ui/border-beam';
import { CONFIG } from '@/config/constants';

const servicios = [
  {
    id: 'dashboards',
    emoji: '📊',
    badge: { text: '⭐ Más Popular', color: 'bg-primary/20 text-primary border-primary/30 shadow-[0_0_12px_hsl(162_100%_39%/0.3)]' },
    title: 'Dashboards Inteligentes con IA',
    description: 'Hacé preguntas sobre tu negocio en lenguaje natural y recibí dashboards interactivos con gráficos, KPIs y tablas. Descargables en PDF.',
    tech: 'MySQL · SQL Server · MongoDB · PostgreSQL',
    cta: { text: 'Ver Demo en Vivo', href: '#demos' },
    bento: true, // spans 2 cols
  },
  {
    id: 'agentes',
    emoji: '🤖',
    title: 'Agentes de IA para WhatsApp',
    description: 'Atención al cliente, analytics y soporte 24/7. El agente se conecta a tus datos reales y resuelve consultas automáticamente por WhatsApp.',
    tech: 'GPT-4 · Claude · RAG · n8n',
    cta: { text: 'Agendar Demo', href: CONFIG.CALCOM_URL, external: true },
  },
  {
    id: 'automatizacion',
    emoji: '⚡',
    title: 'Automatización de Procesos',
    description: 'Conectamos tus sistemas y eliminamos tareas manuales. Seguimiento de leads, gestión de inventario, facturación, marketing y más.',
    tech: 'n8n · Make · APIs REST · Webhooks',
    cta: { text: 'Consultar', href: CONFIG.CALCOM_URL, external: true },
  },
  {
    id: 'migracion',
    emoji: '🔄',
    badge: { text: '🎮 Demo Interactiva', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
    title: 'Migración de Bases de Datos con IA',
    description: 'Migramos, conectamos y optimizamos tus bases de datos existentes. Validación automática con IA para cero errores.',
    tech: 'MySQL · SQL Server · MongoDB · Supabase',
    cta: { text: 'Probar Demo', href: '#demos' },
  },
];

export const ServiciosSection = () => {
  return (
    <section id="servicios" className="py-28 md:py-32 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with Spotlight */}
        <div className="relative text-center mb-16">
          <Spotlight size={700} fill="hsl(162 100% 39% / 0.10)" />
          <BlurFade>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Lo Que <span className="text-gradient-primary">Hacemos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluciones de IA que se conectan a tus datos reales y generan resultados medibles.
            </p>
          </BlurFade>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {servicios.map((s, i) => (
            <BlurFade key={s.id} delay={i * 0.1} className={s.bento ? 'md:col-span-2' : ''}>
              <motion.div
                whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, duration: 0.3 } }}
                className="group relative h-full"
              >
                <MagicCard className="h-full">
                  <div className="relative p-6 md:p-8">
                    {/* Badge */}
                    {s.badge && (
                      <span className={`absolute -top-3 right-6 px-3 py-1 text-xs font-bold rounded-full border ${s.badge.color}`}>
                        {s.badge.text}
                      </span>
                    )}

                    {/* Emoji icon with glow */}
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 text-2xl group-hover:scale-110 transition-transform duration-300 pulse-glow">
                      {s.emoji}
                    </div>

                    <h3 className="text-xl font-semibold font-display mb-3 group-hover:text-primary transition-colors">
                      {s.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {s.description}
                    </p>

                    {/* Tech detail */}
                    <div className="flex items-center gap-2 mb-5">
                      <Cpu className="w-3.5 h-3.5 text-muted-foreground/60 flex-shrink-0" />
                      <span className="text-xs font-mono text-muted-foreground/70">{s.tech}</span>
                    </div>

                    {/* CTA */}
                    <a
                      href={s.cta.href}
                      target={s.cta.external ? '_blank' : undefined}
                      rel={s.cta.external ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                    >
                      {s.cta.text}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </MagicCard>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* CTA Banner with BorderBeam */}
        <BlurFade delay={0.5} className="mt-12 max-w-5xl mx-auto">
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 p-6 md:p-8 rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/[0.1]">
            <BorderBeam size={150} duration={10} />
            <p className="text-foreground font-display font-semibold text-lg text-center sm:text-left">
              ¿No encontrás lo que buscás?{' '}
              <span className="text-muted-foreground font-normal text-base">Hacemos desarrollos a medida.</span>
            </p>
            <Button className="btn-glow rounded-xl px-6 whitespace-nowrap" asChild>
              <a href={CONFIG.CALCOM_URL} target="_blank" rel="noopener noreferrer">
                Contanos tu proyecto
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};
