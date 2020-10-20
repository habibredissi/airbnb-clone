import React, { useEffect, useState } from "react";
import "./Experiences.css";
import Cards from "./Cards";
import Grid from "@material-ui/core/Grid";
import Title from "./Title";
import { client } from "../client";

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "experiences",
      });
      setExperiences(response.items);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="experiences">
      <div className="wrapper">
        <Grid container spacing={1}>
          <Grid item xs={12} className="home__title">
            <Title allLinks={true} title="Experiences" />
          </Grid>
          {!loading &&
            experiences.map((experience, index) => {
              const { title, price, reviews, note, image } = experience.fields;
              return (
                <Grid item xs key={index}>
                  <Cards
                    src={image.fields.file.url}
                    title={title}
                    price={price}
                    reviewsNumber={reviews}
                    note={note}
                  />
                </Grid>
              );
            })}
        </Grid>
      </div>
    </div>
  );
};

export default Experiences;
