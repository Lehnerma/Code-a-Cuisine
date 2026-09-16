import { Component, computed, input, model, signal } from '@angular/core';

/**
 * Generic pill-style dropdown. Falls back to the first option as label
 * when no explicit label is provided. `selectedValue` is a two-way model
 * so a parent can both read the selection and pre-fill it.
 */
@Component({
  selector: 'app-dropdown-component',
  imports: [],
  templateUrl: './dropdown-component.html',
  styleUrl: './dropdown-component.scss',
})
export class DropdownComponent {
  options = input<string[]>(['gram', 'piece', 'ml']);
  label = input<string>();
  className = input<string>();
  height = input<string>('100%');
  isOpen = signal(false);
  selectedValue = model<string | null>(null);
  listboxId = `dropdown-listbox-${Math.random().toString(36).slice(2)}`;

  displayLabel = computed(() => this.selectedValue() ?? this.label() ?? this.options()[0] ?? '');

  /**
   * Toggles the visibility of the option list.
   */
  toggle(): void {
    this.isOpen.update((open) => !open);
  }

  /**
   * Selects an option and closes the list.
   */
  selectOption(item: string): void {
    this.selectedValue.set(item);
    this.isOpen.set(false);
  }
}
