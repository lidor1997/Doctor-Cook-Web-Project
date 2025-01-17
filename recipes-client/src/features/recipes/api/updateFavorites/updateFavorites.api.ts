import { axios } from "../../../../services/axios";

export type UpdateFavoritesResponse = true;

export type UpdateFavoritesRequest = {
  recipeId: string;
};

export async function updateFavorites({
  recipeId,
}: UpdateFavoritesRequest): Promise<UpdateFavoritesResponse> {
  const response = await axios.patch<UpdateFavoritesResponse>(
    `/recipes/favorites/${recipeId}`
  );

  return response.data;
}
