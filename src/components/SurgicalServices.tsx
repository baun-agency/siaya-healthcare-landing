import { motion } from "framer-motion";
import { Scissors, BandageIcon, CircleDot, Bone, Droplet, Baby, Syringe, Ambulance } from "lucide-react";

const surgicalProcedures = [
  { icon: BandageIcon, title: "Wound Care & Suturing", description: "Professional wound treatment and closure" },
  { icon: Droplet, title: "Incision & Drainage", description: "Treatment of abscesses and infections" },
  { icon: CircleDot, title: "Lesion/Cyst Removal", description: "Removal of small skin lesions and cysts" },
  { icon: Bone, title: "Minor Orthopedic Procedures", description: "Treatment of minor bone and joint issues" },
  { icon: Droplet, title: "Hematoma Drainage", description: "Drainage of minor blood collections" },
  { icon: Scissors, title: "Circumcision", description: "Safe procedures for children and adults" },
  { icon: Syringe, title: "Catheter Insertion", description: "Professional urinary catheter placement" },
  { icon: Ambulance, title: "Emergency Stabilization", description: "Critical care before transfer" },
  { icon: Baby, title: "Assisted Deliveries", description: "Support for safe childbirth" },
  { icon: Baby, title: "Birth Complication Management", description: "Handling minor delivery complications" },
];

const SurgicalServices = () => {
  return (
    <section id="surgical" className="section-padding bg-clean-white">
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
            Surgical Services
          </span>
          <h2 className="heading-2 text-navy mb-4">
            Minor Surgical Procedures
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Our skilled medical team provides a range of minor surgical procedures in a safe, sterile environment with compassionate care.
          </p>
        </motion.div>

        {/* Procedures Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {surgicalProcedures.map((procedure, index) => (
            <motion.div
              key={procedure.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-card rounded-xl p-5 shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                <procedure.icon className="w-6 h-6 text-navy group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-navy text-sm mb-1">{procedure.title}</h3>
              <p className="text-muted-foreground text-xs">{procedure.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SurgicalServices;
