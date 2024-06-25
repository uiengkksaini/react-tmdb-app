import { Box, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        background: "#031d33",
        color: "#ccc",
        paddingY: "24px",
      }}
    >
      <Container maxWidth={"xl"}>
        <Grid container sx={{ textAlign: "center" }}>
          <Grid item sm={6} xs={12}>
            &copy; copyright@2024 All rights reserved.
          </Grid>
          <Grid item sm={3} xs={6}>
            <Link
              to="contactus"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Contact Us
            </Link>
          </Grid>
          <Grid item sm={3} xs={6}>
            <Link
              to="aboutus"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              About Us
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
