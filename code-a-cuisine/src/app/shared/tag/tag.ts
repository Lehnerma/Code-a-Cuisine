import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tag',
  styleUrl: './tag.scss',
  templateUrl: './tag.html',
})
export class Tag {
  label = input<string>('');
  type = input<string>();
}
