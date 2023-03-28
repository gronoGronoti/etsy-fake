import React from "react";
import "./HeroProductsGridStyle.css";

import { Link } from "react-router-dom";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

import { HeroGridLinks } from "../consts/IndexProductLinks";
import Typography from "@mui/material/Typography";

const GridItem = (props) => (
  <Grid item xs={6} sm={4} md={2} className="hero-item">
    <Link
      to={props.link}
      id={props.id}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
      }}
    >
      <Avatar className="category-image" src={props.image} />
      <Typography className="text" variant="body1" color="initial">
        {props.title}
      </Typography>
    </Link>
  </Grid>
);

const HeroProductsGrid = () => {
  return (
    <Container maxWidth="lg" sx={{mb: 5}}>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        wrap="wrap"
      >
        {HeroGridLinks.map((Entry, i) => (
          <GridItem
            key={Entry.alt}
            id={i}
            title={Entry.alt}
            link={Entry.to}
            image={Entry.logo}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default HeroProductsGrid;
