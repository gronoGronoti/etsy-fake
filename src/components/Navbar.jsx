import React, { useState } from "react";
import "./NavbarStyle.css";
import { Link, Outlet } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import SearchBar from "./SearchBar/SearchBar";
import AccessBar from "./AccessBar/AccessBar";
import DisplayLogo from "./DisplayLogo";
import { BottomSecNavLinks } from "./consts/NavbarLinks";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import IconButton from '@mui/material/IconButton'

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <>
      <AppBar position="static" className="header-appbar">
        <Container className="head-top-section" maxWidth="xl" sx={{ py: 1.5 }}>
          <DisplayLogo url="/" />
          {/* <MobileMenu /> */}
          <div className="hide-if-mobile">
            <SearchBar
              padding={{
                ml: 2,
                mr: 3,
              }}
            />
          </div>
          <AccessBar />
        </Container>

        <Container className="head-bottom-section" maxWidth="xl">
          <div className="hide-if-mobile">
            <Stack
              direction={"row"}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              {BottomSecNavLinks.map((Entry, i) => (
                <Stack item key={Entry.to} sx={{mx: 0.4}}>
                  <Link className="stack-link" id={i} to={Entry.to}>
                    {Entry.alt}
                  </Link>
                </Stack>
              ))}
            </Stack>
          </div>
          <div className="show-if-mobile">
            <IconButton aria-label="menu">
              <MenuRoundedIcon />
            </IconButton>
            <SearchBar
            margin={{
              ml: 1,
            }}
            />
          </div>
        </Container>
      </AppBar>

      <Outlet />
    </>
  );
};

export default Navbar;
