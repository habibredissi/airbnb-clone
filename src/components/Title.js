import React from "react";
import "./Title.css";
import { Link } from "react-router-dom";

const Title = ({ title, allLinks }) => {
  return (
    <div className="title">
      <h1>{title}</h1>
      {allLinks ? <Link to="/search">See All</Link> : ""}
    </div>
  );
};

export default Title;
