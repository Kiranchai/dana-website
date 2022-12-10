import React from "react";
import "./Products.css";
import { FaIceCream, FaHamburger, FaShoppingCart } from "react-icons/fa";

const Products = () => {
  return (
    <section className="products-section">
      <header className="products-title">
        <h3>Co sprzedajemy?</h3>
      </header>
      <div className="product-category-container">
        <article className="product-category">
          <header className="product-icon">{<FaShoppingCart />}</header>

          <ul className="product-list">
            <li>Mrożone owoce</li>
            <li>Lód w kostkach</li>
            <li>Mrożone warzywa</li>
            <li>Mrożonki kulinarne</li>
            <li>Ryby, owoce morza</li>
          </ul>
        </article>
        <article className="product-category">
          <header className="product-icon"> {<FaHamburger />}</header>

          <ul className="product-list">
            <li>Frytki</li>
            <li>Pizze i zapiekanki</li>
            <li>Mięso kebab</li>
            <li>Sosy i jogurty</li>
            <li>Nuggetsy i stripsy</li>
          </ul>
        </article>
        <article className="product-category">
          <header className="product-icon"> {<FaIceCream />}</header>
          <ul className="product-list">
            <li>Lody śmietankowe</li>
            <li>Lody mleczne</li>
            <li>Sorbety</li>
            <li>Gofry</li>
            <li>Posypki</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Products;
