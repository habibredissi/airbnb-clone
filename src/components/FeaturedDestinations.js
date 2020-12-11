import React, { useEffect, useState } from "react";
import Destination from "./Destination";
import Grid from "@material-ui/core/Grid";
import Title from "./Title";
import { client } from "../client";
import { Link } from "react-router-dom";
import Wrapper from "../elements/Wrapper";

const FeaturedDestinations = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await client.getEntries({ content_type: "places" });
      setPlaces(response.items);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="featureddestination">
      <Wrapper>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Title allLinks={true} title="Featured destinations" />
          </Grid>
          {!loading &&
            places.map((place, index) => {
              const { city, image } = place.fields;
              return (
                <Grid item xs={6} sm={4} md key={index}>
                  <Link
                    to={{
                      pathname: `/search/${city}`,
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <Destination src={image.fields.file.url} title={city} />
                  </Link>
                </Grid>
              );
            })}
        </Grid>
      </Wrapper>
    </div>
  );
};

export default FeaturedDestinations;
