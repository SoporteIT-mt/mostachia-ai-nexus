import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { MetricsTicker } from '@/components/MetricsTicker';
import { IntegratedDemoHub } from '@/components/IntegratedDemoHub';
import { CasosExitoSection } from '@/components/CasosExitoSection';
import { PricingSection } from '@/components/PricingSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { IntegrationsSection } from '@/components/IntegrationsSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { TrustSection } from '@/components/TrustSection';
import { FAQSection } from '@/components/FAQSection';
import { BlogSection } from '@/components/BlogSection';
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
      <main className="relative z-10">
        {/* 1. Hero - Primera impresión */}
        <HeroSection />
        <SectionTransition direction="up" delay={0.1}>
          <MetricsTicker />
        </SectionTransition>
        
        {/* 2. Demos - Demostración inmediata de valor */}
        <AnimatedDivider />
        <SectionTransition direction="up" delay={0.1}>
          <IntegratedDemoHub />
        </SectionTransition>
        
        {/* 3. Casos de Éxito - Prueba social con resultados */}
        <AnimatedDivider />
        <SectionTransition direction="left" delay={0.1}>
          <CasosExitoSection />
        </SectionTransition>
        
        {/* 4. Pricing - Decisión de compra */}
        <AnimatedDivider />
        <SectionTransition direction="scale" delay={0.1}>
          <PricingSection />
        </SectionTransition>
        
        {/* 5. Testimonios - Refuerzo social */}
        <AnimatedDivider />
        <SectionTransition direction="right" delay={0.1}>
          <TestimonialsSection />
        </SectionTransition>
        
        {/* 6. Integraciones - Credibilidad técnica */}
        <AnimatedDivider />
        <SectionTransition direction="blur" delay={0.1}>
          <IntegrationsSection />
        </SectionTransition>
        
        {/* 7. Features - Detalles técnicos */}
        <AnimatedDivider />
        <SectionTransition direction="up" delay={0.1}>
          <FeaturesSection />
        </SectionTransition>
        
        {/* 8. Cómo funciona */}
        <AnimatedDivider />
        <SectionTransition direction="left" delay={0.1}>
          <HowItWorksSection />
        </SectionTransition>
        
        {/* 9. Confianza y Garantías */}
        <AnimatedDivider />
        <SectionTransition direction="scale" delay={0.1}>
          <TrustSection />
        </SectionTransition>
        
        {/* 10. FAQ - Resolver objeciones */}
        <AnimatedDivider />
        <SectionTransition direction="up" delay={0.1}>
          <FAQSection />
        </SectionTransition>
        
        {/* 11. Blog - SEO y autoridad */}
        <AnimatedDivider />
        <SectionTransition direction="right" delay={0.1}>
          <BlogSection />
        </SectionTransition>
      </main>
      <SectionTransition direction="fade" delay={0.2}>
        <Footer />
      </SectionTransition>
      <FloatingWhatsApp />
      <StickyCTA />
      <ScrollToTop />
    </div>
  );
};

export default Index;
