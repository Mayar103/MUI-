import React from "react";
import { Box, Typography } from "@mui/material";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
import { CardMedia } from "@mui/material";

function Subscribe({ radius }) {
  return (
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
      style={radius}
    >
      <CardMedia
        component="img"
        src="Images/Wave/bottom_wave.png"
        alt="Image Title"
        sx={{
          position: "absolute",
          top: 0,
        }}
      />

      <Typography
        variant="h5"
        sx={{
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
          margin: "90px 0 10px",
        }}
      >
        Subscribe to Our Newsletter
      </Typography>
      <Typography
        variant="p"
        sx={{
          color: "white",
          fontSize: { xs: "12px", md: "14px" },
          marginBottom: "25px",
          textAlign: "center",
        }}
      >
        Get everything that you need from our UDesign Yoga Center.
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Input
          placeholder="Email address here..."
          sx={{
            padding: "16px",
            fontSize: "12px",
            fontWeight: "300",
            height: "45px",
            background: "white",
            width: { xs: "150px", md: "400px" },
          }}
        />
        <Button
          sx={{
            color: "white",
            background: "#323334",
            height: "45px",
            width: { xs: "120px", md: "150px" },
            fontSize: { xs: "12px", md: "16px" },
            borderRadius: "0px 8px 8px 0px",
            "&:hover": {
              background: "#4b4d4e",
            },
          }}
          endIcon={<EastIcon />}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
}

export default Subscribe;
