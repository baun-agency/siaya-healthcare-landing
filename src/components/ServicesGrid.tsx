import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Stethoscope, 
  Building2, 
  Bed, 
  Video, 
  Home, 
  FlaskConical, 
  Pill, 
  Scissors 
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Medical Services",
    description: "Comprehensive outpatient care for children, adults, and elderly patients.",
  },
  {
    icon: Building2,
    title: "Outpatient Care",
    description: "Walk-in consultations and follow-up visits for all your healthcare needs.",
  },
  {
    icon: Bed,
    title: "Inpatient Care",
    description: "Quality overnight care with 24/7 monitoring and support.",
  },
  {
    icon: Video,
    title: "Online Consultation",
    description: "Connect with our doctors via chat, call, or video from anywhere.",
  },
  {
    icon: Home,
    title: "Home Visits",
    description: "Bringing healthcare directly to your doorstep across our locations.",
  },
  {
    icon: FlaskConical,
    title: "Diagnostics",
    description: "Complete lab testing including blood, urine, stool, and tissue tests.",
  },
  {
    icon: Pill,
    title: "Pharmacy",
    description: "On-site pharmaceutical services with quality medications.",
  },
  {
    icon: Scissors,
    title: "Minor Surgery",
    description: "Safe minor surgical procedures performed by experienced staff.",
  },
];

const ServicesGrid = () => {
  return (
    <section className="section-padding bg-sky-blue-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Stethoscope className="w-4 h-4" />
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Our Medical Specialties Service
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From routine check-ups to specialized care, we provide comprehensive healthcare services tailored to your needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 h-full border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-bold text-navy mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View All Services
            <span className="text-lg">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
