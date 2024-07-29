import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layouts/Layout.tsx";
import Home from "./pages/Home.tsx";
import Movie from "./pages/Movie.tsx";
import TvSeries from "./pages/TvSeries.tsx";
import Bookmarks from "./pages/Bookmarks.tsx";
import Search from "./pages/Search.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Movie",
        element: <Movie />,
      },
      {
        path: "/TV-Series",
        element: <TvSeries />,
      },
      {
        path: "/Bookmarks",
        element: <Bookmarks />,
      },
      {
        path: "/search/:title",
        element: <Search />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
