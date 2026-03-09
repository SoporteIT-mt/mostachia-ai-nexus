import { useState, useEffect } from 'react';
import { ArrowRight, Cpu, BarChart3, Bot, Zap, Database, TrendingUp, Users, CheckCircle2, Clock, Send, Sparkles, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlurFade } from '@/components/ui/blur-fade';
import { BorderBeam } from '@/components/ui/border-beam';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { CONFIG } from '@/config/constants';

const servicios = [
  {
    id: 'dashboards',
    icon: BarChart3,
    badge: '⭐ Más Popular',
    title: 'Agente de Estadísticas y Dashboards',
    description: 'Hacé preguntas sobre tu negocio en lenguaje natural y recibí dashboards interactivos con gráficos, KPIs y tablas.',
    tech: ['MySQL', 'SQL Server', 'MongoDB', 'PostgreSQL'],
  },
  {
    id: 'agentes',
    icon: Bot,
    title: 'Agente de Soporte y Ventas',
    description: 'Atención al cliente, analytics y soporte 24/7. El agente se conecta a tus datos reales y resuelve consultas.',
    tech: ['GPT-4', 'Claude', 'RAG', 'n8n'],
  },
  {
    id: 'automatizacion',
    icon: Zap,
    title: 'Agente de Marketing y Contenido',
    description: 'Generamos contenido, campañas y estrategias de marketing automatizadas con IA conectada a tus métricas.',
    tech: ['n8n', 'Make', 'APIs REST', 'Webhooks'],
  },
  {
    id: 'migracion',
    icon: Database,
    title: 'Integraciones y Middleware IA',
    description: 'Conectamos tus sistemas (CRM, ERP, Base de Datos) con agentes de IA para un flujo de datos autónomo.',
    tech: ['n8n', 'REST APIs', 'Supabase', 'Migration'],
  },
];

// ── Dashboard Preview ──
const DashboardPreview = () => {
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);
  const metrics = [
    { label: 'Ventas Hoy', value: 48200, prefix: '$', suffix: '', change: '+12.4%', icon: TrendingUp, color: 'text-primary' },
    { label: 'Clientes Activos', value: 1847, prefix: '', suffix: '', change: '+5.2%', icon: Users, color: 'text-blue-400' },
    { label: 'Tickets Resueltos', value: 94, prefix: '', suffix: '%', change: '+3.1%', icon: CheckCircle2, color: 'text-emerald-400' },
    { label: 'Leads Nuevos', value: 127, prefix: '', suffix: '', change: '+8.7%', icon: Sparkles, color: 'text-accent' },
  ];
  const barData = [40, 65, 45, 80, 55, 92, 70];
  const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  const donutSegments = [
    { label: 'Online', value: 42, color: 'hsl(162 100% 39%)' },
    { label: 'WhatsApp', value: 28, color: 'hsl(43 92% 68%)' },
    { label: 'Presencial', value: 18, color: 'hsl(210 80% 60%)' },
    { label: 'Email', value: 12, color: 'hsl(220 20% 55%)' },
  ];
  const topProducts = [
    { rank: 1, name: 'Pack Premium', units: 127, revenue: '$4.2K' },
    { rank: 2, name: 'Servicio Plus', units: 94, revenue: '$3.1K' },
    { rank: 3, name: 'Plan Básico', units: 81, revenue: '$1.8K' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedValues(metrics.map(m => m.value)), 200);
    return () => clearTimeout(timer);
  }, []);

  const formatNumber = (val: number, i: number) => {
    const m = metrics[i];
    const formatted = m.prefix === '$' ? `$${(val / 1000).toFixed(1)}K` : val.toLocaleString();
    return `${formatted}${m.suffix}`;
  };

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  let cumulativeOffset = 0;

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        {metrics.map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08]"
            >
              <div className="flex items-center gap-1.5 mb-1.5">
                <Icon className={`w-3 h-3 ${m.color}`} />
                <span className="text-[8px] text-muted-foreground uppercase tracking-wider">{m.label}</span>
              </div>
              <motion.div
                className="text-sm font-bold font-mono text-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                {formatNumber(animatedValues[i], i)}
              </motion.div>
              <span className="text-[9px] font-mono text-primary">{m.change}</span>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]"
        >
          <span className="text-[9px] text-muted-foreground mb-2 block">Ventas por Canal</span>
          <div className="flex justify-center mb-2">
            <svg width="90" height="90" viewBox="0 0 100 100">
              {donutSegments.map((seg, i) => {
                const segLength = (seg.value / 100) * circumference;
                const offset = cumulativeOffset;
                cumulativeOffset += segLength;
                return (
                  <motion.circle
                    key={i}
                    cx="50" cy="50" r={radius}
                    fill="none"
                    stroke={seg.color}
                    strokeWidth="10"
                    strokeDasharray={`${segLength} ${circumference - segLength}`}
                    strokeDashoffset={-offset}
                    strokeLinecap="round"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ delay: 0.7 + i * 0.15, duration: 0.6 }}
                    transform="rotate(-90 50 50)"
                  />
                );
              })}
              <text x="50" y="48" textAnchor="middle" className="fill-foreground text-[10px] font-bold font-mono">$48.2K</text>
              <text x="50" y="58" textAnchor="middle" className="fill-muted-foreground text-[6px]">total</text>
            </svg>
          </div>
          <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
            {donutSegments.map((seg, i) => (
              <div key={i} className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: seg.color }} />
                <span className="text-[7px] text-muted-foreground truncate">{seg.label} {seg.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]"
        >
          <span className="text-[9px] text-muted-foreground mb-2 block">Ventas Semanal</span>
          <div className="flex items-end gap-1 h-[90px]">
            {barData.map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                <motion.div
                  className="w-full rounded-sm bg-gradient-to-t from-primary/60 to-primary relative group"
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.8 + i * 0.06, duration: 0.5, ease: 'easeOut' }}
                />
                <span className="text-[7px] text-muted-foreground/60">{days[i]}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]"
      >
        <span className="text-[9px] text-muted-foreground mb-2 block">Top Productos</span>
        <div className="space-y-1.5">
          {topProducts.map((p) => (
            <div key={p.rank} className="flex items-center gap-2">
              <span className={`text-[9px] font-black font-mono w-4 text-center ${
                p.rank === 1 ? 'text-accent' : p.rank === 2 ? 'text-muted-foreground' : 'text-muted-foreground/50'
              }`}>#{p.rank}</span>
              <span className="text-[10px] text-foreground flex-1 truncate">{p.name}</span>
              <span className="text-[9px] font-mono text-muted-foreground">{p.units}u</span>
              <span className="text-[9px] font-mono font-bold text-primary">{p.revenue}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// ── Chat Preview ──
const ChatPreview = () => {
  const [visibleMsgs, setVisibleMsgs] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const messages = [
    { role: 'user', text: '¿Cuántas ventas tuve ayer?' },
    { role: 'bot', text: 'Ayer registraste 47 ventas por $12,340. Un 15% más que el martes. 📈' },
    { role: 'user', text: '¿Cuál fue el producto más vendido?' },
    { role: 'bot', text: 'El producto más vendido fue "Pack Premium" con 12 unidades.' },
  ];

  useEffect(() => {
    let i = 0;
    const showNext = () => {
      if (i < messages.length) {
        if (messages[i].role === 'bot') {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setVisibleMsgs(prev => prev + 1);
            i++;
            setTimeout(showNext, 600);
          }, 800);
        } else {
          setVisibleMsgs(prev => prev + 1);
          i++;
          setTimeout(showNext, 400);
        }
      }
    };
    setTimeout(showNext, 300);
  }, []);

  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-2 pb-2 border-b border-white/[0.06]">
        <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
          <Bot className="w-3.5 h-3.5 text-primary" />
        </div>
        <div>
          <span className="text-xs font-semibold text-foreground">MostachIA Bot</span>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[9px] text-primary">Online</span>
          </div>
        </div>
      </div>

      <div className="space-y-2 min-h-[120px]">
        {messages.slice(0, visibleMsgs).map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[85%] px-3 py-2 text-xs leading-relaxed ${
              m.role === 'user'
                ? 'bg-primary/20 text-foreground rounded-2xl rounded-br-md border border-primary/20'
                : 'bg-white/[0.06] text-muted-foreground rounded-2xl rounded-bl-md border border-white/[0.08]'
            }`}>
              {m.text}
            </div>
          </motion.div>
        ))}
        {isTyping && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
            <div className="px-4 py-2.5 rounded-2xl rounded-bl-md bg-white/[0.06] border border-white/[0.08] flex items-center gap-1">
              <motion.div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0 }} />
              <motion.div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }} />
              <motion.div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }} />
            </div>
          </motion.div>
        )}
      </div>

      <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
        <span className="flex-1 text-[10px] text-muted-foreground/40 pl-2">Escribí tu consulta...</span>
        <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
          <Send className="w-3 h-3 text-primary" />
        </div>
      </div>
    </div>
  );
};

// ── Flow Preview ──
const FlowPreview = () => {
  const [activeNode, setActiveNode] = useState(-1);
  const nodes = [
    { label: 'Lead Ingresa', icon: Users, status: 'Webhook' },
    { label: 'CRM Actualizado', icon: Database, status: 'API Call' },
    { label: 'Email Enviado', icon: Send, status: 'SMTP' },
    { label: 'Slack Notificado', icon: Sparkles, status: 'Bot' },
  ];

  useEffect(() => {
    let i = -1;
    const interval = setInterval(() => {
      i++;
      if (i >= nodes.length) i = 0;
      setActiveNode(i);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3">
      <div className="space-y-2">
        {nodes.map((node, i) => {
          const Icon = node.icon;
          const isActive = i <= activeNode;
          const isCurrent = i === activeNode;
          return (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-center w-6">
                  <motion.div
                    className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      isCurrent ? 'border-primary bg-primary/20 shadow-[0_0_12px] shadow-primary/40' :
                      isActive ? 'border-primary/60 bg-primary/10' : 'border-white/20 bg-white/[0.04]'
                    }`}
                  >
                    {isActive ? (
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                    ) : (
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                    )}
                  </motion.div>
                  {i < nodes.length - 1 && (
                    <motion.div
                      className="w-0.5 h-4"
                      animate={{ backgroundColor: isActive ? 'hsl(162 100% 39%)' : 'hsl(0 0% 100% / 0.1)' }}
                    />
                  )}
                </div>

                <motion.div
                  className={`flex-1 flex items-center justify-between px-3 py-2 rounded-lg border transition-all duration-300 ${
                    isCurrent ? 'bg-primary/10 border-primary/30' : 'bg-white/[0.03] border-white/[0.06]'
                  }`}
                  animate={isCurrent ? { scale: [1, 1.02, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-primary' : 'text-muted-foreground/50'}`} />
                    <span className={`text-xs font-medium ${isActive ? 'text-foreground' : 'text-muted-foreground/60'}`}>{node.label}</span>
                  </div>
                  <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${isActive ? 'bg-primary/20 text-primary' : 'bg-white/[0.04] text-muted-foreground/40'}`}>
                    {node.status}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-3 gap-2 pt-2 border-t border-white/[0.06]"
      >
        {[
          { label: 'Ejecutados', value: '2,847' },
          { label: 'Tasa éxito', value: '99.2%' },
          { label: 'Tiempo prom', value: '1.3s' },
        ].map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-xs font-bold font-mono text-foreground">{s.value}</div>
            <div className="text-[8px] text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// ── Migration Preview ──
const MigrationPreview = () => {
  const [progress, setProgress] = useState(0);
  const tables = [
    { name: 'users', rows: '12,450', status: 'done' },
    { name: 'orders', rows: '84,201', status: 'done' },
    { name: 'products', rows: '3,847', status: 'done' },
    { name: 'analytics', rows: '241,003', status: 'migrating' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 87) { clearInterval(interval); return 87; }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
        <div className="text-center">
          <div className="text-[10px] text-muted-foreground mb-0.5">Origen</div>
          <div className="text-xs font-mono font-bold text-foreground">MySQL 5.7</div>
        </div>
        <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowRight className="w-4 h-4 text-primary" />
        </motion.div>
        <div className="text-center">
          <div className="text-[10px] text-muted-foreground mb-0.5">Destino</div>
          <div className="text-xs font-mono font-bold text-primary">PostgreSQL 16</div>
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-1.5">
          <span className="text-[10px] text-muted-foreground">Progreso general</span>
          <span className="text-[10px] font-mono text-primary font-bold">{progress}%</span>
        </div>
        <div className="relative h-2.5 rounded-full bg-white/[0.06] overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary via-primary to-accent"
            style={{ width: `${progress}%` }}
          />
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary/50 to-transparent"
            style={{ width: `${progress}%` }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </div>

      <div className="space-y-1">
        {tables.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white/[0.02]"
          >
            <div className="flex items-center gap-2">
              {t.status === 'done' ? (
                <CheckCircle2 className="w-3 h-3 text-primary" />
              ) : t.status === 'migrating' ? (
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
                  <Clock className="w-3 h-3 text-accent" />
                </motion.div>
              ) : (
                <div className="w-3 h-3 rounded-full border border-white/20" />
              )}
              <span className="text-[10px] font-mono text-foreground">{t.name}</span>
            </div>
            <span className="text-[9px] font-mono text-muted-foreground">{t.rows} rows</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ── Variants & Main Component ──
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export const ServiciosSection = () => {
  return (
    <section id="servicios" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <BlurFade className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm mb-6">
            <Cpu className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">Ecosistema de IA</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 text-foreground">
            Tecnología que trabaja sola.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No vendemos software genérico. Construimos agentes autónomos integrados directamente en las venas de tu negocio.
          </p>
        </BlurFade>

        {/* The Aura Bento Grid */}
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(320px,auto)]"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1: Dashboards (Large, spans 2 cols, 2 rows) */}
          <motion.div
            variants={itemVariants}
            className="relative md:col-span-2 md:row-span-2 rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md p-6 overflow-hidden group"
          >
            <BorderBeam size={200} duration={14} />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-3">
                <span className="text-[10px] font-bold text-accent uppercase tracking-wider">⭐ Más Popular</span>
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-2">{servicios[0].title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">{servicios[0].description}</p>
            </div>

            <div className="relative z-10">
              <DashboardPreview />
            </div>
          </motion.div>

          {/* Card 2: Agentes (Medium, 1 col, 1 row) */}
          <motion.div
            variants={itemVariants}
            className="relative rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md p-5 overflow-hidden group lg:row-span-1"
          >
            <div className="relative z-10 mb-3">
              <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-bold font-display text-foreground mb-1">{servicios[1].title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{servicios[1].description}</p>
            </div>

            <div className="relative z-10">
              <ChatPreview />
            </div>
          </motion.div>

          {/* Card 3: Automatización (1 col, 1 row) */}
          <motion.div
            variants={itemVariants}
            className="relative rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md p-5 overflow-hidden group"
          >
            <BorderBeam size={120} duration={16} colorFrom="hsl(40 90% 68%)" colorTo="hsl(162 100% 50%)" />
            <div className="relative z-10 mb-3">
              <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
                <Zap className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-base font-bold font-display text-foreground mb-1">{servicios[2].title}</h3>
              <div className="relative z-10 mt-2">
                <FlowPreview />
              </div>
            </div>
          </motion.div>

          {/* Card 4: Leads / Migración (spans 2 cols) */}
          <motion.div
            variants={itemVariants}
            className="relative md:col-span-2 lg:col-span-2 rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md p-5 overflow-hidden group"
          >
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider">🎮 Demo Interactiva</span>
                </div>
                <h3 className="text-base font-bold font-display text-foreground mb-1">{servicios[3].title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{servicios[3].description}</p>
              </div>
              <div className="relative z-10">
                <MigrationPreview />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Global CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 md:mt-24 flex justify-center"
        >
          <a href={CONFIG.CALCOM_URL} target="_blank" rel="noopener noreferrer">
            <ShimmerButton
              shimmerColor="rgba(127, 205, 179, 0.8)"
              background="linear-gradient(135deg, #60b99a, #4a9e82)"
              borderRadius="9999px"
              className="px-8 py-4 text-base font-semibold shadow-glow hover:-translate-y-1 transition-transform duration-300"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Diseñar mi Arquitectura IA
              <ArrowRight className="w-4 h-4 ml-2" />
            </ShimmerButton>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiciosSection;
