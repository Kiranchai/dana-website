import { useState } from "react";
import "./Navbar.css";
import Hamburger from "hamburger-react";
import NavbarListItem from "./NavbarListItem";

const Navbar = () => {
  const handleOnToggle = () => {
    setIconIsActive((prevState) => !prevState);
  };

  const [iconIsActive, setIconIsActive] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <span>
            <a className="logo-link" href="#App">
              LOGO
            </a>
          </span>

          <span className="hamburger-span">
            <Hamburger onToggle={handleOnToggle} />
          </span>
        </div>

        <ul className={iconIsActive ? "navbar-list showed" : "navbar-list"}>
          <NavbarListItem linkName="Strona główna" hrefDestination={"App"} />
          <NavbarListItem linkName="O nas" hrefDestination={"about"} />
          <NavbarListItem linkName="Oferta" hrefDestination={"App"} />
          <NavbarListItem linkName="Przedstawiciele" hrefDestination={"App"} />
          <NavbarListItem linkName="Kontakt" hrefDestination={"App"} />
        </ul>
      </nav>
      <div className="navbar-separator"></div>
    </>
  );
};

export default Navbar;
