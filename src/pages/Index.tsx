import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { MetricsTicker } from '@/components/MetricsTicker';
import { ProblemSolutionSection } from '@/components/ProblemSolutionSection';
import { DemoHubSection } from '@/components/DemoHubSection';
import { PricingSection } from '@/components/PricingSection';
import { BlogSection } from '@/components/BlogSection';
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
        <ProblemSolutionSection />
        <DemoHubSection />
        <PricingSection />
        <BlogSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyCTA />
    </div>
  );
};

export default Index;