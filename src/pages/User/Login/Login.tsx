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
  loginLink,
  marginBottom,
} from "../../User/Register/style";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Login: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Grid container justifyContent="center" my={5}>
        <Grid item xs={12} sm={8} md={7} lg={6} xl={6}>
          <Paper elevation={4} sx={container}>
            <Typography variant="h4" mb={2}>
              Login
            </Typography>
            <TextField
              label="Email ID"
              placeholder="Enter your name"
              fullWidth
              type="email"
              sx={marginBottom}
            />

            <TextField
              label="Password"
              placeholder="Enter your password"
              fullWidth
              type="password"
              sx={marginBottom}
            />
            <Box textAlign="right">
              <Link to="/forgot-password" style={loginLink}>
                Forgot Password?
              </Link>
            </Box>
            <Box textAlign="center">
              <Button variant="contained" color="success" sx={buttonAlignment}>
                Login
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
