import { Box, Chip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import tmdbAxios from "../../../tmdbAxios";
import { MovieKeywordsIDProps, MovieKeywordsProps } from "./types";
import DataNotFound from "../../../Components/DataNotFound/DataNotFound";

const MovieKeywords: React.FC<MovieKeywordsIDProps> = ({ movieId }) => {
  const [keywords, setKeywords] = useState<MovieKeywordsProps[] | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const getMovieKeywords = async () => {
      try {
        const response = await tmdbAxios.get(`/movie/${movieId}/keywords`);
        const results = response?.data?.keywords || [];
        if (results && results.length > 0) {
          setKeywords(results);
          setNotFound(false);
        } else {
          setKeywords([]);
          setNotFound(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getMovieKeywords();
  }, [movieId]);
  return (
    <Box mt={4}>
      <Typography variant="h5" mb={2}>
        Keywords
      </Typography>
      {keywords?.map((movieKey: MovieKeywordsProps) => (
        <Chip
          label={movieKey.name}
          variant="outlined"
          sx={{ marginBottom: 1, marginRight: 1 }}
          key={movieKey?.id}
        />
      ))}
      {notFound && <DataNotFound />}
    </Box>
  );
};

export default MovieKeywords;
