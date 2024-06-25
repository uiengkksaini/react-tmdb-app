import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { IMAGE_BASE_URL } from "../../const";
import { useNavigate } from "react-router-dom";
import { RecommendationCardProps } from "./interface";
import globalStyles from "../../shared/styles/styles.module.css";
import fallbackImg from "../../assets/images/image-not-found.png";
import { SyntheticEvent } from "react";

const MovieRecommendationCard: React.FC<RecommendationCardProps> = ({
  recMovie,
}) => {
  const { id, poster_path, title, vote_average } = recMovie;

  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`/movies/${id}`);
  };

  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    if (target.src) {
      target.src = fallbackImg;
    }
  };

  return (
    <Box className={globalStyles.mainContainer}>
      <Card>
        <CardActionArea onClick={() => handleClick(id)}>
          <CardMedia
            component="img"
            src={poster_path ? `${IMAGE_BASE_URL}${poster_path}` : fallbackImg}
            height={140}
            width={250}
            alt={title}
            onError={handleError}
          />
          <CardContent>
            <Box className={globalStyles.contentContainer}>
              <Typography className={globalStyles.textEllipsis}>
                {title}
              </Typography>
              <Typography variant="body2">
                {(vote_average * 10).toFixed(0)}%
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default MovieRecommendationCard;
