import React from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ProductCard from "../Cards/ProductCard";
import Grid from "@mui/material/Grid";
import { PopularItemsRN } from "../consts/IndexProductLinks";

const PopularItems = () => {
  return (
    <Container maxWidth="xl">
      <Typography
        variant="h4"
        color="initial"
        sx={{ fontFamily: "Nunito", fontWeight: 600, mb: 1 }}
      >
        Regali popolari in questo momento
      </Typography>

      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="top"
        wrap="wrap"
      >
        {PopularItemsRN.map((Entry, i) => (
          <Grid item key={Entry.to}>
            <ProductCard
              to={Entry.to}
              media={Entry.media}
              title={Entry.alt}
              price={Entry.price}
              stars={Entry.stars}
              reviews={Entry.reviews}
              hasDiscount={Entry.hasDiscount ? Entry.hasDiscount : null}
              oldPrice={Entry.hasDiscount ? Entry.oldPrice : null}
              hasFreeShipping={Entry.hasFreeShipping ? Entry.hasFreeShipping : null}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PopularItems;
