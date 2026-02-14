import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { IntegrationIcon } from '@/components/IntegrationIcon';

interface Integration {
  name: string;
  icon: string;
}

interface Category {
  emoji: string;
  label: string;
  items: Integration[];
}

const categories: Category[] = [
  {
    emoji: '📦',
    label: 'Datos',
    items: [
      { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql' },
      { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql' },
      { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb' },
      { name: 'SQL Server', icon: 'https://cdn.simpleicons.org/microsoftsqlserver' },
      { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase' },
    ],
  },
  {
    emoji: '💬',
    label: 'Comunicación',
    items: [
      { name: 'WhatsApp', icon: 'https://cdn.simpleicons.org/whatsapp' },
      { name: 'Gmail', icon: 'https://cdn.simpleicons.org/gmail' },
      { name: 'Telegram', icon: 'https://cdn.simpleicons.org/telegram' },
    ],
  },
  {
    emoji: '⚙️',
    label: 'Automatización',
    items: [
      { name: 'n8n', icon: 'https://cdn.simpleicons.org/n8n' },
      { name: 'Make', icon: 'https://cdn.simpleicons.org/make' },
      { name: 'Zapier', icon: 'https://cdn.simpleicons.org/zapier' },
    ],
  },
  {
    emoji: '🧠',
    label: 'IA',
    items: [
      { name: 'OpenAI', icon: 'https://cdn.simpleicons.org/openai/ffffff' },
      { name: 'Anthropic', icon: 'https://cdn.simpleicons.org/anthropic/ffffff' },
      { name: 'Google AI', icon: 'https://cdn.simpleicons.org/googlegemini' },
    ],
  },
  {
    emoji: '📋',
    label: 'Productividad',
    items: [
      { name: 'Google Sheets', icon: 'https://cdn.simpleicons.org/googlesheets' },
      { name: 'Calendar', icon: 'https://cdn.simpleicons.org/googlecalendar' },
      { name: 'Notion', icon: 'https://cdn.simpleicons.org/notion/ffffff' },
    ],
  },
  {
    emoji: '💳',
    label: 'Pagos',
    items: [
      { name: 'MercadoPago', icon: 'https://cdn.simpleicons.org/mercadopago' },
      { name: 'Stripe', icon: 'https://cdn.simpleicons.org/stripe' },
    ],
  },
  {
    emoji: '🛒',
    label: 'E-commerce',
    items: [
      { name: 'Shopify', icon: 'https://cdn.simpleicons.org/shopify' },
      { name: 'WooCommerce', icon: 'https://cdn.simpleicons.org/woocommerce' },
      { name: 'TiendaNube', icon: 'https://cdn.simpleicons.org/tiendanube' },
    ],
  },
];

export const IntegrationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="integraciones" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Integraciones Reales</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Se Integra con <span className="text-gradient-primary">Todo tu Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conectamos con las herramientas que ya usás.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.08, duration: 0.5 }}
              className="glass-card p-5 rounded-xl"
            >
              <p className="text-sm font-medium text-muted-foreground mb-4">
                {cat.emoji} {cat.label}
              </p>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex flex-col items-center gap-1.5 group">
                    <IntegrationIcon name={item.name} icon={item.icon} />
                    <span className="text-[10px] text-muted-foreground/70 group-hover:text-foreground transition-colors">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">
            ¿No ves tu herramienta? <span className="text-primary font-medium">Desarrollamos integraciones custom.</span>
          </p>
          <Button variant="outline" className="rounded-xl px-6" asChild>
            <a href="#contacto">
              Consultar por integración
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
