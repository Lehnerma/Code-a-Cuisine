import { Component, computed, ElementRef, inject, signal } from '@angular/core';
import { DropdownComponent } from '../dropdown-component/dropdown-component';
import { Button } from '../button/button';
import { IngredientService } from '../../services/ingredient-service';
import { Ingredient } from '../../interfaces/ingredient';

/** Form for collecting ingredients, with inline edit/delete on the list below it. */
@Component({
  imports: [DropdownComponent, Button],
  selector: 'app-generate-form',
  styleUrl: './generate-form.scss',
  templateUrl: './generate-form.html',
  host: {
    '(document:click)': 'onDocumentClick($event)',
    '(document:keydown.escape)': 'cancelEdit()',
  },
})
export class GenerateForm {
  private ingredientService = inject(IngredientService);
  private elementRef = inject(ElementRef);

  ingredients = this.ingredientService.ingredients;

  name = signal('');
  servingSize = signal('');
  unit = signal<string | null>(null);

  editingId = signal<string | null>(null);
  editName = signal('');
  editServingSize = signal('');
  editUnit = signal<string | null>(null);

  // todo validation for the serving to only numbers
  canAdd = computed(() => this.name().trim().length > 0 && this.servingSize().trim().length > 0);
  canSave = computed(() => this.editName().trim().length > 0 && this.editServingSize().trim().length > 0);

  /**
   * Adds a new ingredient from the form fields and resets them.
   */
  addIngredient(): void {
    if (!this.canAdd()) return;
    this.ingredientService.add({
      name: this.name().trim(),
      servingSize: this.servingSize().trim(),
      unit: this.unit() ?? 'gram',
    });
    this.name.set('');
    this.servingSize.set('');
    this.unit.set(null);
  }

  /**
   * Enters inline edit mode for the given ingredient.
   */
  startEdit(ingredient: Ingredient): void {
    this.editingId.set(ingredient.id);
    this.editName.set(ingredient.name);
    this.editServingSize.set(ingredient.servingSize);
    this.editUnit.set(ingredient.unit);
  }

  /**
   * Commits the current edit draft and exits edit mode.
   */
  saveEdit(): void {
    const id = this.editingId();
    if (!id || !this.canSave()) return;
    this.ingredientService.update(id, {
      name: this.editName().trim(),
      servingSize: this.editServingSize().trim(),
      unit: this.editUnit() ?? 'gram',
    });
    this.editingId.set(null);
  }

  /**
   * Discards the current edit draft without saving.
   */
  cancelEdit(): void {
    this.editingId.set(null);
  }

  /**
   * Removes the given ingredient, cancelling its edit state first if needed.
   */
  removeIngredient(id: string): void {
    if (this.editingId() === id) {
      this.editingId.set(null);
    }
    this.ingredientService.remove(id);
  }

  /**
   * Cancels the active edit when a click lands outside the editing row.
   */
  onDocumentClick(event: MouseEvent): void {
    const id = this.editingId();
    if (!id) return;
    const row = (this.elementRef.nativeElement as HTMLElement).querySelector(`[data-ingredient-id="${id}"]`);
    if (row && !row.contains(event.target as Node)) {
      this.cancelEdit();
    }
  }
}
