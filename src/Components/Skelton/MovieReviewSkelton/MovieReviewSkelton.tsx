import {
  Card,
  CardContent,
  CardHeader,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";

const MovieReviewSkelton: React.FC = () => {
  return (
    <Card sx={{ border: "1px solid #ccc", marginBottom: 2 }}>
      <CardHeader
        sx={{ borderBottom: "1px solid #ccc" }}
        avatar={<Skeleton variant="circular" width={40} height={40} />}
        title={<Skeleton width="80%" />}
        subheader={<Skeleton width="50%" />}
      />
      <CardContent>
        <Typography variant="body1">
          <Skeleton variant="text" />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieReviewSkelton;
