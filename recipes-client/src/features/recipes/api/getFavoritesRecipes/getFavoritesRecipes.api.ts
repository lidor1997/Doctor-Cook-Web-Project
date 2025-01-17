import { axios } from "../../../../services/axios";
import { RecipeType } from "../../models";

export type GetFavoritesRecipesResponse = RecipeType[];

export async function getFavoritesRecipes(): Promise<GetFavoritesRecipesResponse> {
  const response = await axios.get<GetFavoritesRecipesResponse>(
    `/recipes/favorites`
  );

  return response.data;
}
