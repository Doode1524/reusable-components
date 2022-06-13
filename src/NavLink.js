import React from "react";
import "./styles.css";

const NavLink = (props) => {
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
