import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Home, Stethoscope, TestTubes, Scissors, Pill, Calendar, ArrowRight } from "lucide-react";

const categories = [
  { icon: Home, title: "Home Visit / Doctor at Your Door", description: "Get care at your home" },
  { icon: Stethoscope, title: "Medical Services", description: "General medical consultations" },
  { icon: TestTubes, title: "Diagnostic Services", description: "Lab tests and screenings" },
  { icon: Scissors, title: "Surgical Services", description: "Minor surgical procedures" },
  { icon: Pill, title: "Pharmaceutical Services", description: "Medications and prescriptions" },
];

const AppointmentBooking = () => {
  return (
    <section id="booking" className="section-padding bg-clean-white">
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
            Book Now
          </span>
          <h2 className="heading-2 text-navy mb-4">
            Book an Appointment with Our Doctors
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Choose a service below and schedule a convenient time with our healthcare team—or request a doctor to visit your home.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-lg hover:border-primary border-2 border-transparent transition-all duration-300 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-sky-blue-light flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <category.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-navy mb-1">{category.title}</h3>
              <p className="text-muted-foreground text-sm">{category.description}</p>
              <ArrowRight className="w-5 h-5 text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="heroOutline" size="xl">
            <Home className="w-5 h-5" />
            Request a Home Visit
          </Button>
          <Button variant="hero" size="xl">
            <Calendar className="w-5 h-5" />
            Book Your Appointment
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentBooking;
