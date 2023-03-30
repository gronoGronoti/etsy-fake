import React from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CategoryCard from "../Cards/CategoryCard";
import Grid from "@mui/material/Grid";
import { PopularCategoriesList } from "../consts/IndexProductLinks";

const PopularCategories = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 6, mb: 2 }}>
      <Typography
        variant="h4"
        color="initial"
        sx={{
          fontFamily: "Nunito",
          fontWeight: 600,
          mb: 1.2,
          textAlign: { xs: "center", sm: "start" },
        }}
      >
        Acquista le categorie di regali popolari
      </Typography>

      <Grid
        container
        direction="row"
        alignItems="top"
        wrap="wrap"
        sx={{
          justifyContent: {
            xs: "center",
            sm: "space-between",
          },
        }}
      >
        {PopularCategoriesList.map((Entry, i) => (
          <Grid item key={Entry.to}>
            <CategoryCard
              id={i}
              link={Entry.to}
              media={Entry.media}
              title={Entry.alt}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PopularCategories;
