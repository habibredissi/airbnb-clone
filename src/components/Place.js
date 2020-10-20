import React from "react";
import "./Place.css";
function Place(props) {
  const { title, author, category, image } = props.guide.fields;
  return (
    <div className="place">
      <div className="place__tile">
        <img src={image.fields.file.url} alt="place" />
        <div className="place__tile--left">
          <span>GUIDE</span>
          <p>{title}</p>
        </div>
      </div>
      <h5>By {author}</h5>
      <p>{category}</p>
    </div>
  );
}

export default Place;
