import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CostEffectiveSection from "@/components/CostEffectiveSection";
import ServicesGrid from "@/components/ServicesGrid";
import HighlightSection from "@/components/HighlightSection";
import DoctorsSection from "@/components/DoctorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuoteFormSection from "@/components/QuoteFormSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CostEffectiveSection />
      <ServicesGrid />
      <HighlightSection />
      <DoctorsSection />
      <TestimonialsSection />
      <QuoteFormSection />
      <Footer />
    </div>
  );
};

export default Index;
