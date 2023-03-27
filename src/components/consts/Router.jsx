import React from "react";
import { useRoutes } from "react-router-dom";
import App from "../../App";
import NotFound from "../../NotFound";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: [<Navbar />, <Footer />],
      children: [
        {
          index: true,
          element: <App />,
        },
        {
          path: "not-found",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return routes;
};

export default Router;
