import { useNavigate } from "react-router-dom";
import { RecipeType } from "../../../models";
import { HeartOutlined } from "./HeartOutlined";
import { useUser } from "../../../../../context";
import { Heart } from "./Heart";
import { updateFavorites } from "../../../api";
import { appStorage } from "../../../../../services";
import { loginByToken } from "../../../../auth/api";

type RecipeCardProps = {
  recipe: RecipeType;
};

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const navigate = useNavigate();
  const { user, handleUser } = useUser();

  const handleNavigateToRecipe = () => {
    navigate(`/recipes/${recipe._id}`);
  };

  const onFavoriteClick = async () => {
    try {
      await updateFavorites({ recipeId: recipe._id });

      const token = appStorage.getToken();

      if (token) {
        const user = await loginByToken();

        if (user) {
          handleUser(user);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const isFavorite = user?.favorites.includes(recipe._id);

  return (
    <div className="flex justify-center pt-4 sm:pt-6 md:pt-10">
      <div className="dark:bg-[#2A3236] dark:border-white flex flex-col sm:flex-row w-full border border-amber-800 rounded bg-[#FFF6E0] shadow-xl">
        {/* Image Container */}
        <img
          className="w-full lg:h-[250px] sm:w-[200px] h-[340px] sm:h-[100%] object-cover"
          src={recipe.image}
          alt={recipe.name}
        />

        {/* Content Container */}
        <div className="flex flex-col w-full p-4 sm:p-6">
          <div className="flex justify-between items-center">
            <h2 className="dark:text-white text-lg sm:text-xl font-bold">
              {recipe.name}
            </h2>
            <div
              className="h-7 color-white cursor-pointer"
              onClick={onFavoriteClick}
            >
              {isFavorite ? <Heart /> : <HeartOutlined />}
            </div>
          </div>
          <p className="dark:text-white text-gray-700 mt-2 text-base sm:text-lg mb-3 sm:mb-5 font-ptSerif">
            {recipe.description}
          </p>

          {/* Icons and Info */}
          <div className="space-y-2 sm:space-y-3">
            <span className="flex items-center">
              <img
                className="dark:hidden h-8 sm:h-8"
                src="/images/DarkClock.png"
                alt="DarkClock"
              />
              <img
                className="hidden dark:block h-8 sm:h-8"
                src="/images/LightClock.png"
                alt="LightClock"
              />
              <span className="dark:text-white ml-1 text-base sm:text-lg font-bold">
                Cooking time: {recipe.cookTime} Minutes
              </span>
            </span>
          </div>

          {/* Button Container */}
          <div className="w-full mt-4 sm:mt-auto sm:h-16 relative">
            <button
              id={recipe._id}
              data-recipe={recipe._id}
              onClick={handleNavigateToRecipe}
              className="dark:bg-gray-900 dark:text-white dark:border-white w-full sm:w-40 h-10 rounded-full border border-amber-800 text-amber-800 bg-gray-100 sm:absolute sm:bottom-5 sm:right-5"
            >
              View Full Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
