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
import ReactHelmet from "../../../Components/ReactHelmet/ReactHelmet";
import { useFormik } from "formik";
import { forgotSchema } from "./schema";

const ForgotPassword: React.FC = () => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        emailId: "",
      },
      validationSchema: forgotSchema,
      onSubmit: (value, { resetForm }) => {
        console.log("Forgot password", value);
        resetForm();
      },
    });

  return (
    <Container maxWidth="xl">
      <ReactHelmet detail={{ title: "Forgot Password- MyTMDB App" }} />

      <Grid container justifyContent="center" my={5}>
        <Grid item xs={12} sm={8} md={7} lg={6} xl={6}>
          <Paper elevation={4} sx={container}>
            <form onSubmit={handleSubmit}>
              <Typography variant="h4" mb={2}>
                Forgot Password
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
              <Box textAlign="center">
                <Button
                  variant="contained"
                  color="success"
                  sx={buttonAlignment}
                  type="submit"
                >
                  Send
                </Button>
              </Box>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ForgotPassword;
