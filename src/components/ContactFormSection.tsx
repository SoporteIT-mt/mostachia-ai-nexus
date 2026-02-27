import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { Send, MapPin, Clock, Mail, MessageCircle, Calendar, ArrowRight, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import { CONFIG } from '@/config/constants';
import { BlurFade } from '@/components/ui/blur-fade';
import { ShimmerButton } from '@/components/ui/shimmer-button';

const formSchema = z.object({
  nombre: z.string().trim().min(1, 'Requerido').max(100),
  email: z.string().trim().email('Email inválido'),
  whatsapp: z.string().trim().max(20).optional().or(z.literal('')),
  mensaje: z.string().trim().max(500).optional().or(z.literal('')),
});

type FormValues = z.infer<typeof formSchema>;

export const ContactFormSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { nombre: '', email: '', whatsapp: '', mensaje: '' },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch(CONFIG.N8N_LEAD_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          source: 'web-form',
          timestamp: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        toast.success('¡Consulta enviada! Te contactamos en menos de 24 horas. 🎉');
        form.reset();
      } else {
        throw new Error('Error');
      }
    } catch {
      toast.error('Hubo un error. Intentá de nuevo o escribinos por WhatsApp.', {
        action: {
          label: 'WhatsApp',
          onClick: () => window.open(CONFIG.WHATSAPP_URL, '_blank'),
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <BlurFade className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Hablemos de{' '}
            <span className="text-gradient-primary">tu Proyecto</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dejanos tus datos y te contactamos en menos de 24 horas.
          </p>
        </BlurFade>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Form — left 3 cols */}
          <BlurFade delay={0.1} className="lg:col-span-3">
            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/[0.1]">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="nombre"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre *</FormLabel>
                          <FormControl>
                            <Input placeholder="Tu nombre" {...field} className="bg-white/[0.05] border-white/[0.1] focus:ring-2 focus:ring-primary/30 transition-shadow" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input placeholder="tu@email.com" type="email" {...field} className="bg-white/[0.05] border-white/[0.1] focus:ring-2 focus:ring-primary/30 transition-shadow" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>WhatsApp</FormLabel>
                        <FormControl>
                          <Input placeholder="+54 9 ..." {...field} className="bg-white/[0.05] border-white/[0.1] focus:ring-2 focus:ring-primary/30 transition-shadow" />
                        </FormControl>
                        <p className="text-xs text-muted-foreground mt-1">Te contactamos por WhatsApp</p>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="mensaje"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Contanos brevemente qué necesitás"
                            rows={3}
                            {...field}
                            className="bg-white/[0.05] border-white/[0.1] resize-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <ShimmerButton
                    shimmerColor="rgba(127, 205, 179, 0.8)"
                    background="linear-gradient(135deg, #60b99a, #4a9e82)"
                    borderRadius="12px"
                    className="w-full py-4 text-lg font-semibold"
                    type="submit"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Consulta
                      </>
                    )}
                  </ShimmerButton>

                  <p className="text-xs text-muted-foreground text-center">
                    🔒 No compartimos tu información. Respuesta en menos de 24hs.
                  </p>
                </form>
              </Form>
            </div>
          </BlurFade>

          {/* Info — right 2 cols */}
          <BlurFade delay={0.3} className="lg:col-span-2 space-y-6">
            {/* Contact info card */}
            <div className="p-6 rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/[0.1] space-y-5">
              <h3 className="font-display font-semibold text-lg">Contacto directo</h3>

              <a
                href={CONFIG.WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                +54 3564 66-7968
              </a>

              <a
                href={`mailto:${CONFIG.EMAIL}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                {CONFIG.EMAIL}
              </a>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                Córdoba, Argentina 🇦🇷
              </div>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                Lun-Vie, 9:00-18:00 (GMT-3)
              </div>
            </div>

            {/* CTA card */}
            <div className="p-6 rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/[0.1]">
              <p className="font-display font-semibold mb-3">¿Preferís hablar directo?</p>
              <a href={CONFIG.CALCOM_URL} target="_blank" rel="noopener noreferrer">
                <ShimmerButton
                  shimmerColor="rgba(127, 205, 179, 0.8)"
                  background="linear-gradient(135deg, #60b99a, #4a9e82)"
                  borderRadius="12px"
                  className="w-full py-4 font-semibold"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar Diagnóstico Gratis
                  <ArrowRight className="w-4 h-4 ml-2" />
                </ShimmerButton>
              </a>
              <p className="text-xs text-muted-foreground text-center mt-3">
                30 min · Gratuita · Sin compromiso
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
