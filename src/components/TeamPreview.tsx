import { motion } from "framer-motion";
import { Users, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TeamPreview = () => {
  return (
    <section className="section-padding bg-gradient-section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy rounded-3xl p-8 md:p-12 text-center"
        >
          <Users className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
          <h2 className="heading-2 text-primary-foreground mb-4">Our Dedicated Team</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6">
            Our healthcare professionals are the heart of Siaya Healthcare Medical Centre. From doctors and nurses to laboratory technicians and support staff, every team member is committed to providing exceptional care with warmth and professionalism.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-primary-foreground/70 text-sm mb-8">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Yala
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Bondo
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Madiany
            </span>
          </div>
          <Link to="/about">
            <Button variant="secondary" size="lg">
              Learn More About Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPreview;
