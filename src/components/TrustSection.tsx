import { ShieldCheck, Zap, MapPin, Puzzle, Check } from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { Spotlight } from '@/components/ui/spotlight';
import { motion } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';

interface Diferenciador {
  icon: LucideIcon;
  title: string;
  description: string;
}

const diferenciadores: Diferenciador[] = [
  {
    icon: ShieldCheck,
    title: 'Tus Datos, Tu Control',
    description: 'Trabajamos directamente con tu base de datos. No almacenamos información sensible. Toda la IA se ejecuta sobre tus propios sistemas.',
  },
  {
    icon: Zap,
    title: 'Implementación Express',
    description: 'En 1 a 4 semanas tenés tu solución funcionando. Sin meses de desarrollo ni costos ocultos.',
  },
  {
    icon: MapPin,
    title: 'Equipo Local, Soporte Real',
    description: 'Somos un equipo argentino de Córdoba, Argentina. Hablás directamente con quienes construyen tu solución, no con bots de soporte.',
  },
  {
    icon: Puzzle,
    title: 'Tecnología Modular',
    description: 'Misma arquitectura probada, adaptada a tu rubro. Lo que funciona para un cine funciona para un restaurante, una farmacia o un e-commerce.',
  },
];

const garantias = [
  'Consultoría inicial gratuita',
  'Capacitación incluida',
  'Soporte post-implementación',
  'Compatible con tu base de datos actual',
  'Funciona por WhatsApp',
  'Español nativo',
];

export const TrustSection = () => {
  return (
    <section id="confianza" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with Spotlight */}
        <div className="relative text-center mb-16">
          <Spotlight size={600} fill="hsl(162 100% 39% / 0.08)" />
          <BlurFade>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              ¿Por Qué <span className="text-gradient-primary">Elegirnos</span>?
            </h2>
          </BlurFade>
        </div>

        {/* 2x2 Grid */}
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

        {/* Garantías chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
          {garantias.map((g, i) => (
            <BlurFade key={i} delay={0.5 + i * 0.06}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] text-sm text-foreground/80">
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                {g}
              </span>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};
