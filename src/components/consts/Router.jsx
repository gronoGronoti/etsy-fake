import React from "react";
import { useRoutes } from "react-router-dom";
import App from "../../App";
import NotFound from "../../NotFound";
import ArticlePage from "../article-page/ArticlePage";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Router = (props) => {
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
          path: "listing/:id",
          element: <ArticlePage />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return routes;
};

export default Router;
