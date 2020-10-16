import React, { useEffect, useState } from "react";
import "./Listing.css";
import StarIcon from "@material-ui/icons/Star";
import { useParams } from "react-router";
import { client } from "../client";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

const Listing = () => {
  const { id } = useParams();

  const [listing, setListing] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await client.getEntry(id);
      setListing(response);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (!loading) console.log(listing.fields["title"]);
  return (
    <div className="listing">
      {!loading && (
        <div className="wrapper">
          <div className="listing__tile">
            <h1>{listing.fields.title}</h1>
            <div className="listing__stars">
              <StarIcon className="listing__star--color" />
              <p className="listing__ratings">
                <strong>{listing.fields.note / 2}</strong>
                <span> ({listing.fields.reviews}) - </span>
              </p>
              <Link
                to={{
                  pathname: `/search/${listing.fields.city}`,
                }}
              >
                <p className="listing__tile__city">{listing.fields.city}</p>
              </Link>
            </div>
          </div>
          <div className="listing__image">
            <img src={listing.fields.image1} alt="Loft" />
          </div>
          <div className="listing__infos">
            <h2>
              {listing.fields.propertyType}. Host : {listing.fields.hostName}
            </h2>
            <p>
              {listing.fields.guests} guests · {listing.fields.propertyType} ·{" "}
              {listing.fields.bedrooms} rooms · {listing.fields.minimumNights}{" "}
              minimum nights
            </p>
            <hr className="listing__infos__sep" />
          </div>
          <div className="listing__description">
            <p>{parse(listing.fields.description)}</p>
          </div>
          <div className="listing__host">
            <h1>Bio Guillaume</h1>
            <hr className="listing__infos__sep" />
            <p>{parse(listing.fields.hostBio)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Listing;