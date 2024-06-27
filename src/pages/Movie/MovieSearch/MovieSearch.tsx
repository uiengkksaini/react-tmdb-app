import { Box, Button, Container, TextField, Typography } from "@mui/material";
import {
  mainContainer,
  headerContainer,
  searchContainer,
  searchFieldContainer,
  searchField,
  searchButton,
  resultContainer,
} from "./styles";
import React, { useState } from "react";
import tmdbAxios from "../../../tmdbAxios";
import MovieCardSkelton from "../../../Components/Skelton/MovieCardSkelton/MovieCardSkelton";
import MovieCard from "../../../Components/MovieCard/MovieCard";
import { MovieProps } from "../../../shared/interface/interface";
import DataNotFound from "../../../Components/DataNotFound/DataNotFound";
import globalStyles from "../../../shared/styles/styles.module.css";
import ReactHelmet from "../../../Components/ReactHelmet/ReactHelmet";

const MovieSearch: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<MovieProps[] | null>();
  const [notFound, setNotFound] = useState<boolean>(false);

  // set query value
  const handleSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const queryString = event.target.value.trimStart();
    const pattern = /^[a-zA-Z0-9\s]*$/;
    if (pattern.test(queryString)) {
      setQuery(queryString);
    }
  };

  // calling api
  const searchMovies = async () => {
    if (!query) {
      setNotFound(true);
      setMovies(null);
      return;
    }
    setLoading(true);
    try {
      const response = await tmdbAxios.get(`/search/movie`, {
        params: { query },
      });
      const results = response.data.results;
      if (results && results.length > 0) {
        setMovies(results);
        setNotFound(false);
      } else {
        setMovies(null);
        setNotFound(true);
      }
      setLoading(false);
    } catch (error) {
      console.error("An error occurred while searching for movies.", error);
      setLoading(false);
    }
  };

  const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    searchMovies();
  };

  return (
    <Box sx={mainContainer}>
      <ReactHelmet detail={{ title: "Search Your Movies- MyTMDB App" }} />

      <Box sx={headerContainer}>
        <Container maxWidth="xl">
          <Box sx={searchContainer}>
            <Typography variant="h4" textAlign="center" mb={2}>
              Search your favorite movies
            </Typography>
            <form onSubmit={searchMovies}>
              <Box sx={searchFieldContainer}>
                <TextField
                  id="standard-basic"
                  variant="outlined"
                  sx={searchField}
                  placeholder="Search movies... ex- Avatar"
                  onChange={handleSearchQuery}
                  value={query}
                />
                <Button
                  type="submit"
                  onClick={handleSearch}
                  variant="contained"
                  color="success"
                  sx={searchButton}
                >
                  Search
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </Box>
      <Container maxWidth="xl">
        <Box sx={resultContainer}>
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <MovieCardSkelton key={index} />
              ))
            : movies?.map((movie: MovieProps) => (
                <MovieCard
                  className={globalStyles.width}
                  movie={movie}
                  key={movie.id}
                />
              ))}
        </Box>
        {notFound && <DataNotFound />}
      </Container>
    </Box>
  );
};

export default MovieSearch;
