import { Component, computed, inject } from '@angular/core';
import { RecipeGenerateService } from '../../services/recipe-generate-service';
import { LoadingSpinner } from '../../shared/loading-spinner/loading-spinner';
import { MainHeader } from '../../components/main-header/main-header';
import { Dialog } from '../../shared/dialog/dialog';
import { RecipeCard } from '../../shared/recipe-card/recipe-card';
import { Button } from '../../components/button/button';
import { Tag } from '../../shared/tag/tag';
import { TitleCasePipe } from '@angular/common';

@Component({
  imports: [LoadingSpinner, MainHeader, Dialog, RecipeCard, Button, Tag, TitleCasePipe],
  selector: 'app-recipe-results',
  styleUrl: './recipe-results.scss',
  templateUrl: './recipe-results.html',
})
export class RecipeResults {
  dishService = inject(RecipeGenerateService);
  dishResource = this.dishService.dishResource;
  dishes = this.dishResource.value;
  isLoading = this.dishResource.isLoading;
  recipes = computed(() => {
    const response = this.dishes();
    return response?.status === 'success' ? response.recipes : this.debugging; //todo change to an empty array
  });

  /** Single state the template switches on: load problems first, then the response status. */
  viewState = computed(() => {
    if (this.isLoading()) return 'loading';
    const error = this.dishResource.error();
    if (error) return this.isTimeout(error) ? 'timeout' : 'loadError';
    return this.dishes()?.status ?? 'success'; // todo change to 'idle'
  });

  /**
   * Checks whether a resource error was caused by the request timeout.
   * @param error the error thrown by the resource loader
   */
  private isTimeout(error: Error): boolean {
    const cause = error.cause instanceof Error ? error.cause : error;
    return cause.name === 'TimeoutError';
  }

  /**
   * All tags of all recipes in one flat array, duplicates included.
   * */
  private recipeTags = computed(() => this.recipes().flatMap((recipe) => recipe.tags ?? []));

  /**
   * Unique tags of the current recipes, used in the template to render the available tags.
   * */
  allTags = computed(() => [...new Set(this.recipeTags())]);

  /**
   * only for debugging - claude can ignore it!
   */
  logger(): void {
    console.log(this.dishes());
    console.log('recipes: ', this.recipes());
  }

  //todo delete array - it is only for debugging and testing.
  debugging = [
    {
      idx: 0,
      id: '9ff16bf8-8048-4902-bb69-ca1cbd96ecc7',
      created_at: '2026-09-22 08:48:17.152887+00',
      title: 'Quick Italian Tomato and Basil Pasta',
      cooking_time: 20,
      portions: 4,
      persons: 2,
      tags: ['Italian', 'quick', 'vegetarian'],
      nutrition_per_portion: '{"fat": 18, "kcal": 520, "carbs": 72, "protein": 19}',
      your_ingredients: [
        { name: 'Pasta', unit: 'gram', amount: 100 },
        { name: 'Chees', unit: 'gram', amount: 100 },
        { name: 'Tomatos', unit: 'piece', amount: 4 },
      ],
      extra_ingredients: [
        { name: 'Spaghetti', unit: 'gram', amount: 300 },
        { name: 'Garlic', unit: 'piece', amount: 2 },
        { name: 'Fresh Basil', unit: 'piece', amount: 1 },
        { name: 'cooking oil', unit: 'ml', amount: 3 },
        { name: 'salt', unit: 'to taste', amount: null },
        { name: 'black pepper', unit: 'to taste', amount: null },
      ],
      steps: [
        {
          chef: 'Chef 1',
          title: 'Boiling the Water',
          description: 'Fill a large pot with water, add a pinch of salt, and bring it to a rolling boil.',
        },
        {
          chef: 'Chef 2',
          title: 'Preparing the Aromatics',
          description: 'Dice the Tomatos into small cubes and finely mince the Garlic. Pick the basil leaves from the stems.',
        },
        {
          chef: 'Chef 1',
          title: 'Cooking the Pasta',
          description: 'Add both the 100 gram Pasta and the 300 gram Spaghetti to the boiling water. Cook until al dente, then drain.',
        },
        {
          chef: 'Chef 2',
          title: 'Finishing the Sauce',
          description:
            'Heat cooking oil in a pan, sauté Garlic for 1 minute, add Tomatos and simmer for 5 minutes. Toss with cooked pasta, Chees, and fresh basil.',
        },
      ],
      likes: 20,
    },
    {
      idx: 1,
      id: 'a1d1ff8a-9814-4ea7-a3af-163d4b520205',
      created_at: '2026-09-22 08:48:17.152887+00',
      title: 'Vegan Italian Garlic Tomato Pasta',
      cooking_time: 15,
      portions: 4,
      persons: 2,
      tags: ['Italian', 'quick', 'vegan'],
      nutrition_per_portion: '{"fat": 16, "kcal": 480, "carbs": 70, "protein": 14}',
      your_ingredients: [
        { name: 'Pasta', unit: 'gram', amount: 100 },
        { name: 'Tomatos', unit: 'piece', amount: 4 },
      ],
      extra_ingredients: [
        { name: 'Penne Pasta', unit: 'gram', amount: 300 },
        { name: 'Garlic', unit: 'piece', amount: 3 },
        { name: 'Fresh Parsley', unit: 'piece', amount: 1 },
        { name: 'Pine nuts', unit: 'gram', amount: 30 },
        { name: 'Lemon', unit: 'piece', amount: 1 },
        { name: 'cooking oil', unit: 'ml', amount: 40 },
        { name: 'salt', unit: 'to taste', amount: null },
      ],
      steps: [
        { chef: 'Chef 1', title: 'Pasta Prep', description: 'Boil a large pot of water with salt and cook all pasta (400g total) until al dente.' },
        {
          chef: 'Chef 2',
          title: 'Fresh Toppings',
          description: 'Dice the Tomatos, mince the Garlic, and finely chop the Fresh Parsley. Juice the Lemon.',
        },
        { chef: 'Chef 1', title: 'Toasting Nuts', description: 'Toast the Pine nuts in a dry pan for 2 minutes until fragrant and golden.' },
        {
          chef: 'Chef 2',
          title: 'Assembly',
          description: 'Toss the pasta with cooking oil, Tomatos, Garlic, parsley, lemon juice, and pine nuts. Season with salt.',
        },
      ],
      likes: 17,
    },
    {
      idx: 2,
      id: 'c30e5760-2539-487c-957d-a0e48ff30ecd',
      created_at: '2026-09-22 08:48:17.152887+00',
      title: 'German Style Creamy Cheese Pasta',
      cooking_time: 35,
      portions: 4,
      persons: 2,
      tags: ['German', 'medium', 'vegetarian'],
      nutrition_per_portion: '{"fat": 34, "kcal": 650, "carbs": 75, "protein": 21}',
      your_ingredients: [
        { name: 'Pasta', unit: 'gram', amount: 100 },
        { name: 'Chees', unit: 'gram', amount: 100 },
      ],
      extra_ingredients: [
        { name: 'Egg Noodles', unit: 'gram', amount: 300 },
        { name: 'Yellow Onion', unit: 'piece', amount: 2 },
        { name: 'Heavy cream', unit: 'ml', amount: 200 },
        { name: 'Butter', unit: 'gram', amount: 50 },
        { name: 'dried nutmeg', unit: 'to taste', amount: null },
        { name: 'salt', unit: 'to taste', amount: null },
      ],
      steps: [
        {
          chef: 'Chef 1',
          title: 'Pasta Preparation',
          description: 'Cook the 100 gram Pasta and the 300 gram Egg Noodles in salted boiling water until tender. Drain and set aside.',
        },
        {
          chef: 'Chef 2',
          title: 'Caramelizing Onions',
          description:
            'Peel and thinly slice the Yellow Onions. Melt Butter in a pan and cook onions on medium-low heat for 20 minutes until golden brown.',
        },
        {
          chef: 'Chef 1',
          title: 'Grating and Seasoning',
          description: 'Grate the Chees and prepare the Heavy cream with a pinch of salt and dried nutmeg.',
        },
        {
          chef: 'Chef 2',
          title: 'Final Assembly',
          description: 'Add the cooked pasta and Heavy cream to the onions. Stir in the Chees until melted and creamy.',
        },
      ],
      likes: 14,
    },
  ];
}
