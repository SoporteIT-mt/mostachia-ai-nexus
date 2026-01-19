import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { MetricsTicker } from '@/components/MetricsTicker';
import { TrustSection } from '@/components/TrustSection';
import { IntegratedDemoHub } from '@/components/IntegratedDemoHub';
import { CasosExitoSection } from '@/components/CasosExitoSection';
import { IntegrationsSection } from '@/components/IntegrationsSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { PricingSection } from '@/components/PricingSection';
import { FAQSection } from '@/components/FAQSection';
import { BlogSection } from '@/components/BlogSection';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { StickyCTA } from '@/components/StickyCTA';
import { ParallaxBackground } from '@/components/ParallaxSection';

// Soft section separator
const SectionGlow = () => (
  <div className="relative h-24 flex items-center justify-center overflow-hidden">
    <div className="w-full max-w-lg h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="absolute w-1.5 h-1.5 rounded-full bg-primary/40 shadow-lg shadow-primary/30" />
  </div>
);

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParallaxBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <MetricsTicker />
        <SectionGlow />
        <IntegratedDemoHub />
        <SectionGlow />
        <CasosExitoSection />
        <SectionGlow />
        <IntegrationsSection />
        <SectionGlow />
        <TestimonialsSection />
        <SectionGlow />
        <FeaturesSection />
        <SectionGlow />
        <HowItWorksSection />
        <SectionGlow />
        <TrustSection />
        <SectionGlow />
        <PricingSection />
        <SectionGlow />
        <FAQSection />
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