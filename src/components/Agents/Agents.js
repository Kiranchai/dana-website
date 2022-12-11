import React from "react";
import AgentArticle from "./AgentArticle/AgentArticle";
import "./Agents.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../animations/Variants";

const Agents = () => {
  const arkadiuszAreas = [
    "Kwidzyn",
    "Iława",
    "Ostróda",
    "Nowe Miasto Lubawskie",
    "Pasłęk",
  ];

  const mariuszAreas = [
    "Elbląg",
    "Jantar",
    "Stegna",
    "Kąty Rybackie",
    "Sztutowo",
    "Krynica Morska",
    "Piaski",
  ];

  const danielAreas = [
    "Braniewo",
    "Bartoszyce",
    "Dzierzgoń",
    "Malbork",
    "Nowy Dwór Gdański",
    "Starogard Gdański",
    "Tczew",
  ];

  const jacekAreas = [
    "Olsztyn",
    "Szczytno",
    "Olsztynek",
    "Bukowiec",
    "Siemiany",
    "Pieniężno",
    "Morąg",
    "Malbork",
    "Susz",
    "Prabuty",
  ];

  return (
    <section id="agents" className="agents-section">
      <motion.header
        variants={fadeIn}
        initial="hidden"
        viewport={{ once: true }}
        whileInView="visible"
        transition={{ duration: 1 }}
        className="agents-header"
      >
        Nasi przedstawiciele
      </motion.header>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        viewport={{ once: true }}
        whileInView="visible"
        transition={{
          delay: 0.5,
          staggerChildren: 0.5,
          when: "beforeChildren",
        }}
        className="agents-container"
      >
        <AgentArticle
          name="Arkadiusz"
          areas={arkadiuszAreas}
          phoneNumber="+48 668 326 459"
        />
        <AgentArticle
          name="Mariusz"
          areas={mariuszAreas}
          phoneNumber="+48 728 981 460"
        />
        <AgentArticle
          name="Daniel"
          areas={danielAreas}
          phoneNumber="+48 728 984 732"
        />
        <AgentArticle
          name="Jacek"
          areas={jacekAreas}
          phoneNumber="+48 728 980 321"
        />
      </motion.div>
    </section>
  );
};

export default Agents;
