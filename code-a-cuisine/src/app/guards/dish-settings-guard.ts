import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RecipeGenerateService } from '../services/recipe-generate-service';

export const dishSettingsGuard: CanActivateFn = () => {
  const router = inject(Router);
  const recipeGenerateService = inject(RecipeGenerateService);

  if (recipeGenerateService.dishSettings() !== undefined) return true;

  return router.createUrlTree(['/preferences']);
};
