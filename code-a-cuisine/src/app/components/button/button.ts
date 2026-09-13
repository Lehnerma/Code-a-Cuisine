import { Component, input } from '@angular/core';
import {RouterLink} from '@angular/router';


@Component({
  imports: [RouterLink],
  selector: 'app-button',
  styleUrl: './button.scss',
  templateUrl: './button.html',
})
export class Button {
  className = input<string | string[]>();
  theme = input<'green' | 'creme'>();
  targetRoute = input<string | string[]>();
}
