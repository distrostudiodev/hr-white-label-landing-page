import AboutUsPage from "@/pages/AboutUsPage";
import ProductsPage from "@/pages/ProductsPage";
import RootPage from "@/pages/RootPage";
import ServicesPage from "@/pages/ServicesPage";
import WorkDetail from "@/pages/WorkDetail";
import WorksPage from "@/pages/WorksPage";
import { createElement } from "react";
import { PathRouteProps } from "react-router-dom";

const withNavRoutes: Array<PathRouteProps> = [
  {
    path: "/",
    element: createElement(RootPage),
  },
];

const routes: Array<PathRouteProps> = [{}];

export { routes, withNavRoutes };
