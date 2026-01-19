import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { MetricsTicker } from '@/components/MetricsTicker';
import { TrustSection } from '@/components/TrustSection';
import { IntegratedDemoHub } from '@/components/IntegratedDemoHub';
import { FeaturesSection } from '@/components/FeaturesSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { PricingSection } from '@/components/PricingSection';
import { FAQSection } from '@/components/FAQSection';
import { BlogSection } from '@/components/BlogSection';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { StickyCTA } from '@/components/StickyCTA';
import { ParallaxBackground, SectionDivider } from '@/components/ParallaxSection';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParallaxBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <MetricsTicker />
        <SectionDivider />
        <TrustSection />
        <SectionDivider />
        <IntegratedDemoHub />
        <SectionDivider />
        <FeaturesSection />
        <SectionDivider />
        <HowItWorksSection />
        <SectionDivider />
        <TestimonialsSection />
        <SectionDivider />
        <PricingSection />
        <SectionDivider />
        <FAQSection />
        <SectionDivider />
        <BlogSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyCTA />
    </div>
  );
};

export default Index;