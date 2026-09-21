import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-dialog',
  styleUrl: './dialog.scss',
  templateUrl: './dialog.html',
})
export class Dialog {
  title = input<string>('Here can stand yout title');
  message = input<string>('Here can you show your message to thte people how use the app');
  actionRoute = input<string>('/generate-recipe'); // default go back to the ingredients
}
