import { RecipeIngredient } from './recipe-ingredient';

export interface Recipe {
  id: string;
  title: string;
  cooking_time: number;
  portions: number;
  persons: number;
  tags: string[];
  nutrition_per_portion: NutritionItem[];
  your_ingredients: RecipeIngredient[];
  extra_ingredients: RecipeIngredient[];
  steps: StepItem[];
}

interface StepItem {
  title: string;
  description: string;
  chef: string;
}

interface NutritionItem {
  kcal: number;
  protein: number;
  fat: number;
  carbs: number;
}
