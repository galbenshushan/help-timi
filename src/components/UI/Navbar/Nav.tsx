import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  ButtonProps,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link, useLocation, LinkProps } from "react-router-dom";
import { navItems } from "../../../consts/general";
import { NavItem } from "../../../types/general";
import NavLogo from "./NavLogo";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "transparent",
  boxShadow: "none",
  padding: "0",
});

const StyledBox = styled(Box)({
  paddingTop: "10px",
  width: "100%",
  height: "150px",
  backgroundColor: "#f58f40",
  position: "relative",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  borderBottomLeftRadius: "50%",
  borderBottomRightRadius: "50%",
  boxShadow: "0px 10px 100px rgba(0, 0, 0, 0.3)",
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  alignItems: "center",
  padding: "0 200px",
  width: "100%",
});

const StyledTypography = styled(Typography)({
  fontWeight: "bold",
  color: "#FFFFFF",
  flexGrow: 1,
});

const StyledButton = styled(Button)<
  ButtonProps & { active: boolean } & LinkProps
>(({ active }) => ({
  color: active ? "#FFFFFF" : "#f58f40",
  fontWeight: "bold",
  textTransform: "none",
  marginRight: "16px",
  fontSize: "21px",
  padding: "12px 50px",
  borderRadius: "25px",
  backgroundColor: active ? "#f46d24" : "#dc4912",
  "&:hover": {
    backgroundColor: "#f46d24",
  },
}));

const Nav = () => {
  const location = useLocation();
  return (
    <StyledAppBar position="static">
      <StyledBox>
        <StyledToolbar>
          <NavLogo />
          <StyledTypography variant="h4">Timi's Jelly Beans</StyledTypography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              justifyContent: "space-around",
            }}
          >
            {navItems.map((item: NavItem) => (
              <StyledButton
                key={item.to}
                component={Link}
                to={item.to}
                active={location.pathname === item.to}
              >
                {item.label}
              </StyledButton>
            ))}
          </Box>
        </StyledToolbar>
      </StyledBox>
    </StyledAppBar>
  );
};

export default Nav;
