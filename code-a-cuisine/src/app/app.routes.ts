import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { GenerateRecipe } from './pages/generate-recipe/generate-recipe';
import { PreferencesPage } from './pages/preferences-page/preferences-page';
import { RecipeResults } from './pages/recipe-results/recipe-results';
import { Recipe } from './pages/recipe/recipe';
import { ingredientsGuard } from './guards/ingredients-guard';
import { dishSettingsGuard } from './guards/dish-settings-guard';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'generate-recipe', component: GenerateRecipe },
  { path: 'generate-recipe/preferences', component: PreferencesPage, canActivate: [ingredientsGuard] },
  { path: 'recipe-results', component: RecipeResults, canActivate: [dishSettingsGuard] },
  { path: 'recipe/:id', component: Recipe },
];
