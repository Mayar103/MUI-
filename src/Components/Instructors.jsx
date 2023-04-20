import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EastIcon from "@mui/icons-material/East";
import Button from "@mui/material/Button";
import { Fade } from "@mui/material";
import MobileStepper from "@mui/material/MobileStepper";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SelfImprovementOutlinedIcon from "@mui/icons-material/SelfImprovementOutlined";

function Instructors() {
  const [isVisible, setIsVisible] = useState(false);

  const images = [
    {
      imgPath: "../src/assets/Images/Instructors/instructor1.jpg",
      name: "Rick Edward",
      class: "1 class",
    },
    {
      imgPath: "../src/assets/Images/Instructors/instructor2.jpg",
      name: "Alice Doe",
      class: "2 classes",
    },
    {
      imgPath: "../src/assets/Images/Instructors/instructor3.jpg",
      name: "Janice Doe",
      class: "3 classes",
    },
  ];

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Box
      sx={{
        marginBottom: "50px",
        background: "#80a884",
        height: "1020px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <SelfImprovementOutlinedIcon
          sx={{
            color: "white",
            fontSize: "70px",
            margin: "120px 0 6px",
          }}
        />
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "25px", md: "800" },
            fontWeight: "600",
            color: "white",
          }}
        >
          Our Instructors
        </Typography>
        <Typography
          variant="caption"
          sx={{ fontSize: { xs: "14px", sm: "16px" } }}
        >
          Feel free to call us
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          marginTop: "50px",
          gap: "2.7%",
        }}
      >
        <Fade in={isVisible} timeout={1500}>
          <Card
            sx={{
              maxWidth: 400,
              height: "480px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                marginTop: "50px",
                width: "200px",
                height: "200px",
              }}
            >
              <CardMedia
                component="img"
                image="../src/assets/Images/Instructors/instructor1.jpg"
                alt="cardImg"
                sx={{
                  borderRadius: "50%",
                  cursor: "pointer",
                  transition: "transform 0.5s ease ",
                  "&:hover": {
                    transform: "translateY(-30px) scale(1.05)",
                  },
                }}
              />
            </Box>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" color="text.secondary">
                Rick Edward
              </Typography>
              <Typography variant="body2" color="text.secondary">
                1 class
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
                fontSize="13px"
                lineHeight="1.5rem"
                margin="10px 0 5px"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Venenatis…
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", gap: "25%" }}>
              <FacebookRoundedIcon
                sx={{
                  fontSize: "24px",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#1a0dab",
                  },
                }}
              />
              <TwitterIcon
                sx={{
                  fontSize: "24px",
                  cursor: "pointer",
                  "&:hover": {
                    color: "rgba(6,147,227,1)",
                  },
                }}
              />
              <LinkedInIcon
                sx={{
                  fontSize: "24px",
                  cursor: "pointer",
                  "&:hover": {
                    color: "rgb(65,88,208)",
                  },
                }}
              />
            </Box>
          </Card>
        </Fade>
        <Fade in={isVisible} timeout={3000}>
          <Card
            sx={{
              maxWidth: 400,
              height: "480px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                marginTop: "50px",
                width: "200px",
                height: "200px",
              }}
            >
              <CardMedia
                component="img"
                image="../src/assets/Images/Instructors/instructor2.jpg"
                alt="cardImg"
                sx={{
                  borderRadius: "50%",
                  cursor: "pointer",
                  transition: "transform 0.5s ease ",
                  "&:hover": {
                    transform: "translateY(-30px) scale(1.05)",
                  },
                }}
              />
            </Box>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" color="text.secondary">
                Rick Edward
              </Typography>
              <Typography variant="body2" color="text.secondary">
                1 class
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
                fontSize="13px"
                lineHeight="1.5rem"
                margin="10px 0 5px"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Venenatis…
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", gap: "25%" }}>
              <FacebookRoundedIcon
                sx={{
                  fontSize: "24px",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#1a0dab",
                  },
                }}
              />
              <TwitterIcon
                sx={{
                  fontSize: "24px",
                  cursor: "pointer",
                  "&:hover": {
                    color: "rgba(6,147,227,1)",
                  },
                }}
              />
              <LinkedInIcon
                sx={{
                  fontSize: "24px",
                  cursor: "pointer",
                  "&:hover": {
                    color: "rgb(65,88,208)",
                  },
                }}
              />
            </Box>
          </Card>
        </Fade>
        <Fade in={isVisible} timeout={4500}>
          <Card
            sx={{
              maxWidth: 400,
              height: "480px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                marginTop: "50px",
                width: "200px",
                height: "200px",
              }}
            >
              <CardMedia
                component="img"
                image="../src/assets/Images/Instructors/instructor3.jpg"
                alt="cardImg"
                sx={{
                  borderRadius: "50%",
                  cursor: "pointer",
                  transition: "transform 0.5s ease ",
                  "&:hover": {
                    transform: "translateY(-30px) scale(1.05)",
                  },
                }}
              />
            </Box>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" color="text.secondary">
                Rick Edward
              </Typography>
              <Typography variant="body2" color="text.secondary">
                3 class
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
                fontSize="13px"
                lineHeight="1.5rem"
                margin="10px 0 5px"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Venenatis…
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", gap: "25%" }}>
              <FacebookRoundedIcon
                sx={{
                  fontSize: "24px",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#1a0dab",
                  },
                }}
              />
              <TwitterIcon
                sx={{
                  fontSize: "24px",
                  cursor: "pointer",
                  "&:hover": {
                    color: "rgba(6,147,227,1)",
                  },
                }}
              />
              <LinkedInIcon
                sx={{
                  fontSize: "24px",
                  cursor: "pointer",
                  "&:hover": {
                    color: "rgb(65,88,208)",
                  },
                }}
              />
            </Box>
          </Card>
        </Fade>
      </Box>
      <Box sx={{ display: { xs: "block", md: "none", marginTop: "20px" } }}>
        <Card
          sx={{
            maxWidth: { xs: 280, sm: 500 },
            height: { xs: "520px", sm: "480px" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 50,
              }}
            >
              <CardMedia
                component="img"
                src={images[activeStep].imgPath}
                sx={{ marginTop: "200px", borderRadius: "50%" }}
              />
            </Paper>
          </Box>

          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "text.secondary", marginTop: "180px" }}
            >
              {images[activeStep].name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {images[activeStep].class}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
              fontSize="13px"
              lineHeight="1.5rem"
              margin="10px 0 5px"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Venenatis…
            </Typography>
            <Box
              sx={{
                marginTop: "20px",
                width: "100px",
              }}
            >
              <Box
                sx={{ display: "flex", justifyContent: "center", gap: "25%" }}
              >
                <FacebookRoundedIcon
                  sx={{
                    fontSize: "24px",
                    cursor: "pointer",
                    "&:hover": {
                      color: "#1a0dab",
                    },
                  }}
                />
                <TwitterIcon
                  sx={{
                    fontSize: "24px",
                    cursor: "pointer",
                    "&:hover": {
                      color: "rgba(6,147,227,1)",
                    },
                  }}
                />
                <LinkedInIcon
                  sx={{
                    fontSize: "24px",
                    cursor: "pointer",
                    "&:hover": {
                      color: "rgb(65,88,208)",
                    },
                  }}
                />
              </Box>
            </Box>
            <MobileStepper
              sx={{ marginTop: "10px", width: "100%" }}
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  disabled={activeStep === maxSteps - 1}
                  onClick={handleNext}
                  sx={{ color: "black" }}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  sx={{ color: "black" }}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </CardContent>
        </Card>
      </Box>
      <Button
        sx={{
          variant: "contained",
          background: "#639168",
          size: "medium",
          color: "white",
          width: 230,
          height: 60,
          margin: "50px 0",
          transition: "transform 2s",
          "&:hover": {
            background: "#639168",
            transform: "rotateX(360deg)",
          },
        }}
        endIcon={<EastIcon />}
      >
        Meet Instructors
      </Button>
    </Box>
  );
}

export default Instructors;
