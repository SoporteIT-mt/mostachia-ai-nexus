import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const footerLinks = {
  producto: [
    { label: 'Hub de Demos', href: '#demos' },
    { label: 'Precios', href: '#precios' },
    { label: 'Integraciones', href: '#' },
    { label: 'API', href: '#' },
  ],
  empresa: [
    { label: 'Sobre Nosotros', href: '#' },
    { label: 'Blog', href: '#blog' },
    { label: 'Carreras', href: '#' },
    { label: 'Empezar Transformación', href: '#contacto' },
  ],
  legal: [
    { label: 'Privacidad', href: '#' },
    { label: 'Términos', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
};

export const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // TODO: Connect to n8n webhook for newsletter subscription
    toast({
      title: '¡Suscripción exitosa!',
      description: 'Recibirás nuestros hacks de automatización semanalmente.',
    });
    setEmail('');
  };

  return (
    <footer id="contacto" className="relative pt-24 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-transparent" />
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-6">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card-glow p-8 md:p-12 mb-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 font-display">
            Recibí hacks de <span className="text-primary">automatización</span> semanalmente
          </h3>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Tips prácticos de IA, casos de uso y novedades de Automatización IA Argentina directamente en tu inbox.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="flex-1 px-6 py-3 rounded-xl bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
              required
            />
            <Button type="submit" className="btn-glow rounded-xl px-8">
              Suscribirse
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2 font-display">
              ¿Listo para empezar tu transformación?
            </h3>
            <p className="text-muted-foreground">
              Agenda una consultoría gratuita de 30 minutos con nuestro equipo.
            </p>
          </div>
          <Button className="btn-glow rounded-xl px-8 py-6 text-lg whitespace-nowrap" asChild>
            <a href="https://cal.com/mostachia" target="_blank" rel="noopener noreferrer">
              Agendar Ahora
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
          {/* TODO: Add Cal.com embed script for consultation booking */}
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25">
                <span className="text-xl font-bold text-white">M</span>
              </div>
              <span className="font-display font-bold text-xl">
                Mostach<span className="text-primary">IA</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Tu nuevo sistema operativo empresarial. Automatización IA Argentina para empresas que escalan.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <MapPin className="w-4 h-4" />
              Buenos Aires, Argentina
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              hola@mostachia.com
            </div>
          </div>

          {/* Producto */}
          <div>
            <h4 className="font-semibold mb-4 font-display">Producto</h4>
            <ul className="space-y-3">
              {footerLinks.producto.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold mb-4 font-display">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 font-display">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 MostachIA. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};