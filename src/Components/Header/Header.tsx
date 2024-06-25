import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useAuth } from "../../Router/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Login, PowerSettingsNew } from "@mui/icons-material";

function Header() {
  const navigate = useNavigate();
  const { isAuthenticated, login, logout } = useAuth();
  const handleLogin = () => {
    login();
    navigate("movies");
  };
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <AppBar position="sticky" sx={{ background: "#032541" }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ paddingY: "0px", marginX: "0px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flex: 1,
            }}
          >
            <Box>
              <Typography variant="h6" noWrap>
                <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                  MyTMDB
                </Link>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {isAuthenticated && (
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Link
                    to="addMovie"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    AddMovie
                  </Link>
                  <Link
                    to="search"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    Search
                  </Link>
                  <Link
                    to="movies"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    Movies
                  </Link>
                </Box>
              )}
              {!isAuthenticated && (
                <Link
                  to="register"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Register
                </Link>
              )}

              <IconButton
                color="inherit"
                title={isAuthenticated ? "Logout" : "Login"}
                onClick={isAuthenticated ? handleLogout : handleLogin}
              >
                {isAuthenticated ? <PowerSettingsNew /> : <Login />}
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
