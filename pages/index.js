import {
  Box,
  Card,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import BeerCard from "../components/BeerCard";
import Heading from "../components/Heading";
import beerData from "../json/beerData.json";

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Heading />
      <Container sx={{ backgroundColor: "#FFC40A" }}>
        <Box>
          <Card sx={{ marginBottom: "20px" }}>
            <Typography variant='h4'>WBHC Beer Festival 2022</Typography>
          </Card>

          <Box>
            <Grid
              container
              spacing={2}
              // columnSpacing={{ xs: 0, sm: 1, md: 3 }}
              // rowSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
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
    </React.Fragment>
  );
}
