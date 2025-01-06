import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Nav = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#FFCC80",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "10px 20px",
        }}
      >
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
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "#FFFFFF",
            fontFamily: "'Comic Sans MS', cursive",
          }}
        >
          Timi's Jelly Beans
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
