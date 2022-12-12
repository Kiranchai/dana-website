import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { fadeIn, slideFromTop } from "../../animations/Variants";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <motion.header
        variants={fadeIn}
        initial="hidden"
        // animate="visible"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.75 }}
        className="contact-header"
      >
        Czekamy na wspólną rozmowę
      </motion.header>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        viewport={{ once: true }}
        whileInView="visible"
        transition={{
          delay: 1,
          staggerChildren: 0.5,
          when: "beforeChildren",
        }}
        className="contact-details"
      >
        <motion.div
          variants={slideFromTop}
          transition={{ duration: 0.5 }}
          className="address-container"
        >
          <span style={{ color: "var(--golden)", fontSize: "1.5rem" }}>
            DANA
          </span>
          <span>ul. Berylowa 10</span>
          <span>82-310 Elbląg, Gronowo Górne</span>
        </motion.div>
        <motion.div
          variants={slideFromTop}
          transition={{ duration: 0.5 }}
          className="address-container"
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: ".25rem",
            }}
          >
            {<MdEmail />}
            <span style={{ color: "var(--golden)" }}>biuro@dana.elblag.pl</span>
          </span>

          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: ".25rem",
            }}
          >
            {<AiFillPhone />}
            <span style={{ color: "var(--golden)" }}>+48 55 233 5000</span>
          </span>
        </motion.div>
        <motion.div
          variants={slideFromTop}
          transition={{ duration: 0.5 }}
          className="address-container"
        >
          <span>KRS: 0000086093</span>
          <span>NIP: 5781007760</span>
          <span>REGON: 002813300</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
