import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { TextService } from '../../../core/api/v1/api/api';
import { LoginComponent } from '../../auth/login/login.component';
import { RegisterComponent } from '../../auth/register/register.component';

@Component({
  selector: 'app-homepage',
  imports: [LoginComponent, RegisterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  textService = inject(TextService);

  text = '';

  constructor() {
    this.textService.getText().subscribe((text) => {
      this.text = text.text;
    });
  }
}
