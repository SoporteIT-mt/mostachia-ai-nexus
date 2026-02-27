import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ServiciosSection } from '@/components/ServiciosSection';
import { AgentVideoShowcase } from '@/components/AgentVideoShowcase';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { IndustriasSection } from '@/components/IndustriasSection';
import { IntegrationsSection } from '@/components/IntegrationsSection';
import { TrustSection } from '@/components/TrustSection';
import { TeamShowcase } from '@/components/TeamShowcase';
import { FAQSection } from '@/components/FAQSection';
import { ContactFormSection } from '@/components/ContactFormSection';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { StickyCTA } from '@/components/StickyCTA';
import { ParallaxBackground } from '@/components/ParallaxSection';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ScrollToTop } from '@/components/ScrollToTop';
import { StatsSection } from '@/components/StatsSection';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden scroll-smooth">
      <ScrollProgress />
      <Navbar />
      <main id="main" className="relative z-10">
        {/* 1. Hero */}
        <HeroSection />

        {/* 1.5 Stats */}
        <StatsSection />

        {/* 2. Servicios */}
        <ServiciosSection />

        {/* 3. Demos */}
        <AgentVideoShowcase />

        {/* 4. Cómo Funciona */}
        <HowItWorksSection />

        {/* 5. Industrias */}
        <IndustriasSection />

        {/* 6. Integraciones */}
        <IntegrationsSection />

        {/* 6.5 Quiénes Somos (Equipo) */}
        <TeamShowcase />

        {/* 7. Confianza */}
        <TrustSection />

        {/* 8. FAQ */}
        <FAQSection />

        {/* 9. Contacto */}
        <ContactFormSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyCTA />
      <ScrollToTop />
    </div>
  );
};

export default Index;
