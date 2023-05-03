import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const HomePage = React.lazy(() => import("../pages/Home"));
const MoviePage = React.lazy(() => import("../pages/Movies"));
const ShowTimesPage = React.lazy(() => import("../pages/ShowTimes"));
const CineAndPrice = React.lazy(() => import("../pages/CineAndPrice"));
const Promotion = React.lazy(() => import("../pages/Promotion"));
const DetailMovie = React.lazy(() => import("../pages/Movies/DetailMovie"));
const ShowTimeDetail = React.lazy(() => import("../pages/ShowTimesDetail"));
const Booking = React.lazy(() => import("../pages/Booking"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/phimdangchieu",
        element: <MoviePage />,
      },
      { path: "/lichchieu", element: <ShowTimesPage /> },
      { path: "/rapvagia", element: <CineAndPrice /> },
      { path: "/khuyenmai", element: <Promotion /> },
      { path: "/phim/:id", element: <DetailMovie /> },
      { path: "/lichchieu/:id", element: <ShowTimeDetail /> },
    ],
  },
  { path: "/booking/:id", element: <Booking /> },
]);

export default router;
