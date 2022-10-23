import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";

const BeerCard = ({ img, name, description, style, alcohol, status }) => {
  return (
    <Card sx={{ maxWidth: 345, pt: "30px" }}>
      <CardMedia
        component='img'
        height='100%'
        image={"/images/magpie-best-minikeg.jpg"}
        alt='Magpie Best'
      />
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
