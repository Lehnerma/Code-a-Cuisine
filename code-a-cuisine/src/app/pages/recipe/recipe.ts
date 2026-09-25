import { Component, computed, inject, input, linkedSignal, resource, signal } from '@angular/core';
import { SupabaseService } from '../../services/supabase-service';
import { MainHeader } from '../../components/main-header/main-header';
import { Tag } from '../../shared/tag/tag';
import { TitleCasePipe } from '@angular/common';
import { HeroBanner } from '../../shared/hero-banner/hero-banner';
import { Button } from '../../components/button/button';

@Component({
  imports: [MainHeader, Tag, TitleCasePipe, HeroBanner, Button],
  selector: 'app-recipe',
  styleUrl: './recipe.scss',
  templateUrl: './recipe.html',
})
export class Recipe {
  id = input.required<string>();
  supabaseService = inject(SupabaseService);
  ingredientsOpen = signal(true);
  directionsOpen = signal(true);

  recipe = resource({
    params: () => ({ id: this.id() }),
    loader: ({ params }) => this.supabaseService.fetchRecipe(params.id),
  });

  /**
   * Creats a array of the chefs with the rigth writting.
   */
  chefs = computed(() => {
    const persons = this.recipe.value()?.persons ?? 1;
    return Array.from({ length: persons }, (_, i) => `Chef ${i + 1}`);
  });

  nutritionItems = computed(() => {
    const n = this.recipe.value()?.nutrition_per_portion;
    if (!n) return;
    return [
      { label: 'Energie', value: n.kcal, unit: 'kcal' },
      { label: 'Protein', value: n.protein, unit: 'g' },
      { label: 'Fat', value: n.fat, unit: 'g' },
      { label: 'Carbs', value: n.carbs, unit: 'g' },
    ];
  });

  private readonly likesStorageKey = 'liked-recipes';
  liked = linkedSignal(() => this.readLikedRecipes()[this.id()] === true);
  likeCount = linkedSignal(() => this.recipe.value()?.likes ?? 0);

  /**
   * Likes or unlikes the recipe: updates the UI right away, stores the state in the local storage
   * and counts the likes column in Supabase up or down. Reverts everything if Supabase fails.
   */
  async toggleLike(): Promise<void> {
    const liked = !this.liked();
    const delta = liked ? 1 : -1;
    this.applyLike(liked, delta);
    try {
      this.likeCount.set(await this.supabaseService.changeLikes(this.id(), delta));
    } catch {
      this.applyLike(!liked, -delta);
    }
  }

  /**
   * Sets the local like state, adjusts the shown like count and persists the state.
   * @param liked The new like state of this recipe.
   * @param delta +1 or -1, the change of the like count.
   */
  private applyLike(liked: boolean, delta: number): void {
    this.liked.set(liked);
    this.likeCount.update((count) => Math.max(0, count + delta));
    this.writeLikedRecipes({ ...this.readLikedRecipes(), [this.id()]: liked });
  }

  /**
   * Reads the map of recipe id -> liked from the local storage.
   */
  private readLikedRecipes(): Record<string, boolean> {
    try {
      return JSON.parse(localStorage.getItem(this.likesStorageKey) ?? '{}');
    } catch {
      return {};
    }
  }

  /**
   * Writes the map of recipe id -> liked to the local storage; ignores a blocked storage.
   * @param likedRecipes The complete map to store.
   */
  private writeLikedRecipes(likedRecipes: Record<string, boolean>): void {
    try {
      localStorage.setItem(this.likesStorageKey, JSON.stringify(likedRecipes));
    } catch {
      // storage blocked or full - the like still counts in Supabase
    }
  }
}
