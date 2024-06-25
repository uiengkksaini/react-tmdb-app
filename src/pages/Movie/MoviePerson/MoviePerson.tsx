import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbAxios from "../../../tmdbAxios";
import { MovieProps, PersonDetail } from "../../../shared/interface/interface";
import { IMAGE_BASE_URL } from "../../../const";
import MovieCard from "../../../Components/MovieCard/MovieCard";
import globalStyles from "../../../shared/styles/styles.module.css";
import Loader from "../../../Components/Loader/Loader";
import { Helmet } from "react-helmet";

const MoviePerson: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [person, setPerson] = useState<PersonDetail | null>(null);
  const [knownFor, setKnownFor] = useState<MovieProps[] | null>(null);

  const params = useParams();
  const person_id = params.movieID?.split("-")[0];

  const fetchPerson = async () => {
    setLoading(true);
    try {
      const response = await tmdbAxios.get(`/person/${person_id}`);
      const results = response.data || [];
      if (results) {
        setPerson(results);
      } else {
        setPerson(null);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  const fetchPersonKnowFor = async () => {
    setLoading(true);
    try {
      const response = await tmdbAxios.get(
        `/person/${person_id}/movie_credits`
      );
      const results = response.data.cast;

      if (results) {
        setKnownFor(results);
      } else {
        setKnownFor(null);
      }
    } catch (error) {
      console.error("Failed to fetch person known for movie credits", error);
    }
  };
  useEffect(() => {
    fetchPerson();
    fetchPersonKnowFor();
  }, [person_id]);

  return (
    <Container maxWidth="xl">
      <Helmet>
        <title>{`${person?.name ?? ""}`}</title>
      </Helmet>
      <Box sx={{ display: "flex", gap: 3 }} my={5}>
        <Box>
          <Box sx={{ height: 450, width: 300, borderRadius: 8 }}>
            <img
              src={`${IMAGE_BASE_URL}${person?.profile_path}`}
              alt={person?.name}
              style={{
                height: "inherit",
                width: "inherit",
                borderRadius: "8px",
              }}
            />
          </Box>
          <Box mt={2}>
            <Typography variant="h5" mb={2} fontWeight={600}>
              Personal Info
            </Typography>
            <Box mb={3}>
              <Typography variant="h6" fontWeight={600}>
                Known For
              </Typography>
              <Typography variant="body1">
                {person?.known_for_department || "-"}
              </Typography>
            </Box>
            <Box mb={3}>
              <Typography variant="h6" fontWeight={600}>
                Known Credits
              </Typography>
              <Typography variant="body1">
                {person?.popularity.toFixed(0) || "-"}
              </Typography>
            </Box>
            <Box mb={3}>
              <Typography variant="h6" fontWeight={600}>
                Gender
              </Typography>
              <Typography variant="body1">
                {person?.gender === 1 ? "Female" : "Male" || "-"}
              </Typography>
            </Box>
            <Box mb={3}>
              <Typography variant="h6" fontWeight={600}>
                Birthday
              </Typography>
              <Typography variant="body1">{person?.birthday || "-"}</Typography>
            </Box>
            {person?.deathday !== null && (
              <Box mb={3}>
                <Typography variant="h6" fontWeight={600}>
                  Death Day
                </Typography>
                <Typography variant="body1">{person?.deathday}</Typography>
              </Box>
            )}
            <Box mb={3}>
              <Typography variant="h6" fontWeight={600}>
                Place of Birth
              </Typography>
              <Typography variant="body1">
                {person?.place_of_birth || "-"}
              </Typography>
            </Box>
            <Box mb={3}>
              <Typography variant="h6" fontWeight={600}>
                Also Known As
              </Typography>
              <Typography variant="body1">
                {person?.also_known_as
                  .map((aliasName) => aliasName)
                  .join(", ") || "-"}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box overflow="hidden">
          <Typography variant="h4" fontWeight="bold">
            {person?.name}
          </Typography>
          <Box my={3}>
            <Typography variant="h6" mb={1} fontWeight={600}>
              Biography
            </Typography>
            <Typography variant="body1">{person?.biography}</Typography>
          </Box>
          <Box>
            <Typography variant="h6" mb={1} fontWeight={600}>
              Known For
            </Typography>
            <div className={globalStyles.scrollHorizontal}>
              {loading && <Loader />}
              {knownFor
                ?.sort(
                  (a, b) =>
                    new Date(b.release_date).getTime() -
                    new Date(a.release_date).getTime()
                )
                .map((known, index) => (
                  <MovieCard
                    className={globalStyles.minWidth}
                    movie={known}
                    key={index}
                  />
                ))}
            </div>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default MoviePerson;
