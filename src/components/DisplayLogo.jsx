import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.png";

const DisplayLogo = (props) => {
  const [hover, setHover] = useState(false);

  const toggleOpacity = () => {
    setHover((prev) => !prev);
  };
  const onClickBtn = {
    opacity: hover && "70%",
    transition: "opacity .15s",
  };

  return props.url ? (
    <Link
      to={props.url}
      onMouseOver={toggleOpacity}
      onMouseOut={toggleOpacity}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: props.width ? props.width : "80px",
        padding: props.padd ? props.padd : 0,
        margin: props.marg ? props.marg : 0,
        ...onClickBtn
      }}
    >
      <img
        src={Logo}
        draggable={false}
        style={{ width: "100%", objectFit: "contain" }}
      />
    </Link>
  ) : (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: props.width ? props.width : "80px",
        padding: props.padd ? props.padd : 0,
        margin: props.marg ? props.marg : 0,
      }}
    >
      <img
        src={Logo}
        draggable={false}
        style={{
          width: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  );
};

export default DisplayLogo;
