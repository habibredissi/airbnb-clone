import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const StyledDiv = styled.div`
  padding: ${(props) => (props.padding ? props.padding : "20px 0 0 20px")};
`;

const StyledButton = styled(Button)`
  text-transform: inherit;
  margin: 5px;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding-right: 10px;
`;

const StyledInfo = styled.div`
  padding: 20px;
  & p {
    margin-bottom: 10px;
    font-size: 14px;
  }
  & h1 {
    margin-bottom: 10px;
  }
  & button {
    border-radius: 30px;
    text-transform: inherit;
    margin: 5px;
  }
`;

export { StyledDiv, StyledButton, StyledLink, StyledInfo };
