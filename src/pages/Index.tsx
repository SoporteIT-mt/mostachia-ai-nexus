import { lazy, Suspense } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { StickyCTA } from '@/components/StickyCTA';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ScrollToTop } from '@/components/ScrollToTop';

const ServiciosSection = lazy(() => import('@/components/ServiciosSection'));
const AgentVideoShowcase = lazy(() => import('@/components/AgentVideoShowcase'));
const HowItWorksSection = lazy(() => import('@/components/HowItWorksSection'));
const IndustriasSection = lazy(() => import('@/components/IndustriasSection'));
const IntegrationsSection = lazy(() => import('@/components/IntegrationsSection'));
const TeamShowcase = lazy(() => import('@/components/TeamShowcase'));
const FAQSection = lazy(() => import('@/components/FAQSection'));
const ContactFormSection = lazy(() => import('@/components/ContactFormSection'));

const LazyFallback = () => <div className="min-h-[400px]" />;

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden scroll-smooth">
      <ScrollProgress />
      <Navbar />
      <main id="main" className="relative z-10">
        <HeroSection />
        <StatsSection />
        <Suspense fallback={<LazyFallback />}>
          <ServiciosSection />
        </Suspense>
        <Suspense fallback={<LazyFallback />}>
          <AgentVideoShowcase />
        </Suspense>
        <Suspense fallback={<LazyFallback />}>
          <HowItWorksSection />
        </Suspense>
        <Suspense fallback={<LazyFallback />}>
          <IndustriasSection />
        </Suspense>
        <Suspense fallback={<LazyFallback />}>
          <IntegrationsSection />
        </Suspense>
        <Suspense fallback={<LazyFallback />}>
          <TeamShowcase />
        </Suspense>
        <Suspense fallback={<LazyFallback />}>
          <FAQSection />
        </Suspense>
        <Suspense fallback={<LazyFallback />}>
          <ContactFormSection />
        </Suspense>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyCTA />
      <ScrollToTop />
    </div>
  );
};

export default Index;
