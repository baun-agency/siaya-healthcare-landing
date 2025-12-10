import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import MedicalServices from "@/components/MedicalServices";
import DiagnosticServices from "@/components/DiagnosticServices";
import SurgicalServices from "@/components/SurgicalServices";
import Footer from "@/components/Footer";
import headerServices from "@/assets/header-services.jpg";

const Services = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <PageHeader
          title="Our Medical Services"
          description="Comprehensive outpatient, maternal, child health, chronic care, and wellness services."
          backgroundImage={headerServices}
        />
        <MedicalServices />
        <DiagnosticServices />
        <SurgicalServices />
      </div>
      <Footer />
    </main>
  );
};

export default Services;
