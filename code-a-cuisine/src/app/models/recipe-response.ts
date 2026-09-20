import { RecipeDisplay } from '../interfaces/recipe-display';

export type RecipeResponse = SuccessResponse | InsufficientResponse | ErrorResponse;

interface SuccessResponse {
  status: 'success';
  recipes: RecipeDisplay[];
}

interface InsufficientResponse {
  status: 'insufficient';
}

interface ErrorResponse {
  status: 'error';
}
