import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3, Megaphone, Image as ImageIcon, DollarSign, HeadphonesIcon,
  ArrowUpRight, Users, CheckCircle2, Clock, Send, Sparkles,
  Activity, Search, PenTool, LayoutTemplate, MessageSquare, ShieldCheck
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
    color: 'text-mint-400',
    bg: 'bg-mint-400/10',
    border: 'border-mint-400/20'
  },
  {
    id: 'marketing',
    icon: Megaphone,
    title: 'Agente de Marketing',
    tagline: 'Tu estrategia ejecutándose sola',
    description: 'Analizá el rendimiento, planificá calendarios de contenido con datos reales de tu negocio, enviá campañas de email segmentadas y optimizá tus anuncios en automático.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20'
  },
  {
    id: 'contenido',
    icon: ImageIcon,
    title: 'Agente Creador de Contenido',
    tagline: 'Contenido de marca profesional en segundos',
    description: 'Creá posts, carruseles, videos de productos y avatares con IA usando tu identidad visual. Cero diseñador, cero tiempo perdido.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20'
  },
  {
    id: 'ventas',
    icon: DollarSign,
    title: 'Agente de Ventas',
    tagline: 'Tu vendedor más rápido, disponible 24/7',
    description: 'Calificá prospectos, agendá reuniones, gestioná pagos y seguimientos. Se integra con tu CRM para guiar al cliente hasta el cierre como un comercial de alto rendimiento.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20'
  },
  {
    id: 'soporte',
    icon: HeadphonesIcon,
    title: 'Agente de Soporte',
    tagline: 'Atención que no duerme y no se equivoca',
    description: 'Respondé consultas frecuentes, resolvé problemas y derivá casos complejos con memoria de conversación y el tono exacto de tu marca.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20'
  },
];

// --- HIGH-FIDELITY MOCKUPS ---

const MockupAnalytics = () => {
  const kpis = [
    { label: 'Revenue', value: '$128.4K', change: '+18.2%', positive: true },
    { label: 'Clientes Activos', value: '2,847', change: '+12.5%', positive: true },
    { label: 'Churn Rate', value: '1.8%', change: '-0.4%', positive: true },
    { label: 'NPS Score', value: '72', change: '+5pts', positive: true },
  ];
  const barData = [
    { day: 'Lun', value: 62, revenue: '$18.2K' },
    { day: 'Mar', value: 85, revenue: '$24.8K' },
    { day: 'Mié', value: 45, revenue: '$13.1K' },
    { day: 'Jue', value: 92, revenue: '$26.9K' },
    { day: 'Vie', value: 78, revenue: '$22.7K' },
    { day: 'Sáb', value: 55, revenue: '$16.0K' },
    { day: 'Dom', value: 38, revenue: '$11.1K' },
  ];

  return (
    <div className="space-y-3">
      {/* KPI Row */}
      <div className="grid grid-cols-2 gap-2">
        {kpis.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] group hover:bg-white/[0.05] transition-colors"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[9px] text-muted-foreground uppercase tracking-wider font-medium">{kpi.label}</span>
              <ArrowUpRight className="w-3 h-3 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-base font-bold font-mono text-foreground">{kpi.value}</div>
            <div className="flex items-center gap-1 mt-0.5">
              <Activity className="w-2.5 h-2.5 text-emerald-400" />
              <span className="text-[9px] font-mono text-emerald-400">{kpi.change}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bar Chart */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-semibold text-foreground uppercase tracking-wider">Revenue Semanal</span>
          <span className="text-[9px] text-muted-foreground font-mono">$132.8K total</span>
        </div>
        <div className="flex items-end gap-1.5 h-20">
          {barData.map((bar, i) => (
            <div key={bar.day} className="flex-1 flex flex-col items-center gap-1 group cursor-pointer">
              <span className="text-[7px] font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">{bar.revenue}</span>
              <motion.div
                className="w-full rounded-md bg-gradient-to-t from-primary/50 to-primary group-hover:from-primary/70 group-hover:to-primary transition-colors relative"
                initial={{ height: 0 }}
                animate={{ height: `${bar.value}%` }}
                transition={{ delay: 0.5 + i * 0.06, duration: 0.6, ease: 'easeOut' }}
              >
                <div className="absolute inset-0 rounded-md bg-gradient-to-t from-transparent to-white/10" />
              </motion.div>
              <span className="text-[8px] text-muted-foreground/70">{bar.day}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Live Query */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="flex items-center gap-2 p-2.5 rounded-xl bg-primary/5 border border-primary/10"
      >
        <Search className="w-3.5 h-3.5 text-primary flex-shrink-0" />
        <span className="text-[9px] text-foreground font-mono">"¿Cuáles fueron mis top 5 productos este mes?"</span>
        <motion.div
          className="w-1 h-3 bg-primary/60 rounded-full ml-auto"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
};

const MockupMarketing = () => {
  const campaigns = [
    { name: 'Onboarding Secuencia', status: 'Activa', sent: '4,210', open: '72%', click: '24%', statusColor: 'text-emerald-400', statusBg: 'bg-emerald-400/10' },
    { name: 'Promo Black Friday', status: 'Enviando', sent: '1,847', open: '58%', click: '18%', statusColor: 'text-blue-400', statusBg: 'bg-blue-400/10' },
    { name: 'Re-engagement Q1', status: 'Programada', sent: '—', open: '—', click: '—', statusColor: 'text-muted-foreground', statusBg: 'bg-muted/20' },
  ];
  const calendar = [
    { day: 'Lun', items: ['IG Post', 'Email'] },
    { day: 'Mar', items: ['Blog'] },
    { day: 'Mié', items: ['Reel', 'Story'] },
    { day: 'Jue', items: ['Newsletter'] },
    { day: 'Vie', items: ['IG Post'] },
  ];

  return (
    <div className="space-y-3">
      {/* Campaigns Table */}
      <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-hidden">
        <div className="px-3 py-2 border-b border-white/[0.06] flex items-center gap-2">
          <Send className="w-3 h-3 text-blue-400" />
          <span className="text-[10px] font-semibold text-foreground uppercase tracking-wider">Campañas Email</span>
        </div>
        <div className="divide-y divide-white/[0.04]">
          {campaigns.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.12 }}
              className="px-3 py-2.5 flex items-center justify-between hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-medium text-foreground block truncate">{c.name}</span>
                <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded-full ${c.statusBg} ${c.statusColor} inline-block mt-0.5`}>{c.status}</span>
              </div>
              <div className="flex gap-4 text-right">
                <div>
                  <div className="text-[9px] font-mono text-foreground">{c.sent}</div>
                  <div className="text-[7px] text-muted-foreground">enviados</div>
                </div>
                <div>
                  <div className="text-[9px] font-mono text-foreground">{c.open}</div>
                  <div className="text-[7px] text-muted-foreground">apertura</div>
                </div>
                <div>
                  <div className="text-[9px] font-mono text-foreground">{c.click}</div>
                  <div className="text-[7px] text-muted-foreground">clicks</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Content Calendar */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3"
      >
        <div className="flex items-center gap-2 mb-2.5">
          <LayoutTemplate className="w-3 h-3 text-blue-400" />
          <span className="text-[10px] font-semibold text-foreground uppercase tracking-wider">Calendario Contenido</span>
        </div>
        <div className="grid grid-cols-5 gap-1.5">
          {calendar.map((d, i) => (
            <motion.div
              key={d.day}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.05 }}
              className="text-center"
            >
              <span className="text-[8px] text-muted-foreground block mb-1">{d.day}</span>
              <div className="space-y-0.5">
                {d.items.map((item, j) => (
                  <div key={j} className="text-[7px] px-1 py-0.5 rounded bg-blue-400/10 text-blue-400 font-medium truncate">{item}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const MockupContent = () => {
  const queue = [
    { type: 'Carrusel IG', desc: '5 slides — Pack Premium Launch', status: 'Generado', icon: LayoutTemplate, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
    { type: 'Reel 15s', desc: 'Demo producto con avatar IA', status: 'Renderizando...', icon: ImageIcon, color: 'text-purple-400', bg: 'bg-purple-400/10' },
    { type: 'Story', desc: 'Flash sale 48h — urgencia', status: 'En cola', icon: PenTool, color: 'text-muted-foreground', bg: 'bg-muted/20' },
  ];
  const brandColors = ['#00E5A0', '#7C3AED', '#3B82F6', '#F59E0B'];

  return (
    <div className="space-y-3">
      {/* Brand Kit Preview */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3"
      >
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-purple-400" />
            <span className="text-[10px] font-semibold text-foreground uppercase tracking-wider">Brand Kit Activo</span>
          </div>
          <span className="text-[8px] text-muted-foreground font-mono">v2.1</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            {brandColors.map((color, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 + i * 0.06 }}
                className="w-5 h-5 rounded-full border border-white/10"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <div className="flex-1 h-px bg-white/[0.06]" />
          <div className="text-right">
            <div className="text-[9px] font-mono text-foreground">Montserrat</div>
            <div className="text-[7px] text-muted-foreground">Display + Body</div>
          </div>
        </div>
      </motion.div>

      {/* Production Queue */}
      <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-hidden">
        <div className="px-3 py-2 border-b border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-3 h-3 text-purple-400" />
            <span className="text-[10px] font-semibold text-foreground uppercase tracking-wider">Cola de Producción</span>
          </div>
          <span className="text-[8px] font-mono text-muted-foreground">3 items</span>
        </div>
        <div className="divide-y divide-white/[0.04]">
          {queue.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.type}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.12 }}
                className="px-3 py-2.5 flex items-center gap-3 hover:bg-white/[0.02] transition-colors"
              >
                <div className={`w-7 h-7 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-3.5 h-3.5 ${item.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-semibold text-foreground block">{item.type}</span>
                  <span className="text-[8px] text-muted-foreground truncate block">{item.desc}</span>
                </div>
                <span className={`text-[8px] font-mono ${item.color} flex-shrink-0`}>{item.status}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* AI Status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex items-center gap-2 p-2.5 rounded-xl bg-purple-400/5 border border-purple-400/10"
      >
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
        </motion.div>
        <span className="text-[9px] text-foreground">Motor IA generando assets con tu identidad visual...</span>
        <motion.div
          className="w-1 h-3 bg-purple-400/60 rounded-full ml-auto"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
};

const MockupSales = () => {
  const pipeline = [
    { stage: 'Prospecto', count: 42, pct: 100, value: '$84K' },
    { stage: 'Calificado', count: 28, pct: 67, value: '$56K' },
    { stage: 'Propuesta', count: 15, pct: 36, value: '$30K' },
    { stage: 'Negociación', count: 10, pct: 24, value: '$20K' },
    { stage: 'Cierre', count: 8, pct: 19, value: '$16K' },
  ];
  const activities = [
    { action: 'Reunión agendada', contact: 'María López', time: 'Hace 2m', icon: Clock },
    { action: 'Propuesta enviada', contact: 'Carlos Ruiz', time: 'Hace 15m', icon: Send },
    { action: 'Lead calificado', contact: 'Ana Torres', time: 'Hace 1h', icon: CheckCircle2 },
  ];

  return (
    <div className="space-y-3">
      {/* Pipeline Funnel */}
      <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <DollarSign className="w-3 h-3 text-emerald-400" />
            <span className="text-[10px] font-semibold text-foreground uppercase tracking-wider">Pipeline Activo</span>
          </div>
          <span className="text-[9px] font-mono text-emerald-400">$206K total</span>
        </div>
        <div className="space-y-2">
          {pipeline.map((s, i) => (
            <motion.div
              key={s.stage}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.1 }}
            >
              <div className="flex justify-between mb-0.5 items-center">
                <span className="text-[9px] text-foreground font-medium">{s.stage}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[8px] font-mono text-muted-foreground">{s.count} deals</span>
                  <span className="text-[8px] font-mono text-emerald-400">{s.value}</span>
                </div>
              </div>
              <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500/80 to-emerald-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${s.pct}%` }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-hidden"
      >
        <div className="px-3 py-2 border-b border-white/[0.06]">
          <span className="text-[10px] font-semibold text-foreground uppercase tracking-wider">Actividad Reciente</span>
        </div>
        <div className="divide-y divide-white/[0.04]">
          {activities.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.action}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="px-3 py-2 flex items-center gap-2.5"
              >
                <div className="w-6 h-6 rounded-lg bg-emerald-400/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-3 h-3 text-emerald-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] font-medium text-foreground block">{a.action}</span>
                  <span className="text-[8px] text-muted-foreground">{a.contact}</span>
                </div>
                <span className="text-[8px] text-muted-foreground font-mono flex-shrink-0">{a.time}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

const MockupSupport = () => {
  const [visibleMsgs, setVisibleMsgs] = useState(0);
  const msgs = [
    { role: 'user', text: 'Hola, compré un curso pero no me llegó el acceso.' },
    { role: 'bot', text: '¡Hola! Pido disculpas por la demora. Veo tu compra en el sistema. Acabo de reenviar el correo con los accesos inmediatos a tu casilla. ¿Pudiste recibirlo?' },
    { role: 'user', text: '¡Sí, ya pude entrar! Qué rápidos, gracias.' },
  ];

  useEffect(() => {
    let i = 0;
    const show = () => {
      if (i < msgs.length) {
        setVisibleMsgs((p) => p + 1);
        i++;
        setTimeout(show, 900);
      }
    };
    setTimeout(show, 500);
  }, []);

  return (
    <div className="space-y-3">
      {/* Chat Header */}
      <div className="flex items-center gap-3 pb-2.5 border-b border-white/[0.06]">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-500/10 flex items-center justify-center border border-amber-400/20">
          <HeadphonesIcon className="w-4 h-4 text-amber-400" />
        </div>
        <div className="flex-1">
          <span className="text-[11px] font-semibold text-foreground block">IA Soporte</span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[8px] text-emerald-400 font-mono">Online</span>
          </div>
        </div>
        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/20">
          <ShieldCheck className="w-2.5 h-2.5 text-emerald-400" />
          <span className="text-[7px] text-emerald-400 font-mono">Verificado</span>
        </div>
      </div>

      {/* Context Banner */}
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-2 p-2 rounded-lg bg-amber-400/5 border border-amber-400/10"
      >
        <Search className="w-3 h-3 text-amber-400 flex-shrink-0" />
        <span className="text-[8px] text-foreground font-mono">Análisis de compra: <span className="text-emerald-400">Verificado</span></span>
      </motion.div>

      {/* Messages */}
      <div className="space-y-2.5 min-h-[120px]">
        {msgs.slice(0, visibleMsgs).map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[85%] px-3 py-2.5 text-[10px] leading-relaxed ${
              m.role === 'user'
                ? 'bg-amber-400/10 text-foreground rounded-2xl rounded-br-sm border border-amber-400/15'
                : 'bg-white/[0.04] text-muted-foreground rounded-2xl rounded-bl-sm border border-white/[0.08]'
            }`}>
              {m.text}
            </div>
          </motion.div>
        ))}
        {visibleMsgs < msgs.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-1.5 px-3"
          >
            <div className="flex gap-0.5">
              {[0, 1, 2].map((d) => (
                <motion.div
                  key={d}
                  className="w-1.5 h-1.5 rounded-full bg-amber-400/40"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: d * 0.15 }}
                />
              ))}
            </div>
            <span className="text-[8px] text-muted-foreground">Escribiendo...</span>
          </motion.div>
        )}
      </div>

      {/* Stats Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="grid grid-cols-3 gap-2 pt-2 border-t border-white/[0.06]"
      >
        {[
          { label: 'Tiempo resp.', value: '<30s' },
          { label: 'Satisfacción', value: '98%' },
          { label: 'Resolución', value: '94%' },
        ].map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-[10px] font-bold font-mono text-foreground">{s.value}</div>
            <div className="text-[7px] text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </motion.div>
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
    }, 8000);
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
            Cada agente se conecta a tus datos reales y opera 24/7 sin intervención. Seleccioná uno para ver su mente en acción.
          </p>
        </BlurFade>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6">
          {/* Selector Izquierdo */}
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

          {/* The Canvas Derecho */}
          <div className="relative rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md overflow-hidden min-h-[560px]">
            <BorderBeam size={200} duration={14} />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent" />

            {/* Inner Glass Container */}
            <div className="relative z-10 p-6 h-full">
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
                  className="relative z-10"
                >
                  {/* Cabecera del Agente Activo */}
                  <div className="mb-5">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${activeAgent.bg} ${activeAgent.border} border`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${activeAgent.color}`}>Model: {activeAgent.id}-v2</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-emerald-400/60" />
                        <div className="w-2 h-2 rounded-full bg-amber-400/60" />
                        <div className="w-2 h-2 rounded-full bg-red-400/40" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{activeAgent.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed max-w-lg">{activeAgent.description}</p>
                  </div>

                  {/* El Mockup de Alta Fidelidad */}
                  <div className="rounded-2xl border border-white/[0.06] bg-black/20 backdrop-blur-sm p-4 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
                      style={{
                        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                      }}
                    />
                    <div className="relative z-10">
                      <ActiveMockup />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciosSection;
