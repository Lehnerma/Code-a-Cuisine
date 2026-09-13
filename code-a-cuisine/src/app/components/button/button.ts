import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  imports: [NgClass],
  selector: 'app-button',
  styleUrl: './button.scss',
  templateUrl: './button.html',
})
export class Button {
  className = input<string | string[]>();
  theme = input<'green' | 'creme'>();
}
