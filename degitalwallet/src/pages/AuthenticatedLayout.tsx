import { Outlet, Link, useNavigate } from "react-router-dom";
import { Grid, Button } from "@mui/material";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Login from "./Login";



import React from "react";
import { Home, HomeMini } from "@mui/icons-material";

export default function ButtonAppBar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setLoggedIn(true);
    console.log(
      "The login component has fired the success event. You cant now allow the user to view the site"
    );
    navigate("/");
  };

  return (
    loggedIn ? (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="absolute">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Home />
            </IconButton>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/blogs">
              Blogs
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
            
            <Button color="inherit" component={Link} to="/transactions">
              Transactions
            </Button>
            
          </Toolbar>
        </AppBar>
        <Grid item xs={12}>
          <Outlet />
        </Grid>
      </Box>
    ) : (
      <Login onLoginSuccess={handleLoginSuccess} />
    )
  );
}
