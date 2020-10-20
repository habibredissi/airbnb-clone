import React, { useEffect, useState } from "react";
import "./Places.css";
import Grid from "@material-ui/core/Grid";
import Title from "./Title";
import Place from "./Place";
import { client } from "../client";

function Places() {
  const [guides, setGuides] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "guides",
      });
      setGuides(response.items);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="places">
      <div className="wrapper">
        <Grid container spacing={1}>
          <Grid item xs={12} className="home__title">
            <Title allLinks={true} title="Places in London" />
          </Grid>

          {!loading &&
            guides.map((guide, index) => {
              return (
                <Grid item xs={12} md key={index}>
                  <Place guide={guide} />
                </Grid>
              );
            })}
        </Grid>
      </div>
    </div>
  );
}

export default Places;
