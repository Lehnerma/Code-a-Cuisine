import { Component, inject, WritableSignal } from '@angular/core';
import { MainHeader } from '../../components/main-header/main-header';
import { Stepper } from '../../components/stepper/stepper';
import { Chip } from '../../shared/chip/chip';
import { Button } from '../../components/button/button';
import { ChipOption } from '../../interfaces/chip-option';
import { PreferencesService } from '../../services/preferences-service';
import { RecipeGenerateService } from '../../services/recipe-generate-service';
import { Router } from '@angular/router';

@Component({
  imports: [MainHeader, Stepper, Chip, Button],
  selector: 'app-preferences-page',
  styleUrl: './preferences-page.scss',
  templateUrl: './preferences-page.html',
})
export class PreferencesPage {
  preferencesService = inject(PreferencesService);
  recipeGenerateService = inject(RecipeGenerateService);
  router = inject(Router);

  cookingTimeOptions: ChipOption[] = [
    { value: 'quick', label: 'Quick', caption: 'up to 20min' },
    { value: 'medium', label: 'Medium', caption: '25-40min' },
    { value: 'complex', label: 'Complex', caption: 'over 45min' },
  ];

  cuisineOptions: ChipOption[] = [
    { value: 'german', label: 'German' },
    { value: 'italian', label: 'Italian' },
    { value: 'indian', label: 'Indian' },
    { value: 'japanese', label: 'Japanese' },
    { value: 'gourmet', label: 'Gourmet' },
    { value: 'fusion', label: 'Fusion' },
  ];

  dietOptions: ChipOption[] = [
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'keto', label: 'Keto' },
    { value: 'no-preferences', label: 'No preferences' },
  ];

  /**
   * Adds the value to the given multiselect signal if it is not yet
   * selected, otherwise removes it. Shared by all chip groups.
   */
  toggleSelection(group: WritableSignal<string[]>, value: string): void {
    group.update((selected) => (selected.includes(value) ? selected.filter((item) => item !== value) : [...selected, value]));
  }

  /**
   * Submits the two forms
   */
  onSubmit(event: SubmitEvent): void {
    event.preventDefault();
    this.recipeGenerateService.submit();
    this.router.navigate(['/recipe-results']);
  }
}
