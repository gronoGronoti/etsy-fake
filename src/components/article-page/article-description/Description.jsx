import React, { useState } from "react";

import ArrowDropDownCircleOutlined from "@mui/icons-material/ArrowDropDownCircleOutlined";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";

import "./DescriptionStyle.css";

const Description = (props) => {
  const [expanded, isExpanded] = useState(false);
  const toggleExpand = () => {
    isExpanded((prev) => !prev);
  };

  return (
    <>
      <div className="always-show-this">
        <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
          Descrizione
        </Typography>

        <Tooltip title={expanded ? "Chiudi" : "Espandi"}>
          <IconButton
            aria-label="expand"
            onClick={toggleExpand}
            sx={{
              transform: expanded && "rotate(180deg)",
              transition: "transform .15s",
            }}
          >
            <ArrowDropDownCircleOutlined />
          </IconButton>
        </Tooltip>
      </div>

      <Box>
        <Collapse in={expanded}>
          <Card
            elevation={0}
            sx={{ mt: 1, display: expanded ? "block" : "none" }}
          >
            <Typography variant="body1" color="initial">
              {props.desc}
            </Typography>
            <Divider variant="middle" flexItem sx={{ my: 2 }} />
            <Typography variant="body1" color="initial">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore dolore odio qui. Mollitia totam nisi enim ad deserunt
              reiciendis aliquam minima inventore! Doloribus rem ipsam tempora
              iste minima natus eligendi.
            </Typography>
          </Card>
        </Collapse>
      </Box>
    </>
  );
};

export default Description;
