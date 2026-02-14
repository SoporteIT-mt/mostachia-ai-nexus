import { CONFIG } from '@/config/constants';
import { Instagram, Linkedin, MapPin, Mail, Phone, Calendar } from 'lucide-react';
import { DotPattern } from '@/components/ui/dot-pattern';

const serviciosLinks = [
  { label: 'Dashboards IA', href: '#servicios' },
  { label: 'Agentes WhatsApp', href: '#servicios' },
  { label: 'Automatización', href: '#servicios' },
  { label: 'Migración de Datos', href: '#servicios' },
];

const empresaLinks = [
  { label: 'Cómo Funciona', href: '#proceso' },
  { label: 'Industrias', href: '#industrias' },
  { label: 'Demos', href: '#demos' },
  { label: 'FAQ', href: '#faq' },
];

export const Footer = () => {
  return (
    <footer className="relative pt-20 pb-8 bg-black/40 overflow-hidden">
      {/* DotPattern background */}
      <DotPattern className="opacity-30 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1 — Logo */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25">
                <span className="text-xl font-bold text-white">M</span>
              </div>
              <span className="font-display font-bold text-xl">
                Mostach<span className="text-primary">IA</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground mb-5">
              Automatización Inteligente para Negocios
            </p>
            <div className="flex items-center gap-3">
              <a
                href={CONFIG.INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CONFIG.LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2 — Servicios */}
          <div>
            <h4 className="font-display font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3">
              {serviciosLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors link-underline">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Empresa */}
          <div>
            <h4 className="font-display font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {empresaLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors link-underline">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contacto */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a href={CONFIG.WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 shrink-0" /> +54 3564 66-7968
                </a>
              </li>
              <li>
                <a href={`mailto:${CONFIG.EMAIL}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 shrink-0" /> {CONFIG.EMAIL}
                </a>
              </li>
              <li>
                <a href={CONFIG.CALCOM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Calendar className="w-4 h-4 shrink-0" /> Agendar Reunión
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 shrink-0" /> Córdoba, Argentina 🇦🇷
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 MostachIA. Automatización Inteligente para Negocios.
          </p>
        </div>
      </div>
    </footer>
  );
};
