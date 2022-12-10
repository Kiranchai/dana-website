import React from "react";
import "./Products.css";
import { FaIceCream, FaHamburger, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, slideFromTop } from "../../animations/Variants";

const Products = () => {
  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      transition={{ delay: 0.25, duration: 0.75 }}
      className="products-section"
      id="products"
    >
      <motion.header className="products-title">
        <motion.h3
          variants={slideFromTop}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.5 }}
        >
          Co sprzedajemy?
        </motion.h3>
      </motion.header>
      <div className="wrapper">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{
            delay: 1.5,
            staggerChildren: 1,
            when: "beforeChildren",
          }}
          className="product-category-container"
        >
          <motion.article
            variants={slideFromTop}
            transition={{ duration: 0.75 }}
            className="product-category"
          >
            <header className="product-icon">{<FaShoppingCart />}</header>

            <ul className="product-list">
              <li>Mrożone owoce</li>
              <li>Lód w kostkach</li>
              <li>Mrożone warzywa</li>
              <li>Mrożonki kulinarne</li>
              <li>Ryby, owoce morza</li>
            </ul>
          </motion.article>
          <motion.article
            variants={slideFromTop}
            transition={{ duration: 0.75 }}
            className="product-category"
          >
            <header className="product-icon"> {<FaHamburger />}</header>

            <ul className="product-list">
              <li>Frytki</li>
              <li>Pizze i zapiekanki</li>
              <li>Mięso kebab</li>
              <li>Sosy i jogurty</li>
              <li>Nuggetsy i stripsy</li>
            </ul>
          </motion.article>
          <motion.article
            variants={slideFromTop}
            transition={{ duration: 0.75 }}
            className="product-category"
          >
            <header className="product-icon"> {<FaIceCream />}</header>
            <ul className="product-list">
              <li>Lody śmietankowe</li>
              <li>Lody mleczne</li>
              <li>Sorbety</li>
              <li>Gofry</li>
              <li>Posypki</li>
            </ul>
          </motion.article>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Products;
