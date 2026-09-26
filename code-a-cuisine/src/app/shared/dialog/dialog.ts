import { afterNextRender, Component, ElementRef, inject, input, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '../../components/button/button';

@Component({
  imports: [Button],
  selector: 'app-dialog',
  styleUrl: './dialog.scss',
  templateUrl: './dialog.html',
})
export class Dialog {
  private router = inject(Router);
  private dialogRef = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  title = input<string>('Here can stand yout title');
  message = input<string>('Here can you show your message to thte people how use the app');
  actionRoute = input<string>('/generate-recipe/preferences');

  /** Opens the dialog as soon as it has been rendered. */
  constructor() {
    afterNextRender(() => this.dialogRef().nativeElement.showModal());
  }

  /**
   * Navigates to the action route; used by the close button and the Escape key.
   * @param event optional cancel event whose native closing is suppressed
   */
  goBack(event?: Event): void {
    event?.preventDefault();
    void this.router.navigateByUrl(this.actionRoute());
  }
}
