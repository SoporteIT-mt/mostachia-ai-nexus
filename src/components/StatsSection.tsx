import { NumberTicker } from '@/components/ui/number-ticker';
import { BlurFade } from '@/components/ui/blur-fade';

const stats = [
  { value: 30, suffix: '+', label: 'Clientes Activos' },
  { value: 8, suffix: '+', label: 'Industrias' },
  { value: 50, suffix: '+', label: 'Agentes IA 24/7' },
  { label: 'Implementación', custom: '1-4 sem' },
];

export const StatsSection = () => {
  return (
    <section className="relative z-10 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto rounded-2xl bg-card/30 backdrop-blur-md border border-border/20 py-8 px-4 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
            {stats.map((stat, i) => (
              <BlurFade key={stat.label} delay={0.1 + i * 0.15}>
                <div className={`flex flex-col items-center text-center ${i < 3 ? 'lg:border-r lg:border-border/20' : ''}`}>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-2" style={{ textShadow: '0 0 30px rgba(96, 185, 154, 0.4)' }}>
                    {stat.custom ? (
                      stat.custom
                    ) : (
                      <NumberTicker value={stat.value} suffix={stat.suffix} />
                    )}
                  </span>
                  <span className="text-xs sm:text-sm text-muted-foreground font-medium tracking-wider uppercase">
                    {stat.label}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
