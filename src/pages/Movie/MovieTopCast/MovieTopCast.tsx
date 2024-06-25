import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import tmdbAxios from "../../../tmdbAxios";
import globalStyles from "../../../shared/styles/styles.module.css";
import MovieCastCard from "../../../Components/MovieCastCard/MovieCastCard";
import MovieCastCardSkelton from "../../../Components/Skelton/MovieCastCardSkelton/MovieCastCardSkelton";
import DataNotFound from "../../../Components/DataNotFound/DataNotFound";
import {
  CastProps,
  MovieIdProps,
  MovieTopCastProps,
} from "../../../shared/interface/interface";
import { Link } from "react-router-dom";
import { customLink } from "./style";
import { ArrowRightAlt } from "@mui/icons-material";

const MovieTopCast: React.FC<MovieIdProps> = ({ movieId }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [castCrew, setCastCrew] = useState<MovieTopCastProps | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const getCastAndCrew = async () => {
      setLoading(true);
      try {
        const response = await tmdbAxios.get(`/movie/${movieId}/credits`);
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
    getCastAndCrew();
  }, [movieId]);

  return (
    <Box my={5}>
      <Typography variant="h4" mb={2}>
        Top Billed Cast
      </Typography>
      <Box className={globalStyles.scrollHorizontal}>
        {loading ? (
          Array.from({ length: 5 }).map((_, index: number) => (
            <MovieCastCardSkelton key={index} />
          ))
        ) : (
          <>
            <>
              {castCrew?.cast.slice(0, 10).map((cast: CastProps) => (
                <MovieCastCard cast={cast} key={cast?.id} />
              ))}
              {castCrew?.cast?.length > 0 && (
                <Link to={`/top-cast-crew/${movieId}`} style={customLink}>
                  View More <ArrowRightAlt />
                </Link>
              )}
            </>
            {notFound && <DataNotFound />}
          </>
        )}
      </Box>
    </Box>
  );
};

export default MovieTopCast;
