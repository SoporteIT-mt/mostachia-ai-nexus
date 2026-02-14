import { useState } from 'react';
import { ArrowRight, Cpu, BarChart3, Bot, Zap, Database, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BlurFade } from '@/components/ui/blur-fade';
import { BorderBeam } from '@/components/ui/border-beam';
import { CONFIG } from '@/config/constants';

const servicios = [
  {
    id: 'dashboards',
    icon: BarChart3,
    badge: '⭐ Más Popular',
    title: 'Dashboards Inteligentes con IA',
    description: 'Hacé preguntas sobre tu negocio en lenguaje natural y recibí dashboards interactivos con gráficos, KPIs y tablas.',
    tech: ['MySQL', 'SQL Server', 'MongoDB', 'PostgreSQL'],
    cta: { text: 'Ver Demo en Vivo', href: '#demos' },
    preview: {
      type: 'dashboard',
      metrics: [
        { label: 'Ventas Hoy', value: '$48.2K', change: '+12%' },
        { label: 'Clientes Activos', value: '1,847', change: '+5%' },
        { label: 'Tickets Resueltos', value: '94%', change: '+3%' },
      ],
    },
  },
  {
    id: 'agentes',
    icon: Bot,
    title: 'Agentes de IA para WhatsApp',
    description: 'Atención al cliente, analytics y soporte 24/7. El agente se conecta a tus datos reales y resuelve consultas.',
    tech: ['GPT-4', 'Claude', 'RAG', 'n8n'],
    cta: { text: 'Agendar Demo', href: CONFIG.CALCOM_URL, external: true },
    preview: {
      type: 'chat',
      messages: [
        { role: 'user', text: '¿Cuántas ventas tuve ayer?' },
        { role: 'bot', text: 'Ayer registraste 47 ventas por $12,340. Un 15% más que el martes.' },
        { role: 'user', text: '¿Cuál fue el producto más vendido?' },
      ],
    },
  },
  {
    id: 'automatizacion',
    icon: Zap,
    title: 'Automatización de Procesos',
    description: 'Conectamos tus sistemas y eliminamos tareas manuales. Leads, inventario, facturación y más.',
    tech: ['n8n', 'Make', 'APIs REST', 'Webhooks'],
    cta: { text: 'Consultar', href: CONFIG.CALCOM_URL, external: true },
    preview: {
      type: 'flow',
      steps: ['Lead ingresa', 'CRM actualizado', 'Email enviado', 'Slack notificado'],
    },
  },
  {
    id: 'migracion',
    icon: Database,
    badge: '🎮 Demo Interactiva',
    title: 'Migración de Bases de Datos',
    description: 'Migramos, conectamos y optimizamos tus bases de datos. Validación automática con IA para cero errores.',
    tech: ['MySQL', 'SQL Server', 'MongoDB', 'Supabase'],
    cta: { text: 'Probar Demo', href: '#demos' },
    preview: {
      type: 'migration',
      from: 'MySQL 5.7',
      to: 'PostgreSQL 16',
      progress: 87,
    },
  },
];

// Mini preview components
const DashboardPreview = ({ metrics }: { metrics: { label: string; value: string; change: string }[] }) => (
  <div className="space-y-2">
    {metrics.map((m, i) => (
      <motion.div
        key={m.label}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.15 }}
        className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.06]"
      >
        <span className="text-xs text-muted-foreground">{m.label}</span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-foreground font-mono">{m.value}</span>
          <span className="text-[10px] font-mono text-primary">{m.change}</span>
        </div>
      </motion.div>
    ))}
  </div>
);

const ChatPreview = ({ messages }: { messages: { role: string; text: string }[] }) => (
  <div className="space-y-2">
    {messages.map((m, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2 }}
        className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
      >
        <div className={`max-w-[85%] px-3 py-2 rounded-xl text-xs leading-relaxed ${
          m.role === 'user'
            ? 'bg-primary/20 text-foreground border border-primary/20'
            : 'bg-white/[0.06] text-muted-foreground border border-white/[0.08]'
        }`}>
          {m.text}
        </div>
      </motion.div>
    ))}
  </div>
);

const FlowPreview = ({ steps }: { steps: string[] }) => (
  <div className="flex items-center gap-1 flex-wrap">
    {steps.map((step, i) => (
      <motion.div
        key={step}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.12 }}
        className="flex items-center gap-1"
      >
        <div className="px-2.5 py-1.5 rounded-lg bg-white/[0.06] border border-white/[0.08] text-[10px] font-mono text-muted-foreground whitespace-nowrap">
          {step}
        </div>
        {i < steps.length - 1 && <ArrowRight className="w-3 h-3 text-primary/50 flex-shrink-0" />}
      </motion.div>
    ))}
  </div>
);

const MigrationPreview = ({ from, to, progress }: { from: string; to: string; progress: number }) => (
  <div className="space-y-3">
    <div className="flex items-center justify-between text-xs">
      <span className="font-mono text-muted-foreground">{from}</span>
      <ArrowRight className="w-3.5 h-3.5 text-primary" />
      <span className="font-mono text-primary">{to}</span>
    </div>
    <div className="relative h-2 rounded-full bg-white/[0.06] overflow-hidden">
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-accent"
        initial={{ width: '0%' }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />
    </div>
    <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
      <span>Tablas: 24/28</span>
      <span className="text-primary">{progress}% completado</span>
    </div>
  </div>
);

const PreviewRenderer = ({ preview }: { preview: any }) => {
  if (preview.type === 'dashboard') return <DashboardPreview metrics={preview.metrics} />;
  if (preview.type === 'chat') return <ChatPreview messages={preview.messages} />;
  if (preview.type === 'flow') return <FlowPreview steps={preview.steps} />;
  if (preview.type === 'migration') return <MigrationPreview from={preview.from} to={preview.to} progress={preview.progress} />;
  return null;
};

export const ServiciosSection = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section id="servicios" className="py-28 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <BlurFade className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Lo Que <span className="text-gradient-primary">Hacemos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones de IA que se conectan a tus datos reales y generan resultados medibles.
          </p>
        </BlurFade>

        {/* Split layout: tabs left, preview right */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-6 lg:gap-8">
          {/* Left: service cards as selectable list */}
          <div className="space-y-3">
            {servicios.map((s, i) => {
              const Icon = s.icon;
              const isActive = activeCard === i;
              return (
                <BlurFade key={s.id} delay={i * 0.08}>
                  <motion.button
                    onClick={() => setActiveCard(i)}
                    className={`relative w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                      isActive
                        ? 'bg-white/[0.07] border-primary/40 shadow-lg shadow-primary/5'
                        : 'bg-white/[0.03] border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.05]'
                    }`}
                    whileHover={{ x: isActive ? 0 : 4 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {/* Badge */}
                    {s.badge && (
                      <span className={`absolute -top-2.5 right-4 px-2.5 py-0.5 text-[10px] font-bold rounded-full border ${
                        s.id === 'dashboards'
                          ? 'bg-primary/20 text-primary border-primary/30'
                          : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                      }`}>
                        {s.badge}
                      </span>
                    )}

                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive ? 'bg-primary/20 text-primary' : 'bg-white/[0.06] text-muted-foreground'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-sm font-semibold font-display mb-1 transition-colors ${
                          isActive ? 'text-foreground' : 'text-foreground/80'
                        }`}>
                          {s.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                          {s.description}
                        </p>
                        <div className="flex items-center gap-1.5 mt-2">
                          <Cpu className="w-3 h-3 text-muted-foreground/50 flex-shrink-0" />
                          <span className="text-[10px] font-mono text-muted-foreground/60 truncate">
                            {s.tech.join(' · ')}
                          </span>
                        </div>
                      </div>
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="w-1 h-8 rounded-full bg-primary self-center flex-shrink-0"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </div>
                  </motion.button>
                </BlurFade>
              );
            })}
          </div>

          {/* Right: interactive preview panel */}
          <BlurFade delay={0.2}>
            <div className="relative rounded-2xl border border-white/[0.1] bg-white/[0.03] backdrop-blur-sm overflow-hidden h-full min-h-[400px] flex flex-col">
              <BorderBeam size={150} duration={12} />

              {/* Header bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.08] bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-accent/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/50" />
                </div>
                <span className="text-[10px] font-mono text-muted-foreground/60">
                  preview — {servicios[activeCard].id}.mostachia.ai
                </span>
                <div className="flex items-center gap-1 text-[10px] text-primary/60">
                  <Play className="w-3 h-3" />
                  <span>Live</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={servicios[activeCard].id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex flex-col"
                  >
                    {/* Preview title */}
                    <div className="mb-5">
                      <h4 className="text-lg font-display font-semibold text-foreground mb-1">
                        {servicios[activeCard].title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Vista previa interactiva
                      </p>
                    </div>

                    {/* Interactive preview */}
                    <div className="flex-1 flex items-center">
                      <div className="w-full">
                        <PreviewRenderer preview={servicios[activeCard].preview} />
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-6 pt-4 border-t border-white/[0.06]">
                      <a
                        href={servicios[activeCard].cta.href}
                        target={servicios[activeCard].cta.external ? '_blank' : undefined}
                        rel={servicios[activeCard].cta.external ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                      >
                        {servicios[activeCard].cta.text}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </BlurFade>
        </div>

        {/* CTA Banner */}
        <BlurFade delay={0.4} className="mt-14 max-w-6xl mx-auto">
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
