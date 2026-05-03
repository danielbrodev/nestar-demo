import React from "react";
import { Box, Typography } from "@mui/material";

const TopAgentCard = () => {
  return (
    <Box className="top-agent-card">
      <img src="/img/profile/girl.svg" alt="Agent" />
      <Typography
        component="strong"
        variant="subtitle1"
        className="agent-name"
      >
        John Doe
      </Typography>
      <Typography
        component="span"
        variant="body2"
        className="agent-role"
      >
        Real Estate Agent
      </Typography>
    </Box>
  );
};

export default TopAgentCard;