import { ShieldCheck, Zap, MapPin, Puzzle, Check } from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { Spotlight } from '@/components/ui/spotlight';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { type LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Diferenciador {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const TrustSection = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  const diferenciadores: Diferenciador[] = [
    {
      icon: ShieldCheck,
      title: t('trust.d1Title'),
      description: t('trust.d1Desc'),
    },
    {
      icon: Zap,
      title: t('trust.d2Title'),
      description: t('trust.d2Desc'),
    },
    {
      icon: MapPin,
      title: t('trust.d3Title'),
      description: t('trust.d3Desc'),
    },
    {
      icon: Puzzle,
      title: t('trust.d4Title'),
      description: t('trust.d4Desc'),
    },
  ];

  const garantias = [
    t('trust.g1'),
    t('trust.g2'),
    t('trust.g3'),
    t('trust.g4'),
    t('trust.g5'),
    t('trust.g6'),
  ];

  return (
    <section id="confianza" className="py-12 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="relative text-center mb-10 md:mb-16">
          <Spotlight size={600} fill="hsl(162 100% 39% / 0.08)" />
          <BlurFade>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              {t('trust.title')} <span className="text-gradient-primary">{t('trust.titleAccent')}</span>?
            </h2>
          </BlurFade>
        </div>

        {isMobile ? (
          /* Mobile: simple icon-inline list */
          <div className="flex flex-col gap-4 max-w-sm mx-auto mb-10">
            {diferenciadores.map((d, i) => {
              const Icon = d.icon;
              return (
                <BlurFade key={d.title} delay={i * 0.08}>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold font-display">{d.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{d.description}</p>
                    </div>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        ) : (
          /* Desktop: 2x2 grid with glass cards */
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14">
            {diferenciadores.map((d, i) => {
              const Icon = d.icon;
              return (
                <BlurFade key={d.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300 } }}
                    className="group h-full"
                  >
                    <div className="glass-card p-8 text-center h-full group">
                      <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold font-display mb-2">{d.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{d.description}</p>
                    </div>
                  </motion.div>
                </BlurFade>
              );
            })}
          </div>
        )}

        {/* Garantías chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 max-w-4xl mx-auto">
          {garantias.map((g, i) => (
            <BlurFade key={i} delay={0.5 + i * 0.06}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs md:text-sm text-foreground/80">
                <Check className="h-3 w-3 md:h-3.5 md:w-3.5 text-emerald-400" />
                {g}
              </span>
            </BlurFade>
          ))}
        </div>
      </div>

      {/* Separator */}
      <div className="mt-12 lg:mt-20 mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
};
