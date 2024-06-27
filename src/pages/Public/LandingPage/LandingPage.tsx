import { Container, Box, Typography } from "@mui/material";
import ReactHelmet from "../../../Components/ReactHelmet/ReactHelmet";

const LandingPage: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <ReactHelmet detail={{ title: "Homepage- MyTMDB App" }} />
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
