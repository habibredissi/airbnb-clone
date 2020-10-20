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
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntries({
          content_type: "listings",
          "fields.city": city,
          limit: 20,
        });
        setListings(response.items);
        const response2 = await client.getEntries({ content_type: "places" });
        setPlaces(response2.items);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [city]);

  return (
    <div className="searchPage">
      <div className="searchPage__city">
        <h1>Other cities</h1>
        {!loading &&
          places.map((place, index) => {
            return (
              <Link
                to={{
                  pathname: `/search/${place.fields.city}`,
                }}
                key={index}
              >
                <Button variant="outlined">{place.fields.city}</Button>
              </Link>
            );
          })}
      </div>
      <div className="searchPage__info">
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
            guests,
            image1,
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
