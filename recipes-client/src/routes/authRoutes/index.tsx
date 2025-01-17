import { Navigate, Outlet, RouteObject } from "react-router";

import { authPaths } from "./paths";
import { LoginView, RegisterView } from "../../features/auth/views";
import { routes } from "../routes";
import { useUser } from "../../context";

function Layout() {
  const { user } = useUser();

  if (user?.id) {
    return <Navigate to={routes.recipes.recipes} />;
  }

  return <Outlet />;
}

export const authRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [{ path: authPaths.login, element: <LoginView /> }],
  },
  {
    path: "/",
    element: <Layout />,
    children: [{ path: authPaths.register, element: <RegisterView /> }],
  },
];

export * from "./paths";
