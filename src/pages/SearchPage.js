import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "../components/SearchResult";
import { useParams } from "react-router";
import { client } from "../client";
import { Link } from "react-router-dom";

function SearchPage() {
  const { city } = useParams("");

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "listings",
        "fields.city": city,
        limit: 30,
      });
      setListings(response.items);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 26 august to 30 august · 2 guest</p>
        <h1>Stays nearby {city} </h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      {!loading &&
        listings.map((listing, index) => {
          const {
            bedrooms,
            city,
            description,
            guests,
            hostBio,
            hostName,
            hostPic,
            image1,
            maxmiumNights,
            minimumNights,
            note,
            price,
            propertyType,
            reviews,
            title,
          } = listing.fields;
          return (
            <Link
              to={{
                pathname: `/listing/${listing.sys.id}`,
              }}
              style={{ textDecoration: "none", color: "#484848" }}
              key={index}
            >
              <SearchResult
                randomPic={image1}
                location={`${propertyType} in center of ${city}`}
                title={title}
                description={`${guests} guest · ${bedrooms} bedroom · Wifi · Kitchen · Free parking · Washing Machine`}
                star={note / 2}
                price={`$${price} / night`}
                total={`$${price * 4} total`}
                reviews={reviews}
                key={index}
              />
            </Link>
          );
        })}
    </div>
  );
}

export default SearchPage;
