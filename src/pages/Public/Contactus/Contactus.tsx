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
import ReactHelmet from "../../../Components/ReactHelmet/ReactHelmet";
import { useFormik } from "formik";
import { contactusSchema } from "./schema";

const Contactus: React.FC = () => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        mobileNo: "",
        message: "",
      },
      validationSchema: contactusSchema,
      onSubmit: (value, { resetForm }) => {
        console.log("ContactUs:->", value);
        resetForm();
      },
    });
  return (
    <Container maxWidth="xl">
      <ReactHelmet detail={{ title: "Contactus- MyTMDB App" }} />

      <Grid container justifyContent="center" my={5}>
        <Grid item xs={12} sm={8} md={7} lg={6} xl={6}>
          <Paper elevation={4} sx={container}>
            <form onSubmit={handleSubmit}>
              <Typography variant="h4" mb={2}>
                Contact Us
              </Typography>
              <TextField
                label="Full Name"
                placeholder="Please enter your name"
                fullWidth
                sx={marginBottom}
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
              <TextField
                label="Email"
                placeholder="Please enter your email"
                fullWidth
                sx={marginBottom}
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                label="Mobile Number"
                placeholder="Please enter your mobile number"
                fullWidth
                type="number"
                sx={marginBottom}
                name="mobileNo"
                value={values.mobileNo}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.mobileNo && Boolean(errors.mobileNo)}
                helperText={touched.mobileNo && errors.mobileNo}
              />
              <TextField
                label="Write your message"
                placeholder="Please type your message"
                multiline
                maxRows={4}
                fullWidth
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.message && Boolean(errors.message)}
                helperText={touched.message && errors.message}
              />

              <Box textAlign="center">
                <Button
                  variant="contained"
                  color="success"
                  sx={buttonAlignment}
                  type="submit"
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contactus;
