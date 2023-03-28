import React, { useState } from "react";
import "./SearchBar.css"

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";


const SearchBar = () => {
  const [click, setClick] = useState(false);
  const clickStyleOnBtn = {
    background: click ? "black" : "#f0f0f0",
    color: click ? "white" : "black",
  };

  return (
    <Box
      className="search-box"
      sx={{ p: 0, ml: 2, mr: 3, display: "flex", alignItems: "center", flexGrow: 1 }}
    >
      <input className="search-bar" type="search" placeholder="Cerca quello che vuoi" onClick={() => setClick(prev => !prev)} />
      <IconButton className="search-btn" aria-label="search" style={clickStyleOnBtn} >
        <SearchRoundedIcon sx={{mx: 0.6}} />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
