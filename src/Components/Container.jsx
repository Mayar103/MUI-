import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
import Slide from "@mui/material/Slide";
import CardMedia from "@mui/material/CardMedia";

function Container() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((position) => (position + 1) % 100);
    }, 350);
    return () => clearInterval(intervalId);
  }, []);

  const waveContainerStyle = {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    height: { xs: "5rem", md: "12rem" },
  };

  const waveStyle1 = {
    position: "absolute",
    bottom: "-40px",
    left: `${position}%`,
    width: "100%",
    height: "12rem",
    zIndex: 3,
    transition: "left 1s ease-in-out",
  };

  const waveStyle2 = {
    position: "absolute",
    bottom: "-40px",
    left: `${position - 100}%`,
    width: "100%",
    height: "12rem",
    zIndex: 3,
    transition: "left 1s ease-in-out",
  };

  return (
    <>
      <CssBaseline />
      <Box
        style={{
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop: "100px",
          backgroundImage: `url('../src/assets/Images/Header&Footer/background.jpg')`,
          minWidth: "100%",
          minHeight: "100vh",
        }}
        sx={waveContainerStyle}
      >
        {/* <Box > */}
        <CardMedia
          component="img"
          style={waveStyle1}
          src={"../src/assets/Images/Wave/top_wave.png"}
          alt="wave 1"
        />
        <CardMedia
          component="img"
          style={waveStyle2}
          src={"../src/assets/Images/Wave/top_wave1.png"}
          alt="wave 2"
        />

        <Box
          sx={{
            position: "absolute",
            top: { xs: "160px", sm: "250px" },
            left: { xs: "80px", sm: "200px" },
          }}
        >
          <Slide in={true} direction="down" timeout={2800}>
            <Typography
              sx={{ color: "#629067", fontSize: "35px", fontWeight: "500" }}
              variant="h2"
            >
              Welcome to
            </Typography>
          </Slide>
          <Slide direction="right" in={true} timeout={2800}>
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "40px", sm: "70px" },
                fontWeight: "750",
              }}
              variant="h1"
            >
              Uyoga Classes
            </Typography>
          </Slide>
          <Slide direction="left" in={true} timeout={2800}>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "29px",
                fontWeight: "400",
                width: { xs: "220px", sm: "380px" },
                marginTop: "15px",
                marginBottom: "45px",
                lineHeight: "2.2rem",
              }}
              variant="h3"
            >
              Lets you realize who you are & what you are made of.
            </Typography>
          </Slide>
          <Slide direction="up" in={true} timeout={2800}>
            <Button
              sx={{
                variant: "contained",
                background: "transparent",
                color: "white",
                width: 220,
                height: 58,
                border: "1px solid white",
                fontWeight: "600",
                "&:hover": {
                  background: "white",
                  color: "#629067",
                  border: "1px solid white",
                },
              }}
              endIcon={<EastIcon />}
            >
              Browse Course
            </Button>
          </Slide>
        </Box>
      </Box>
    </>
  );
}

export default Container;
