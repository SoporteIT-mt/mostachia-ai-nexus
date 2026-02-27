import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ServiciosSection } from '@/components/ServiciosSection';
import { AgentVideoShowcase } from '@/components/AgentVideoShowcase';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { IndustriasSection } from '@/components/IndustriasSection';
import { IntegrationsSection } from '@/components/IntegrationsSection';
import { TrustSection } from '@/components/TrustSection';
import { FAQSection } from '@/components/FAQSection';
import { ContactFormSection } from '@/components/ContactFormSection';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { StickyCTA } from '@/components/StickyCTA';
import { ParallaxBackground } from '@/components/ParallaxSection';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ScrollToTop } from '@/components/ScrollToTop';
import { SectionTransition, AnimatedDivider } from '@/components/SectionTransition';
import { StatsSection } from '@/components/StatsSection';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden scroll-smooth">
      <ScrollProgress />
      {/* ParallaxBackground removed — caused broken light artifacts */}
      <Navbar />
      <main id="main" className="relative z-10">
        {/* 1. Hero */}
        <HeroSection />

        {/* 1.5 Stats */}
        <StatsSection />

        {/* 2. Servicios */}
        <AnimatedDivider />
        <SectionTransition type="slideUp">
          <ServiciosSection />
        </SectionTransition>

        {/* 3. Demos */}
        <AnimatedDivider />
        <SectionTransition type="scale">
          <AgentVideoShowcase />
        </SectionTransition>

        {/* 4. Cómo Funciona */}
        <AnimatedDivider />
        <SectionTransition type="slideLeft">
          <HowItWorksSection />
        </SectionTransition>

        {/* 5. Industrias */}
        <AnimatedDivider />
        <SectionTransition type="slideUp">
          <IndustriasSection />
        </SectionTransition>

        {/* 6. Integraciones */}
        <AnimatedDivider />
        <SectionTransition type="fade">
          <IntegrationsSection />
        </SectionTransition>

        {/* 7. Confianza */}
        <AnimatedDivider />
        <SectionTransition type="scale">
          <TrustSection />
        </SectionTransition>

        {/* 8. FAQ */}
        <AnimatedDivider />
        <SectionTransition type="slideUp">
          <FAQSection />
        </SectionTransition>

        {/* 9. Contacto */}
        <AnimatedDivider />
        <SectionTransition type="slideUp">
          <ContactFormSection />
        </SectionTransition>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyCTA />
      <ScrollToTop />
    </div>
  );
};

export default Index;
