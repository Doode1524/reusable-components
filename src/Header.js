import React from "react";
import "./styles.css";

const Header = (props) => {
  const { navigate } = props;
  
  return (
    <div className="header-container">
      <div>
        <h1 className="header-title">My Header</h1>
      </div>
    </div>
  );
};

export default Header;
