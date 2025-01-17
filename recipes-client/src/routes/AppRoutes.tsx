import { RouteObject, useRoutes } from "react-router-dom";

import { authRoutes } from "./authRoutes";
import { recipesRoutes } from "./recipesRoutes";
import { aboutUsRoutes } from "./aboutUsRoutes";

export const AppRoutes = () => {
  const routes: RouteObject[] = [
    ...aboutUsRoutes,
    ...authRoutes,
    ...recipesRoutes,
  ];

  const element = useRoutes(routes);

  return <>{element}</>;
};
