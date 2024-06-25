import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Skeleton,
} from "@mui/material";
import React from "react";

const MovieCardSkelton: React.FC = () => {
  return (
    <Card sx={{ minWidth: 300 }}>
      <CardActionArea>
        <Skeleton variant="rectangular" height={194} />
        <CardContent>
          <Typography>
            <Skeleton width="100%" />
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <Skeleton width="60%" />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCardSkelton;
