import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardMedia from "@mui/material/CardMedia";

const drawerWidth = 280;

function DrawerAppBar(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "left",
        color: "white",
        background: "#212121",
        height: "100%",
      }}
    >
      <Typography variant="h6" sx={{ my: 3, marginLeft: 4 }}>
        UYoga
      </Typography>
      <Divider color="#37474f" width="220px" />
      <List>
        <ListItem
          sx={{
            listStyle: "none",
            cursor: "pointer",
            marginLeft: 3,
          }}
        >
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "450",
              fontSize: "16px",
              "&:hover": {
                color: "#639168",
              },
            }}
          >
            Home
          </Link>
        </ListItem>
        <ListItem
          sx={{
            listStyle: "none",
            cursor: "pointer",
            my: 1,
            marginLeft: 3,
          }}
        >
          <Link
            to="/classes"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "450",
              fontSize: "16px",
              "&:hover": {
                color: "#639168",
              },
            }}
          >
            Classes
          </Link>
        </ListItem>
        <ListItem
          sx={{
            listStyle: "none",
            cursor: "pointer",
            my: 1,
            marginLeft: 3,
          }}
        >
          <Link
            to="/about"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "450",
              fontSize: "16px",
              "&:hover": {
                color: "#639168",
              },
            }}
          >
            About Us
          </Link>
        </ListItem>
        <ListItem
          sx={{
            listStyle: "none",
            cursor: "pointer",
            my: 1,
            marginLeft: 3,
          }}
        >
          <Link
            to="/schedule"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "450",
              fontSize: "16px",
              "&:hover": {
                color: "#639168",
              },
            }}
          >
            Schedule
          </Link>
        </ListItem>
        <ListItem
          sx={{
            listStyle: "none",
            cursor: "pointer",
            my: 1,
            marginLeft: 3,
          }}
        >
          <Link
            to="/contact"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "450",
              fontSize: "16px",
              "&:hover": {
                color: "#639168",
              },
            }}
          >
            Contact Us
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          display: { xs: "flex" },
          justifyContent: { xs: "space-between", lg: "space-around" },
          gap: { lg: "10%" },
          color: "#323334",
          background: "white",
          height: "105px",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box>
          <Toolbar
            sx={{
              display: { xs: "flex" },
              justifyContent: { xs: "center" },
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "block" } }}
            >
              <MenuIcon
                sx={{
                  flexGrow: 1,
                  display: { sm: "block", lg: "none" },
                }}
              />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "block", sm: "block" },
              }}
            >
              <CardMedia
                component="img"
                src="../src/assets/Images/Header&Footer/logo.png"
                sx={{ width: "150px" }}
              />
            </Typography>
          </Toolbar>
        </Box>
        <Box>
          <Toolbar>
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "none",
                  lg: "flex",
                },
                mr: 1,
              }}
            >
              <ListItem
                sx={{
                  listStyle: "none",
                  cursor: "pointer",
                }}
              >
                <Link
                  to="/"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontWeight: "450",
                    fontSize: "16px",
                    "&:hover": {
                      color: "#639168",
                    },
                  }}
                >
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="/classes"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontWeight: "450",
                    fontSize: "16px",
                    "&:hover": {
                      color: "#639168",
                    },
                  }}
                >
                  Classes
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="/about"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontWeight: "450",
                    fontSize: "16px",
                    "&:hover": {
                      color: "#639168",
                    },
                  }}
                >
                  About
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="/schedule"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontWeight: "450",
                    fontSize: "16px",
                    "&:hover": {
                      color: "#639168",
                    },
                  }}
                >
                  Schedule
                </Link>
              </ListItem>
              <ListItem onMouseEnter={handleOpen} onMouseLeave={handleClose}>
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontWeight: "450",
                    fontSize: "16px",
                  }}
                >
                  News
                </Link>
                <ExpandMoreIcon />
                <Menu
                  sx={{ marginLeft: "50px" }}
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <MenuItem sx={{ width: "180px" }}>Classic</MenuItem>
                  <MenuItem>Grid</MenuItem>
                  <MenuItem>Masonry</MenuItem>
                  <MenuItem>Timeline</MenuItem>
                </Menu>
              </ListItem>
              <ListItem>
                <Link
                  to="/contact"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontWeight: "450",
                    fontSize: "16px",
                    "&:hover": {
                      color: "#639168",
                    },
                  }}
                >
                  Contact
                </Link>
              </ListItem>
              <ListItem>
                <SearchIcon
                  sx={{
                    color: "#323334",
                    fontSize: 25,
                    // marginRight: "30px",
                    // marginLeft: "15px",
                    cursor: "pointer",
                  }}
                />
              </ListItem>
            </Box>
            <Button
              variant="outlined"
              size="large"
              sx={{
                border: "2px solid #639168",
                color: "#639168",
                "&:hover": {
                  background: "#639168",
                  color: "white",
                  border: "2px solid #639168",
                },
                display: { xs: "none", sm: "block", md: "block" },
              }}
            >
              Today Class
            </Button>
          </Toolbar>
        </Box>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
