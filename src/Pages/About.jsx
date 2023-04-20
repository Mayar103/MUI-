import React from "react";
import { Box, CardMedia, Typography, Breadcrumbs } from "@mui/material";
import Contain from "../Components/Contain";
import Service from "../Components/Service";
import Testimonials from "../Components/Testimonials";
import Link from "@mui/material/Link";

function About() {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          background: "#80a884",
          width: "100%",
          height: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <CardMedia
          component="img"
          src="Images/Wave/top_wave.png"
          alt="Image Title"
          sx={{
            position: "absolute",
            bottom: "0",
            height: "12rem",
            width: "100%",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        />

        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          About Us
        </Typography>
        <Breadcrumbs
          maxItems={2}
          aria-label="breadcrumb"
          sx={{ fontSize: "14px" }}
        >
          <Link
            to="/"
            sx={{
              color: "#323334",
              cursor: "pointer",
              "&:hover": { color: "white", textDecoration: "none" },
            }}
          >
            Home
          </Link>
          <Link sx={{ color: "white", textDecoration: "none" }}>About Us</Link>
        </Breadcrumbs>
      </Box>
      <Contain />
      <Service />
      <Testimonials />
    </Box>
  );
}

export default About;
