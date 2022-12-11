import React from "react";
import AreaName from "../Area/AreaName";
import { motion } from "framer-motion";
import { slideFromTop } from "../../../animations/Variants";

const AgentArticle = (props) => {
  const { name, areas, phoneNumber } = props;

  return (
    <motion.article
      variants={slideFromTop}
      transition={{ duration: 0.5 }}
      className="agent-article"
    >
      <header className="agent-name">{name}</header>
      <div className="agent-areas-container">
        <span className="agent-areas">Obszar handlowy:</span>
        {areas.map((area) => {
          return <AreaName areaName={area} />;
        })}
      </div>
      <span className="phone-span">
        <h4>Telefon:</h4>
        {phoneNumber}
      </span>
    </motion.article>
  );
};

export default AgentArticle;
