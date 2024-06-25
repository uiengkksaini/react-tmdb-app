import { Box, Typography } from "@mui/material";
import MovieRecommendationCard from "../../../Components/MovieRecommendationCard/MovieRecommendationCard";
import { useEffect, useState } from "react";
import tmdbAxios from "../../../tmdbAxios";
import globalStyles from "../../../shared/styles/styles.module.css";
import MovieRecommendationSkelton from "../../../Components/Skelton/MovieRecommendationSkelton/MovieRecommendationSkelton";
import { MovieIdProps, MovieProps } from "../../../shared/interface/interface";
import DataNotFound from "../../../Components/DataNotFound/DataNotFound";

const MovieRecommendation: React.FC<MovieIdProps> = ({ movieId }) => {
  const [loading, setLoading] = useState(true);
  const [recommendedMovies, setRecommendedMovies] = useState<
    MovieProps[] | null
  >(null);

  useEffect(() => {
    const fetchRecommendedMovies = async () => {
      setLoading(true);
      try {
        const { data } = await tmdbAxios.get(
          `movie/${movieId}/recommendations`
        );
        const results = data?.results || [];
        if (results && results.length > 0) {
          setRecommendedMovies(results);
        } else {
          setRecommendedMovies([]);
        }
        setLoading(false);
      } catch (error) {
        console.error("Failed to load recommended movies", error);
        setLoading(false);
      }
    };
    if (movieId) {
      fetchRecommendedMovies();
    }
  }, [movieId]);
  return (
    <Box my={5}>
      <Typography variant="h4">Recommendation</Typography>
      <Box my={2}>
        <Box className={globalStyles.scrollHorizontal}>
          {loading ? (
            Array.from({ length: 5 }).map((_, index: number) => (
              <MovieRecommendationSkelton key={index} />
            ))
          ) : (
            <>
              {recommendedMovies && recommendedMovies.length > 0 ? (
                recommendedMovies.map((recMovie: MovieProps) => (
                  <MovieRecommendationCard
                    recMovie={recMovie}
                    key={recMovie?.id}
                  />
                ))
              ) : (
                <DataNotFound />
              )}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MovieRecommendation;
