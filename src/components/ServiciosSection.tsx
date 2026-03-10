import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3, Megaphone, Image as ImageIcon, DollarSign, HeadphonesIcon,
  ArrowUpRight, Users, CheckCircle2, Activity, Mail, Sparkles, ShieldCheck,
  Search, Send, Clock, PenTool, LayoutTemplate
} from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { BorderBeam } from '@/components/ui/border-beam';

const agentes = [
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Agente de Analytics & Dashboards',
    tagline: 'Tu negocio en tiempo real',
    description: 'Nuestro agente consulta tu base de datos en vivo, responde en lenguaje natural y genera dashboards interactivos.',
    prompt: 'Generame un reporte de ventas y conversión del último mes.',
    color: 'text-mint-400', bg: 'bg-mint-400/10', border: 'border-mint-400/20'
  },
  {
    id: 'marketing',
    icon: Megaphone,
    title: 'Agente de Marketing',
    tagline: 'Tu estrategia ejecutándose sola',
    description: 'Planificá calendarios de contenido con datos reales de tu negocio, enviá campañas de email y optimizá tus anuncios.',
    prompt: 'Revisá las campañas activas y optimizá el ROAS de "Verano 2026".',
    color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20'
  },
  {
    id: 'contenido',
    icon: ImageIcon,
    title: 'Agente Creador de Contenido',
    tagline: 'Contenido profesional en segundos',
    description: 'Creá posts, carruseles y videos usando tu identidad visual. Cero diseñador, cero tiempo perdido.',
    prompt: 'Creá 3 imágenes para Instagram promocionando la nueva colección.',
    color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/20'
  },
  {
    id: 'ventas',
    icon: DollarSign,
    title: 'Agente de Ventas',
    tagline: 'Tu vendedor más rápido, 24/7',
    description: 'Calificá prospectos, agendá reuniones y gestioná pagos. Se integra con tu CRM para guiar al cliente al cierre.',
    prompt: 'Actualizá el estado de los leads que respondieron hoy por WhatsApp.',
    color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20'
  },
  {
    id: 'soporte',
    icon: HeadphonesIcon,
    title: 'Agente de Soporte',
    tagline: 'Atención que no duerme',
    description: 'Respondé consultas frecuentes, resolvé problemas y derivá casos complejos con el tono exacto de tu marca.',
    prompt: 'Respondé este reclamo de un cliente sobre su compra de ayer.',
    color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20'
  },
];

// --- COMPONENTE WRAPPER DEL CHAT ---
const AgentChatWrapper = ({ prompt, color, children }: { prompt: string; color: string; children: React.ReactNode }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(0);
    const t1 = setTimeout(() => setStep(1), 600);
    const t2 = setTimeout(() => setStep(2), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [prompt]);

  return (
    <div className="space-y-4">
      {/* User Prompt Bubble */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex justify-end"
      >
        <div className="max-w-[85%] px-4 py-2.5 rounded-2xl rounded-br-sm bg-white/[0.06] border border-white/[0.08] text-[11px] text-foreground leading-relaxed">
          {prompt}
        </div>
      </motion.div>

      {/* Agent Response */}
      {step >= 1 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="space-y-2"
        >
          <div className="flex items-center gap-2 px-1">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
              <Sparkles className="w-2.5 h-2.5 text-primary" />
            </div>
            <span className="text-[10px] font-semibold text-foreground">MostachIA Agent</span>
          </div>

          {step === 1 ? (
            <div className="flex items-center gap-1 px-4 py-3">
              {[0, 1, 2].map((d) => (
                <motion.div
                  key={d}
                  className="w-1.5 h-1.5 rounded-full bg-primary/50"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 0.7, repeat: Infinity, delay: d * 0.15 }}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
};

// --- HIGH-FIDELITY MOCKUPS ---

const MockupAnalytics = () => {
  const kpis = [
    { label: 'Revenue', value: '$128.4K', change: '+18.2%' },
    { label: 'Clientes', value: '2,847', change: '+12.5%' },
    { label: 'Churn', value: '1.8%', change: '-0.4%' },
    { label: 'NPS', value: '72', change: '+5pts' },
  ];
  const barData = [
    { day: 'L', value: 62 }, { day: 'M', value: 85 }, { day: 'X', value: 45 },
    { day: 'J', value: 92 }, { day: 'V', value: 78 }, { day: 'S', value: 55 }, { day: 'D', value: 38 },
  ];

  return (
    <div className="space-y-3 rounded-xl border border-white/[0.06] bg-black/20 p-3">
      <div className="grid grid-cols-2 gap-2">
        {kpis.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]"
          >
            <span className="text-[8px] text-muted-foreground uppercase tracking-wider">{kpi.label}</span>
            <div className="text-sm font-bold font-mono text-foreground">{kpi.value}</div>
            <div className="flex items-center gap-1 mt-0.5">
              <Activity className="w-2.5 h-2.5 text-emerald-400" />
              <span className="text-[9px] font-mono text-emerald-400">{kpi.change}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
        <div className="flex justify-between mb-2">
          <span className="text-[9px] font-semibold text-foreground uppercase tracking-wider">Revenue Semanal</span>
          <span className="text-[8px] text-muted-foreground font-mono">$132.8K</span>
        </div>
        <div className="flex items-end gap-1.5 h-16">
          {barData.map((bar, i) => (
            <div key={bar.day} className="flex-1 flex flex-col items-center gap-0.5">
              <motion.div
                className="w-full rounded-sm bg-gradient-to-t from-primary/50 to-primary"
                initial={{ height: 0 }}
                animate={{ height: `${bar.value}%` }}
                transition={{ delay: 0.3 + i * 0.06, duration: 0.5, ease: 'easeOut' }}
              />
              <span className="text-[7px] text-muted-foreground/60">{bar.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MockupMarketing = () => {
  const campaigns = [
    { name: 'Onboarding Secuencia', status: 'Activa', sent: '4,210', open: '72%', statusColor: 'text-emerald-400', statusBg: 'bg-emerald-400/10' },
    { name: 'Promo Verano 2026', status: 'Optimizando', sent: '1,847', open: '58%', statusColor: 'text-blue-400', statusBg: 'bg-blue-400/10' },
    { name: 'Re-engagement Q1', status: 'Programada', sent: '—', open: '—', statusColor: 'text-muted-foreground', statusBg: 'bg-muted/20' },
  ];

  return (
    <div className="space-y-3 rounded-xl border border-white/[0.06] bg-black/20 overflow-hidden">
      <div className="px-3 pt-3 flex items-center gap-2">
        <Mail className="w-3 h-3 text-blue-400" />
        <span className="text-[10px] font-semibold text-foreground uppercase tracking-wider">Campañas Email</span>
      </div>
      <div className="divide-y divide-white/[0.04]">
        {campaigns.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.12 }}
            className="px-3 py-2.5 flex items-center justify-between"
          >
            <div>
              <span className="text-[10px] font-medium text-foreground block">{c.name}</span>
              <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded-full ${c.statusBg} ${c.statusColor} inline-block mt-0.5`}>{c.status}</span>
            </div>
            <div className="flex gap-3 text-right">
              <div>
                <div className="text-[9px] font-mono text-foreground">{c.sent}</div>
                <div className="text-[7px] text-muted-foreground">enviados</div>
              </div>
              <div>
                <div className="text-[9px] font-mono text-foreground">{c.open}</div>
                <div className="text-[7px] text-muted-foreground">apertura</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mx-3 mb-3 flex items-center gap-2 p-2 rounded-lg bg-blue-400/5 border border-blue-400/10"
      >
        <Sparkles className="w-3 h-3 text-blue-400" />
        <span className="text-[8px] text-foreground font-mono">ROAS de "Verano 2026" optimizado: +22% proyectado.</span>
      </motion.div>
    </div>
  );
};

const MockupContent = () => {
  const queue = [
    { type: 'Post IG #1', desc: 'Lifestyle — nueva colección', status: 'Generado', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
    { type: 'Post IG #2', desc: 'Producto en fondo degradado', status: 'Renderizando...', color: 'text-purple-400', bg: 'bg-purple-400/10' },
    { type: 'Post IG #3', desc: 'Carrusel 5 slides — detalles', status: 'En cola', color: 'text-muted-foreground', bg: 'bg-muted/20' },
  ];
  const brandColors = ['#00E5A0', '#7C3AED', '#3B82F6', '#F59E0B'];

  return (
    <div className="space-y-3 rounded-xl border border-white/[0.06] bg-black/20 p-3">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-3 h-3 text-purple-400" />
          <span className="text-[10px] font-semibold text-foreground uppercase tracking-wider">Producción</span>
        </div>
        <div className="flex gap-1">
          {brandColors.map((c, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15 + i * 0.05 }}
              className="w-4 h-4 rounded-full border border-white/10"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </div>
      <div className="divide-y divide-white/[0.04] rounded-lg border border-white/[0.06] overflow-hidden">
        {queue.map((item, i) => (
          <motion.div
            key={item.type}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.12 }}
            className="px-3 py-2.5 flex items-center justify-between"
          >
            <div>
              <span className="text-[10px] font-semibold text-foreground block">{item.type}</span>
              <span className="text-[8px] text-muted-foreground">{item.desc}</span>
            </div>
            <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded-full ${item.bg} ${item.color}`}>{item.status}</span>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex items-center gap-2 p-2 rounded-lg bg-purple-400/5 border border-purple-400/10"
      >
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
          <Sparkles className="w-3 h-3 text-purple-400" />
        </motion.div>
        <span className="text-[8px] text-foreground font-mono">Generando con tu brand kit...</span>
      </motion.div>
    </div>
  );
};

const MockupSales = () => {
  const leads = [
    { name: 'María López', channel: 'WhatsApp', status: 'Respondió', action: 'Reunión agendada', color: 'text-emerald-400' },
    { name: 'Carlos Ruiz', channel: 'WhatsApp', status: 'Respondió', action: 'Propuesta enviada', color: 'text-blue-400' },
    { name: 'Ana Torres', channel: 'WhatsApp', status: 'Visto', action: 'Pendiente follow-up', color: 'text-amber-400' },
  ];

  return (
    <div className="space-y-3 rounded-xl border border-white/[0.06] bg-black/20 p-3">
      <div className="flex items-center gap-2 mb-1">
        <DollarSign className="w-3 h-3 text-emerald-400" />
        <span className="text-[10px] font-semibold text-foreground uppercase tracking-wider">Leads Actualizados</span>
      </div>
      <div className="divide-y divide-white/[0.04] rounded-lg border border-white/[0.06] overflow-hidden">
        {leads.map((lead, i) => (
          <motion.div
            key={lead.name}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.1 }}
            className="px-3 py-2.5 flex items-center justify-between"
          >
            <div>
              <span className="text-[10px] font-medium text-foreground block">{lead.name}</span>
              <span className="text-[8px] text-muted-foreground">{lead.channel} · {lead.status}</span>
            </div>
            <span className={`text-[8px] font-mono ${lead.color}`}>{lead.action}</span>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-3 gap-2"
      >
        {[{ l: 'Respondieron', v: '3' }, { l: 'Agendadas', v: '1' }, { l: 'Pendientes', v: '1' }].map((s, i) => (
          <div key={i} className="text-center p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
            <div className="text-xs font-bold font-mono text-foreground">{s.v}</div>
            <div className="text-[7px] text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const MockupSupport = () => {
  const [visibleMsgs, setVisibleMsgs] = useState(0);
  const msgs = [
    { role: 'user' as const, text: 'Compré un producto ayer y no me llegó la confirmación.' },
    { role: 'bot' as const, text: 'Encontré tu compra #4821. El correo de confirmación fue reenviado a tu casilla. ¿Necesitás algo más?' },
    { role: 'user' as const, text: '¡Perfecto, ya lo vi! Gracias.' },
  ];

  useEffect(() => {
    setVisibleMsgs(0);
    let i = 0;
    const show = () => {
      if (i < msgs.length) {
        setVisibleMsgs((p) => p + 1);
        i++;
        setTimeout(show, 800);
      }
    };
    setTimeout(show, 400);
  }, []);

  return (
    <div className="space-y-2.5 rounded-xl border border-white/[0.06] bg-black/20 p-3">
      <div className="flex items-center gap-2 pb-2 border-b border-white/[0.06]">
        <div className="w-6 h-6 rounded-full bg-amber-400/20 flex items-center justify-center">
          <HeadphonesIcon className="w-3 h-3 text-amber-400" />
        </div>
        <div className="flex-1">
          <span className="text-[10px] font-semibold text-foreground">Soporte IA</span>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[7px] text-emerald-400 font-mono">Online</span>
          </div>
        </div>
        <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/20">
          <ShieldCheck className="w-2.5 h-2.5 text-emerald-400" />
          <span className="text-[7px] text-emerald-400 font-mono">Verificado</span>
        </div>
      </div>
      <div className="space-y-2 min-h-[90px]">
        {msgs.slice(0, visibleMsgs).map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[85%] px-3 py-2 text-[10px] leading-relaxed ${
              m.role === 'user'
                ? 'bg-amber-400/10 text-foreground rounded-2xl rounded-br-sm border border-amber-400/15'
                : 'bg-white/[0.04] text-muted-foreground rounded-2xl rounded-bl-sm border border-white/[0.08]'
            }`}>
              {m.text}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="grid grid-cols-3 gap-2 pt-2 border-t border-white/[0.06]"
      >
        {[{ l: 'Resp.', v: '<30s' }, { l: 'CSAT', v: '98%' }, { l: 'Resolución', v: '94%' }].map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-[10px] font-bold font-mono text-foreground">{s.v}</div>
            <div className="text-[7px] text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const mockupComponents = [MockupAnalytics, MockupMarketing, MockupContent, MockupSales, MockupSupport];

export const ServiciosSection = () => {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const activeAgent = agentes[active];

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % agentes.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const ActiveMockup = mockupComponents[active];

  return (
    <section id="servicios" className="py-16 lg:py-20 relative overflow-hidden">
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
            Cada agente se conecta a tus datos reales y opera 24/7 sin intervención. Seleccioná uno para ver su mente en acción.
          </p>
        </BlurFade>

        <div
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Lista de Agentes */}
          <div className="space-y-2">
            {agentes.map((agente, idx) => {
              const Icon = agente.icon;
              const isActive = active === idx;
              return (
                <button
                  key={agente.id}
                  onClick={() => { setActive(idx); setIsHovered(true); }}
                  className={`w-full text-left p-4 md:p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                    isActive
                      ? `bg-white/[0.06] ${agente.border} shadow-[0_0_30px_rgba(255,255,255,0.02)]`
                      : 'bg-transparent border-transparent hover:bg-white/[0.03]'
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

          {/* The Canvas Derecho (Chat Interface) */}
          <div className="relative rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md overflow-hidden min-h-[560px]">
            <BorderBeam size={200} duration={14} />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent" />

            <div className="relative z-10 h-full flex flex-col">
              {/* Dot pattern background */}
              <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
              />

              {/* macOS Header */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.06] relative z-10">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/50" />
                </div>
                <span className="text-[10px] font-mono text-muted-foreground ml-2">mostachia-os / agent-{activeAgent.id}</span>
              </div>

              {/* Chat Content */}
              <div className="flex-1 p-5 overflow-y-auto relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
                  >
                    <AgentChatWrapper prompt={activeAgent.prompt} color={activeAgent.color}>
                      <ActiveMockup />
                    </AgentChatWrapper>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciosSection;
