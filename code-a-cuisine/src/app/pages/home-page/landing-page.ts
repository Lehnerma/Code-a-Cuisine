import { Component } from '@angular/core';
import { MainHeader } from '../../components/main-header/main-header';
import {Button} from '../../components/button/button';

@Component({
  imports: [MainHeader, Button],
  selector: 'app-home-page',
  styleUrl: './landing-page.scss',
  templateUrl: './landing-page.html',
})
export class LandingPage {}
