import { Component, inject } from '@angular/core';
import { RecipeGenerateService } from '../../services/recipe-generate-service';
import {LoadingSpinner} from '../../components/loading-spinner/loading-spinner';

@Component({
  imports: [LoadingSpinner],
  selector: 'app-recipe-results',
  styleUrl: './recipe-results.scss',
  templateUrl: './recipe-results.html',
})
export class RecipeResults {
  dishService = inject(RecipeGenerateService);
}
