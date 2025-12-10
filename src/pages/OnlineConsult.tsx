import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import OnlineConsultation from "@/components/OnlineConsultation";
import Footer from "@/components/Footer";
import headerOnline from "@/assets/header-online.jpg";

const OnlineConsult = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <PageHeader
          title="Online Consultations"
          description="Chat, call, or video call with our doctors from anywhere."
          backgroundImage={headerOnline}
        />
        <OnlineConsultation />
      </div>
      <Footer />
    </main>
  );
};

export default OnlineConsult;
