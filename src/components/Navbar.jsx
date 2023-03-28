import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./NavbarStyle.css";
import DisplayLogo from "./DisplayLogo";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import SearchBar from "./SearchBar/SearchBar";
import AccessBar from "./AccessBar/AccessBar";
import { BottomSecNavLinks } from "./consts/NavbarLinks";

const Navbar = () => {
  return (
    <>
      <AppBar position="static" className="header-appbar">
        <Container className="head-top-section" maxWidth="xl" sx={{ py: 1.5 }}>
          <DisplayLogo url="/" />
          <SearchBar />
          <AccessBar />
        </Container>
        <Container
          className="head-bottom-section"
          maxWidth="xl"
        >
          <Stack direction={"row"} sx={{display: "flex", justifyContent: "space-between"}}>
            {
              BottomSecNavLinks.map((Entry, i) => (
                <Stack item key={Entry.to}>
                  <Link className="stack-link" id={i} to={Entry.to}>
                    {Entry.alt}
                  </Link>
                </Stack>
              ))
            }
          </Stack>
        </Container>
      </AppBar>

      <Outlet />
    </>
  );
};

export default Navbar;
