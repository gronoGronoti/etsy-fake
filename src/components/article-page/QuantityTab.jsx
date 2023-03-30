import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

export default function BasicSelect() {
  const [n, setN] = useState(0);

  const handleChange = (event) => {
    setN(event.target.value);
  };

  const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Box sx={{ minWidth: 120 }}>
      <Typography variant="caption" color="initial">
        Quantità
      </Typography>
      <FormControl fullWidth>
        <Select id="demo-simple-select" value={n} onChange={handleChange}>
          {numeri.map((val) => (
            <MenuItem key={`select-n-${val}`} id={val}>{val}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
