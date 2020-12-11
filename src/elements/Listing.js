import styled, { css } from "styled-components";

const ListingStars = styled.div`
  margin-top: 10px;
  color: #ff385c;
  display: flex;
  align-items: center;
`;

const P = styled.p`
  color: #222222;
  ${(props) =>
    props.title &&
    css`
      color: #717171;
      padding-left: 10px;
      font-weight: 600;
      text-decoration: underline;
      font-size: 14px;
      cursor: pointer;
    `}
`;

const IMG = styled.img`
  margin-top: 20px;
  border-radius: 10px;
  max-width: 100%;
  width: 100%;
`;

const StyledDiv = styled.div`
  margin-top: ${(props) => (props.top ? props.top : "0px")};
`;

const StyledHr = styled.hr`
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
`;

export { ListingStars, P, IMG, StyledDiv, StyledHr };
