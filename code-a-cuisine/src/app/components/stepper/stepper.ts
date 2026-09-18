import { Component, input, model } from '@angular/core';

/**
 * Reusable +/- counter for a bounded numeric value (e.g. portions, persons).
 * Bind the value two-way via `[(value)]`.
 */
@Component({
  selector: 'app-stepper',
  imports: [],
  templateUrl: './stepper.html',
  styleUrl: './stepper.scss',
})
export class Stepper {
  value = model(1);
  min = input(0);
  max = input<number>();
  label = input<string>('');

  /**
   * Increases the value by one, capped at `max()` when it is set.
   */
  increment(): void {
    const max = this.max();

    this.value.update((current) => (max === undefined ? current + 1 : Math.min(current + 1, max)));
  }

  /**
   * Decreases the value by one, never going below `min()`.
   */
  decrement(): void {
    const min = this.min();

    this.value.update((current) => Math.max(current - 1, min));
  }
}
