import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Video, Shield, Globe, RefreshCw, Home, ArrowRight } from "lucide-react";

const steps = [
  { number: 1, title: "Choose Type", description: "Select Chat, Call, or Video consultation" },
  { number: 2, title: "Select Service", description: "Pick your service category" },
  { number: 3, title: "Pick Date/Time", description: "Choose a convenient slot" },
  { number: 4, title: "Fill Details", description: "Provide name, contact, and symptoms" },
  { number: 5, title: "Confirm & Pay", description: "Complete your booking" },
];

const features = [
  { icon: Shield, title: "Secure & Private", description: "Your consultations are confidential" },
  { icon: Globe, title: "Accessible Anywhere", description: "Connect from any location" },
  { icon: RefreshCw, title: "Seamless Follow-up", description: "Easy continuation of care" },
  { icon: Home, title: "Home Visit Option", description: "Request in-person care if needed" },
];

const consultTypes = [
  { icon: MessageCircle, title: "Chat", description: "Text-based consultation" },
  { icon: Phone, title: "Call", description: "Voice consultation" },
  { icon: Video, title: "Video", description: "Face-to-face virtual care" },
];

const OnlineConsultation = () => {
  return (
    <section id="online-consultation" className="section-padding bg-gradient-section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-medical-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Online Consultations
          </span>
          <h2 className="heading-2 text-navy mb-4">
            Consult Our Doctors Online
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Get professional medical advice from the comfort of your home. Chat, call, or video call with our doctors and get guidance for your health concerns.
          </p>
        </motion.div>

        {/* Consultation Types */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {consultTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card text-center group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors duration-300">
                <type.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-bold text-navy text-xl mb-2">{type.title}</h3>
              <p className="text-muted-foreground">{type.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl p-8 md:p-12 shadow-lg mb-16"
        >
          <h3 className="heading-3 text-navy text-center mb-10">How It Works</h3>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="flex md:flex-col items-center gap-4 md:text-center flex-1">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h4 className="font-semibold text-navy">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block w-6 h-6 text-border absolute -right-3 top-1/2 -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-blue-light flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-navy">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="hero" size="xl">
            <Video className="w-5 h-5" />
            Start Your Online Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default OnlineConsultation;
