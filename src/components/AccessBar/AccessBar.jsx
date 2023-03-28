import React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartCheckoutRoundedIcon from "@mui/icons-material/ShoppingCartCheckoutRounded";
import Tooltip from "@mui/material/Tooltip";

const AccessBar = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Button
        variant="text"
        sx={{
          color: "black",
          textTransform: "none",
          borderRadius: "20px",
          fontSize: "14px",
        }}
      >
        Accedi
      </Button>

      <Tooltip title="Italia">
        <IconButton aria-label="language" sx={{ ml: 1 }}>
          <LanguageRoundedIcon sx={{ color: "black" }} />
        </IconButton>
      </Tooltip>

      <Tooltip title="Preferiti">
        <Link to="favorites">
          <IconButton aria-label="favorites" sx={{ mx: 1 }}>
            <FavoriteBorderRoundedIcon sx={{ color: "black" }} />
          </IconButton>
        </Link>
      </Tooltip>

      <Tooltip title="Il mio carrello">
        <Link to="my-cart">
          <IconButton aria-label="favorites">
            <ShoppingCartCheckoutRoundedIcon sx={{ color: "black" }} />
          </IconButton>
        </Link>
      </Tooltip>
      
    </Box>
  );
};

export default AccessBar;
