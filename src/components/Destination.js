import React from "react";
import "./Destination.css";

function Destination({ title, src }) {
  return (
    <div className="destination">
      <img className="destination__image" src={src} alt={title} />
      <h3 className="destination__name">{title}</h3>
    </div>
  );
}

export default Destination;
