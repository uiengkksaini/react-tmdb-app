import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import {
  buttonAlignment,
  container,
  marginBottom,
} from "../../User/Register/style";
import { Helmet } from "react-helmet";

const Contactus: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Helmet>
        <title>ContactUs</title>
      </Helmet>
      <Grid container justifyContent="center" my={5}>
        <Grid item xs={12} sm={8} md={7} lg={6} xl={6}>
          <Paper elevation={4} sx={container}>
            <Typography variant="h4" mb={2}>
              Contact Us
            </Typography>
            <TextField
              label="Full Name"
              placeholder="Please enter your name"
              fullWidth
              sx={marginBottom}
            />
            <TextField
              label="Email"
              placeholder="Please enter your email"
              fullWidth
              sx={marginBottom}
            />
            <TextField
              label="Mobile Number"
              placeholder="Please enter your mobile number"
              fullWidth
              type="number"
              sx={marginBottom}
            />
            <TextField
              label="Write your message"
              placeholder="Please type your message"
              multiline
              maxRows={4}
              fullWidth
            />

            <Box textAlign="center">
              <Button variant="contained" color="success" sx={buttonAlignment}>
                Submit
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contactus;
