import React from "react";
import "./App.css";
import Typography from "@mui/material/Typography";

const App = () => {
  return (
    <>
      <div className="beige-banner">
        <Typography variant="h4" sx={{ textAlign: "center", pt: 3, fontWeight: 300 }}>
          Scopri articoli da amare. Sostieni negozi indipendenti. Solo su
          Stepetpepessy.
        </Typography>
      </div>
    </>
  );
};

export default App;
