import { Response } from 'express';

import { User } from '../../../features/user/models';
import { catchAsync } from '../../../utils';
import { Recipe } from '../models';

import {
  CreateRecipesRequestType,
  GetRecipesRequestType,
  UpdateFavoritesRequestType,
  UpdateRecipeRequestType,
} from './types';

export const createRecipes = catchAsync(async (req: CreateRecipesRequestType, res: Response) => {
  const recipes = req.body;

  const newRecipes = await Recipe.insertMany(recipes);

  return res.status(201).json(newRecipes);
});

export const getRecipes = catchAsync(async (_req, res: Response) => {
  const recipes = await Recipe.find();

  return res.status(200).json(recipes);
});

export const getFavoritesRecipes = catchAsync(async (req: GetRecipesRequestType, res: Response) => {
  const user = req.user;

  const currentUser = await User.findById(user._id);

  const recipes = await Recipe.find({ _id: { $in: currentUser.favorites } });

  return res.status(200).json(recipes);
});

export const getRecipe = catchAsync(async (req: any, res: Response) => {
  const { id } = req.params;

  const recipe = await Recipe.findById(id);

  if (!recipe) {
    return res.status(404).json({ message: 'Recipe not found' });
  }

  return res.status(200).json(recipe);
});

export const updateRecipe = catchAsync(async (req: UpdateRecipeRequestType, res: Response) => {
  const { id } = req.params;
  const updates = req.body;

  const recipe = await Recipe.findByIdAndUpdate(id, updates, { new: true, runValidators: true });

  if (!recipe) {
    return res.status(404).json({ message: 'Recipe not found' });
  }

  return res.status(200).json(recipe);
});

export const updateFavorites = catchAsync(async (req: UpdateFavoritesRequestType, res: Response) => {
  const { id } = req.params;
  const user = req.user;

  console.log(user);

  const isFavorite = user.favorites.includes(id);

  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    {
      [isFavorite ? '$pull' : '$addToSet']: { favorites: id },
    },
    { new: true },
  );

  res.status(200).json({
    message: isFavorite ? 'Removed from favorites' : 'Added to favorites',
    favorites: updatedUser.favorites,
  });
});
