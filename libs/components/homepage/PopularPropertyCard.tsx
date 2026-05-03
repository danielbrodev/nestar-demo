import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteIcon from "@mui/icons-material/Favorite";

const PopularPropertyCard = () => {
  return (
    <Box className="popular-card-box">
      {/* Rasm */}
      <Box
        className="card-img"
        style={{ backgroundImage: `url("/img/banner/types/apartment.webp")` }}
      >
        {/* status (misol: "For Sale") */}
        <Box className="status">
          <img src="/img/icons/status.svg" alt="status" />
          <span>For Sale</span>
        </Box>

        {/* narx */}
        <Box className="price">$420 000</Box>
      </Box>

      {/* Ma'lumotlar */}
      <Box className="info">
        <Typography className="title">Run Will Buildings</Typography>
        <Typography className="desc">Seoul Gangnam Apartments</Typography>

        {/* Ikonkalar */}
        <Box className="options">
          <Box>
            <img src="/img/icons/bed.svg" alt="bed" />
            <span>3 bed</span>
          </Box>
          <Box>
            <img src="/img/icons/room.svg" alt="room" />
            <span>7 rooms</span>
          </Box>
          <Box>
            <img src="/img/icons/expand.svg" alt="size" />
            <span>250 m²</span>
          </Box>
        </Box>

        {/* Pastki qism */}
        <Box className="bott">
          <Typography>Rent</Typography>
          <Box className="view-like-box">
            <IconButton color="default">
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className="view-cnt">120</Typography>

            <IconButton color="default">
              <FavoriteIcon />
            </IconButton>
            <Typography className="view-cnt">200</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PopularPropertyCard;