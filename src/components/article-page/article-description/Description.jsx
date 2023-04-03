import React, { useState } from "react";

import ArrowDropDownCircleOutlined from "@mui/icons-material/ArrowDropDownCircleOutlined";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
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
      <CardActionArea sx={{ py: 1.2, px: 2, borderRadius: "20px" }}>
        <div className="always-show-this" onClick={toggleExpand}>
          <Typography sx={{ fontWeight: 700, fontSize: "18px" }}>
            Descrizione
          </Typography>

          <Tooltip title={expanded ? "Chiudi" : "Espandi"}>
            <ArrowDropDownCircleOutlined
              sx={{
                transform: expanded && "rotate(180deg)",
                transition: "transform .15s",
              }}
            />
          </Tooltip>
        </div>
      </CardActionArea>

      <Box>
        <Collapse in={expanded}>
          <Card elevation={0} sx={{ mt: 1 }}>
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
