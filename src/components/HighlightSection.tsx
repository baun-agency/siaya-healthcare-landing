import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Heart, Phone } from "lucide-react";
import doctorHighlight from "@/assets/doctor-highlight.jpg";

const features = [
  {
    icon: Heart,
    title: "Compassionate & Expert Care",
    description: "Our team combines clinical expertise with genuine compassion for every patient.",
  },
  {
    icon: Clock,
    title: "24/7 Medical Support",
    description: "Round-the-clock emergency services and support whenever you need us.",
  },
  {
    icon: CheckCircle2,
    title: "Personalized Treatment Plans",
    description: "Healthcare tailored to your unique needs and circumstances.",
  },
];

const HighlightSection = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Why Choose Us
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              We Remain Continuously Available For Your Health Services
            </h2>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/booking">
                <Button size="lg" className="rounded-full">
                  Book Appointment
                </Button>
              </Link>
              <a href="tel:0733906199">
                <Button variant="outline" size="lg" className="rounded-full border-primary text-primary">
                  <Phone className="w-4 h-4 mr-2" />
                  0733906199
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-blue/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />
            
            {/* Medical cross decoration */}
            <div className="absolute top-8 right-8 text-primary/30">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="currentColor">
                <rect x="30" y="0" width="20" height="80" rx="4" />
                <rect x="0" y="30" width="80" height="20" rx="4" />
              </svg>
            </div>

            <div className="relative">
              <img
                src={doctorHighlight}
                alt="Healthcare professional"
                className="w-full max-w-md mx-auto rounded-3xl shadow-lg"
              />
              
              {/* Floating stats badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute -left-8 top-1/4 bg-card rounded-2xl p-4 shadow-lg border border-border"
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">3</p>
                  <p className="text-xs text-muted-foreground">Locations</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -right-4 bottom-1/4 bg-primary rounded-2xl p-4 shadow-lg"
              >
                <div className="text-center text-primary-foreground">
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="text-xs">Available</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
