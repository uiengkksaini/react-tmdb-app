import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import LandingPage from "../pages/Public/LandingPage/LandingPage";
import Login from "../pages/User/Login/Login";
import Register from "../pages/User/Register/Register";
import ProtectedRoute from "./ProtectedRoute";
import Movies from "../pages/Movie/MoviesList/MoviesList";
import MovieDetail from "../pages/Movie/MovieDetail/MovieDetail";
import Aboutus from "../pages/Public/Aboutus/Aboutus";
import Contactus from "../pages/Public/Contactus/Contactus";
import AddMovie from "../pages/Movie/AddMovie/AddMovie";
import MovieSearch from "../pages/Movie/MovieSearch/MovieSearch";
import MovieCastCrew from "../pages/Movie/MovieCastCrew/MovieCastCrew";
import MoviePerson from "../pages/Movie/MoviePerson/MoviePerson";
import ForgotPassword from "../pages/User/ForgotPassword/ForgotPassword";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      children: [
        { element: <LandingPage />, index: true },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
        { path: "forgot-password", element: <ForgotPassword /> },
        { path: "aboutus", element: <Aboutus /> },
        { path: "contactus", element: <Contactus /> },
        {
          element: <ProtectedRoute />,
          children: [
            { path: "addMovie", element: <AddMovie /> },
            {
              path: "movies",
              children: [
                { path: "", element: <Movies /> },
                { path: ":movieID", element: <MovieDetail /> },
              ],
            },
            { path: "search", element: <MovieSearch /> },
            { path: "top-cast-crew/:movieID", element: <MovieCastCrew /> },
            { path: "person/:movieID", element: <MoviePerson /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
