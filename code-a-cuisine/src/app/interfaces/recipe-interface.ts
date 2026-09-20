export interface RecipeInterface {
  id: string;
  title: string;
  cookingTime: number;
  portions: number;
  persons: number;
  tags: string[];
  nutritionPerPortion: string[];
  yourIngredients: string[];
  extraIngredients: string[];
  steps: StepItem[];
}

interface StepItem {
  title: string;
  description: string;
  chef: string;
}
