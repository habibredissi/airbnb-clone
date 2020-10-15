import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__top">
        <div className="navbar__left">
          <img src={require("../images/logo.png")} alt="logo" />
        </div>
        <div className="navbar__center">
          <h1>navbar__center</h1>
        </div>
        <div className="navbar__right">
          <ul clas="navbar__right__menu">
            <li>
              <a href="#">Become a Host</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
            <li>
              <a href="#">Log in</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar__bottom">
        <h1>bottom</h1>
      </div>
    </div>
  );
};

export default Navbar;
