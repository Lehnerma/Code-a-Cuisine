import { NgTemplateOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
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
}
