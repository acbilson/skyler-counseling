import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authService = inject(AuthenticationService);

  constructor() {
  }

  onLogin() {
     const loginModel = {
      email: 'your-username',
      password: 'your-password'
    };
    this.authService.login(loginModel).subscribe();
  }
}
