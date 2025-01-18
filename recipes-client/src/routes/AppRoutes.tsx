import { Navigate, RouteObject, useRoutes } from "react-router-dom";

import { authRoutes } from "./authRoutes";
import { recipesRoutes } from "./recipesRoutes";
import { aboutUsRoutes } from "./aboutUsRoutes";
import { routes as appRoutes } from "./routes";

export const AppRoutes = () => {
  const routes: RouteObject[] = [
    {
      path: "*",
      element: <Navigate to={appRoutes.recipes.recipes} replace />,
    },
    {
      path: "/",
      element: <Navigate to={appRoutes.recipes.recipes} replace />,
    },
    ...aboutUsRoutes,
    ...authRoutes,
    ...recipesRoutes,
  ];

  const element = useRoutes(routes);

  return <>{element}</>;
};
