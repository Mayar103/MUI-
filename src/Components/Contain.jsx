import React, { useRef, useLayoutEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DoneIcon from "@mui/icons-material/Done";
import CardMedia from "@mui/material/CardMedia";
import { useSpring, animated } from "react-spring";

function Contain() {
  const [isVisible, setVisible] = useState(false);
  const ref = useRef(null);

  useLayoutEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        const height = window.innerHeight;

        if (top < height && top >= 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const animatedSlide = useSpring({
    transform: isVisible ? "translateX(0)" : "translateY(-80px)",
  });
  const animatedSlider = useSpring({
    transform: isVisible ? "translateX(0)" : "translateY(80px)",
  });

  return (
    <Box sx={{ marginTop: "10px" }}>
      <Box
        sx={{
          display: { xs: "flex" },
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: { xs: "center", md: "space-evenly" },
          alignItems: { xs: "center", md: "center" },
          gap: { md: "10%", lg: "0px" },
        }}
      >
        <animated.div ref={ref} style={animatedSlide}>
          {/* <Slide direction="right" in={true} timeout={1600}> */}
          <Box
            sx={{
              position: "relative",
              marginBottom: { xs: "100px" },
            }}
          >
            <Box
              sx={{ display: { xs: "none", sm: "block" }, marginTop: "50px" }}
            >
              <CardMedia
                component="img"
                src="../src/assets/Images/Serve/yoga4.jpg"
                sx={{ borderRadius: "12px" }}
              />
            </Box>
            <Box
              sx={{
                display: {
                  xs: "flex",
                  flexDirection: "column",
                  sm: "none",
                  marginTop: "100px",
                },
              }}
            >
              <CardMedia
                component="img"
                src="../src/assets/Images/Serve/yoga4.jpg"
                sx={{ width: { xs: "260px", md: "100%" } }}
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "370px",
                left: "210px",
                width: { sm: "320px" },
                display: { xs: "none", sm: "block" },
              }}
            >
              <CardMedia
                component="img"
                src="../src/assets/Images/Serve/yoga5.jpg"
                sx={{ borderRadius: "12px" }}
              ></CardMedia>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "370px",
                left: "210px",
                display: { xs: "block", sm: "none" },
              }}
            >
              <CardMedia
                component="img"
                src="../src/assets/Images/Serve/yoga5.jpg"
                sx={{
                  width: "220px",
                  position: "absolute",
                  top: "-110px",
                  display: { xs: "none", md: "block" },
                }}
              />
            </Box>
          </Box>
          {/* </Slide> */}
        </animated.div>
        <animated.div ref={ref} style={animatedSlider}>
          {/* <Slide direction="left" in={true} timeout={2800}> */}
          <Box
            sx={{
              margin: "95px 0 130px",
              width: { xs: "200px", sm: "450px" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: { xs: "400", md: "500" },
                fontSize: { xs: "20px", md: "45px" },
                lineHeight: "2.8rem",
                width: { xs: "200px", md: "400px" },
                marginBottom: "15px",
              }}
            >
              We have 20 years of experience
            </Typography>

            <Typography
              sx={{ width: { xs: "200px", sm: "450px" } }}
              // width="450px"
              color="gray"
              marginBottom="30px"
              fontSize="18px"
            >
              We're all inspiring people to be happier and healthier through
              accessible approach to yoga.
            </Typography>
            <Box sx={{ display: "flex", gap: "4%" }}>
              <DoneIcon sx={{ color: "#639168", fontSize: "28px" }} />
              <Typography fontSize="18px">Many Styles.</Typography>
            </Box>
            <Typography
              sx={{
                color: "gray",
                margin: "1% 0 5% 10%",
                lineHeight: "2rem",
                fontSize: "17px",
              }}
            >
              20+ Styles of Yoga Workout and Mediatation that suit everyone.
            </Typography>
            <Box sx={{ display: "flex", gap: "4%" }}>
              <DoneIcon sx={{ color: "#639168", fontSize: "28px" }} />
              <Typography fontSize="18px">Pro Instructors.</Typography>
            </Box>
            <Typography
              sx={{
                color: "gray",
                margin: "1% 0 8% 10%",
                lineHeight: "2rem",
                fontSize: "17px",
              }}
            >
              Professional Yoga instructors from around the world.
            </Typography>
            <Box sx={{ display: "flex", gap: "4%" }}>
              <DoneIcon sx={{ color: "#639168", fontSize: "28px" }} />
              <Typography fontSize="18px">Quality Content.</Typography>
            </Box>
            <Typography
              sx={{
                color: "gray",
                margin: "1% 0 8% 10%",
                lineHeight: "2rem",
                fontSize: "17px",
              }}
            >
              All Our Classes are well planned by Professional Yoga Instructors.
            </Typography>
          </Box>
          {/* </Slide> */}
        </animated.div>
      </Box>
    </Box>
  );
}

export default Contain;
