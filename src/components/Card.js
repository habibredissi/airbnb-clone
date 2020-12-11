import React from "react";
import { StyledCard, StyledCardInfo } from "./styled/StyledCard";

function Card({ src, title, description, price }) {
  return (
    <StyledCard>
      <img src={src} alt="card" />
      <StyledCardInfo>
        <h2>{title}sss</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </StyledCardInfo>
    </StyledCard>
  );
}

export default Card;
