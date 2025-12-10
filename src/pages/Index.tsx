import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import MedicalServices from "@/components/MedicalServices";
import DiagnosticServices from "@/components/DiagnosticServices";
import SurgicalServices from "@/components/SurgicalServices";
import OnlineConsultation from "@/components/OnlineConsultation";
import AppointmentBooking from "@/components/AppointmentBooking";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesOverview />
      <MedicalServices />
      <DiagnosticServices />
      <SurgicalServices />
      <OnlineConsultation />
      <AppointmentBooking />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
