import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Integration categories and image URLs (using real brand colors for visual appeal)
const integrations = [
  // Cloud
  { name: 'Google Cloud', category: 'Cloud', color: '#4285F4', icon: 'https://cdn.simpleicons.org/googlecloud' },
  { name: 'AWS', category: 'Cloud', color: '#FF9900', icon: 'https://cdn.simpleicons.org/amazonaws/FF9900' },
  { name: 'Azure', category: 'Cloud', color: '#0078D4', icon: 'https://cdn.simpleicons.org/microsoftazure' },
  // Pagos
  { name: 'Stripe', category: 'Pagos', color: '#635BFF', icon: 'https://cdn.simpleicons.org/stripe' },
  { name: 'PayPal', category: 'Pagos', color: '#00457C', icon: 'https://cdn.simpleicons.org/paypal' },
  { name: 'Mercado Pago', category: 'Pagos', color: '#00B1EA', icon: 'https://cdn.simpleicons.org/mercadopago' },
  // Comunicación
  { name: 'Slack', category: 'Comunicación', color: '#4A154B', icon: 'https://cdn.simpleicons.org/slack' },
  { name: 'Teams', category: 'Comunicación', color: '#6264A7', icon: 'https://cdn.simpleicons.org/microsoftteams' },
  { name: 'WhatsApp', category: 'Comunicación', color: '#25D366', icon: 'https://cdn.simpleicons.org/whatsapp' },
  { name: 'Twilio', category: 'Comunicación', color: '#F22F46', icon: 'https://cdn.simpleicons.org/twilio' },
  { name: 'Discord', category: 'Comunicación', color: '#5865F2', icon: 'https://cdn.simpleicons.org/discord' },
  // Productividad
  { name: 'Notion', category: 'Productividad', color: '#000000', icon: 'https://cdn.simpleicons.org/notion/ffffff' },
  { name: 'Airtable', category: 'Productividad', color: '#18BFFF', icon: 'https://cdn.simpleicons.org/airtable' },
  { name: 'Trello', category: 'Productividad', color: '#0052CC', icon: 'https://cdn.simpleicons.org/trello' },
  { name: 'Monday', category: 'Productividad', color: '#FF3D57', icon: 'https://cdn.simpleicons.org/monday' },
  { name: 'Asana', category: 'Productividad', color: '#F06A6A', icon: 'https://cdn.simpleicons.org/asana' },
  // CRM
  { name: 'Salesforce', category: 'CRM', color: '#00A1E0', icon: 'https://cdn.simpleicons.org/salesforce' },
  { name: 'HubSpot', category: 'CRM', color: '#FF7A59', icon: 'https://cdn.simpleicons.org/hubspot' },
  { name: 'Pipedrive', category: 'CRM', color: '#1A1A1A', icon: 'https://cdn.simpleicons.org/pipedrive/25CE7B' },
  { name: 'Zoho', category: 'CRM', color: '#C8202B', icon: 'https://cdn.simpleicons.org/zoho' },
  // Automatización
  { name: 'Zapier', category: 'Automatización', color: '#FF4A00', icon: 'https://cdn.simpleicons.org/zapier' },
  { name: 'Make', category: 'Automatización', color: '#6D00CC', icon: 'https://cdn.simpleicons.org/make' },
  { name: 'n8n', category: 'Automatización', color: '#EA4B71', icon: 'https://cdn.simpleicons.org/n8n' },
  // Email
  { name: 'SendGrid', category: 'Email', color: '#1A82E2', icon: 'https://cdn.simpleicons.org/sendgrid' },
  { name: 'Mailchimp', category: 'Email', color: '#FFE01B', icon: 'https://cdn.simpleicons.org/mailchimp' },
  // Database
  { name: 'PostgreSQL', category: 'Database', color: '#4169E1', icon: 'https://cdn.simpleicons.org/postgresql' },
  { name: 'MongoDB', category: 'Database', color: '#47A248', icon: 'https://cdn.simpleicons.org/mongodb' },
  { name: 'MySQL', category: 'Database', color: '#4479A1', icon: 'https://cdn.simpleicons.org/mysql' },
  { name: 'Redis', category: 'Database', color: '#DC382D', icon: 'https://cdn.simpleicons.org/redis' },
  // E-commerce
  { name: 'Shopify', category: 'E-commerce', color: '#7AB55C', icon: 'https://cdn.simpleicons.org/shopify' },
  { name: 'WooCommerce', category: 'E-commerce', color: '#96588A', icon: 'https://cdn.simpleicons.org/woocommerce' },
  // Desarrollo
  { name: 'GitHub', category: 'Desarrollo', color: '#181717', icon: 'https://cdn.simpleicons.org/github/ffffff' },
  { name: 'GitLab', category: 'Desarrollo', color: '#FC6D26', icon: 'https://cdn.simpleicons.org/gitlab' },
  { name: 'Jira', category: 'Desarrollo', color: '#0052CC', icon: 'https://cdn.simpleicons.org/jira' },
  { name: 'Figma', category: 'Diseño', color: '#F24E1E', icon: 'https://cdn.simpleicons.org/figma' },
  // IA
  { name: 'OpenAI', category: 'IA', color: '#412991', icon: 'https://cdn.simpleicons.org/openai/ffffff' },
  { name: 'Anthropic', category: 'IA', color: '#D4A574', icon: 'https://cdn.simpleicons.org/anthropic/ffffff' },
  { name: 'Google AI', category: 'IA', color: '#4285F4', icon: 'https://cdn.simpleicons.org/googlegemini' },
  { name: 'Vercel', category: 'Cloud', color: '#000000', icon: 'https://cdn.simpleicons.org/vercel/ffffff' },
];

const categories = ['Todos', 'Cloud', 'Pagos', 'Comunicación', 'Productividad', 'CRM', 'Automatización', 'Database', 'E-commerce', 'Desarrollo', 'IA'];

// Animation variants for wave/cascade effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.8,
    rotateX: -15,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      delay: Math.floor(i / 10) * 0.1 + (i % 10) * 0.03, // Wave effect by rows
    },
  }),
};

const pulseVariants = {
  initial: { boxShadow: "0 0 0 0 rgba(0, 200, 150, 0)" },
  pulse: {
    boxShadow: [
      "0 0 0 0 rgba(0, 200, 150, 0.4)",
      "0 0 0 10px rgba(0, 200, 150, 0)",
    ],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
};

export const IntegrationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Ensure even grid - pad to multiple of 8 for lg screens
  const paddedIntegrations = [...integrations];
  while (paddedIntegrations.length % 8 !== 0) {
    paddedIntegrations.push({ name: '', category: '', color: '', icon: '' });
  }

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
        {/* Header with staggered animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
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
            <span className="text-sm font-medium text-primary">+30 Integraciones</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            Conectamos con <span className="text-gradient-primary">Todo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nos integramos con las herramientas que ya usás. Sin fricciones, sin migraciones complicadas.
          </p>
        </motion.div>

        {/* Categories pills with cascade */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05, delayChildren: 0.3 },
            },
          }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.slice(0, 7).map((cat, i) => (
            <motion.span
              key={cat}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.8 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { type: "spring", stiffness: 150, damping: 12 }
                },
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 rounded-full text-xs font-medium glass-card border border-white/10 text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors cursor-default"
            >
              {cat}
            </motion.span>
          ))}
        </motion.div>

        {/* Logos Grid with Wave Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6 max-w-5xl mx-auto mb-12"
        >
          {paddedIntegrations.map((integration, i) => (
            integration.name ? (
              <motion.div
                key={integration.name}
                custom={i}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1, 
                  y: -4,
                  transition: { type: "spring", stiffness: 400, damping: 15 }
                }}
                className="group flex flex-col items-center gap-2"
              >
                <motion.div 
                  className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300 relative overflow-hidden"
                  whileHover="pulse"
                  variants={pulseVariants}
                >
                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <img 
                    src={integration.icon} 
                    alt={integration.name}
                    className="w-7 h-7 md:w-8 md:h-8 relative z-10 opacity-70 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </motion.div>
                <span className="text-[10px] md:text-xs text-muted-foreground/60 group-hover:text-muted-foreground text-center transition-colors leading-tight font-medium">
                  {integration.name}
                </span>
              </motion.div>
            ) : (
              <div key={`empty-${i}`} className="w-14 h-14 md:w-16 md:h-16" />
            )
          ))}
        </motion.div>

        {/* CTA with bounce animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, type: "spring", stiffness: 100 }}
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