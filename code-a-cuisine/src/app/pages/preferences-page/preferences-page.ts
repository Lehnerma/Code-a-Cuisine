import { Component, signal, WritableSignal } from '@angular/core';
import { MainHeader } from '../../components/main-header/main-header';
import { Stepper } from '../../components/stepper/stepper';
import { Chip } from '../../components/chip/chip';
import { Button } from '../../components/button/button';
import { ChipOption } from '../../interfaces/chip-option';

@Component({
  imports: [MainHeader, Stepper, Chip, Button],
  selector: 'app-preferences-page',
  styleUrl: './preferences-page.scss',
  templateUrl: './preferences-page.html',
})
export class PreferencesPage {
  portions = signal(2);
  persons = signal(1);

  cooking_time = signal<string[]>([]);
  cuisine = signal<string[]>([]);
  diet = signal<string[]>([]);

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
}
