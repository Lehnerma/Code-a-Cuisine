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
}
