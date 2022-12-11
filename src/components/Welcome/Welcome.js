import React from "react";
import "./Welcome.css";
import { motion } from "framer-motion";
import { fadeIn, slideFromBottom } from "../../animations/Variants";
import image from "../../images/welcome-background2.png";

const Welcome = () => {
  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      // whileInView="visible"
      transition={{ duration: 1 }}
      className="welcome-section"
    >
      <img
        className="background-image"
        src={image}
        alt={"hamburger background"}
      />
      <header className="welcome-header-container">
        {" "}
        <motion.h1
          variants={slideFromBottom}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.75, delay: 1 }}
          className="welcome-header"
        >
          Solidny dostawca,
        </motion.h1>
        <motion.span
          variants={slideFromBottom}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.75, delay: 1.75 }}
        >
          pewny partner.
        </motion.span>
      </header>
    </motion.section>
  );
};

export default Welcome;
