import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import MoviePage from "../pages/Movies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [{ path: "/movies", element: <MoviePage /> }],
  },
  // {
  //   path: "/movies",
  //   element: <MoviePage />,
  // },
]);

export default router;
