import { Rating } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const BeerRating = ({ id, ratings, updateRatings }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
      <Rating
        name={id}
        size='large'
        onChange={(event, newValue) => updateRatings(newValue)}
        value={ratings?.[id]}
      />
    </Box>
  );
};

export default BeerRating;
