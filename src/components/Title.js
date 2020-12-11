import React from "react";
import { Link } from "react-router-dom";
import { StyledTitle } from "./styled/StyledTitle";

const Title = ({ title, allLinks }) => {
  return (
    <StyledTitle>
      <h1>{title}</h1>
      {allLinks ? <Link to="/search">See All</Link> : ""}
    </StyledTitle>
  );
};

export default Title;
