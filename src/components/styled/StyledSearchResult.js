import styled from "styled-components";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const StyledFavoriteBorderIcon = styled(FavoriteBorderIcon)`
  position: absolute;
  top: 20px;
  right: 40px;
`;

const StyledSearchResult = styled.div`
  display: flex;
  position: relative;
  margin: 20px;
  padding: 20px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  & img {
    height: 200px;
    width: 350px;
    border-radius: 10px;
    overflow: hidden;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 20px;
  }
`;

const StyledInfoTop = styled.div`
  width: 40vw;
  & h3 {
    font-weight: 300;
    margin-top: 10px;
  }
  & p {
    margin-top: 10px;
    font-size: 13px;
    color: gray;
  }
`;

const StyledInfoBottom = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
  }

  & svg {
    color: red;
  }

  & p {
    padding-left: 5px;
  }
`;

const StyledSearchPrice = styled.div`
  position: absolute;
  bottom: 20px;
  right: 30px;

  & p {
    text-align: right;
  }

  @media screen and (max-width: 700px) {
    h2 {
      font-size: 16px !important;
    }
    p {
      display: none;
    }
  }
`;

export {
  StyledSearchResult,
  StyledInfoTop,
  StyledInfoBottom,
  StyledSearchPrice,
  StyledFavoriteBorderIcon,
};
