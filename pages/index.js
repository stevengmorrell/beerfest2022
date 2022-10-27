import {
  Box,
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
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
            <Typography>
              Add date, location (link to maps), no entry fee etc
            </Typography>
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
              <Typography>Beer List</Typography>
            </Box>

            <Stack container spacing={2}>
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
            </Stack>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
