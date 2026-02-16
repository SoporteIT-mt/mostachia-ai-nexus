import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: '¿Cuánto tiempo toma implementar una solución?',
    answer: 'Dependiendo de la complejidad, la mayoría de las implementaciones toman entre 1 y 4 semanas. Proyectos simples como chatbots pueden estar listos en días, mientras que migraciones de bases de datos complejas requieren más tiempo de análisis y testing.',
  },
  {
    question: '¿Necesito conocimientos técnicos para usar las herramientas?',
    answer: 'No. Nuestras soluciones están diseñadas para usuarios de negocio. La interfaz es intuitiva y proporcionamos capacitación completa. Además, nuestro equipo de soporte está disponible 24/7 para asistirte.',
  },
  {
    question: '¿Cómo garantizan la seguridad de mis datos?',
    answer: 'Utilizamos encriptación de nivel bancario (AES-256), servidores certificados SOC 2 Type II, y cumplimos con normativas GDPR y regulaciones locales. Tus datos nunca se comparten con terceros y tenés control total sobre ellos.',
  },
  {
    question: '¿Puedo probar antes de contratar?',
    answer: 'Sí. Ofrecemos demos interactivas sin registro y una consultoría gratuita de 30 minutos para analizar tu caso específico. También tenemos garantía de devolución de 30 días si no ves resultados.',
  },
  {
    question: '¿Qué pasa si necesito personalización adicional?',
    answer: 'Nuestros planes Growth y Scale incluyen personalizaciones. Para necesidades más complejas, el plan Enterprise ofrece desarrollo a medida con un ingeniero dedicado que trabaja exclusivamente en tu proyecto.',
  },
  {
    question: '¿Cómo funciona el soporte técnico?',
    answer: 'Dependiendo del plan, tenés acceso a soporte por comunidad, chat prioritario o un ingeniero dedicado. El tiempo de respuesta varía de 24 horas (Starter) a respuesta inmediata (Enterprise).',
  },
  {
    question: '¿Pueden integrarse con mis sistemas actuales?',
    answer: 'Sí. Nos integramos con +200 herramientas incluyendo SAP, Salesforce, HubSpot, Google Workspace, Microsoft 365, y prácticamente cualquier sistema con API. También desarrollamos conectores personalizados si es necesario.',
  },
  {
    question: '¿Qué ROI puedo esperar?',
    answer: 'En promedio, nuestros clientes ven un retorno de inversión en los primeros 2-3 meses. La automatización típicamente reduce costos operativos entre 40-70% y aumenta la productividad del equipo significativamente.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="faq" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.15, type: "spring", stiffness: 150 }}
          >
            <HelpCircle className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Preguntas Frecuentes</span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold font-display mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Resolvemos Tus <span className="text-gradient-primary">Dudas</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Todo lo que necesitás saber antes de dar el primer paso
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={itemVariants}>
                <AccordionItem 
                  value={`item-${i}`}
                  className="glass-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left py-5 hover:no-underline group">
                    <span className="text-base font-semibold pr-4 group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            ¿Tenés otra pregunta?{' '}
            <a href="#contacto" className="text-primary hover:underline font-semibold">
              Hablemos directamente
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};