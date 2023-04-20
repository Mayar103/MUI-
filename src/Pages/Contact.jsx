import React, { useState, useLayoutEffect, useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import EastIcon from "@mui/icons-material/East";
import Link from "@mui/material/Link";
import { useSpring, animated } from "react-spring";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useLayoutEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        const height = window.innerHeight;

        if (top < height && top >= 0) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const animatedStyle = useSpring({
    // opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate3d(0,0,0)" : "translate3d(0,80px,0)",
  });

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

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
          src="../src/assets/Images/Wave/top_wave.png"
          alt="Image Title"
          sx={{
            position: "absolute",
            bottom: "0",
            height: "12rem",
            width: "100%",
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
          Contact Us
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
          <Link sx={{ color: "white", textDecoration: "none" }}>
            Contact Us
          </Link>
        </Breadcrumbs>
      </Box>
      <animated.div ref={ref} style={animatedStyle}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            justifyContent: "center",
            gap: "3%",
            marginTop: "50px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography variant="h3" fontWeight="600" color="#639168">
              10% Off
            </Typography>
            <Typography fontSize="30px" marginBottom="20px">
              Your first Season
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: "2%",
                marginBottom: { xs: "20px", sm: "0px" },
              }}
            >
              <TextField
                placeholder="Your Name"
                sx={{
                  width: {
                    xs: "270px",
                    sm: "280px",
                    lg: "375px",
                  },
                  marginBottom: "20px",
                }}
              />
              <TextField
                placeholder="Your Email Address here"
                sx={{
                  width: {
                    xs: "270px",
                    sm: "280px",
                    lg: "375px",
                  },
                }}
              />
            </Box>
            <Box marginBottom="20px">
              <TextField
                placeholder="Location"
                sx={{ width: { xs: "270px", sm: "560px", lg: "750px" } }}
              />
            </Box>
            <Box marginBottom="20px">
              <TextField
                placeholder="Class"
                sx={{ width: { xs: "270px", sm: "560px", lg: "750px" } }}
              />
            </Box>
            <Box>
              <TextField
                placeholder="Your Message"
                sx={{
                  height: { xs: "20px", sm: "80px" },
                  width: { xs: "270px", sm: "560px", lg: "750px" },
                }}
              />
            </Box>
            <Box>
              <Button
                sx={{
                  variant: "contained",
                  background: "#639168",
                  size: "small",
                  color: "white",
                  width: 140,
                  height: 50,
                  margin: { xs: "60px 0", sm: "30px 0" },
                  "&:hover": {
                    background: "#80a884",
                    color: "white",
                  },
                }}
              >
                Book Now
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              marginBottom: "80px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "30px",
                margin: { xs: "50px 0", md: "50px 0 130px" },
                position: "relative",
              }}
            >
              <CardMedia
                component="img"
                src="../src/assets/Images/Card/yoga1.jpg"
                alt="Image Title"
                sx={{
                  width: { xs: "260px", sm: "320px", md: "300px", lg: "100%" },
                  marginTop: { md: "40px", lg: "0px" },
                }}
              />
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: { md: "280px", lg: "320px" },
                  background: "white",
                  borderRadius: "8px",
                  width: { md: "250px", lg: "330px" },
                  height: { md: "120px", lg: "140px" },
                  cursor: "pointer",
                  boxShadow: "0px 10px 15px 0px lightgray",
                  transition: "transform 0.5s ease ",
                  "&:hover": {
                    transform: "translateY(-30px)",
                  },
                }}
              >
                <Typography color="gray" fontSize="18px">
                  With Mildred Reed
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "550",
                    fontSize: { md: "16px", lg: "20px" },
                    color: "#639168",
                  }}
                >
                  Yoga for beginners course
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { md: "18px", lg: "22px" },
                  }}
                >
                  $39
                </Typography>
              </Box>
            </Box>
            <Box display="flex" justifyContent="center">
              <Button
                sx={{
                  variant: "contained",
                  background: "#639168",
                  size: "large",
                  color: "white",
                  width: { xs: 220, md: 240 },
                  height: 55,
                  transition: "transform 2s",
                  "&:hover": {
                    background: "#80a884",
                    transform: "rotateY(360deg)",
                  },
                }}
                endIcon={<EastIcon />}
              >
                browse All Classes
              </Button>
            </Box>
          </Box>
        </Box>
      </animated.div>
    </Box>
  );
}

export default Contact;
