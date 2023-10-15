import {
  Box,
  Button,
  Chip,
  Container,
  CssBaseline,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BeerCard from "../components/BeerCard";
import Logo from "../public/images/wbhclogotemp.png";
import RoomIcon from "@mui/icons-material/Room";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import beerData from "../json/beerData2023Nov.json";

export default function Home() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(
        ","
      ),
    },
    palette: {
      primary: {
        light: "#fff350",
        main: "#ffc107",
        dark: "#c79100",
        contrastText: "#000",
      },
      secondary: {
        light: "#ffffff",
        main: "#eeeeee",
        dark: "#bcbcbc",
        contrastText: "#000",
      },
    },
  });

  const filterTypes = [
    "Pale",
    "Amber",
    "Ruby Mild",
    "Brown",
    "Dark",
    "Cider",
    "Lager",
  ];

  const [filters, setFilters] = useState([]);

  const [ratings, setRatings] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("ratings");
      const initialValue = JSON.parse(saved);
      return initialValue || {};
    } else {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem("ratings", JSON.stringify(ratings));
  }, [ratings]);

  const filterClickHandler = (beerType) => {
    filters.includes(beerType)
      ? setFilters((filters) => filters.filter((item) => item !== beerType))
      : setFilters((filters) => [...filters, beerType]);
  };

  const clearClickHandler = () => {
    setFilters([]);
  };

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>West Bridgford Hockey Club Beer Festival November 2023</title>
      </Head>
      <CssBaseline />
      <Container
        sx={{
          backgroundColor: "#ffc107",
          paddingBottom: "30px",
          paddingTop: "30px",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              backgroundColor: "#FFFFFF",
              p: "15px",
              borderRadius: "5px",
              boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
              mb: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexBasis: "100%",
              }}
            >
              <Image
                src={Logo}
                alt={"WBHC Logo"}
                height={100}
                width={100}
                sx={{}}
              />
            </Box>

            {/* <Box
              sx={{
                // minWidth: "100px",
                // minHeight: "100px",
                position: "relative",
                display: "flex",
                mr: 2,
              }}
            ></Box> */}
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <Typography
                textAlign="center"
                sx={{ flexBasis: "100%" }}
                variant="h4"
                mb={1}
                fontWeight={"bold"}
              >
                WBHC Beer Festival November 2023
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexBasis: "100%",
                }}
                p={2}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexBasis: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexBasis: "100%",
                      justifyContent: "center",
                    }}
                    mb={1}
                  >
                    <CalendarTodayIcon sx={{ mr: 1 }} />
                    <Typography gutterBottom>16th - 18th November</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexBasis: "100%",
                      justifyContent: "center",
                    }}
                    mb={1}
                  >
                    <ScheduleIcon sx={{ mr: 1 }} />
                    <Typography gutterBottom>16:30 - Late</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexBasis: "100%",
                      justifyContent: "center",
                    }}
                    mb={1}
                  >
                    <RoomIcon sx={{ mr: 1 }} />
                    <Typography textAlign={"center"} gutterBottom>
                      West Bridgford Hockey Club, 276 Loughborough Road,
                      NG2&nbsp;7FA (
                      <a href="https://goo.gl/maps/AZkTnjfnC8bBKL8s7">Map</a>)
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexBasis: "100%",
                      justifyContent: "center",
                    }}
                  >
                    <CurrencyPoundIcon sx={{ mr: 1 }} />
                    <Typography gutterBottom>Free Entry</Typography>
                  </Box>
                  <Typography
                    textAlign="center"
                    gutterBottom
                    sx={{ flexBasis: "100%" }}
                    fontStyle={"italic"}
                    mt={2}
                  >
                    All beers subject to change until delivery
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#FFFFFF",
                p: 2,
                borderRadius: "5px",
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                mb: 2,
              }}
            >
              <Typography variant="h5" sx={{ textAlign: "center", pb: 2 }}>
                Filter by type
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {filterTypes.map((beerType) => (
                  <Chip
                    key={beerType}
                    onClick={() => filterClickHandler(beerType)}
                    sx={{
                      mr: 2,
                      mb: 1,
                      width: "90px",
                    }}
                    label={beerType}
                    color={filters.includes(beerType) ? "primary" : "secondary"}
                  ></Chip>
                ))}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "row-reverse",
                  mt: 1,
                }}
              >
                <Button
                  onClick={clearClickHandler}
                  variant="contained"
                  sx={{
                    mr: 2,
                    mb: 1,
                    width: "130px",
                    color: "#fff",
                    backgroundColor: "#3B3F46",
                    "&:active": {
                      backgroundColor: "#2A2E34",
                    },
                    "&:hover": {
                      backgroundColor: "#3B3F46",
                    },
                  }}
                >
                  Clear Filters
                </Button>
              </Box>
            </Box>

            <Stack container spacing={2}>
              {filters.length === 0
                ? beerData.map((beer) => (
                    <Grid item key={beer.id}>
                      <BeerCard
                        item
                        img={beer.img}
                        name={beer.name}
                        description={beer.description}
                        style={beer.style}
                        alcohol={beer.alcohol}
                        status={beer.status}
                        id={beer.id}
                        ratings={ratings}
                        setRatings={setRatings}
                      />
                    </Grid>
                  ))
                : beerData
                    .filter((beer) => filters.includes(beer.style))
                    .map((beer) => (
                      <Grid item key={beer.id}>
                        <BeerCard
                          item
                          img={beer.img}
                          name={beer.name}
                          description={beer.description}
                          style={beer.style}
                          alcohol={beer.alcohol}
                          status={beer.status}
                          id={beer.id}
                          ratings={ratings}
                          setRatings={setRatings}
                        />
                      </Grid>
                    ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
