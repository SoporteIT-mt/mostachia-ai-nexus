import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Integration {
  name: string;
  color: string;
  letter?: string;
  svg?: string;
}

const INNER_RING: Integration[] = [
  { name: "OpenAI", color: "#fff", svg: "M22.28 14.37a6.5 6.5 0 0 0-.87-5.65 6.53 6.53 0 0 0-7.02-2.74 6.5 6.5 0 0 0-4.9-2.2 6.53 6.53 0 0 0-6.23 4.56 6.5 6.5 0 0 0-4.35 3.15 6.53 6.53 0 0 0 .8 7.64 6.5 6.5 0 0 0 .87 5.65 6.53 6.53 0 0 0 7.02 2.74 6.5 6.5 0 0 0 4.9 2.2 6.53 6.53 0 0 0 6.23-4.56 6.5 6.5 0 0 0 4.35-3.15 6.53 6.53 0 0 0-.8-7.64z" },
  { name: "WhatsApp", color: "#25D366", svg: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" },
  { name: "Make", color: "#6D00CC", letter: "M" },
  { name: "Zapier", color: "#FF4F00", svg: "M12 0L8.842 8.842 0 12l8.842 3.158L12 24l3.158-8.842L24 12l-8.842-3.158z" },
  { name: "n8n", color: "#EA4B71", letter: "n8n" },
  { name: "Stripe", color: "#635BFF", svg: "M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" },
];

const OUTER_RING: Integration[] = [
  { name: "PostgreSQL", color: "#4169E1", letter: "PG" },
  { name: "MongoDB", color: "#47A248", letter: "DB" },
  { name: "Sheets", color: "#34A853", svg: "M19.5 6H17V4.5C17 3.12 15.88 2 14.5 2h-5C8.12 2 7 3.12 7 4.5V6H4.5C3.12 6 2 7.12 2 8.5v11C2 20.88 3.12 22 4.5 22h15c1.38 0 2.5-1.12 2.5-2.5v-11C22 7.12 20.88 6 19.5 6zM9 4.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V6H9V4.5z" },
  { name: "Notion", color: "#fff", letter: "N" },
  { name: "Shopify", color: "#7AB55C", letter: "S" },
  { name: "Gmail", color: "#EA4335", letter: "G" },
  { name: "Telegram", color: "#26A5E4", svg: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" },
  { name: "Supabase", color: "#3FCF8E", letter: "SB" },
  { name: "Slack", color: "#E01E5A", letter: "S" },
  { name: "MercadoPago", color: "#00B1EA", letter: "MP" },
  { name: "Claude", color: "#D97757", letter: "C" },
  { name: "Gemini", color: "#8E75B2", letter: "G" },
];

function OrbitIcon({ integration, size = 44 }: { integration: Integration; size?: number }) {
  return (
    <div
      className="rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center
                  transition-all duration-300 group-hover:scale-125 group-hover:border-emerald-400/40
                  group-hover:shadow-[0_0_20px_rgba(52,211,153,0.25)] group-hover:bg-white/[0.1]"
      style={{ width: size, height: size }}
    >
      {integration.svg ? (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill={integration.color}>
          <path d={integration.svg} />
        </svg>
      ) : (
        <span
          className="font-bold leading-none"
          style={{
            color: integration.color,
            fontSize: integration.letter && integration.letter.length > 2 ? 9 : integration.letter && integration.letter.length > 1 ? 11 : 16,
          }}
        >
          {integration.letter || integration.name[0]}
        </span>
      )}
    </div>
  );
}

function OrbitRing({
  items,
  radius,
  duration,
  reverse = false,
  iconSize = 44,
}: {
  items: Integration[];
  radius: number;
  duration: number;
  reverse?: boolean;
  iconSize?: number;
}) {
  const direction = reverse ? "reverse" : "normal";
  const counterDirection = reverse ? "normal" : "reverse";

  return (
    <>
      {items.map((item, i) => (
        <div
          key={item.name}
          className="absolute left-1/2 top-1/2"
          style={{
            width: 0,
            height: 0,
            animation: `orbit-spin ${duration}s linear infinite ${direction}`,
            animationDelay: `-${(duration / items.length) * i}s`,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -radius,
              left: -(iconSize / 2),
              width: iconSize,
              height: iconSize,
              animation: `orbit-counter-spin ${duration}s linear infinite ${counterDirection}`,
              animationDelay: `-${(duration / items.length) * i}s`,
            }}
          >
            <div className="group relative flex items-center justify-center" style={{ width: iconSize, height: iconSize }}>
              <OrbitIcon integration={item} size={iconSize} />
              <span
                className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px]
                            bg-neutral-800 text-white whitespace-nowrap opacity-0 group-hover:opacity-100
                            transition-opacity duration-200 pointer-events-none z-20"
              >
                {item.name}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export const IntegrationsSection = () => {
  return (
    <section id="integraciones" className="relative py-24 md:py-32 overflow-hidden">
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
          0%, 100% { box-shadow: 0 0 40px rgba(52,211,153,0.08), 0 0 80px rgba(52,211,153,0.04); }
          50% { box-shadow: 0 0 60px rgba(52,211,153,0.15), 0 0 120px rgba(52,211,153,0.06); }
        }
      `}</style>

      {/* Background glow — inherits page bg for seamless integration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/[0.04] rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 text-sm font-medium text-primary">
            Integraciones Reales
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Se Integra con{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Todo tu Stack
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
        className="flex justify-center items-center mb-20"
      >
        <div className="relative" style={{ width: 540, height: 540 }}>
          {/* Orbit ring lines */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]"
            style={{ width: 300, height: 300 }}
          />
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.03]"
            style={{ width: 380, height: 380 }}
          />
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]"
            style={{ width: 480, height: 480 }}
          />

          {/* Central hub */}
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
                  const el = e.target as HTMLImageElement;
                  el.style.display = "none";
                  el.parentElement!.innerHTML = '<span class="text-2xl font-bold text-emerald-400">M</span>';
                }}
              />
            </div>
            <span className="text-[11px] text-muted-foreground font-medium tracking-wider uppercase">
              MostachIA
            </span>
          </div>

          {/* Inner ring — 6 core integrations */}
          <OrbitRing items={INNER_RING} radius={150} duration={45} iconSize={44} />

          {/* Outer ring — 12 additional integrations */}
          <OrbitRing items={OUTER_RING} radius={240} duration={65} reverse iconSize={40} />
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            ¿No ves tu herramienta?{" "}
            <span className="text-primary font-medium">
              Desarrollamos integraciones custom.
            </span>
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-border text-foreground
                       hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-sm font-medium"
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
