import React, { useState } from "react";

import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SearchBar = () => {
  const [click, setClick] = useState(false);
  const clickStyleOnBtn = {
    background: click && "black",
    color: click && "white",
  };

  return (
    <Box
      className="search-bar"
      sx={{ ml: 2, mr: 3, display: "flex", alignItems: "center", flexGrow: 1 }}
    >
      <Input
        type="search"
        placeholder="Cerca quello che vuoi"
        sx={{ flexGrow: 1, p: 0.5, px: 2, backgroundColor: "#f0f0f0" }}
        onClick={() => setClick((prev) => !prev)}
        onClose={() => setClick(false)}
      />
      <IconButton
        aria-label="search"
        sx={{
          px: 1.5,
          pb: 1,
          borderRadius: 0,
          borderTopRightRadius: "16px",
          borderBottomRightRadius: "16px",
          ...clickStyleOnBtn,
        }}
      >
        <SearchRoundedIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
