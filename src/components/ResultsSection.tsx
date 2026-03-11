import { Film, UtensilsCrossed, ShoppingCart, Calculator } from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { Spotlight } from '@/components/ui/spotlight';
import { Badge } from '@/components/ui/badge';

const results = [
  {
    icon: Film,
    industry: 'Cine en Córdoba',
    description: 'Automatizamos la atención por WhatsApp. Hoy responde 200+ consultas diarias sin intervención humana.',
    metric: '200+ consultas/día',
  },
  {
    icon: UtensilsCrossed,
    industry: 'Restaurante',
    description: 'Dashboard de ventas en tiempo real. El dueño dejó de depender de Excel para tomar decisiones.',
    metric: 'Decisiones en tiempo real',
  },
  {
    icon: ShoppingCart,
    industry: 'E-commerce',
    description: 'Agente de soporte que resuelve el 85% de consultas sin escalar a un humano.',
    metric: '85% resolución automática',
  },
  {
    icon: Calculator,
    industry: 'Estudio Contable',
    description: 'Migración de base de datos legacy y reportes automatizados. 15 horas semanales recuperadas.',
    metric: '15 hs/semana ahorradas',
  },
];

export const ResultsSection = () => {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="relative text-center mb-14">
          <Spotlight size={500} fill="rgba(115, 215, 203, 0.06)" />
          <BlurFade>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Resultados <span className="text-gradient-primary">Reales</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Casos anónimos de implementaciones que ya están funcionando.
            </p>
          </BlurFade>
        </div>

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
      </div>
    </section>
  );
};

export default ResultsSection;
