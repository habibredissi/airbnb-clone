import React from "react";
import StarIcon from "@material-ui/icons/Star";
import {
  StyledSearchResult,
  StyledInfoTop,
  StyledInfoBottom,
  StyledSearchPrice,
  StyledFavoriteBorderIcon,
} from "./styled/StyledSearchResult";

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  reviews,
  fromNotifications,
  randomPic,
}) {
  return (
    <StyledSearchResult>
      <img src={require(`../images/listings/${randomPic}.jpg`)} alt="" />
      <StyledFavoriteBorderIcon />

      <div>
        <StyledInfoTop>
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </StyledInfoTop>

        <StyledInfoBottom>
          <div>
            <StarIcon />
            <p>
              <strong>{star} </strong>
            </p>
            <p> ({reviews})</p>
          </div>
          <StyledSearchPrice>
            <h2>{price}</h2>
            <p>{total}</p>
          </StyledSearchPrice>
        </StyledInfoBottom>
      </div>
    </StyledSearchResult>
  );
}

export default SearchResult;
