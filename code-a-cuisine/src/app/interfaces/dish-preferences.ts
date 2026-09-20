import { Ingredient } from './ingredient';

export interface DishPreferencesInterface {
  ingredients: Ingredient[];
  cooking: string[];
  cuisine: string[];
  diet: string[];
}
