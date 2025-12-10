import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, MapPin } from "lucide-react";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

const doctors = [
  {
    name: "Dr. Okun Benjamin",
    role: "Medical Director",
    location: "Yala",
    image: doctor1,
  },
  {
    name: "Dr. Amina Ochieng",
    role: "General Practitioner",
    location: "Bondo",
    image: doctor2,
  },
  {
    name: "Dr. James Otieno",
    role: "Family Medicine",
    location: "Madiany",
    image: doctor3,
  },
];

const DoctorsSection = () => {
  return (
    <section className="section-padding bg-sky-blue-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Doctors
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Our Special Doctors
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet our dedicated healthcare professionals who are committed to providing exceptional care with warmth and expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Social overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex gap-3">
                      {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                        <a
                          key={i}
                          href="#"
                          className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors"
                        >
                          <Icon className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="font-bold text-navy text-lg mb-1">{doctor.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{doctor.role}</p>
                  <div className="flex items-center justify-center gap-1 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{doctor.location}</span>
                  </div>
                </div>
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
            to="/about" 
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Meet Our Full Team
            <span className="text-lg">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorsSection;
