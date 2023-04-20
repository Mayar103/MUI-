import React, { useState, useLayoutEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import { CardMedia, Slide } from "@mui/material";
import { Fade } from "@mui/material";
import { useSpring, animated } from "react-spring";
import DiamondIcon from "@mui/icons-material/Diamond";

function Service() {
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
    transform: isVisible ? "translateX(0)" : "translateY(-50px)",
  });

  React.useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <Box
      sx={{
        background: "#f1f5e8",
      }}
    >
      {/* <Slide direction="up" in={true} timeout={2800}> */}
      <animated.div ref={ref} style={animatedStyle}>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          marginBottom="80px"
        >
          <DiamondIcon
            sx={{
              color: "#639168",
              fontSize: "60px",
              marginTop: "60px",
            }}
          />
          <Typography
            variant="h2"
            sx={{
              margin: "20px 0 5px",
              fontSize: { xs: "25px", md: "800" },
              fontWeight: "600",
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="caption"
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
            }}
          >
            We provide various kinds of service
          </Typography>
        </Box>
        {/* </Slide> */}
      </animated.div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "3%",
        }}
      >
        <Slide direction="right" in={true} timeout={2800}>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              direction: "rtl",
              marginBottom: { xs: "50px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <MonitorHeartOutlinedIcon
                  sx={{
                    color: "#639168",
                    fontSize: "40px",
                    marginBottom: "2%",
                  }}
                />
                <Typography fontSize="18px" variant="h6" marginBottom="2%">
                  Improve Health
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    color: "gray",
                    lineHeight: "1.6rem",
                    fontSize: "17px",
                    marginBottom: "7%",
                  }}
                >
                  We have Lorem ipsum dolor sit amet, consectetur.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <SpaOutlinedIcon
                sx={{
                  color: "#639168",
                  fontSize: "40px",
                  marginBottom: "2%",
                }}
              />
              <Box>
                <Typography fontSize="18px" variant="h6" marginBottom="2%">
                  Balance Your Mind
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "gray",
                    lineHeight: "1.6rem",
                    fontSize: "17px",
                    marginBottom: "7%",
                  }}
                >
                  We have Lorem ipsum dolor sit amet, consectetur.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <EventNoteOutlinedIcon
                sx={{
                  color: "#639168",
                  fontSize: "40px",
                  marginBottom: "2%",
                }}
              />
              <Box>
                <Typography fontSize="18px" variant="h6" marginBottom="2%">
                  Weight Loss
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "gray",
                    lineHeight: "1.8rem",
                    fontSize: "17px",
                  }}
                >
                  We have Lorem ipsum dolor sit amet, consectetur.
                </Typography>
              </Box>
            </Box>
          </Container>
        </Slide>

        <Fade in={isVisible} timeout={500}>
          <CardMedia
            component="img"
            src="Images/Serve/yoga6.png"
            sx={{ display: { xs: "none", md: "block" } }}
          />
        </Fade>

        <Slide direction="left" in={true} timeout={2800}>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              direction: "ltr",
              marginBottom: { xs: "50px" },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <FavoriteBorderIcon
                sx={{
                  color: "#639168",
                  fontSize: "40px",
                  marginBottom: "2%",
                }}
              />
              <Box>
                <Typography fontSize="18px" variant="h6" marginBottom="2%">
                  Sleep Better
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "gray",
                    marginBottom: "7%",
                    lineHeight: "1.6rem",
                    fontSize: "17px",
                  }}
                >
                  We have Lorem ipsum dolor sit amet, consectetur.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <SpaOutlinedIcon
                sx={{
                  color: "#639168",
                  fontSize: "40px",
                  marginBottom: "2%",
                }}
              />
              <Box>
                <Typography fontSize="18px" variant="h6" marginBottom="2%">
                  Low Blood Pressure
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "gray",
                    marginBottom: "7%",
                    lineHeight: "1.6rem",
                    fontSize: "17px",
                  }}
                >
                  We have Lorem ipsum dolor sit amet, consectetur.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <AcUnitIcon
                sx={{
                  color: "#639168",
                  fontSize: "40px",
                  marginBottom: "2%",
                }}
              />
              <Box>
                <Typography fontSize="18px" variant="h6" marginBottom="2%">
                  Increase Flexibility
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "gray",
                    lineHeight: "1.6rem",
                    fontSize: "17px",
                  }}
                >
                  We have Lorem ipsum dolor sit amet, consectetur.
                </Typography>
              </Box>
            </Box>
          </Container>
        </Slide>
      </Box>
    </Box>
  );
}

export default Service;
