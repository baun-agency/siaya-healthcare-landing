import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroDoctor from "@/assets/hero-doctor.jpg";
import nurseHero from "@/assets/nurse-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-sky-blue-light via-background to-background">
      <div className="absolute top-32 right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-sky-blue/10 blur-2xl" />
      
      <svg className="absolute top-40 left-1/4 w-48 h-48 text-primary/20" viewBox="0 0 100 100">
        <path d="M10,50 Q50,10 90,50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
      </svg>

      <div className="container-custom section-padding flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex-1 text-center lg:text-left z-10">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">Welcome to Siaya Healthcare</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            Caring for <span className="text-primary">Health</span><br />Caring for <span className="text-primary">You</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mb-8">
            Welcome to a place where quality care meets community. At Siaya Healthcare Medical Centre, we are dedicated to providing safe, accessible, and compassionate healthcare to families across Yala, Bondo, and Madiany.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link to="/booking"><Button size="lg" className="rounded-full px-8">Book Appointment<ArrowRight className="w-4 h-4 ml-2" /></Button></Link>
            <Link to="/online-consult"><Button variant="outline" size="lg" className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"><Play className="w-4 h-4 mr-2" />Online Consult</Button></Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex-1 relative">
          <div className="relative flex items-end justify-center lg:justify-end gap-4">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-sky-blue/30 rounded-[2rem] blur-xl" />
              <img src={heroDoctor} alt="Doctor" className="relative w-64 md:w-80 h-auto rounded-[2rem] shadow-lg object-cover" />
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6, type: "spring" }} className="absolute -left-8 bottom-20 bg-card rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"><span className="text-primary font-bold text-xl">24</span></div>
                  <div><p className="text-navy font-bold text-sm">Hours</p><p className="text-muted-foreground text-xs">Emergency Care</p></div>
                </div>
              </motion.div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-sky-blue/20 to-primary/20 rounded-[2rem] blur-xl" />
              <img src={nurseHero} alt="Nurse" className="relative w-48 h-auto rounded-[2rem] shadow-lg object-cover" />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="container-custom px-4 sm:px-6 lg:px-8 -mt-8 pb-16 relative z-20">
        <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8 border border-border">
          <div className="grid md:grid-cols-4 gap-4">
            <div><label className="text-sm font-medium text-muted-foreground mb-2 block">Service</label><select className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"><option>Medical Services</option><option>Diagnostic Services</option><option>Surgical Services</option><option>Home Visit</option></select></div>
            <div><label className="text-sm font-medium text-muted-foreground mb-2 block">Location</label><select className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"><option>Yala</option><option>Bondo</option><option>Madiany</option></select></div>
            <div><label className="text-sm font-medium text-muted-foreground mb-2 block">Date</label><input type="date" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" /></div>
            <div className="flex items-end"><Link to="/booking" className="w-full"><Button className="w-full rounded-xl py-6">Find Service</Button></Link></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
