import React from "react";
import "./App.css";
import Typography from "@mui/material/Typography";

import HeroProductsGrid from "./components/index-components/HeroProductsGrid";

const App = () => {
  return (
    <>
      <div>
        <div className="beige-banner"></div>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", pt: 3, fontWeight: 300, mb: 4 }}
        >
          Scopri articoli da amare. Sostieni negozi indipendenti. Solo su
          Stepetpepessy.
        </Typography>
        <HeroProductsGrid />
      </div>
    </>
  );
};

export default App;
