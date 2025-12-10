import { motion } from "framer-motion";
import { Heart, Eye, Target, Star, Users, Award, Calendar, MapPin } from "lucide-react";

const coreValues = [
  { icon: Heart, title: "Compassion", description: "Treating every patient with kindness and empathy" },
  { icon: Star, title: "Excellence", description: "Delivering the highest quality of care" },
  { icon: Users, title: "Community", description: "Serving our community with dedication" },
  { icon: Award, title: "Integrity", description: "Upholding ethical standards in all we do" },
];

const milestones = [
  { year: "2015", title: "Founded", description: "Dr. Okun Benjamin established home visit services" },
  { year: "2018", title: "Yala Branch", description: "Opened first physical healthcare center" },
  { year: "2020", title: "Bondo Expansion", description: "Extended services to Bondo community" },
  { year: "2023", title: "Madiany Branch", description: "Opened third location in Madiany" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-section">
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
            About Us
          </span>
          <h2 className="heading-2 text-navy mb-4">
            Our Story of Care
          </h2>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl p-8 md:p-12 shadow-lg mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h3 className="heading-3 text-navy mb-6">Hospital Overview</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Siaya Healthcare Medical Centre was born from a simple yet powerful idea: that quality healthcare should be accessible to everyone, right at their doorstep. Founded by Dr. Okun Benjamin, our journey began with home visits—bringing medical care directly to families who needed it most.
                </p>
                <p>
                  What started as one doctor's dedication to his community has grown into a comprehensive healthcare network serving the people of Yala, Bondo, and Madiany. Today, we operate three fully-equipped medical centers while continuing our tradition of home-based care.
                </p>
                <p>
                  Our team of dedicated healthcare professionals combines modern medical expertise with a deep understanding of our community's needs. We believe that healthcare is not just about treating illness—it's about building relationships, promoting wellness, and empowering our community to live healthier lives.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {/* Mission */}
              <div className="bg-sky-blue-light rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6 text-primary" />
                  <h4 className="font-bold text-navy text-lg">Our Mission</h4>
                </div>
                <p className="text-muted-foreground">
                  To provide accessible, affordable, and high-quality healthcare services that meet the unique needs of our community, with a focus on compassion, excellence, and patient-centered care.
                </p>
              </div>
              {/* Vision */}
              <div className="bg-sky-blue-light rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-primary" />
                  <h4 className="font-bold text-navy text-lg">Our Vision</h4>
                </div>
                <p className="text-muted-foreground">
                  To be the leading community healthcare provider in Western Kenya, recognized for our commitment to bringing healthcare home and improving the health outcomes of every family we serve.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="heading-3 text-navy text-center mb-10">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-bold text-navy mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="heading-3 text-navy text-center mb-10">Key Milestones</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden lg:block" />
            
            <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-card rounded-2xl p-6 shadow-card text-center relative"
                >
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {milestone.year}
                  </div>
                  <h4 className="font-bold text-navy mb-2">{milestone.title}</h4>
                  <p className="text-muted-foreground text-sm">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-navy rounded-3xl p-8 md:p-12 text-center"
        >
          <Users className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
          <h3 className="heading-3 text-primary-foreground mb-4">Our Dedicated Team</h3>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6">
            Our healthcare professionals are the heart of Siaya Healthcare Medical Centre. From doctors and nurses to laboratory technicians and support staff, every team member is committed to providing exceptional care with warmth and professionalism.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-primary-foreground/70 text-sm">
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
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
