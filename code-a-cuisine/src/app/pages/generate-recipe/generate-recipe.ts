import { Component, computed, inject } from '@angular/core';
import { MainHeader } from '../../components/main-header/main-header';
import { GenerateForm } from '../../components/generate-form/generate-form';
import { Button } from '../../components/button/button';
import { IngredientService } from '../../services/ingredient-service';

@Component({
  imports: [MainHeader, GenerateForm, Button],
  selector: 'app-generate-recipe',
  styleUrl: './generate-recipe.scss',
  templateUrl: './generate-recipe.html',
})
export class GenerateRecipe {
  private ingredientService = inject(IngredientService);

  ingredientList = this.ingredientService.ingredients;
  isNextDisabled = computed(() => this.ingredientService.ingredients().length === 0);
}
