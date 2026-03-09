import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { CONFIG } from '@/config/constants';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.2 + i * 0.15,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(96,185,154,0.08)_0%,_transparent_60%)]" />

      <div className="relative z-10 container mx-auto px-6 text-center pt-32 pb-24">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-mint-400/20 bg-mint-400/5 px-5 py-2 mb-10">
            <Sparkles className="w-4 h-4 text-mint-400" />
            <span className="text-sm font-medium text-mint-400/90">
              Automatización Inteligente para Empresas
            </span>
          </div>
        </motion.div>

        {/* H1 */}
        <motion.div
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight leading-[1.1] mb-8">
            <span className="text-white">Tu equipo digital</span>
            <br />
            <span className="text-gradient-primary">
              que nunca duerme.
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-12">
            Conectamos Agentes de IA a tu base de datos para responder a tus clientes, analizar tus métricas y operar tu negocio en piloto automático.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <a href={CONFIG.CALCOM_URL} target="_blank" rel="noopener noreferrer">
            <ShimmerButton
              shimmerColor="rgba(127, 205, 179, 0.8)"
              background="linear-gradient(135deg, #60b99a, #4a9e82)"
              borderRadius="9999px"
              className="px-8 py-4 text-base font-semibold shadow-glow hover:-translate-y-1 transition-transform duration-300"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Agendar Diagnóstico Gratis
              <ArrowRight className="w-4 h-4 ml-2" />
            </ShimmerButton>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
