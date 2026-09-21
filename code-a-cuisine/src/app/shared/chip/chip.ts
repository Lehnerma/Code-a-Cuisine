import { Component, input, output } from '@angular/core';

/**
 * Toggleable pill for multiselect option groups. Visual state is fully
 * controlled by the parent via the `checked` input; the component only
 * emits `toggled` on interaction and lets the parent update its selection.
 */
@Component({
  selector: 'app-chip',
  imports: [],
  templateUrl: './chip.html',
  styleUrl: './chip.scss',
})
export class Chip {
  label = input.required<string>();
  caption = input<string>();
  checked = input<boolean>(false);
  toggled = output<void>();
  inputId = `chip-input-${Math.random().toString(36).slice(2)}`;
}
