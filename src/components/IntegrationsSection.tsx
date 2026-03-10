import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

const LOGOS_ROW_1 = [
  { src: "https://cdn.simpleicons.org/openai/white", alt: "OpenAI" },
  { src: "https://cdn.simpleicons.org/whatsapp/white", alt: "WhatsApp" },
  { src: "https://cdn.simpleicons.org/zapier/white", alt: "Zapier" },
  { src: "https://cdn.simpleicons.org/stripe/white", alt: "Stripe" },
  { src: "https://cdn.simpleicons.org/supabase/white", alt: "Supabase" },
  { src: "https://cdn.simpleicons.org/notion/white", alt: "Notion" },
  { src: "https://cdn.simpleicons.org/postgresql/white", alt: "PostgreSQL" },
  { src: "https://cdn.simpleicons.org/shopify/white", alt: "Shopify" },
  { src: "https://cdn.simpleicons.org/anthropic/white", alt: "Claude" },
];

const LOGOS_ROW_2 = [
  { src: "https://cdn.simpleicons.org/slack/white", alt: "Slack" },
  { src: "https://cdn.simpleicons.org/gmail/white", alt: "Gmail" },
  { src: "https://cdn.simpleicons.org/telegram/white", alt: "Telegram" },
  { src: "https://cdn.simpleicons.org/mongodb/white", alt: "MongoDB" },
  { src: "https://cdn.simpleicons.org/googlesheets/white", alt: "Google Sheets" },
  { src: "https://cdn.simpleicons.org/github/white", alt: "GitHub" },
  { src: "https://cdn.simpleicons.org/n8n/white", alt: "n8n" },
  { src: "https://cdn.simpleicons.org/make/white", alt: "Make" },
  { src: "https://cdn.simpleicons.org/googlegemini/white", alt: "Gemini" },
];

export const IntegrationsSection = () => {
  return (
    <section id="integraciones" className="relative py-16 lg:py-20 overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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

      {/* Divider line */}
      <div className="mx-auto mb-6 h-px max-w-xs bg-white/[0.06] [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

      {/* Row 1 — slides right */}
      <div
        className="mb-6"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <InfiniteSlider gap={48} duration={30} durationOnHover={60}>
          {LOGOS_ROW_1.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="pointer-events-none h-6 md:h-7 select-none opacity-50 hover:opacity-90 transition-opacity duration-300 brightness-0 invert"
            />
          ))}
        </InfiniteSlider>
      </div>

      {/* Row 2 — slides left (reverse) */}
      <div
        className="mb-8"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <InfiniteSlider gap={48} duration={35} durationOnHover={60} reverse>
          {LOGOS_ROW_2.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="pointer-events-none h-6 md:h-7 select-none opacity-50 hover:opacity-90 transition-opacity duration-300 brightness-0 invert"
            />
          ))}
        </InfiniteSlider>
      </div>

      {/* Divider line */}
      <div className="mx-auto mt-6 h-px max-w-xs bg-white/[0.06] [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

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
