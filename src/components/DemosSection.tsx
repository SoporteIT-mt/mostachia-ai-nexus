import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Database, MessageSquare, FileText, Scale } from 'lucide-react';
import { DemoCard } from './DemoCard';
import { DemoModal } from './DemoModal';

const demos = [
  {
    id: 'migration',
    title: 'Migración Inteligente de Bases de Datos',
    description: 'Mapeo y traslado de SQL masivo con razonamiento de IA. Detecta esquemas, resuelve conflictos y ejecuta migraciones en segundos.',
    icon: Database,
    badge: 'Flagship Product',
    isFlagship: true,
    demoUrl: '/demos/migracion-db.html',
  },
  {
    id: 'whatsapp',
    title: 'Agente de Ventas WhatsApp',
    description: 'Bot inteligente que cierra ventas 24/7 en WhatsApp con personalidad de marca.',
    icon: MessageSquare,
    demoUrl: '/demos/hubdemos.html',
  },
  {
    id: 'reports',
    title: 'Generador de Reportes Financieros',
    description: 'Transforma datos crudos en reportes ejecutivos con insights accionables.',
    icon: FileText,
    isLocked: true,
    demoUrl: '',
  },
  {
    id: 'contracts',
    title: 'Analizador de Contratos Legales',
    description: 'IA que detecta cláusulas riesgosas y resume contratos en minutos.',
    icon: Scale,
    isLocked: true,
    demoUrl: '',
  },
];

export const DemosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeDemo, setActiveDemo] = useState<typeof demos[0] | null>(null);

  return (
    <section id="demos" ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-sm font-medium text-accent">Hub de Experiencias</span>
          </div>
          <h2 className="section-title mb-4">
            Probá Nuestra <span className="text-primary">Tecnología</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Demos interactivos para que experimentes el poder de la IA aplicada a negocios
          </p>
          <p className="text-sm text-muted-foreground mt-4 font-mono">
            ⚡ Demo limitada a 5 usos por día sin registro
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {demos.map((demo, i) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className={demo.isFlagship ? 'md:col-span-2 md:row-span-2' : ''}
            >
              <DemoCard
                {...demo}
                onTryDemo={() => setActiveDemo(demo)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <DemoModal
        isOpen={!!activeDemo}
        onClose={() => setActiveDemo(null)}
        demoUrl={activeDemo?.demoUrl || ''}
        title={activeDemo?.title || ''}
      />
    </section>
  );
};
