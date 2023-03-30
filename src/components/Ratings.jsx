import React from "react";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { display } from "@mui/system";

const Ratings = (props) => {
  const ratingStyle = {
    margin: "4px 0",
    display: "inline-flex",
    alignItems: "center",
  };
  return (
    <div style={ratingStyle}>
      <Rating value={props.starNumber} readOnly size="small" sx={{ mr: 1 }} />
      <Typography variant="caption" color="initial">
        ({props.numOfReviews})
      </Typography>
    </div>
  );
};

export default Ratings;
