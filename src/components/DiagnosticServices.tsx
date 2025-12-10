import { motion } from "framer-motion";
import { Activity, Droplets, TestTube2, FlaskConical, Dna, Check } from "lucide-react";

const diagnosticCategories = [
  {
    icon: Activity,
    title: "Basic Screenings",
    tests: ["Blood pressure monitoring", "BMI calculation & assessment"],
    color: "bg-primary",
  },
  {
    icon: Droplets,
    title: "Blood Tests",
    tests: [
      "Complete Blood Count (CBC)",
      "Blood sugar levels",
      "Malaria testing",
      "HIV testing (confidential)",
      "STI tests",
      "Liver & kidney function",
    ],
    color: "bg-medical-blue",
  },
  {
    icon: TestTube2,
    title: "Urine Tests",
    tests: [
      "Urinalysis",
      "Pregnancy test",
      "Urine culture & sensitivity",
    ],
    color: "bg-sky-blue",
  },
  {
    icon: FlaskConical,
    title: "Stool Tests",
    tests: [
      "H. pylori testing",
      "Occult blood detection",
      "Stool culture & sensitivity",
    ],
    color: "bg-primary",
  },
  {
    icon: Dna,
    title: "Tissue Tests",
    tests: [
      "Histology examinations",
      "DNA testing & screening",
    ],
    color: "bg-medical-blue",
  },
];

const DiagnosticServices = () => {
  return (
    <section id="diagnostics" className="section-padding bg-clean-white">
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
            Diagnostics
          </span>
          <h2 className="heading-2 text-navy mb-4">
            Advanced Diagnostic Services
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Accurate diagnosis is the foundation of effective treatment. Our modern laboratory provides comprehensive testing services to help identify and address your health concerns.
          </p>
        </motion.div>

        {/* Diagnostic Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diagnosticCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${category.color} flex items-center justify-center mb-6`}>
                <category.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-navy text-xl mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.tests.map((test) => (
                  <li key={test} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm">{test}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Confidentiality Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-sky-blue-light rounded-2xl p-6 text-center"
        >
          <p className="text-navy font-medium">
            🔒 All tests are conducted with strict confidentiality. Your privacy is our priority.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DiagnosticServices;
