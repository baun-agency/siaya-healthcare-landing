import { motion } from "framer-motion";
import {
  Stethoscope,
  Building2,
  Bed,
  Video,
  Home,
  TestTubes,
  Pill,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Medical & Surgical Consultations",
    description: "Expert medical advice and surgical procedures",
  },
  {
    icon: Building2,
    title: "Outpatient Care",
    description: "Same-day medical services without admission",
  },
  {
    icon: Bed,
    title: "Inpatient Care",
    description: "Comprehensive care during hospital stays",
  },
  {
    icon: Video,
    title: "Online Consultations",
    description: "Virtual healthcare from anywhere",
  },
  {
    icon: Home,
    title: "Home Visits",
    description: "Professional care at your doorstep",
  },
  {
    icon: TestTubes,
    title: "Diagnostics",
    description: "Advanced testing and screening services",
  },
  {
    icon: Pill,
    title: "Pharmaceutical Services",
    description: "Quality medications and prescriptions",
  },
];

const ServicesOverview = () => {
  return (
    <section id="services" className="section-padding bg-clean-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="heading-2 text-navy mb-4">
            Comprehensive Healthcare Services
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            From routine checkups to emergency care, we provide a full spectrum of medical services for you and your family.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-navy text-lg mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
