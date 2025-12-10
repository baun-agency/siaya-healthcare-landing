import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Home, Heart, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-sky-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-medical-blue/5 rounded-full blur-3xl" />
        <svg className="absolute top-40 left-10 w-20 h-20 text-medical-blue/10 animate-float" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-4H6v-2h4V7h2v4h4v2h-4v4z"/>
        </svg>
        <svg className="absolute bottom-40 right-20 w-16 h-16 text-sky-blue/20 animate-float" style={{ animationDelay: "2s" }} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-4H6v-2h4V7h2v4h4v2h-4v4z"/>
        </svg>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Logo Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-card rounded-full px-5 py-2.5 shadow-card mb-8"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-medical-blue to-navy flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">SH</span>
              </div>
              <span className="font-semibold text-navy">Siaya Healthcare Medical Centre</span>
            </motion.div>

            {/* Headline */}
            <h1 className="heading-1 text-navy mb-6">
              Bringing healthcare{" "}
              <span className="text-primary">home.</span>
            </h1>

            {/* Subheadline */}
            <p className="body-large text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Welcome to a place where quality care meets community. At Siaya Healthcare Medical Center, we are dedicated to providing safe, accessible, and compassionate healthcare to families across Yala, Bondo, and Madiany. Whether you need maternity support, emergency care, surgery, or everyday medical services, our team is here to serve you with excellence and respect.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button variant="hero" size="xl">
                <Calendar className="w-5 h-5" />
                Book an Appointment
              </Button>
              <Button variant="heroOutline" size="xl">
                <Home className="w-5 h-5" />
                Request a Home Visit
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              {[
                { icon: Heart, text: "Compassionate Care" },
                { icon: Shield, text: "Safe & Trusted" },
                { icon: Users, text: "Community Focused" },
              ].map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <badge.icon className="w-4 h-4 text-primary" />
                  {badge.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Siaya Healthcare Medical Centre - Professional healthcare services"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-5 shadow-lg hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-navy text-lg">3 Locations</p>
                  <p className="text-sm text-muted-foreground">Yala • Bondo • Madiany</p>
                </div>
              </div>
            </motion.div>

            {/* 24/7 Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="absolute -top-4 -right-4 bg-navy text-primary-foreground rounded-2xl px-5 py-3 shadow-lg hidden md:block"
            >
              <p className="font-bold">24/7</p>
              <p className="text-xs opacity-80">Emergency Care</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
