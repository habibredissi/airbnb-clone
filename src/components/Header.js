import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          src={require("../images/logo.png")}
          className="header__logo"
          alt="logo"
        />
      </Link>

      <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <ul>
          <li>Become a Host</li>
          <li>Help</li>
          <li>Sign Up</li>
          <li>Log in</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
