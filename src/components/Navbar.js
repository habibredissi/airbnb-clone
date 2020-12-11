import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import DatePicker from "./DatePicker";
import PeopleIcon from "@material-ui/icons/People";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import PlaceIcon from "@material-ui/icons/Place";
import DateRangeIcon from "@material-ui/icons/DateRange";
import {
  StyledNavbar,
  StyledNavbarCenter,
  StyledNavbarRight,
} from "./styled/StyledNavbar";

const Navbar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [showSearch, setShowSearch] = useState(false);

  return (
    <StyledNavbar>
      <div>
        <Link to="/">
          <div>
            <img src={require("../images/logo.png")} alt="logo" />
          </div>
        </Link>
        <StyledNavbarCenter>
          <TextField
            placeholder="When"
            id="input-when"
            type="search"
            variant="outlined"
            onClick={() => setShowSearch(!showSearch)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DateRangeIcon />
                </InputAdornment>
              ),
            }}
          />
          {showSearch && <DatePicker />}
          <TextField
            placeholder="Anywhere"
            id="input-place"
            type="search"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PlaceIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            placeholder="1"
            id="input-guest"
            type="number"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PeopleIcon />
                </InputAdornment>
              ),
            }}
          />
        </StyledNavbarCenter>
        <StyledNavbarRight>
          <ul>
            <li>
              <a href="/">Become a Host</a>
            </li>
            <li>
              <a href="/">Help</a>
            </li>
            <li>
              <a href="/">Sign Up</a>
            </li>
            <li>
              <a href="/">Log in</a>
            </li>
          </ul>
        </StyledNavbarRight>
      </div>
      <div>
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
          style={{ margin: "0 auto" }}
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
        </Tabs>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
