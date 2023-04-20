import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Error() {
  return (
    <Box
      style={{
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: "100px",
        backgroundImage: `url('Images/404/error.jpg')`,
        minWidth: "100%",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: { xs: "100px", md: "50px" },
          left: { xs: "20px", sm: "180px" },
          width: { xs: "220px", sm: "550px" },
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontSize: { xs: "80px", sm: "110px" }, fontWeight: "550" }}
        >
          404
        </Typography>
        <Typography
          variant="p"
          sx={{ fontSize: { xs: "60px", sm: "100px" }, fontWeight: "200" }}
        >
          ERROR
        </Typography>
        <Typography variant="h6" fontSize="35px" fontWeight="100">
          <Typography
            variant="p"
            style={{ fontWeight: { xs: "300", sm: "500" } }}
          >
            Oops!
          </Typography>
          This page can't be found.
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontSize: "20px",
            fontWeight: "200",
            color: "gray",
            marginTop: "15px",
          }}
        >
          Sorry, The page you're looking for is not available. Maybe you can go
          home
        </Typography>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              display: "block",
              width: "140px",
              height: "45px",
              marginTop: "25px",
              background: "#639168",
              color: "white",
              "&:hover": {
                background: "#80a884",
              },
            }}
          >
            Go Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Error;
