import React from "react";

const NavbarListItem = (props) => {
  const { linkName, hrefDestination } = props;

  const handleClick = (elementId) => {
    const el = document.getElementById(elementId);
    el.scrollIntoView({ block: "start" });
  };

  return (
    <li
      onClick={() => {
        handleClick(hrefDestination);
      }}
      className="navbar-link"
    >
      {linkName}
    </li>
  );
};

export default NavbarListItem;
