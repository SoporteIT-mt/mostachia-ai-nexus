import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3, Megaphone, Image as ImageIcon, DollarSign, HeadphonesIcon,
  Mail, CheckCircle2, MessageSquare, Sparkles, TrendingUp, Users,
  Database, Send, Clock, Calendar, ArrowRight
} from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { BorderBeam } from '@/components/ui/border-beam';

const agentes = [
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Agente de Analytics & Dashboards',
    tagline: 'Tu negocio en tiempo real, sin tocar una planilla',
    description: 'Preguntale a tus datos como si le hablaras a una persona. Nuestro agente consulta tu base de datos en vivo, responde en lenguaje natural y genera dashboards interactivos con KPIs, gráficos y tablas.',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
  },
  {
    id: 'marketing',
    icon: Megaphone,
    title: 'Agente de Marketing',
    tagline: 'Tu estrategia ejecutándose sola',
    description: 'Analizá el rendimiento, planificá calendarios de contenido con datos reales de tu negocio, enviá campañas de email segmentadas y optimizá tus anuncios en automático.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
  },
  {
    id: 'contenido',
    icon: ImageIcon,
    title: 'Agente Creador de Contenido',
    tagline: 'Contenido de marca profesional en segundos',
    description: 'Creá posts, carruseles, videos de productos y avatares con IA usando tu identidad visual. Cero diseñador, cero tiempo perdido.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20',
  },
  {
    id: 'ventas',
    icon: DollarSign,
    title: 'Agente de Ventas',
    tagline: 'Tu vendedor más rápido, disponible 24/7',
    description: 'Calificá prospectos, agendá reuniones, gestioná pagos y seguimientos. Se integra con tu CRM para guiar al cliente hasta el cierre como un comercial de alto rendimiento.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20',
  },
  {
    id: 'soporte',
    icon: HeadphonesIcon,
    title: 'Agente de Soporte',
    tagline: 'Atención que no duerme y no se equivoca',
    description: 'Respondé consultas frecuentes, resolvé problemas y derivá casos complejos con memoria de conversación y el tono exacto de tu marca.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20',
  },
];

// ── Mockup: Analytics ──
const MockupAnalytics = () => {
  const metrics = [
    { label: 'Ventas Hoy', value: '$48.2K', change: '+12.4%', icon: TrendingUp, color: 'text-primary' },
    { label: 'Clientes', value: '1,847', change: '+5.2%', icon: Users, color: 'text-blue-400' },
    { label: 'Tickets OK', value: '94%', change: '+3.1%', icon: CheckCircle2, color: 'text-emerald-400' },
    { label: 'Leads', value: '127', change: '+8.7%', icon: Sparkles, color: 'text-amber-400' },
  ];
  const barData = [40, 65, 45, 80, 55, 92, 70];
  const days = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        {metrics.map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08]"
            >
              <div className="flex items-center gap-1.5 mb-1">
                <Icon className={`w-3 h-3 ${m.color}`} />
                <span className="text-[8px] text-muted-foreground uppercase tracking-wider">{m.label}</span>
              </div>
              <div className="text-sm font-bold font-mono text-foreground">{m.value}</div>
              <span className="text-[9px] font-mono text-primary">{m.change}</span>
            </motion.div>
          );
        })}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]"
      >
        <span className="text-[9px] text-muted-foreground mb-2 block">Ventas Semanal</span>
        <div className="flex items-end gap-1 h-16">
          {barData.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
              <motion.div
                className="w-full rounded-sm bg-gradient-to-t from-primary/60 to-primary"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.6 + i * 0.06, duration: 0.5, ease: 'easeOut' }}
              />
              <span className="text-[7px] text-muted-foreground/60">{days[i]}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// ── Mockup: Marketing ──
const MockupMarketing = () => {
  const campaigns = [
    { name: 'Email Bienvenida', status: 'Activa', sent: '2,340', open: '68%', color: 'text-primary' },
    { name: 'Promo Verano', status: 'Enviando', sent: '1,120', open: '45%', color: 'text-blue-400' },
    { name: 'Re-engagement', status: 'Programada', sent: '—', open: '—', color: 'text-muted-foreground' },
  ];
  return (
    <div className="space-y-3">
      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
        <div className="flex items-center gap-2 mb-3">
          <Mail className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-[10px] font-semibold text-foreground uppercase tracking-wider">Campañas Activas</span>
        </div>
        <div className="space-y-2">
          {campaigns.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="flex items-center justify-between px-2.5 py-2 rounded-lg bg-white/[0.02] border border-white/[0.05]"
            >
              <div>
                <span className="text-[10px] font-medium text-foreground block">{c.name}</span>
                <span className={`text-[8px] font-mono ${c.color}`}>{c.status}</span>
              </div>
              <div className="text-right">
                <span className="text-[9px] font-mono text-foreground block">{c.sent}</span>
                <span className="text-[8px] font-mono text-primary">{c.open} open</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="grid grid-cols-3 gap-2"
      >
        {[{ l: 'Enviados', v: '5,800' }, { l: 'Apertura', v: '52%' }, { l: 'Clicks', v: '18%' }].map((s, i) => (
          <div key={i} className="text-center p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
            <div className="text-xs font-bold font-mono text-foreground">{s.v}</div>
            <div className="text-[8px] text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// ── Mockup: Contenido ──
const MockupContent = () => {
  const items = [
    { type: 'Post IG', desc: 'Carrusel 5 slides - Pack Premium', status: 'Listo', color: 'text-purple-400' },
    { type: 'Video', desc: 'Reel producto 15s con avatar', status: 'Generando...', color: 'text-amber-400' },
    { type: 'Story', desc: 'Promo flash 24h', status: 'En cola', color: 'text-muted-foreground' },
  ];
  return (
    <div className="space-y-3">
      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
        <div className="flex items-center gap-2 mb-3">
          <ImageIcon className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-[10px] font-semibold text-foreground uppercase tracking-wider">Cola de Producción</span>
        </div>
        <div className="space-y-2">
          {items.map((item, i) => (
            <motion.div
              key={item.type}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="flex items-center justify-between px-2.5 py-2 rounded-lg bg-white/[0.02] border border-white/[0.05]"
            >
              <div>
                <span className="text-[10px] font-semibold text-foreground block">{item.type}</span>
                <span className="text-[8px] text-muted-foreground">{item.desc}</span>
              </div>
              <span className={`text-[8px] font-mono ${item.color}`}>{item.status}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex items-center gap-2 p-2.5 rounded-xl bg-purple-400/5 border border-purple-400/10"
      >
        <Sparkles className="w-3.5 h-3.5 text-purple-400" />
        <span className="text-[9px] text-foreground">IA generando contenido con tu brand kit...</span>
      </motion.div>
    </div>
  );
};

// ── Mockup: Ventas ──
const MockupSales = () => {
  const pipeline = [
    { stage: 'Prospecto', count: 42, pct: 100 },
    { stage: 'Calificado', count: 28, pct: 67 },
    { stage: 'Propuesta', count: 15, pct: 36 },
    { stage: 'Cierre', count: 8, pct: 19 },
  ];
  return (
    <div className="space-y-3">
      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
        <div className="flex items-center gap-2 mb-3">
          <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[10px] font-semibold text-foreground uppercase tracking-wider">Pipeline Activo</span>
        </div>
        <div className="space-y-2">
          {pipeline.map((s, i) => (
            <motion.div
              key={s.stage}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.12 }}
            >
              <div className="flex justify-between mb-0.5">
                <span className="text-[9px] text-foreground font-medium">{s.stage}</span>
                <span className="text-[9px] font-mono text-muted-foreground">{s.count}</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${s.pct}%` }}
                  transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="grid grid-cols-2 gap-2"
      >
        {[{ l: 'Revenue', v: '$124K' }, { l: 'Win Rate', v: '19%' }].map((s, i) => (
          <div key={i} className="text-center p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
            <div className="text-xs font-bold font-mono text-foreground">{s.v}</div>
            <div className="text-[8px] text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// ── Mockup: Soporte ──
const MockupSupport = () => {
  const [visibleMsgs, setVisibleMsgs] = useState(0);
  const msgs = [
    { role: 'user', text: 'No puedo acceder a mi cuenta' },
    { role: 'bot', text: 'Revisé tu cuenta y el problema era la contraseña vencida. Te envié un enlace de recuperación por email.' },
    { role: 'user', text: 'Listo, ya entré. Gracias!' },
  ];

  useEffect(() => {
    let i = 0;
    const show = () => {
      if (i < msgs.length) {
        setVisibleMsgs((p) => p + 1);
        i++;
        setTimeout(show, 700);
      }
    };
    setTimeout(show, 400);
  }, []);

  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-2 pb-2 border-b border-white/[0.06]">
        <div className="w-6 h-6 rounded-full bg-amber-400/20 flex items-center justify-center">
          <HeadphonesIcon className="w-3 h-3 text-amber-400" />
        </div>
        <div>
          <span className="text-[10px] font-semibold text-foreground">Soporte IA</span>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[8px] text-primary">Online</span>
          </div>
        </div>
      </div>
      <div className="space-y-2 min-h-[100px]">
        {msgs.slice(0, visibleMsgs).map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[85%] px-3 py-2 text-[10px] leading-relaxed ${
              m.role === 'user'
                ? 'bg-amber-400/10 text-foreground rounded-2xl rounded-br-md border border-amber-400/20'
                : 'bg-white/[0.04] text-muted-foreground rounded-2xl rounded-bl-md border border-white/[0.08]'
            }`}>
              {m.text}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const mockups = [MockupAnalytics, MockupMarketing, MockupContent, MockupSales, MockupSupport];

export const ServiciosSection = () => {
  const [active, setActive] = useState(0);
  const activeAgent = agentes[active];
  const ActiveMockup = mockups[active];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % agentes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="servicios" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <BlurFade className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm mb-6">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">Nuestra Tecnología</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 text-foreground">
            Agentes que trabajan por vos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada agente se conecta a tus datos reales y opera 24/7 sin intervención. Seleccioná uno para ver su funcionamiento.
          </p>
        </BlurFade>

        {/* Showcase Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6">
          {/* Panel Izquierdo: Lista de Agentes */}
          <div className="space-y-2">
            {agentes.map((agente, idx) => {
              const Icon = agente.icon;
              const isActive = active === idx;
              return (
                <button
                  key={agente.id}
                  onClick={() => setActive(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                    isActive
                      ? `bg-white/[0.04] ${agente.border} shadow-[0_0_30px_rgba(255,255,255,0.02)]`
                      : 'bg-transparent border-transparent hover:bg-white/[0.02]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute inset-0 rounded-2xl border border-white/[0.08] bg-white/[0.02]"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className="relative z-10 flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-xl ${agente.bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${agente.color}`} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">{agente.title}</h4>
                      <p className="text-[11px] text-muted-foreground mt-0.5">{agente.tagline}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Panel Derecho: Teatro de Automatización */}
          <div className="relative rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md p-6 overflow-hidden min-h-[500px]">
            <BorderBeam size={200} duration={14} />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                className="relative z-10"
              >
                <div className="mb-6">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${activeAgent.bg} ${activeAgent.border} border mb-3`}>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${activeAgent.color}`}>En Acción</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">{activeAgent.description}</p>
                </div>

                {/* Terminal Visual */}
                <div className="rounded-2xl border border-white/[0.06] bg-black/20 backdrop-blur-sm p-4">
                  <ActiveMockup />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciosSection;
