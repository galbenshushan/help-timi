import React from "react";
import {
  Box,
} from "@mui/material";


const NavLogo = () => {
  return (
    <Box
      component="img"
      src="/assets/timi.webp"
      alt="Timi"
      sx={{
        height: 80,
        width: 80,
        borderRadius: "50%",
        marginRight: "16px",
      }}
    />
  );
};

export default NavLogo;
