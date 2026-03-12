import { Clock, TrendingDown, MessageSquareOff } from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { useIsMobile } from '@/hooks/use-mobile';

const pains = [
  {
    icon: MessageSquareOff,
    title: 'Atención Lenta',
    description: 'Leads que se enfrían por tardar en responder mensajes.',
  },
  {
    icon: TrendingDown,
    title: 'Datos Desordenados',
    description: 'Decisiones a ciegas por depender de Excels manuales o sistemas desconectados.',
  },
  {
    icon: Clock,
    title: 'Trabajo Repetitivo',
    description: 'Tu equipo perdiendo horas en tareas mecánicas en lugar de trabajo estratégico.',
  },
];

export const PainSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 lg:py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <BlurFade className="text-center mb-8 md:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 mb-4 md:mb-6 text-sm font-medium text-accent">
            El Problema
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Tu negocio crece, pero tus procesos{' '}
            <span className="text-accent">se rompen</span>
          </h2>
        </BlurFade>

        {isMobile ? (
          /* Mobile: compact list without cards */
          <div className="flex flex-col gap-3 max-w-sm mx-auto">
            {pains.map((pain, i) => (
              <BlurFade key={pain.title} delay={i * 0.1}>
                <div className="flex items-start gap-3 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <pain.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold font-display">{pain.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{pain.description}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        ) : (
          /* Desktop: original card grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {pains.map((pain, i) => (
              <BlurFade key={pain.title} delay={i * 0.12}>
                <div className="glass-card p-8 flex flex-col items-center text-center group h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <pain.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold font-display mb-2">{pain.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pain.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        )}
      </div>

      {/* Separator */}
      <div className="mt-12 lg:mt-20 mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
};

export default PainSection;
