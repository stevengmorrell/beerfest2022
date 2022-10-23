import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";

const BeerCard = ({ img, name, description, style, alcohol }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        height='100%'
        image={"/images/magpie-best-minikeg.jpg"}
        alt='Magpie Best'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {name}
        </Typography>
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
