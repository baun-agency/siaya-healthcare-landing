import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import headerContact from "@/assets/header-contact.jpg";

const Contact = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <PageHeader
          title="Contact Us"
          description="Reach out, request support, or get directions to any of our branches."
          backgroundImage={headerContact}
        />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
