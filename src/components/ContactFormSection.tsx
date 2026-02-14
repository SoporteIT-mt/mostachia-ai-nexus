import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, MapPin, Clock, Mail, MessageCircle, Calendar, ArrowRight, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import { CONFIG } from '@/config/constants';

const formSchema = z.object({
  nombre: z.string().trim().min(1, 'El nombre es requerido').max(100),
  email: z.string().trim().email('Email inválido').max(255),
  empresa: z.string().trim().max(100).optional().or(z.literal('')),
  rubro: z.string().min(1, 'Seleccioná un rubro'),
  mensaje: z.string().trim().max(1000).optional().or(z.literal('')),
});

type FormValues = z.infer<typeof formSchema>;

const rubros = [
  'Gastronomía',
  'Retail / E-commerce',
  'Salud / Farmacias',
  'Contable / Legal',
  'Entretenimiento',
  'Educación',
  'Otro',
];

export const ContactFormSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { nombre: '', email: '', empresa: '', rubro: '', mensaje: '' },
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
    <section id="contacto" ref={ref} className="py-24 md:py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            ¿Listo para Automatizar{' '}
            <span className="text-gradient-primary">tu Negocio</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dejanos tus datos y te contactamos en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Form — left 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-3"
          >
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
                            <Input placeholder="Tu nombre" {...field} className="bg-white/[0.05] border-white/[0.1]" />
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
                            <Input placeholder="tu@email.com" type="email" {...field} className="bg-white/[0.05] border-white/[0.1]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="empresa"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Empresa</FormLabel>
                          <FormControl>
                            <Input placeholder="Nombre de tu empresa" {...field} className="bg-white/[0.05] border-white/[0.1]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="rubro"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Rubro *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white/[0.05] border-white/[0.1]">
                                <SelectValue placeholder="Seleccioná un rubro" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-background border-white/[0.15] backdrop-blur-xl z-50">
                              {rubros.map((r) => (
                                <SelectItem key={r} value={r}>{r}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="mensaje"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Contanos brevemente qué procesos te gustaría mejorar..."
                            rows={3}
                            {...field}
                            className="bg-white/[0.05] border-white/[0.1] resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="btn-glow rounded-xl w-full py-6 text-lg"
                    disabled={isSubmitting}
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
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    🔒 No compartimos tu información. Respuesta en menos de 24hs.
                  </p>
                </form>
              </Form>
            </div>
          </motion.div>

          {/* Info — right 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
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
              <Button className="btn-glow rounded-xl w-full" asChild>
                <a href={CONFIG.CALCOM_URL} target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar Videollamada
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                30 min · Gratuita · Sin compromiso
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
