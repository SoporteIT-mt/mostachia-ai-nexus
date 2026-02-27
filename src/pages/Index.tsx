import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ServiciosSection } from '@/components/ServiciosSection';
import { AgentVideoShowcase } from '@/components/AgentVideoShowcase';
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
import { StatsSection } from '@/components/StatsSection';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden scroll-smooth">
      <ScrollProgress />
      <Navbar />
      <main id="main" className="relative z-10">
        <HeroSection />
        <StatsSection />
        <ServiciosSection />
        <AgentVideoShowcase />
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
