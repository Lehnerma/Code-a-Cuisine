import { Ingredient } from './ingredient';

export interface DishPreferencesInterface {
  ingredients: Ingredient[];
  cooking: string[];
  cousine: string[];
  diet: string[];
}
