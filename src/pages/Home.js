import React from "react";
import JustBooked from "../components/JustBooked";
import Places from "../components/Places";
import FeaturedDestinations from "../components/FeaturedDestinations";
import Experiences from "../components/Experiences";
import styled from "styled-components";

const StyledHome = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
`;

function Home() {
  return (
    <StyledHome>
      <JustBooked />
      <FeaturedDestinations />
      <Experiences />
      <Places />
    </StyledHome>
  );
}

export default Home;
