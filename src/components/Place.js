import React from "react";
import { StyledPlace } from "./styled/StyledPlace";

function Place(props) {
  const { title, author, category, image } = props.guide.fields;
  return (
    <StyledPlace>
      <div>
        <img src={image.fields.file.url} alt="place" />
        <div>
          <span>GUIDE</span>
          <p>{title}</p>
        </div>
      </div>
      <h5>By {author}</h5>
      <p>{category}</p>
    </StyledPlace>
  );
}

export default Place;
