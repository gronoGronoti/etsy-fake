import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

export default function BasicSelect() {
  const [n, setN] = useState(0);

  const handleNChange = (event) => {
    setN(event.target.value);
  };

  const [color, setColor] = useState("Scegli un colore...");

  const handleColChange = (event) => {
    setColor(event.target.value);
  };

  const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const colori = [
    "rosso",
    "blu",
    "giallo",
    "verde",
    "il colore della pelle di tua madre",
  ];

  return (
    <>
      <Box sx={{ minWidth: 120, mb: 1 }}>
        <Typography variant="caption" color="initial">
          Colore
        </Typography>
        <FormControl fullWidth color="info">
          <Select
            id="demo-simple-select"
            value={color}
            onChange={handleColChange}
          >
            {colori.map((val) => (
              <MenuItem key={`select-n-${val}`} id={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <Typography variant="caption" color="initial">
          Quantità
        </Typography>
        <FormControl fullWidth color="info">
          <Select id="demo-simple-select" value={n} onChange={handleNChange}>
            {numeri.map((val) => (
              <MenuItem key={`select-n-${val}`} id={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
