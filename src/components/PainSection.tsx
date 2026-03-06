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
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <BlurFade className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-4 py-1.5 mb-6 text-sm font-medium text-destructive">
            El Problema
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Tu negocio crece, pero tus procesos{' '}
            <span className="text-destructive">se rompen</span>
          </h2>
        </BlurFade>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pains.map((pain, i) => (
            <BlurFade key={pain.title} delay={i * 0.12}>
              <div className="bg-white/[0.03] border border-white/[0.08] p-6 rounded-xl h-full text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-destructive/10 flex items-center justify-center mb-4">
                  <pain.icon className="w-7 h-7 text-destructive" />
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
