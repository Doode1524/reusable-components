import React from "react";
import NavLink from "./NavLink";
import "./styles.css";

const Header = (props) => {
  const { navigate, navLinks } = props;

  return (
    <div className="header-container">
      <div>
        <h1 className="header-title">My Header</h1>
        <div className="navlink-container">
          {navLinks.map((navLink) => {
            return (
              <NavLink
                text={navLink.text}
                path={navLink.path}
                navigate={navigate}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
