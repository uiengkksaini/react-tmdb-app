import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { Skeleton } from "@mui/material";
import styles from "../../../shared/styles/styles.module.css";
import React from "react";

const MovieRecommendationSkelton: React.FC = () => {
  return (
    <Box className={styles.mainContainer}>
      <Card>
        <CardActionArea>
          <Skeleton variant="rectangular" height={140} width={250} />
          <CardContent>
            <Box className={styles.contentContainer}>
              <Typography variant="body1" width={"70%"}>
                <Skeleton width="100%" />
              </Typography>
              <Typography variant="body2" width={"20%"}>
                <Skeleton width="100%" />
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default MovieRecommendationSkelton;
