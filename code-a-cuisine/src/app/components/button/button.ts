import { NgTemplateOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [NgTemplateOutlet, RouterLink],
  selector: 'app-button',
  styleUrl: './button.scss',
  templateUrl: './button.html',
})
export class Button {
  className = input<string | string[]>();
  icon = input<'add' | 'bin' | 'check' | 'edit'>();
  theme = input<'green' | 'creme'>();
  targetRoute = input<string | string[]>();
  tag = input<'button' | 'a'>('button');
}
