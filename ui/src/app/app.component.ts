import { Component, inject } from '@angular/core';
import { LoginComponent } from './features/auth/login/login.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'skyler-counseling';
}
