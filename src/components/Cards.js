import React from "react";
import "./Cards.css";
import Rating from "@material-ui/lab/Rating";

function Cards({ title, src, price, note, reviewsNumber, listing }) {
  return (
    <div className="cards">
      <img src={src} alt={title} />
      <div className="cards__info">
        <p className="cards__title">{title}</p>
        <h4>
          ${price} {listing && <span className="cards__night">/ night</span>}
        </h4>
        <Rating name="size-small" defaultValue={note} size="small" />
        <h6>{reviewsNumber} reviews</h6>
      </div>
    </div>
  );
}

export default Cards;
