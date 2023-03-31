import React, { useState } from "react";
import "./SearchBar.css";

import Box from "@mui/material/Box";
import OutlinedInput from '@mui/material/OutlinedInput'
import IconButton from "@mui/material/IconButton";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";


const SearchBar = (props) => {
  const [click, setClick] = useState(false);
  const clickStyleOnBtn = {
    background: click ? "black" : "#f0f0f0",
    color: click ? "white" : "black",
  };

  return (
    <Box
      className="search-box"
      sx={{
        ...props.margin,
        ...props.padding,
        display: "flex",
        alignItems: "center",
        flex: 1,
      }}
    >
      <div className="search-bar">
        <OutlinedInput type="search" className="bar" placeholder="Cerca quello che vuoi" color="secondary" />
        <IconButton aria-label="search-bar-button" className="button" /*onClick={}*/>
          <SearchRoundedIcon />
        </IconButton>
      </div>
    </Box>
  );
};

export default SearchBar;
