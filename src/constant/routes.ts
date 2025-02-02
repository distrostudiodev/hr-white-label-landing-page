import RootPage from "@/pages/RootPage";
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
