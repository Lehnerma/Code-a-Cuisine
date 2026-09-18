import { Component, inject } from '@angular/core';
import { RecipeGenerateService } from '../../services/recipe-generate-service';

@Component({
  imports: [],
  selector: 'app-recipe-results',
  styleUrl: './recipe-results.scss',
  templateUrl: './recipe-results.html',
})
export class RecipeResults {
  dishService = inject(RecipeGenerateService);
}
