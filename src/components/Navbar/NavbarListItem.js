import React from "react";

const NavbarListItem = (props) => {
  const { linkName, hrefDestination } = props;

  return (
    <li>
      <a className="navbar-link" href={`#${hrefDestination}`}>
        {linkName}
      </a>
    </li>
  );
};

export default NavbarListItem;
