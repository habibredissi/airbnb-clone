import React, { useEffect, useState } from "react";
import StarIcon from "@material-ui/icons/Star";
import { useParams } from "react-router";
import { client } from "../client";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Button from "@material-ui/core/Button";
import Wrapper from "../elements/Wrapper";
import { ListingStars, P, IMG, StyledDiv, StyledHr } from "../elements/Listing";

const Listing = (props) => {
  const history = useHistory();
  const { id } = useParams();

  const [listing, setListing] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntry(id);
        setListing(response);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [id]);
  return (
    <React.Fragment>
      {!loading && (
        <Wrapper listing>
          <Button
            variant="outlined"
            color="default"
            startIcon={<ArrowBackIosIcon />}
            onClick={() => history.goBack()}
            style={{ marginBottom: "10px" }}
          >
            Back
          </Button>

          <div>
            <h1>{listing.fields.title}</h1>
            <ListingStars>
              <StarIcon className="listing__star--color" />
              <P>
                <strong>{listing.fields.note / 2}</strong>
                <span> ({listing.fields.reviews}) - </span>
              </P>
              <Link
                to={{
                  pathname: `/search/${listing.fields.city}`,
                }}
              >
                <P title>{listing.fields.city}</P>
              </Link>
            </ListingStars>
          </div>

          <IMG
            src={require(`../images/listings/${listing.fields.image1}.jpg`)}
            alt="Loft"
            StyledHr
          />

          <StyledDiv top="30px">
            <h2>
              {listing.fields.propertyType}. Host : {listing.fields.hostName}
            </h2>
            <p>
              {listing.fields.guests} guests · {listing.fields.propertyType} ·{" "}
              {listing.fields.bedrooms} rooms · {listing.fields.minimumNights}{" "}
              minimum nights
            </p>
            <StyledHr />
          </StyledDiv>
          <p>{parse(listing.fields.description)}</p>
          <StyledDiv top="20px">
            <h1>Bio Guillaume</h1>
            <StyledHr />
            <p>{parse(listing.fields.hostBio)}</p>
          </StyledDiv>
        </Wrapper>
      )}
    </React.Fragment>
  );
};

export default Listing;
