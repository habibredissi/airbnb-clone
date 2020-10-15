import React from "react";
import "./Destination.css";

function Destination({ title, src }) {
  return (
    <div className="destination">
      <img src={src} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default Destination;
