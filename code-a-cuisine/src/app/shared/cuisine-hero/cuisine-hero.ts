import { Component, computed, input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { CUISINE_CATEGORIE_DATA, CuisineCategories } from '../../interfaces/cuisine-categories';

@Component({
  imports: [TitleCasePipe],
  selector: 'app-cuisine-hero',
  styleUrl: './cuisine-hero.scss',
  templateUrl: './cuisine-hero.html',
})
export class CuisineHero {
  category = input.required<CuisineCategories>();
  meta = computed(() => CUISINE_CATEGORIE_DATA[this.category()]);
}
