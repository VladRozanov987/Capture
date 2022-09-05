import home1 from "../img/home1.png";
//Styles
import { Layout, Description, Hide, Image } from "../styles";
//Framer motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wawe.component";

const AboutSection = () => {
  return (
    <Layout>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>come true</motion.h2>
          </Hide>
          <motion.p variants={fade}>
            Contact us for any photography or videography ideas that you have.
            We have professionals with amazing skills.
          </motion.p>
          <motion.button variants={fade}>Contact Us</motion.button>
        </motion.div>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="" />
      </Image>
      <Wave />
    </Layout>
  );
};

export default AboutSection;
