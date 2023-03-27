import React from "react";

import AppBar from "@mui/material/AppBar";

import "./NavbarStyle.css";
import Container from '@mui/material/Container'
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <AppBar className="header-appbar">
      <Container maxWidth="lg">
        e
      </Container>
      </AppBar>

      <Outlet />
    </>
  );
};

export default Navbar;
