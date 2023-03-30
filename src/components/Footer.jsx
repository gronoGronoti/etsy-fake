import React from "react";
import { Link } from "react-router-dom";

import "./FooterStyle.css";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import Tooltip from "@mui/material/Tooltip";

import Path1 from "../assets/footer/footerpath1.svg";
import Path2 from "../assets/footer/footerpath2.svg";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import MedicationRoundedIcon from "@mui/icons-material/MedicationRounded";

import { FooterLinks, Socials } from "./consts/FooterLinks";


const FooterSocialSection = () => (
  <section>
    <Button
      variant="outlined"
      color="primary"
      startIcon={<ArrowForwardRoundedIcon />}
      sx={{ borderRadius: 5, textTransform: "none" }}
    >
      <Link
        to="https://instagram.com"
        target={"_blank"}
        style={{ textDecoration: "none" }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            color: "#f0f0f0",
            "&:hover": { color: "white" },
          }}
        >
          Vattene a fanculo
        </Typography>
      </Link>
    </Button>

    <div className="socials-flex">
      {
        Socials.map((entry, i) => (
          <Link to={entry.to} target={"_blank"} key={entry.to} id={i}>
            <IconButton aria-label={entry.alt} sx={{color: "white"}}>
              <entry.icon />
            </IconButton>
          </Link>
        ))
      }
    </div>
  </section>
);

const Footer = () => {
  const footerStyle = {
    p: 4,
    mt: "auto",
  };

  return (
    <footer className="footer-box">
      <img src={Path1} draggable={false} className="weird-paper-svg" />
      <Box
        component="footer"
        sx={{
          ...footerStyle,
          backgroundColor: "#d7e6f5",
        }}
      >
        <Container maxWidth="lg" className="top-footer-section">
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Nunito",
              fontWeight: 600,
              mb: 1,
              textAlign: "center",
            }}
          >
            Sì! Inviami offerte esclusive, idee regalo uniche e suggerimenti
            personalizzati per fare acquisti e vendere su Sbrontsy.
          </Typography>

          <Container className="send-newsletter-box" maxWidth="sm">
            <Input
              className="send-newsletter-input"
              placeholder="Inserisci la tua e-mail"
              type="email"
            />
            <Tooltip title="Iscriviti">
              <IconButton
                className="send-newsletter-btn"
                aria-label="send-newsletter-mail"
              >
                <SendRoundedIcon />
              </IconButton>
            </Tooltip>
          </Container>
        </Container>
      </Box>

      <Box
        component="footer"
        sx={{
          ...footerStyle,
          p: 1.5,
          backgroundColor: "#4d6bc6",
          color: "white",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MedicationRoundedIcon />
          <Typography
            variant="h6"
            sx={{
              ml: 2,
              fontFamily: "Nunito",
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            Noi da spatapomtsy ci droghiamo.
          </Typography>
        </Container>
      </Box>

      <Box
        component="footer"
        sx={{
          ...footerStyle,
          p: 3,
          backgroundColor: "#2f466c",
          color: "white",
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="top"
          >
            {FooterLinks.map((entry, i) => (
              <Grid
                item
                key={entry.alt}
                xs={12}
                sm={4}
                md={2}
                id={i}
                sx={{ mx: 2 }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 600, mb: 0.5, mt: 2 }}
                >
                  {entry.alt}
                </Typography>
                {entry.children.map((item, j) => (
                  <Grid item key={item.to} id={j} sx={{ py: 0.3 }}>
                    <Link to={item.to} style={{ textDecoration: "none" }}>
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 300,
                          color: "#f0f0f0",
                          "&:hover": { color: "white" },
                        }}
                      >
                        {item.alt}
                      </Typography>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box
        component="footer"
        sx={{
          ...footerStyle,
          p: 2,
          backgroundColor: "#232347",
          color: "white",
          display: "flex",
          justifyContent: "end"
        }}
      >
        <FooterSocialSection />
      </Box>
    </footer>
  );
};

export default Footer;