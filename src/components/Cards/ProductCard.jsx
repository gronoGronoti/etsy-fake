import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCardStyle.css";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

const ProductCard = (props) => {
  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    setHover((prev) => !prev);
  };

  return (
    <Link to={props.to}>
      <Card
        elevation={hover ? 4 : 0}
        onMouseOver={toggleHover}
        onMouseOut={toggleHover}
        sx={{ display: "inline-block", p: 1.3 }}
      >
        <CardMedia
          className="card-media"
          component={props.media.includes("video") ? "video" : "image"}
          title="Category image"
          image={props.media}
          autoPlay
          sx={{
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.35)",
            borderRadius: "5px",
            objectFit: "cover",
          }}
        />

        <CardContent class="product-area" sx={{ p: 0 }}>
          <Typography className="product-name" variant="body1" color="initial">
            {props.title}
          </Typography>
          <div className="product-stars">
            <Rating value={props.stars} readOnly size="small" sx={{mr: 1}} />
            <Typography variant="caption" color="initial">
              ({props.reviews})
            </Typography>
          </div>

          {props.hasDiscount ? (
            <div className="discount-sec">
              <Typography
              className="product-price"
                variant="body1"
                color="initial"
              >
                € {props.price}
              </Typography>
              <Typography
              className="product-price"
                variant="caption"
                color="error"
                sx={{textDecoration: "line-through", ml: 1}}
              >
                € {props.oldPrice}
              </Typography>
            </div>
          ) : (
            <Typography
              className="product-price"
              variant="body1"
              color="initial"
            >
              € {props.price}
            </Typography>
          )}

          {props.hasFreeShipping && (
            <Typography
              variant="caption"
              color="initial"
              sx={{
                backgroundColor: "#FDEBD2",
                px: 0.6,
                py: 0.3,
                borderRadius: "8px",
              }}
            >
              Spedizione GRATUITA
            </Typography>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
