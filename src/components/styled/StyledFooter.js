import styled from "styled-components";

const StyledFooter = styled.div`
  border-top: 1px solid #dbdbdb;
  background-color: #fff;
  color: #484848;
  line-height: 1.5;

  & ul {
    list-style: none;
    padding-left: 0;
  }

  & a {
    text-decoration: none;
    color: #484848;
  }

  & h2 {
    color: #484848;
    font-size: 1.375rem;
    padding-bottom: 0.625rem;
  }

  & hr {
    height: 1px;
    background-color: #dbdbdb;
    border: none;
    max-width: 1200px;
  }
`;

const StyledMain = styled.div`
  padding: 1.25rem 1.875rem;
  display: flex;
  flex-wrap: wrap;

  & > div {
    padding: 1.25rem;
    min-width: 12.5rem;
  }

  @media only screen and (min-width: 29.8125rem /* 477px */) {
    justify-content: space-evenly;
  }

  @media only screen and (min-width: 77.5rem /* 1240px */) {
    justify-content: space-evenly;
  }

  & div:nth-child(1) > div {
    width: 100%;
  }

  & div:nth-child(1) > div:nth-child(2) {
    margin-top: 10px;
  }
`;

const StyledLegal = styled.div`
  padding: 0.9375rem 1.875rem;
  background-color: #fff;

  & ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  & ul li {
    margin: 0.125rem 0.625rem;
    white-space: nowrap;
  }

  & li:nth-last-child(2) {
    flex: 1;
  }
`;

export { StyledFooter, StyledMain, StyledLegal };
