import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Navbar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="navbar">
      <div className="navbar__top">
        <Link to="/">
          <div className="navbar__left">
            <img src={require("../images/logo.png")} alt="logo" />
          </div>
        </Link>
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
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              height: "3px",
              background: "#FF385C",
            },
          }}
          centered
        >
          <Tab label="Home" to="/" component={Link} />
          <Tab label="Explore" to="/search" component={Link} />
          <Tab
            label="Paris"
            to={{
              pathname: `/search/Paris`,
            }}
            component={Link}
          />
          <Tab label="Experiences" />
        </Tabs>
      </div>
    </div>
  );
};

export default Navbar;
