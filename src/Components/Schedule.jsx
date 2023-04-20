import React, { useRef, useLayoutEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EastIcon from "@mui/icons-material/East";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";
import Slide from "@mui/material/Slide";
import { useSpring, animated } from "react-spring";
import { CardMedia } from "@mui/material";

function Schedule() {
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

  const animatedStyle = useSpring({
    transform: isVisible ? "translate3d(0,0,0)" : "translate3d(0,80px,0)",
  });

  const animatedSlide = useSpring({
    transform: isVisible ? "translateY(0)" : "translateY(-80px)",
  });
  const animatedSlider = useSpring({
    transform: isVisible ? "translateY(0)" : "translateY(80px)",
  });

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <animated.div ref={ref} style={animatedStyle}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <HourglassBottomOutlinedIcon
            sx={{
              color: "#639168",
              fontSize: "60px",
              marginTop: "60px",
            }}
          />
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "25px", md: "800" },
              fontWeight: "550",
              margin: "10px 0 5px",
            }}
          >
            Yoga Schedule
          </Typography>
          <Typography
            variant="caption"
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              marginBottom: "50px",
              textAlign: "center",
            }}
          >
            Scheduling is one of the main points to succeed
          </Typography>
        </Box>
      </animated.div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: "40px",
        }}
      >
        <animated.div ref={ref} style={animatedSlide}>
          {/* <Slide direction="right" in={true} timeout={2800}> */}
          <Box
            sx={{
              border: "1px solid lightgray",
              width: { xs: "280px", sm: "380px", md: "430px" },
              height: "320px",
            }}
          >
            <Box
              sx={{
                margin: "35px 0 0 35px",
              }}
            >
              <Typography sx={{ color: "gray" }}>03 - 31 DECEMBER</Typography>
              <Typography
                sx={{
                  color: "#abb8c3",
                  fontSize: "22px",
                  marginBottom: "30px",
                }}
              >
                Saturday
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  marginBottom: "30px",
                  gap: "5%",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="img"
                  src="../src/assets/Images/Schedule/grid.jpg"
                  style={{ width: "90px", display: "flex" }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "500",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                >
                  Aenean sollicitudin
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "5%" }}>
                <ShareOutlinedIcon
                  sx={{
                    background: "#639168",
                    fontSize: "45px",
                    color: "white",
                    padding: "10px",
                    borderRadius: "50%",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    "&:hover": { color: "#639168" },
                  }}
                >
                  <Typography marginRight="8px">View Detail</Typography>
                  {<EastIcon />}
                </Box>
              </Box>
            </Box>
          </Box>
          {/* </Slide> */}
        </animated.div>
        {/* <Slide direction="left" in={true} timeout={2800} ref={ref}> */}
        <animated.div ref={ref} style={animatedSlider}>
          <Box
            sx={{
              border: "1px solid lightgray",
              width: { xs: "280px", sm: "380px", md: "430px" },
              height: "320px",
            }}
          >
            <Box
              sx={{
                margin: "35px 0 0 35px",
              }}
            >
              <Typography sx={{ color: "gray" }}>
                15 DECEMBER - 01 JANUARY
              </Typography>
              <Typography
                sx={{
                  color: "#abb8c3",
                  fontSize: "22px",
                  marginBottom: "30px",
                }}
              >
                Thursday
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  marginBottom: "30px",
                  gap: "5%",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="img"
                  src="../src/assets/Images/Schedule/grid1.jpg"
                  style={{ width: "90px", display: "flex" }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "500",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                >
                  Bibendum auctor
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "5%" }}>
                <ShareOutlinedIcon
                  sx={{
                    background: "#639168",
                    fontSize: "45px",
                    color: "white",
                    padding: "10px",
                    borderRadius: "50%",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    "&:hover": { color: "#639168" },
                  }}
                >
                  <Typography marginRight="8px">View Detail</Typography>
                  {<EastIcon />}
                </Box>
              </Box>
            </Box>
          </Box>
        </animated.div>
        {/* </Slide> */}
      </Box>
    </Box>
  );
}

export default Schedule;
