import React from "react";

import { createTheme, responsiveFontSizes } from "@mui/material";

let MainTheme = createTheme({
  palette: {
    primary: { main: "#ffffff" },
    secondary: { main: "#FDEBD2" },
  },
  typography: {
    fontFamily: [
      'Open Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

// automatizza i testi responsive
MainTheme = responsiveFontSizes(MainTheme);

export default MainTheme;
