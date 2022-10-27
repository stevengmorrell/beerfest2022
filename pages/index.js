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

  const [filters, setFilters] = useState([]);

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
              <Typography variant='h4' sx={{ textAlign: "center" }}>
                Beer List
              </Typography>

              <p>Filters:</p>

              <ButtonGroup>
                <Button variant='contained'>Pale</Button>
                <Button variant='contained'>Amber</Button>
                <Button variant='contained'>Copper</Button>
                <Button variant='contained'>Brown</Button>
                <Button variant='contained'>Very Dark</Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button variant='contained'>Cider</Button>
                <Button variant='contained'>Lager</Button>
              </ButtonGroup>
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
