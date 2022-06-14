import React from "react";
import { NavigateFunction } from "react-router-dom";
import "./styles.css";

interface IProps {
  text: string;
  path: string;
  navigate: NavigateFunction;
}

const NavLink = (props: IProps) => {
  const { text, path, navigate } = props;
  return (
    <div className="navlink">
      <a href="#" onClick={() => navigate(path)}>
        {text}
      </a>
    </div>
  );
};

export default NavLink;
