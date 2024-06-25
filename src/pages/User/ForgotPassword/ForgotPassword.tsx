import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { buttonAlignment, container, marginBottom } from "../Register/style";
import { Helmet } from "react-helmet";

const ForgotPassword: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <Grid container justifyContent="center" my={5}>
        <Grid item xs={12} sm={8} md={7} lg={6} xl={6}>
          <Paper elevation={4} sx={container}>
            <Typography variant="h4" mb={2}>
              Forgot Password
            </Typography>
            <TextField
              label="Email ID"
              placeholder="Enter your name"
              fullWidth
              type="email"
              sx={marginBottom}
            />
            <Box textAlign="center">
              <Button variant="contained" color="success" sx={buttonAlignment}>
                Send
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ForgotPassword;
