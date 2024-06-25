import { Close } from "@mui/icons-material";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import { modalStyle, videoStyle } from "./styles";
import { useEffect, useState } from "react";
import tmdbAxios from "../../tmdbAxios";
import { MovieModalProps, MovieVideoProps } from "./types";

const MovieModal: React.FC<MovieModalProps> = ({
  isOpen,
  onCloseModal,
  movieId,
}) => {
  const [movieVideo, setMovieVideo] = useState<MovieVideoProps | null>(null);

  useEffect(() => {
    const getMovieDetail = async () => {
      try {
        const res = await tmdbAxios.get(`movie/${movieId}/videos`);
        const videos = res?.data?.results;

        const youtubeVideo = videos.find(
          (video: MovieVideoProps) =>
            video.site === "YouTube" && video.type === "Trailer"
        );

        if (youtubeVideo) {
          setMovieVideo(youtubeVideo);
        }
      } catch (error) {
        console.error("Failed to fetch movie videos:", error);
      }
    };

    getMovieDetail();
  }, [movieId]);

  return (
    <Modal
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
            marginBottom: 2,
          }}
        >
          <Typography variant="h5" color="#fff">
            Play Trailer
          </Typography>
          <IconButton color="error" onClick={onCloseModal}>
            <Close />
          </IconButton>
        </Box>
        <iframe
          style={videoStyle}
          src={`https://www.youtube.com/embed/${movieVideo?.key}`}
          title={movieVideo?.name}
          allowFullScreen
        ></iframe>
      </Box>
    </Modal>
  );
};

export default MovieModal;
