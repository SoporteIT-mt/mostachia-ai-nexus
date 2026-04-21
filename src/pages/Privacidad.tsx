import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { CONFIG } from '@/config/constants';
import { useTranslation } from 'react-i18next';

const Privacidad = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const homePath = isEn ? '/en' : '/';

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{t('seo.privacyTitle')}</title>
        <meta name="description" content={t('seo.privacyDesc')} />
        <link rel="canonical" href="https://mostachia-ai-nexus.lovable.app/privacidad" />
      </Helmet>
      <div className="container mx-auto px-6 py-20 max-w-3xl">
        <Link to={homePath} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" />
          {t('privacy.backToHome')}
        </Link>

        <h1 className="text-4xl font-bold font-display mb-8">{t('privacy.title')}</h1>
        <p className="text-sm text-muted-foreground mb-10">{t('privacy.lastUpdated')}</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-foreground/80">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">{t('privacy.s1Title')}</h2>
            <p>MostachIA — {CONFIG.EMAIL} — Córdoba, Argentina.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">{t('privacy.s2Title')}</h2>
            <p>{t('privacy.s2Content')}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">{t('privacy.s3Title')}</h2>
            <p>{t('privacy.s3Content')}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">{t('privacy.s4Title')}</h2>
            <p>{t('privacy.s4Content')}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">{t('privacy.s5Title')}</h2>
            <p>{t('privacy.s5Content')}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">{t('privacy.s6Title')}</h2>
            <p>{t('privacy.s6Content')} <a href={`mailto:${CONFIG.EMAIL}`} className="text-primary hover:underline">{CONFIG.EMAIL}</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">{t('privacy.s7Title')}</h2>
            <p>{t('privacy.s7Content')} <a href={`mailto:${CONFIG.EMAIL}`} className="text-primary hover:underline">{CONFIG.EMAIL}</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacidad;
