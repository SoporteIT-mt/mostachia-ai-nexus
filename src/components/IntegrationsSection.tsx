import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

/* ═══ Integration Data ═══ */

interface Integration {
  name: string;
  icon: string;
}

const INNER_RING: Integration[] = [
  { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai/white" },
  { name: "WhatsApp", icon: "https://cdn.simpleicons.org/whatsapp/25D366" },
  { name: "Make", icon: "https://cdn.simpleicons.org/make/6D00CC" },
  { name: "Zapier", icon: "https://cdn.simpleicons.org/zapier/FF4F00" },
  { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/EA4B71" },
  { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe/635BFF" },
];

const OUTER_RING: Integration[] = [
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Google Sheets", icon: "https://cdn.simpleicons.org/googlesheets/34A853" },
  { name: "Notion", icon: "https://cdn.simpleicons.org/notion/white" },
  { name: "Shopify", icon: "https://cdn.simpleicons.org/shopify/7AB55C" },
  { name: "Gmail", icon: "https://cdn.simpleicons.org/gmail/EA4335" },
  { name: "Telegram", icon: "https://cdn.simpleicons.org/telegram/26A5E4" },
  { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3FCF8E" },
  { name: "Slack", icon: "https://cdn.simpleicons.org/slack/E01E5A" },
  { name: "MercadoPago", icon: "https://cdn.simpleicons.org/mercadopago/00B1EA" },
];

/* ═══ Orbit Item Component ═══ */

function OrbitItem({
  integration,
  index,
  total,
  radius,
  duration,
  reverse,
}: {
  integration: Integration;
  index: number;
  total: number;
  radius: number;
  duration: number;
  reverse?: boolean;
}) {
  const angle = (360 / total) * index;
  const direction = reverse ? "reverse" : "normal";

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        width: 0,
        height: 0,
        animation: `orbit-spin ${duration}s linear infinite ${direction}`,
        animationDelay: `-${(duration / total) * index}s`,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -radius,
          left: -20,
          width: 40,
          height: 40,
          animation: `orbit-counter-spin ${duration}s linear infinite ${direction}`,
          animationDelay: `-${(duration / total) * index}s`,
        }}
      >
        <div className="group relative flex items-center justify-center w-10 h-10">
          {/* Icon container */}
          <div
            className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center
                        transition-all duration-300 group-hover:scale-125 group-hover:border-emerald-400/40
                        group-hover:shadow-[0_0_20px_rgba(52,211,153,0.25)] group-hover:bg-white/[0.1]"
          >
            <img
              src={integration.icon}
              alt={integration.name}
              className="w-5 h-5"
              loading="lazy"
            />
          </div>

          {/* Tooltip */}
          <span
            className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px]
                        bg-neutral-800 text-white whitespace-nowrap opacity-0 group-hover:opacity-100
                        transition-opacity duration-200 pointer-events-none"
          >
            {integration.name}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ═══ Main Component ═══ */

export const IntegrationsSection = () => {
  return (
    <section id="integraciones" className="relative py-24 md:py-32 overflow-hidden bg-neutral-950">
      {/* CSS Keyframes */}
      <style>{`
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-counter-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 40px rgba(52, 211, 153, 0.1), 0 0 80px rgba(52, 211, 153, 0.05); }
          50% { box-shadow: 0 0 60px rgba(52, 211, 153, 0.2), 0 0 120px rgba(52, 211, 153, 0.08); }
        }
      `}</style>

      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-400/[0.06] rounded-full blur-[80px]" />
      </div>

      {/* Header */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 text-sm font-medium text-emerald-400">
            ⚡ Integraciones Reales
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Se Integra con{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Todo tu Stack
            </span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Conectamos con las herramientas que ya usás.
          </p>
        </motion.div>
      </div>

      {/* Orbit System */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center items-center mb-16"
      >
        <div className="relative" style={{ width: 500, height: 500 }}>
          {/* Orbit ring lines */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]"
            style={{ width: 280, height: 280 }}
          />
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]"
            style={{ width: 440, height: 440 }}
          />

          {/* Dashed orbit guide — inner */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.03]"
            style={{ width: 360, height: 360 }}
          />

          {/* Central hub — MostachIA isotipo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10">
            <div
              className="w-16 h-16 rounded-2xl bg-neutral-900 border border-white/[0.1] flex items-center justify-center"
              style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
            >
              <img
                src="/isotipo-mint.png"
                alt="MostachIA"
                className="w-10 h-10 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  (e.target as HTMLImageElement).parentElement!.innerHTML =
                    '<span class="text-2xl font-bold text-emerald-400">M</span>';
                }}
              />
            </div>
            <span className="text-[11px] text-neutral-500 font-medium tracking-wider uppercase">
              MostachIA
            </span>
          </div>

          {/* Inner ring — 6 items */}
          {INNER_RING.map((item, i) => (
            <OrbitItem
              key={item.name}
              integration={item}
              index={i}
              total={INNER_RING.length}
              radius={140}
              duration={40}
            />
          ))}

          {/* Outer ring — 10 items, reverse direction */}
          {OUTER_RING.map((item, i) => (
            <OrbitItem
              key={item.name}
              integration={item}
              index={i}
              total={OUTER_RING.length}
              radius={220}
              duration={60}
              reverse
            />
          ))}
        </div>
      </motion.div>

      {/* Bottom text + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="text-center">
          <p className="text-neutral-400 mb-4">
            ¿No ves tu herramienta?{" "}
            <span className="text-emerald-400 font-medium">
              Desarrollamos integraciones custom.
            </span>
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-neutral-700 text-white
                       hover:border-emerald-400/50 hover:bg-emerald-400/5 transition-all duration-300 text-sm font-medium"
          >
            Consultar por integración
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default IntegrationsSection;
