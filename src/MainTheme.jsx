import React from "react";

import { createTheme, responsiveFontSizes } from "@mui/material";

let MainTheme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          padding: "0.7rem",
          fontSize: "0.9em",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 85%)"
        }
      }
    },
  },
  palette: {
    primary: { main: "#ffffff" },
    secondary: { main: "rgb(175, 175, 175)" },
    dark: { main: "#242424" },
  },
  typography: {
    fontFamily: [
      'Nunito',
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
    h1: {
      fontFamily: 'Roboto Slab',
    },
    h2: {
      fontFamily: 'Roboto Slab',
    },
    h3: {
      fontFamily: 'Roboto Slab',
    },
    h4: {
      fontFamily: 'Roboto Slab',
    },
    h5: {
      fontFamily: 'Roboto Slab',
    },
    h6: {
      fontFamily: 'Roboto Slab',
    },
  },
});

// automatizza i testi responsive
MainTheme = responsiveFontSizes(MainTheme);

export default MainTheme;
