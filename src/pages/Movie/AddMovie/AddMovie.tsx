import { Box, Container } from "@mui/material";
import { Helmet } from "react-helmet";

const AddMovie = () => {
  return (
    <Box my={4}>
      <Helmet>
        <title>Add Movie</title>
      </Helmet>
      <Container maxWidth="xl"> Add Movies</Container>
    </Box>
  );
};

export default AddMovie;
