import { Component, computed, inject, input, linkedSignal, resource } from '@angular/core';
import { MainHeader } from '../../components/main-header/main-header';
import { Dialog } from '../../shared/dialog/dialog';
import { CuisineHero } from '../../shared/cuisine-hero/cuisine-hero';
import { CUISINE_CATEGORIE_DATA, CuisineCategoriesKey } from '../../interfaces/cuisine-categories';
import { Recipe } from '../../interfaces/recipe';
import { SupabaseService } from '../../services/supabase-service';
import { Tag } from '../../shared/tag/tag';
import { TitleCasePipe } from '@angular/common';

/**
 * Recipes shown per page.
 */
// todo set back to 15
const RECIPES_PER_PAGE = 4;

@Component({
  imports: [MainHeader, Dialog, CuisineHero, Tag, TitleCasePipe],
  selector: 'app-cuisine-category',
  styleUrl: './cuisine-category.scss',
  templateUrl: './cuisine-category.html',
})
export class CuisineCategory {
  category = input.required<string>();
  supabaseService = inject(SupabaseService);

  recipes = resource({
    params: () => ({ cat: this.category() }),
    loader: ({ params }) => this.supabaseService.fetchCategorieRecipes(params.cat),
    defaultValue: [],
  });

  /** Exposes the page size to the template for the continuous recipe numbering. */
  protected readonly recipesPerPage = RECIPES_PER_PAGE;

  /**
   * The matching category meta data, or undefined if the route param is not a known category.
   */
  categoryMeta = computed(() => {
    const key = this.category();
    return this.isValidCategory(key) ? CUISINE_CATEGORIE_DATA[key] : undefined;
  });

  /** Total number of pages, always at least 1. */
  totalPages = computed(() => Math.max(1, Math.ceil(this.recipes.value().length / RECIPES_PER_PAGE)));

  /** Current page; resets to 1 whenever the recipe list changes. */
  currentPage = linkedSignal<Recipe[], number>({
    source: this.recipes.value ?? [],
    computation: () => 1,
  });

  /** The recipes belonging to the current page only. */
  pagedRecipes = computed(() => {
    const start = (this.currentPage() - 1) * RECIPES_PER_PAGE;

    console.log(this.recipes.value().slice(start, start + RECIPES_PER_PAGE));

    return this.recipes.value().slice(start, start + RECIPES_PER_PAGE);
  });

  /** Pagination is only rendered when the recipes span more than one page. */
  showPagination = computed(() => this.recipes.value().length > RECIPES_PER_PAGE);

  /** Page-number items with ellipsis gaps. */
  pageItems = computed<(number | '…')[]>(() => {
    const total = this.totalPages();
    const current = this.currentPage();
    const wanted = [1, current - 1, current, current + 1, total];
    const visible = [...new Set(wanted)].filter((page) => page >= 1 && page <= total).sort((a, b) => a - b);
    return this.withEllipsis(visible);
  });

  /**
   * Navigates to a page, clamped to the valid range.
   * @param page the 1-based page number to open
   */
  goToPage(page: number): void {
    this.currentPage.set(Math.min(Math.max(1, page), this.totalPages()));
  }

  /** Goes to the previous page, if there is one. */
  prevPage(): void {
    this.goToPage(this.currentPage() - 1);
  }

  /** Goes to the next page, if there is one. */
  nextPage(): void {
    this.goToPage(this.currentPage() + 1);
  }

  /**
   * Inserts an ellipsis marker wherever the visible page numbers skip a gap.
   * @param visible ascending page numbers to render as buttons
   */
  private withEllipsis(visible: number[]): (number | '…')[] {
    const items: (number | '…')[] = [];
    visible.forEach((page, index) => {
      if (index > 0 && page - visible[index - 1] > 1) items.push('…');
      items.push(page);
    });
    return items;
  }

  /**
   * Narrows a raw route param to a known CuisineCategoriesKey.
   * @param key the value taken from the route parameter
   */
  private isValidCategory(key: string): key is CuisineCategoriesKey {
    return key in CUISINE_CATEGORIE_DATA;
  }
}
