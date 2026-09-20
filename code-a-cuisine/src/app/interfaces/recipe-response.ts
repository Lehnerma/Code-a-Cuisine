import { RecipeDisplayInterface } from './recipe-display-interface';

export type RecipeResponse = SuccessResponse | InsufficientResponse | ErrorResponse;

interface SuccessResponse {
  status: 'success';
  recipes: RecipeDisplayInterface[];
}

interface InsufficientResponse {
  status: 'insufficient';
}

interface ErrorResponse {
  status: 'error';
}
