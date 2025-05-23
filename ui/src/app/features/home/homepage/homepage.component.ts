import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { TextService } from '../../../core/api/v1/api/api';
import { FadeInDirective } from '../directives/fade-in.directive';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { CountdownComponent } from '../countdown/countdown.component';

@Component({
  selector: 'app-homepage',
  imports: [FadeInDirective, CountdownComponent, MatButtonModule, MatListModule, RouterLink, MatDividerModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  textService = inject(TextService);
  text = '';
  futureDate = new Date(2025, 6, 26);

  constructor() {
    this.textService.getText().subscribe((text) => {
      this.text = text.text;
    });
  }
}
