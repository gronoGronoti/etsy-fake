import React from "react";
import { Link } from "react-router-dom";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ProductCard from "../Cards/ProductCard";
import Grid from "@mui/material/Grid";
import { PopularItemsRN } from "../consts/IndexProductLinks";

const SuggestedArticles = () => {
  return (
    <Container maxWidth="xl">
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h4"
          color="initial"
          sx={{
            fontFamily: "Nunito",
            fontWeight: 600,
            mt: 3,
            mb: 1,
            textAlign: { xs: "center", sm: "start" },
          }}
        >
          Articoli Simili
        </Typography>
        <Link to="/">
          <Typography variant="caption">Mostra altro</Typography>
        </Link>
      </div>

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
        {PopularItemsRN.map((Entry, i) => (
          <Grid item key={Entry.articleId}>
            <ProductCard
              to={`listing/${Entry.articleId}`}
              media={Entry.media}
              title={Entry.alt}
              price={Entry.price}
              stars={Entry.stars}
              reviews={Entry.reviews}
              hasDiscount={Entry.hasDiscount ? Entry.hasDiscount : null}
              oldPrice={Entry.hasDiscount ? Entry.oldPrice : null}
              hasFreeShipping={
                Entry.hasFreeShipping ? Entry.hasFreeShipping : null
              }
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SuggestedArticles;
