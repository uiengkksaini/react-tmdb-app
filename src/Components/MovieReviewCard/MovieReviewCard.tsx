import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { IMAGE_BASE_URL } from "../../const";
import React from "react";
import { MovieReviewCardProps } from "./types";

const MovieReviewCard: React.FC<MovieReviewCardProps> = ({ movieReview }) => {
  const {
    author_details: { name, avatar_path, rating, username },
    created_at,
    content,
  } = movieReview;
  return (
    <Card sx={{ border: "1px solid #ccc", marginBottom: 2 }}>
      <CardHeader
        sx={{ borderBottom: "1px solid #ccc" }}
        avatar={
          <Avatar src={IMAGE_BASE_URL + avatar_path} aria-label={username} />
        }
        title={`A review by ${username || name}`}
        subheader={`${rating * 10}% Written by ${
          name || username
        } on ${new Date(created_at).toLocaleDateString()}`}
      />
      <CardContent>
        <Typography variant="body1">{content}</Typography>
      </CardContent>
    </Card>
  );
};

export default MovieReviewCard;
