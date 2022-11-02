import React from "react";
import { Rating, Typography } from "@mui/material";
import Image from "next/image";
import { Box } from "@mui/system";
import dynamic from "next/dynamic";

const BeerCard = ({
  img,
  name,
  description,
  style,
  alcohol,
  status,
  id,
  ratings,
  setRatings,
}) => {
  const updateRatings = (newValue) => {
    const newEntry = { [id]: newValue };
    setRatings(() => ({ ...ratings, ...newEntry }));
  };

  const BeerRating = dynamic(() => import("./BeerRating"), {
    ssr: false,
  });

  const TitleText = () =>
    status ? (
      <Typography gutterBottom variant='h5'>
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
    );
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        p: 2,
        borderRadius: "5px",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", mb: "15px" }}>
        <Box
          sx={{
            position: "relative",
            width: "100px",
            mr: "15px",
          }}
        >
          <Image src={img} alt={name} layout='fill' objectFit='contain' />
        </Box>
        <Box>
          <Box>
            <TitleText />
          </Box>
          <Box>
            <Typography variant='body1' color='text.secondary'>
              {alcohol}%
            </Typography>
            <Typography variant='body1' color='text.secondary'>
              {style}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mb: "5px", pl: 3 }}>
        <Typography variant='body' color='text.secondary'>
          {description}
        </Typography>
      </Box>
      <BeerRating id={id} ratings={ratings} updateRatings={updateRatings} />
    </Box>
  );
};

export default BeerCard;
