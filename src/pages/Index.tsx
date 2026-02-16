import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { IntegratedDemoHub } from '@/components/IntegratedDemoHub';
import { IntegrationsSection } from '@/components/IntegrationsSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { TrustSection } from '@/components/TrustSection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { StickyCTA } from '@/components/StickyCTA';
import { ParallaxBackground } from '@/components/ParallaxSection';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ScrollToTop } from '@/components/ScrollToTop';
import { SectionTransition, AnimatedDivider } from '@/components/SectionTransition';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden scroll-smooth">
      <ScrollProgress />
      <ParallaxBackground />
      <Navbar />
      <main id="main" className="relative z-10">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Servicios (FeaturesSection) */}
        <AnimatedDivider />
        <SectionTransition type="slideUp">
          <FeaturesSection />
        </SectionTransition>

        {/* 3. Demos */}
        <AnimatedDivider />
        <SectionTransition type="slideUp">
          <IntegratedDemoHub />
        </SectionTransition>

        {/* 4. Cómo Funciona */}
        <AnimatedDivider />
        <SectionTransition type="slideLeft">
          <HowItWorksSection />
        </SectionTransition>

        {/* 5. Integraciones */}
        <AnimatedDivider />
        <SectionTransition type="fade">
          <IntegrationsSection />
        </SectionTransition>

        {/* 6. Confianza */}
        <AnimatedDivider />
        <SectionTransition type="scale">
          <TrustSection />
        </SectionTransition>

        {/* 7. FAQ */}
        <AnimatedDivider />
        <SectionTransition type="slideUp">
          <FAQSection />
        </SectionTransition>
      </main>
      <SectionTransition type="fade">
        <Footer />
      </SectionTransition>
      <FloatingWhatsApp />
      <StickyCTA />
      <ScrollToTop />
    </div>
  );
};

export default Index;
