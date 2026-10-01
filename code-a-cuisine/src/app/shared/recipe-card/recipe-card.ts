import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Button } from '../../components/button/button';
import { Tag } from '../tag/tag';

@Component({
  imports: [Button, NgTemplateOutlet, RouterLink, Tag],
  selector: 'app-recipe-card',
  styleUrl: './recipe-card.scss',
  templateUrl: './recipe-card.html',
})
export class RecipeCard {
  variant = input<'result' | 'most-liked'>('result');
  recipeNumber = input<number>(1);
  recipeTitle = input<string>();
  cookingTime = input<number | string>(20);
  likes = input<number>(0);
  recipeId = input.required<string>();

  private readonly router = inject(Router);

  /** The page this card is shown on, so the recipe page can link back to it. */
  protected readonly backParams = { back: this.router.url };
}
