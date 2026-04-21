import { Users, Clock, ThumbsUp, MapPin } from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { useTranslation } from 'react-i18next';

export const SocialProofBanner = () => {
  const { t } = useTranslation();

  const proofs = [
    { icon: Users, text: t('socialProof.p1') },
    { icon: Clock, text: t('socialProof.p2') },
    { icon: ThumbsUp, text: t('socialProof.p3') },
    { icon: MapPin, text: t('socialProof.p4') },
  ];

  return (
    <section className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.04] via-transparent to-primary/[0.04] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <BlurFade>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {proofs.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.06]"
              >
                <item.icon className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-foreground/70 font-medium whitespace-nowrap">{item.text}</span>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default SocialProofBanner;
