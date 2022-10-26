import {
  Box,
  Card,
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import BeerCard from "../components/BeerCard";

import beerData from "../json/beerData.json";

export default function Home() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(
        ","
      ),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>West Bridgford Hockey Club Beer Festival 2022</title>
      </Head>
      <CssBaseline />
      <Container sx={{ backgroundColor: "#FFC40A", paddingBottom: "30px" }}>
        <Box>
          <Card sx={{ marginBottom: "20px" }}>
            <Box sx={{ width: "200px", height: "200px", position: "relative" }}>
              <Image
                src={"/images/WBHCLogo.jpg"}
                alt={"WBHC Logo"}
                layout='fill'
                objectFit='contain'
              />
            </Box>
            <Typography variant='h4'>WBHC Beer Festival 2022</Typography>
          </Card>
          <Card>
            <Typography>
              Add date, location (link to maps), no entry fee{" "}
            </Typography>
          </Card>

          <Box>
            <Grid container spacing={2}>
              {beerData.map((beer) => (
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
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
