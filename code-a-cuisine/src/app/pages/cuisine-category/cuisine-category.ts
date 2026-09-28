import { Component, computed, input } from '@angular/core';
import { MainHeader } from '../../components/main-header/main-header';
import { Dialog } from '../../shared/dialog/dialog';
import { CUISINE_CATEGORIE_DATA, CuisineCategoriesKey } from '../../interfaces/cuisine-categories';

@Component({
  imports: [MainHeader, Dialog],
  selector: 'app-cuisine-category',
  styleUrl: './cuisine-category.scss',
  templateUrl: './cuisine-category.html',
})
export class CuisineCategory {
  category = input.required<string>();

  /**
   * The matching category meta data, or undefined if the route param is not a known category.
   */
  categoryMeta = computed(() => {
    const key = this.category();
    return this.isValidCategory(key) ? CUISINE_CATEGORIE_DATA[key] : undefined;
  });

  /**
   * Narrows a raw route param to a known CuisineCategoriesKey.
   * @param key the value taken from the route parameter
   */
  private isValidCategory(key: string): key is CuisineCategoriesKey {
    return key in CUISINE_CATEGORIE_DATA;
  }
}
