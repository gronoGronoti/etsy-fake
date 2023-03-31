import React from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import { sliderSettings } from "./suggested-art-slider/ArticleSlider";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ProductCard from "../Cards/ProductCard";
import { PopularItemsRN } from "../consts/IndexProductLinks";

const SuggestedArticles = () => {
  return (
    <Container maxWidth="xl" sx={{mb: 4}}>
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

      <div style={{ width: "-webkit-fill-available" }}>
        <Slider {...sliderSettings}>
          {PopularItemsRN.map((Entry, i) => (
            <ProductCard
              to={`../listing/${Entry.articleId}`}
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
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default SuggestedArticles;
