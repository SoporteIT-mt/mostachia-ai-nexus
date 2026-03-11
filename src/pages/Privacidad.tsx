import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { CONFIG } from '@/config/constants';

const Privacidad = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-20 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold font-display mb-8">Política de Privacidad</h1>
        <p className="text-sm text-muted-foreground mb-10">Última actualización: Marzo 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-foreground/80">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Responsable del tratamiento</h2>
            <p>MostachIA — {CONFIG.EMAIL} — Córdoba, Argentina.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Datos que recopilamos</h2>
            <p>A través del formulario de contacto recopilamos: nombre, email, número de WhatsApp (opcional) y mensaje. Estos datos se utilizan exclusivamente para responder tu consulta y contactarte.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Finalidad</h2>
            <p>Los datos personales se usan para: responder consultas, enviar información sobre nuestros servicios (si lo solicitás) y mejorar nuestra atención.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Almacenamiento y seguridad</h2>
            <p>Los datos se almacenan de forma segura y no se comparten con terceros salvo obligación legal. Implementamos medidas técnicas para proteger tu información.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Cookies</h2>
            <p>Este sitio puede utilizar cookies técnicas y de análisis (Google Analytics) para mejorar la experiencia de navegación. No se usan cookies publicitarias.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Tus derechos</h2>
            <p>Podés solicitar el acceso, rectificación o eliminación de tus datos personales en cualquier momento escribiéndonos a <a href={`mailto:${CONFIG.EMAIL}`} className="text-primary hover:underline">{CONFIG.EMAIL}</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Contacto</h2>
            <p>Para cualquier consulta relacionada con esta política, escribinos a <a href={`mailto:${CONFIG.EMAIL}`} className="text-primary hover:underline">{CONFIG.EMAIL}</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacidad;
