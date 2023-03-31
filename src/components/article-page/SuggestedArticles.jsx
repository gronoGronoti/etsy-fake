import React from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ProductCard from "../Cards/ProductCard";
import Grid from "@mui/material/Grid";
import { PopularItemsRN } from "../consts/IndexProductLinks";

const SuggestedArticles = () => {
  const sliderSettings = {
    className: "center",
    centerPadding: "60px",
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1470,
        settings: {
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 970,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 750,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 530,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

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
    </Container>
  );
};

export default SuggestedArticles;
