import { Component } from '@angular/core';
import { MainHeader } from '../../components/main-header/main-header';
import { GenerateForm } from '../../components/generate-form/generate-form';
import { BodyWrapper } from '../../shared/body-wrapper/body-wrapper';
import { Button } from '../../components/button/button';

@Component({
  imports: [MainHeader, GenerateForm, BodyWrapper, Button],
  selector: 'app-generate-recipe',
  styleUrl: './generate-recipe.scss',
  templateUrl: './generate-recipe.html',
})
export class GenerateRecipe {}
