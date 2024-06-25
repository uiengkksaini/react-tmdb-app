import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import { MovieCardProps } from "./interface";
import { IMAGE_BASE_URL } from "../../const";
import { useNavigate } from "react-router-dom";
import globalStyles from "../../shared/styles/styles.module.css";
import fallbackImg from "../../assets/images/image-not-found.png";

const MovieCard: React.FC<MovieCardProps> = ({ movie, className }) => {
  const { poster_path, title, release_date } = movie || {};

  const navigate = useNavigate();
  const handleNavigate = (id: number) => {
    navigate(`/movies/${id}`);
  };

  return (
    <Card className={className}>
      <CardActionArea onClick={() => handleNavigate(movie.id)}>
        <CardMedia
          component="img"
          height="194"
          image={poster_path ? `${IMAGE_BASE_URL}/${poster_path}` : fallbackImg}
          alt={title}
        />
        <CardContent>
          <Typography className={globalStyles.textEllipsis}>{title}</Typography>
          <Typography variant="body1" color="text.secondary">
            {release_date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
