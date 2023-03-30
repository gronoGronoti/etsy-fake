import React from "react";
import { Link, useParams } from "react-router-dom";

import "./ArticlePageStyle.css";

import { PopularItemsRN } from "../consts/IndexProductLinks";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

import SuggestedArticles from "./SuggestedArticles";
import Ratings from "../Ratings";
import QuantityTab from "./QuantityTab";

const ArticlePage = () => {
  let article = useParams();
  return (
    <>
      <SuggestedArticles />
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
              <Grid xs={12} md={7} item id={i} sx={{ display: "flex" }}>
                <Container
                  className="image-container"
                  maxWidth="md"
                  sx={{ p: 2 }}
                >
                  <CardMedia
                    component={entry.media.includes(".jpg") ? "img" : "video"}
                    src={entry.media}
                    alt="Product image"
                    autoPlay
                    sx={{
                      boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.35)",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                  />
                </Container>
              </Grid>
              <Grid xs={12} md={3.5} item id={i + 1}>
                <Box sx={{ p: 2, width: "100%" }}>
                  {entry.hasDiscount ? (
                    <div className="price-w-discount">
                      <Typography
                        variant="body1"
                        sx={{ fontSize: 30, fontWeight: 700, mr: 2 }}
                      >
                        € {entry.price}
                      </Typography>
                      <Typography
                        className="old-price"
                        variant="body1"
                        color="error"
                      >
                        € {entry.oldPrice}
                      </Typography>
                    </div>
                  ) : (
                    <Typography
                      variant="body1"
                      sx={{ fontSize: 30, fontWeight: 700 }}
                    >
                      € {entry.price}
                    </Typography>
                  )}
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{ fontSize: "18px" }}
                  >
                    {entry.alt}
                  </Typography>

                  <div className="seller-section">
                    <div className="seller">
                      <Typography variant="body2" color="initial">
                        by
                      </Typography>
                      <Link
                        to={`../sellers/${entry.seller}`}
                        style={{ marginLeft: "5px" }}
                      >
                        <Typography variant="body1">{entry.seller}</Typography>
                      </Link>
                    </div>

                    <Button
                      variant="text"
                      sx={{ color: "red", mx: 2, textTransform: "none" }}
                      startIcon={<FavoriteBorderRoundedIcon />}
                    >
                      Segui
                    </Button>
                  </div>

                  <Ratings
                    starNumber={entry.stars}
                    numOfReviews={entry.reviews + " Recensioni"}
                  />
                </Box>
              </Grid>
            </Grid>
          )
      )}
    </>
  );
};

export default ArticlePage;
