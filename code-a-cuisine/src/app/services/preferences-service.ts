import { Service, signal } from '@angular/core';

const DEFAULT_PORTIONS = 2;
const DEFAULT_PERSONS = 1;

/** Holds the preferences collected on the preferences page. */
@Service()
export class PreferencesService {
  portions = signal(DEFAULT_PORTIONS);
  persons = signal(DEFAULT_PERSONS);
  cooking_time = signal<string[]>([]);
  cuisine = signal<string[]>([]);
  diet = signal<string[]>([]);

  /**
   * Resets every preference back to its initial value.
   */
  reset(): void {
    this.portions.set(DEFAULT_PORTIONS);
    this.persons.set(DEFAULT_PERSONS);
    this.cooking_time.set([]);
    this.cuisine.set([]);
    this.diet.set([]);
  }
}
