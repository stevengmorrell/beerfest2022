import {
  Box,
  Button,
  ButtonGroup,
  Card,
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
import React, { useState } from "react";
import BeerCard from "../components/BeerCard";
import Logo from "../public/images/WBHCLogo.jpg";

import beerData from "../json/beerData.json";

export default function Home() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(
        ","
      ),
    },
  });

  const filterTypes = [
    "Pale",
    "Copper",
    "Brown",
    "Very Dark",
    "Cider",
    "Lager",
  ];

  const [filters, setFilters] = useState([]);

  const filterClickHandler = (e) => {
    filters.includes(e.target.value)
      ? setFilters((filters) =>
          filters.filter((item) => item !== e.target.value)
        )
      : setFilters((filters) => [...filters, e.target.value]);
  };

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>West Bridgford Hockey Club Beer Festival 2022</title>
      </Head>
      <CssBaseline />
      <Container
        sx={{
          backgroundColor: "#FFC40A",
          paddingBottom: "30px",
          paddingTop: "30px",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              p: "15px",
              borderRadius: "5px",
              boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
              mb: 2,
            }}
          >
            <Box
              sx={{
                width: "100px",
                height: "100px",
                position: "relative",
                display: "flex",
              }}
            >
              <Image
                src={Logo}
                alt={"WBHC Logo"}
                layout='fill'
                objectFit='contain'
              />
            </Box>
            <Typography variant='h4'>WBHC Beer Festival 2022</Typography>
          </Box>

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
            <Typography>Date: 17-19th November 2022</Typography>
            <Typography>16:30 - Late</Typography>
            <Typography>
              West Bridgford Hockey Club, Loughborough Road
            </Typography>
            <Typography>No Entry Fee</Typography>
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
              <Typography variant='h4' sx={{ textAlign: "center", pb: 2 }}>
                Beer List
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {filterTypes.map((beerType) => (
                  <Button
                    key={beerType}
                    onClick={filterClickHandler}
                    variant='contained'
                    value={beerType}
                    color='grey'
                    sx={{ mr: 2, mb: 1 }}
                  >
                    {beerType}
                  </Button>
                ))}
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
