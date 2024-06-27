import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import tmdbAxios from "../../../tmdbAxios";
import Loader from "../../../Components/Loader/Loader";
import { IMAGE_BASE_URL } from "../../../const";
import SimiliarMovies from "../SimiliarMovies/SimiliarMovies";
import MovieStatus from "../MovieStatus/MovieStatus";
import MovieKeywords from "../MovieKeywords/MovieKeywords";
import { PlayArrow } from "@mui/icons-material";
import MovieModal from "../../../Components/MovieModal/MovieModal";
import MovieRecommendation from "../MovieRecommendation/MovieRecommendation";
import MovieTopCast from "../MovieTopCast/MovieTopCast";
import MovieReview from "../MovieReview/MovieReview";
import { Genre, MovieDetailProps } from "../../../shared/interface/interface";
import {
  backdropStyle,
  gradient,
  playButton,
  posterContent,
  posterImage,
  sliderContainer,
} from "./style";
import ReactHelmet from "../../../Components/ReactHelmet/ReactHelmet";

const MovieDetail = () => {
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState<MovieDetailProps | null>(null);
  const { movieID } = useParams();
  const [modal, setModal] = useState<boolean>(false);
  const closeModalHandler = (): void => {
    setModal(false);
  };

  useEffect(() => {
    const getMovieDetail = async () => {
      setLoading(true);
      try {
        const res = await tmdbAxios.get(`/movie/${movieID}`);
        if (res.data !== (null && undefined)) {
          setMovieDetail(res.data);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getMovieDetail();
  }, [movieID]);

  // extracting year from release date
  const fullYear = new Date(movieDetail?.release_date ?? "").getFullYear();

  // convert video runtime in hour and minute
  const videoLength = (runtime: number = 0): string => {
    if (runtime <= 0) return "Unknown";
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return runtime >= 60 ? `${hours}h ${minutes}m` : `${minutes}m`;
  };
  return (
    <Box>
      <ReactHelmet detail={{ title: `${movieDetail?.title ?? ""}` }} />

      {loading ? (
        <Loader />
      ) : (
        <Box>
          <Box
            sx={[
              backdropStyle,
              {
                backgroundImage: `url(${IMAGE_BASE_URL}${movieDetail?.backdrop_path})`,
              },
            ]}
          >
            <Box sx={gradient}>
              <Container maxWidth="xl">
                <Box sx={sliderContainer}>
                  <Box sx={posterImage}>
                    <img
                      src={`${IMAGE_BASE_URL}${movieDetail?.poster_path}`}
                      alt={movieDetail?.title}
                      height={450}
                      width={300}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h3">
                      <Link
                        to={""}
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        {movieDetail?.original_title}
                      </Link>
                      <Typography variant="h3" component="span" color="#ccc">
                        ({fullYear})
                      </Typography>
                    </Typography>
                    <Box sx={posterContent}>
                      <Typography component="span" variant="body1">
                        {movieDetail?.release_date}
                      </Typography>
                      <Typography component="span" variant="body1">
                        (
                        {movieDetail?.origin_country
                          .map((country: string) => country)
                          .join(",")}
                        )
                      </Typography>
                      <Typography component="span" variant="body1">
                        {movieDetail?.genres
                          .map((genre: Genre) => genre.name)
                          .join(", ")}
                      </Typography>
                      <Typography component="span" variant="body1">
                        {videoLength(movieDetail?.runtime)}
                      </Typography>
                    </Box>
                    <Box>
                      <Box sx={playButton} onClick={() => setModal(true)}>
                        <PlayArrow /> Play Trailer
                      </Box>
                      <MovieModal
                        isOpen={modal}
                        onCloseModal={closeModalHandler}
                        movieId={movieDetail?.id}
                      />
                    </Box>
                    <Box>
                      <Typography variant="body1" mt={2} color="#ccc">
                        {movieDetail?.tagline}
                      </Typography>
                      <Typography variant="h5" mt={1} color="#fff">
                        Overview
                      </Typography>
                      <Typography variant="body1" color="#ccc">
                        {movieDetail?.overview}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Container>
            </Box>
          </Box>
          <Container maxWidth="xl">
            <Grid container>
              <Grid item xs={12} sm={8} lg={9}>
                {/* top cast movies */}
                <MovieTopCast movieId={movieDetail?.id} />
                {/* movie review */}
                <MovieReview movieId={movieDetail?.id} />
                {/* similiar movies */}
                <SimiliarMovies movieId={movieDetail?.id} />
                {/* recommended moviesF */}
                <MovieRecommendation movieId={movieDetail?.id} />
              </Grid>
              <Grid item xs={12} sm={4} lg={3} mt={10} mb={4} pl={4}>
                {/* moviestatus */}
                <MovieStatus movie={movieDetail} />
                {/* movie keywords */}
                <MovieKeywords movieId={movieDetail?.id} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default MovieDetail;
