import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./NavbarStyle.css";
import DisplayLogo from "./DisplayLogo";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SearchBar from "./SearchBar/SearchBar";
import AccessBar from "./AccessBar/AccessBar";

const Navbar = () => {
  return (
    <>
      <AppBar className="header-appbar">
        <Container className="head-top-section" maxWidth="xl" sx={{ py: 1.5 }}>

          <DisplayLogo url="/" />
          <SearchBar />
          <AccessBar />

        </Container>
      </AppBar>

      <Outlet />
    </>
  );
};

export default Navbar;
