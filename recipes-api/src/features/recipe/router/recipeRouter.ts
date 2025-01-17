import { Router } from 'express';

import { auth } from '../../../middleware';
import {
  createRecipes,
  getFavoritesRecipes,
  getRecipe,
  getRecipes,
  updateFavorites,
  updateRecipe,
} from '../controller';

const recipeRouter = Router();

recipeRouter.get('/', getRecipes);
recipeRouter.get('/favorites', auth, getFavoritesRecipes);
recipeRouter.get('/:id', getRecipe);
recipeRouter.post('/', createRecipes);
recipeRouter.patch('/:id', updateRecipe);
recipeRouter.patch('/favorites/:id', auth, updateFavorites);

export { recipeRouter };
