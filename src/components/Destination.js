import React from "react";
import { StyledDestination } from "./styled/StyledDestination";

function Destination({ title, src }) {
  return (
    <StyledDestination>
      <img src={src} alt={title} />
      <h3>{title}</h3>
    </StyledDestination>
  );
}

export default Destination;
