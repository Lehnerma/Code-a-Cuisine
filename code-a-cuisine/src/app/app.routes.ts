import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { GenerateRecipe } from './pages/generate-recipe/generate-recipe';
import { PreferencesPage } from './pages/preferences-page/preferences-page';
import { RecipeResults } from './pages/recipe-results/recipe-results';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'generate-recipe', component: GenerateRecipe },
  { path: 'preferences', component: PreferencesPage },
  { path: 'recipe-results', component: RecipeResults },
];
