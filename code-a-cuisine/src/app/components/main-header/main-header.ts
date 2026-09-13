import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'main-header',
  styleUrl: './main-header.scss',
  templateUrl: './main-header.html',
})
export class MainHeader {
  imgSrc = input<string>('/assets/img/logo_green.png');
  backLink = input<string>(''); // todo check if it should be the last page or the home side
  backLinkName = input<string>();
  theme = input<'green' | 'creme'>('green');
  isHidden = input<boolean>(false);

  /**
   * We get the right src from the data-theme
   * @returns the string of the right img src
   */
  getImgSrc(theme: string): string {
    return theme === 'green' ? '/assets/img/logo_green.png' : '/assets/img/logo_creme.png';
  }
}
