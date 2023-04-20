import React, { useState, useLayoutEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EastIcon from "@mui/icons-material/East";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useSpring, animated } from "react-spring";

function Cards() {
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

  return (
    <animated.div ref={ref} style={animatedStyle}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginTop={"100px"}
      >
        <AutoStoriesIcon
          sx={{
            fontSize: "60px",
            color: "#639168",
            margin: { xs: "0", md: "5px" },
          }}
        />
        <Typography
          variant="h4"
          sx={{
            fontWeight: { xs: "450", md: "550" },
            color: "#323334",
            fontSize: { xs: "25px", md: "800" },
            marginBottom: "5px",
          }}
        >
          Choose your class
        </Typography>
        <Typography
          variant="caption"
          sx={{ fontSize: { xs: "14px", md: "16px" } }}
        >
          Each class has its own effect
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "3%",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "center" },
            flexWrap: { xs: "wrap", lg: "nowrap" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              margin: "50px 0",
              cursor: "pointer",
            }}
          >
            <Box>
              <Card
                sx={{
                  borderRadius: "12px",
                  width: { xs: "260px", md: "100%" },
                }}
              >
                <CardMedia
                  component="img"
                  src="Images/Card/yoga1.jpg"
                  alt="Image Title"
                  sx={{
                    borderRadius: "12px",
                    zIndex: "1",
                    transition: "transform 0.5s ease ",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                />
              </Card>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                height: { xs: "100px", md: "140px" },
                gap: "30px",
                marginTop: { xs: "-80px", md: "-100px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "3px",
                  background: "white",
                  borderRadius: "8px",
                  width: { xs: "230px", md: "320px" },
                  boxShadow: "0px 10px 15px 0px lightgray",
                  zIndex: "2",
                }}
              >
                <Typography sx={{ color: "gray", fontSize: "14px" }}>
                  Every Sunday
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "650",
                    fontSize: { xs: "14px", md: "18px" },
                    marginBottom: { xs: "5px", md: "12px" },
                    cursor: "pointer",
                    "&:hover": {
                      color: "#639168",
                    },
                  }}
                >
                  Explore Fashion
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    margin: "0 auto",
                    width: "80px",
                    gap: "4%",
                    color: "#639168",
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "13px",
                      cursor: "pointer",

                      "&:hover": {
                        color: "#639168",
                      },
                    }}
                  >
                    Read More
                  </Typography>
                  {
                    <EastIcon
                      sx={{
                        fontSize: "13px",
                      }}
                    />
                  }
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              margin: "50px 0",
              cursor: "pointer",
            }}
          >
            <Box>
              <Card
                sx={{
                  borderRadius: "12px",
                  width: { xs: "260px", md: "100%" },
                }}
              >
                <CardMedia
                  component="img"
                  src="Images/Card/yoga2.jpg"
                  alt="Image Title"
                  sx={{
                    borderRadius: "12px",
                    transition: "transform 0.5s ease ",
                    zIndex: "1",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                />
              </Card>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                height: { xs: "100px", md: "140px" },
                gap: "30px",
                marginTop: { xs: "-80px", md: "-100px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "3px",
                  background: "white",
                  borderRadius: "8px",
                  width: { xs: "230px", md: "320px" },
                  boxShadow: "0px 10px 15px 0px lightgray",
                  zIndex: "2",
                }}
              >
                <Typography color="gray" fontSize="14px">
                  Every Sunday
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "650",
                    fontSize: { xs: "14px", md: "18px" },
                    marginBottom: { xs: "5px", md: "12px" },
                    cursor: "pointer",
                    "&:hover": {
                      color: "#639168",
                    },
                  }}
                >
                  Explore Fashion
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    margin: "0 auto",
                    width: "80px",
                    gap: "4%",
                    color: "#639168",
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "13px",
                      cursor: "pointer",

                      "&:hover": {
                        color: "#639168",
                      },
                    }}
                  >
                    Read More
                  </Typography>
                  {
                    <EastIcon
                      sx={{
                        fontSize: "13px",
                      }}
                    />
                  }
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              margin: "50px 0",
              cursor: "pointer",
            }}
          >
            <Box>
              <Card
                sx={{
                  borderRadius: "12px",
                  width: { xs: "260px", md: "100%" },
                }}
              >
                <CardMedia
                  component="img"
                  src="Images/Card/yoga3.jpg"
                  alt="Image Title"
                  sx={{
                    borderRadius: "12px",
                    transition: "transform 0.5s ease ",
                    zIndex: "1",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                />
              </Card>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                height: { xs: "100px", md: "140px" },
                gap: "30px",
                marginTop: { xs: "-80px", md: "-100px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "3px",
                  background: "white",
                  borderRadius: "8px",
                  width: { xs: "230px", md: "320px" },
                  boxShadow: "0px 10px 15px 0px lightgray",
                  zIndex: "2",
                }}
              >
                <Typography color="gray" fontSize="14px">
                  Every Sunday
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "650",
                    fontSize: { xs: "14px", md: "18px" },
                    marginBottom: { xs: "5px", md: "12px" },
                    cursor: "pointer",
                    "&:hover": {
                      color: "#639168",
                    },
                  }}
                >
                  Explore Fashion
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    margin: "0 auto",
                    width: "80px",
                    gap: "4%",
                    color: "#639168",
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "13px",
                      cursor: "pointer",

                      "&:hover": {
                        color: "#639168",
                      },
                    }}
                  >
                    Read More
                  </Typography>
                  {
                    <EastIcon
                      sx={{
                        fontSize: "13px",
                      }}
                    />
                  }
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </animated.div>
  );
}

export default Cards;
