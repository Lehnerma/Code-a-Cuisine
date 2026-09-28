import { Service } from '@angular/core';
import { environment } from '../../environments/environment';
import { createClient } from '@supabase/supabase-js';
import { Recipe } from '../interfaces/recipe';

@Service()
export class SupabaseService {
  supabase = createClient(environment.supabaseUrl, environment.supabasePublishKey);

  /**
   * Fetches the hole recipe data with the UUID of the recipe.
   * @param recipId Is the UUID of the recipe in the supabase.
   * @throws The Supabase error if the recipe could not be loaded, so `resource.error()` is set.
   */
  async fetchRecipe(recipId: string): Promise<Recipe> {
    const { data, error } = await this.supabase.from('recipes').select('*').eq('id', recipId).single();
    if (error) throw error;
    return data as Recipe;
  }

  /**
   * Counts the `likes` column of a recipe up or down (never below 0).
   * @param recipeId Is the UUID of the recipe in the supabase.
   * @param delta +1 for a like, -1 for taking it back.
   * @returns The new number of likes.
   * @throws The Supabase error if reading or updating fails.
   */
  async changeLikes(recipeId: string, delta: 1 | -1): Promise<number> {
    const { data: current, error: readError } = await this.supabase.from('recipes').select('likes').eq('id', recipeId).single();
    if (readError) throw readError;
    const likes = Math.max(0, (current.likes ?? 0) + delta);
    const { error } = await this.supabase.from('recipes').update({ likes }).eq('id', recipeId);
    if (error) throw error;
    return likes;
  }

  /**
   * Fetches the top recipes ordered by their `likes` count, descending.
   * @param limit How many recipes to return.
   * @throws The Supabase error if the recipes could not be loaded.
   */
  async fetchMostLikedRecipes(limit: number): Promise<Recipe[]> {
    const { data, error } = await this.supabase.from('recipes').select('*').order('likes', { ascending: false }).limit(limit);
    if (error) throw error;
    return data as Recipe[];
  }

  /**
   *
   * @param category Is the category with we want to fetch
   * @returns All recipes in the category class in an array with the right interface
   */
  async fetchCategorieRecipes(category: string): Promise<Recipe[]> {
    const { data, error } = await this.supabase.from('recipes').select('*').eq('cuisine_category', category);
    if (error) throw error;
    console.log('fetch categories: ', data);

    return data;
  }
}
