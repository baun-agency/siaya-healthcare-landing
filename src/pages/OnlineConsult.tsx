import Header from "@/components/Header";
import OnlineConsultation from "@/components/OnlineConsultation";
import Footer from "@/components/Footer";

const OnlineConsult = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <OnlineConsultation />
      </div>
      <Footer />
    </main>
  );
};

export default OnlineConsult;
