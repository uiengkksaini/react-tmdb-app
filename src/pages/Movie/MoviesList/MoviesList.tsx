import {
  Box,
  Container,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Helmet } from "react-helmet";
import MovieCard from "../../../Components/MovieCard/MovieCard";
import { useEffect, useState } from "react";
import tmdbAxios from "../../../tmdbAxios";
import MovieCardSkelton from "../../../Components/Skelton/MovieCardSkelton/MovieCardSkelton";
import { MovieProps } from "../../../shared/interface/interface";
import DataNotFound from "../../../Components/DataNotFound/DataNotFound";
import styles from "./styles.module.css";

const Movies: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [moviesList, setMoviesList] = useState<MovieProps[]>([]);
  const [movieCategory, setMovieCategory] = useState<string>("now_playing");

  // getting selected Value
  const handleSelectedValue = (event: SelectChangeEvent) => {
    setMovieCategory(event?.target?.value as string);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await tmdbAxios.get(`/movie/${movieCategory}`, {
          params: { with_original_language: "hi", region: "IN" },
        });
        const results = response.data.results;

        if (results && results.length > 0) {
          setMoviesList(results);
        } else {
          setMoviesList([]);
        }
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchMovies();
  }, [movieCategory]);

  return (
    <Container maxWidth="xl">
      <Helmet>
        <title>Movies List</title>
      </Helmet>
      <Box my={4}>
        <FormControl style={{ marginLeft: "auto" }}>
          <Select value={movieCategory} onChange={handleSelectedValue}>
            <MenuItem value="now_playing">Now Playing </MenuItem>
            <MenuItem value="popular">Popular</MenuItem>
            <MenuItem value="top_rated">Top Rated</MenuItem>
            <MenuItem value="upcoming">Upcoming</MenuItem>
          </Select>
        </FormControl>
        <Box
          my={4}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
          }}
        >
          {loading ? (
            <>
              {Array.from({ length: 20 }).map((_, index) => (
                <MovieCardSkelton key={index} />
              ))}
            </>
          ) : (
            <>
              {moviesList.length > 0 ? (
                moviesList
                  .sort(
                    (a, b) =>
                      new Date(b.release_date).getTime() -
                      new Date(a.release_date).getTime()
                  )
                  .map((movie: MovieProps) => (
                    <MovieCard
                      className={styles.width}
                      movie={movie}
                      key={movie?.id}
                    />
                  ))
              ) : (
                <DataNotFound />
              )}
            </>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Movies;
