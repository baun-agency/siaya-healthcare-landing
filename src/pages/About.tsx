import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import headerAbout from "@/assets/header-about.jpg";

const About = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <PageHeader
          title="About Siaya Healthcare Medical Centre"
          description="Our story, mission, vision, and commitment to serving the community."
          backgroundImage={headerAbout}
        />
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
};

export default About;
