import { CanActivateFn, Router } from '@angular/router';
import { IngredientService } from '../services/ingredient-service';
import { inject } from '@angular/core';

export const ingredientsGuard: CanActivateFn = () => {
  const ingredientService = inject(IngredientService);
  const router = inject(Router);

  if (ingredientService.ingredients().length > 1) return true;

  return router.createUrlTree(['/generate-recipe']);
};
