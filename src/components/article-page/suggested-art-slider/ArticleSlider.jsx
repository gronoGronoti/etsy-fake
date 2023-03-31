import React from "react";

import "./UlteriorStyles.css"

export const sliderSettings = {
  className: "center",
  centerPadding: "60px",
  infinite: false,
  arrows: false,
  dots: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1470,
      settings: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 970,
      settings: {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 750,
      settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 530,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
