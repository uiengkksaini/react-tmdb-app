import { Box, Typography } from "@mui/material";
import MovieReviewCard from "../../../Components/MovieReviewCard/MovieReviewCard";
import React, { useEffect, useState } from "react";
import tmdbAxios from "../../../tmdbAxios";
import styles from "./styles.module.css";
import {
  MovieIdProps,
  MovieReviewProps,
} from "../../../shared/interface/interface";
import DataNotFound from "../../../Components/DataNotFound/DataNotFound";
import MovieReviewSkelton from "../../../Components/Skelton/MovieReviewSkelton/MovieReviewSkelton";

const MovieReview: React.FC<MovieIdProps> = ({ movieId }) => {
  const [loading, setLoading] = useState<boolean>(true);

  const [movieReviews, setMovieReviews] = useState<MovieReviewProps[] | null>(
    null
  );
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const getMovieReview = async () => {
      setLoading(true);
      try {
        const response = await tmdbAxios.get(`/movie/${movieId}/reviews`);
        const results = response?.data?.results;
        if (results && results.length > 0) {
          setMovieReviews(results);
          setNotFound(false);
        } else {
          setMovieReviews([]);
          setNotFound(true);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getMovieReview();
  }, [movieId]);
  return (
    <Box my={5}>
      <Typography variant="h4">Review</Typography>
      <Box className={styles.movieReviewContainer} my={2}>
        {loading ? (
          Array.from({ length: 5 }).map((_, index: number) => (
            <MovieReviewSkelton key={index} />
          ))
        ) : (
          <>
            {movieReviews?.map((movieReview: MovieReviewProps) => (
              <MovieReviewCard
                movieReview={movieReview}
                key={movieReview?.id}
              />
            ))}
            {notFound && <DataNotFound />}
          </>
        )}
      </Box>
    </Box>
  );
};

export default MovieReview;
