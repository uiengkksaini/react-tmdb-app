import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { IMAGE_BASE_URL } from "../../const";
import globalStyles from "../../shared/styles/styles.module.css";
import fallbackImg from "../../assets/images/image-not-found.png";
import { CastCardProps } from "./interface";
import { useNavigate } from "react-router-dom";

const MovieCastCard: React.FC<CastCardProps> = ({ cast }) => {
  const { id, profile_path, character, name } = cast;
  const navigate = useNavigate();
  const navigateToDetail = () => {
    navigate(`/personal-info/${id}-${name.split(" ").join("-")}`);
  };
  return (
    <Card sx={{ height: "250px", minWidth: 150 }}>
      <CardActionArea onClick={navigateToDetail}>
        <CardMedia
          height={175}
          width={150}
          component="img"
          src={profile_path ? `${IMAGE_BASE_URL}${profile_path}` : fallbackImg}
          alt={character}
        />
        <CardContent>
          <Typography
            fontWeight="bold"
            className={globalStyles.textEllipsis}
            variant="body1"
          >
            {character}
          </Typography>
          <Typography
            className={globalStyles.textEllipsis}
            variant="body2"
            color="text.secondary"
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCastCard;
