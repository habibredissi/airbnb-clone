import React from "react";
import "./Home.css";
import JustBooked from "../components/JustBooked";
import Places from "../components/Places";
import FeaturedDestinations from "../components/FeaturedDestinations";
import Experiences from "../components/Experiences";

function Home() {
  return (
    <div className="home">
      {/* <Banner /> */}

      <JustBooked />

      <FeaturedDestinations />

      <Experiences />

      <Places />
    </div>
  );
}

export default Home;
