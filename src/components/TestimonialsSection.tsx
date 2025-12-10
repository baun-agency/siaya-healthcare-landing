import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "Siaya Healthcare saved my mother's life. The doctors came to our home when she couldn't travel, and their care was exceptional. We are forever grateful for their dedication.",
    author: "Mary Akinyi",
    role: "Patient's Family",
    location: "Yala",
  },
  {
    id: 2,
    content: "The online consultation service is incredible. I was able to speak with a doctor from Nairobi about my child's condition. Professional, caring, and so convenient.",
    author: "John Omondi",
    role: "Parent",
    location: "Bondo",
  },
  {
    id: 3,
    content: "From the reception to the doctors, everyone treats you with respect and kindness. This is what healthcare should be—accessible and compassionate.",
    author: "Grace Adhiambo",
    role: "Regular Patient",
    location: "Madiany",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Client Testimonial
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from the families and patients who have experienced our compassionate care firsthand.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-3xl p-8 md:p-12 border border-border shadow-lg">
            {/* Quote icon */}
            <div className="absolute top-8 left-8 text-primary/20">
              <Quote className="w-16 h-16" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center relative z-10"
              >
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                  "{testimonials[current].content}"
                </p>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {testimonials[current].author.charAt(0)}
                    </span>
                  </div>
                  <h4 className="font-bold text-navy">{testimonials[current].author}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[current].role} • {testimonials[current].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === current ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
