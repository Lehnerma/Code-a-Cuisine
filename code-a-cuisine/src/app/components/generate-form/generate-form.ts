import { Component } from '@angular/core';
import { DropdownComponent } from '../dropdown-component/dropdown-component';
import { Button } from '../button/button';

@Component({
  imports: [DropdownComponent, Button],
  selector: 'app-generate-form',
  styleUrl: './generate-form.scss',
  templateUrl: './generate-form.html',
})
export class GenerateForm {
  // todo validation for the serving to only numbers
}
