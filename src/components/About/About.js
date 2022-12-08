import React from "react";
import "./About.css";
import image from "../../images/about-image.png";
import { motion } from "framer-motion";
import { fadeIn, slideFromLeft } from "../../animations/Variants";

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.25 }}
        className="content-wrapper"
      >
        <header>
          <h2 className="about-title">Parę słów o nas...</h2>
        </header>
        <div className="about-container">
          <motion.article
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.5 }}
            className="about-content"
          >
            <p>
              Firma <b>DANA</b> działa na terenach województwa
              warmińsko-mazurskiego i pomorskiego od 1990 roku.
            </p>
            <p>
              Specjalizuje się zarówno w obsłudze handlu detalicznego, jak i
              gastronomiczno - cukierniczego. Początkowo jako 2 osobowa spółka
              cywilna, później po połączeniu udziałów z hurtownią Mors w
              styczniu 1999 ma 4 wspólników, a w 2002 roku uzyskuje status
              spółki jawnej i w tej formie działa do dnia dzisiejszego.
            </p>
            <p>
              W roku 2017 wspólnicy nabywają udziały w firmie Chłodnie Wschód
              Sp. z o.o. i tym samym przystępują do grupy logistyczno -
              zakupowej o tej samej nazwie.
            </p>
          </motion.article>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.25 }}
            className="about-img-wrapper"
          >
            <img
              className="about-img"
              src={image}
              alt="building of the company"
            ></img>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
