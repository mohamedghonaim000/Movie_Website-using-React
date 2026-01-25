import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../Layout";
import Home from "../../Pages/Home";
import Movies from "./../../Pages/Movies/index";
import TvSeries from "../../Pages/Tv_Series";
import Notfound from "../../Pages/Notfound";
import ContactUs from "../../Pages/Contact_us";
import MovieDetails from "../../Pages/Movies/Movie_Details";
import Favorit from "../../Pages/Favorite";
import Login from "../../Pages/Login";
import SignUp from "../../Pages/SignUp";
const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/movies", element: <Movies /> },
      { path: "/movieDetails/:id", element: <MovieDetails /> },
      { path: "/favorit", element: <Favorit></Favorit> },
      { path: "/tvSeries", element: <TvSeries /> },
      { path: "/contactUs", element: <ContactUs /> },
      { path: "/login", element: <Login /> },
      { path: "/signUp", element: <SignUp /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);
export default function AppRouter() {
  return <RouterProvider router={routes} />;
}
