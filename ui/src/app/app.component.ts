import { Component, inject } from '@angular/core';
import { LoginComponent } from './features/auth/login/login.component';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './core/layout/header/header.component';
import {FooterComponent} from './core/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
