import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Box } from "@mui/system";

const BeerCard = ({ img, name, description, style, alcohol, status }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexGrow: 1,
        pt: "30px",
        boxShadow:
          " rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      }}
    >
      <Box sx={{ width: "200px", position: "relative" }}>
        <Image src={img} alt={name} layout='fill' objectFit='contain' />
      </Box>

      {/* <CardMedia
        component='img'
        sx={{ height: "175px" }}
        image={img}
        alt={name}
      /> */}
      <CardContent>
        {status ? (
          <Typography gutterBottom variant='h5' component='div'>
            {name}
          </Typography>
        ) : (
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            sx={{ "text-decoration": "line-through" }}
          >
            {name}
          </Typography>
        )}
        <Typography variant='body2' color='text.secondary'>
          {style}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {alcohol}%
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
        <Rating name='size-large' size='large' />
      </CardContent>
    </Card>
  );
};

export default BeerCard;
