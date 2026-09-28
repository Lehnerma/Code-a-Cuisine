import { Component, computed, inject, resource } from '@angular/core';
import { MainHeader } from '../../components/main-header/main-header';
import { RecipeCard } from '../../shared/recipe-card/recipe-card';
import { Dialog } from '../../shared/dialog/dialog';
import { SupabaseService } from '../../services/supabase-service';
import { CuisineCategoryCard } from '../../shared/cuisine-category-card/cuisine-category-card';
import { CUISINE_CATEGORIE_DATA, CuisineCategories } from '../../interfaces/cuisine-categories';
import { Button } from '../../components/button/button';

@Component({
  imports: [MainHeader, RecipeCard, Dialog, CuisineCategoryCard, Button],
  selector: 'app-cookbook',
  styleUrl: './cookbook.scss',
  templateUrl: './cookbook.html',
})
export class Cookbook {
  categoryList = Object.keys(CUISINE_CATEGORIE_DATA) as CuisineCategories[];

  /**
   * How many most-liked recipes are shown - change this to show more or fewer.
   */
  readonly topRecipesCount = 5;

  private supabaseService = inject(SupabaseService);

  /**
   * Loads the top `topRecipesCount` recipes ordered by likes from Supabase.
   */
  mostLikedResource = resource({
    loader: () => this.supabaseService.fetchMostLikedRecipes(this.topRecipesCount),
  });

  /**
   * The loaded most-liked recipes, or an empty array while loading.
   */
  mostLikedRecipes = computed(() => this.mostLikedResource.value() ?? []);
}
