import { Clock, TrendingDown, MessageSquareOff } from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';

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
  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <BlurFade className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 mb-6 text-sm font-medium text-accent">
            El Problema
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Tu negocio crece, pero tus procesos{' '}
            <span className="text-accent">se rompen</span>
          </h2>
        </BlurFade>

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
      </div>
    </section>
  );
};

export default PainSection;
