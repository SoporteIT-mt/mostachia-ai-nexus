import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  AlertTriangle, Clock, DollarSign, FileSpreadsheet,
  Zap, Bot, BarChart3, Rocket 
} from 'lucide-react';

const problemItems = [
  { icon: FileSpreadsheet, text: 'Excel infinitos y errores manuales' },
  { icon: Clock, text: 'Horas perdidas en tareas repetitivas' },
  { icon: DollarSign, text: 'Dinero volando por ineficiencias' },
  { icon: AlertTriangle, text: 'Techo de crecimiento operativo' },
];

const solutionItems = [
  { icon: Bot, text: 'IA que entiende tu negocio' },
  { icon: Zap, text: 'Migraciones en segundos, no semanas' },
  { icon: BarChart3, text: 'Dashboards con insights reales' },
  { icon: Rocket, text: 'Escalabilidad sin límites' },
];

export const ProblemSolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="soluciones" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-50" />
      
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            Del <span className="text-destructive">Caos</span> al{' '}
            <span className="text-primary">Flujo Automático</span>
          </h2>
          <p className="section-subtitle mx-auto">
            No es magia, es tecnología aplicada con estrategia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 border-destructive/20 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent rounded-2xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">El Caos Manual</h3>
                  <p className="text-sm text-muted-foreground">Sin MostachIA</p>
                </div>
              </div>

              <div className="space-y-4">
                {problemItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-destructive/5 border border-destructive/10"
                  >
                    <item.icon className="w-5 h-5 text-destructive flex-shrink-0" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                <p className="text-sm text-center font-mono text-destructive">
                  ⚠️ Resultado: Crecimiento limitado
                </p>
              </div>
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 border-primary/20 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-accent/10 rounded-full blur-2xl" />
            </div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center pulse-glow">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">El Flujo Automático</h3>
                  <p className="text-sm text-muted-foreground">Con MostachIA</p>
                </div>
              </div>

              <div className="space-y-4">
                {solutionItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors"
                  >
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
                <p className="text-sm text-center font-mono text-primary">
                  ✓ Resultado: Escala sin fricciones
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
