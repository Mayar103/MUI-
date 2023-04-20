import React, { useRef, useLayoutEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import { CardMedia, Slide } from "@mui/material";
import { useSpring, animated } from "react-spring";

function Testimonials() {
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
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography
        variant="h4"
        fontWeight="600"
        fontSize="32px"
        margin="80px 0 30px"
      >
        Testimonials
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          gap: { sm: "5%", md: "3%" },
        }}
      >
        <animated.div ref={ref} style={animatedSlider}>
          {/* <Slide direction="left" in={true} timeout={7500}> */}
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              justifyContent: "center",
              gap: "3px",
              background: "white",
              borderRadius: "8px",
              width: { xs: "300px", md: "420px", lg: "600px" },
              height: "220px",
              boxShadow: "0px 10px 15px 0px lightgray",
              marginBottom: { xs: "50px", md: "0" },
            }}
          >
            <Typography
              sx={{
                color: "gray",
                fontWeight: "400",
                fontSize: { xs: "12px", md: "13px" },
                width: { xs: "280px", md: "400px", lg: "550px" },
                lineHeight: { xs: "1.2rem", md: "1.6rem" },
                marginLeft: "15px",
              }}
            >
              The Yoga Yajnavalkya is another early text on yoga that provides
              description of Yoga techniques and its benefits. Two of its
              Sanskrit palm-leaf manuscripts have been dated, one is from the
              early 10th century CE and another more firmly.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                marginTop: "10px",
              }}
            >
              <Box>
                <CardMedia
                  component="img"
                  src="../src/assets/Images/Testimonials/testimonials2.png"
                  sx={{
                    width: { xs: "65px" },
                    marginLeft: { xs: "15px" },
                  }}
                ></CardMedia>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Box color="#639168">
                  <StarIcon sx={{ fontSize: "18px" }} />
                  <StarIcon sx={{ fontSize: "18px" }} />
                  <StarIcon sx={{ fontSize: "18px" }} />
                  <StarIcon sx={{ fontSize: "18px" }} />
                  <StarIcon sx={{ fontSize: "18px" }} />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    fontSize="16px"
                    fontWeight="500"
                    marginTop="-5px"
                    width="80px"
                  >
                    John Doe
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* </Slide> */}
        </animated.div>
        <animated.div ref={ref} style={animatedSlide}>
          {/* <Slide direction="right" in={true} timeout={7500}> */}
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              justifyContent: "center",
              gap: "3px",
              background: "white",
              height: "220px",
              borderRadius: "8px",
              width: { xs: "300px", md: "420px", lg: "600px" },
              boxShadow: "0px 10px 15px 0px lightgray",
            }}
          >
            <Typography
              sx={{
                color: "gray",
                fontWeight: "400",
                fontSize: { xs: "12px", md: "13px" },
                width: { xs: "280px", md: "400px", lg: "550px" },
                lineHeight: { xs: "1.2rem", md: "1.6rem" },
                marginLeft: "15px",
              }}
            >
              Modern Yoga consists of a range of techniques including asanas and
              meditation derived from some of the philosophies, teaching and
              practices of the Yoga school, which is one of the six-schools of
              tranditional Hindu philosophies.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                marginTop: "10px",
              }}
            >
              <Box>
                <CardMedia
                  component="img"
                  src="../src/assets/Images/Testimonials/testimonials1.png"
                  sx={{
                    width: { xs: "65px" },
                    marginLeft: { xs: "15px" },
                  }}
                ></CardMedia>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Box color="#639168">
                  <StarIcon sx={{ fontSize: "18px" }} />
                  <StarIcon sx={{ fontSize: "18px" }} />
                  <StarIcon sx={{ fontSize: "18px" }} />
                  <StarIcon sx={{ fontSize: "18px" }} />
                  <StarIcon sx={{ fontSize: "18px" }} />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    fontSize="16px"
                    fontWeight="500"
                    marginTop="-5px"
                    width="100px"
                  >
                    Henry Harry
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* </Slide> */}
        </animated.div>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <Typography
          variant="h3"
          fontWeight="700"
          fontSize="35px"
          margin="100px 0 30px"
          display="flex"
          justifyContent="center"
        >
          Our Gallery
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: "30px",
            flexWrap: { sm: "wrap", lg: "nowrap" },
          }}
        >
          <CardMedia
            component="img"
            src="../src/assets/Images/Gallery/1.jpg"
            sx={{
              width: "250px",
              cursor: "pointer",
              transition: "transform 0.5s ease ",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
          <CardMedia
            component="img"
            src="../src/assets/Images/Gallery/2.jpg"
            sx={{
              width: "250px",
              cursor: "pointer",
              transition: "transform 0.5s ease ",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
          <CardMedia
            component="img"
            src="../src/assets/Images/Gallery/3.jpg"
            sx={{
              width: "250px",
              cursor: "pointer",
              transition: "transform 0.5s ease ",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
          <CardMedia
            component="img"
            src="../src/assets/Images/Gallery/4.jpg"
            sx={{
              width: "250px",
              cursor: "pointer",
              transition: "transform 0.5s ease ",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
        </Box>
      </Box>

      <Box margin="80px 0 40px" gap="100px">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: { xs: "wrap" },
          }}
        >
          <CardMedia
            component="img"
            src="../src/assets/Images/Gallery/img1.png"
            sx={{
              width: "200px",
              cursor: "pointer",
              transition: "transform 0.5s ease ",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
          <CardMedia
            component="img"
            src="../src/assets/Images/Gallery/img2.png"
            sx={{
              width: "200px",
              cursor: "pointer",
              transition: "transform 0.5s ease ",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
          <CardMedia
            component="img"
            src="../src/assets/Images/Gallery/img3.png"
            sx={{
              width: "200px",
              cursor: "pointer",
              transition: "transform 0.5s ease ",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
          <CardMedia
            component="img"
            src="../src/assets/Images/Gallery/img4.png"
            sx={{
              width: "200px",
              cursor: "pointer",
              transition: "transform 0.5s ease ",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
          <CardMedia
            component="img"
            src="../src/assets/Images/Gallery/img5.png"
            sx={{
              width: "200px",
              cursor: "pointer",
              transition: "transform 0.5s ease ",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
          <CardMedia
            component="img"
            src="../src/assets/Images/Gallery/img6.png"
            sx={{
              width: "200px",
              cursor: "pointer",
              transition: "transform 0.5s ease ",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Testimonials;
