import React from "react";
import "./App.css";
import Typography from "@mui/material/Typography";

import HeroProductsGrid from "./components/index-components/HeroProductsGrid";
import PopularItems from "./components/index-components/PopularItems";

const App = () => {
  return (
    <main>
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
      
      <PopularItems />
    </main>
  );
};

export default App;
