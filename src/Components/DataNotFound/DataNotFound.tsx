import { Box, Typography } from "@mui/material";
import { DataNotFoundProps } from "./interface";
import { containerStyle, titleStyle, textStyle } from "./styles";

const DataNotFound: React.FC<DataNotFoundProps> = ({ noData }) => {
  const { title = "No Data Found", message = "Please try after sometime!" } =
    noData || {};
  return (
    <Box sx={containerStyle}>
      <Typography sx={titleStyle} variant="h5">
        {title}
      </Typography>
      <Typography sx={textStyle} variant="body1">
        {message}
      </Typography>
    </Box>
  );
};

export default DataNotFound;
