import React from "react";
import "./Experiences.css";
import Cards from "./Cards";
import Grid from "@material-ui/core/Grid";
import Title from "./Title";

const Experiences = () => {
  return (
    <div className="experiences">
      <div className="wrapper">
        <Grid container spacing={1}>
          <Grid item xs={12} className="home__title">
            <Title allLinks={true} title="Experiences" />
          </Grid>
          <Grid item xs>
            <Cards
              src={require("../images/booked/1.png")}
              title="Step behind the scenes of Havana’s theater"
              price={123}
              reviewsNumber={84}
              note={4.8}
            />
          </Grid>
          <Grid item xs>
            <Cards
              src={require("../images/booked/2.png")}
              title="Step behind the scenes of Havana’s theater"
              price={123}
              reviewsNumber={84}
              note={4.8}
            />
          </Grid>
          <Grid item xs>
            <Cards
              src={require("../images/booked/3.png")}
              title="Step behind the scenes of Havana’s theater"
              price={123}
              reviewsNumber={84}
              note={4.8}
            />
          </Grid>
          <Grid item xs>
            <Cards
              src={require("../images/booked/4.png")}
              title="Step behind the scenes of Havana’s theater"
              price={123}
              reviewsNumber={84}
              note={4.8}
            />
          </Grid>
          <Grid item xs>
            <Cards
              src={require("../images/booked/5.png")}
              title="Step behind the scenes of Havana’s theater"
              price={123}
              reviewsNumber={84}
              note={4.8}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Experiences;
