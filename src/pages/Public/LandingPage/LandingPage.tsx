import { Container, Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet";

const LandingPage: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Helmet>
        <title>HomePage</title>
      </Helmet>
      <Box my={5}>
        <Typography variant="h5">LandingPage</Typography>
        <Typography variant="body1">
          Click on login to see the movie list
        </Typography>
      </Box>
    </Container>
  );
};

export default LandingPage;
