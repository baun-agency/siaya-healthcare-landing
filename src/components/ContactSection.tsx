import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Home, Calendar, Video } from "lucide-react";
import { useState } from "react";

const branches = [
  { name: "Yala Branch", address: "Yala Town, Siaya County" },
  { name: "Bondo Branch", address: "Bondo Town, Siaya County" },
  { name: "Madiany Branch", address: "Madiany Town, Siaya County" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
    callback: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="section-padding bg-clean-white">
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
            Contact Us
          </span>
          <h2 className="heading-2 text-navy mb-4">
            Get in Touch with Us
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            We're here to provide care whenever you need it. Contact us, book a consultation, or request a home visit—your health is our priority.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="font-bold text-navy text-xl mb-6">Contact Details</h3>
              <div className="space-y-5">
                <a href="mailto:siayahealthcare@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-navy">Email</p>
                    <p className="text-muted-foreground">siayahealthcare@gmail.com</p>
                  </div>
                </a>
                <a href="tel:0733906199" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-navy">Phone (24/7)</p>
                    <p className="text-muted-foreground">0733906199</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-navy">Payment</p>
                    <p className="text-muted-foreground">Paybill: 7765729</p>
                    <p className="text-sm text-muted-foreground">Account: Patient's Name</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Branches */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="font-bold text-navy text-xl mb-6">Our Branches</h3>
              <div className="space-y-4">
                {branches.map((branch) => (
                  <div key={branch.name} className="flex items-start gap-4 p-4 bg-sky-blue-light rounded-xl">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-medium text-navy">{branch.name}</p>
                      <p className="text-sm text-muted-foreground">{branch.address}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      Get Directions
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-3 gap-4">
              <Button variant="soft" className="flex-col h-auto py-4 gap-2">
                <Home className="w-5 h-5" />
                <span className="text-xs">Home Visit</span>
              </Button>
              <Button variant="soft" className="flex-col h-auto py-4 gap-2">
                <Calendar className="w-5 h-5" />
                <span className="text-xs">Appointment</span>
              </Button>
              <Button variant="soft" className="flex-col h-auto py-4 gap-2">
                <Video className="w-5 h-5" />
                <span className="text-xs">Online Consult</span>
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="font-bold text-navy text-xl mb-6">Send us a Message</h3>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">Email / Phone</label>
                  <input
                    type="text"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Enter email or phone number"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">Subject / Service Inquiry</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="What can we help you with?"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                    required
                  />
                </div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.callback}
                    onChange={(e) => setFormData({ ...formData, callback: e.target.checked })}
                    className="w-5 h-5 rounded border-border text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-muted-foreground">Request a callback</span>
                </label>
                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
