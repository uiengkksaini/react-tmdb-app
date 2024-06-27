import { Box, Container, Typography } from "@mui/material";
import { aboutus } from "./style";
import ReactHelmet from "../../../Components/ReactHelmet/ReactHelmet";

const Aboutus: React.FC = () => {
  return (
    <Box>
      <ReactHelmet detail={{ title: "Aboutus- MyTMDB App" }} />

      <Box sx={aboutus}></Box>
      <Container maxWidth={"xl"}>
        <Box>
          <Typography variant="h3" mt={4}>
            Let's talk about TMDB
          </Typography>
          <Typography variant="body1" mt={2}>
            The Movie Database (TMDB) is a community built movie and TV
            database. Every piece of data has been added by our amazing
            community dating back to 2008. TMDB's strong international focus and
            breadth of data is largely unmatched and something we're incredibly
            proud of. Put simply, we live and breathe community and that's
            precisely what makes us different.
          </Typography>
        </Box>
        <Box my={5}>
          <Typography variant="h5">The TMDB advantage</Typography>
          <ol>
            <li>
              Every year since 2008, the number of contributions to our database
              has increased (check out our last years wrap!) With over 1,500,000
              developers and companies using our platform, TMDB has become a
              premiere source for metadata.
            </li>
            <li>
              Along with extensive metadata for movies, TV shows and people, we
              also offer one of the best selections of high resolution posters
              and fanart. On average, over 1,000 images are added every single
              day.
            </li>
            <li>
              We're international. While we officially support 39 languages we
              also have extensive regional data. Every single day TMDB is used
              in over 180 countries.
            </li>
            <li>
              Our community is second to none. Between our staff and community
              moderators, we're always here to help. We're passionate about
              making sure your experience on TMDB is nothing short of amazing.
            </li>
            <li>
              Trusted platform. Every single day our service is used by millions
              of people while we process over 3 billion requests. We've proven
              for years that this is a service that can be trusted and relied
              on.
            </li>
          </ol>
        </Box>
      </Container>
    </Box>
  );
};

export default Aboutus;
