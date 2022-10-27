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
          <Box sx={{ backgroundColor: "white", display: "flex", mb: "20px" }}>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                position: "relative",
                display: "flex",
                flexDirection: "row",
                marginBottom: "20px",
                marginTop: "20px",
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

          <Card sx={{ marginBottom: "20px" }}>
            <Typography>
              Add date, location (link to maps), no entry fee etc
            </Typography>
          </Card>

          <Box>
            <Card>
              <Typography>Beer List</Typography>
            </Card>

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
