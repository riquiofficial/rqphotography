import home1 from "../img/home1.jpg";
//styles
import { motion } from "framer-motion";
import { About, Description, Image, Hide } from "../styles";
import { titleAnim, fade, photoAnim } from "../animation";
import { Wave } from "./Wave";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>photographs</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>come to life.</motion.h2>
          </Hide>
          <motion.p variants={fade}>
            Contact us for any photography or videography ideas that you have.
            We have professionals with amazing skills.
          </motion.p>
          <Link to="/contact">
            <motion.button variants={fade}>Contact</motion.button>
          </Link>
        </motion.div>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          src={home1}
          alt="guy with a camera by Jean-Daniel Francoeur from Pexels"
        />
      </Image>
      <Wave />
    </About>
  );
};

//styled components

export default AboutSection;
