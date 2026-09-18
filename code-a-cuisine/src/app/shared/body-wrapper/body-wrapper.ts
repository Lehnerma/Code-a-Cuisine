import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-body-wrapper',
  styleUrl: './body-wrapper.scss',
  templateUrl: './body-wrapper.html',
})
export class BodyWrapper {
  pdTop = input<string>();
  pdSide = input<string>();
}
