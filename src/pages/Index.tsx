import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { MetricsTicker } from '@/components/MetricsTicker';
import { IntegratedDemoHub } from '@/components/IntegratedDemoHub';
import { FeaturesSection } from '@/components/FeaturesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { PricingSection } from '@/components/PricingSection';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { StickyCTA } from '@/components/StickyCTA';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <MetricsTicker />
        <IntegratedDemoHub />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyCTA />
    </div>
  );
};

export default Index;