import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { FormsModule, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule,
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    MatButton,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authService = inject(AuthenticationService);

  form = inject(FormBuilder).nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  get c() {
    return this.form.controls;
  }

  constructor() {}

  onLogin() {
    const loginModel = {
      email: this.c.email.value,
      password: this.c.password.value
    };

    this.authService.login(loginModel).subscribe();
  }
}
