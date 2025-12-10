import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description: string;
  backgroundImage: string;
}

const PageHeader = ({ title, description, backgroundImage }: PageHeaderProps) => {
  return (
    <section className="relative h-[300px] md:h-[350px] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Medical Blue Overlay */}
      <div className="absolute inset-0 bg-medical-blue/45" />
      
      {/* Gradient Fade from bottom to top */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
};

export default PageHeader;
