import React from "react";
import { useParams } from "react-router-dom";

import { PopularItemsRN } from "./consts/IndexProductLinks";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ArticlePage = () => {
  let article = useParams();

  return (
    <>
      {console.log(article)}
      {PopularItemsRN.map(
        (entry, i) =>
          article.id.toString() === entry.articleId.toString() && (
            <Grid
              container
              key={entry.articleId}
              direction="row"
              justifyContent="evenly"
              alignItems="top"
              wrap="wrap"
            >
              <Grid xs={7.5} item id={i}>
                <Box sx={{ p: 4, height: "520px" }}>
                  {entry.media.includes(".jpg") ? (
                    <img
                      src={entry.media}
                      alt="Product image"
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                  ) : (
                    <video style={{ width: "100%", height: "520px" }} controls>
                      <source src={entry.media} type="video/mp4" style={{height: "100%", objectFit: "contain"}} />
                    </video>
                  )}
                </Box>
              </Grid>
              <Grid xs={4.5} item id={i + 1}>
                <Box sx={{ p: 4, pl: 0, width: "100%" }}>
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{ fontSize: "18px" }}
                  >
                    {entry.alt}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          )
      )}
    </>
  );
};

export default ArticlePage;
