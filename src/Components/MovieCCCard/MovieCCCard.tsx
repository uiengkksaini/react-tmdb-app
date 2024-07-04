import { Box, Typography } from "@mui/material";
import { MovieCastCardProps } from "./interface";
import { IMAGE_BASE_URL } from "../../const";
import { Link } from "react-router-dom";
import { container, imageContainerStyle, imageStyle, linkStyle } from "./style";

const MovieCCCard: React.FC<MovieCastCardProps> = ({ person }) => {
const person_name=  person.name.split(' ').join('-');  
  return (
    <Box sx={container}>
      <Link to={`/personal-info/${person.id}-${person_name}`}>
        <Box sx={imageContainerStyle}>
          <img
            src={`${IMAGE_BASE_URL}${person?.profile_path}`}
            style={imageStyle}
            alt={person?.character || person?.job}
          />
        </Box>
      </Link>
      <Box ml={2}>
        <Link to={`/personal-info/${person.id}-${person_name}`} style={linkStyle}>
          {person?.character || person?.job}
        </Link>
        <Typography variant="body1">{person?.name}</Typography>
      </Box>
    </Box>
  );
};

export default MovieCCCard;
