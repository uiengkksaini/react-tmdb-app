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
import ReactHelmet from "../../../Components/ReactHelmet/ReactHelmet";
import { useFormik } from "formik";
import { loginSchema } from "./schema";

const Login: React.FC = () => {
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        emailId: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: (values, { resetForm }) => {
        console.log("LoggedIn User:->", values);
        resetForm();
      },
    });

  return (
    <Container maxWidth="xl">
      <ReactHelmet detail={{ title: "Login- MyTMDB App" }} />

      <Grid container justifyContent="center" my={5}>
        <Grid item xs={12} sm={8} md={7} lg={6} xl={6}>
          <Paper elevation={4} sx={container}>
            <form onSubmit={handleSubmit}>
              <Typography variant="h4" mb={2}>
                Login
              </Typography>
              <TextField
                label="Email ID"
                placeholder="Enter your name"
                fullWidth
                type="email"
                sx={marginBottom}
                name="emailId"
                value={values.emailId}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.emailId && Boolean(errors.emailId)}
                helperText={touched.emailId && errors.emailId}
              />

              <TextField
                label="Password"
                placeholder="Enter your password"
                fullWidth
                type="password"
                sx={marginBottom}
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <Box textAlign="right">
                <Link to="/forgot-password" style={loginLink}>
                  Forgot Password?
                </Link>
              </Box>
              <Box textAlign="center">
                <Button
                  variant="contained"
                  color="success"
                  type="submit"
                  sx={buttonAlignment}
                >
                  Login
                </Button>
              </Box>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
