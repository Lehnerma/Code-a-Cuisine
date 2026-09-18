import { Component, computed, ElementRef, inject, signal } from '@angular/core';
import { DropdownComponent } from '../dropdown-component/dropdown-component';
import { Button } from '../button/button';
import { IngredientService } from '../../services/ingredient-service';
import { Ingredient } from '../../interfaces/ingredient';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

/** Form for collecting ingredients, with inline edit/delete on the list below it. */
@Component({
  imports: [DropdownComponent, Button, ReactiveFormsModule],
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
  private fb = inject(FormBuilder);
  ingredients = this.ingredientService.ingredients;
  unit = signal<string | null>(null);

  editingId = signal<string | null>(null);
  editName = signal('');
  editServingSize = signal('');
  editUnit = signal<string | null>(null);

  canSave = computed(() => this.editName().trim().length > 0 && this.editServingSize().trim().length > 0);

  ingredientForm = this.fb.nonNullable.group({
    ingredientName: ['', [Validators.required, Validators.maxLength(30)]],
    servingSize: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
  });

  /**
   * Returns the error message for the ingredient name field, or null once it's valid.
   */
  ingredientNameError(): string | null {
    const control = this.ingredientForm.controls.ingredientName;
    if (!control.invalid || !control.touched) return null;
    if (control.errors?.['required']) return 'Enter an ingredient name';
    return 'Keep it under 30 characters';
  }

  /**
   * Returns the error message for the serving size field, or null once it's valid.
   */
  servingSizeError(): string | null {
    const control = this.ingredientForm.controls.servingSize;
    if (!control.invalid || !control.touched) return null;
    if (control.errors?.['required']) return 'Enter a serving size';
    return 'Use numbers only';
  }

  /**
   * Adds a new ingredient from the form fields and resets them.
   */
  addIngredient(): void {
    if (!this.ingredientForm.valid) return;
    const { ingredientName, servingSize } = this.ingredientForm.getRawValue();
    this.ingredientService.add({
      name: ingredientName.trim(),
      servingSize: servingSize.trim(),
      unit: this.unit() ?? 'gram',
    });
    this.ingredientForm.reset();
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
