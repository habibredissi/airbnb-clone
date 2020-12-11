import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import Grid from "@material-ui/core/Grid";
import Title from "./Title";
import { client } from "../client";
import { Link } from "react-router-dom";
import Wrapper from "../elements/Wrapper";

const JustBooked = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "listings",
        limit: 4,
      });
      setListings(response.items);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Wrapper>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Title allLinks={false} title="Just Booked" />
          </Grid>
          {!loading &&
            listings.map((listing, index) => {
              const { image1, title, price, reviews, note } = listing.fields;
              return (
                <Grid item xs={12} md key={index}>
                  <Link
                    to={{
                      pathname: `/listing/${listing.sys.id}`,
                    }}
                    style={{ textDecoration: "none", color: "#484848" }}
                  >
                    <Cards
                      title={title}
                      price={price}
                      reviewsNumber={reviews}
                      note={note}
                      listing={true}
                      randomPic={image1}
                    />
                  </Link>
                </Grid>
              );
            })}
        </Grid>
      </Wrapper>
    </div>
  );
};

export default JustBooked;
