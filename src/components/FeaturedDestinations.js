import React from "react";
import "./FeaturedDestinations.css";
import Destination from "./Destination";
import Grid from "@material-ui/core/Grid";
import Title from "./Title";

const FeaturedDestinations = () => {
  return (
    <div className="featureddestination">
      <div className="wrapper">
        <Grid container spacing={1}>
          <Grid item xs={12} className="home__title">
            <Title allLinks={true} title="Featured destinations" />
          </Grid>
          <Grid item xs={12} sm={4} md>
            <Destination src={require("../images/paris.png")} title="Paris" />
          </Grid>
          <Grid item xs={12} sm={4} md>
            <Destination
              src={require("../images/sf.png")}
              title="San Francisco"
            />
          </Grid>
          <Grid item xs={12} sm={4} md>
            <Destination src={require("../images/rome.png")} title="Rome" />
          </Grid>
          <Grid item xs={12} sm={4} md>
            <Destination
              src={require("../images/la.png")}
              title="Los Angeles"
            />
          </Grid>
          <Grid item xs={12} sm={4} md>
            <Destination src={require("../images/miami.png")} title="Miami" />
          </Grid>
          <Grid item xs={12} sm={4} md>
            <Destination src={require("../images/spain.png")} title="Madrid" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default FeaturedDestinations;
