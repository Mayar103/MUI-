import React, { useState, useLayoutEffect, useRef } from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Slide from "@mui/material/Slide";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Card from "../Components/Card";
import Link from "@mui/material/Link";
import { useSpring, animated } from "react-spring";

function Classes() {
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
    opacity: isVisible ? 1 : 0.5,
    // transform: isVisible ? "translate3d(0,0,0)" : "translate3d(0,80px,0)",
  });

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
          margin: "50px 0 120px",
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
          Classes
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
          <Link sx={{ color: "white", textDecoration: "none" }}>Classes</Link>
        </Breadcrumbs>
      </Box>
      <Card />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            background: "#f1f5e8",
            height: { xs: "1200px", md: "1100px", lg: "800px" },
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "space-evenly" },
            margin: "80px 0",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              justifyContent: { xs: "center", md: "space-evenly" },
              alignItems: { xs: "center" },
              gap: { xs: 0, md: "15%" },
              width: { xs: "280px", sm: "500px", md: "800px" },
            }}
          >
            <Box>
              <Box sx={{ color: "gray" }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "20px", md: "38px" },
                    fontWeight: { xs: "400", md: "700" },
                    color: "black",
                  }}
                >
                  Free online yoga classes
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "15px", md: "20px" },
                    fontWeight: "400",
                    margin: "6px 0 8px 0",
                  }}
                >
                  Lorem ipsum dolor sit amet
                </Typography>
                <Typography
                  sx={{
                    width: { xs: "250px", sm: "550px" },
                    fontSize: { xs: "12px", sm: "15px" },
                    lineHeight: "1.7rem",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Venenatis tellus in metus vulputate.
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: { xs: "center", md: "space-between" },
                  marginTop: "50px",
                  color: "gray",
                }}
              >
                <Box>
                  <Fade direction="up" in={true} timeout={1000}>
                    <Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography
                          sx={{
                            fontWeight: "800",
                            fontSize: "22px",
                            color: "black",
                            borderBottom: "2px solid black",
                          }}
                        >
                          01.
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            fontSize: "17px",
                            color: "black",
                            // margin: "20px 0 0 10px",
                          }}
                        >
                          Hatha
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          width: { xs: "250px", sm: "200px" },
                          fontSize: "13px",
                          lineHeight: "1.7rem",
                          marginBottom: "30px",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                      </Typography>
                    </Box>
                  </Fade>
                  <Fade direction="up" in={true} timeout={5000}>
                    <Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography
                          sx={{
                            fontWeight: "800",
                            fontSize: "22px",
                            color: "black",
                            borderBottom: "2px solid black",
                          }}
                        >
                          03.
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            fontSize: "17px",
                            color: "black",
                            // margin: "20px 0 0 10px",
                          }}
                        >
                          Pranayama
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          width: { xs: "250px", sm: "200px" },
                          fontSize: "13px",
                          lineHeight: "1.7rem",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                      </Typography>
                    </Box>
                  </Fade>
                </Box>

                <Box>
                  <Fade direction="up" in={true} timeout={3000}>
                    <Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography
                          sx={{
                            fontWeight: "800",
                            fontSize: "22px",
                            color: "black",
                            borderBottom: "2px solid black",
                          }}
                        >
                          02.
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            fontSize: "17px",
                            color: "black",
                            margin: "20px 0 0 +",
                          }}
                        >
                          Ashtanga
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          width: { xs: "250px", sm: "200px" },
                          fontSize: "13px",
                          lineHeight: "1.7rem",
                          marginBottom: "30px",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                      </Typography>
                    </Box>
                  </Fade>
                  <Fade direction="up" in={true} timeout={7000}>
                    <Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography
                          sx={{
                            fontWeight: "800",
                            fontSize: "22px",
                            color: "black",
                            borderBottom: "2px solid black",
                          }}
                        >
                          04.
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            fontSize: "17px",
                            color: "black",
                            // margin: "20px 0 0 10px",
                          }}
                        >
                          Vinyasa
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          width: { xs: "250px", sm: "200px" },
                          fontSize: "13px",
                          lineHeight: "1.7rem",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                      </Typography>
                    </Box>
                  </Fade>
                </Box>
              </Box>
            </Box>

            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "50px 0",
                }}
              >
                <CardMedia
                  component="img"
                  src="../src/assets/Images/Classes/classes3.jpg"
                  alt="Image Title"
                  sx={{
                    borderRadius: "12px",
                    maxWidth: {
                      xs: "240px",
                      sm: "320px",
                      md: "350px",
                      lg: "100%",
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  gap: "30px",
                  margin: "0 auto",
                  marginTop: { xs: "-110px", md: "-127px" },
                  height: { xs: "110px", sm: "120px", lg: "135px" },
                  width: { xs: "60%", sm: "45%", md: "52%", lg: "85%" },
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
                    width: { xs: "350px", sm: "520px", lg: "350px" },
                    boxShadow: "0px 10px 15px 0px lightgray",
                    transition: "transform 0.5s ease ",
                    "&:hover": {
                      transform: "translateY(-30px)",
                    },
                  }}
                >
                  <Typography color="gray" fontSize="14px">
                    With Mildred Reed
                  </Typography>
                  <Typography
                    variant="body"
                    sx={{
                      fontWeight: "405",
                      fontSize: { xs: "14px", md: "18px" },
                      cursor: "pointer",
                      "&:hover": {
                        color: "#639168",
                      },
                    }}
                  >
                    Trikshasana Daseg Wetrt
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "22px",
                      cursor: "pointer",
                      "&:hover": {
                        color: "#639168",
                      },
                    }}
                  >
                    Free
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Slide direction="up" in={true} timeout={2800}>
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "550",
                color: "#323334",
                fontSize: { xs: "600", sm: "800" },
                marginBottom: "5px",
              }}
            >
              Outdoor Classes
            </Typography>
            <Typography variant="caption" fontSize="16px">
              Most effective outdoor classes
            </Typography>
          </Box>
        </Slide>
        <Box
          sx={{
            display: { xs: "flex" },
            justifyContent: { md: "center" },
            flexDirection: { xs: "column", md: "row" },
            gap: { sm: "2%", lg: "4%" },
          }}
        >
          {/* <Slide direction="right" in={true} timeout={2800}> */}
          <Box>
            <Box
              sx={{
                display: { xs: "flex" },
                justifyContent: "center",
                alignItems: "center",
                flexDirection: { xs: "column", sm: "row" },
                gap: "30px",
                margin: "50px 0",
              }}
            >
              <CardMedia
                component="img"
                src="../src/assets/Images/Classes/classes2.jpg"
                alt="Image Title"
                sx={{
                  borderRadius: "12px",
                  width: {
                    xs: "260px",
                    sm: "100%",
                    md: "400px",
                    lg: "100%",
                  },
                  zIndex: "1",
                  cursor: "pointer",
                  transition: "transform 0.5s ease ",
                  "&:hover": {
                    transform: "scale(1.07)",
                  },
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                gap: "34px",
                margin: "0 auto",
                marginTop: { xs: "-110px", md: "-127px" },
                height: { xs: "110px", sm: "120px", lg: "150px" },
                width: { xs: "55%", sm: "70%", md: "80%", lg: "90%" },
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
                  width: "380px",
                  boxShadow: "0px 10px 15px 0px lightgray",
                  zIndex: 3,
                }}
              >
                <Typography color="gray" fontSize="14px">
                  Every Sunday
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "405",
                    fontSize: { xs: "14px", md: "18px" },
                    cursor: "pointer",
                    "&:hover": {
                      color: "#639168",
                    },
                  }}
                >
                  Beginner Level Yoga
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "22px",
                    cursor: "pointer",
                    "&:hover": {
                      color: "#639168",
                    },
                  }}
                >
                  $39
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* </Slide> */}
          {/* <Slide direction="left" in={true} timeout={2800}> */}
          <Box>
            <Box
              sx={{
                display: { xs: "flex" },
                justifyContent: "center",
                alignItems: "center",
                flexDirection: { xs: "column", md: "row" },
                gap: "30px",
                margin: "50px 0",
              }}
            >
              <CardMedia
                component="img"
                src="../src/assets/Images/Classes/classes4.jpg"
                alt="Image Title"
                sx={{
                  borderRadius: "12px",
                  width: {
                    xs: "260px",
                    sm: "100%",
                    md: "400px",
                    lg: "100%",
                  },
                  zIndex: "1",
                  cursor: "pointer",
                  transition: "transform 0.5s ease ",
                  "&:hover": {
                    transform: "scale(1.07)",
                  },
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                gap: "30px",
                margin: "0 auto",
                marginTop: { xs: "-110px", md: "-127px" },
                height: { xs: "110px", sm: "120px", lg: "150px" },
                width: { xs: "55%", sm: "70%", md: "80%", lg: "90%" },
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
                  width: "380px",
                  boxShadow: "0px 10px 15px 0px lightgray",
                  zIndex: 3,
                }}
              >
                <Typography color="gray" fontSize="14px">
                  Every Sunday
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "405",
                    fontSize: { xs: "14px", md: "18px" },
                    cursor: "pointer",
                    "&:hover": {
                      color: "#639168",
                    },
                  }}
                >
                  Beginner Level Yoga
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "22px",
                    cursor: "pointer",
                    "&:hover": {
                      color: "#639168",
                    },
                  }}
                >
                  $39
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* </Slide> */}
        </Box>
      </Box>
    </Box>
  );
}

export default Classes;
