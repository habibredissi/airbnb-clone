import React from "react";
import "./Title.css";

const Title = ({ title, allLinks }) => {
  return (
    <div className="title">
      <h1>{title}</h1>
      {allLinks ? <a href="#">See All</a> : ""}
    </div>
  );
};

export default Title;
