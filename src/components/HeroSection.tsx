import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { CONFIG, trackEvent, CRO_EVENTS } from '@/config/constants';
import { useTranslation } from 'react-i18next';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.2 + i * 0.15, ease: [0.25, 0.4, 0.25, 1] }
  }),
};

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-28 sm:pb-10 px-4 md:px-8 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Isotipo */}
        <motion.img
          src="/isotipo-mint.png"
          alt=""
          className="h-10 w-10 object-contain opacity-80 mb-4 mx-auto"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
        />

        {/* Etiqueta superior */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-white/70">
            {t('hero.badge')}
          </span>
        </motion.div>

        {/* Título Masivo */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight tracking-tight"
        >
          <span className="block text-white">{t('hero.title1')}</span>
          <motion.span
            className="block bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
          >
            {t('hero.title2')}
          </motion.span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* CTA Principal Único */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="pt-8 flex justify-center"
        >
          <ShimmerButton
            shimmerColor="rgba(96, 185, 154, 0.8)"
            background="linear-gradient(135deg, hsl(159 37% 55%), hsl(159 37% 45%))"
            borderRadius="9999px"
            className="px-8 py-4 text-base font-semibold shadow-glow hover:-translate-y-1 transition-transform duration-300"
            onClick={() => {
              trackEvent(CRO_EVENTS.CTA_HERO_CLICK, { location: 'hero' });
              window.open(CONFIG.CALCOM_URL, '_blank');
            }}
          >
            <Calendar className="w-5 h-5 mr-2" />
            {t('hero.cta')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
