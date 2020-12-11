import React from "react";
import { StyledCards, StyledCardsInfo } from "./styled/StyledCards";
import Rating from "@material-ui/lab/Rating";

function Cards({ title, randomPic, src, price, note, reviewsNumber, listing }) {
  return (
    <StyledCards>
      <img
        src={src ? src : require(`../images/listings/${randomPic}.jpg`)}
        alt={title}
      />
      <StyledCardsInfo>
        <p>{title}</p>
        <h4>
          ${price} {listing && <span className="cards__night">/ night</span>}
        </h4>
        <Rating name="size-small" defaultValue={note} size="small" />
        <h6>{reviewsNumber} reviews</h6>
      </StyledCardsInfo>
    </StyledCards>
  );
}

export default Cards;
