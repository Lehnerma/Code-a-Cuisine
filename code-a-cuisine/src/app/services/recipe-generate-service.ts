import { inject, resource, Service, signal } from '@angular/core';
import { Payload } from '../interfaces/payload';
import { RecipeResponse } from '../models/recipe-response';
import { environment } from '../../environments/environment';
import { IngredientService } from './ingredient-service';
import { PreferencesService } from './preferences-service';

/** Milliseconds to wait for n8n before aborting the request ourselves. */
const REQUEST_TIMEOUT_MS = 120_000;

@Service()
export class RecipeGenerateService {
  /** The ingredient and preference settings submitted for recipe generation. */
  dishSettings = signal<Payload | undefined>(undefined);
  private ingredientService = inject(IngredientService);
  private preferencesService = inject(PreferencesService);

  /** Loads a generated recipe whenever the dish settings change. */
  dishResource = resource<RecipeResponse | undefined, Payload | undefined>({
    params: () => this.dishSettings(),
    loader: async ({ params, abortSignal }) => {
      if (!params) return undefined;

      const result = await fetch(environment.n8nWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
        signal: AbortSignal.any([abortSignal, AbortSignal.timeout(REQUEST_TIMEOUT_MS)]),
      });

      if (!result.ok) throw new Error('n8n request failed');

      return (await result.json()) as RecipeResponse;
    },
  });

  /**
   * Submits the current ingredient and preference settings to generate a recipe.
   */
  submit(): void {
    console.log('test submit');
    this.dishSettings.set({
      ingredients: this.ingredientService.ingredients().map(({ name, serving_size, unit }) => ({ name, serving_size, unit })),
      portions: this.preferencesService.portions(),
      persons: this.preferencesService.persons(),
      cooking_time: this.preferencesService.cooking_time(),
      cuisine: this.preferencesService.cuisine(),
      diet: this.preferencesService.diet(),
    });
    console.log(this.dishSettings());
  }

  /** Resets the ingredients, preferences, and current recipe-generation request. */
  startOver(): void {
    this.ingredientService.reset();
    this.preferencesService.reset();
    this.dishSettings.set(undefined);
  }
}
