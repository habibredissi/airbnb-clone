import styled from "styled-components";

const StyledCards = styled.div`
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 6px 18px -9px rgba(0, 0, 0, 0.75);
  transition: transform 100ms ease-in;
  cursor: pointer;

  & img {
    max-width: 100%;
    min-height: 183px;
    width: 100%;
  }

  &:hover {
    transform: scale(1.07);
  }

  &h4 {
    padding-left: 4px;
  }

  &h6 {
    padding-left: 4px;
  }
`;

const StyledCardsInfo = styled.div`
  padding: 10px;
  & p {
    font-size: 16px;
    min-height: 50px;
  }

  &h4 {
    font-weight: 400;
  }
`;

export { StyledCards, StyledCardsInfo };
