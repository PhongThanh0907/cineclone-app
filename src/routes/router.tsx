import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const HomePage = React.lazy(() => import("../pages/Home"));
const MoviePage = React.lazy(() => import("../pages/Movies"));
const ShowTimesPage = React.lazy(() => import("../pages/ShowTimes"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/phimdangchieu", element: <MoviePage /> },
      { path: "/lichchieu", element: <ShowTimesPage /> },
    ],
  },
]);

export default router;
