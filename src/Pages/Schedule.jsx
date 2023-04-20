import React, { useState } from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Divider from "@mui/material/Divider";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Link from "@mui/material/Link";
import EastIcon from "@mui/icons-material/East";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

function Schedule() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          padding: "0px",
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
          Schedule
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
          <Link sx={{ color: "white", textDecoration: "none" }}>Schedule</Link>
        </Breadcrumbs>
      </Box>
      <Box>
        <Box
          marginTop="10px"
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "22px", md: "800" },
              fontWeight: { xs: "500", md: "800" },
              marginBottom: "15px",
              textAlign: "center",
            }}
          >
            Powerful Timetable
          </Typography>
          <Typography
            variant="caption"
            sx={{
              fontSize: "14px",
              display: { xs: "none", sm: "block" },
              width: { xs: "260px", md: "470px" },
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Create your timetable with super poweful schedule tool that helps
            you create and manage online schedules for your classes
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TabContext value={value}>
            <Tabs
              sx={{ width: { xs: "250px" } }}
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Daily" value="1" />
              <Tab label="Grid" value="2" />
              <Tab label="Tile" value="3" />
            </Tabs>
            <TabPanel value="1" sx={{ padding: "0px" }}>
              <Box
                sx={{
                  margin: "0 auto",
                  width: { xs: "280px", md: "600px" },
                  height: { xs: "500px", md: "400px" },
                  boxShadow: "0px 15px 15px 5px lightgray",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "15%",
                    padding: "20px 0",
                  }}
                >
                  <KeyboardArrowLeft />
                  <Typography variant="h6">2023 April</Typography>
                  <KeyboardArrowRight />
                </Box>
                <Divider sx={{ color: "#37474f", width: "100%" }} />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "8%",
                    margin: "20px 0",
                  }}
                >
                  <Typography variant="h3" sx={{ fontWeight: "600" }}>
                    17
                  </Typography>
                  <Typography
                    variant="body"
                    sx={{
                      fontSize: "24px",
                      color: "gray",
                      margin: "8px 0",
                    }}
                  >
                    Monday
                  </Typography>
                  <Typography>2 Events</Typography>
                </Box>
                <Divider sx={{ color: "#37474f", width: "100%" }} />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-evenly",
                    gap: "8%",
                    margin: "20px 0",
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        marginLeft: "35px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "30px",
                          gap: "5%",
                        }}
                      >
                        <CardMedia
                          component="img"
                          src="../src/assets/Images/Schedule/grid.jpg"
                          style={{ width: "90px", display: "flex" }}
                        />
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: "500",
                              fontSize: "14px",
                              cursor: "pointer",
                            }}
                          >
                            Bibendum auctor
                          </Typography>
                          <Typography sx={{ color: "gray" }}>
                            All day
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Box>
                      <Box
                        sx={{
                          marginLeft: "35px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "30px",
                            gap: "5%",
                          }}
                        >
                          <CardMedia
                            component="img"
                            src="../src/assets/Images/Schedule/grid1.jpg"
                            style={{ width: "90px", display: "flex" }}
                          />
                          <Box
                            sx={{ display: "flex", flexDirection: "column" }}
                          >
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: "500",
                                fontSize: "14px",
                                cursor: "pointer",
                              }}
                            >
                              Bibendum auctor
                            </Typography>
                            <Typography sx={{ color: "gray" }}>
                              All day
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value="2" sx={{ padding: "0px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "center",
                  gap: "30px",
                  marginTop: "30px",
                }}
              >
                <Box
                  sx={{
                    border: "1px solid lightgray",
                    width: { xs: "260px", md: "380px" },
                    height: "320px",
                  }}
                >
                  <Box
                    sx={{
                      margin: "35px 0 0 35px",
                    }}
                  >
                    <Typography sx={{ color: "gray" }}>
                      03 - 31 DECEMBER
                    </Typography>
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
                        sx={{ width: "90px", display: "flex" }}
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
                        <Typography>View Detail</Typography>
                        {<EastIcon />}
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    border: "1px solid lightgray",
                    width: { xs: "260px", md: "380px" },
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
                        sx={{ width: "90px", display: "flex" }}
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
                        <Typography>View Detail</Typography>
                        {<EastIcon />}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value="3" sx={{ padding: "0px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: { xs: "280px", sm: "600px", md: "800px" },
                  height: { xs: "710px", md: "520px" },
                  padding: "20px",
                  boxShadow: "0px 15px 15px 0px lightgray",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: "100%",
                    marginBottom: "30px",
                  }}
                >
                  <Button
                    sx={{
                      border: "1px solid lightgray",
                      width: { xs: "70px", md: "110px" },
                      height: { xs: "40px", md: "50px" },
                      fontSize: { xs: "10px", md: "14px" },
                      color: "gray",
                    }}
                    startIcon={<KeyboardArrowLeftIcon />}
                  >
                    March
                  </Button>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: "14px", sm: "22px" },
                      fontWeight: { xs: "600", sm: "800" },
                    }}
                  >
                    April 2023
                  </Typography>
                  <Button
                    sx={{
                      border: "1px solid lightgray",
                      width: { xs: "70px", md: "110px" },
                      height: { xs: "40px", md: "50px" },
                      fontSize: { xs: "10px", md: "14px" },
                      color: "gray",
                    }}
                    endIcon={<KeyboardArrowRightIcon />}
                  >
                    May
                  </Button>
                </Box>
                <Divider sx={{ color: "#37474f", width: "100%" }} />
                <Box>
                  <Box
                    sx={{
                      width: { xs: "280px", md: "800px" },
                      marginTop: "30px",
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: { xs: "260px", md: "350px" },
                        margin: "0 auto",
                        marginBottom: { xs: "20px", md: "0px" },
                      }}
                    >
                      <CardMedia
                        component="img"
                        src="../src/assets/Images/Card/yoga1.jpg"
                      ></CardMedia>
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          height: "100%",
                          width: "100%",
                          opacity: 0.6,
                          backgroundColor: "rgba(0, 0, 0, 0.7)",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                        }}
                      >
                        <Box sx={{ margin: "0 0 60px 30px" }}>
                          <Typography
                            sx={{
                              color: "white",
                            }}
                          >
                            3 - 31 DEC
                          </Typography>
                          <Typography
                            variant="h5"
                            sx={{
                              color: "white",
                              fontSize: "18px",
                              marginTop: "10px",
                              cursor: "pointer",
                              "&:hover": {
                                textDecoration: "underline",
                              },
                            }}
                          >
                            Proin gravida nibh vel velit
                          </Typography>
                          <Typography
                            variant="body"
                            sx={{
                              color: "white",
                              fontSize: "14px",
                              marginTop: "10px",
                            }}
                          >
                            All day
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        position: "relative",
                        width: { xs: "260px", md: "350px", margin: "0 auto" },
                      }}
                    >
                      <CardMedia
                        component="img"
                        src="../src/assets/Images/Card/yoga3.jpg"
                      ></CardMedia>
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          height: "100%",
                          width: "100%",
                          opacity: 0.6,
                          backgroundColor: "rgba(0, 0, 0, 0.7)",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                        }}
                      >
                        <Box sx={{ margin: "0 0 60px 30px" }}>
                          <Typography
                            sx={{
                              zIndex: "10",
                              color: "white",
                            }}
                          >
                            1 JAN - 1 APR
                          </Typography>
                          <Typography
                            variant="h5"
                            sx={{
                              zIndex: "10",
                              color: "white",
                              fontSize: "18px",
                              marginTop: "10px",
                              cursor: "pointer",
                              "&:hover": {
                                textDecoration: "underline",
                              },
                            }}
                          >
                            Proin gravida nibh vel velit
                          </Typography>
                          <Typography
                            variant="body"
                            sx={{
                              color: "white",
                              fontSize: "14px",
                              marginTop: "10px",
                            }}
                          >
                            8:00 am
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Box>
  );
}

export default Schedule;
