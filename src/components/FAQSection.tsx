import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONFIG } from '@/config/constants';
import { BlurFade } from '@/components/ui/blur-fade';
import { Spotlight } from '@/components/ui/spotlight';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: '¿Con qué tipo de negocios trabajan?',
    answer: 'Con cualquier negocio que tenga datos y quiera sacarles provecho. Ya implementamos sistemas para cines, restaurantes, heladerías, dietéticas, estudios contables, farmacias y e-commerce. La arquitectura es modular y se adapta a cualquier rubro.',
  },
  {
    question: '¿Necesito tener una base de datos?',
    answer: 'No necesariamente. Si ya tenés un sistema (POS, CRM, Excel, Google Sheets), lo conectamos. Si no tenés nada, te ayudamos a armar la estructura desde cero.',
  },
  {
    question: '¿Cuánto tarda la implementación?',
    answer: 'Depende de la complejidad. Un agente de WhatsApp básico puede estar en 1 semana. Un sistema completo con dashboards, analytics y automatización tarda 2-4 semanas.',
  },
  {
    question: '¿Funciona por WhatsApp?',
    answer: 'Sí. Todos nuestros agentes pueden funcionar por WhatsApp. Mandás un mensaje, el agente consulta tus datos reales y responde con información, dashboards o acciones automáticas.',
  },
  {
    question: '¿Cuánto cuesta?',
    answer: 'Depende de lo que necesites. Trabajamos con proyectos a medida y planes mensuales. Lo mejor es agendar una llamada gratuita de 30 minutos para entender tu caso y darte una propuesta precisa con precio cerrado.',
  },
  {
    question: '¿Los dashboards se pueden descargar?',
    answer: 'Sí. Todos los dashboards tienen botón de descarga en PDF y también se pueden imprimir directamente desde el navegador. Los datos siempre son en tiempo real.',
  },
  {
    question: '¿Se integran con mis sistemas actuales?',
    answer: 'Sí. Nos integramos con MySQL, SQL Server, MongoDB, PostgreSQL, Google Sheets, Gmail, WhatsApp, MercadoPago, AFIP, Shopify, TiendaNube y prácticamente cualquier sistema con API.',
  },
  {
    question: '¿Qué pasa si necesito algo que no está en los servicios listados?',
    answer: 'Hacemos desarrollos a medida. Contanos qué necesitás en una reunión y te decimos si podemos ayudarte y en cuánto tiempo.',
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with Spotlight */}
        <div className="relative text-center mb-16">
          <Spotlight size={600} fill="hsl(262 83% 58% / 0.08)" />
          <BlurFade>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Preguntas <span className="text-gradient-primary">Frecuentes</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lo que todos nos preguntan antes de arrancar.
            </p>
          </BlurFade>
        </div>

        {/* Accordion with BlurFade per item */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <BlurFade key={i} delay={i * 0.06}>
                <AccordionItem
                  value={`item-${i}`}
                  className="bg-white/[0.05] backdrop-blur-md border border-white/[0.1] rounded-xl px-6 data-[state=open]:border-primary/30 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left py-5 hover:no-underline group">
                    <span className="text-base font-semibold font-display pr-4 group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </BlurFade>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <BlurFade delay={0.5} className="text-center mt-12">
          <p className="text-muted-foreground mb-4">¿Tenés otra pregunta?</p>
          <Button variant="outline" className="rounded-xl px-6 border-white/20 hover:border-primary/50" asChild>
            <a href={CONFIG.WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              Preguntanos por WhatsApp
            </a>
          </Button>
        </BlurFade>
      </div>
    </section>
  );
};
