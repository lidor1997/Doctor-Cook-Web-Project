import { aboutUsPaths } from "./aboutUsRoutes";
import { authPaths } from "./authRoutes/paths";
import { recipesPaths } from "./recipesRoutes";

export const routes = {
  aboutUs: aboutUsPaths,
  auth: authPaths,
  recipes: recipesPaths,
} as const;
