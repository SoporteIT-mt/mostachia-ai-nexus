import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FocusRail, type FocusRailItem } from '@/components/ui/focus-rail';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { BlurFade } from '@/components/ui/blur-fade';
import { CONFIG } from '@/config/constants';

const AGENTS: FocusRailItem[] = [
  {
    id: 'ventas',
    title: 'Agente de Ventas 24/7',
    description: 'Atiende consultas de WhatsApp, califica leads y agenda reuniones automáticamente.',
    meta: 'WhatsApp · CRM · Cal.com',
    icon: '💬',
    // videoSrc: '/videos/agent-ventas.mp4',
  },
  {
    id: 'redes',
    title: 'Agente de Redes Sociales',
    description: 'Genera contenido, programa publicaciones y responde comentarios en piloto automático.',
    meta: 'Instagram · LinkedIn · TikTok',
    icon: '📱',
  },
  {
    id: 'datos',
    title: 'Agente de Análisis de Datos',
    description: 'Transforma datos crudos en dashboards accionables y reportes ejecutivos.',
    meta: 'SQL · Dashboard · Reportes',
    icon: '📊',
  },
  {
    id: 'soporte',
    title: 'Agente de Atención al Cliente',
    description: 'Resuelve tickets, escala problemas y mantiene la satisfacción al máximo.',
    meta: 'Tickets · Chat · Email',
    icon: '🎧',
  },
];

export const AgentVideoShowcase = () => {
  return (
    <section id="agentes" className="relative w-full py-20 lg:py-28 overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 text-center mb-8 lg:mb-12">
        <BlurFade delay={0}>
          <span className="inline-flex items-center gap-2 rounded-full border border-mint-400/30 bg-mint-400/10 px-4 py-1.5 mb-6 text-sm font-medium text-mint-400">
            🤖 Nuestros Agentes en Acción
          </span>
        </BlurFade>
        <BlurFade delay={0.1}>
          <h2 className="section-title text-foreground mb-4">
            Agentes que <span className="text-gradient-primary">trabajan por vos</span>
          </h2>
        </BlurFade>
        <BlurFade delay={0.2}>
          <p className="section-subtitle mx-auto">
            Cada agente se conecta a tus datos reales y opera 24/7 sin intervención.
          </p>
        </BlurFade>
      </div>

      {/* FocusRail */}
      <FocusRail items={AGENTS} autoPlay interval={6000} />

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center mt-12"
      >
        <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
          <a href={CONFIG.CALCOM_URL} target="_blank" rel="noopener noreferrer">
            <ShimmerButton
              shimmerColor="rgba(127, 205, 179, 0.8)"
              background="linear-gradient(135deg, #60b99a, #4a9e82)"
              borderRadius="12px"
              className="px-7 py-4 text-base font-semibold shadow-[0_4px_24px_rgba(96,185,154,0.4)]"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Agendar Diagnóstico y Ver Demo Real
              <ArrowRight className="ml-2 w-4 h-4" />
            </ShimmerButton>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AgentVideoShowcase;
