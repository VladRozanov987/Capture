//Page components
import AboutSection from "../components/AboutSection.component";
import FaqSection from "../components/FaqSection.component";
import ServicesSection from "../components/ServicesSection.component";

//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
