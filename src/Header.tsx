import React from "react";
import { NavigateFunction } from "react-router-dom";
import NavLink from "./NavLink";
import "./styles.css";
import {INavLink} from "./types"

interface IProps {
  navigate: NavigateFunction;
  navLinks: INavLink[];
}

const Header = (props: IProps) => {
  const { navigate, navLinks } = props;

  return (
    <div className="header-container">
      <div>
        <h1 className="header-title">My Header</h1>
        <div className="navlink-container">
          {navLinks.map((navLink: INavLink) => {
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
