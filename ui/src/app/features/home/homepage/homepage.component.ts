import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { TextService } from '../../../core/api/v1/api/api';
import { FadeInDirective } from '../directives/fade-in.directive';

@Component({
  selector: 'app-homepage',
  imports: [FadeInDirective],
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
