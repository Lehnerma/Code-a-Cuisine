import { Component, computed, inject, input, resource } from '@angular/core';
import { SupabaseService } from '../../services/supabase-service';
import { MainHeader } from '../../components/main-header/main-header';
import { Tag } from '../../shared/tag/tag';
import { TitleCasePipe } from '@angular/common';

@Component({
  imports: [MainHeader, Tag, TitleCasePipe],
  selector: 'app-recipe',
  styleUrl: './recipe.scss',
  templateUrl: './recipe.html',
})
export class Recipe {
  id = input.required<string>();
  supabaseService = inject(SupabaseService);

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
}
