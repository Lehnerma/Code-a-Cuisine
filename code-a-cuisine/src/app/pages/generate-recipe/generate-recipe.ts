import { Component } from '@angular/core';
import { MainHeader } from '../../components/main-header/main-header';
import { GenerateForm } from '../../components/generate-form/generate-form';

@Component({
  imports: [MainHeader, GenerateForm],
  selector: 'app-generate-recipe',
  styleUrl: './generate-recipe.scss',
  templateUrl: './generate-recipe.html',
})
export class GenerateRecipe {}
