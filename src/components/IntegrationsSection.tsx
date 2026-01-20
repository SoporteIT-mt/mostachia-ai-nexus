import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { Zap, ArrowRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Extended integration list
const integrations = [
  // Cloud
  { name: 'Google Cloud', category: 'Cloud', icon: 'https://cdn.simpleicons.org/googlecloud' },
  { name: 'AWS', category: 'Cloud', icon: 'https://cdn.simpleicons.org/amazonaws/FF9900' },
  { name: 'Azure', category: 'Cloud', icon: 'https://cdn.simpleicons.org/microsoftazure' },
  { name: 'Vercel', category: 'Cloud', icon: 'https://cdn.simpleicons.org/vercel/ffffff' },
  { name: 'DigitalOcean', category: 'Cloud', icon: 'https://cdn.simpleicons.org/digitalocean' },
  { name: 'Heroku', category: 'Cloud', icon: 'https://cdn.simpleicons.org/heroku' },
  // Pagos
  { name: 'Stripe', category: 'Pagos', icon: 'https://cdn.simpleicons.org/stripe' },
  { name: 'PayPal', category: 'Pagos', icon: 'https://cdn.simpleicons.org/paypal' },
  { name: 'Mercado Pago', category: 'Pagos', icon: 'https://cdn.simpleicons.org/mercadopago' },
  { name: 'Square', category: 'Pagos', icon: 'https://cdn.simpleicons.org/square' },
  // Comunicación
  { name: 'Slack', category: 'Comunicación', icon: 'https://cdn.simpleicons.org/slack' },
  { name: 'Teams', category: 'Comunicación', icon: 'https://cdn.simpleicons.org/microsoftteams' },
  { name: 'WhatsApp', category: 'Comunicación', icon: 'https://cdn.simpleicons.org/whatsapp' },
  { name: 'Twilio', category: 'Comunicación', icon: 'https://cdn.simpleicons.org/twilio' },
  { name: 'Discord', category: 'Comunicación', icon: 'https://cdn.simpleicons.org/discord' },
  { name: 'Telegram', category: 'Comunicación', icon: 'https://cdn.simpleicons.org/telegram' },
  { name: 'Zoom', category: 'Comunicación', icon: 'https://cdn.simpleicons.org/zoom' },
  // Productividad
  { name: 'Notion', category: 'Productividad', icon: 'https://cdn.simpleicons.org/notion/ffffff' },
  { name: 'Airtable', category: 'Productividad', icon: 'https://cdn.simpleicons.org/airtable' },
  { name: 'Trello', category: 'Productividad', icon: 'https://cdn.simpleicons.org/trello' },
  { name: 'Monday', category: 'Productividad', icon: 'https://cdn.simpleicons.org/monday' },
  { name: 'Asana', category: 'Productividad', icon: 'https://cdn.simpleicons.org/asana' },
  { name: 'ClickUp', category: 'Productividad', icon: 'https://cdn.simpleicons.org/clickup' },
  { name: 'Linear', category: 'Productividad', icon: 'https://cdn.simpleicons.org/linear' },
  // CRM
  { name: 'Salesforce', category: 'CRM', icon: 'https://cdn.simpleicons.org/salesforce' },
  { name: 'HubSpot', category: 'CRM', icon: 'https://cdn.simpleicons.org/hubspot' },
  { name: 'Pipedrive', category: 'CRM', icon: 'https://cdn.simpleicons.org/pipedrive/25CE7B' },
  { name: 'Zoho', category: 'CRM', icon: 'https://cdn.simpleicons.org/zoho' },
  { name: 'Freshworks', category: 'CRM', icon: 'https://cdn.simpleicons.org/freshworks' },
  // Automatización
  { name: 'Zapier', category: 'Automatización', icon: 'https://cdn.simpleicons.org/zapier' },
  { name: 'Make', category: 'Automatización', icon: 'https://cdn.simpleicons.org/make' },
  { name: 'n8n', category: 'Automatización', icon: 'https://cdn.simpleicons.org/n8n' },
  { name: 'IFTTT', category: 'Automatización', icon: 'https://cdn.simpleicons.org/ifttt' },
  // Email
  { name: 'SendGrid', category: 'Email', icon: 'https://cdn.simpleicons.org/sendgrid' },
  { name: 'Mailchimp', category: 'Email', icon: 'https://cdn.simpleicons.org/mailchimp' },
  { name: 'Resend', category: 'Email', icon: 'https://cdn.simpleicons.org/resend' },
  { name: 'Brevo', category: 'Email', icon: 'https://cdn.simpleicons.org/brevo' },
  // Database
  { name: 'PostgreSQL', category: 'Database', icon: 'https://cdn.simpleicons.org/postgresql' },
  { name: 'MongoDB', category: 'Database', icon: 'https://cdn.simpleicons.org/mongodb' },
  { name: 'MySQL', category: 'Database', icon: 'https://cdn.simpleicons.org/mysql' },
  { name: 'Redis', category: 'Database', icon: 'https://cdn.simpleicons.org/redis' },
  { name: 'Supabase', category: 'Database', icon: 'https://cdn.simpleicons.org/supabase' },
  { name: 'Firebase', category: 'Database', icon: 'https://cdn.simpleicons.org/firebase' },
  // E-commerce
  { name: 'Shopify', category: 'E-commerce', icon: 'https://cdn.simpleicons.org/shopify' },
  { name: 'WooCommerce', category: 'E-commerce', icon: 'https://cdn.simpleicons.org/woocommerce' },
  { name: 'TiendaNube', category: 'E-commerce', icon: 'https://cdn.simpleicons.org/tiendanube' },
  { name: 'Magento', category: 'E-commerce', icon: 'https://cdn.simpleicons.org/magento' },
  // Desarrollo
  { name: 'GitHub', category: 'Desarrollo', icon: 'https://cdn.simpleicons.org/github/ffffff' },
  { name: 'GitLab', category: 'Desarrollo', icon: 'https://cdn.simpleicons.org/gitlab' },
  { name: 'Jira', category: 'Desarrollo', icon: 'https://cdn.simpleicons.org/jira' },
  { name: 'Bitbucket', category: 'Desarrollo', icon: 'https://cdn.simpleicons.org/bitbucket' },
  // Diseño
  { name: 'Figma', category: 'Diseño', icon: 'https://cdn.simpleicons.org/figma' },
  { name: 'Canva', category: 'Diseño', icon: 'https://cdn.simpleicons.org/canva' },
  { name: 'Adobe XD', category: 'Diseño', icon: 'https://cdn.simpleicons.org/adobexd' },
  // IA
  { name: 'OpenAI', category: 'IA', icon: 'https://cdn.simpleicons.org/openai/ffffff' },
  { name: 'Anthropic', category: 'IA', icon: 'https://cdn.simpleicons.org/anthropic/ffffff' },
  { name: 'Google AI', category: 'IA', icon: 'https://cdn.simpleicons.org/googlegemini' },
  { name: 'Hugging Face', category: 'IA', icon: 'https://cdn.simpleicons.org/huggingface' },
  { name: 'LangChain', category: 'IA', icon: 'https://cdn.simpleicons.org/langchain' },
  // Analytics (removed Mixpanel, Amplitude, Segment)
  { name: 'Google Analytics', category: 'Analytics', icon: 'https://cdn.simpleicons.org/googleanalytics' },
  { name: 'Hotjar', category: 'Analytics', icon: 'https://cdn.simpleicons.org/hotjar' },
  { name: 'Plausible', category: 'Analytics', icon: 'https://cdn.simpleicons.org/plausible' },
  { name: 'PostHog', category: 'Analytics', icon: 'https://cdn.simpleicons.org/posthog' },
];

const categories = ['Todos', 'Cloud', 'Pagos', 'Comunicación', 'Productividad', 'CRM', 'Automatización', 'Email', 'Database', 'E-commerce', 'Desarrollo', 'Diseño', 'IA', 'Analytics'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: -10,
    transition: { duration: 0.2 }
  }
};

export const IntegrationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();
  const [activeCategory, setActiveCategory] = useState('Todos');

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const filteredIntegrations = activeCategory === 'Todos' 
    ? integrations 
    : integrations.filter(i => i.category === activeCategory);

  return (
    <section id="integraciones" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-primary">+60 Integraciones</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            Conectamos con <span className="text-gradient-primary">Todo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nos integramos con las herramientas que ya usás. Sin fricciones, sin migraciones complicadas.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filtrar por categoría</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.03 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 border
                  ${activeCategory === cat 
                    ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25' 
                    : 'glass-card border-border/50 text-muted-foreground hover:border-primary/40 hover:text-foreground'
                  }
                `}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Logos Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 md:gap-4 max-w-6xl mx-auto mb-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredIntegrations.map((integration) => (
              <motion.div
                key={integration.name}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ 
                  scale: 1.12, 
                  y: -4,
                  transition: { type: "spring", stiffness: 400, damping: 15 }
                }}
                className="group flex flex-col items-center gap-1.5"
              >
                <motion.div 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-card/50 border border-border/50 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-lg hover:shadow-primary/10"
                >
                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                  <img 
                    src={integration.icon} 
                    alt={integration.name}
                    className="w-6 h-6 md:w-7 md:h-7 relative z-10 opacity-70 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </motion.div>
                <span className="text-[9px] md:text-[10px] text-muted-foreground/60 group-hover:text-foreground text-center transition-colors leading-tight font-medium truncate max-w-full px-1">
                  {integration.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">
            ¿No ves tu herramienta? <span className="text-primary font-medium">Desarrollamos integraciones custom.</span>
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button variant="outline" className="rounded-xl px-6 group" asChild>
              <a href="#contacto">
                Consultar por integración
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};