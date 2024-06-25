import { Box, Typography } from "@mui/material";
import React from "react";
import { MovieStatusProps } from "./interface";

const MovieStatus: React.FC<MovieStatusProps> = ({ movie }) => {
  return (
    <Box>
      <Box my={2}>
        <Typography variant="h6">Status</Typography>
        <Typography variant="body1" color="text.secondary">
          {movie?.status ?? "N/A"}
        </Typography>
      </Box>
      <Box my={2}>
        <Typography variant="h6">Original Language</Typography>
        <Typography variant="body1" color="text.secondary">
          {movie?.original_language ?? "N/A"}
        </Typography>
      </Box>
      <Box my={2}>
        <Typography variant="h6">Budget</Typography>
        <Typography variant="body1" color="text.secondary">
          ${movie?.budget.toFixed(2) ?? "N/A"}
        </Typography>
      </Box>
      <Box my={2}>
        <Typography variant="h6">Revenue</Typography>
        <Typography variant="body1" color="text.secondary">
          ${movie?.revenue.toFixed(2) ?? "N/A"}
        </Typography>
      </Box>
    </Box>
  );
};

export default MovieStatus;
