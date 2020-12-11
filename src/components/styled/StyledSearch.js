import styled from "styled-components";

const StyledSearch = styled.div`
  position: absolute;
  top: 35px;
  left: 25%;
  width: 100vw;

  & h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 559px;
    padding: 10px;
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 380px;
  }

  & input {
    width: 539px;
    padding: 20px;
    position: absolute;
    top: 420px;
    left: 0;
    height: 30px;
    border: 0;
    & :focus {
      outline-width: 0;
    }
  }

  & button {
    position: absolute;
    top: 480px;
    left: 0;
    text-transform: inherit;
    background-color: #ff7779;
    color: #fff;
    width: 579px;
    & :hover {
      background-color: rgba(255, 119, 121, 0.8);
      color: #fff;
    }
  }
`;

export { StyledSearch };
