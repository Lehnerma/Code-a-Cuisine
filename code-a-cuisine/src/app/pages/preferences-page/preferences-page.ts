import { Component } from '@angular/core';
import { BodyWrapper } from '../../shared/body-wrapper/body-wrapper';
import { MainHeader } from '../../components/main-header/main-header';

@Component({
  imports: [BodyWrapper, MainHeader],
  selector: 'app-preferences-page',
  styleUrl: './preferences-page.scss',
  templateUrl: './preferences-page.html',
})
export class PreferencesPage {}
