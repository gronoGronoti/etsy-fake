import React from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ProductCard from "../Cards/ProductCard";
import Grid from "@mui/material/Grid";
import { PopularItemsRN } from "../consts/IndexProductLinks";
import { textAlign } from "@mui/system";

const PopularItems = () => {
  return (
    <Container maxWidth="xl">
      <Typography
        variant="h4"
        color="initial"
        sx={{ fontFamily: "Nunito", fontWeight: 600, mb: 1, textAlign: {xs: "center", sm: "start"} }}
      >
        Regali popolari in questo momento
      </Typography>

      <Grid
        container
        direction="row"
        alignItems="top"
        wrap="wrap"
        sx={{
          justifyContent: {
            xs: "center",
            sm: "space-between"
          }
        }}
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
