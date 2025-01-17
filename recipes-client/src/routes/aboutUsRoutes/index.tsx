import { RouteObject } from "react-router";

import { aboutUsPaths } from "./paths";
import { AboutUsView } from "../../features/about/views/AboutUsView";

export const aboutUsRoutes: RouteObject[] = [
  {
    path: aboutUsPaths.aboutUs,
    element: <AboutUsView />,
  },
];

export * from "./paths";
