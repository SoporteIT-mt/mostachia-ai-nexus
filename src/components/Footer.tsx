import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const footerLinks = {
  producto: [
    { label: 'Demos', href: '#demos' },
    { label: 'Precios', href: '#modelo' },
    { label: 'Integraciones', href: '#' },
    { label: 'API', href: '#' },
  ],
  empresa: [
    { label: 'Sobre Nosotros', href: '#' },
    { label: 'Blog', href: '#blog' },
    { label: 'Carreras', href: '#' },
    { label: 'Contacto', href: '#contacto' },
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
    
    toast({
      title: '¡Suscripción exitosa!',
      description: 'Recibirás nuestros hacks de automatización semanalmente.',
    });
    setEmail('');
  };

  return (
    <footer id="contacto" className="relative pt-24 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 to-transparent" />
      
      <div className="container relative z-10 mx-auto px-6">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 mb-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Recibí hacks de automatización semanalmente
          </h3>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Tips prácticos de IA, casos de uso y novedades directamente en tu inbox.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="flex-1 px-6 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
            <Button type="submit" className="btn-glow rounded-xl px-8">
              Suscribirse
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </form>

          {/* Webhook placeholder comment */}
          {/* TODO: Connect to n8n webhook for newsletter subscription */}
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-xl font-bold text-white">M</span>
              </div>
              <span className="font-display font-bold text-xl">
                Mostach<span className="text-primary">IA</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Transformamos empresas combinando IA con estrategia humana.
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
            <h4 className="font-semibold mb-4">Producto</h4>
            <ul className="space-y-3">
              {footerLinks.producto.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
              className="w-10 h-10 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Cal.com/Calendly placeholder */}
        {/* TODO: Add Cal.com embed script for consultation booking */}
      </div>
    </footer>
  );
};
