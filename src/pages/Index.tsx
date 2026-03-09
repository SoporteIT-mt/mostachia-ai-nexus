import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { PainSection } from '@/components/PainSection';
import { TrustSection } from '@/components/TrustSection';
import { AgentVideoShowcase } from '@/components/AgentVideoShowcase';
import { ServiciosSection } from '@/components/ServiciosSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { IndustriasSection } from '@/components/IndustriasSection';
import { IntegrationsSection } from '@/components/IntegrationsSection';
import { TeamShowcase } from '@/components/TeamShowcase';
import { FAQSection } from '@/components/FAQSection';
import { ContactFormSection } from '@/components/ContactFormSection';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { StickyCTA } from '@/components/StickyCTA';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ScrollToTop } from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden scroll-smooth">
      <ScrollProgress />
      <Navbar />

      {/* Global Canvas Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f3d4b] via-[hsl(var(--background))] to-[hsl(var(--background))]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/[0.07] rounded-full blur-[150px]" />
      </div>

      <main id="main" className="relative z-10">
        <HeroSection />
        <StatsSection />
        <PainSection />
        <TrustSection />
        <AgentVideoShowcase />
        <ServiciosSection />
        <HowItWorksSection />
        <IndustriasSection />
        <IntegrationsSection />
        <TeamShowcase />
        <FAQSection />
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
