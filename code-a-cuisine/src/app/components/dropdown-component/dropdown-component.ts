import { Component, computed, input, signal } from '@angular/core';

/**
 * Generic pill-style dropdown. Falls back to the first option as label
 * when no explicit label is provided.
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
  selectedValue = signal<string | null>(null);
  listboxId = `dropdown-listbox-${Math.random().toString(36).slice(2)}`;

  displayLabel = computed(() => this.label() ?? this.options()[0] ?? '');

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
