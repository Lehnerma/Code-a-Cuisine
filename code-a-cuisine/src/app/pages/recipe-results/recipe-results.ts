import { Component, inject, signal } from '@angular/core';
import { RecipeGenerateService } from '../../services/recipe-generate-service';
import { LoadingSpinner } from '../../shared/loading-spinner/loading-spinner';
import { MainHeader } from '../../components/main-header/main-header';
import { Dialog } from '../../shared/dialog/dialog';
import { RecipeCard } from '../../shared/recipe-card/recipe-card';
import { Button } from '../../components/button/button';

@Component({
  imports: [LoadingSpinner, MainHeader, Dialog, RecipeCard, Button],
  selector: 'app-recipe-results',
  styleUrl: './recipe-results.scss',
  templateUrl: './recipe-results.html',
})
export class RecipeResults {
  dishService = inject(RecipeGenerateService);
  dishResource = this.dishService.dishResource;
  isLoading = signal(this.dishResource.isLoading());
}
