import { Component } from '@angular/core';
import { MainHeader } from '../../shared/components/main-header/main-header';
import { DishesColImg } from '../../shared/components/dishes-col-img/dishes-col-img';

@Component({
  imports: [MainHeader, DishesColImg],
  selector: 'app-home-page',
  styleUrl: './home-page.scss',
  templateUrl: './home-page.html',
})
export class HomePage {}
