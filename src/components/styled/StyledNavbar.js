import styled from "styled-components";

const StyledNavbar = styled.div`
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px !important;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #fff;

  & > div {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding-right: 15px;
    padding-left: 15px;
    align-items: center;
    @media screen and (max-width: 850px) {
      justify-content: center;
    }
  }

  & img {
    max-height: 60px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

const StyledNavbarCenter = styled.div`
  @media screen and (max-width: 850px) {
    display: none !important;
  }

  flex-grow: 1;
  padding-left: 20px;

  & fieldset {
    border-radius: 0px;
    border-color: rgb(221, 221, 221);
  }

  & > div:nth-child(1) > div > fieldset,
  > div:nth-child(2) > div > fieldset {
    border-right: 0px;
  }

  & > div:nth-child(2) > div > fieldset,
  > div:nth-child() > div > fieldset {
    border-left: 0px;
  }
`;

const StyledNavbarRight = styled.div`
  @media screen and (max-width: 1221px) {
    display: none !important;
  }
  & ul {
    margin: 0px;
    padding: 0px;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    & a {
      padding: 1em;
      display: block;
      text-align: center;
      text-decoration: none;
      color: #484848;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export { StyledNavbar, StyledNavbarCenter, StyledNavbarRight };
