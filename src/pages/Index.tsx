import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { PainSection } from '@/components/PainSection';
import { TrustSection } from '@/components/TrustSection';
import { AgentVideoShowcase } from '@/components/AgentVideoShowcase';
import { ServiciosSection } from '@/components/ServiciosSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { IndustriasSection } from '@/components/IndustriasSection';
import { IntegrationsSection } from '@/components/IntegrationsSection';
import { TeamSection } from '@/components/TeamSection';
import { FAQSection } from '@/components/FAQSection';
import { ContactFormSection } from '@/components/ContactFormSection';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { StickyCTA } from '@/components/StickyCTA';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ResultsSection } from '@/components/ResultsSection';
import { SocialProofBanner } from '@/components/SocialProofBanner';
import { BlogPreviewSection } from '@/components/BlogPreviewSection';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';


const Index = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const canonicalPath = isEn ? '/en' : '/';

  return (
    <div className="relative min-h-screen overflow-x-hidden scroll-smooth">
      <ScrollProgress />
      <Navbar />

      {/* Global Canvas Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f3d4b] via-[hsl(var(--background))] to-[hsl(var(--background))]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/[0.07] rounded-full blur-[150px]" />
      </div>

      <Helmet>
        <title>{t('seo.homeTitle')}</title>
        <meta name="description" content={t('seo.homeDesc')} />
        <link rel="canonical" href={`https://mostachia-ai-nexus.lovable.app${canonicalPath}`} />
        <meta property="og:title" content={t('seo.homeTitle')} />
        <meta property="og:description" content={t('seo.homeDesc')} />
        <meta property="og:url" content={`https://mostachia-ai-nexus.lovable.app${canonicalPath}`} />
        <meta property="og:type" content="website" />
        {isEn && <html lang="en" />}
        {!isEn && <html lang="es" />}
      </Helmet>

      <main id="main" className="relative z-10">
        <HeroSection />
        <StatsSection />
        <PainSection />
        <ServiciosSection />
        <AgentVideoShowcase />
        <TrustSection />
        <ResultsSection />
        <HowItWorksSection />
        <IndustriasSection />
        <IntegrationsSection />
        <TeamSection />
        <FAQSection />
        <BlogPreviewSection />
        <SocialProofBanner />
        <ContactFormSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      {false && <StickyCTA />}

    </div>
  );
};

export default Index;
