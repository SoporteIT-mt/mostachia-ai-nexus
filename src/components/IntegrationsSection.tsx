import { Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { IntegrationIcon } from '@/components/IntegrationIcon';
import { BlurFade } from '@/components/ui/blur-fade';
import { Spotlight } from '@/components/ui/spotlight';
import { Marquee } from '@/components/ui/marquee';

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

// Flatten all integrations into two rows for marquee
const allIntegrations = categories.flatMap(c => c.items);
const row1 = allIntegrations.slice(0, Math.ceil(allIntegrations.length / 2));
const row2 = allIntegrations.slice(Math.ceil(allIntegrations.length / 2));

export const IntegrationsSection = () => {
  return (
    <section id="integraciones" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with Spotlight */}
        <div className="relative text-center mb-16">
          <Spotlight size={600} fill="hsl(162 100% 39% / 0.10)" />
          <BlurFade>
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
          </BlurFade>
        </div>

        {/* Marquee rows */}
        <BlurFade delay={0.2} className="max-w-5xl mx-auto mb-12 space-y-6">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            <Marquee speed={35} pauseOnHover>
              {row1.map((item) => (
                <div key={item.name} className="flex flex-col items-center gap-2 mx-6 group">
                  <div className="w-14 h-14 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center p-2.5 group-hover:border-primary/30 transition-colors">
                    <IntegrationIcon name={item.name} icon={item.icon} />
                  </div>
                  <span className="text-[10px] text-muted-foreground/70 group-hover:text-foreground transition-colors">
                    {item.name}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            <Marquee speed={35} pauseOnHover reverse>
              {row2.map((item) => (
                <div key={item.name} className="flex flex-col items-center gap-2 mx-6 group">
                  <div className="w-14 h-14 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center p-2.5 group-hover:border-primary/30 transition-colors">
                    <IntegrationIcon name={item.name} icon={item.icon} />
                  </div>
                  <span className="text-[10px] text-muted-foreground/70 group-hover:text-foreground transition-colors">
                    {item.name}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>
        </BlurFade>

        {/* CTA */}
        <BlurFade delay={0.4} className="text-center">
          <p className="text-muted-foreground mb-4">
            ¿No ves tu herramienta? <span className="text-primary font-medium">Desarrollamos integraciones custom.</span>
          </p>
          <Button variant="outline" className="rounded-xl px-6" asChild>
            <a href="#contacto">
              Consultar por integración
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </BlurFade>
      </div>
    </section>
  );
};
