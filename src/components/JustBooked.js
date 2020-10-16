import React, { useState, useEffect } from "react";
import "./JustBooked.css";
import Cards from "./Cards";
import Grid from "@material-ui/core/Grid";
import Title from "./Title";
import { client } from "../client";
import { Link } from "react-router-dom";

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

  if (!loading) console.log(listings);
  return (
    <div className="justbooked">
      <div className="wrapper">
        <Grid container spacing={1}>
          <Grid item xs={12} className="home__title">
            <Title allLinks={false} title="Just Booked" />
          </Grid>
          {!loading &&
            listings.map((listing, index) => {
              const { image1, title, price, reviews, note } = listing.fields;
              console.log(listing.fields);
              return (
                <Grid item xs={12} md key={index}>
                  <Link
                    to={{
                      pathname: `/listing/${listing.sys.id}`,
                    }}
                  >
                    <Cards
                      src={image1.split("?")[0]}
                      title={title}
                      price={price}
                      reviewsNumber={reviews}
                      note={note}
                      listing={true}
                    />
                  </Link>
                </Grid>
              );
            })}
        </Grid>
      </div>
    </div>
  );
};

export default JustBooked;
