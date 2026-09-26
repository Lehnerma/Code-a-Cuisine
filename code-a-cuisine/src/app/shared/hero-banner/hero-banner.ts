import { Component, input } from '@angular/core';

export type HeroBannerVariant = 'ingredients' | 'directions';

@Component({
  imports: [],
  selector: 'app-hero-banner',
  styleUrl: './hero-banner.scss',
  templateUrl: './hero-banner.html',
})
export class HeroBanner {
  heading = input.required<string>();
  variant = input<HeroBannerVariant>('ingredients');
}
