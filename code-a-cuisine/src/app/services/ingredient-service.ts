import { Service, signal } from '@angular/core';
import { Ingredient } from '../interfaces/ingredient';

/** Holds the ingredients collected on the generate-recipe form. */
@Service()
export class IngredientService {
  ingredients = signal<Ingredient[]>([]);

  /**
   * Appends a new ingredient with a generated id.
   */
  add(ingredient: Omit<Ingredient, 'id'>): void {
    this.ingredients.update((list) => [...list, { ...ingredient, id: crypto.randomUUID() }]);
  }

  /**
   * Updates the fields of the ingredient with the given id.
   */
  update(id: string, changes: Omit<Ingredient, 'id'>): void {
    this.ingredients.update((list) => list.map((item) => (item.id === id ? { ...item, ...changes } : item)));
  }

  /**
   * Removes the ingredient with the given id.
   */
  remove(id: string): void {
    this.ingredients.update((list) => list.filter((item) => item.id !== id));
  }

  /**
   * Clears all collected ingredients.
   */
  reset(): void {
    this.ingredients.set([]);
  }
}
