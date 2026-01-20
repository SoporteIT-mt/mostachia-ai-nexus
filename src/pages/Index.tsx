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

// Soft section separator
const SectionGlow = () => (
  <div className="relative h-20 flex items-center justify-center overflow-hidden">
    <div className="w-full max-w-lg h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="absolute w-1.5 h-1.5 rounded-full bg-primary/40 shadow-lg shadow-primary/30" />
  </div>
);

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden scroll-smooth">
      <ScrollProgress />
      <ParallaxBackground />
      <Navbar />
      <main className="relative z-10">
        {/* 1. Hero - Primera impresión */}
        <HeroSection />
        <MetricsTicker />
        
        {/* 2. Demos - Demostración inmediata de valor */}
        <SectionGlow />
        <IntegratedDemoHub />
        
        {/* 3. Casos de Éxito - Prueba social con resultados */}
        <SectionGlow />
        <CasosExitoSection />
        
        {/* 4. Pricing - Decisión de compra */}
        <SectionGlow />
        <PricingSection />
        
        {/* 5. Testimonios - Refuerzo social */}
        <SectionGlow />
        <TestimonialsSection />
        
        {/* 6. Integraciones - Credibilidad técnica */}
        <SectionGlow />
        <IntegrationsSection />
        
        {/* 7. Features - Detalles técnicos */}
        <SectionGlow />
        <FeaturesSection />
        
        {/* 8. Cómo funciona */}
        <SectionGlow />
        <HowItWorksSection />
        
        {/* 9. Confianza y Garantías */}
        <SectionGlow />
        <TrustSection />
        
        {/* 10. FAQ - Resolver objeciones */}
        <SectionGlow />
        <FAQSection />
        
        {/* 11. Blog - SEO y autoridad */}
        <SectionGlow />
        <BlogSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyCTA />
    </div>
  );
};

export default Index;