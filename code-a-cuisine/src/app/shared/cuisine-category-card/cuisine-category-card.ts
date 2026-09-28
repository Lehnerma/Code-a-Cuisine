import { Component, computed, input } from '@angular/core';
import { CUISINE_CATEGORIE_DATA, CuisineCategories } from '../../interfaces/cuisine-categories';
import { TitleCasePipe } from '@angular/common';

@Component({
  imports: [TitleCasePipe],
  selector: 'app-cuisine-category-card',
  styleUrl: './cuisine-category-card.scss',
  templateUrl: './cuisine-category-card.html',
})
export class CuisineCategoryCard {
  category = input.required<CuisineCategories>();
  meta = computed(() => CUISINE_CATEGORIE_DATA[this.category()]);
}
