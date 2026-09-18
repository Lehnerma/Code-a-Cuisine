import { resource, Service, signal } from '@angular/core';
import { DishPreferencesInterface } from '../interfaces/dish-preferences-interface';

@Service()
export class RecipeGenerateService {
  dishSettings = signal<DishPreferencesInterface | ''>('');
  n8nURLtest='https://linux.tail6bc478.ts.net/webhook-test/ingredients';

  dishResource = resource({
    params: () => this.dishSettings(),
    loader: async ({ params, abortSignal }) => {
      if (!params) return undefined;

      const result = await fetch(this.n8nURLtest, {
        method: 'POST',
        body: JSON.stringify(params),
        signal: abortSignal,
      });

      if (!result.ok) throw new Error('n8n request failed');

      return result.json();
    },
  });

}
