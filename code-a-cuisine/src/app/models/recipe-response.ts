import { Recipe } from '../interfaces/recipe';

export type RecipeResponse = SuccessResponse | InsufficientResponse | ErrorResponse;

interface SuccessResponse {
  status: 'success';
  recipes: Recipe[];
}

interface InsufficientResponse {
  status: 'insufficient';
}

interface ErrorResponse {
  status: 'error';
}
