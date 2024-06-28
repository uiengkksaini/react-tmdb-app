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
import ReactHelmet from "../../../Components/ReactHelmet/ReactHelmet";
import { useFormik } from "formik";
import { registerSchema } from "./schema";
import { useState } from "react";
import { RegisterUserProps } from "./interface";

const Register: React.FC = () => {
  const [, setRegisteredUser] = useState<RegisterUserProps | null>(null);

  const { values, handleChange, handleBlur, touched, errors, handleSubmit } =
    useFormik({
      initialValues: {
        user_name: "",
        user_email: "",
        mobile_number: "",
        password: "",
        confirm_password: "",
      },
      validationSchema: registerSchema,
      onSubmit: (values: RegisterUserProps, { resetForm }) => {
        setRegisteredUser(values);
        console.log("Registered User:->", values);
        resetForm();
      },
    });

  return (
    <Container maxWidth="xl">
      <ReactHelmet detail={{ title: "Registration- MyTMDB App" }} />
      <Grid container justifyContent="center" my={5}>
        <Grid item xs={12} sm={8} md={7} lg={6} xl={6}>
          <Paper elevation={4} sx={container}>
            <form onSubmit={handleSubmit}>
              <Typography variant="h4" mb={2}>
                Welcome!
                <Typography variant="body1"> to the MyTMDB App</Typography>
              </Typography>
              <TextField
                label="Full Name"
                placeholder="Please enter your name"
                fullWidth
                name="user_name"
                sx={marginBottom}
                value={values.user_name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.user_name && Boolean(errors.user_name)}
                helperText={touched.user_name && errors.user_name}
              />
              <TextField
                label="Email"
                placeholder="Please enter your email"
                fullWidth
                name="user_email"
                sx={marginBottom}
                value={values.user_email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.user_email && Boolean(errors.user_email)}
                helperText={touched.user_email && errors.user_email}
              />
              <TextField
                label="Mobile Number"
                placeholder="Please enter your mobile number"
                fullWidth
                type="number"
                name="mobile_number"
                sx={marginBottom}
                value={values.mobile_number}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.mobile_number && Boolean(errors.mobile_number)}
                helperText={touched.mobile_number && errors.mobile_number}
              />
              <TextField
                label="Password"
                type="password"
                placeholder="Please enter your password"
                fullWidth
                name="password"
                sx={marginBottom}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <TextField
                label="Confirm Password"
                type="password"
                placeholder="Please enter confirm password"
                fullWidth
                name="confirm_password"
                sx={marginBottom}
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.confirm_password && Boolean(errors.confirm_password)
                }
                helperText={touched.confirm_password && errors.confirm_password}
              />
              <Box textAlign="center">
                Already Registered? click here to
                <Link to="/login" style={loginLink}>
                  Login
                </Link>
              </Box>

              <Box textAlign="center">
                <Button
                  variant="contained"
                  color="success"
                  type="submit"
                  sx={buttonAlignment}
                >
                  Register
                </Button>
              </Box>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
