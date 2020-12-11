import styled from "styled-components";

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & a {
    padding-right: 20px;
    color: #484848;
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
  }

  h1 {
    padding-bottom: 20px;
  }
`;

export { StyledTitle };
