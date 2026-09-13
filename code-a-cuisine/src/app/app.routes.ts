import { Routes } from '@angular/router';
import { LandingPage } from './pages/home-page/landing-page';
import {GenerateRecipe} from './pages/generate-recipe/generate-recipe';

export const routes: Routes = [
  { path: '', component: LandingPage },
  {path: 'generate-recipe', component: GenerateRecipe}
];
