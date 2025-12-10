import Header from "@/components/Header";
import MedicalServices from "@/components/MedicalServices";
import DiagnosticServices from "@/components/DiagnosticServices";
import SurgicalServices from "@/components/SurgicalServices";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <MedicalServices />
        <DiagnosticServices />
        <SurgicalServices />
      </div>
      <Footer />
    </main>
  );
};

export default Services;
