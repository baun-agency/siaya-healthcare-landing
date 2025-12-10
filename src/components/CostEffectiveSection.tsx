import { motion } from "framer-motion";
import { Check } from "lucide-react";
import doctor1 from "@/assets/doctor-1.jpg";

const stats = [
  { value: "69k", label: "Patients Served" },
  { value: "236", label: "Staff Members" },
  { value: "19k", label: "Home Visits" },
  { value: "320", label: "Online Consults" },
];

const CostEffectiveSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl transform rotate-3" />
              <img
                src={doctor1}
                alt="Dr. Okun Benjamin"
                className="relative w-full max-w-sm rounded-2xl shadow-lg"
              />
              {/* Name badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card rounded-xl px-6 py-3 shadow-lg border border-border">
                <p className="font-bold text-navy">Dr. Okun Benjamin</p>
                <p className="text-sm text-muted-foreground">Founder & Medical Director</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Cost-Effective Health Care Solutions
            </h2>
            
            <p className="text-muted-foreground mb-6">
              What started as one doctor's desire to bring care directly to homes has grown into a trusted multi-location facility. Dr. Okun Benjamin began by conducting house calls in Yala—reaching those who couldn't travel easily—and that compassion-first approach remains at our core today.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Quality care at affordable prices",
                "Home visits across Yala, Bondo & Madiany",
                "24/7 emergency services available",
                "Compassionate community-focused care"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CostEffectiveSection;
