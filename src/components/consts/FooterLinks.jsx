import React from "react";

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const FooterLinks = [
  {
    alt: "Acquista",
    children: [
      {
        to: "gift-cards",
        alt: "Buono regalo",
      },
      {
        to: "categories",
        alt: "Mappa del sito",
      },
      {
        to: "blog",
        alt: "Blog di Etsy",
      },
      {
        to: "uk",
        alt: "Esby United Kingdom",
      },
      {
        to: "deu",
        alt: "Bresby Germany",
      },
      {
        to: "can",
        alt: "Eschy Canada",
      },
    ],
  },
  {
    alt: "Vendi",
    children: [
      {
        to: "sell-on-etsy",
        alt: "Vendere su sbresby",
      },
      {
        to: "team",
        alt: "Team",
      },
      {
        to: "forum",
        alt: "Forum",
      },
      {
        to: "affiliates-and-creators",
        alt: "Affiliati e Creator Co",
      },
    ],
  },
  {
    alt: "Informazioni",
    children: [
      {
        to: "about-us",
        alt: "Sbusby Inc.",
      },
      {
        to: "selling-conditions",
        alt: "Condizioni di vendita",
      },
      {
        to: "investors",
        alt: "Investitori",
      },
      {
        to: "work-with-us",
        alt: "Lavora con noi",
      },
      {
        to: "press",
        alt: "Stampa",
      },
      {
        to: "impact",
        alt: "Impatto",
      },
      {
        to: "imprint",
        alt: "Imprint",
      },
    ],
  },
  {
    alt: "Guida",
    children: [
      {
        to: "assistance",
        alt: "Centro assistenza",
      },
      {
        to: "privacy-settings",
        alt: "Impostazioni della privacy",
      },
    ],
  },
];

export const Socials = [
    {
        to: "https://instagram.com",
        icon: InstagramIcon,
    },
    {
        to: "https://facebook.com",
        icon: FacebookIcon,
    },
    {
        to: "https://pinterest.com",
        icon: PinterestIcon,
    },
    {
        to: "https://twitter.com",
        icon: TwitterIcon,
    },
    {
        to: "https://youtube.com",
        icon: YouTubeIcon,
    },
]