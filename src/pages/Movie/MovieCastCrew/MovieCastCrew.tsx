import { Box, Container, Typography } from "@mui/material";
import { castCrewGradient, castCrewHeader, container, flex } from "./style";
import { useEffect, useState } from "react";
import tmdbAxios from "../../../tmdbAxios";
import {
  MovieDetailProps,
  MovieTopCastProps,
} from "../../../shared/interface/interface";
import { Link, useParams } from "react-router-dom";
import DataNotFound from "../../../Components/DataNotFound/DataNotFound";
import Loader from "../../../Components/Loader/Loader";
import MovieCCCard from "../../../Components/MovieCCCard/MovieCCCard";
import { IMAGE_BASE_URL } from "../../../const";
import { KeyboardBackspace } from "@mui/icons-material";
import ReactHelmet from "../../../Components/ReactHelmet/ReactHelmet";

const MovieCastCrew: React.FC = () => {
  const params = useParams();
  const id = params.movieID;

  const [loading, setLoading] = useState<boolean>(true);
  const [castCrew, setCastCrew] = useState<MovieTopCastProps | null>(null);
  const [movie, setMovie] = useState<MovieDetailProps | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);

  const getCastAndCrew = async () => {
    setLoading(true);
    try {
      const response = await tmdbAxios.get(`/movie/${id}/credits`);
      const castResults = response?.data?.cast;
      const crewResults = response?.data?.crew;
      const condition =
        castResults &&
        crewResults &&
        castResults.length > 0 &&
        crewResults.length > 0;
      if (condition) {
        setCastCrew({ cast: castResults, crew: crewResults });
        setNotFound(false);
      } else {
        setCastCrew({ cast: [], crew: [] });
        setNotFound(true);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cast and crew:", error);
      setLoading(false);
    }
  };
  const fetchMovieDetail = async () => {
    try {
      const response = await tmdbAxios.get(`/movie/${id}`);
      const results = response.data;
      if (results) {
        setMovie(results);
      } else {
        setMovie(null);
      }
    } catch (error) {
      console.error("Failed to fetch movie detail");
    }
  };
  useEffect(() => {
    getCastAndCrew();
    fetchMovieDetail();
  }, [id]);

  return (
    <Box>
      <ReactHelmet detail={{ title: `${movie?.title ?? ""}` }} />

      <Box
        sx={[
          {
            backgroundImage: `url(${IMAGE_BASE_URL}${movie?.backdrop_path})`,
          },
          castCrewHeader,
        ]}
      >
        <Box sx={castCrewGradient}>
          <Link to={`/movies/${id}`}>
            <img
              style={{ height: 80, width: 56 }}
              src={`${IMAGE_BASE_URL}${movie?.poster_path}`}
            />
          </Link>
          <Box>
            <Link
              to={`/movies/${id}`}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <Typography variant="h4">
                {movie?.title}
                <span>
                  ({new Date(`${movie?.release_date}`).getFullYear()})
                </span>
              </Typography>
            </Link>
            <Link
              to={`/movies/${id}`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                gap: 1,
                color: "#ddd",
              }}
            >
              <KeyboardBackspace />
              <Typography variant="h6">Back to main</Typography>
            </Link>
          </Box>
        </Box>
      </Box>
      <Container maxWidth="xl">
        <Box sx={container}>
          <Box sx={flex}>
            <Typography variant="body1" mb={2}>
              Cast({castCrew?.cast.length})
            </Typography>
            {loading ? (
              <Loader />
            ) : (
              <Box>
                {castCrew?.cast.map((cas, index) => (
                  <MovieCCCard person={cas} key={index} />
                ))}
              </Box>
            )}
            {notFound && <DataNotFound />}
          </Box>
          <Box sx={flex}>
            <Typography variant="body1" mb={2}>
              Crew({castCrew?.crew.length})
            </Typography>
            {loading ? (
              <Loader />
            ) : (
              <Box>
                {castCrew?.crew.map((cre, index) => (
                  <MovieCCCard person={cre} key={index} />
                ))}
              </Box>
            )}
            {notFound && <DataNotFound />}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MovieCastCrew;
