import { useEffect, useState } from "react";
import { getFavoritesRecipes } from "../../api";
import { RecipeType } from "../../models";
import { RecipeCard } from "../RecipesView/RecipeCard";

export const FavoritesView = () => {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);

  useEffect(() => {
    const getRecipesData = async () => {
      try {
        const recipesResponse = await getFavoritesRecipes();
        setRecipes(recipesResponse);
      } catch (error) {
        console.error(error);
      }
    };
    getRecipesData();
  }, []);

  return (
    <div className="max-w-[1000px] m-auto sm:px-6 h-100 pb-10">
      <div className="h-25 w-full pt-8">
        {/* <!-- use the imported font for h1--> */}
        <h1 className="sm:w-f text-center text-3xl font-pacifico light:text-[#202124] dark:text-white pt-5">
          Your Recipes that you love
        </h1>
      </div>

      {recipes.map((recipe) => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </div>
  );
};
