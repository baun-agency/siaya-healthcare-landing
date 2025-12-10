import { motion } from "framer-motion";
import {
  Baby,
  Heart,
  Syringe,
  BookOpen,
  Users,
  Ambulance,
  Activity,
  HeartPulse,
  Apple,
  Brain,
  UserCheck,
  Clock,
} from "lucide-react";

const medicalServices = [
  {
    icon: UserCheck,
    title: "Outpatient Care",
    description: "Quality care for children, adults, and elderly patients",
  },
  {
    icon: Activity,
    title: "Chronic & Common Illness Management",
    description: "Ongoing care for diabetes, hypertension, and more",
  },
  {
    icon: Baby,
    title: "Maternal & Child Health",
    description: "Antenatal, postnatal care, growth monitoring, family planning",
  },
  {
    icon: Syringe,
    title: "Immunization & Vaccinations",
    description: "Complete vaccination schedules for all ages",
  },
  {
    icon: BookOpen,
    title: "Health Education & Promotion",
    description: "Empowering communities with health knowledge",
  },
  {
    icon: Users,
    title: "Community Outreach & Home-Based Care",
    description: "Extending healthcare to underserved areas",
  },
  {
    icon: Ambulance,
    title: "Emergency Medical Care (Non-Surgical)",
    description: "Immediate response to medical emergencies",
  },
  {
    icon: HeartPulse,
    title: "Chronic Disease Management",
    description: "Long-term care for chronic conditions",
  },
  {
    icon: Heart,
    title: "Reproductive & Sexual Health",
    description: "Comprehensive reproductive health services",
  },
  {
    icon: Apple,
    title: "Maternal Nutrition & Wellness",
    description: "Nutritional support for expectant mothers",
  },
  {
    icon: Brain,
    title: "Basic Mental Health Support",
    description: "Counseling and mental wellness services",
  },
  {
    icon: Clock,
    title: "24/7 Medical Support",
    description: "Round-the-clock healthcare assistance",
  },
];

const MedicalServices = () => {
  return (
    <section id="medical-services" className="section-padding bg-gradient-section">
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
            Medical Services
          </span>
          <h2 className="heading-2 text-navy mb-4">
            Complete Medical Care for Your Family
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive medical services cover everything from preventive care to emergency treatment, ensuring your family's health is always in good hands.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {medicalServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-blue-light flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-navy mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalServices;
