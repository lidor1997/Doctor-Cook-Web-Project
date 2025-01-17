import { Request } from 'express';
import { UserType } from 'src/features/user/models';

import { RecipeType } from '../models';

export interface CreateRecipesRequestType extends Request {
  body: Omit<RecipeType, '_id'>[];
}

export interface GetRecipesRequestType extends Request {
  user: UserType;
}

export interface GetRecipeRequestType extends Request {
  params: {
    id: string;
  };
}

export interface UpdateRecipeRequestType extends Request {
  params: {
    id: string;
  };
  body: Partial<Omit<RecipeType, '_id'>>;
}

export interface UpdateFavoritesRequestType extends Request {
  params: {
    id: string;
  };
  user: UserType;
}
