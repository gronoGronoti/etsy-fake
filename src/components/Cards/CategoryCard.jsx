import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./CategoryCardStyle.css";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CategoryCard = (props) => {
  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    setHover((prev) => !prev);
  };
  return (
    <Link to={props.link} style={{ textDecoration: "none" }}>
      <Card
        className="cat-card"
        id={props.id}
        elevation={hover ? 4 : 0}
        onMouseOver={toggleHover}
        onMouseOut={toggleHover}
        sx={{ borderRadius: "15px", border: "1px solid lightgray" }}
      >
        <CardMedia
          className="cat-card-image"
          title="Category Image"
          component={props.media.includes(".jpg") ? "img" : "video"}
          image={props.media}
        />
        <CardContent className="cat-card-content">
          <Typography className="cat-content-text">
            {props.title}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
