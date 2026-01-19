import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSolutionSection } from '@/components/ProblemSolutionSection';
import { DemosSection } from '@/components/DemosSection';
import { BusinessModelSection } from '@/components/BusinessModelSection';
import { BlogSection } from '@/components/BlogSection';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <DemosSection />
        <BusinessModelSection />
        <BlogSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
