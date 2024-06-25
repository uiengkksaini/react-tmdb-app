import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Box, CssBaseline, Stack } from "@mui/material";

const Root: React.FC = () => {
  return (
    <Box>
      <CssBaseline />
      <Stack sx={{ minHeight: "100vh" }} direction={"column"} flex={1}>
        <Header />
        <Box flex={1}>
          <Outlet />
        </Box>
        <Footer />
      </Stack>
    </Box>
  );
};

export default Root;
