import { Ingredient } from './ingredient';
export interface PayloadInterface {
  ingredients: Omit<Ingredient, 'id'>[];
  portions: number;
  persons: number;
  cookingTime: number;
  cuisine: string;
  diet: string;
}
