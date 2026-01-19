import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { MetricsTicker } from '@/components/MetricsTicker';
import { TrustSection } from '@/components/TrustSection';
import { IntegratedDemoHub } from '@/components/IntegratedDemoHub';
import { CasosExitoSection } from '@/components/CasosExitoSection';
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

// Soft section separator - subtle glow marker
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
        {/* Conversion funnel optimized order */}
        <HeroSection />
        <MetricsTicker />
        <SectionGlow />
        {/* Demos first - let them try before buying */}
        <IntegratedDemoHub />
        <SectionGlow />
        {/* Social proof - build trust */}
        <CasosExitoSection />
        <SectionGlow />
        <TestimonialsSection />
        <SectionGlow />
        {/* Features & Benefits */}
        <FeaturesSection />
        <SectionGlow />
        <HowItWorksSection />
        <SectionGlow />
        {/* Trust signals before pricing */}
        <TrustSection />
        <SectionGlow />
        {/* Pricing & FAQ together */}
        <PricingSection />
        <SectionGlow />
        <FAQSection />
        <SectionGlow />
        {/* SEO & Authority */}
        <BlogSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyCTA />
    </div>
  );
};

export default Index;