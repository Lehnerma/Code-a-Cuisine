import { Ingredient } from './ingredient';
export interface Payload {
  ingredients: Omit<Ingredient, 'id'>[];
  portions: number;
  persons: number;
  cooking_time: string[];
  cuisine: string[];
  diet: string[];
}
