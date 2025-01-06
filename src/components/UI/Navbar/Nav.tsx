import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

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
            flexGrow: 1,
          }}
        >
          Timi's Jelly Beans
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            component={Link}
            to="/"
            sx={{ color: "#FFFFFF", textTransform: "none", marginRight: "16px" }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/chart"
            sx={{ color: "#FFFFFF", textTransform: "none", marginRight: "16px" }}
          >
            Statistics
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
