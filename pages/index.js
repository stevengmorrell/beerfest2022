import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import BeerCard from "../components/BeerCard";
import Heading from "../components/Heading";
import beerData from "../json/beerData.json";

export default function Home() {
  return (
    <Container>
      <Heading />
      <Box>
        <h1>WBHC Beer Festival 2022</h1>
      </Box>
      <Grid container spacing={2} sx={{ background: "#F5B301" }}>
        {beerData.map((beer) => (
          <Grid item key={beer.id}>
            <BeerCard
              item
              xs={12}
              img={beer.img}
              name={beer.name}
              description={beer.description}
              style={beer.style}
              alcohol={beer.alcohol}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
