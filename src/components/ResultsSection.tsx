import { Film, UtensilsCrossed, ShoppingCart, Calculator } from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { Spotlight } from '@/components/ui/spotlight';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTranslation } from 'react-i18next';

export const ResultsSection = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  const results = [
    {
      icon: Film,
      industry: t('results.r1Industry'),
      description: t('results.r1Desc'),
      metric: t('results.r1Metric'),
    },
    {
      icon: UtensilsCrossed,
      industry: t('results.r2Industry'),
      description: t('results.r2Desc'),
      metric: t('results.r2Metric'),
    },
    {
      icon: ShoppingCart,
      industry: t('results.r3Industry'),
      description: t('results.r3Desc'),
      metric: t('results.r3Metric'),
    },
    {
      icon: Calculator,
      industry: t('results.r4Industry'),
      description: t('results.r4Desc'),
      metric: t('results.r4Metric'),
    },
  ];

  return (
    <section className="py-12 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="relative text-center mb-10 md:mb-14">
          <Spotlight size={500} fill="rgba(115, 215, 203, 0.06)" />
          <BlurFade>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              {t('results.title')} <span className="text-gradient-primary">{t('results.titleAccent')}</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('results.subtitle')}
            </p>
          </BlurFade>
        </div>

        {isMobile ? (
          /* Mobile: horizontal scroll slider */
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-2 px-2 scrollbar-hide">
            {results.map((item, i) => (
              <div
                key={i}
                className="snap-start shrink-0 w-[75vw] max-w-[280px] glass-card p-5 flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-sm text-foreground/90">{item.industry}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">{item.description}</p>
                <Badge variant="secondary" className="w-fit bg-primary/10 text-primary border-primary/20 text-[10px]">
                  {item.metric}
                </Badge>
              </div>
            ))}
          </div>
        ) : (
          /* Desktop: grid */
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {results.map((item, i) => (
              <BlurFade key={i} delay={i * 0.08}>
                <div className="glass-card p-6 h-full flex flex-col gap-4 group hover:border-primary/20 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground/90">{item.industry}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.description}</p>
                  <Badge variant="secondary" className="w-fit bg-primary/10 text-primary border-primary/20 text-xs">
                    {item.metric}
                  </Badge>
                </div>
              </BlurFade>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ResultsSection;
