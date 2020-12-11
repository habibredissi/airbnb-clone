import styled from "styled-components";

const StyledPlace = styled.div`
  & > div {
    position: relative;
    text-align: center;
    color: white;
    cursor: pointer;

    & > div {
      position: absolute;
      bottom: 8px;
      left: 16px;
      text-align: left;
      & p {
        font-size: 1.6em;
        line-height: 30px;
        margin-bottom: 10px;
        text-transform: uppercase;
      }
    }
  }

  & span {
    padding: 2px 5px;
    background-color: white;
    color: #000;
    border-radius: 5px;
    margin-bottom: 10px;
    display: inline-block;
    font-weight: 600;
  }

  & img {
    width: 100%;
  }
`;

export { StyledPlace };
