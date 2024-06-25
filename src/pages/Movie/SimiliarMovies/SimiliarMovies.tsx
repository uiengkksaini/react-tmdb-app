import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import tmdbAxios from "../../../tmdbAxios";
import MovieCard from "../../../Components/MovieCard/MovieCard";
import globalStyles from "../../../shared/styles/styles.module.css";
import MovieCardSkelton from "../../../Components/Skelton/MovieCardSkelton/MovieCardSkelton";
import DataNotFound from "../../../Components/DataNotFound/DataNotFound";
import { MovieIdProps, MovieProps } from "../../../shared/interface/interface";
import styles from './styles.module.css'

const SimiliarMovies: React.FC<MovieIdProps> = ({ movieId }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [similiarMovies, setSimiliarMovies] = useState<MovieProps[]>([]);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const getSimiliarMovies = async () => {
      setLoading(true);
      try {
        const response = await tmdbAxios.get(`/movie/${movieId}/similar`);
        const results = response?.data?.results || [];
        if (results && results.length > 0) {
          setSimiliarMovies(results);
          setNotFound(false);
        } else {
          setSimiliarMovies([]);
          setNotFound(true);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getSimiliarMovies();
  }, [movieId]);

  return (
    <Box my={5}>
      <Typography variant="h4" mb={2}>
        Similiar Movies
      </Typography>
      <Box className={`${globalStyles.scrollHorizontal}`}>
        {loading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <MovieCardSkelton key={index} />
          ))
        ) : (
          <>
            {similiarMovies.map((similiar: MovieProps) => (
              <MovieCard className={styles.minwidth}  movie={similiar} key={similiar?.id} />
            ))}
            {notFound && <DataNotFound />}
          </>
        )}
      </Box>
    </Box>
  );
};

export default SimiliarMovies;
