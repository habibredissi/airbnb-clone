import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Title from "./Title";
import Place from "./Place";
import { client } from "../client";
import Wrapper from "../elements/Wrapper";

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
      <Wrapper>
        <Grid container spacing={1}>
          <Grid item xs={12}>
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
      </Wrapper>
    </div>
  );
}

export default Places;
