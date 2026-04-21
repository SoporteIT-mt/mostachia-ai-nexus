import { useState } from 'react';
import { ArrowRight, Calendar, ChevronDown, Film, UtensilsCrossed, HeartPulse, Scale, ShoppingCart, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagicCard } from '@/components/ui/magic-card';
import { BlurFade } from '@/components/ui/blur-fade';
import { Spotlight } from '@/components/ui/spotlight';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { CONFIG } from '@/config/constants';
import { useIsMobile } from '@/hooks/use-mobile';
import { type LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Industria {
  icon: LucideIcon;
  title: string;
  bullets: string[];
}

export const IndustriasSection = () => {
  const isMobile = useIsMobile();
  const [showAll, setShowAll] = useState(false);
  const { t } = useTranslation();

  const industrias: Industria[] = [
    {
      icon: Film,
      title: t('industrias.i1Title'),
      bullets: [
        t('industrias.i1b1'),
        t('industrias.i1b2'),
        t('industrias.i1b3'),
        t('industrias.i1b4'),
      ],
    },
    {
      icon: UtensilsCrossed,
      title: t('industrias.i2Title'),
      bullets: [
        t('industrias.i2b1'),
        t('industrias.i2b2'),
        t('industrias.i2b3'),
        t('industrias.i2b4'),
      ],
    },
    {
      icon: HeartPulse,
      title: t('industrias.i3Title'),
      bullets: [
        t('industrias.i3b1'),
        t('industrias.i3b2'),
        t('industrias.i3b3'),
        t('industrias.i3b4'),
      ],
    },
    {
      icon: Scale,
      title: t('industrias.i4Title'),
      bullets: [
        t('industrias.i4b1'),
        t('industrias.i4b2'),
        t('industrias.i4b3'),
        t('industrias.i4b4'),
      ],
    },
    {
      icon: ShoppingCart,
      title: t('industrias.i5Title'),
      bullets: [
        t('industrias.i5b1'),
        t('industrias.i5b2'),
        t('industrias.i5b3'),
        t('industrias.i5b4'),
      ],
    },
    {
      icon: GraduationCap,
      title: t('industrias.i6Title'),
      bullets: [
        t('industrias.i6b1'),
        t('industrias.i6b2'),
        t('industrias.i6b3'),
        t('industrias.i6b4'),
      ],
    },
  ];

  const visibleIndustrias = isMobile && !showAll ? industrias.slice(0, 4) : industrias;

  return (
    <section id="industrias" className="py-12 lg:py-20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="relative text-center mb-10 md:mb-16">
          <Spotlight size={600} fill="hsl(162 100% 39% / 0.08)" />
          <BlurFade>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              {t('industrias.title')} <span className="text-gradient-primary">{t('industrias.titleAccent')}</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('industrias.subtitle')}
            </p>
          </BlurFade>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {visibleIndustrias.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <BlurFade key={ind.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
                  className="group relative h-full"
                >
                  <MagicCard className="h-full">
                    <div className="relative p-5 md:p-6">
                      <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-5 w-5 md:h-6 md:w-6" />
                      </div>

                      <h3 className="text-base md:text-lg font-bold font-display mb-3 md:mb-4 group-hover:text-primary transition-colors">
                        {ind.title}
                      </h3>

                      <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-5">
                        {ind.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>

                      <a
                        href={CONFIG.CALCOM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                      >
                        {t('industrias.consultBtn')}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </MagicCard>
                </motion.div>
              </BlurFade>
            );
          })}
        </div>

        {/* "Ver todas" toggle - mobile only */}
        {isMobile && !showAll && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              {t('industrias.showAll')}
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Banner */}
        <BlurFade delay={0.5} className="mt-10 md:mt-12 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 md:p-8 rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/[0.1]">
            <div className="text-center sm:text-left">
              <p className="text-foreground font-display font-semibold text-base md:text-lg">
                {t('industrias.bannerTitle')}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                {t('industrias.bannerSubtitle')}
              </p>
            </div>
            <a href={CONFIG.CALCOM_URL} target="_blank" rel="noopener noreferrer">
              <ShimmerButton
                shimmerColor="rgba(127, 205, 179, 0.8)"
                background="linear-gradient(135deg, #60b99a, #4a9e82)"
                borderRadius="12px"
                className="px-5 py-2.5 md:px-6 md:py-3 font-semibold whitespace-nowrap text-sm shadow-[0_4px_24px_rgba(96,185,154,0.4)]"
              >
                <Calendar className="w-4 h-4 mr-2" />
                {t('industrias.bannerBtn')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </ShimmerButton>
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default IndustriasSection;
