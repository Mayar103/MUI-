import React from "react";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <Box>
      <Box
        sx={{
          background: "#212121",
          height: { xs: "900px", sm: "680px", md: "500px", lg: "340px" },
          width: "100%",
          display: "flex",
          flexWrap: { xs: "wrap", lg: "nowrap" },
          justifyContent: { xs: "center", sm: "space-evenly" },
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "space-evenly",
          }}
        >
          <CardMedia
            component="img"
            src="Images/Header&Footer/footer.png"
            sx={{ width: "150px" }}
          ></CardMedia>

          <Typography
            variant="p"
            sx={{
              color: "gray",
              width: { xs: "250px", md: "300px" },
              fontSize: "14px",
              margin: "30px 0",
              lineHeight: "1.6rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet
          </Typography>
          <Typography variant="p" color="gray">
            © 2015 — 2023
          </Typography>
        </Box>

        <Box
          sx={{
            color: "gray",
            width: "400px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "550",
              color: "#639168",
              fontSize: "24px",
              marginBottom: "10px",
            }}
          >
            Quick Links
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: "18%",
            }}
          >
            <Box>
              <List>
                <ListItem
                  disablePadding
                  sx={{
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  <ListItemButton component="a">
                    <ListItemText primary="Pricing" sx={{ margin: "-2px 0" }} />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  <ListItemButton component="a">
                    <ListItemText primary="Courses" sx={{ margin: "-2px 0" }} />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  <ListItemButton component="a">
                    <ListItemText primary="FAQ" sx={{ margin: "-2px 0" }} />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  <ListItemButton component="a">
                    <ListItemText
                      primary="Terms of Service"
                      sx={{ margin: "-2px 0" }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
            <Box>
              <List>
                <ListItem
                  disablePadding
                  sx={{
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  <ListItemButton component="a">
                    <ListItemText
                      primary="Become Instructor"
                      sx={{ margin: "-2px 0" }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  <ListItemButton component="a">
                    <ListItemText
                      primary="Contact Us"
                      sx={{ margin: "-2px 0" }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  <ListItemButton component="a">
                    <ListItemText
                      primary="Privacy Policy"
                      sx={{ margin: "-2px 0" }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  <ListItemButton component="a">
                    <ListItemText
                      primary="Support Center"
                      sx={{ margin: "-2px 0" }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>

        <Box display="flex" flexDirection="column">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "550",
              color: "#639168",
              fontSize: "24px",
              marginLeft: { xs: "20px" },
            }}
          >
            Contact Info
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "gray",
              fontSize: "16px",
              width: "270px",
              lineHeight: "2rem",
              margin: "28px 0",
            }}
          >
            7th Yoga Street • Santa Monica, CA Phone: (0)123-456-7890
          </Typography>
          <Box display="flex" gap="3%" color="#4b4d4e">
            <FacebookRoundedIcon
              sx={{
                fontSize: "45px",
                cursor: "pointer",
                "&:hover": {
                  color: "#1a0dab",
                },
              }}
            />
            <TwitterIcon
              sx={{
                fontSize: "45px",
                cursor: "pointer",
                "&:hover": {
                  color: "rgba(6,147,227,1)",
                },
              }}
            />
            <LinkedInIcon
              sx={{
                fontSize: "45px",
                cursor: "pointer",
                "&:hover": {
                  color: "rgb(65,88,208)",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: "#191919",
          height: "70px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "gray",
          fontSize: { xs: "12px", md: "14px" },
        }}
      >
        UDesign WordPress © 2023. All Rights Reserved
      </Box>
    </Box>
  );
}

export default Footer;
