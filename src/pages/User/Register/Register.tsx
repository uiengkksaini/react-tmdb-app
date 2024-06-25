import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { buttonAlignment, container, loginLink, marginBottom } from "./style";
import { Helmet } from "react-helmet";

const Register: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Grid container justifyContent="center" my={5}>
        <Grid item xs={12} sm={8} md={7} lg={6} xl={6}>
          <Paper elevation={4} sx={container}>
            <Typography variant="h4" mb={2}>
              Register
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
              label="Password"
              type="password"
              placeholder="Please enter your password"
              fullWidth
              sx={marginBottom}
            />
            <TextField
              label="Confirm Password"
              type="password"
              placeholder="Please enter confirm password"
              fullWidth
              sx={marginBottom}
            />
            <Box textAlign="center">
              Already Registered? click here to
              <Link to="/login" style={loginLink}>
                Login
              </Link>
            </Box>

            <Box textAlign="center">
              <Button variant="contained" color="success" sx={buttonAlignment}>
                Register
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
