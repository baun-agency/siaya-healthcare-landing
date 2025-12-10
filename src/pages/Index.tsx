import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import TeamPreview from "@/components/TeamPreview";
import AppointmentBooking from "@/components/AppointmentBooking";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesOverview />
      <TeamPreview />
      <AppointmentBooking />
      <Footer />
    </main>
  );
};

export default Index;
