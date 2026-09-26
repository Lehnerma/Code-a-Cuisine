import { Component, input } from '@angular/core';
import { Button } from '../../components/button/button';

@Component({
  imports: [Button],
  selector: 'app-recipe-card',
  styleUrl: './recipe-card.scss',
  templateUrl: './recipe-card.html',
})
export class RecipeCard {
  recipeNumber = input<number>(1);
  recipeTitle = input<string>();
  cookingTime = input<number | string>(20);
  recipeId = input.required<string>();
}
